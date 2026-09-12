<template>
    <div class="logo-wrapper">
        <svg 
            class="loading-logo" 
            width="96" 
            height="72" 
            viewBox="-1 -1 34 26"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path class="part part1" d="M11.8737 5.25052C13.3713 5.25052 14.5853 4.07515 14.5853 2.62526C14.5853 1.17537 13.3713 0 11.8737 0C10.3761 0 9.16211 1.17537 9.16211 2.62526C9.16211 4.07515 10.3761 5.25052 11.8737 5.25052Z"/>
            <path class="part part2" d="M21.028 5.25052C22.5256 5.25052 23.7396 4.07515 23.7396 2.62526C23.7396 1.17537 22.5256 0 21.028 0C19.5304 0 18.3164 1.17537 18.3164 2.62526C18.3164 4.07515 19.5304 5.25052 21.028 5.25052Z"/>
            <path class="part part3" d="M30.4061 23.9994C29.5252 23.9994 28.8114 23.3083 28.8114 22.4555C28.8114 15.6159 23.0644 10.052 16 10.052C8.93558 10.052 3.18863 15.6168 3.18863 22.4555C3.18863 23.3083 2.47479 23.9994 1.59389 23.9994C0.712986 23.9994 0 23.3083 0 22.4555C0 13.9144 7.17722 6.96484 16 6.96484C24.8228 6.96484 32 13.9136 32 22.4555C32 23.3083 31.2862 23.9994 30.4053 23.9994H30.4061Z"/>
            <path class="part part4" d="M15.9998 18.0254C7.3535 18.0254 0.318359 11.215 0.318359 2.84406C0.318359 2.16211 0.889265 1.60938 1.59364 1.60938C2.29802 1.60938 2.86892 2.16211 2.86892 2.84406C2.86892 9.85364 8.75881 15.556 15.9989 15.556C23.239 15.556 29.1297 9.85281 29.1297 2.84406C29.1297 2.16211 29.7006 1.60938 30.405 1.60938C31.1094 1.60938 31.6803 2.16211 31.6803 2.84406C31.6803 11.215 24.646 18.0262 15.9989 18.0262L15.9998 18.0254Z"/>
        </svg>
    </div>
</template>

<script setup>

</script>

<style scoped>
.loading-logo {
    width: 150px;
    height: 120px;
    animation: breathe 1s ease forwards infinite;
}

.part {
    fill: none;
    stroke: #6CB771FF;
    stroke-width: 1.3;
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: draw 1s ease forwards, fillin 0.6s ease forwards;
    animation-fill-mode: forwards;
    animation-timeline: view();   
}

/* draw sequence delay */
.part1 { animation-delay: 0s, 0.7s; }
.part2 { animation-delay: 0.1s, 0.8s; }
.part3 { animation-delay: 0.2s, 0.9s; }
.part4 { animation-delay: 0.4s, 1s; }

@keyframes draw {
    to { stroke-dashoffset: 0; }
}

@keyframes fillin {
    from { fill: transparent; }
    to { fill: #6CB771FF; stroke: #6CB771FF; }
}

@keyframes breathe {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.01); opacity: 0.8; }
}
</style>
