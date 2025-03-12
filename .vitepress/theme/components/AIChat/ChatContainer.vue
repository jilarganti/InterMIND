<script setup lang="ts">
import { ref } from "vue"
import AIChat from "./AIChat.vue"
import ChatHeader from "./ChatHeader.vue"
import { Home } from "lucide-vue-next"
import { useChatTitle } from "@theme/composables/AIChat/useChatTitle"

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
}>()

// Интерфейс для доступа к методам AIChat
interface ChatRef {
  insertText: (text: string) => void
  submitTextDirectly: (text: string) => void
}

// Ref для доступа к компоненту AIChat
const chatInputRef = ref<ChatRef | null>(null)

// Ref для input элемента заголовка
const titleInputRef = ref<HTMLInputElement | null>(null)

// Используем composable для управления заголовком
const { isEditingTitle, editableChatTitle, startEditingTitle, saveTitle } = useChatTitle(titleInputRef)

// Сохраняем заголовок и отправляем событие родителю
const handleSaveTitle = () => {
  saveTitle()
  emit("update-title", props.chatId, editableChatTitle.value)
}

// Возвращаем методы для использования в родительском компоненте
defineExpose({
  insertText: (text: string) => {
    if (chatInputRef.value) {
      chatInputRef.value.insertText(text)
    }
  },
  submitTextDirectly: (text: string) => {
    if (chatInputRef.value) {
      chatInputRef.value.submitTextDirectly(text)
    }
  },
})
</script>

<template>
  <div class="chat-container">
    <!-- Заголовок чата (опциональный) -->
    <ChatHeader
      v-if="showHeader"
      :title="chatTitle"
      :is-editing="isEditingTitle"
      :editable-title="editableChatTitle"
      :show-back-button="layout === 'mobile'"
      :layout="layout"
      @start-editing="startEditingTitle"
      @save-title="handleSaveTitle"
      @update:editable-title="editableChatTitle = $event"
      @go-back="emit('go-back')"
    />

    <!-- Компонент чата или плейсхолдер -->
    <template v-if="chatId">
      <AIChat ref="chatInputRef" :chat-id="chatId" />
    </template>

    <!-- Плейсхолдер, если нет выбранного чата -->
    <div v-else class="no-chat-selected">
      <div class="placeholder-content">
        <Home :size="48" />
        <h2>Выберите чат или создайте новый</h2>
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
  overflow: hidden;
  background-color: var(--vp-c-bg);
}

/* Плейсхолдер при отсутствии чата */
.no-chat-selected {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  max-width: 400px;
  padding: 24px;
}

.placeholder-content h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin: 0;
}

/* Кнопка создания чата */
.create-chat-btn {
  padding: 10px 16px;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.create-chat-btn:hover {
  background-color: var(--vp-c-brand-dark);
}

/* Для мобильной версии */
@media (max-width: 767px) {
  .placeholder-content {
    padding: 16px;
  }

  .placeholder-content h2 {
    font-size: 1.25rem;
  }
}

/* Интеграция с компонентом AIChat */
:deep(.chat-frame) {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--vp-c-bg);
}

:deep(.messages-container) {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  scroll-behavior: smooth;
}

:deep(.input-container) {
  padding: 12px 16px;
  background-color: var(--vp-c-bg);
  margin-top: auto;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
