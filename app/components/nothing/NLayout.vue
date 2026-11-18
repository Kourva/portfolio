<template>
    <section
        class="layout"
        :class="[layoutClass, `layout-align-${align}`]"
        :style="layoutStyle"
    >
        <slot />
    </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    direction?: 'v' | 'h' | 'grid'
    columns?: number
    maxWidth?: number
    gap?: number
    /**
     * Cross-axis alignment for `direction="h"` rows.
     * `start` (default) keeps each card at its natural height, so rows with
     * deliberately different cards (project rows) keep their shape.
     * `stretch` evens the cards out — use it where unequal heights leave a
     * connector hanging, e.g. the work/NOW row.
     */
    align?: 'start' | 'stretch'
}>(), {
    direction: 'v',
    columns: 3,
    maxWidth: 900,
    gap: 16,
    align: 'start'
})

const layoutClass = computed(() => `layout-${props.direction}`)

const layoutStyle = computed(() => {
    const base: Record<string, string> = {
        maxWidth: `${props.maxWidth}px`
    }
    if (props.direction === 'grid') {
        base.gridTemplateColumns = `repeat(${props.columns}, 1fr)`
        base.gap = `${props.gap}px`
    }
    return base
})
</script>

<style scoped>
.layout {
    display: flex;
    margin-inline: auto;
    width: 100%;
}

.layout-v {
    flex-direction: column;
}

.layout-h {
    flex-direction: row;
    align-items: flex-start;
}

/* Opt-in equal heights: connectors line up however much text a card wraps. */
.layout-align-stretch.layout-h {
    align-items: stretch;
}

.layout-grid {
    display: grid;
}

@media (max-width: 768px) {
    /* Stacked, so cards must fill the width regardless of the align prop. */
    .layout-h,
    .layout-align-stretch.layout-h {
        flex-direction: column;
        align-items: stretch;
    }

    .layout-grid {
        grid-template-columns: 1fr !important;
        gap: var(--space-4, 16px) !important;
    }
}
</style>