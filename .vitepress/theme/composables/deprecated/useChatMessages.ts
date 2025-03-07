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

  // Таймер проверки маркеров - используем примитив вместо ref
  let checkForImageMarkersTimer: number | null = null

  // Флаг для отслеживания активного стрима
  const isStreamActive = ref(false)

  // Функция для надежного удаления таймера
  const clearImageMarkersTimer = () => {
    if (checkForImageMarkersTimer !== null) {
      console.log("🔧 CLIENT: Очищаем таймер проверки маркеров изображений")
      window.clearInterval(checkForImageMarkersTimer)
      checkForImageMarkersTimer = null
    }
  }

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

      // Всегда очищаем таймер при завершении ответа
      clearImageMarkersTimer()

      // Сбрасываем флаг активного стрима
      isStreamActive.value = false

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

            // Создаем новый массив, чтобы обеспечить реактивное обновление
            const updatedMessages = [...messages.value]
            updatedMessages[lastIndex] = processedMessage

            setMessages(updatedMessages)
          }
        }
      }

      // Сохраняем сообщения после завершения
      saveMessages(currentChatId.value, messages.value)

      // Скроллим вниз
      nextTick(() => {
        scrollToBottom()
      })
    },
    onError: (error) => {
      console.error("Chat error:", error)

      // Очищаем таймер при ошибке
      clearImageMarkersTimer()

      // Сбрасываем флаг активного стрима
      isStreamActive.value = false
    },
  })

  // Наблюдаем за изменением статуса
  watch(
    () => status.value,
    (newStatus) => {
      // Обновляем флаг активного стрима
      isStreamActive.value = newStatus === "streaming"

      // Если стрим остановлен, очищаем таймер
      if (newStatus !== "streaming") {
        clearImageMarkersTimer()
      }
    }
  )

  // Сброс высоты textarea
  const resetTextareaHeight = (): void => {
    if (textareaRef.value) {
      textareaRef.value.style.height = "auto"
    }
  }

  // Обработчик отправки с учетом скроллинга
  const handleSubmitWithScroll = async (event: Event): Promise<void> => {
    event.preventDefault()

    if (!input.value.trim() || status.value === "streaming") {
      return
    }

    try {
      // Перед новым запросом очищаем таймер, если он существует
      clearImageMarkersTimer()

      await handleSubmit(event)
      scrollToBottom()
      resetTextareaHeight()
    } catch (e) {
      console.error("Failed to send message:", e)
    }
  }

  // Остановка генерации ответа
  const handleStop = (): void => {
    // Очищаем таймер при остановке стрима
    clearImageMarkersTimer()

    // Останавливаем генерацию
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
      // Очищаем таймер при переключении чата
      clearImageMarkersTimer()

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