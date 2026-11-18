import { SITE, SITE_URL } from './app/constants/seo'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },

    modules: ['@nuxtjs/i18n'],

    // Multilingual: English keeps the root URL, every other locale gets a
    // crawlable prefix (/tr, /ru, /ar, /fa). Distinct URLs are the only way
    // hreflang can work — a single URL with a client-side switch is invisible
    // to search engines.
    i18n: {
        baseUrl: SITE_URL,
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        langDir: 'locales',
        // Runtime config: English fallback for untranslated keys.
        vueI18n: './i18n.config.ts',
        locales: [
            { code: 'en', language: 'en-US', name: 'English', dir: 'ltr', file: 'en.json' },
            { code: 'tr', language: 'tr-TR', name: 'Türkçe', dir: 'ltr', file: 'tr.json' },
            { code: 'ru', language: 'ru-RU', name: 'Русский', dir: 'ltr', file: 'ru.json' },
            { code: 'ar', language: 'ar-SA', name: 'العربية', dir: 'rtl', file: 'ar.json' },
            { code: 'fa', language: 'fa-IR', name: 'فارسی', dir: 'rtl', file: 'fa.json' }
        ],
        // No automatic browser-language redirect: it hides pages from crawlers
        // and makes the switcher's choice impossible to predict.
        detectBrowserLanguage: false
    },

    // Every locale route must exist as static HTML, otherwise its hreflang
    // target 404s and Google drops the whole cluster.
    nitro: {
        prerender: {
            routes: ['/', '/tr', '/ru', '/ar', '/fa']
        }
    },

    css: ['~/assets/styles/main.css'],

    // Inline the stylesheets into each prerendered page: no render-blocking
    // CSS requests, which is what mobile LCP/FCP were waiting on.
    features: {
        inlineStyles: true
    },

    app: {
        head: {
            // lang/dir, title, description, og:locale and hreflang are all set
            // per locale in the layout, from i18n/locales/*.json.
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'robots',
                    content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
                },
                { name: 'author', content: SITE.name },
                { name: 'theme-color', content: '#000000' },
                { name: 'color-scheme', content: 'dark' },

                // Open Graph — WhatsApp, Telegram, LinkedIn, Slack, Discord, Facebook
                { property: 'og:type', content: 'profile' },
                { property: 'og:site_name', content: `${SITE.handle} — ${SITE.brand}` },

                { property: 'og:image', content: SITE.ogImage },
                { property: 'og:image:type', content: 'image/png' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:image:alt', content: SITE.ogImageAlt },
                { property: 'profile:first_name', content: 'Sahand' },
                { property: 'profile:last_name', content: 'Farazmehr' },

                // Twitter / X card
                { name: 'twitter:card', content: 'summary_large_image' },

                { name: 'twitter:image', content: SITE.ogImage },
                { name: 'twitter:image:alt', content: SITE.ogImageAlt }
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'apple-touch-icon', href: '/favicon.svg' },
                { rel: 'sitemap', type: 'application/xml', href: `${SITE_URL}/sitemap.xml` },
                { rel: 'alternate', type: 'text/plain', href: `${SITE_URL}/llms.txt`, title: 'llms.txt' },
                // Identity links: these tie the GitHub and Telegram accounts to this site.
                { rel: 'me', href: SITE.github },
                { rel: 'me', href: SITE.telegram }
            ]
            // canonical, og:url, og:locale and hreflang are set per locale in the layout.
        }
    },

    components: [
        { path: '~/components', pathPrefix: false }
    ],

    imports: {
        dirs: ['constants']
    }
})
