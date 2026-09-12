<template>
    <article
        class="ncard"
        :class="[sizeClass, variantClass]"
        :style="minHeight ? { minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight } : undefined"
    >
        <slot />
    </article>
</template>

<script setup lang="ts">
type Size =
    | 'wide'
    | 'left'
    | 'right'
    | 'cell'
    | 'third'
    | 'thin'
    | 'grow'
    | 'half'
    | 'badges'

type Variant =
    | 'default'
    | 'accent'
    | 'alert'
    | 'dotted'
    | 'dotted-red'
    | 'dot-red'

const props = withDefaults(defineProps<{
    size?: Size
    variant?: Variant
    minHeight?: number | string
}>(), {
    size: 'wide',
    variant: 'default'
})

const sizeClass = computed(() => `ncard-${props.size}`)
const variantClass = computed(() =>
    props.variant === 'default' ? '' : `ncard-${props.variant}`
)
</script>

<style scoped>
.ncard {
    background: var(--color-bg-elevated);
    border: 1px solid var(--color-border);
    border-radius: 24px;
    padding: var(--space-6);
    position: relative;
}

.ncard-wide { width: 100%; min-height: 100px; }
.ncard-left { width: 280px; min-height: 100px; }
.ncard-right { flex: 1; min-height: 100px; }
.ncard-cell { min-height: 160px; }
.ncard-third { flex: 1; min-height: 100px; }
.ncard-thin { width: 250px; min-height: 100px; }
.ncard-grow { flex: 1; min-height: 100px; }
.ncard-half { flex: 1; min-height: 100px; }
.ncard-badges { width: fit-content; min-width: 100px; height: fit-content; }

.ncard-accent {
    border-color: var(--color-accent);
}

.ncard-accent::before,
.ncard-dot-red::before {
    content: '';
    position: absolute;
    top: 16px;
    right: 16px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-accent);
}

.ncard-alert {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: #ffffff;
}

.ncard-dotted {
    background-image: radial-gradient(
        circle,
        var(--color-border) 1px,
        transparent 1px
    );
    background-size: 16px 16px;
    background-color: var(--color-bg-elevated);
}

.ncard-dotted-red {
    background-image: radial-gradient(
        circle,
        rgba(215, 25, 33, 0.35) 1px,
        transparent 1px
    );
    background-size: 16px 16px;
    background-color: var(--color-bg-elevated);
    border-color: var(--color-accent);
}

</style>