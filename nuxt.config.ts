import { SITE, SITE_URL, STRUCTURED_DATA } from './app/constants/seo'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },

    css: ['~/assets/styles/main.css'],

    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            title: SITE.title,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: SITE.description },
                {
                    name: 'robots',
                    content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
                },
                { name: 'author', content: SITE.name },
                { name: 'theme-color', content: '#000000' },
                { name: 'color-scheme', content: 'dark' },

                { property: 'og:type', content: 'profile' },
                { property: 'og:site_name', content: `${SITE.handle} — ${SITE.brand}` },
                { property: 'og:locale', content: SITE.locale },
                { property: 'og:title', content: SITE.title },
                { property: 'og:description', content: SITE.ogDescription },
                { property: 'og:url', content: SITE.home },
                { property: 'og:image', content: SITE.ogImage },
                { property: 'og:image:type', content: 'image/png' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:image:alt', content: SITE.ogImageAlt },
                { property: 'profile:first_name', content: 'Sahand' },
                { property: 'profile:last_name', content: 'Farazmehr' },

                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: SITE.title },
                { name: 'twitter:description', content: SITE.ogDescription },
                { name: 'twitter:image', content: SITE.ogImage },
                { name: 'twitter:image:alt', content: SITE.ogImageAlt }
            ],
            link: [
                { rel: 'canonical', href: SITE.home },
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'apple-touch-icon', href: '/favicon.svg' },
                { rel: 'sitemap', type: 'application/xml', href: `${SITE_URL}/sitemap.xml` },
                { rel: 'alternate', type: 'text/plain', href: `${SITE_URL}/llms.txt`, title: 'llms.txt' },
                { rel: 'me', href: SITE.github },
                { rel: 'me', href: SITE.telegram }
            ],
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify(STRUCTURED_DATA)
                }
            ]
        }
    },

    components: [
        { path: '~/components', pathPrefix: false }
    ],

    imports: {
        dirs: ['constants']
    }
})
