<template>
    <footer class="portfolio-footer">
        <div class="container">
            <div class="footer-inner">

                <div class="footer-left">
                    <NTitle tag="span" variant="dot">
                        Kourva
                    </NTitle>
                    <NTitle tag="p" variant="mono" color="secondary" class="footer-regard">
                        Thanks for scrolling. Built slow, kept simple.
                    </NTitle>
                </div>

                <div class="footer-right">
                    <NTitle tag="h1" variant="mono" color="accent" class="footer-note">
                        Design? It's by my OS — Nothing TECH.
                    </NTitle>
                    <NTitle tag="h1" variant="mono" color="accent" class="footer-year">
                        © {{ year }}
                    </NTitle>
                </div>

            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import NTitle from '../nothing/NTitle.vue';

const year = new Date().getFullYear()
</script>

<style scoped>
.portfolio-footer {
    margin-top: var(--space-16);
    padding-block: var(--space-8);
    border-top: 1px solid var(--color-border);
}

.footer-inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-8);
}

.footer-left {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.footer-regard {
    font-size: var(--fs-sm, 0.875rem);
    max-width: 40ch;
}

.footer-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
    text-align: right;
}

.footer-note {
    font-size: 0.8rem;
    letter-spacing: 0.15em;
}

.footer-year {
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    opacity: 0.8;
}

@media (max-width: 640px) {
    .footer-inner {
        flex-direction: column;
        align-items: flex-start;
    }
    .footer-right {
        align-items: flex-start;
        text-align: left;
    }
}
</style>