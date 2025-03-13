<script setup lang="ts">
import { ref, computed } from "vue"
import ChatThread from "./ChatThread.vue"
import ChatHeader from "./ChatHeader.vue"
import { Home } from "lucide-vue-next"
import { useChatTitle } from "@theme/composables/AIChat/useChatTitle"
import { useQuickPrompts } from "@theme/composables/AIChat/useQuickPrompts"
import { useChatsStore } from "@theme/stores/chatsStore"

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

// Интерфейс для доступа к методам ChatThread
interface ChatRef {
  insertText: (text: string) => void
  submitTextDirectly: (text: string) => void
}

// Ref для доступа к компоненту ChatThread
const chatThreadRef = ref<ChatRef | null>(null)

// Ref для input элемента заголовка
const titleInputRef = ref<HTMLInputElement | null>(null)

// Используем composable для управления заголовком
const { isEditingTitle, editableChatTitle, startEditingTitle, saveTitle } = useChatTitle(titleInputRef)

// Получаем список быстрых подсказок
const { quickPrompts } = useQuickPrompts(chatThreadRef)

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
      <!-- Если в чате есть сообщения - показываем чат -->
      <ChatThread v-if="hasMessages" ref="chatThreadRef" :chat-id="chatId" :key="`thread-${chatId}`" />

      <!-- Если чат пустой - показываем подсказки -->
      <div v-else class="empty-chat-wrapper">
        <!-- Быстрые подсказки для нового чата -->
        <div v-if="showPromptsWhenEmpty" class="prompts-container">
          <div class="prompts-grid">
            <button v-for="prompt in quickPrompts" :key="prompt.id" class="prompt-button" @click="handlePromptSelectInChat(prompt.text)">
              {{ prompt.text }}
            </button>
          </div>
        </div>

        <!-- Поле ввода чата -->
        <div class="chat-input-wrapper">
          <ChatThread ref="chatThreadRef" :chat-id="chatId" :key="`empty-${chatId}`" class="empty-chat-thread" />
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

/* Обертка для пустого чата */
.empty-chat-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

/* Контейнер для подсказок */
.prompts-container {
  flex: 1; /* Занимает все доступное пространство */
  width: 100%;
  overflow-y: auto; /* Добавляем скролл если не помещается */
  padding: 16px;
}

/* Сетка подсказок */
.prompts-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
}

/* Адаптивность для разных экранов */
@media (max-width: 768px) {
  .prompts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .prompts-grid {
    grid-template-columns: 1fr;
  }
}

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

/* Обертка для поля ввода */
.chat-input-wrapper {
  flex-shrink: 0; /* Не сжимается */
  margin-top: auto; /* Прижимаем к нижней части */
  min-height: 70px; /* Минимальная высота */
  width: 100%;
}

/* Пустой чат */
.empty-chat-thread {
  width: 100%;
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
