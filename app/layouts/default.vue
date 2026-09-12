<template>
    <div>
        <template v-if="panding">
            <div class="loading-container">
                <DotMatrixLoading
                    label="loading..."
                />
            </div>
        </template>
        <template v-else>
            <DefaultHeader />
            <slot />
            <DefaultFooter />
        </template>
    </div>
</template>

<script setup lang="ts">
import DefaultHeader from '~/components/layout/DefaultHeader.vue';
import DotMatrixLoading from '~/components/feedback/DotMatrixLoading.vue';
import DefaultFooter from '~/components/layout/DefaultFooter.vue';

const panding = ref<boolean>(true);

onMounted(() => {
    setTimeout(() => panding.value = false, 1000)
})

</script>

<style scoped>
.loading-container {
    width: 100dvw;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg);
}
</style>