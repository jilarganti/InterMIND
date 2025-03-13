<script setup lang="ts">
import { ref, computed } from "vue"
import ChatList from "./ChatList.vue"
import ChatContainer from "./ChatContainer.vue"
import { useChatManagement } from "@theme/composables/AIChat/useChatManagement"
import { useQuickPrompts } from "@theme/composables/AIChat/useQuickPrompts"
import { ArrowUp, Menu } from "lucide-vue-next"

// Управление текущим view: 'main', 'chats', 'chat'
const currentView = ref("main")

// Функция изменения текущего представления
const setCurrentView = (view: string) => {
  currentView.value = view
}

// Инициализируем управление чатами с поддержкой навигации в мобильном режиме
const { searchInput, groupedChats, hasSelectedChat, createNewChat, selectChat, chatsStore } = useChatManagement({ setCurrentView })

// Проверка на временный чат
const isTempChat = computed(() => {
  return chatsStore.isTempChat(chatsStore.selectedChatId)
})

// Определение заголовка чата
const chatTitle = computed(() => {
  const chatId = chatsStore.selectedChatId
  if (!chatId) return ""

  // Для временного чата показываем "Новый чат"
  if (isTempChat.value) {
    return "Новый чат"
  }

  return chatsStore.getChatTitle(chatId) || `Чат от ${new Date(Number(chatId)).toLocaleString()}`
})

// Поле ввода текста на главном экране
const mainInput = ref("")
const mainInputRef = ref(null)

// Ссылка на компонент контейнера чата для доступа к его методам
const chatContainerRef = ref(null)

// Инициализируем работу с быстрыми подсказками в мобильном режиме
const { quickPrompts, submitQuickPrompt } = useQuickPrompts(chatContainerRef, mainInput, { isMobileMode: true })

// Обработчик выбора быстрой подсказки - сразу отправляет запрос
const handleQuickPromptSelect = (text: string) => {
  // Создаем новый чат или используем существующий
  if (!hasSelectedChat.value) {
    createNewChat()
  }

  // Переключаемся на экран чата
  setCurrentView("chat")

  // Небольшая задержка для гарантии, что чат создан и интерфейс обновлен
  setTimeout(() => {
    if (chatContainerRef.value) {
      chatContainerRef.value.submitTextDirectly(text)
    }
  }, 150)
}

// Обработчик использования подсказки на пустом экране
const handleUsePromptFromEmpty = (text: string) => {
  if (!hasSelectedChat.value) {
    createNewChat()
  }

  // Небольшая задержка для гарантии, что чат уже создан
  setTimeout(() => {
    if (chatContainerRef.value) {
      chatContainerRef.value.submitTextDirectly(text)
    }
  }, 100)
}

// Обработчик обновления заголовка чата
const handleUpdateTitle = (chatId: string, title: string) => {
  chatsStore.setChatTitle(chatId, title)
}

// Функция для отправки запроса с главного экрана
const sendMainInput = () => {
  if (!mainInput.value.trim()) return

  // Если нет выбранного чата, создаем новый
  if (!hasSelectedChat.value) {
    createNewChat()
  }

  // Сохраняем текст запроса перед переключением вида
  const inputText = mainInput.value.trim()

  // Очищаем поле ввода
  mainInput.value = ""

  // Переключаемся на экран чата
  setCurrentView("chat")

  // Небольшая задержка для гарантии, что чат уже создан
  setTimeout(() => {
    if (chatContainerRef.value) {
      chatContainerRef.value.submitTextDirectly(inputText)
    }
  }, 150)
}
</script>

<template>
  <div class="mobile-layout">
    <!-- Главный экран -->
    <div v-if="currentView === 'main'" class="layout-view main-view">
      <div class="mobile-header">
        <button class="nav-button" @click="setCurrentView('chats')">
          <Menu :size="20" />
        </button>
        <div class="view-title">Golden Fish</div>
      </div>

      <!-- Быстрые подсказки на главном экране -->
      <div class="quick-prompts-main">
        <div v-for="prompt in quickPrompts" :key="prompt.id" class="quick-prompt-item">
          <button class="quick-prompt-button" @click="handleQuickPromptSelect(prompt.text)">
            {{ prompt.text }}
          </button>
        </div>
      </div>

      <div class="input-footer">
        <form @submit.prevent="sendMainInput" class="main-input-form">
          <input v-model="mainInput" ref="mainInputRef" class="main-input-field" placeholder="Задайте вопрос..." type="text" />
          <button type="submit" class="main-send-button" :disabled="!mainInput.trim()">
            <ArrowUp :size="20" />
          </button>
        </form>
      </div>
    </div>

    <!-- Список чатов -->
    <div v-else-if="currentView === 'chats'" class="layout-view chats-view">
      <ChatList
        :grouped-chats="groupedChats"
        :selected-chat-id="chatsStore.selectedChatId"
        :search-input="searchInput"
        panel-title="Чаты"
        :show-search="false"
        layout="mobile"
        @update:search-input="searchInput = $event"
        @select-chat="selectChat"
        @create-chat="createNewChat"
        @go-back="setCurrentView('main')"
      >
        <!-- Используем слот для отображения заголовка чата -->
        <template #chat-title="{ chatId }">
          <span class="chat-name">
            {{ chatsStore.getChatTitle(chatId) || "🆕" }}
          </span>
        </template>
      </ChatList>
    </div>

    <!-- Экран чата -->
    <div v-else-if="currentView === 'chat'" class="layout-view chat-view">
      <ChatContainer
        ref="chatContainerRef"
        :chat-id="chatsStore.selectedChatId"
        :chat-title="chatTitle"
        layout="mobile"
        :show-header="true"
        :show-prompts-when-empty="true"
        :is-draft="isTempChat"
        @go-back="setCurrentView('main')"
        @create-chat="createNewChat"
        @update-title="handleUpdateTitle"
        @use-prompt="handleUsePromptFromEmpty"
      />
    </div>
  </div>
</template>

<style scoped>
/* Основной мобильный макет */
.mobile-layout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--vp-c-bg);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 100;
}

/* Общий контейнер для всех layout-view */
.layout-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

/* Заголовок на экране main */
.mobile-header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.nav-button {
  background: none;
  border: none;
  padding: 8px;
  margin-right: 12px;
  color: var(--vp-c-text-1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-title {
  flex: 1;
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  color: var(--vp-c-text-1);
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: calc(100% - 40px);
}

/* Новые стили для быстрых подсказок на главном экране */
.quick-prompts-main {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.quick-prompt-item {
  width: 100%;
}

.quick-prompt-button {
  width: 100%;
  padding: 16px;
  text-align: left;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.quick-prompt-button:hover {
  background-color: var(--vp-c-bg-mute);
}

.quick-prompt-button:active {
  transform: scale(0.98);
  background-color: var(--vp-c-bg-mute);
}

/* Стили для футера с полем ввода */
.input-footer {
  padding: 12px 16px;
  background-color: var(--vp-c-bg);
  margin-top: auto;
  border-top: 1px solid var(--vp-c-divider);
}

.main-input-form {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 48rem;
  margin: 0 auto;
}

.main-input-field {
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
}

.main-input-field:focus {
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand);
}

.main-send-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: var(--vp-c-brand);
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.main-send-button:hover {
  background-color: var(--vp-c-brand-dark);
}

.main-send-button:disabled {
  background-color: var(--vp-c-gray);
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
