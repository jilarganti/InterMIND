// .vitepress/theme/stores/chatsStore.ts
import { defineStore } from "pinia"
import { ref, watch } from "vue"
import type { UIMessage } from "@ai-sdk/ui-utils"

export interface ChatInfo {
  id: string
  title?: string
  messages: UIMessage[]
  timestamp: number
}

export const useChatsStore = defineStore("chats", () => {
  const chatIds = ref<string[]>([])
  const selectedChatId = ref<string>("")
  const draftChatId = ref<string>("")
  const chatsData = ref<Record<string, ChatInfo>>({})

  // Проверка на клиентскую среду
  const isClient = typeof window !== "undefined"

  // Загрузка сохраненных чатов
  const loadFromStorage = () => {
    if (!isClient) return

    try {
      const storedIds = localStorage.getItem("chat_ids")
      const storedData = localStorage.getItem("chats_data")

      if (storedIds) {
        chatIds.value = JSON.parse(storedIds)
        selectedChatId.value = chatIds.value[0] || ""
      }

      if (storedData) {
        chatsData.value = JSON.parse(storedData)
      }
    } catch (e) {
      console.error("Error loading chats from storage:", e)
      chatIds.value = []
      chatsData.value = {}
    }
  }

  // Загружаем данные только на клиенте при инициализации
  if (isClient) {
    loadFromStorage()
  }

  // Автосохранение при изменениях
  if (isClient) {
    watch(
      [chatIds, chatsData],
      ([newIds, newData]) => {
        try {
          localStorage.setItem("chat_ids", JSON.stringify(newIds))
          localStorage.setItem("chats_data", JSON.stringify(newData))
        } catch (e) {
          console.error("Error saving chats to storage:", e)
        }
      },
      { deep: true },
    )
  }

  // Создание временного черновика чата (не добавляется в список)
  const createDraftChat = () => {
    const chatId = Date.now().toString()
    draftChatId.value = chatId
    chatsData.value[chatId] = {
      id: chatId,
      messages: [],
      timestamp: Date.now(),
    }
    selectedChatId.value = chatId
    return chatId
  }

  // Публикация черновика чата (добавление в список)
  const publishDraftChat = () => {
    if (draftChatId.value && chatsData.value[draftChatId.value]) {
      const chatId = draftChatId.value

      // Добавляем чат в список только если есть сообщения
      if (chatsData.value[chatId].messages.length > 0) {
        chatIds.value.unshift(chatId) // Добавляем в начало списка
        draftChatId.value = "" // Сбрасываем черновик
        return chatId
      }
    }
    return null
  }

  // Выбор чата
  const selectChat = (chatId: string) => {
    // Если был открыт черновик, проверяем нужно ли его сохранить
    if (draftChatId.value && draftChatId.value !== chatId) {
      publishDraftChat()
    }

    selectedChatId.value = chatId
  }

  // Удаление чата
  const removeChat = (chatId: string) => {
    const index = chatIds.value.indexOf(chatId)
    if (index > -1) {
      chatIds.value.splice(index, 1)
      delete chatsData.value[chatId]

      // Если удалили выбранный чат
      if (selectedChatId.value === chatId) {
        // Если это был черновик, сбрасываем его
        if (draftChatId.value === chatId) {
          draftChatId.value = ""
        }

        // Выбираем первый чат из списка или создаем новый черновик
        if (chatIds.value.length > 0) {
          selectedChatId.value = chatIds.value[0]
        } else {
          createDraftChat()
        }
      }
    }
  }

  // Сохранение сообщений
  const saveMessages = (chatId: string, messages: UIMessage[]) => {
    if (!isClient || !chatId) return

    if (chatsData.value[chatId]) {
      const isFirstMessage = chatsData.value[chatId].messages.length === 0 && messages.length > 0

      chatsData.value[chatId].messages = messages
      chatsData.value[chatId].timestamp = Date.now()

      // Если это первое сообщение в черновике, публикуем его
      if (isFirstMessage && draftChatId.value === chatId) {
        publishDraftChat()
      }

      // Автоматически генерируем заголовок из первого сообщения пользователя, если заголовок не задан
      if (!chatsData.value[chatId].title && messages.length > 0) {
        const firstUserMessage = messages.find((msg) => msg.role === "user")
        if (firstUserMessage) {
          const content = firstUserMessage.content.substring(0, 30)
          // Обрезаем на границе слова, если текст длиннее 30 символов
          const title = content.length < 30 ? content : content.substring(0, content.lastIndexOf(" ")) + "..."

          chatsData.value[chatId].title = title
        }
      }
    }
  }

  // Получение сообщений
  const getMessages = (chatId: string): UIMessage[] => {
    return chatsData.value[chatId]?.messages || []
  }

  // Получение заголовка чата
  const getChatTitle = (chatId: string): string | undefined => {
    return chatsData.value[chatId]?.title
  }

  // Установка заголовка чата
  const setChatTitle = (chatId: string, title: string) => {
    if (!isClient || !chatId) return

    if (chatsData.value[chatId]) {
      chatsData.value[chatId].title = title || undefined
    }
  }

  // Инициализация при первом запуске
  const ensureChat = () => {
    // Если нет выбранного чата или это черновик без сообщений,
    // и нет чатов в списке, создаем черновик
    if (
      (!selectedChatId.value || (draftChatId.value === selectedChatId.value && chatsData.value[draftChatId.value]?.messages.length === 0)) &&
      chatIds.value.length === 0
    ) {
      createDraftChat()
    }
  }

  return {
    chatIds,
    selectedChatId,
    draftChatId,
    createDraftChat,
    publishDraftChat,
    selectChat,
    removeChat,
    saveMessages,
    getMessages,
    getChatTitle,
    setChatTitle,
    ensureChat,
  }
})
