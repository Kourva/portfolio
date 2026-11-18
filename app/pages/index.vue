<template>
    <main class="home">
        <div class="container">
            <NLayout direction="v">
                <!-- Language first, then the bridge connects it to WHO AM I:
                     inside the section they share a flex column with no gap. -->
                <NCard size="badges">
                    <div class="badges-inner">
                        <NTitle tag="span" variant="overline" color="muted">{{ $t('language.title') }}</NTitle>
                        <div class="badges-row">
                            <button
                                v-for="item in locales"
                                :key="item.code"
                                type="button"
                                class="lang-chip"
                                :class="{ 'lang-chip--active': item.code === locale }"
                                :lang="item.language"
                                :title="item.name"
                                :aria-current="item.code === locale ? 'true' : undefined"
                                @click="switchLanguage(item.code)"
                            >
                                {{ item.code.toUpperCase() }}
                            </button>
                        </div>
                    </div>
                </NCard>
                <NBridge direction="v" />
                <NCard id="about" size="wide">
                    <NTitle tag="span" variant="overline" color="muted">{{ $t('about.overline') }}</NTitle>
                    <NTitle tag="h1" variant="dot" style="margin-top: 12px">Kourva</NTitle>
                    <div class="about-body">
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 16px">
                            {{ $t('about.p1') }}
                        </NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                            {{ $t('about.p2') }}
                        </NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                            {{ $t('about.p3') }}
                        </NTitle>
                    </div>
                    <NTitle tag="span" variant="overline" color="accent" style="margin-top: 12px; display: block">
                        {{ $t('about.updated') }}
                    </NTitle>
                </NCard>
                <NBridge direction="v" />
                <NCard size="badges">
                    <div class="badges-inner">
                        <NTitle tag="span" variant="overline" color="muted">{{ $t('stack.title') }}</NTitle>
                        <div class="badges-row">
                            <img
                                v-for="tech in mainStack"
                                :key="tech.name"
                                :src="tech.icon"
                                :alt="tech.name"
                                :title="tech.name"
                                class="badge-img"
                                width="46"
                                height="46"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </NCard>
            </NLayout>

            <NLayout id="approach" direction="h">
                <NCard size="left" variant="accent">
                    <NTitle tag="span" variant="overline" color="muted">{{ $t('style.overline') }}</NTitle>
                    <NTitle tag="h2" variant="dot" style="margin-top: 12px">{{ $t('style.title') }}</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        {{ $t('style.body') }}
                    </NTitle>
                </NCard>
                <NBridge :direction="dir" />
                <NCard size="right">
                    <NTitle tag="span" variant="overline" color="muted">{{ $t('rules.overline') }}</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        {{ $t('rules.p1') }}
                    </NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        {{ $t('rules.p2') }}
                    </NTitle>
                </NCard>
            </NLayout>

            <NLayout id="process" direction="v">
                <NCard size="wide">
                    <NTitle tag="span" variant="overline" color="muted">{{ $t('process.overline') }}</NTitle>
                    <NTitle tag="h2" variant="dot" style="margin-top: 12px">{{ $t('process.title') }}</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                        {{ $t('process.body') }}
                    </NTitle>
                </NCard>

                <NBridge direction="v" />

                <NLayout direction="grid" :columns="3" :gap="16">
                    <NCard
                        v-for="item in process"
                        :key="item.key"
                        size="cell"
                        :variant="item.variant"
                    >
                        <NTitle tag="h3" variant="h4" style="margin-top: 8px">
                            {{ $t(`process.items.${item.key}.title`) }}
                        </NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            {{ $t(`process.items.${item.key}.body`) }}
                        </NTitle>
                    </NCard>
                </NLayout>
            </NLayout>

            <NLayout id="projects" direction="v">
                <NTitle tag="h2" variant="dot" color="accent" style="margin-top: 12px">
                    {{ $t('projects.title') }}
                </NTitle>
                <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                    {{ $t('projects.body') }}
                </NTitle>
            </NLayout>

            <!-- Asayroom -->
            <NLayout direction="h">
                <NCard size="thin" variant="dotted">
                    <NTitle tag="h3" variant="dot" style="margin-top: 12px">Asayroom</NTitle>
                                            <NTitle tag="p" variant="mono" color="muted" style="margin-top: 8px">
                        {{ $t('projects.asayroom.mono') }}
                    </NTitle>
                    <div class="project-icon-slot">
                        <AsayroomLogo/>
                    </div>
                </NCard>
                <NBridge :direction="dir" />
                <NCard size="grow">
                    <NTitle tag="h3" variant="h4">{{ $t('projects.asayroom.title') }}</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        {{ $t('projects.asayroom.body') }}
                    </NTitle>
                    <ul class="project-features">
                        <li>{{ $t('projects.asayroom.f1') }}</li>
                        <li>{{ $t('projects.asayroom.f2') }}</li>
                        <li>{{ $t('projects.asayroom.f3') }}</li>
                        <li>{{ $t('projects.asayroom.f4') }}</li>
                        <li>{{ $t('projects.asayroom.f5') }}</li>
                        <li>{{ $t('projects.asayroom.f6') }}</li>
                        <li>{{ $t('projects.asayroom.f7') }}</li>
                    </ul>
                    <div class="buttons">
                        <NButton
                            tag="a"
                            href="https://asayroom.ir"
                            target="_blank"
                            rel="noopener noreferrer"
                            :label="$t('projects.asayroom.cta')"
                            variant="default"
                        />
                    </div>
                </NCard>
            </NLayout>

            <!-- Nigc -->
            <div class="nigc-block">
                <NLayout direction="h">
                    <NCard size="grow">
                        <NTitle tag="h3" variant="h4">{{ $t('projects.nigc.title') }}</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                            {{ $t('projects.nigc.body') }}
                        </NTitle>
                        <ul class="project-features">
                            <li>{{ $t('projects.nigc.f1') }}</li>
                            <li>{{ $t('projects.nigc.f2') }}</li>
                            <li>{{ $t('projects.nigc.f3') }}</li>
                            <li>{{ $t('projects.nigc.f4') }}</li>
                            <li>{{ $t('projects.nigc.f5') }}</li>
                            <li>{{ $t('projects.nigc.f6') }}</li>
                            <li>{{ $t('projects.nigc.f7') }}</li>
                            <li>{{ $t('projects.nigc.f8') }}</li>
                            <li>{{ $t('projects.nigc.f9') }}</li>
                        </ul>
                        <div class="buttons">
                            <NButton
                                :label="$t('projects.nigc.pwa')"
                                tag="a"
                                href="https://es.nigc-ar.ir/pwa2"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="default"
                            />
                            <NButton
                                :label="$t('projects.nigc.crm')"
                                tag="a"
                                href="https://crm.nigc-ar.ir/"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="default"
                            />
                        </div>
                    </NCard>
                    <NBridge :direction="dir" />
                    <NCard size="thin" variant="dotted">
                        <NTitle tag="h3" variant="dot" style="margin-top: 12px">NIGC</NTitle>
                        <NTitle tag="p" variant="mono" color="muted" style="margin-top: 8px">
                            {{ $t('projects.nigc.mono') }}
                        </NTitle>
                        <div class="project-icon-slot">
                            <NigcLogo/>
                        </div>
                    </NCard>
                </NLayout>
                <NBridge direction="v" />
                <NLayout direction="h" >
                    <NCard size="grow" variant="dot-red">
                        <NTitle tag="h4" variant="dot" style="margin-top: 8px">{{ $t('projects.nigc.gaziom.title') }}</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            {{ $t('projects.nigc.gaziom.body') }}
                        </NTitle>
                        <div class="project-icon-slot">
                        </div>
                    </NCard>
                </NLayout>
            </div>

            <!-- Cafe Mahour -->
            <NLayout direction="h">
                <NCard size="thin" variant="dotted">
                    <NTitle tag="h3" variant="dot" style="margin-top: 12px">Cafe Mahour</NTitle>
                                            <NTitle tag="p" variant="mono" color="muted" style="margin-top: 8px">
                        {{ $t('projects.mahour.mono') }}
                    </NTitle>
                    <div class="project-icon-slot">
                        <CafeMahourLogo size="120" dot-color="#C5A981" bg-color="#129A42"/>
                    </div>
                </NCard>
                <NBridge :direction="dir" />
                <NCard size="grow">
                    <NTitle tag="h3" variant="h4">{{ $t('projects.mahour.title') }}</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        {{ $t('projects.mahour.body') }}
                    </NTitle>
                    <ul class="project-features">
                        <li>{{ $t('projects.mahour.f1') }}</li>
                        <li>{{ $t('projects.mahour.f2') }}</li>
                        <li>{{ $t('projects.mahour.f3') }}</li>
                        <li>{{ $t('projects.mahour.f4') }}</li>
                        <li>{{ $t('projects.mahour.f5') }}</li>
                        <li>{{ $t('projects.mahour.f6') }}</li>
                    </ul>
                    <div class="buttons">
                        <NButton
                            :label="$t('projects.mahour.cta')"
                            variant="default"
                            disabled
                        />
                    </div>
                </NCard>
            </NLayout>

            <!-- Baam -->
            <NLayout direction="h">
                <NCard size="grow">
                    <NTitle tag="h3" variant="h4">{{ $t('projects.baam.title') }}</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        {{ $t('projects.baam.body') }}
                    </NTitle>
                    <ul class="project-features">
                        <li>{{ $t('projects.baam.f1') }}</li>
                        <li>{{ $t('projects.baam.f2') }}</li>
                        <li>{{ $t('projects.baam.f3') }}</li>
                        <li>{{ $t('projects.baam.f4') }}</li>
                        <li>{{ $t('projects.baam.f5') }}</li>
                        <li>{{ $t('projects.baam.f6') }}</li>
                    </ul>
                    <div class="buttons">
                        <NButton
                            :label="$t('projects.baam.cta')"
                            variant="default"
                            disabled
                        />
                    </div>
                </NCard>
                <NBridge :direction="dir" />
                <NCard size="thin" variant="dotted">
                    <NTitle tag="h3" variant="dot" style="margin-top: 12px">Baam</NTitle>
                                            <NTitle tag="p" variant="mono" color="muted" style="margin-top: 8px">
                        {{ $t('projects.baam.mono') }}
                    </NTitle>
                    <div class="project-icon-slot">
                        <BaamLogo size="120" dot-color="#499df3"/>
                    </div>
                </NCard>
            </NLayout>

            <NLayout id="stack" direction="v">
                <NTitle tag="h2" variant="dot" style="margin-top: 12px">
                    {{ $t('touched.title') }}
                </NTitle>

                <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                    {{ $t('touched.body') }}
                </NTitle>

                <div class="digged-grid">
                    <div
                        v-for="item in digged"
                        :key="item.name"
                        class="digged-item"
                    >
                        <NTitle tag="span" variant="dot" color="accent" class="digged-index">
                            {{ $t(`touched.items.${item.key}.tag`) }}
                        </NTitle>
                        <NTitle tag="h3" variant="h4" color="default">
                            {{ item.name }}
                        </NTitle>
                        <NTitle tag="p" variant="body" color="secondary" class="digged-note">
                            {{ $t(`touched.items.${item.key}.note`) }}
                        </NTitle>
                    </div>
                </div>
            </NLayout>

            <NLayout id="ai" direction="v">
                <NCard size="wide" variant="dot-red">
                    <NTitle tag="h2" variant="dot" style="margin-top: 12px">{{ $t('ai.title') }}</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                        {{ $t('ai.body') }}
                    </NTitle>
                </NCard>

                <NBridge direction="v" />
                <NLayout direction="h">
                    <NCard size="third">
                        <NTitle tag="span" variant="mono" color="muted">{{ $t('ai.cards.ideas.label') }}</NTitle>
                        <NTitle tag="h3" variant="h4" style="margin-top: 8px">{{ $t('ai.cards.ideas.title') }}</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            {{ $t('ai.cards.ideas.body') }}
                        </NTitle>
                    </NCard>
                    <NBridge :direction="dir" />
                    <NCard size="third">
                        <NTitle tag="span" variant="mono" color="muted">{{ $t('ai.cards.design.label') }}</NTitle>
                        <NTitle tag="h3" variant="h4" style="margin-top: 8px">{{ $t('ai.cards.design.title') }}</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            {{ $t('ai.cards.design.body') }}
                        </NTitle>
                    </NCard>
                </NLayout>

                <NBridge direction="v" :offset="32" />
                <NLayout direction="h">
                    <NCard size="third">
                        <NTitle tag="span" variant="mono" color="muted">{{ $t('ai.cards.search.label') }}</NTitle>
                        <NTitle tag="h3" variant="h4" style="margin-top: 8px">{{ $t('ai.cards.search.title') }}</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            {{ $t('ai.cards.search.body') }}
                        </NTitle>
                    </NCard>
                    <NBridge :direction="dir" />
                    <NCard size="third">
                        <NTitle tag="span" variant="mono" color="muted">{{ $t('ai.cards.control.label') }}</NTitle>
                        <NTitle tag="h3" variant="h4" style="margin-top: 8px">{{ $t('ai.cards.control.title') }}</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            {{ $t('ai.cards.control.body') }}
                        </NTitle>
                    </NCard>
                </NLayout>

                <NBridge direction="v" />
                <NCard size="wide" variant="dotted">
                    <NTitle tag="span" variant="mono" color="muted">{{ $t('ai.fallback.label') }}</NTitle>
                    <NTitle tag="h3" variant="h4" style="margin-top: 8px">{{ $t('ai.fallback.title') }}</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                        {{ $t('ai.fallback.body') }}
                    </NTitle>
                </NCard>

                <NBridge direction="v" red />
                <NCard size="wide" variant="accent">
                    <NTitle tag="span" variant="overline" color="muted">{{ $t('ai.experiments.overline') }}</NTitle>
                    <NTitle tag="h3" variant="h4" style="margin-top: 8px">{{ $t('ai.experiments.title') }}</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                        {{ $t('ai.experiments.body') }}
                    </NTitle>
                    <div class="buttons">
                        <NButton
                            tag="a"
                            href="https://kowshan-ui-kit.pages.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            :label="$t('ai.experiments.kit')"
                            variant="default"
                        />
                        <NButton
                            tag="a"
                            href="https://github.com/Kourva/xnode"
                            target="_blank"
                            rel="noopener noreferrer"
                            :label="$t('ai.experiments.xnode')"
                            variant="default"
                        />
                    </div>
                </NCard>

                <NBridge direction="v" />
                <NCard size="wide">
                    <NTitle tag="span" variant="overline" color="muted">{{ $t('ai.agentic.overline') }}</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        {{ $t('ai.agentic.body') }}
                    </NTitle>
                </NCard>
            </NLayout>

            <NLayout id="work" direction="v">
                <NCard size="wide">
                    <NTitle tag="h2" variant="dot" style="margin-top: 12px">{{ $t('work.title') }}</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                        {{ $t('work.body') }}
                    </NTitle>
                </NCard>

                <NBridge direction="v" />
                <!-- These three cards wrap differently, so their heights are
                     evened out and the connectors fill the row. -->
                <NLayout direction="h" align="stretch">
                    <NCard size="third" variant="dot-red">
                        <NTitle tag="span" variant="mono" color="muted">{{ $t('work.now.label') }}</NTitle>
                        <NTitle tag="h3" variant="h4" style="margin-top: 8px">{{ $t('work.now.title') }}</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            {{ $t('work.now.body') }}
                        </NTitle>
                    </NCard>
                    <NBridge :direction="dir" fit="stretch" red />
                    <NCard size="third" variant="alert">
                        <NTitle tag="h3" variant="h4" style="margin-top: 8px">{{ $t('work.extra.title') }}</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            {{ $t('work.extra.body') }}
                        </NTitle>
                    </NCard>
                    <NBridge :direction="dir" fit="stretch" red />
                    <NCard size="third">
                        <NTitle tag="span" variant="mono" color="muted">{{ $t('work.freelance.label') }}</NTitle>
                        <NTitle tag="h3" variant="h4" style="margin-top: 8px">{{ $t('work.freelance.title') }}</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            {{ $t('work.freelance.body') }}
                        </NTitle>
                    </NCard>
                </NLayout>

                <NBridge direction="v" />

                <NCard id="contact" size="wide" variant="dotted-red">
                    <NTitle tag="span" variant="overline">{{ $t('contact.overline') }}</NTitle>
                    <NTitle tag="h3" variant="dot" color="accent" style="margin-top: 12px">
                        github.com/kourva
                    </NTitle>
                    <NTitle tag="p" variant="body" style="margin-top: 8px; opacity: 0.85">
                        {{ $t('contact.note') }}
                    </NTitle>
                    <div class="buttons">
                        <NButton
                            tag="a"
                            href="https://github.com/kourva"
                            target="_blank"
                            rel="noopener noreferrer"
                            :label="$t('contact.github')"
                            variant="primary"
                        />
                        <NButton
                            tag="a"
                            href="https://t.me/k0urv4"
                            target="_blank"
                            rel="noopener noreferrer"
                            :label="$t('contact.telegram')"
                        />
                        <NButton
                            tag="a"
                            href="https://instagram.com/k0urv4"
                            target="_blank"
                            rel="noopener noreferrer"
                            :label="$t('contact.instagram')"
                        />
                        <NButton
                            tag="a"
                            href="mailto:realkourva@proton.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            :label="$t('contact.email')"
                        />
                    </div>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 16px; opacity: 0.85">
                        {{ $t('contact.follow') }}
                    </NTitle>
                </NCard>
            </NLayout>
        </div>
    </main>
</template>

<script setup lang="ts">
import AsayroomLogo from '~/components/feedback/AsayroomLogo.vue';
import NBridge from '~/components/nothing/NBridge.vue';
import NCard from '~/components/nothing/NCard.vue';
import NLayout from '~/components/nothing/NLayout.vue';
import NTitle from '~/components/nothing/NTitle.vue';

import NuxtIcon from '~/assets/images/nuxt.webp';
import PythonIcon from '~/assets/images/python.webp';
import VueIcon from '~/assets/images/vue.webp';
import LaravelIcon from '~/assets/images/laravel.webp';
import NButton from '~/components/nothing/NButton.vue';
import NigcLogo from '~/components/feedback/NigcLogo.vue';
import CafeMahourLogo from '~/components/feedback/CafeMahourLogo.vue';
import BaamLogo from '~/components/feedback/BaamLogo.vue';

definePageMeta({
    name: 'home',
    layout: 'default'
})

const dir = useResponsiveDirection()

// Language switcher: navigates to the prefixed route of the chosen locale, so
// every language is a real, crawlable URL (/tr, /ru, /ar, /fa).
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const switchLanguage = (code: string) => {
    const path = switchLocalePath(code as 'en');
    if (path) return navigateTo(path);
};

const mainStack = [
    { name: 'Python', icon: PythonIcon },
    { name: 'Vue', icon: VueIcon },
    { name: 'Nuxt', icon: NuxtIcon },
    { name: 'Laravel', icon: LaravelIcon }
]

// Only keys + styling live here; every string is in i18n/locales/*.json.
const process = [
    { key: 'style', variant: 'default' as const },
    { key: 'motion', variant: 'default' as const },
    { key: 'security', variant: 'dotted-red' as const },
    { key: 'structure', variant: 'default' as const },
    { key: 'versionControl', variant: 'default' as const },
    { key: 'docs', variant: 'dotted' as const },
    { key: 'devops', variant: 'accent' as const },
    { key: 'state', variant: 'default' as const }
]

// Tool names stay literal (they are proper nouns); tag + note come from i18n.
const digged = [
    { key: 'django', name: 'Django' },
    { key: 'kivy', name: 'Kivy / Flet' },
    { key: 'web', name: 'HTML / CSS / JS / TS' },
    { key: 'bots', name: 'Telegram / telebot / PTB' },
    { key: 'sql', name: 'SQL / SQLite' },
    { key: 'linux', name: 'Linux Admin' },
    { key: 'security', name: 'XSS / SQLi / IDOR / DDoS' },
    { key: 'infra', name: 'Load Balancing' }
]
</script>

<style scoped>
.home {
    padding-block: var(--space-16);
}

.container {
    display: flex;
    flex-direction: column;
    gap: 64px;
}

.badges-row {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    height: 100%;
}

.badge-img {
    height: 46px;
    width: 46px;
    object-fit: contain;
    padding: 6px;
    background: var(--color-bg-surface);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    opacity: 0.55;
    filter: grayscale(100%) brightness(1.4);
    transition: opacity var(--duration-fast) var(--ease-out),
                filter var(--duration-fast) var(--ease-out),
                border-color var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
}

.badge-img:hover {
    opacity: 1;
    filter: grayscale(0%) brightness(1);
    border-color: var(--color-accent);
    transform: translateY(-2px);
}

.badges-inner {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    height: 100%;
}

.lang-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    min-width: 46px;
    padding: 0 10px;
    font-family: var(--font-mono, 'Lettera Mono');
    font-size: var(--fs-xs, 0.75rem);
    font-weight: 500;
    letter-spacing: var(--ls-wider, 0.15em);
    text-transform: uppercase;
    color: var(--color-text-muted);
    background: var(--color-bg-surface);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    cursor: pointer;
    transition: color var(--duration-fast) var(--ease-out),
                border-color var(--duration-fast) var(--ease-out),
                transform var(--duration-fast) var(--ease-out);
}

.lang-chip:hover {
    color: var(--color-text);
    border-color: var(--color-accent);
    transform: translateY(-2px);
}

.lang-chip--active {
    color: var(--color-text);
    border-color: var(--color-accent);
    background: var(--color-bg-hover);
}

.lang-chip:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
}

.nigc-block {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
}

.project-icon-slot {
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-features {
    margin-top: var(--space-4);
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.project-features li {
    position: relative;
    padding-left: 22px;
    font-family: var(--font-body, 'Inter');
    font-size: var(--fs-sm, 0.875rem);
    line-height: 1.5;
    color: var(--color-text-secondary);
}

.project-features li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.45em;
    width: 10px;
    height: 10px;
    background-image: radial-gradient(
        circle,
        var(--color-text-muted) 1px,
        transparent 1px
    );
    background-size: 3px 3px;
    background-position: 0 0;
}

.project-features li:nth-child(odd)::before {
    background-image: radial-gradient(
        circle,
        var(--color-accent) 1px,
        transparent 1px
    );
}

.digged-head {
    display: flex;
    align-items: center;
    gap: 10px;
}

.digged-grid {
    margin-top: var(--space-8);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8) var(--space-12);
}

.digged-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-left: 16px;
    border-left: 1px solid var(--color-accent);
}

.digged-index {
    font-size: 0.95rem;
    letter-spacing: 0.25em;
    opacity: 0.7;
}

.digged-note {
    font-size: var(--fs-sm, 0.875rem);
    margin-top: 4px;
}

.buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 10px;
}

/* Never let a label push a button past the card edge on narrow screens. */
.buttons > * {
    max-width: 100%;
}
</style>
