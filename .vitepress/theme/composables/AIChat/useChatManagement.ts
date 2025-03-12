// .vitepress/theme/composables/AIChat/useChatManagement.ts
import { ref, computed, onMounted, watch } from "vue"
import { useChatsStore } from "@theme/stores/chatsStore"
import type { Ref } from "vue"

interface UseChatManagementOptions {
  /**
   * Функция для установки выбранного представления в мобильном интерфейсе
   * (используется только в мобильном макете)
   */
  setCurrentView?: (view: string) => void
}

export function useChatManagement(options: UseChatManagementOptions = {}) {
  const chatsStore = useChatsStore()

  // Поле поиска для фильтрации чатов
  const searchInput = ref("")

  // Определяем, есть ли выбранный чат
  const hasSelectedChat = computed(() => Boolean(chatsStore.selectedChatId) && chatsStore.chatIds.includes(chatsStore.selectedChatId))

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
    const groups = {}

    filteredChatIds.value.forEach((id) => {
      const date = new Date(Number(id))
      const year = date.getFullYear()
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

    // Если мы в мобильном макете, переключаемся на чат
    if (options.setCurrentView) {
      options.setCurrentView("chat")
    }

    return chatId
  }

  // Функция для выбора существующего чата
  const selectChat = (chatId: string) => {
    chatsStore.selectChat(chatId)

    // Если мы в мобильном макете, переключаемся на чат
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

    // Создаем новый чат, если список пуст
    if (chatsStore.chatIds.length === 0) {
      createNewChat()
    }
  })

  // Отслеживаем изменение selectedChatId
  watch(
    () => chatsStore.selectedChatId,
    (newChatId) => {
      // Убедимся, что выбранный чат существует
      if (newChatId && !chatsStore.chatIds.includes(newChatId)) {
        if (chatsStore.chatIds.length > 0) {
          selectChat(chatsStore.chatIds[0])
        } else {
          createNewChat()
        }
      }
    },
  )

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
