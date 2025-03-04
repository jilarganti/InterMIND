import { ref, watch, nextTick } from "vue"
import type { Ref } from "vue"
import { useChat } from "@ai-sdk/vue"
import { useChatsStorage } from "./useChatsStorage"
import { useImageProcessing } from "./useImageProcessing"
import { useScrollToBottom } from "./useScrollToBottom"
import type { UIMessage } from "@ai-sdk/ui-utils"

export function useChatMessages(chatId: string, messagesContainerRef: Ref<HTMLDivElement | null>, textareaRef: Ref<HTMLTextAreaElement | null>) {
  const { saveMessages, getMessages } = useChatsStorage()
  const { processImagesInMessage } = useImageProcessing()
  const { scrollToBottom } = useScrollToBottom(messagesContainerRef)

  // Инициализируем с сохраненными сообщениями
  const currentChatId = ref(chatId)

  const { messages, input, handleSubmit, status, error, stop, setMessages } = useChat({
    api: "/api/chat",
    id: chatId,
    initialMessages: getMessages(chatId),
    body: {
      stream: true,
    },
    headers: {
      "Content-Type": "application/json",
    },
    onResponse: (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    },
    onFinish: async () => {
      console.log(`🟢 CLIENT: Ответ завершен, начинаем обработку изображений...`)

      // Если есть сообщения, обрабатываем последнее (от ассистента)
      if (messages.value.length > 0) {
        const lastIndex = messages.value.length - 1
        const lastMessage = messages.value[lastIndex]

        if (lastMessage.role === "assistant") {
          // Обрабатываем маркеры изображений в последнем сообщении
          const processedMessage = await processImagesInMessage(lastMessage)

          // Обновляем сообщение, если оно изменилось
          if (processedMessage !== lastMessage) {
            console.log(`🟢 CLIENT: Обновляем сообщение с обработанными изображениями`)
            messages.value = [...messages.value.slice(0, lastIndex), processedMessage]
          }
        }
      }

      saveMessages(currentChatId.value, messages.value)
      scrollToBottom()
    },
    onError: (error) => {
      console.error("Chat error:", error)
    },
  })

  // Сброс высоты textarea
  const resetTextareaHeight = (): void => {
    if (textareaRef.value) {
      textareaRef.value.style.height = "auto"
    }
  }

  // Обработчик отправки с учетом скроллинга
  const handleSubmitWithScroll = async (event: Event): Promise<void> => {
    event.preventDefault()

    if (!input.value.trim() && status.value !== "streaming") {
      return
    }

    try {
      await handleSubmit(event)
      scrollToBottom()
      resetTextareaHeight()
    } catch (e) {
      console.error("Failed to send message:", e)
    }
  }

  // Остановка генерации ответа
  const handleStop = (): void => {
    stop()
  }

  // Автоматический скролл при изменении сообщений
  watch(
    messages,
    () => {
      scrollToBottom()
    },
    { deep: true },
  )

  // Следим за изменением chatId в компоненте
  watch(
    () => chatId,
    (newChatId, oldChatId) => {
      currentChatId.value = newChatId

      // Сохраняем сообщения предыдущего чата
      if (oldChatId && messages.value.length > 0) {
        saveMessages(oldChatId, messages.value)
      }

      // Загружаем сообщения для нового чата через setMessages
      const savedMessages = getMessages(newChatId)
      setMessages(savedMessages)
    },
    { immediate: true },
  )

  // Сохраняем сообщения при изменении
  watch(
    messages,
    (newMessages) => {
      if (newMessages.length > 0) {
        saveMessages(currentChatId.value, newMessages)
      }
    },
    { deep: true },
  )

  return {
    messages,
    input,
    status,
    error,
    handleSubmitWithScroll,
    handleStop,
    setMessages,
  }
}
