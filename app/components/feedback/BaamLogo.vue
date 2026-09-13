<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
        role="img"
        aria-label="Stairs"
        :width="size"
        :height="size"
        class="ndotmatrix"
    >
        <title>Stairs</title>
        <desc>A staircase climbs from the bottom-left corner to the top-right.</desc>

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
const bgId = `ndm-stairs-bg-${uid}`
const dotId = `ndm-stairs-dot-${uid}`

const coords = [6, 17, 28, 39, 50]
const backgroundDots = coords.flatMap((x) => coords.map((y) => ({ x, y })))

const activeDots = [
    { x: 50, y: 6, delayClass: 'd04' },
    { x: 39, y: 17, delayClass: 'd13' },
    { x: 50, y: 17, delayClass: 'd14' },
    { x: 28, y: 28, delayClass: 'd22' },
    { x: 39, y: 28, delayClass: 'd23' },
    { x: 17, y: 39, delayClass: 'd31' },
    { x: 28, y: 39, delayClass: 'd32' },
    { x: 6, y: 50, delayClass: 'd40' },
    { x: 17, y: 50, delayClass: 'd41' }
]
</script>

<style scoped>
.ndotmatrix {
    display: inline-block;
    flex-shrink: 0;
    vertical-align: middle;
}

.dot {
    animation: ndm-stairs 2200ms cubic-bezier(0.25, 1, 0.5, 1) infinite both;
}

@keyframes ndm-stairs {
    0%   { opacity: 0.08; }
    14%  { opacity: 1; }
    72%  { opacity: 0.95; }
    100% { opacity: 0.08; }
}

@media (prefers-reduced-motion: reduce) {
    .dot {
        animation: none;
        opacity: 0.45;
    }
}

.d04 { animation-delay: 1956ms; }
.d13 { animation-delay: 1467ms; }
.d14 { animation-delay: 1711ms; }
.d22 { animation-delay: 978ms; }
.d23 { animation-delay: 1222ms; }
.d31 { animation-delay: 489ms; }
.d32 { animation-delay: 733ms; }
.d40 { animation-delay: 0ms; }
.d41 { animation-delay: 244ms; }
</style>