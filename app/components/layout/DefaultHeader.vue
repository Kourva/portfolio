<template>
    <header class="portfolio-header">
        <div class="container header-inner">
            <!-- Name / Brand -->
            <div class="brand-container">
                <DotMatrixHeader size="50" />
                <NuxtLink to="/" class="brand">
                    <span class="brand-name">Kourva</span>
                    <span class="brand-role overline">Fullstack - Python - Linux</span>
                </NuxtLink>
            </div>

            <!-- Links -->
            <nav class="nav-links">
                <a
                    v-for="link in links"
                    :key="link.label"
                    :href="link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="nav-link mono"
                >
                    {{ link.label }}
                </a>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import DotMatrixHeader from '../feedback/DotMatrixHeader.vue'

const links = [
    { label: 'GitHub', href: 'https://github.com/k0urv4' },
    { label: 'Email', href: 'mailto:realkourva@proton.me' },
    { label: 'Telegram', href: 'https://kourva.t.me' }
]
</script>

<style scoped>
.portfolio-header {
    position: sticky;
    top: 0;
    z-index: var(--z-sticky, 200);
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    padding: 1rem 0;
}

.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--header-height, 64px);
}

/* Brand */
.brand-container {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
}

.brand {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
}

.brand-name {
    font-family: 'NDot';
    font-size: var(--fs-3xl, 1.25rem);
    font-weight: 700;
    letter-spacing: var(--ls-tight, -0.02em);
    text-transform: uppercase;
    color: var(--color-text);
    line-height: 1;
}

.brand-role {
    font-size: 12px;
    letter-spacing: var(--ls-widest, 0.3em);
    color: var(--color-accent);
}

/* Links */
.nav-links {
    display: flex;
    gap: var(--space-6, 1.5rem);
}

.nav-link {
    font-family: var(--font-mono, 'Lettera Mono');
    font-size: var(--fs-xs, 0.75rem);
    font-weight: 500;
    letter-spacing: var(--ls-wider, 0.15em);
    text-transform: uppercase;
    color: var(--color-text-secondary);
    transition: color var(--duration-fast, 150ms) var(--ease-out);
    position: relative;
    white-space: nowrap;
}

.nav-link:hover {
    color: var(--color-accent);
}

.nav-link::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -6px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: var(--color-accent);
    transform: translateX(-50%) scale(0);
    transition: transform var(--duration-fast) var(--ease-out);
}

.nav-link:hover::after {
    transform: translateX(-50%) scale(1);
}

@media (max-width: 768px) {
    .header-inner {
        height: auto;
        min-height: var(--header-height, 64px);
        flex-wrap: wrap;
        gap: 12px;
    }

    .brand-role {
        display: none;
    }

    .nav-links {
        gap: var(--space-4, 1rem);
    }

    .nav-link {
        font-size: 0.65rem;
        letter-spacing: var(--ls-wide, 0.05em);
    }
}

@media (max-width: 400px) {
    .brand-name {
        font-size: var(--fs-2xl, 1rem);
    }

    .nav-links {
        gap: var(--space-3, 0.75rem);
    }

    .nav-link {
        font-size: 0.6rem;
    }
}
</style>