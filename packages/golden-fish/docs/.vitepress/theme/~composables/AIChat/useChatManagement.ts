import { ref, computed, onMounted } from "vue"
import { useChatsStore } from "@theme/~stores/chatsStore"
import type { Ref } from "vue"

// Типы для группировки чатов
interface MonthGroup {
  [month: string]: string[]
}

interface YearGroups {
  [year: string]: MonthGroup
}

interface UseChatManagementOptions {
  /**
   * Функция для установки выбранного представления в мобильном интерфейсе
   */
  setCurrentView?: (view: string) => void
}

/**
 * Composable для управления чатами и их отображением
 */
export function useChatManagement(options: UseChatManagementOptions = {}) {
  const chatsStore = useChatsStore()

  // Поле поиска для фильтрации чатов
  const searchInput = ref("")

  // Определяем, есть ли выбранный чат
  const hasSelectedChat = computed(
    () => Boolean(chatsStore.selectedChatId) && (chatsStore.chatIds.includes(chatsStore.selectedChatId) || chatsStore.isTempChat(chatsStore.selectedChatId)),
  )

  // Фильтрация чатов при поиске (по заголовку и дате)
  const filteredChatIds = computed(() => {
    if (!searchInput.value) return chatsStore.chatIds

    const searchTerm = searchInput.value.toLowerCase()
    return chatsStore.chatIds.filter((chatId) => {
      const date = new Date(Number(chatId))
      const title = chatsStore.getChatTitle(chatId) || ""
      return date.toLocaleString().toLowerCase().includes(searchTerm) || title.toLowerCase().includes(searchTerm)
    })
  })

  // Группировка отфильтрованных чатов по годам и месяцам
  const groupedChats = computed(() => {
    const groups: YearGroups = {}

    filteredChatIds.value.forEach((id) => {
      // Игнорируем временный чат в группировке
      if (chatsStore.isTempChat(id)) return

      const date = new Date(Number(id))
      const year = date.getFullYear().toString()
      const month = date.toLocaleString("default", { month: "long" })

      if (!groups[year]) {
        groups[year] = {}
      }

      if (!groups[year][month]) {
        groups[year][month] = []
      }

      groups[year][month].push(id)
    })

    return groups
  })

  // Функция для создания нового чата
  const createNewChat = () => {
    const chatId = chatsStore.createNewChat()
    return chatId
  }

  // Функция для выбора существующего чата
  const selectChat = (chatId: string) => {
    chatsStore.selectChat(chatId)

    // Если указано, переключаемся на экран чата
    if (options.setCurrentView) {
      options.setCurrentView("chat")
    }
  }

  // Функция для удаления чата
  const removeChat = (chatId: string) => {
    chatsStore.removeChat(chatId)
  }

  // Инициализация при монтировании
  onMounted(() => {
    // Инициализируем хранилище чатов
    chatsStore.ensureChat()
  })

  return {
    // Состояние
    searchInput,
    filteredChatIds,
    groupedChats,
    hasSelectedChat,

    // Методы
    createNewChat,
    selectChat,
    removeChat,

    // Доступ к хранилищу
    chatsStore,
  }
}
