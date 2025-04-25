<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue"
// Import Loader2 icon
import { ArrowUp, Square, Bug, Loader2 } from "lucide-vue-next"

interface Props {
  /**
   * Текст в поле ввода
   */
  inputValue: string

  /**
   * Статус отправки сообщения ('idle'/'ready'/'submitted', 'streaming', 'error')
   */
  status: "idle" | "ready" | "submitted" | "streaming" | "error"

  /**
   * Сообщение об ошибке (если есть)
   */
  errorMessage?: string

  /**
   * Флаг для включения режима отладки
   */
  debugMode?: boolean

  /**
   * Идентификатор текущего макета (desktop или mobile)
   */
  layout?: "desktop" | "mobile"

  /**
   * Специфичный режим для чата
   */
  currentMode?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  /**
   * Событие обновления текста в поле ввода
   */
  (e: "update:inputValue", value: string): void

  /**
   * Событие отправки сообщения
   */
  (e: "send", event?: Event): void

  /**
   * Событие остановки генерации
   */
  (e: "stop"): void

  /**
   * Событие переключения режима отладки
   */
  (e: "toggle-debug"): void
}>()

// Ref для текстового поля
const textareaRef = ref<HTMLTextAreaElement | null>(null)

// Проверка на режим разработки
const isDevelopment = ref(!import.meta.env.VITE_IS_PROD)

// Проверка наличия текста в поле ввода
const hasInputContent = computed(() => {
  return props.inputValue.trim().length > 0
})

// Проверка на мобильное устройство
const isMobile = ref(false)

// Обновляем флаг при изменении размера окна
onMounted(() => {
  updateIsMobile()
  window.addEventListener("resize", updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile)
})

function updateIsMobile() {
  isMobile.value = window.innerWidth < 768
}

// Функция для отправки сообщения
const handleSubmit = (event: Event): void => {
  // Если поле пустое или идет отправка, не делаем ничего
  if (!props.inputValue.trim() || props.status === "streaming") {
    return
  }

  // Передаем событие в emit для правильной обработки в родительском компоненте
  emit("send", event)

  // Сбрасываем высоту поля ввода после отправки
  resetHeight()
}

// Обработчик ввода для подстройки высоты textarea
const handleInput = (event: Event): void => {
  const textarea = event.target as HTMLTextAreaElement
  adjustHeight(textarea)

  // Обновляем текст в родительском компоненте
  emit("update:inputValue", textarea.value)
}

// Регулировка высоты textarea
const adjustHeight = (target: HTMLTextAreaElement): void => {
  target.style.height = "auto"
  target.style.height = `${target.scrollHeight}px`
}

// Сброс высоты textarea
const resetHeight = (): void => {
  if (textareaRef.value) {
    textareaRef.value.style.height = "auto"
    // textareaRef.value.style.height = "24px"
  }
}

// Обработчик нажатий клавиш
const handleKeyDown = (event: KeyboardEvent): void => {
  // Для мобильных устройств Enter добавляет новую строку
  if (isMobile.value) {
    return // Стандартное поведение
  }

  // Для десктопа Enter без Shift отправляет сообщение
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault()
    if (props.inputValue.trim()) {
      handleSubmit(event)
    }
  }
}
</script>

<template>
  <div class="chat-footer">
    <form @submit.prevent="handleSubmit" class="input-form">
      <!-- Кнопка отладки (только для разработки) -->
      <button
        v-if="isDevelopment"
        type="button"
        @click="emit('toggle-debug')"
        class="debug-icon-button"
        :class="{ 'debug-active': debugMode }"
        :title="debugMode ? 'Отключить режим отладки' : 'Включить режим отладки'"
      >
        <Bug :size="18" />
      </button>

      <!-- Поле ввода -->
      <textarea
        :value="inputValue"
        @input="handleInput"
        @keydown="handleKeyDown"
        ref="textareaRef"
        placeholder="Message (⇧↵ for new line)"
        :disabled="status === 'streaming'"
        class="message-input"
        :class="{ 'has-content': hasInputContent }"
        rows="1"
      ></textarea>

      <!-- Единая кнопка отправки/остановки -->
      <div class="button-container">
        <button
          type="button"
          class="action-button"
          :class="{
            'send-button': status !== 'streaming' && status !== 'submitted',
            'stop-button': status === 'streaming',
            'loading-button': status === 'submitted' // Add class for loading state
          }"
          :disabled="status === 'submitted' || (status !== 'streaming' && !inputValue.trim())" 
          @click="status === 'streaming' ? emit('stop') : (status !== 'submitted' ? handleSubmit($event) : null)" 
        >
          <!-- Show ArrowUp when ready to send -->
          <ArrowUp v-if="status !== 'streaming' && status !== 'submitted'" :size="20" />
          <!-- Show Loader when waiting for response -->
          <Loader2 v-else-if="status === 'submitted'" :size="20" class="animate-spin" />
          <!-- Show Square when streaming -->
          <Square v-else :size="20" />
        </button>
      </div>
    </form>

    <!-- Сообщение об ошибке -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped>
/* Основной футер */
.chat-footer {
  padding: 0;
  background-color: var(--vp-c-bg);
  margin-top: auto;
  border-top: 1px solid var(--vp-c-divider);
}

/* Форма ввода */
.input-form {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 48rem;
  margin: 0 auto;
  padding: 12px 16px;
}

/* Поле ввода */
.message-input {
  flex: 1;
  padding: 10px 16px;
  border-radius: 24px;
  font-size: 1rem;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  outline: none;
  border: 1px solid var(--vp-c-divider);
  resize: none;
  overflow: hidden;
  height: auto;
  min-height: 24px;
  font-family: inherit;
}

.message-input:focus {
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand);
}

.message-input:disabled {
  background-color: var(--vp-c-bg-mute);
  cursor: not-allowed;
  opacity: 0.7;
}

.message-input.has-content {
  background-color: var(--vp-c-bg-mute);
}

/* Контейнер кнопок */
.button-container {
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
}

/* Общие стили для кнопки действия (отправки/остановки) */
.action-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Стили для режима отправки */
.send-button {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.send-button:hover {
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-divider-dark);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: default;
}

/* Стили для режима остановки */
.stop-button {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-warning-soft);
  border: 1px solid var(--vp-c-divider);
}

.stop-button:hover {
  background-color: var(--vp-c-warning-soft);
  border-color: var(--vp-c-danger-dark);
}

/* Styles for loading state */
.loading-button {
  color: var(--vp-c-text-2); /* Use a muted color */
  background-color: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  cursor: wait; /* Indicate waiting */
}

/* Spinning animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Сообщение об ошибке */
.error-message {
  padding: 0.75rem 1rem;
  margin: 0 1rem 1rem;
  background-color: var(--vp-custom-block-danger-bg);
  color: var(--vp-c-text-1);
  border-radius: 0.5rem;
  font-size: 0.875rem;
}

/* Кнопка отладки */
.debug-icon-button {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.debug-icon-button:hover {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.debug-icon-button.debug-active {
  background-color: var(--vp-custom-block-warning-bg);
  color: var(--vp-hl-color);
}
</style>
