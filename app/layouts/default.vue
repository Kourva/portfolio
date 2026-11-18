<template>
    <div>
        <!-- Accent-red progress bar during client-side navigation. -->
        <NuxtLoadingIndicator color="#d71921" :height="2" />
        <!-- Content is always rendered: the splash below only covers it briefly,
             so crawlers and no-JS clients get the full page instead of "loading". -->
        <DefaultHeader />
        <slot />
        <DefaultFooter />

        <div v-if="splash" class="loading-container" aria-hidden="true">
            <DotMatrixLoading
                :label="$t('loading.label')"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import DefaultHeader from '~/components/layout/DefaultHeader.vue';
import DotMatrixLoading from '~/components/feedback/DotMatrixLoading.vue';
import DefaultFooter from '~/components/layout/DefaultFooter.vue';
import { buildStructuredData, SITE_URL } from '~/constants/seo';

const { locale, locales } = useI18n();

/**
 * Emits, for the active locale:
 *  - <html lang="fa-IR" dir="rtl">
 *  - <link rel="alternate" hreflang="…"> for all five locales + x-default
 *  - og:locale / og:locale:alternate
 * All URLs are absolute because i18n.baseUrl is set to the production origin.
 */
const localeHead = useLocaleHead({ addDirAttribute: true, addSeoAttributes: true });

const activeLanguage = computed(() => {
    const match = locales.value.find((l) => l.code === locale.value);
    return (match?.language as string) ?? locale.value;
});

/**
 * The site root must be spelled one way everywhere: canonical, hreflang and
 * sitemap.xml all use `https://kourva.github.io/`. Locale paths keep the form
 * i18n generates (/tr, /ru, …), which is what the sitemap lists too.
 */
const withTrailingSlash = (url?: string) => (url === SITE_URL ? `${SITE_URL}/` : url);

/**
 * Canonical is read back from the self-referencing hreflang entry, so the
 * canonical and the hreflang for the same locale can never disagree about
 * the URL string (trailing slash, prefix, host).
 */
const canonical = computed(() => {
    const alternates = (localeHead.value.link ?? []).filter((l) => l.rel === 'alternate');
    const self = alternates.find((l) => (l as { hreflang?: string }).hreflang === activeLanguage.value);
    return withTrailingSlash(self?.href) ?? `${SITE_URL}/`;
});

const { t } = useI18n();
const pageTitle = computed(() => t('meta.title'));
const pageDescription = computed(() => t('meta.description'));

useHead(() => ({
    // Title and description come from the active locale, so searching your
    // name in Persian/Arabic/Russian/Turkish surfaces the matching version.
    title: pageTitle.value,
    htmlAttrs: localeHead.value.htmlAttrs,
    meta: [
        { name: 'description', content: pageDescription.value },
        { property: 'og:title', content: pageTitle.value },
        { property: 'og:description', content: pageDescription.value },
        { name: 'twitter:title', content: pageTitle.value },
        { name: 'twitter:description', content: pageDescription.value },
        ...(localeHead.value.meta ?? []),
        { property: 'og:url', content: canonical.value }
    ],
    link: [
        // Normalise the root href so every hreflang entry matches the sitemap.
        ...(localeHead.value.link ?? []).map((l) => ({ ...l, href: withTrailingSlash(l.href) })),
        { rel: 'canonical', href: canonical.value }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(buildStructuredData(activeLanguage.value))
        }
    ]
}));

const splash = ref<boolean>(true);

// 400ms instead of 1000ms: the overlay still hides the first paint, and every
// extra frame here is LCP debt on mobile.
onMounted(() => {
    const timer = setTimeout(() => splash.value = false, 400)
    onBeforeUnmount(() => clearTimeout(timer))
})

</script>

<style scoped>
.loading-container {
    position: fixed;
    inset: 0;
    z-index: 500;
    width: 100vw;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg);
    animation: splash-out 180ms var(--ease-out, ease-out) 220ms forwards;
}

@keyframes splash-out {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

@media (prefers-reduced-motion: reduce) {
    .loading-container {
        animation: none;
    }
}
</style>
