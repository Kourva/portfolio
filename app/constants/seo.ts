/**
 * Single source of truth for every SEO signal on the site.
 * Imported by nuxt.config.ts so the same values drive <head>, JSON-LD and the
 * static files in public/ (robots.txt, sitemap.xml, llms.txt).
 *
 * Change the canonical origin in ONE place: SITE_URL.
 */
export const SITE_URL = 'https://kourva.github.io'

export const SITE = {
    url: SITE_URL,
    home: `${SITE_URL}/`,
    name: 'Sahand Farazmehr',
    nativeName: 'سهند فرازمهر',
    handle: 'Kourva',
    brand: 'Kowshan',
    title: 'Sahand Farazmehr (Kourva) — Fullstack Python Developer',
    shortTitle: 'Kourva — Fullstack Python Developer',
    description:
        'Sahand Farazmehr (Kourva) — fullstack Python developer building production platforms with Django, Vue 3, Nuxt 4 and Laravel. Six years in, remote-first from Iran.',
    ogDescription:
        'Fullstack Python developer: Django, Vue 3, Nuxt 4 and Laravel. Real platforms for therapy, energy, and hospitality — not demos.',
    email: 'realkourva@proton.me',
    city: 'Ardabil',
    region: 'Ardabil',
    country: 'IR',
    github: 'https://github.com/kourva',
    telegram: 'https://t.me/k0urv4',
    instagram: 'https://instagram.com/k0urv4',
    uiKit: 'https://kowshan-ui-kit.pages.dev/',
    ogImage: `${SITE_URL}/og.png`,
    ogImageAlt:
        'Kourva — Sahand Farazmehr, fullstack Vue and Nuxt developer, portfolio homepage',
    // Full ISO 8601 with the Iran offset — Google requires a datetime, not a bare date.
    lastUpdated: '2026-11-18T00:00:00+03:30',
    locale: 'en_US'
} as const

const PERSON_ID = `${SITE_URL}/#person`
const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const PROFILE_ID = `${SITE_URL}/#profilepage`
const BREADCRUMB_ID = `${SITE_URL}/#breadcrumb`

/**
 * One @graph instead of five separate <script> blocks: every node is wired by
 * @id, so Google reads Person, Kowshan, the site and the projects as a single
 * connected entity instead of orphaned fragments.
 */
export const buildStructuredData = (inLanguage: string = 'en') => ({
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': PERSON_ID,
            name: SITE.name,
            // Latin, Persian and Cyrillic spellings, so a name search in any of
            // the site's languages resolves to this person.
            alternateName: [SITE.handle, SITE.name, SITE.nativeName, 'Саханд Фаразмехр', 'k0urv4'],
            url: SITE.home,
            image: SITE.ogImage,
            jobTitle: 'Fullstack Python Developer',
            description:
                'Fullstack Python developer with six years of experience and nine years of daily Linux use. Builds production platforms with Django, Vue 3, Nuxt 4 and Laravel.',
            email: `mailto:${SITE.email}`,
            address: {
                '@type': 'PostalAddress',
                addressLocality: SITE.city,
                addressRegion: SITE.region,
                addressCountry: SITE.country
            },
            // areaServed lives on the Organization node: it is not a Person property.
            sameAs: [SITE.github, SITE.telegram, SITE.instagram, SITE.uiKit],
            // Stable, non-URL identifier for this exact person entity.
            identifier: {
                '@type': 'PropertyValue',
                propertyID: 'KourvaPersonID',
                value: 'sahand-farazmehr'
            },
            knowsAbout: [
                'Vue.js',
                'Nuxt',
                'Laravel',
                'PHP',
                'Python',
                'TypeScript',
                'JavaScript',
                'Django',
                'Odoo',
                'Linux administration',
                'SQL',
                'Kivy',
                'Flet',
                'Telegram Bot API',
                'Web application security',
                'CSS',
                'GSAP'
            ],
            hasOccupation: {
                '@type': 'Occupation',
                name: 'Fullstack Python Developer',
                skills: 'Python, Django, Vue 3, Nuxt 4, Laravel, PHP, TypeScript, Linux, web security',
                occupationLocation: { '@type': 'Country', name: 'Iran' }
            },
            worksFor: { '@id': ORG_ID },
            knowsLanguage: [
                { '@type': 'Language', name: 'Persian', alternateName: 'fa' },
                { '@type': 'Language', name: 'English', alternateName: 'en' }
            ],
            interactionStatistic: [
                {
                    '@type': 'InteractionCounter',
                    name: 'GitHub followers',
                    interactionType: { '@type': 'FollowAction' },
                    userInteractionCount: 1753
                },
                {
                    '@type': 'InteractionCounter',
                    name: 'GitHub stars earned',
                    interactionType: { '@type': 'LikeAction' },
                    userInteractionCount: 942
                }
            ],
            // knownFor is not a Schema.org property; subjectOf is the valid link
            // to the work this person is known for.
            subjectOf: {
                // SoftwareSourceCode, not CreativeWork: codeRepository and
                // programmingLanguage are only valid on this subclass.
                '@type': 'SoftwareSourceCode',
                '@id': 'https://github.com/Kourva/AwesomeChatGPTBot',
                name: 'AwesomeChatGPTBot',
                description:
                    'Free and rich-feature ChatGPT bot for Telegram, written in Python — 130 stars on GitHub.',
                url: 'https://github.com/Kourva/AwesomeChatGPTBot',
                codeRepository: 'https://github.com/Kourva/AwesomeChatGPTBot',
                programmingLanguage: 'Python',
                author: { '@id': PERSON_ID }
            }
        },
        {
            '@type': 'Organization',
            '@id': ORG_ID,
            name: SITE.brand,
            alternateName: SITE.handle,
            url: SITE.home,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/favicon.svg`,
                width: 56,
                height: 56
            },
            image: SITE.ogImage,
            description:
                'Kowshan is a small independent software studio — three developers and one designer — building web platforms with Python, Django, Vue, Nuxt and Laravel.',
            founder: { '@id': PERSON_ID },
            email: `mailto:${SITE.email}`,
            address: {
                '@type': 'PostalAddress',
                addressLocality: SITE.city,
                addressRegion: SITE.region,
                addressCountry: SITE.country
            },
            areaServed: [
                { '@type': 'Country', name: 'Iran' },
                { '@type': 'Place', name: 'Worldwide (remote)' }
            ],
            numberOfEmployees: {
                '@type': 'QuantitativeValue',
                minValue: 3,
                maxValue: 4
            },
            sameAs: [SITE.github, SITE.instagram, SITE.uiKit],
            contactPoint: [
                {
                    '@type': 'ContactPoint',
                    contactType: 'project inquiries',
                    email: `mailto:${SITE.email}`,
                    availableLanguage: ['en', 'fa']
                }
            ]
        },
        {
            '@type': 'WebSite',
            '@id': WEBSITE_ID,
            url: SITE.home,
            name: SITE.shortTitle,
            alternateName: 'Kourva Portfolio',
            description: SITE.description,
            inLanguage,
            publisher: { '@id': PERSON_ID },
            copyrightHolder: { '@id': PERSON_ID }
        },
        {
            '@type': 'ProfilePage',
            '@id': PROFILE_ID,
            url: SITE.home,
            name: SITE.title,
            description: SITE.description,
            isPartOf: { '@id': WEBSITE_ID },
            about: { '@id': PERSON_ID },
            mainEntity: { '@id': PERSON_ID },
            inLanguage,
            dateModified: SITE.lastUpdated,
            primaryImageOfPage: {
                '@type': 'ImageObject',
                url: SITE.ogImage,
                width: 1200,
                height: 630,
                caption: SITE.ogImageAlt
            },
            breadcrumb: { '@id': BREADCRUMB_ID },
            hasPart: [
                {
                    '@type': 'SoftwareApplication',
                    name: 'Asayroom',
                    applicationCategory: 'HealthApplication',
                    operatingSystem: 'Web',
                    url: 'https://asayroom.ir',
                    description:
                        'National therapy platform for psychology, psychiatry and counselling — multilingual, in-person and online, with video verification, nested article categories, assessments and in-app payments.',
                    author: { '@id': PERSON_ID }
                },
                {
                    '@type': 'SoftwareApplication',
                    name: 'NIGC CRM',
                    applicationCategory: 'BusinessApplication',
                    operatingSystem: 'Web',
                    url: 'https://crm.nigc-ar.ir/',
                    description:
                        'Internal CRM for the National Iranian Gas Company, built as one of three independent Vue applications with its own visual identity.',
                    author: { '@id': PERSON_ID }
                },
                {
                    '@type': 'SoftwareApplication',
                    name: 'NIGC Field PWA',
                    applicationCategory: 'BusinessApplication',
                    operatingSystem: 'Web',
                    url: 'https://es.nigc-ar.ir/pwa2',
                    description:
                        'Progressive web app for field operations at the National Iranian Gas Company, with an in-app photo capture flow for tasks.',
                    author: { '@id': PERSON_ID }
                },
                {
                    '@type': 'SoftwareApplication',
                    name: 'Cafe Mahour',
                    applicationCategory: 'BusinessApplication',
                    operatingSystem: 'Web',
                    description:
                        'Reservation-first platform for a cafe built around consultants and brokers: table booking, bundled packages, menu and a two-level admin.',
                    author: { '@id': PERSON_ID }
                },
                {
                    '@type': 'SoftwareApplication',
                    name: 'Baam',
                    applicationCategory: 'BusinessApplication',
                    operatingSystem: 'Web',
                    description:
                        'Professional qualification platform for inspectors, evaluators and auditors: resume builder, job selection and automatic skill-gap analysis.',
                    author: { '@id': PERSON_ID }
                }
            ]
        },
        {
            '@type': 'BreadcrumbList',
            '@id': BREADCRUMB_ID,
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: SITE.home
                }
            ]
        }
    ]
})
