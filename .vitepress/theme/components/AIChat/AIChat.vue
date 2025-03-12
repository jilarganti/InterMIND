<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted, computed } from "vue"
import { useChat } from "@ai-sdk/vue"
import { useChatUi } from "@theme/composables/AIChat/useChatUi"
import { processImagesInMessage } from "@theme/utils/chatUtils"
import { useChatsStore } from "@theme/stores/chatsStore"
import ChatFooter from "./ChatFooter.vue"

const props = defineProps<{
  chatId: string
}>()

// Рефы для DOM-элементов
const messagesContainerRef = ref<HTMLDivElement | null>(null)
const showRawMessages = ref(false)

// Проверка на режим разработки
const isDevelopment = computed(() => !import.meta.env.VITE_IS_PROD)

// Инициализируем хранилище чатов
const chatsStore = useChatsStore()

// Текущий режим запроса (по умолчанию "default")
const currentMode = ref("default")

// Создаем новый chat с помощью useChat
const { messages, input, handleSubmit, status, error, stop, setMessages } = useChat({
  api: "/api/chat",
  id: props.chatId,
  initialMessages: chatsStore.getMessages(props.chatId),
  body: {
    stream: true,
    // Используем функцию, которая будет вызываться при каждом запросе
    getBody: () => ({
      mode: currentMode.value,
    }),
  },
  onFinish: async () => {
    console.log(`🟢 CLIENT: Ответ завершен, mode: ${currentMode.value} → default`)

    // Сбрасываем режим на стандартный после получения ответа
    currentMode.value = "default"

    // Если не показываем сырые сообщения и есть сообщения, обрабатываем последнее (от ассистента)
    if (!showRawMessages.value && messages.value.length > 0) {
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

    // Прокручиваем к последнему сообщению
    scrollToBottom()
  },
  onError: (error) => {
    // Сбрасываем режим на стандартный после ошибки
    currentMode.value = "default"
    console.error("Chat error:", error)
  },
})

// Инициализируем composable для UI элементов
const { renderMarkdown, scrollToBottom, setupImageClickHandler } = useChatUi(
  messagesContainerRef,
  null,
  input,
  // Добавляем функцию для изменения режима
  (mode: string) => {
    currentMode.value = mode
  },
)

// Обработчик отправки сообщения с прокруткой
const handleSubmitWithScroll = async (event: Event) => {
  event.preventDefault()

  if (!input.value.trim() || status.value === "streaming") {
    return
  }

  console.log(`🟢 CLIENT: Отправка запроса в режиме: ${currentMode.value}`)
  await handleSubmit(event)

  scrollToBottom()
}

// Функция для отправки текста напрямую (используется для быстрых ответов)
const submitTextDirectly = (text: string, mode = "default") => {
  if (text.trim() && status.value !== "streaming") {
    // Устанавливаем режим запроса
    console.log(`🟢 CLIENT: Меняем режим: ${currentMode.value} → ${mode}`)
    currentMode.value = mode
    input.value = text
    handleSubmitWithScroll(new Event("submit"))
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

// Подключаем обработчик кликов по изображениям при монтировании
onMounted(() => {
  setupImageClicks()
})

// Отключаем обработчик при удалении компонента
onUnmounted(() => {
  cleanupImageClicks()
})

// Универсальный наблюдатель для обработки изменений chatId и сохранения сообщений
watch(
  [() => props.chatId, messages],
  ([newChatId, newMessages], [oldChatId]) => {
    // Обработка изменения ID чата
    if (newChatId !== oldChatId && oldChatId !== undefined) {
      console.log(`🟢 CLIENT: ID чата изменился: ${oldChatId} -> ${newChatId}`)
      setMessages(chatsStore.getMessages(newChatId))
    }

    // Сохранение сообщений при их изменении
    if (newMessages.length > 0) {
      chatsStore.saveMessages(newChatId, newMessages)
    }

    // Прокрутка при изменении сообщений
    scrollToBottom()
  },
  { deep: true },
)

// Экспортируем методы для использования из родительского компонента
defineExpose({ insertText, submitTextDirectly })
</script>

<template>
  <div class="chat-frame">
    <!-- Messages area -->
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
.chat-frame {
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
  margin-bottom: 0.5rem;
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
  padding: 0.5rem;
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
</style>
