<script setup lang="ts">
import { ref, watch, nextTick } from "vue"
import { useChat } from "@ai-sdk/vue"
import { ArrowUp, Square } from "lucide-vue-next"
import MarkdownIt from "markdown-it"
import { useChatsStorage } from "../composables/useChatsStorage"
import type { UIMessage } from "@ai-sdk/ui-utils"

const props = defineProps<{
  chatId: string
}>()

const { saveMessages, getMessages } = useChatsStorage()

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: false,
})

// Настройка открытия ссылок в новой вкладке
const defaultRender = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  tokens[idx].attrSet("target", "_blank")
  tokens[idx].attrSet("rel", "noopener")
  return defaultRender(tokens, idx, options, env, self)
}

// Настройка обработки переносов строк
md.set({ breaks: false })

const renderMarkdown = (content: string) => {
  return md.render(content)
}

const messagesContainerRef = ref<HTMLDivElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

// Инициализируем с сохраненными сообщениями
const currentMessages = ref<UIMessage[]>(getMessages(props.chatId))

// В <script setup> AIChat.vue меняем эту часть:

const { messages, input, handleSubmit, status, error, stop, setMessages } = useChat({
  api: "/api/chat",
  id: props.chatId,
  initialMessages: getMessages(props.chatId),
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
  onFinish: () => {
    saveMessages(props.chatId, messages.value)
    scrollToBottom()
  },
  onError: (error) => {
    console.error("Chat error:", error)
  },
})

// Заменяем watch для chatId
watch(
  () => props.chatId,
  (newChatId, oldChatId) => {
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

// Обновляем watch для messages
watch(
  messages,
  (newMessages) => {
    if (newMessages.length > 0) {
      saveMessages(props.chatId, newMessages)
    }
  },
  { deep: true },
)

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainerRef.value) {
    const container = messagesContainerRef.value
    container.scrollTop = container.scrollHeight
  }
}

watch(
  messages,
  () => {
    scrollToBottom()
  },
  { deep: true },
)

const adjustTextareaHeight = (target: HTMLTextAreaElement) => {
  target.style.height = "auto"
  target.style.height = `${target.scrollHeight}px`
}

const handleInput = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  adjustTextareaHeight(textarea)
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault()
    if (input.value.trim() && status.value !== "streaming") {
      handleSubmitWithScroll(event)
    }
  }
}

const resetTextareaHeight = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = "auto"
  }
}

const handleSubmitWithScroll = async (event: Event) => {
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

const handleStop = () => {
  stop()
}

// Method to insert text at cursor position
const insertText = (text: string) => {
  if (textareaRef.value) {
    const textarea = textareaRef.value
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const textBefore = input.value.substring(0, start)
    const textAfter = input.value.substring(end)

    input.value = textBefore + text + textAfter

    // Set cursor position after inserted text
    nextTick(() => {
      textarea.focus()
      const newPosition = start + text.length
      textarea.selectionStart = newPosition
      textarea.selectionEnd = newPosition
      adjustTextareaHeight(textarea)
    })
  }
}

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
          @keydown="handleKeyDown"
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
