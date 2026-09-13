<template>
    <main class="home">
        <div class="container">
            <NLayout direction="v">
                <NCard size="wide">
                    <NTitle tag="span" variant="overline" color="muted">WHO AM I</NTitle>
                    <NTitle tag="h1" variant="dot" style="margin-top: 12px">Kourva</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 16px">
                            Six years into development, nine into Linux as my primary OS. I started
                            with pure Python, Telegram bots, Android apps with Kivy and Flet, and
                            API-driven tools that scratched my own itches. Django and a bit of HTML
                            pulled me toward the web.
                        </NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                            The last three years have been fullstack: Vue and Laravel alongside Odoo,
                            two jobs at once. The last year and a half, I've focused on Vue and Nuxt,
                            shipping in a small team with one backend developer.
                        </NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                            I won't pretend to know every inch of PHP, JS, or TS. I know what I need
                            to build real things, and that's carried me this far.
                        </NTitle>
                    </NTitle>
                    <NTitle tag="span" variant="overline" color="accent">
                        Updated: Sep 13 2026
                    </NTitle>
                </NCard>
                <NBridge direction="v" />
                <NCard size="badges">
                    <div class="badges-inner">
                        <NTitle tag="span" variant="overline" color="muted">Main Stack</NTitle>
                        <div class="badges-row">
                            <img
                                v-for="tech in mainStack"
                                :key="tech.name"
                                :src="tech.icon"
                                :alt="tech.name"
                                :title="tech.name"
                                class="badge-img"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </NCard>
            </NLayout>

            <NLayout direction="h">
                <NCard size="left" variant="accent">
                    <NTitle tag="span" variant="overline" color="muted">Style</NTitle>
                    <NTitle tag="h3" variant="dot" style="margin-top: 12px">How I Write</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        Solo by default. In pairs, I take the frontend.
                    </NTitle>
                </NCard>
                <NBridge :direction="dir" />
                <NCard size="right">
                    <NTitle tag="span" variant="overline" color="muted">The Rules</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        I prefer pure tech, plain CSS, minimal dependencies, code that
                        reads like it was written by one person on purpose. Every project
                        gets its own loaders and UI kit. No two should look alike.
                    </NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        Structured. Simple. Dynamic where it earns it.
                    </NTitle>
                </NCard>
            </NLayout>

            <NLayout direction="v">
                <NCard size="wide">
                    <NTitle tag="span" variant="overline" color="muted">Process</NTitle>
                    <NTitle tag="h2" variant="dot" style="margin-top: 12px">How I Work</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                        Eight main rules I follow on every project. Unless you don't want them!
                    </NTitle>
                </NCard>

                <NBridge direction="v" />

                <NLayout direction="grid" :columns="3" :gap="16">
                    <NCard
                        v-for="(item, i) in process"
                        :key="item.title"
                        size="cell"
                        :variant="item.variant"
                    >
                        <NTitle tag="h4" variant="h4" style="margin-top: 8px">
                            {{ item.title }}
                        </NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            {{ item.body }}
                        </NTitle>
                    </NCard>
                </NLayout>
            </NLayout>

            <NLayout direction="v">
                <NTitle tag="h1" variant="dot" color="accent" style="margin-top: 12px">
                    Things I've Built
                </NTitle>
                <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                    Real projects, not demos. Multi-app platforms, internal tools, and
                    fullstack systems — some public, some behind closed doors. All of
                    them built to run, not to showcase.
                </NTitle>
            </NLayout>

            <!-- Asayroom -->
            <NLayout direction="h">
                <NCard size="thin" variant="dotted">
                    <NTitle tag="h3" variant="dot" style="margin-top: 12px">Asayroom</NTitle>
                    <NTitle tag="p" variant="mono" color="muted" style="margin-top: 8px">
                        Vue 3 + Nuxt 4
                    </NTitle>
                    <div class="project-icon-slot">
                        <AsayroomLogo/>
                    </div>
                </NCard>
                <NBridge :direction="dir" />
                <NCard size="grow">
                    <NTitle tag="h4" variant="h4">Therapy Platform</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        A national platform for psychology, psychiatry, and therapy
                        services, built to serve kids, teens, adults, and couples
                        with different needs, schedules, and treatment styles.
                        Multi-language, in-person and online, at national and
                        international scale.
                    </NTitle>
                    <ul class="project-features">
                        <li>Heavy flow verifications, video and image level</li>
                        <li>Article system with up to 4 nested categories</li>
                        <li>Training and consulting packages</li>
                        <li>Full admin dashboard, almost everything is panel-controlled</li>
                        <li>Assessments and matching tests for customers</li>
                        <li>In-app wallets and payment gateways</li>
                        <li>Meeting handling with case history forms</li>
                    </ul>
                    <div class="buttons">
                        <NButton
                            tag="a"
                            href="https://asayroom.ir"
                            target="_blank"
                            rel="noopener noreferrer"
                            label="Open Asayroom"
                            variant="default"
                        />
                    </div>
                </NCard>
            </NLayout>

            <!-- Nigc -->
            <div class="nigc-block">
                <NLayout direction="h">
                    <NCard size="grow">
                        <NTitle tag="h4" variant="h4">National Iranian Gas Company</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                            Three separate Vue applications built for internal operations,
                            a CRM for staff, a PWA for field use, and a reward-based app
                            for engagement. All modern, all multi-theme, each with its
                            own visual identity rather than a shared template.
                        </NTitle>
                        <ul class="project-features">
                            <li>Three independent apps, CRM, PWA, Gaziom</li>
                            <li>Multi-theme support across all three</li>
                            <li>Unique design per app, no shared UI kit</li>
                            <li>Security-focused build for internal use</li>
                            <li>Modern, current-generation interfaces</li>
                            <li>Rich animations across the interface</li>
                            <li>Realtime photo taker for tasks</li>
                            <li>AI suggestions for usage</li>
                            <li>Built around gas thrift — how to use it properly</li>
                        </ul>
                        <div class="buttons">
                            <NButton
                                label="Open PWA App"
                                tag="a"
                                href="https://es.nigc-ar.ir/pwa2"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="default"
                            />
                            <NButton
                                label="Open CRM App"
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
                            Vue 3, CRM + PWA + Gaziom
                        </NTitle>
                        <div class="project-icon-slot">
                            <NigcLogo/>
                        </div>
                    </NCard>
                </NLayout>
                <NBridge direction="v" />
                <NLayout direction="h" >
                    <NCard size="grow" variant="dot-red">
                        <NTitle tag="h4" variant="dot" style="margin-top: 8px">GAZIOM</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            Reward-based PWA. Tasks, leaderboard, minimal profile,
                            video content.
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
                        Nuxt 3
                    </NTitle>
                    <div class="project-icon-slot">
                        <CafeMahourLogo size="120" dot-color="#C5A981" bg-color="#129A42"/>
                    </div>
                </NCard>
                <NBridge :direction="dir" />
                <NCard size="grow">
                    <NTitle tag="h4" variant="h4">A Cafe Built for Meetings</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        Not a normal cafe site. This one is designed around consultants
                        and brokers who need a quiet place to meet clients, reserve a
                        table, order from a menu, and get down to business. Full
                        restaurant logic behind a reservation-first front.
                    </NTitle>
                    <ul class="project-features">
                        <li>Cafe admin defines its own products, tea, food, full menu</li>
                        <li>Table reservations with packages and bundled products</li>
                        <li>Consultants and brokers book space to meet clients</li>
                        <li>Main admin controls site resources and content</li>
                        <li>Two-level admin: cafe owner and platform owner</li>
                        <li>Full restaurant flow, not a static menu page</li>
                    </ul>
                    <div class="buttons">
                        <NButton
                            label="This project is private"
                            variant="default"
                            disabled
                        />
                    </div>
                </NCard>
            </NLayout>

            <!-- Baam -->
            <NLayout direction="h">
                <NCard size="grow">
                    <NTitle tag="h4" variant="h4">Professional Qualification System</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        A platform for inspectors, evaluators, and auditors to prove
                        their professional readiness. Users build a resume from
                        scratch, pick the roles they want, and the system tells them
                        exactly what is missing to get there.
                    </NTitle>
                    <ul class="project-features">
                        <li>Built-in resume maker, skills, knowledge, capabilities, behaviours</li>
                        <li>Job selection and favorites</li>
                        <li>Automatic gap analysis per career path</li>
                        <li>Suggests assessments, courses, podcasts, articles</li>
                        <li>Tells users what to learn and achieve to be ready</li>
                        <li>Modern, minimal interface</li>
                    </ul>
                    <div class="buttons">
                        <NButton
                            label="This project is under the development"
                            variant="default"
                            disabled
                        />
                    </div>
                </NCard>
                <NBridge :direction="dir" />
                <NCard size="thin" variant="dotted">
                    <NTitle tag="h3" variant="dot" style="margin-top: 12px">Baam</NTitle>
                    <NTitle tag="p" variant="mono" color="muted" style="margin-top: 8px">
                        Nuxt 4
                    </NTitle>
                    <div class="project-icon-slot">
                        <BaamLogo size="120" dot-color="#499df3"/>
                    </div>
                </NCard>
            </NLayout>

            <NLayout direction="v">
                <NTitle tag="h1" variant="dot" style="margin-top: 12px">
                    Things I've Touched
                </NTitle>

                <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                    Not a skills list. Just tools and ideas I've crossed paths with,
                    some deeply, some only enough to know what they are.
                </NTitle>

                <div class="digged-grid">
                    <div
                        v-for="item in digged"
                        :key="item.name"
                        class="digged-item"
                    >
                        <NTitle tag="h1" variant="dot" color="accent" class="digged-index">
                            {{ item.tag }}
                        </NTitle>
                        <NTitle tag="h5" variant="h5" color="default">
                            {{ item.name }}
                        </NTitle>
                        <NTitle tag="p" variant="body" color="secondary" class="digged-note">
                            {{ item.note }}
                        </NTitle>
                    </div>
                </div>
            </NLayout>

            <NLayout direction="v">
                <NCard size="wide" variant="dot-red">
                    <NTitle tag="h2" variant="dot" style="margin-top: 12px">How I Use AI</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                        It's a tool, not a teammate. I use it for the boring parts and
                        keep the decisions for myself.
                    </NTitle>
                </NCard>

                <NBridge direction="v" />
                <NLayout direction="h">
                    <NCard size="third">
                        <NTitle tag="span" variant="mono" color="muted">IDEAS</NTitle>
                        <NTitle tag="h4" variant="h4" style="margin-top: 8px">Talking First</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            I bounce ideas off it before writing a line. Just conversation
                            to see what falls out.
                        </NTitle>
                    </NCard>
                    <NBridge :direction="dir" />
                    <NCard size="third">
                        <NTitle tag="span" variant="mono" color="muted">DESIGN</NTitle>
                        <NTitle tag="h4" variant="h4" style="margin-top: 8px">Boring Styles</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            Responsive rules, spacing math, repetitive CSS. The parts I
                            already know, just faster.
                        </NTitle>
                    </NCard>
                </NLayout>

                <NBridge direction="v" :offset="32" />
                <NLayout direction="h">
                    <NCard size="third">
                        <NTitle tag="span" variant="mono" color="muted">SEARCH</NTitle>
                        <NTitle tag="h4" variant="h4" style="margin-top: 8px">Replacing Manual Search</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            Instead of ten tabs, I ask once. Docs, error messages,
                            small syntax I forgot.
                        </NTitle>
                    </NCard>
                    <NBridge :direction="dir" />
                    <NCard size="third">
                        <NTitle tag="span" variant="mono" color="muted">CONTROL</NTitle>
                        <NTitle tag="h4" variant="h4" style="margin-top: 8px">Lead, Not Follow</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            I build the base and the structure. AI follows my rules,
                            not the other way around.
                        </NTitle>
                    </NCard>
                </NLayout>

                <NBridge direction="v" />
                <NCard size="wide" variant="dotted">
                    <NTitle tag="span" variant="mono" color="muted">FALLBACK</NTitle>
                    <NTitle tag="h4" variant="h4" style="margin-top: 8px">I Review, Not It</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                        When AI is wrong or unavailable, I am the fallback. Every output
                        gets read before it ships.
                    </NTitle>
                </NCard>

                <NBridge direction="v" red />
                <NCard size="wide" variant="accent">
                    <NTitle tag="span" variant="overline" color="muted">Built With It</NTitle>
                    <NTitle tag="h4" variant="h4" style="margin-top: 8px">A Vue / Nuxt UI Kit</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                        A minimal, modern component kit, still under development.
                        Every component follows the same rules: no dependencies,
                        dynamic where it earns it, structure first.
                    </NTitle>
                    <div class="buttons">
                        <NButton
                            tag="a"
                            href="https://kowshan-ui-kit.pages.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            label="Open Kit"
                            variant="default"
                        />
                    </div>
                </NCard>

                <NBridge direction="v" />
                <NCard size="wide">
                    <NTitle tag="span" variant="overline" color="muted">On Agentic AI</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 12px">
                        I don't ask agents to build me an app unless I'm prototyping
                        on a stack I don't know. Anything I plan to maintain, I
                        write myself. The base, the structure, the decisions, mine.
                        AI follows.
                    </NTitle>
                </NCard>
            </NLayout>

            <NLayout direction="v">
                <NCard size="wide">
                    <NTitle tag="h1" variant="dot" style="margin-top: 12px">How I Can Contribute</NTitle>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                        Three ways I take on work. Pick whichever fits.
                    </NTitle>
                </NCard>

                <NBridge direction="v" />
                <NLayout direction="h">
                    <NCard size="third" variant="dot-red">
                        <NTitle tag="span" variant="mono" color="muted">NOW</NTitle>
                        <NTitle tag="h4" variant="h4" style="margin-top: 8px">Currently Employed</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            I'm already working fullstack. Steady, focused, and not
                            looking to leave what I have.
                        </NTitle>
                    </NCard>
                    <NBridge :direction="dir" red />
                    <NCard size="third" variant="alert">
                        <NTitle tag="h4" variant="h4" style="margin-top: 8px">Open to Extra Work</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            I can take on additional companies alongside my current
                            role. More hours, more output, no overlap issues.
                        </NTitle>
                    </NCard>
                    <NBridge :direction="dir" red />
                    <NCard size="third">
                        <NTitle tag="span" variant="mono" color="muted">FREELANCE</NTitle>
                        <NTitle tag="h4" variant="h4" style="margin-top: 8px">Freelance Projects</NTitle>
                        <NTitle tag="p" variant="body" color="secondary" style="margin-top: 8px">
                            Small, well-scoped projects. Frontend, backend, or both.
                            Clear start, clear end.
                        </NTitle>
                    </NCard>
                </NLayout>

                <NBridge direction="v" />

                <NCard size="wide" variant="dotted-red">
                    <NTitle tag="span" variant="overline">Get in Touch</NTitle>
                    <NTitle tag="h3" variant="dot" color="accent" style="margin-top: 12px">
                        github.com/kourva
                    </NTitle>
                    <NTitle tag="p" variant="body" style="margin-top: 8px; opacity: 0.85">
                        Best way to reach me. Email and Telegram.
                    </NTitle>
                    <div class="buttons">
                        <NButton
                            tag="a"
                            href="https://github.com/kourva"
                            target="_blank"
                            rel="noopener noreferrer"
                            label="GitHub"
                            variant="primary"
                        />
                        <NButton
                            tag="a"
                            href="https://t.me/k0urv4"
                            target="_blank"
                            rel="noopener noreferrer"
                            label="Telegram"
                        />
                        <NButton
                            tag="a"
                            href="mailto:realkourva@proton.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            label="EMail"
                        />
                    </div>
                    <NTitle tag="p" variant="body" color="secondary" style="margin-top: 16px; opacity: 0.85">
                        Feel free to explore my github to see what i've done before ;)
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

import NuxtIcon from '~/assets/images/nuxt.png';
import PythonIcon from '~/assets/images/python.png';
import VueIcon from '~/assets/images/vue.png';
import LaravelIcon from '~/assets/images/laravel.png';
import NButton from '~/components/nothing/NButton.vue';
import NigcLogo from '~/components/feedback/NigcLogo.vue';
import CafeMahourLogo from '~/components/feedback/CafeMahourLogo.vue';
import BaamLogo from '~/components/feedback/BaamLogo.vue';

definePageMeta({
    name: 'home',
    layout: 'default'
})

const dir = useResponsiveDirection()

const mainStack = [
    { name: 'Python', icon: PythonIcon },
    { name: 'Vue', icon: VueIcon },
    { name: 'Nuxt', icon: NuxtIcon },
    { name: 'Laravel', icon: LaravelIcon }
]

const process = [
    {
        title: 'Style',
        body: 'Minimal and up to date. Nothing heavy, nothing dated. Every project gets its own look, not a recycled template.',
        variant: 'default' as const
    },
    {
        title: 'Motion',
        body: 'Light animation with weight. GSAP for the moments that matter, plain CSS everywhere else. Never decoration, always signal.',
        variant: 'default' as const
    },
    {
        title: 'Security',
        body: 'Encryption and security are not features, they are defaults. I treat every input as hostile until proven otherwise.',
        variant: 'dotted-red' as const
    },
    {
        title: 'Structure',
        body: 'Clean folders, clean assets. If a new dev cannot find where things live in 30 seconds, the structure failed.',
        variant: 'default' as const
    },
    {
        title: 'Version Control',
        body: 'Git from the first commit. Small branches, readable history, no force-pushes to shared branches. Ever.',
        variant: 'default' as const
    },
    {
        title: 'Docs',
        body: 'Optional until it is not. If someone else will read the code, they get a README that explains the why.',
        variant: 'dotted' as const
    },
    {
        title: 'DevOps',
        body: 'Small helpers that remove friction, deploy scripts, Makefiles, one-command setups. Management should be boring.',
        variant: 'accent' as const
    },
    {
        title: 'State',
        body: 'Dynamic where it counts. More control over loading, error, empty, and success states than most apps bother with.',
        variant: 'default' as const
    }
]

const digged = [
    {
        tag: 'BACKEND',
        name: 'Django',
        note: 'Enough to build real apps. Not my daily driver anymore.'
    },
    {
        tag: 'MOBILE',
        name: 'Kivy / Flet',
        note: 'Shipped a few Android apps with both. Flet felt lighter.'
    },
    {
        tag: 'WEB',
        name: 'HTML / CSS / JS / TS',
        note: 'Comfortable in the browser. TS when a project earns it.'
    },
    {
        tag: 'BOTS',
        name: 'Telegram / telebot / PTB',
        note: 'Dozens of bots over the years. Some still running.'
    },
    {
        tag: 'DATA',
        name: 'SQL / SQLite',
        note: 'I can read a schema and write the query. Not a DBA.'
    },
    {
        tag: 'SYSTEMS',
        name: 'Linux Admin',
        note: 'Down to chroot, systemd, and the ugly parts. Daily OS.'
    },
    {
        tag: 'SECURITY',
        name: 'XSS / SQLi / IDOR / DDoS',
        note: 'I know what they are and how to avoid them. Not a pentester.'
    },
    {
        tag: 'INFRA',
        name: 'Load Balancing',
        note: 'Theory only. Have not run it in production yet.'
    }
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
    gap: 10px;
    padding-top: 10px;
}
</style>