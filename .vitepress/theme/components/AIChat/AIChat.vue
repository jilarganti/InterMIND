<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from "vue"
import { ArrowUp, Square } from "lucide-vue-next"
import { useChat } from "@ai-sdk/vue"
import { useChatUi } from "@theme/composables/AIChat/useChatUi"
import { processImagesInMessage } from "@theme/utils/chatUtils"
import { useChatsStore } from "@theme/stores/chatsStore"

const props = defineProps<{
  chatId: string
}>()

// Рефы для DOM-элементов
const messagesContainerRef = ref<HTMLDivElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

// Инициализируем хранилище чатов
const chatsStore = useChatsStore()

// Создаем новый chat с помощью useChat
const { messages, input, handleSubmit, status, error, stop, setMessages } = useChat({
  api: "/api/chat",
  id: props.chatId,
  initialMessages: chatsStore.getMessages(props.chatId),
  body: {
    stream: true,
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

    // Прокручиваем к последнему сообщению
    scrollToBottom()
  },
  onError: (error) => {
    console.error("Chat error:", error)
  },
})

// Инициализируем композабл для UI элементов
const { renderMarkdown, scrollToBottom, handleInput, insertText, handleKeyDown, setupImageClickHandler } = useChatUi(messagesContainerRef, textareaRef, input)

// Обработчик отправки сообщения с прокруткой
const handleSubmitWithScroll = async (event: Event) => {
  event.preventDefault()

  if (!input.value.trim() || status.value === "streaming") {
    return
  }

  await handleSubmit(event)
  scrollToBottom()
}

// Функция для отправки текста напрямую (используется для быстрых ответов)
const submitTextDirectly = (text: string) => {
  if (text.trim() && status.value !== "streaming") {
    input.value = text
    handleSubmitWithScroll(new Event("submit"))
  }
}

// Настройка обработчика кликов по изображениям
const { setupImageClicks, cleanupImageClicks } = setupImageClickHandler(submitTextDirectly)

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
          <button v-else type="button" @click="stop" class="stop-button">
            <component :is="Square" :size="20" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
