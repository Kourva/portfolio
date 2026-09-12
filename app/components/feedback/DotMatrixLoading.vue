<template>
    <div class="loading-dot-matrix" :class="`loading-dot-matrix--${labelPosition}`">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 56"
            role="img"
            :aria-label="label || 'Loading'"
            :width="size"
            :height="size"
            :class="className"
        >
            <title>{{ label || 'Loading' }}</title>
            <desc>Two dots circle the perimeter, each owning a half.</desc>

            <defs>
                <circle id="loading-dot-matrix-bg" r="2.4" :fill="bgColor" opacity="0.07" />
                <circle id="loading-dot-matrix-dot" r="3.1" :fill="dotColor" />
            </defs>

            <!-- Background grid dots -->
            <use
                v-for="dot in backgroundDots"
                :key="`bg-${dot.x}-${dot.y}`"
                href="#loading-dot-matrix-bg"
                :x="dot.x"
                :y="dot.y"
            />

            <!-- Animated dots -->
            <use
                v-for="(dot, i) in animatedDots"
                :key="`dot-${i}`"
                href="#loading-dot-matrix-dot"
                class="dot"
                :class="dot.delayClass"
                :x="dot.x"
                :y="dot.y"
            />
        </svg>

        <!-- Label underneath (or wherever labelPosition points) -->
        <span v-if="label" class="loading-dot-matrix__label" :class="labelClass">
          {{ label }}
        </span>
    </div>
</template>

<script setup lang="ts">
interface Props {
    /** Text shown under the icon. Empty = no label rendered. */
    label?: string
    /** Where to place the label relative to the icon */
    labelPosition?: 'below' | 'above'
    /** Size of the icon in pixels (applied to width & height) */
    size?: number | string
    /** Color of the animated dots */
    dotColor?: string
    /** Color of the faint background grid dots */
    bgColor?: string
    /** Additional CSS classes for the SVG */
    className?: string
    /** Additional CSS classes for the label */
    labelClass?: string
}

withDefaults(defineProps<Props>(), {
    label: '',
    labelPosition: 'below',
    size: 56,
    dotColor: '#ffffff',
    bgColor: '#ffffff',
    className: '',
    labelClass: '',
})

// Background grid: 5x5 evenly spaced dots (6, 17, 28, 39, 50)
const coords = [6, 17, 28, 39, 50]
const backgroundDots = coords.flatMap((x) => coords.map((y) => ({ x, y })))

// Animated dots: two dots chasing around the perimeter
const animatedDots = [
    { x: 6, y: 6, delayClass: 'd00' },
    { x: 17, y: 6, delayClass: 'd01' },
    { x: 28, y: 6, delayClass: 'd02' },
    { x: 39, y: 6, delayClass: 'd03' },
    { x: 50, y: 6, delayClass: 'd04' },
    { x: 6, y: 17, delayClass: 'd10' },
    { x: 50, y: 17, delayClass: 'd14' },
    { x: 6, y: 28, delayClass: 'd20' },
    { x: 50, y: 28, delayClass: 'd24' },
    { x: 6, y: 39, delayClass: 'd30' },
    { x: 50, y: 39, delayClass: 'd34' },
    { x: 6, y: 50, delayClass: 'd40' },
    { x: 17, y: 50, delayClass: 'd41' },
    { x: 28, y: 50, delayClass: 'd42' },
    { x: 39, y: 50, delayClass: 'd43' },
    { x: 50, y: 50, delayClass: 'd44' },
]
</script>

<style scoped>
.loading-dot-matrix {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
}

.loading-dot-matrix--above {
    flex-direction: column-reverse;
}

.loading-dot-matrix__label {
    font-family: var(--font-mono, 'Lettera Mono', monospace);
    font-size: var(--fs-xs, 0.75rem);
    font-weight: 500;
    letter-spacing: var(--ls-widest, 0.3em);
    text-transform: uppercase;
    color: var(--color-text-muted, #666666);
    text-align: center;
    user-select: none;
}

.dot {
    animation: icon-twin-orbit 1800ms linear infinite both;
}

@keyframes icon-twin-orbit {
    0%   { opacity: 0; }
    4%   { opacity: 1; }
    26%  { opacity: 0.08; }
    100% { opacity: 0; }
}

/* Respect user's motion preference */
@media (prefers-reduced-motion: reduce) {
    .dot {
        animation: none;
        opacity: 0.45;
    }
}

/* Staggered delays for the perimeter chase */
.d00, .d44 { animation-delay: 0ms; }
.d01, .d43 { animation-delay: 113ms; }
.d02, .d42 { animation-delay: 225ms; }
.d03, .d41 { animation-delay: 338ms; }
.d04, .d40 { animation-delay: 450ms; }
.d10, .d34 { animation-delay: 788ms; }
.d14, .d30 { animation-delay: 563ms; }
.d20, .d24 { animation-delay: 675ms; }
</style>