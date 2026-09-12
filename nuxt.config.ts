export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },

    css: ['~/assets/styles/main.css'],

    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            title: 'Kourva — Fullstack Developer',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Fullstack developer focused on Python and Linux workflows. Vue, Nuxt, Laravel, and Odoo.' },
                { name: 'theme-color', content: '#000000' },
                { name: 'color-scheme', content: 'dark' },
                { property: 'og:title', content: 'Kourva — Fullstack Developer' },
                { property: 'og:description', content: 'Six years into development, nine into Linux as my primary OS.' },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary_large_image' }
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
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