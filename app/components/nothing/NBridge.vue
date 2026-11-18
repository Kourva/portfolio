<template>
    <div
        class="bridge"
        :class="[directionClass, `bridge-fit-${fit}`, red && 'bridge-red']"
        :style="bridgeStyle"
        aria-hidden="true"
    >
        <span v-if="red" class="bridge-dot"></span>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    direction?: 'v' | 'h'
    length?: number
    offset?: number
    red?: boolean
    /**
     * Horizontal rows only:
     * `center` (default) is a fixed-length bar centred on the row, so it always
     * fits inside both neighbours even when their heights differ.
     * `stretch` fills the row between the two insets — pair it with
     * `<NLayout align="stretch">`, where equal heights make that exact.
     */
    fit?: 'center' | 'stretch'
}>(), {
    direction: 'v',
    length: 80,
    offset: 32,
    red: false,
    fit: 'center'
})

const directionClass = computed(() => `bridge-${props.direction}`)

const bridgeStyle = computed(() => {
    if (props.direction === 'v') {
        return {
            width: `${props.length}px`,
            // Logical, not physical: in RTL this indents from the right edge
            // so the vertical connector sits under the card's start side.
            marginInlineStart: `${props.offset}px`
        }
    }
    // Horizontal bridges are driven by CSS custom properties: an inline
    // height/margin would also override the mobile 15px stub rules.
    return {
        '--bridge-length': `${props.length}px`,
        '--bridge-offset': `${props.offset}px`
    }
})
</script>

<style scoped>
.bridge {
    background: var(--color-bg-elevated);
    border-radius: 3px;
    position: relative;
    z-index: 1;
    flex-shrink: 0;
}

.bridge-v {
    height: 15px;
    border-left: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
    margin-top: -1px;
    margin-bottom: -1px;
}

.bridge-h {
    width: 15px;
    align-self: center;
    height: var(--bridge-length, 80px);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    margin-inline: -1px;
}

/* Fills the row; only correct together with `<NLayout align="stretch">`. */
.bridge-h.bridge-fit-stretch {
    align-self: stretch;
    height: auto;
    margin-block: var(--bridge-offset, 32px);
}

.bridge-red.bridge-v {
    border-left-color: var(--color-accent);
    border-right-color: var(--color-accent);
}

.bridge-red.bridge-h {
    border-top-color: var(--color-accent);
    border-bottom-color: var(--color-accent);
}

.bridge-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--color-accent);
    transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
    .bridge-h,
    .bridge-h.bridge-fit-stretch {
        align-self: flex-start;
        width: var(--bridge-length, 80px);
        height: 15px;
        margin-block: -1px;
        border-top: none;
        border-bottom: none;
        border-left: 1px solid var(--color-border);
        border-right: 1px solid var(--color-border);
        margin-top: -1px;
        margin-bottom: -1px;
        margin-inline-start: 32px;
        margin-inline-end: 0;
    }

    .bridge-red.bridge-h {
        border-top: none;
        border-bottom: none;
        border-left-color: var(--color-accent);
        border-right-color: var(--color-accent);
    }
}
</style>