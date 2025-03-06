// .vitepress/theme/composables/AIChat/useInteractiveImages.ts
import { onMounted, onUnmounted } from "vue"
import type { Ref } from "vue"

export function useInteractiveImages(
    messagesContainerRef: Ref<HTMLDivElement | null>,
    handleSubmit: (text: string) => void
) {
    // Обработчик клика по изображению
    function handleImageClick(event: MouseEvent) {
        const target = event.target as HTMLElement

        // Проверяем, что кликнули по интерактивному изображению
        if (target && target.classList.contains('chat-interactive-image')) {
            // Получаем оригинальный поисковый запрос из атрибутов
            const query = target.getAttribute('data-query')
            if (query) {
                console.log(`🟢 CLIENT: Клик по изображению с запросом "${query}"`)

                // Создаем фидбек пользователю, что запрос отправляется
                const pulseAnimation = 'pulse 1s 2'
                const originalTransition = target.style.transition

                // Применяем эффект пульсации
                target.style.transition = 'all 0.3s'
                target.style.animation = pulseAnimation
                target.style.boxShadow = '0 0 0 2px var(--vp-c-brand)'

                setTimeout(() => {
                    // Отправляем запрос в чат
                    handleSubmit(query)

                    // Восстанавливаем стили
                    setTimeout(() => {
                        target.style.animation = ''
                        target.style.boxShadow = ''
                        target.style.transition = originalTransition
                    }, 1000)
                }, 300)
            }
        }
    }

    // Добавление и удаление обработчика событий
    onMounted(() => {
        if (messagesContainerRef.value) {
            messagesContainerRef.value.addEventListener('click', handleImageClick)
        }
    })

    onUnmounted(() => {
        if (messagesContainerRef.value) {
            messagesContainerRef.value.removeEventListener('click', handleImageClick)
        }
    })

    return {
        handleImageClick
    }
}