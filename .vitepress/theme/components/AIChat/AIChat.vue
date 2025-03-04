<script setup lang="ts">
import { ref } from "vue"
import { ArrowUp, Square } from "lucide-vue-next"
import { useMarkdown } from "@setup/theme/composables/AIChat/useMarkdown"
import { useTextareaHandler } from "@setup/theme/composables/AIChat/useTextareaHandler"
import { useChatMessages } from "@setup/theme/composables/AIChat/useChatMessages"

const props = defineProps<{
  chatId: string
}>()

// Рефы для DOM-элементов
const messagesContainerRef = ref<HTMLDivElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

// Маркдаун-рендерер
const { renderMarkdown } = useMarkdown()

// Основная логика чата
const { messages, input, status, error, handleSubmitWithScroll, handleStop } = useChatMessages(props.chatId, messagesContainerRef, textareaRef)

// Логика работы с текстовым полем
const { handleInput, insertText } = useTextareaHandler(textareaRef, input)

// Обработчик нажатия клавиш
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault()
    if (input.value.trim() && status.value !== "streaming") {
      handleSubmitWithScroll(event)
    }
  }
}

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
