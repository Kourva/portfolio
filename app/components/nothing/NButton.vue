<template>
    <component
        :is="tag"
        class="nbutton"
        :class="[variantClass, sizeClass, block && 'nbutton-block', disabled && 'nbutton-disabled']"
        :href="tag === 'a' ? href : undefined"
        :target="tag === 'a' ? target : undefined"
        :rel="tag === 'a' ? rel : undefined"
        :disabled="tag === 'button' ? disabled : undefined"
        :type="tag === 'button' ? type : undefined"
    >
        <span v-if="$slots.icon" class="nbutton-icon">
            <slot name="icon" />
        </span>
        <span class="nbutton-label">
            <slot>{{ label }}</slot>
        </span>
    </component>
</template>

<script setup lang="ts">
type Variant = 'default' | 'primary' | 'accent' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
    label?: string
    tag?: 'button' | 'a'
    variant?: Variant
    size?: Size
    href?: string
    target?: string
    rel?: string
    type?: 'button' | 'submit' | 'reset'
    block?: boolean
    disabled?: boolean
}>(), {
    label: '',
    tag: 'button',
    variant: 'default',
    size: 'md',
    href: undefined,
    target: undefined,
    rel: undefined,
    type: 'button',
    block: false,
    disabled: false
})

const variantClass = computed(() => `nbutton-${props.variant}`)
const sizeClass = computed(() => `nbutton-${props.size}`)
</script>

<style scoped>
.nbutton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: var(--font-mono, 'Lettera Mono');
    font-weight: 500;
    letter-spacing: var(--ls-wide, 0.05em);
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: var(--radius-full, 9999px);
    cursor: pointer;
    text-decoration: none;
    transition:
        background var(--duration-fast, 150ms) var(--ease-out),
        color var(--duration-fast, 150ms) var(--ease-out),
        border-color var(--duration-fast, 150ms) var(--ease-out),
        transform var(--duration-fast, 150ms) var(--ease-out);
}

.nbutton:active {
    transform: translateY(1px);
}

.nbutton-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.nbutton-label {
    display: inline-block;
}

/* Sizes */
.nbutton-sm {
    padding: 6px 14px;
    font-size: 0.65rem;
}

.nbutton-md {
    padding: 10px 20px;
    font-size: 0.75rem;
}

.nbutton-lg {
    padding: 14px 28px;
    font-size: 0.85rem;
}

/* Variants */
.nbutton-default {
    background: var(--color-bg-elevated);
    color: var(--color-text);
    border-color: var(--color-border-strong);
}

.nbutton-default:hover {
    background: var(--color-bg-hover);
    border-color: var(--color-text);
}

.nbutton-primary {
    background: var(--color-text);
    color: var(--color-bg);
    border-color: var(--color-text);
}

.nbutton-primary:hover {
    background: transparent;
    color: var(--color-text);
}

.nbutton-accent {
    background: var(--color-accent);
    color: #ffffff;
    border-color: var(--color-accent);
}

.nbutton-accent:hover {
    background: transparent;
    color: var(--color-accent);
}

.nbutton-ghost {
    background: transparent;
    color: var(--color-text-secondary);
    border-color: transparent;
}

.nbutton-ghost:hover {
    color: var(--color-text);
    background: var(--color-bg-hover);
}

.nbutton-outline {
    background: transparent;
    color: var(--color-text);
    border-color: var(--color-border-strong);
}

.nbutton-outline:hover {
    border-color: var(--color-text);
    background: var(--color-bg-hover);
}

/* Modifiers */
.nbutton-block {
    display: flex;
    width: 100%;
}

.nbutton-disabled {
    opacity: 0.4;
    pointer-events: none;
}
</style>