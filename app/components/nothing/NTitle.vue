<template>
    <component
        :is="tag"
        class="ntitle"
        :class="[variantClass, colorClass]"
    >
        <slot>{{ text }}</slot>
    </component>
</template>

<script setup lang="ts">
type Variant = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'mono' | 'overline' | 'dot'
type Color = 'default' | 'secondary' | 'muted' | 'accent' | 'inverted'

const props = withDefaults(defineProps<{
    text?: string
    tag?: string
    variant?: Variant
    color?: Color
}>(), {
    text: '',
    tag: 'h2',
    variant: 'h3',
    color: 'default'
})

const variantClass = computed(() => `ntitle-${props.variant}`)
const colorClass = computed(() => `ntitle-color-${props.color}`)
</script>

<style scoped>
.ntitle {
    margin: 0;
    line-height: 1.1;
}

.ntitle-display {
    font-family: var(--font-display, 'NType82');
    font-size: var(--fs-5xl, 3.5rem);
    font-weight: 700;
    letter-spacing: var(--ls-tight, -0.02em);
    text-transform: uppercase;
}

.ntitle-h1 {
    font-family: var(--font-display, 'NType82');
    font-size: var(--fs-4xl, 2.5rem);
    font-weight: 400;
    letter-spacing: var(--ls-tight, -0.02em);
    text-transform: uppercase;
}

.ntitle-h2 {
    font-family: var(--font-display, 'NType82');
    font-size: var(--fs-3xl, 2rem);
    font-weight: 400;
    letter-spacing: var(--ls-tight, -0.02em);
    text-transform: uppercase;
}

.ntitle-h3 {
    font-family: var(--font-display, 'NType82');
    font-size: var(--fs-2xl, 1.5rem);
    font-weight: 400;
    letter-spacing: var(--ls-normal, 0);
    text-transform: uppercase;
}

.ntitle-h4 {
    font-family: var(--font-body, 'Inter');
    font-size: var(--fs-xl, 1.25rem);
    font-weight: 500;
    letter-spacing: var(--ls-normal, 0);
}

.ntitle-h5 {
    font-family: var(--font-body, 'Inter');
    font-size: var(--fs-lg, 1.125rem);
    font-weight: 500;
}

.ntitle-h6 {
    font-family: var(--font-mono, 'Lettera Mono');
    font-size: var(--fs-sm, 0.875rem);
    font-weight: 400;
    letter-spacing: var(--ls-wider, 0.15em);
    text-transform: uppercase;
}

.ntitle-body {
    font-family: var(--font-body, 'Inter');
    font-size: var(--fs-base, 1rem);
    font-weight: 400;
    line-height: 1.6;
}

.ntitle-mono {
    font-family: var(--font-mono, 'Lettera Mono');
    font-size: var(--fs-sm, 0.875rem);
    font-weight: 400;
    letter-spacing: var(--ls-wide, 0.05em);
}

.ntitle-overline {
    font-family: var(--font-mono, 'Lettera Mono');
    font-size: var(--fs-xs, 0.75rem);
    font-weight: 500;
    letter-spacing: var(--ls-widest, 0.3em);
    text-transform: uppercase;
}

.ntitle-dot {
    font-family: var(--font-dot, 'Ndot');
    font-size: var(--fs-2xl, 1.5rem);
    font-weight: 400;
    letter-spacing: var(--ls-wide, 0.05em);
    text-transform: uppercase;
}

.ntitle-color-default { color: var(--color-text); }
.ntitle-color-secondary { color: var(--color-text-secondary); }
.ntitle-color-muted { color: var(--color-text-muted); }
.ntitle-color-accent { color: var(--color-accent); }
.ntitle-color-inverted { color: var(--color-bg); }
</style>