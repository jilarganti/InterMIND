// .vitepress/theme/stores/simpleChatStore.ts
// Упрощенная версия хранилища чата для первого этапа рефакторинга
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { UIMessage } from "@ai-sdk/ui-utils"
import { processImagesInMessage } from '../utils/imageProcessor'
import { useChatsStore } from './chatsStore'

export const useSimpleChatStore = defineStore('simple-chat', () => {
    // Состояния
    const currentChatId = ref<string>('')
    const isProcessingImages = ref(false)

    // Получаем хранилище чатов
    const chatsStore = useChatsStore()

    // Получаем сообщения для текущего чата
    const messages = computed(() => {
        return chatsStore.getMessages(currentChatId.value)
    })

    // Установка текущего чата
    const setCurrentChat = (chatId: string) => {
        currentChatId.value = chatId
    }

    // Обработка изображений в последнем сообщении
    const processLastMessageImages = async () => {
        if (!currentChatId.value || messages.value.length === 0) return

        const lastIndex = messages.value.length - 1
        const lastMessage = messages.value[lastIndex]

        if (lastMessage && lastMessage.role === "assistant") {
            isProcessingImages.value = true

            try {
                // Обрабатываем маркеры изображений
                const processedMessage = await processImagesInMessage(lastMessage)

                if (processedMessage !== lastMessage) {
                    // Создаем новый массив с обновленным сообщением
                    const updatedMessages = [...messages.value]
                    updatedMessages[lastIndex] = processedMessage

                    // Сохраняем обновленные сообщения
                    chatsStore.saveMessages(currentChatId.value, updatedMessages)
                }
            } catch (error) {
                console.error('Ошибка при обработке изображений:', error)
            } finally {
                isProcessingImages.value = false
            }
        }
    }

    return {
        currentChatId,
        messages,
        isProcessingImages,
        setCurrentChat,
        processLastMessageImages
    }
})