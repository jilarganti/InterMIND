<script setup lang="ts">
import { ref, computed } from "vue"
import ChatList from "./ChatList.vue"
import ChatContainer from "./ChatContainer.vue"
import { useChatManagement } from "@theme/composables/AIChat/useChatManagement"
import { useQuickPrompts } from "@theme/composables/AIChat/useQuickPrompts"
import type { ChatThreadMethods } from "@theme/types/ChatThread"

// Управление текущим view: 'chats', 'chat'
const currentView = ref("chat") // По умолчанию открываем чат

// Функция изменения текущего представления
const setCurrentView = (view: string) => {
  currentView.value = view
}

// Инициализируем управление чатами
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

// Ссылка на компонент контейнера чата
const chatContainerRef = ref<{
  insertText: (text: string) => void
  submitTextDirectly: (text: string) => void
} | null>(null)

// Получаем быстрые подсказки
const { quickPrompts } = useQuickPrompts(chatContainerRef)

// Обработчик использования подсказки
const handleUsePrompt = (text: string) => {
  if (!hasSelectedChat.value) {
    createNewChat()
  }

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

// Создаем новый чат и переходим к нему
const handleCreateChat = () => {
  createNewChat()
  setCurrentView("chat")
}
</script>

<template>
  <div class="mobile-layout">
    <!-- Список чатов -->
    <div v-if="currentView === 'chats'" class="layout-view chats-view">
      <ChatList
        :grouped-chats="groupedChats"
        :selected-chat-id="chatsStore.selectedChatId"
        :search-input="searchInput"
        :show-search="true"
        layout="mobile"
        @update:search-input="searchInput = $event"
        @select-chat="selectChat"
        @create-chat="handleCreateChat"
        @go-back="setCurrentView('chat')"
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
        @go-back="setCurrentView('chats')"
        @create-chat="handleCreateChat"
        @update-title="handleUpdateTitle"
        @use-prompt="handleUsePrompt"
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
</style>
