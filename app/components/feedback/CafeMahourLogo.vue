<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
        role="img"
        aria-label="Thinking"
        :width="size"
        :height="size"
        class="ndotmatrix"
    >
        <title>Thinking</title>
        <desc>Inner cluster fires like neurons while the field rests.</desc>

        <defs>
            <circle :id="bgId" r="2.4" :fill="bgColor" opacity="0.07" />
            <circle :id="dotId" r="3.1" :fill="dotColor" />
        </defs>

        <use
            v-for="dot in backgroundDots"
            :key="`bg-${dot.x}-${dot.y}`"
            :href="`#${bgId}`"
            :x="dot.x"
            :y="dot.y"
        />

        <use
            v-for="(dot, i) in activeDots"
            :key="`dot-${i}`"
            :href="`#${dotId}`"
            class="dot"
            :class="dot.delayClass"
            :x="dot.x"
            :y="dot.y"
        />
    </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    size?: number | string
    dotColor?: string
    bgColor?: string
}>(), {
    size: 24,
    dotColor: '#ffffff',
    bgColor: '#ffffff'
})

const uid = useId()
const bgId = `ndm-thinking-bg-${uid}`
const dotId = `ndm-thinking-dot-${uid}`

const coords = [6, 17, 28, 39, 50]
const backgroundDots = coords.flatMap((x) => coords.map((y) => ({ x, y })))

const activeDots = [
    { x: 17, y: 17, delayClass: 'd11' },
    { x: 28, y: 17, delayClass: 'd12' },
    { x: 39, y: 17, delayClass: 'd13' },
    { x: 17, y: 28, delayClass: 'd21' },
    { x: 28, y: 28, delayClass: 'd22' },
    { x: 39, y: 28, delayClass: 'd23' },
    { x: 17, y: 39, delayClass: 'd31' },
    { x: 28, y: 39, delayClass: 'd32' },
    { x: 39, y: 39, delayClass: 'd33' }
]
</script>

<style scoped>
.ndotmatrix {
    display: inline-block;
    flex-shrink: 0;
    vertical-align: middle;
}

.dot {
    animation: ndm-thinking 1800ms cubic-bezier(0.65, 0, 0.35, 1) infinite both;
}

@keyframes ndm-thinking {
    0%   { opacity: 0.05; }
    30%  { opacity: 0.05; }
    40%  { opacity: 1; }
    55%  { opacity: 0.10; }
    100% { opacity: 0.05; }
}

@media (prefers-reduced-motion: reduce) {
    .dot {
        animation: none;
        opacity: 0.45;
    }
}

.d11 { animation-delay: 1352ms; }
.d12 { animation-delay: 1197ms; }
.d13 { animation-delay: 823ms; }
.d21 { animation-delay: 1661ms; }
.d22 { animation-delay: 884ms; }
.d23 { animation-delay: 873ms; }
.d31 { animation-delay: 787ms; }
.d32 { animation-delay: 1280ms; }
.d33 { animation-delay: 1366ms; }
</style>