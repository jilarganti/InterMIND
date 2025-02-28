import { ref, watch } from "vue"
import type { UIMessage } from "@ai-sdk/ui-utils"

export interface ChatInfo {
    id: string
    messages: UIMessage[]
    timestamp: number
}

export function useChatsStorage() {
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
                selectedChatId.value = chatIds.value[0]
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

    // Загружаем только на клиенте
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

    const createNewChat = () => {
        const chatId = Date.now().toString()
        chatIds.value.push(chatId)
        chatsData.value[chatId] = {
            id: chatId,
            messages: [],
            timestamp: Date.now(),
        }
        selectedChatId.value = chatId
        return chatId
    }

    const selectChat = (chatId: string) => {
        selectedChatId.value = chatId
    }

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

    const saveMessages = (chatId: string, messages: UIMessage[]) => {
        if (!isClient) return

        if (chatsData.value[chatId]) {
            chatsData.value[chatId].messages = messages
            chatsData.value[chatId].timestamp = Date.now()
        }
    }

    const getMessages = (chatId: string): UIMessage[] => {
        return chatsData.value[chatId]?.messages || []
    }

    return {
        chatIds,
        selectedChatId,
        createNewChat,
        selectChat,
        removeChat,
        saveMessages,
        getMessages,
    }
}
