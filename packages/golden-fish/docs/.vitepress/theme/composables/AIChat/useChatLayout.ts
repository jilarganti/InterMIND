import { ref, onMounted, onUnmounted } from "vue"

/**
 * Composable для управления макетом чата и определения типа устройства
 */
export function useChatLayout() {
  // Определение типа устройства (десктоп/мобильный)
  const isDesktop = ref(false)

  // Текущее представление для мобильного макета: 'main', 'chats', 'chat'
  // По умолчанию начинаем с 'chat' для лучшего UX
  const currentView = ref("chat")

  // Типы поддерживаемых представлений
  type ViewType = "main" | "chats" | "chat"

  // Функция для определения типа устройства
  const updateLayoutType = () => {
    isDesktop.value = window.innerWidth >= 768
  }

  // Функция для изменения текущего представления (только для мобильного макета)
  const setCurrentView = (view: ViewType) => {
    currentView.value = view
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
