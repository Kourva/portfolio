<template>
    <div
        class="bridge"
        :class="[directionClass, red && 'bridge-red']"
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
}>(), {
    direction: 'v',
    length: 80,
    offset: 32,
    red: false
})

const directionClass = computed(() => `bridge-${props.direction}`)

const bridgeStyle = computed(() => {
    if (props.direction === 'v') {
        return {
            width: `${props.length}px`,
            marginLeft: `${props.offset}px`
        }
    }
    return {
        height: `${props.length}px`,
        marginTop: `${props.offset}px`
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
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    margin-left: -1px;
    margin-right: -1px;
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
    .bridge-h {
        width: var(--bridge-length, 80px);
        height: 15px;
        border-top: none;
        border-bottom: none;
        border-left: 1px solid var(--color-border);
        border-right: 1px solid var(--color-border);
        margin-top: -1px;
        margin-bottom: -1px;
        margin-left: 32px;
        margin-right: 0;
    }

    .bridge-red.bridge-h {
        border-top: none;
        border-bottom: none;
        border-left-color: var(--color-accent);
        border-right-color: var(--color-accent);
    }
}
</style>