<script setup lang="ts">
import { ref, computed } from "vue"
import ChatThread from "./ChatThread.vue"
import ChatHeader from "./ChatHeader.vue"
import { Home } from "lucide-vue-next"
import { useChatTitle } from "@theme/composables/AIChat/useChatTitle"
import { useQuickPrompts } from "@theme/composables/AIChat/useQuickPrompts"
import { useChatsStore } from "@theme/stores/chatsStore"
import type { ChatThreadMethods } from "@theme/types/ChatThread"
import type { QuickPrompt } from "@theme/composables/AIChat/useQuickPrompts"

const props = defineProps<{
  /**
   * ID чата
   */
  chatId: string

  /**
   * Заголовок чата
   */
  chatTitle: string

  /**
   * Идентификатор текущего макета (desktop или mobile)
   */
  layout?: "desktop" | "mobile"

  /**
   * Показывать ли заголовок чата
   */
  showHeader?: boolean

  /**
   * Показывать ли быстрые подсказки в пустом экране
   */
  showPromptsWhenEmpty?: boolean

  /**
   * Является ли чат черновиком (не добавлен в список)
   */
  isDraft?: boolean

  /**
   * Быстрые подсказки для чата
   */
  prompts?: QuickPrompt[]
}>()

const emit = defineEmits<{
  /**
   * Событие возврата назад (для мобильного макета)
   */
  (e: "go-back"): void

  /**
   * Событие создания нового чата
   */
  (e: "create-chat"): void

  /**
   * Событие изменения заголовка чата
   */
  (e: "update-title", chatId: string, title: string): void

  /**
   * Событие использования быстрой подсказки
   */
  (e: "use-prompt", text: string): void
}>()

// Получаем хранилище для доступа к сообщениям
const chatsStore = useChatsStore()

// Проверяем, есть ли у текущего чата сообщения
const hasMessages = computed(() => {
  if (!props.chatId) return false
  const messages = chatsStore.getMessages(props.chatId)
  return messages && messages.length > 0
})

// Ref для доступа к компоненту ChatThread
const chatThreadRef = ref<ChatThreadMethods | null>(null)

// Ref для input элемента заголовка
const titleInputRef = ref<HTMLInputElement | null>(null)

// Используем composable для управления заголовком
const { isEditingTitle, editableChatTitle, startEditingTitle, saveTitle } = useChatTitle(titleInputRef)

// Получаем список быстрых подсказок из props
const { quickPrompts } = useQuickPrompts(chatThreadRef, props.prompts || [])

// Сохраняем заголовок и отправляем событие родителю
const handleSaveTitle = () => {
  saveTitle()
  emit("update-title", props.chatId, editableChatTitle.value)
}

// Обработчик выбора быстрой подсказки в пустом экране
const handlePromptSelect = (text: string) => {
  emit("use-prompt", text)
}

// Обработчик выбора быстрой подсказки в существующем чате
const handlePromptSelectInChat = (text: string) => {
  if (chatThreadRef.value) {
    chatThreadRef.value.submitTextDirectly(text)
  }
}

// Возвращаем методы для использования в родительском компоненте
defineExpose({
  insertText: (text: string) => {
    if (chatThreadRef.value) {
      chatThreadRef.value.insertText(text)
    }
  },
  submitTextDirectly: (text: string) => {
    if (chatThreadRef.value) {
      chatThreadRef.value.submitTextDirectly(text)
    }
  },
})
</script>

<template>
  <div class="chat-container">
    <!-- Заголовок чата (опциональный) -->
    <ChatHeader
      v-if="showHeader && chatId"
      :title="chatTitle"
      :is-editing="isEditingTitle"
      :editable-title="editableChatTitle"
      :show-back-button="layout === 'mobile'"
      :layout="layout"
      :is-draft="isDraft"
      @start-editing="startEditingTitle"
      @save-title="handleSaveTitle"
      @update:editable-title="editableChatTitle = $event"
      @go-back="emit('go-back')"
    />

    <!-- Если чат существует -->
    <template v-if="chatId">
      <!-- Используем единый ChatThread компонент с одним ключом -->
      <div class="chat-thread-container">
        <ChatThread ref="chatThreadRef" :chat-id="chatId" :key="chatId" />

        <!-- Если чат пустой - показываем подсказки поверх чата, но не закрываем поле ввода -->
        <div v-if="!hasMessages && showPromptsWhenEmpty" class="empty-prompts-overlay">
          <div class="prompts-container">
            <div class="prompts-grid">
              <button v-for="prompt in quickPrompts" :key="prompt.id" class="prompt-button" @click="handlePromptSelectInChat(prompt.text)">
                {{ prompt.text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Плейсхолдер, если нет выбранного чата -->
    <div v-else class="no-chat-selected">
      <div class="placeholder-content">
        <Home :size="48" class="home-icon" />
        <h2>Добро пожаловать в Golden Fish!</h2>
        <p class="welcome-text">Выберите чат или создайте новый, чтобы начать общение.</p>

        <button class="create-chat-btn" @click="emit('create-chat')">Создать новый чат</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Основной контейнер чата */
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: var(--vp-c-bg);
}

/* Контейнер для компонента ChatThread */
.chat-thread-container {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

/* Оверлей для подсказок в пустом чате - оставляем место для поля ввода */
.empty-prompts-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 70px; /* Оставляем место для поля ввода */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg);
  z-index: 10;
  padding: 8px;
  overflow-y: auto;
  width: 100%; /* Гарантируем 100% ширину */
}

/* Контейнер для подсказок */
.prompts-container {
  width: 100%;
  max-width: 1200px; /* Увеличиваем максимальную ширину */
  margin: 0 auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}

/* Сетка подсказок */
.prompts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Адаптивная сетка */
  gap: 16px;
  width: 100%;
  max-height: calc(100vh - 160px); /* Оставляем место для поля ввода */
  overflow-y: auto;
}

/* Адаптивность для разных экранов уже реализована через auto-fill */

/* Кнопка подсказки */
.prompt-button {
  display: block;
  width: 100%;
  padding: 16px;
  text-align: left;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.prompt-button:hover {
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* Плейсхолдер при отсутствии чата */
.no-chat-selected {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
  overflow-y: auto;
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  max-width: 600px;
  padding: 24px;
  margin: 30px 0;
}

.home-icon {
  color: var(--vp-c-brand);
  margin-bottom: 16px;
}

.placeholder-content h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.welcome-text {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin-bottom: 10px;
}

/* Кнопка создания чата */
.create-chat-btn {
  padding: 12px 24px;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 32px;
}

.create-chat-btn:hover {
  background-color: var(--vp-c-brand-dark);
}
</style>
