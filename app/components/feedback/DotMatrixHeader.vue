<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
        role="img"
        :aria-label="label || 'Loading'"
        :width="size"
        :height="size"
        class="ndotmatrix"
    >
        <title>{{ label || 'Loading' }}</title>
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
            v-for="(dot, i) in animatedDots"
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
const props = withDefaults(defineProps<{
    size?: number | string
    dotColor?: string
    bgColor?: string
    label?: string
}>(), {
    size: 24,
    dotColor: '#ffffff',
    bgColor: '#ffffff',
    label: ''
})

const uid = useId()
const bgId = `ndm-bg-${uid}`
const dotId = `ndm-dot-${uid}`

const coords = [6, 17, 28, 39, 50]
const backgroundDots = coords.flatMap((x) => coords.map((y) => ({ x, y })))

const animatedDots = [
    { x: 6, y: 6, delayClass: 'd00' },
    { x: 17, y: 6, delayClass: 'd01' },
    { x: 28, y: 6, delayClass: 'd02' },
    { x: 39, y: 6, delayClass: 'd03' },
    { x: 50, y: 6, delayClass: 'd04' },
    { x: 6, y: 17, delayClass: 'd10' },
    { x: 17, y: 17, delayClass: 'd11' },
    { x: 28, y: 17, delayClass: 'd12' },
    { x: 39, y: 17, delayClass: 'd13' },
    { x: 50, y: 17, delayClass: 'd14' },
    { x: 6, y: 28, delayClass: 'd20' },
    { x: 17, y: 28, delayClass: 'd21' },
    { x: 28, y: 28, delayClass: 'd22' },
    { x: 39, y: 28, delayClass: 'd23' },
    { x: 50, y: 28, delayClass: 'd24' },
    { x: 6, y: 39, delayClass: 'd30' },
    { x: 17, y: 39, delayClass: 'd31' },
    { x: 28, y: 39, delayClass: 'd32' },
    { x: 39, y: 39, delayClass: 'd33' },
    { x: 50, y: 39, delayClass: 'd34' },
    { x: 6, y: 50, delayClass: 'd40' },
    { x: 17, y: 50, delayClass: 'd41' },
    { x: 28, y: 50, delayClass: 'd42' },
    { x: 39, y: 50, delayClass: 'd43' },
    { x: 50, y: 50, delayClass: 'd44' }
]
</script>

<style scoped>
.ndotmatrix {
    display: inline-block;
    flex-shrink: 0;
    vertical-align: middle;
}

.dot {
    animation: ndm-rain 1800ms cubic-bezier(0.25, 1, 0.5, 1) infinite both;
}

@keyframes ndm-rain {
    0%   { opacity: 0; }
    6%   { opacity: 1; }
    22%  { opacity: 0.10; }
    100% { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
    .dot {
        animation: none;
        opacity: 0.45;
    }
}

.d00 { animation-delay: 0ms; }
.d01 { animation-delay: 990ms; }
.d02 { animation-delay: 360ms; }
.d03 { animation-delay: 1350ms; }
.d04 { animation-delay: 630ms; }
.d10 { animation-delay: 126ms; }
.d11 { animation-delay: 1116ms; }
.d12 { animation-delay: 486ms; }
.d13 { animation-delay: 1476ms; }
.d14 { animation-delay: 756ms; }
.d20 { animation-delay: 252ms; }
.d21 { animation-delay: 1242ms; }
.d22 { animation-delay: 612ms; }
.d23 { animation-delay: 1602ms; }
.d24 { animation-delay: 882ms; }
.d30 { animation-delay: 378ms; }
.d31 { animation-delay: 1368ms; }
.d32 { animation-delay: 738ms; }
.d33 { animation-delay: 1728ms; }
.d34 { animation-delay: 1008ms; }
.d40 { animation-delay: 504ms; }
.d41 { animation-delay: 1494ms; }
.d42 { animation-delay: 864ms; }
.d43 { animation-delay: 54ms; }
.d44 { animation-delay: 1134ms; }
</style>