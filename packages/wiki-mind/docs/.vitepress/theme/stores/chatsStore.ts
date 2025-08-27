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
  // Список ID постоянных чатов (отображаются в списке)
  const chatIds = ref<string[]>([])

  // ID текущего выбранного чата (может быть и временным, и постоянным)
  const selectedChatId = ref<string>("")

  // ID временного чата (не отображается в списке, пока не получит сообщения/заголовок)
  const tempChatId = ref<string>("")

  // Данные всех чатов (и постоянных, и временных)
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

        // Выбираем первый чат из списка, если он есть
        if (chatIds.value.length > 0) {
          selectedChatId.value = chatIds.value[0]
        }
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

  // Создание временного чата
  const createTempChat = () => {
    const chatId = Date.now().toString()

    // Если уже есть временный чат без сообщений, используем его
    if (tempChatId.value && chatsData.value[tempChatId.value]?.messages.length === 0) {
      selectedChatId.value = tempChatId.value
      return tempChatId.value
    }

    // Создаем новый временный чат
    tempChatId.value = chatId
    chatsData.value[chatId] = {
      id: chatId,
      messages: [],
      timestamp: Date.now(),
    }
    selectedChatId.value = chatId

    console.log(`🟢 CLIENT: Создан временный чат: ${chatId}`)
    return chatId
  }

  // Публикация временного чата (превращение во "взрослый" чат в списке)
  const publishTempChat = (chatId: string) => {
    // Проверяем, что чат существует и это текущий временный чат
    if (chatId === tempChatId.value && chatsData.value[chatId]) {
      // Добавляем чат в начало основного списка
      chatIds.value.unshift(chatId)

      console.log(`🟢 CLIENT: Временный чат ${chatId} опубликован и добавлен в список`)

      // Сбрасываем ссылку на временный чат
      tempChatId.value = ""

      return true
    }
    return false
  }

  // Функция создания нового чата (всегда создаёт временный)
  const createNewChat = () => {
    return createTempChat()
  }

  // Выбор существующего чата
  const selectChat = (chatId: string) => {
    // Если выбираем новый чат
    if (selectedChatId.value !== chatId) {
      // Если есть активный временный чат без сообщений, удаляем его
      if (tempChatId.value && chatsData.value[tempChatId.value]?.messages.length === 0 && !chatIds.value.includes(tempChatId.value)) {
        delete chatsData.value[tempChatId.value]

        // Если выбранный чат был временным, сбрасываем его
        if (selectedChatId.value === tempChatId.value) {
          selectedChatId.value = ""
        }
        tempChatId.value = ""
      }

      // Устанавливаем новый выбранный чат
      selectedChatId.value = chatId
    }
  }

  // Удаление чата
  const removeChat = (chatId: string) => {
    // Удаляем из основного списка
    const index = chatIds.value.indexOf(chatId)
    if (index > -1) {
      chatIds.value.splice(index, 1)

      // Если это был временный чат, очищаем ссылку
      if (chatId === tempChatId.value) {
        tempChatId.value = ""
      }

      // Удаляем данные чата
      delete chatsData.value[chatId]

      // Если удалили выбранный чат
      if (selectedChatId.value === chatId) {
        // Выбираем первый чат из списка или создаем новый
        if (chatIds.value.length > 0) {
          selectedChatId.value = chatIds.value[0]
        } else {
          createNewChat()
        }
      }
    }
  }

  // Сохранение сообщений
  const saveMessages = (chatId: string, messages: UIMessage[]) => {
    if (!isClient || !chatId) return

    if (chatsData.value[chatId]) {
      const isFirstMessage = chatsData.value[chatId].messages.length === 0 && messages.length > 0

      // Обновляем сообщения и временную метку
      chatsData.value[chatId].messages = messages
      chatsData.value[chatId].timestamp = Date.now()

      // Если это первое сообщение и чат временный - публикуем его
      if (isFirstMessage && chatId === tempChatId.value && !chatIds.value.includes(chatId)) {
        // Если есть сообщение от пользователя, используем его как заголовок
        const firstUserMessage = messages.find((msg) => msg.role === "user")
        if (firstUserMessage) {
          // Задаем заголовок чата
          chatsData.value[chatId].title = firstUserMessage.content
        }

        // Публикуем чат
        publishTempChat(chatId)
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

      // Если чат временный и получил заголовок - публикуем его
      if (chatId === tempChatId.value && title && !chatIds.value.includes(chatId)) {
        publishTempChat(chatId)
      }
    }
  }

  // Проверка, является ли чат временным
  const isTempChat = (chatId: string): boolean => {
    return chatId === tempChatId.value
  }

  // Инициализация при первом запуске
  const ensureChat = () => {
    // Если нет выбранного чата, создаем временный
    if (!selectedChatId.value) {
      // Если есть чаты в списке, выбираем первый
      if (chatIds.value.length > 0) {
        selectedChatId.value = chatIds.value[0]
      } else {
        // Иначе создаем временный
        createTempChat()
      }
    }
  }

  return {
    chatIds,
    selectedChatId,
    tempChatId,
    createNewChat,
    selectChat,
    removeChat,
    saveMessages,
    getMessages,
    getChatTitle,
    setChatTitle,
    ensureChat,
    isTempChat,
    publishTempChat,
  }
})
