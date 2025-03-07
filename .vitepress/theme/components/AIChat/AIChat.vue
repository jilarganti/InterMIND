<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from "vue"
import { ArrowUp, Square } from "lucide-vue-next"
import { useChat } from "@ai-sdk/vue"
// Импортируем новые утилиты
import { useMarkdownRenderer, useScrollToBottom, useTextarea } from "@theme/utils/chatUtils"
// Импортируем утилиту для обработки изображений
import { processImagesInMessage } from "@theme/utils/imageProcessor"
// Импортируем хранилище чатов
import { useChatsStore } from "@theme/stores/chatsStore"

const props = defineProps<{
  chatId: string
}>()

// Рефы для DOM-элементов
const messagesContainerRef = ref<HTMLDivElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

// Инициализируем хранилище чатов
const chatsStore = useChatsStore()

// Используем новый рендерер Markdown
const { renderMarkdown } = useMarkdownRenderer()

// Обработка скролла
const { scrollToBottom } = useScrollToBottom(messagesContainerRef)

// Создаем новый chat с помощью useChat
const { messages, input, handleSubmit, status, error, stop, setMessages } = useChat({
  api: "/api/chat",
  id: props.chatId,
  initialMessages: chatsStore.getMessages(props.chatId),
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

          // Создаем новый массив, чтобы обеспечить реактивное обновление
          const updatedMessages = [...messages.value]
          updatedMessages[lastIndex] = processedMessage

          setMessages(updatedMessages)
        }
      }
    }

    // Сохраняем сообщения после завершения
    chatsStore.saveMessages(props.chatId, messages.value)

    // Скроллим вниз
    scrollToBottom()
  },
  onError: (error) => {
    console.error("Chat error:", error)
  },
})

// Добавьте этот watch для отслеживания изменения chatId
watch(
  () => props.chatId,
  (newChatId, oldChatId) => {
    console.log(`ID чата изменился: ${oldChatId} -> ${newChatId}`)

    // Загружаем сообщения для нового чата
    const savedMessages = chatsStore.getMessages(newChatId)

    // Обновляем сообщения в useChat
    setMessages(savedMessages)
  },
)

// Логика работы с текстовым полем
const { handleInput, insertText, handleKeyDown } = useTextarea(textareaRef, input)

// Обработчик отправки сообщения
const handleSubmitWithScroll = async (event: Event) => {
  event.preventDefault()

  if (!input.value.trim() || status.value === "streaming") {
    return
  }

  try {
    await handleSubmit(event)
    scrollToBottom()
  } catch (e) {
    console.error("Failed to send message:", e)
  }
}

// Остановка генерации ответа
const handleStop = (): void => {
  stop()
}

// Функция для отправки текста напрямую (используется для быстрых ответов)
const submitTextDirectly = (text: string) => {
  if (text.trim() && status.value !== "streaming") {
    // Устанавливаем текст в поле ввода
    input.value = text

    // Отправляем сообщение
    handleSubmitWithScroll(new Event("submit"))
  }
}

// Обработчик клика по изображению
function handleImageClick(event: MouseEvent) {
  const target = event.target as HTMLElement

  // Проверяем, что кликнули по интерактивному изображению
  if (target && target.classList.contains("chat-interactive-image")) {
    // Получаем оригинальный поисковый запрос из атрибутов
    const query = target.getAttribute("data-query")
    if (query) {
      console.log(`🟢 CLIENT: Клик по изображению с запросом "${query}"`)

      // Создаем фидбек пользователю, что запрос отправляется
      const pulseAnimation = "pulse 1s 2"
      const originalTransition = target.style.transition

      // Применяем эффект пульсации
      target.style.transition = "all 0.3s"
      target.style.animation = pulseAnimation
      target.style.boxShadow = "0 0 0 2px var(--vp-c-brand)"

      setTimeout(() => {
        // Отправляем запрос в чат
        submitTextDirectly(query)

        // Восстанавливаем стили
        setTimeout(() => {
          target.style.animation = ""
          target.style.boxShadow = ""
          target.style.transition = originalTransition
        }, 1000)
      }, 300)
    }
  }
}

// Подключаем обработчик кликов по изображениям
onMounted(() => {
  if (messagesContainerRef.value) {
    messagesContainerRef.value.addEventListener("click", handleImageClick)
  }
})

onUnmounted(() => {
  if (messagesContainerRef.value) {
    messagesContainerRef.value.removeEventListener("click", handleImageClick)
  }
})

// Автоматическая прокрутка при изменении сообщений
watch(
  messages,
  () => {
    scrollToBottom()
  },
  { deep: true },
)

// Сохраняем сообщения при изменении
watch(
  messages,
  (newMessages) => {
    if (newMessages.length > 0) {
      chatsStore.saveMessages(props.chatId, newMessages)
    }
  },
  { deep: true },
)

// Экспорт метода insertText для использования извне
defineExpose({ insertText })
</script>

<template>
  <div class="chat-frame">
    <!-- Messages area -->
    <div ref="messagesContainerRef" class="messages-container">
      <div v-for="msg in messages" :key="msg.id" class="message" :class="msg.role">
        <div class="message-content" v-html="renderMarkdown(msg.content)"></div>
      </div>

      <!-- Error message -->
      <div v-if="error" class="error-message">
        {{ error.message }}
      </div>

      <!-- Status indicator -->
      <div v-if="status === 'streaming'" class="typing-indicator">AI is typing...</div>
    </div>

    <!-- Input area -->
    <div class="input-container">
      <form @submit.prevent="handleSubmitWithScroll" class="input-form">
        <textarea
          v-model="input"
          @keydown="(e) => handleKeyDown(e, handleSubmitWithScroll)"
          @input="handleInput"
          ref="textareaRef"
          placeholder="Message (⇧↵ for new line)"
          :disabled="status === 'streaming'"
          class="message-input"
          rows="1"
        ></textarea>
        <div class="button-container">
          <button v-if="status !== 'streaming'" type="submit" :disabled="!input.trim()" class="send-button">
            <component :is="ArrowUp" :size="20" />
          </button>
          <button v-else type="button" @click="handleStop" class="stop-button">
            <component :is="Square" :size="20" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.chat-frame {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: var(--vp-c-gray-bg);
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  scroll-behavior: smooth;
}

.message {
  margin-bottom: 1rem;
  display: flex;
}

.message-content {
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: inline-block;
  max-width: 90%;
}

.message-content :deep(p) {
  margin: 0;
  line-height: 1.5;
}

.message-content :deep(ul),
.message-content :deep(ol) {
  margin: 0;
  padding-left: 1.5rem;
}

.message-content :deep(li) {
  margin: 0;
  line-height: 1.5;
}

.message-content :deep(li p) {
  margin: 0;
  display: inline;
}

.message-content :deep(p) {
  margin: 0.5rem 0;
}

.message-content :deep(p:first-child) {
  margin-top: 0;
}

.message-content :deep(p:last-child) {
  margin-bottom: 0;
}

.message-content :deep(a) {
  color: var(--vp-c-main-1);
  text-decoration: underline;
}

.message-content :deep(code) {
  background-color: var(--vp-c-gray-bg);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: ui-monospace, monospace;
  color: var(--vp-hl-color);
}

.message-content :deep(pre) {
  background-color: var(--vp-c-main-2);
  color: var(--vp-c-gray-bg);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 0.5rem 0;
}

.message-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
  color: inherit;
}

.message.user {
  justify-content: flex-end;
}

.message.assistant {
  justify-content: flex-start;
}

.message.user .message-content {
  background-color: var(--vp-c-blue-bg);
  color: var(--vp-c-main-1);
}

.message.assistant .message-content {
  background-color: var(--vp-c-gray-bg);
  color: var(--vp-c-main-1);
}

.typing-indicator {
  padding: 0.5rem;
  color: var(--vp-c-main-2);
  font-size: 0.875rem;
}

.error-message {
  padding: 0.75rem;
  margin: 1rem 0;
  background-color: var(--vp-custom-block-danger-bg);
  color: var(--vp-c-main-1);
  border-radius: 0.5rem;
}

.input-container {
  border-top: 1px solid var(--vp-c-gray-border);
  padding: 1rem;
  background-color: var(--vp-c-gray-bg);
}

.input-form {
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
}

.message-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-gray-border);
  border-radius: 0.5rem;
  font-size: 1rem;
  resize: none;
  min-height: 2.5rem;
  height: 2.5rem;
  max-height: 10rem;
  background-color: var(--vp-c-gray-bg);
  color: var(--vp-c-main-1);
  transition: border-color 0.2s;
}

.message-input:focus {
  outline: none;
  border-color: var(--vp-c-main-2);
}

.message-input:disabled {
  background-color: var(--vp-c-gray-bg);
  cursor: not-allowed;
}

.button-container {
  flex-shrink: 0;
}

.send-button,
.stop-button {
  padding: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.send-button {
  background-color: var(--vp-c-main-3);
  color: var(--vp-c-gray-bg);
}

.send-button:hover {
  background-color: var(--vp-c-main-2);
}

.send-button:disabled {
  background-color: var(--vp-c-main-1);
  cursor: not-allowed;
}

.stop-button {
  background-color: var(--vp-custom-block-danger-border);
  color: var(--vp-c-gray-bg);
}

.stop-button:hover {
  background-color: var(--vp-c-main-2);
}
</style>
