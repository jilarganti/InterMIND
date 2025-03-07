// .vitepress/theme/stores/chatsStore.ts
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { UIMessage } from "@ai-sdk/ui-utils"

export interface ChatInfo {
    id: string
    messages: UIMessage[]
    timestamp: number
}

export const useChatsStore = defineStore('chats', () => {
    const chatIds = ref<string[]>([])
    const selectedChatId = ref<string>("")
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

    // Создание нового чата
    const createNewChat = () => {
        const chatId = Date.now().toString()
        chatIds.value.unshift(chatId) // Добавляем в начало списка
        chatsData.value[chatId] = {
            id: chatId,
            messages: [],
            timestamp: Date.now(),
        }
        selectedChatId.value = chatId
        return chatId
    }

    // Выбор чата
    const selectChat = (chatId: string) => {
        selectedChatId.value = chatId
    }

    // Удаление чата
    const removeChat = (chatId: string) => {
        const index = chatIds.value.indexOf(chatId)
        if (index > -1) {
            chatIds.value.splice(index, 1)
            delete chatsData.value[chatId]
            if (selectedChatId.value === chatId) {
                selectedChatId.value = chatIds.value[0] || ""
            }
        }
    }

    // Сохранение сообщений
    const saveMessages = (chatId: string, messages: UIMessage[]) => {
        if (!isClient || !chatId) return

        if (chatsData.value[chatId]) {
            chatsData.value[chatId].messages = messages
            chatsData.value[chatId].timestamp = Date.now()
        }
    }

    // Получение сообщений
    const getMessages = (chatId: string): UIMessage[] => {
        return chatsData.value[chatId]?.messages || []
    }

    // Инициализация при первом запуске
    const ensureChat = () => {
        if (chatIds.value.length === 0) {
            createNewChat()
        }
    }

    return {
        chatIds,
        selectedChatId,
        createNewChat,
        selectChat,
        removeChat,
        saveMessages,
        getMessages,
        ensureChat
    }
})