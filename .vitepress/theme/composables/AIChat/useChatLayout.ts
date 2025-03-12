// .vitepress/theme/composables/AIChat/useChatLayout.ts
import { ref, onMounted, onUnmounted } from "vue"

export function useChatLayout() {
  // Определение типа устройства (десктоп/мобильный)
  const isDesktop = ref(false)

  // Текущее представление для мобильного макета: 'main', 'chats', 'chat'
  const currentView = ref("main")

  // Функция для определения типа устройства
  const updateLayoutType = () => {
    isDesktop.value = window.innerWidth >= 768
  }

  // Функция для изменения текущего представления (только для мобильного макета)
  const setCurrentView = (view: string) => {
    if (["main", "chats", "chat"].includes(view)) {
      currentView.value = view
    }
  }

  // Инициализация при монтировании компонента
  onMounted(() => {
    // Проверяем размер экрана
    updateLayoutType()

    // Добавляем слушатель изменения размера окна
    window.addEventListener("resize", updateLayoutType)
  })

  // Очистка при размонтировании компонента
  onUnmounted(() => {
    window.removeEventListener("resize", updateLayoutType)
  })

  return {
    isDesktop,
    currentView,
    setCurrentView,
  }
}
