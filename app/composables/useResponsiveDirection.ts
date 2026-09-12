export const useResponsiveDirection = (breakpoint = 768) => {
    const direction = ref<'h' | 'v'>('h')

    const update = () => {
        direction.value = window.innerWidth <= breakpoint ? 'v' : 'h'
    }

    onMounted(() => {
        update()
        window.addEventListener('resize', update)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', update)
    })

    return direction
}