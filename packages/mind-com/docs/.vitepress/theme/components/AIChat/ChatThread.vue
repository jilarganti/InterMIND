<script setup lang="ts">
/// <reference types="vitepress/client" />

import { ref, onMounted, watch, onUnmounted, computed, watchEffect, inject } from "vue"
import type { Ref, ComputedRef } from "vue"
import { useChat } from "@ai-sdk/vue"
import { useChatUi } from "../../composables/AIChat/useChatUi"
import { useChatsStore } from "../../stores/chatsStore"
import ChatFooter from "./ChatFooter.vue"
import { useData } from "vitepress" // Импортируем useData из VitePress

interface Props {
  chatId: string
}

const props = defineProps<Props>()

// Получаем начальное сообщение
const initialMessage = inject<Ref<string | null>>("initialMessage", ref(null))

// Получаем данные из VitePress, включая текущую локаль
const { lang, site } = useData()
// console.log("Current locale:", lang.value)

// Рефы для DOM-элементов
const messagesContainerRef = ref<HTMLDivElement | null>(null)
const chatFooterRef = ref<InstanceType<typeof ChatFooter> | null>(null)
const showRawMessages = ref(false)

// Проверка на режим разработки
const isDevelopment = computed(() => !import.meta.env.VITE_IS_PROD)

// Инициализируем хранилище чатов
const chatsStore = useChatsStore()

// Текущий режим запроса (по умолчанию "basic")
const currentMode = ref("basic")

// ID для текущей сессии чата (используется для отслеживания изменений)
const chatSessionId = ref(props.chatId)

// Создаем новый chat с помощью useChat
const { messages, input, handleSubmit, status, error, stop, setMessages } = useChat({
  api: "/api/chat",
  id: chatSessionId.value,
  initialMessages: chatsStore.getMessages(props.chatId),
  body: {
    stream: true,
  },
  experimental_prepareRequestBody(options) {
    // Добавляем актуальные значения в каждый запрос
    return {
      ...options,
      mode: currentMode.value,
      language: lang.value.split("-")[0],
    }
  },
  onResponse(response) {
    // console.log("Received HTTP response from server:", response)
  },
  onToolCall({ toolCall }) {},
  onFinish: () => {
    // Проверяем, что chatId не изменился во время получения ответа
    if (chatSessionId.value !== props.chatId) return

    // Сбрасываем режим на стандартный после получения ответа
    currentMode.value = "basic"

    // Прокручиваем к последнему сообщению
    scrollToBottom()
  },
  onError: () => {
    // Сбрасываем режим на стандартный после ошибки
    currentMode.value = "basic"
  },
})

// Наблюдаем за изменениями сообщений только для прокрутки
// Больше НЕ обрабатываем изображения во время стриминга
watch(
  messages,
  () => {
    // Просто прокручиваем к последнему сообщению при любых изменениях
    if (status.value === "streaming") {
      scrollToBottom()
    }
  },
  { deep: true },
)

// Инициализируем composable для UI элементов
const { renderMarkdown, scrollToBottom, setupImageClickHandler } = useChatUi(
  messagesContainerRef,
  computed(() => chatFooterRef.value?.textareaRef || null), // передаем textareaRef из ChatFooter
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
const submitTextDirectly = (text: string, mode = "basic") => {
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
const { setupImageClicks, cleanupImageClicks } = setupImageClickHandler((text, mode) => submitTextDirectly(text, mode))

// Когда chatId меняется, обновляем chatSessionId и перезагружаем сообщения
watchEffect(() => {
  if (props.chatId !== chatSessionId.value) {
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

  // Отправляем начальное сообщение, если оно есть
  if (initialMessage.value) {
    // Небольшая задержка для гарантии инициализации
    setTimeout(() => {
      if (initialMessage.value) {
        // Проверяем еще раз внутри setTimeout
        input.value = initialMessage.value
        handleSubmitWithScroll()
        // Очищаем после отправки
        initialMessage.value = null
      }
    }, 100)
  }
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
      ref="chatFooterRef"
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
  /* width: 100%; */
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

/* Стили для интерактивных блоков и изображений */
.message.assistant .message-content :deep(.interactive-blockquote-text) {
  color: var(--chat-brand-color);
  cursor: pointer;
  display: inline-block;
  width: 100%;
}

.message.assistant .message-content :deep(.interactive-blockquote-text:hover) {
  opacity: 0.8;
}

.message.assistant .message-content :deep(.interactive-question-text) {
  color: var(--chat-brand-color);
  cursor: pointer;
  display: inline-block;
  width: 100%;
  transition: opacity 0.2s ease;
}

.message.assistant .message-content :deep(.interactive-question-text:hover) {
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

.message.assistant .message-content :deep(table) {
  display: inline-table; /* Меняем display: block на inline-table */
}
</style>
