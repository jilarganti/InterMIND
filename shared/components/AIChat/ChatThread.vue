<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted, computed, watchEffect } from "vue"
import { useChat } from "@ai-sdk/vue"
import { useChatUi } from "../../composables/AIChat/useChatUi"
import { useChatsStore } from "../../stores/chatsStore"
import { ImageLoader } from "../../utils/imageLoader"
import ChatFooter from "./ChatFooter.vue"
import type { UIMessage } from "@ai-sdk/ui-utils"
import { useData } from "vitepress" // Импортируем useData из VitePress

interface Props {
  chatId: string
}

const props = defineProps<Props>()

// Получаем данные из VitePress, включая текущую локаль
const { lang } = useData()
console.log("Current locale:", lang.value)

// Рефы для DOM-элементов
const messagesContainerRef = ref<HTMLDivElement | null>(null)
const showRawMessages = ref(false)

// Проверка на режим разработки
const isDevelopment = computed(() => !import.meta.env.VITE_IS_PROD)

// Инициализируем хранилище чатов
const chatsStore = useChatsStore()

// Текущий режим запроса (по умолчанию "default")
const currentMode = ref("default")

// ID для текущей сессии чата (используется для отслеживания изменений)
const chatSessionId = ref(props.chatId)

// Создаем экземпляр ImageLoader для обработки изображений
const imageLoader = new ImageLoader((messageIndex, placeholder, imageHtml) => {
  // Функция обратного вызова для обновления сообщения
  if (messages.value[messageIndex]) {
    // Создаем новый массив для реактивного обновления
    const updatedMessages = [...messages.value]

    // Заменяем плейсхолдер на HTML с изображением
    updatedMessages[messageIndex] = {
      ...updatedMessages[messageIndex],
      content: updatedMessages[messageIndex].content.replace(placeholder, imageHtml),
    }

    // Обновляем сообщения
    setMessages(updatedMessages)
  }
})

// Создаем новый chat с помощью useChat
const { messages, input, handleSubmit, status, error, stop, setMessages } = useChat({
  api: "/api/chat",
  id: chatSessionId.value,
  initialMessages: chatsStore.getMessages(props.chatId),
  body: {
    mode: currentMode.value,
    language: lang.value.split("-")[0],
    stream: true,
  },
  onResponse(response) {
    // console.log("Received HTTP response from server:", response)
  },
  onToolCall({ toolCall }) {},
  experimental_prepareRequestBody(options) {},
  onFinish: async () => {
    // Проверяем, что chatId не изменился во время получения ответа
    if (chatSessionId.value !== props.chatId) return

    // Сбрасываем режим на стандартный после получения ответа
    currentMode.value = "default"

    // Если есть сообщения и последнее от ассистента
    if (messages.value.length > 0) {
      const lastIndex = messages.value.length - 1
      const lastMessage = messages.value[lastIndex]

      if (lastMessage.role === "assistant") {
        // Обрабатываем маркеры изображений с финальной заменой
        const processedContent = imageLoader.processImageMarkers(
          lastMessage.content,
          lastIndex,
          true, // ответ завершен
        )

        // Финализируем сообщение - заменяем все плейсхолдеры на изображения
        const finalMessage = await imageLoader.finalizeMessage({ ...lastMessage, content: processedContent }, lastIndex)

        // Обновляем сообщение, если оно изменилось
        if (finalMessage !== lastMessage) {
          // Создаем новый массив для реактивного обновления
          const updatedMessages = [...messages.value]
          updatedMessages[lastIndex] = finalMessage

          setMessages(updatedMessages)
        }
      }
    }

    // Прокручиваем к последнему сообщению
    scrollToBottom()
  },
  onError: () => {
    // Сбрасываем режим на стандартный после ошибки
    currentMode.value = "default"
    // Сбрасываем состояние загрузки изображений
    imageLoader.reset()
  },
})

// Наблюдаем за изменениями сообщений для обработки стриминга
// Это альтернатива onStream, которой нет в @ai-sdk/vue
watch(
  messages,
  (newMessages, oldMessages) => {
    // Проверяем, что идет стриминг и появилось новое сообщение ассистента
    if (status.value === "streaming" && newMessages.length > 0) {
      const lastIndex = newMessages.length - 1
      const lastMessage = newMessages[lastIndex]

      // Обрабатываем только сообщения от ассистента
      if (lastMessage.role === "assistant") {
        // Если это новое сообщение ИЛИ контент изменился
        const oldContent = oldMessages[lastIndex]?.content || ""
        if (oldContent !== lastMessage.content) {
          // Обрабатываем маркеры изображений в незавершенном ответе
          const processedContent = imageLoader.processImageMarkers(
            lastMessage.content,
            lastIndex,
            false, // ответ еще не завершен
          )

          // Если контент был изменен, обновляем сообщение
          if (processedContent !== lastMessage.content) {
            const updatedMessages = [...newMessages]
            updatedMessages[lastIndex] = {
              ...lastMessage,
              content: processedContent,
            }

            // Обновляем сообщения, не вызывая рекурсивный вызов watch
            // Используем setTimeout для отложенного обновления
            setTimeout(() => {
              setMessages(updatedMessages)
            }, 0)
          }
        }
      }
    }
  },
  { deep: true },
)

// Инициализируем composable для UI элементов
const { renderMarkdown, scrollToBottom, setupImageClickHandler } = useChatUi(
  messagesContainerRef,
  undefined, // передаем undefined вместо null для типизации
  input,
  // Добавляем функцию для изменения режима
  (mode: string) => {
    currentMode.value = mode
  },
)

// Обработчик отправки сообщения с прокруткой
const handleSubmitWithScroll = async (event?: Event) => {
  // Делаем проверку на наличие события перед вызовом preventDefault
  if (event) {
    event.preventDefault()
  }

  if (!input.value.trim() || status.value === "streaming") {
    return
  }

  // Создаем новое событие, если не было передано существующее
  const submitEvent = event || new Event("submit")
  await handleSubmit(submitEvent)

  scrollToBottom()
}

// Функция для отправки текста напрямую (используется для быстрых ответов)
const submitTextDirectly = (text: string, mode = "default") => {
  if (text.trim() && status.value !== "streaming") {
    // Устанавливаем режим запроса
    currentMode.value = mode
    input.value = text
    handleSubmitWithScroll() // Не передаем событие, будет создано внутри функции
  }
}

// Функция для вставки текста в позицию курсора
const insertText = (text: string): void => {
  input.value += (input.value && !input.value.endsWith(" ") ? " " : "") + text + " "
}

// Функция для переключения отображения сырых сообщений
const toggleRawMessages = () => {
  showRawMessages.value = !showRawMessages.value
}

// Настройка обработчика кликов по изображениям
const { setupImageClicks, cleanupImageClicks } = setupImageClickHandler(
  // Передаем функцию submitTextDirectly вместе с режимом followup
  (text) => submitTextDirectly(text, "followup"),
)

// Когда chatId меняется, обновляем chatSessionId и перезагружаем сообщения
watchEffect(() => {
  if (props.chatId !== chatSessionId.value) {
    // Сбрасываем состояние загрузчика при смене чата
    imageLoader.reset()

    chatSessionId.value = props.chatId

    // Загружаем сообщения для нового чата
    const chatMessages = chatsStore.getMessages(props.chatId)
    setMessages(chatMessages)
  }
})

// Подключаем обработчик кликов по изображениям при монтировании
onMounted(() => {
  setupImageClicks()
  scrollToBottom()
})

// Отключаем обработчик при удалении компонента
onUnmounted(() => {
  cleanupImageClicks()
})

// Наблюдатель для сохранения сообщений
watch(
  messages,
  (newMessages) => {
    // Сохраняем сообщения при их изменении
    if (newMessages.length > 0 && props.chatId === chatSessionId.value) {
      chatsStore.saveMessages(props.chatId, newMessages)
      scrollToBottom()
    }
  },
  { deep: true },
)

// Экспортируем методы для использования из родительского компонента
defineExpose({ insertText, submitTextDirectly })
</script>

<template>
  <div class="chat-thread">
    <!-- Контейнер сообщений -->
    <div ref="messagesContainerRef" class="messages-container">
      <div v-for="msg in messages" :key="msg.id" class="message" :class="msg.role">
        <!-- Raw message display (Debug mode) -->
        <div v-if="showRawMessages" class="message-content raw-message">
          <div class="raw-message-header">
            <span class="raw-role">{{ msg.role.toUpperCase() }}</span>
            <span class="raw-id">ID: {{ msg.id }}</span>
          </div>
          <pre class="raw-content">{{ msg.content }}</pre>
        </div>

        <!-- Formatted message display (Normal mode) -->
        <div v-else class="message-content" v-html="renderMarkdown(msg.content)"></div>
      </div>
    </div>

    <!-- Input area using ChatFooter component -->
    <ChatFooter
      v-model:inputValue="input"
      :status="status"
      :errorMessage="error?.message"
      :debugMode="showRawMessages"
      :currentMode="currentMode"
      @send="handleSubmitWithScroll"
      @stop="stop"
      @toggle-debug="toggleRawMessages"
    />
  </div>
</template>

<style scoped>
.chat-thread {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--vp-c-bg);
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  scroll-behavior: smooth;
}

.message {
  display: flex;
  margin-bottom: 1rem;
}

.message-content {
  border-radius: 0.5rem;
  display: inline-block;
  max-width: 100%;
  box-sizing: border-box;
}

.message.user {
  justify-content: flex-end;
  padding-left: 20%;
}

.message.assistant {
  justify-content: flex-start;
  padding-right: 0;
}

.message.user .message-content {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  width: 100%;
  padding: 0.75rem 1rem;
}

.message.assistant .message-content {
  color: var(--vp-c-text-1);
  width: 100%;
}

/* Стили для отладочного режима */
.raw-message {
  background-color: var(--vp-c-bg-soft);
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-family: monospace;
  font-size: 0.875rem;
}

.raw-message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.raw-role {
  font-weight: bold;
  color: var(--vp-c-brand);
}

.raw-id {
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
}

.raw-content {
  white-space: pre-wrap;
  overflow-x: auto;
  margin: 0;
}

/* Стили для форматирования контента сообщений */
.message.assistant .message-content :deep(p) {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.message.assistant .message-content :deep(ul),
.message.assistant .message-content :deep(ol) {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
}

.message.assistant .message-content :deep(h3),
.message.assistant .message-content :deep(h4) {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.message.assistant .message-content :deep(pre) {
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 0.375rem;
  overflow-x: auto;
}

/* .message.assistant .message-content :deep(code) {
  padding: 0.2rem 0.4rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 0.25rem;
} */

.message.assistant .message-content :deep(blockquote) {
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  border-left: 4px solid var(--chat-brand-color);
  /* background-color: var(--vp-c-bg-soft); */
}

/* Стили для интерактивных ссылок и блоков */
.message.assistant .message-content :deep(.interactive-link-text) {
  color: var(--chat-brand-color);
  cursor: pointer;
  /* text-decoration: underline; */
  margin-right: 0.5em;
}

.message.assistant .message-content :deep(.interactive-link-text:hover) {
  opacity: 0.8;
}

.message.assistant .message-content :deep(.interactive-blockquote-text) {
  color: var(--chat-brand-color);
  cursor: pointer;
  display: inline-block;
  width: 100%;
}

.message.assistant .message-content :deep(.interactive-blockquote-text:hover) {
  opacity: 0.8;
}

/* Стили для интерактивных изображений */
.message.assistant .message-content :deep(.chat-interactive-image) {
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.message.assistant .message-content :deep(.chat-interactive-image:hover) {
  border-color: var(--chat-brand-color);
  transform: scale(1.005);
}

/* Стили для сносок */

/* Подсветка активной сноски */
.message.assistant .message-content :deep(.footnote-highlight) {
  animation: footnote-highlight 2s ease-in-out;
}

@keyframes footnote-highlight {
  0%,
  100% {
    background-color: transparent;
  }
  50% {
    background-color: var(--vp-c-brand-soft);
  }
}
</style>
