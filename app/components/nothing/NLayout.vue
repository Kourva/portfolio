<template>
    <section
        class="layout"
        :class="layoutClass"
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
}>(), {
    direction: 'v',
    columns: 3,
    maxWidth: 900,
    gap: 16
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

.layout-grid {
    display: grid;
}

@media (max-width: 768px) {
    .layout-h {
        flex-direction: column;
        align-items: stretch;
    }

    .layout-grid {
        grid-template-columns: 1fr !important;
        gap: var(--space-4, 16px) !important;
    }
}
</style>