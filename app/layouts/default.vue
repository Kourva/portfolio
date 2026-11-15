<template>
    <div>
        <DefaultHeader />
        <slot />
        <DefaultFooter />

        <div v-if="splash" class="loading-container" aria-hidden="true">
            <DotMatrixLoading
                label="loading..."
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import DefaultHeader from '~/components/layout/DefaultHeader.vue';
import DotMatrixLoading from '~/components/feedback/DotMatrixLoading.vue';
import DefaultFooter from '~/components/layout/DefaultFooter.vue';

const splash = ref<boolean>(true);


onMounted(() => {
    const timer = setTimeout(() => splash.value = false, 400)
    onBeforeUnmount(() => clearTimeout(timer))
})

</script>

<style scoped>
.loading-container {
    position: fixed;
    inset: 0;
    z-index: 500;
    width: 100vw;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg);
    animation: splash-out 180ms var(--ease-out, ease-out) 220ms forwards;
}

@keyframes splash-out {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

@media (prefers-reduced-motion: reduce) {
    .loading-container {
        animation: none;
    }
}
</style>
