<script setup lang="ts">
import { ref, computed } from "vue"
import ChatList from "./ChatList.vue"
import ChatContainer from "./ChatContainer.vue"
import { useChatManagement } from "@theme/composables/AIChat/useChatManagement"
import { useQuickPrompts } from "@theme/composables/AIChat/useQuickPrompts"

// Инициализируем управление чатами
const { searchInput, groupedChats, hasSelectedChat, createNewChat, selectChat, chatsStore } = useChatManagement()

// Проверка на временный чат
const isTempChat = computed(() => {
  return chatsStore.isTempChat(chatsStore.selectedChatId)
})

// Проверка, что выбранный чат не имеет сообщений
const isEmpty = computed(() => {
  const chatId = chatsStore.selectedChatId
  if (!chatId) return true

  const messages = chatsStore.getMessages(chatId)
  return !messages || messages.length === 0
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

// Ссылка на компонент контейнера чата для доступа к его методам
const chatContainerRef = ref(null)

// Инициализируем работу с быстрыми подсказками (без отображения панели)
const { quickPrompts, insertQuickPrompt, submitQuickPrompt } = useQuickPrompts(chatContainerRef)

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
</script>

<template>
  <div class="desktop-chat-layout">
    <!-- Левая боковая панель со списком чатов -->
    <ChatList
      :grouped-chats="groupedChats"
      :selected-chat-id="chatsStore.selectedChatId"
      :search-input="searchInput"
      panel-title="Golden Fish"
      :show-search="true"
      layout="desktop"
      @update:search-input="searchInput = $event"
      @select-chat="selectChat"
      @create-chat="createNewChat"
    >
      <!-- Используем слот для отображения заголовка чата -->
      <template #chat-title="{ chatId }">
        <span class="chat-name">
          {{ chatsStore.getChatTitle(chatId) || "🆕" }}
        </span>
      </template>
    </ChatList>

    <!-- Основной контейнер чата -->
    <ChatContainer
      ref="chatContainerRef"
      :chat-id="chatsStore.selectedChatId"
      :chat-title="chatTitle"
      layout="desktop"
      :show-header="true"
      :show-prompts-when-empty="true"
      :is-draft="isTempChat"
      @create-chat="createNewChat"
      @update-title="handleUpdateTitle"
      @use-prompt="handleUsePromptFromEmpty"
    />
  </div>
</template>

<style scoped>
/* Основной макет - изменен на двухколоночный */
.desktop-chat-layout {
  display: grid;
  position: relative;
  background-color: var(--vp-c-bg);
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
  grid-template-columns: 280px 1fr;
  grid-template-areas: "sidebar content";
}

/* Стили для компонентов */
:deep(.chat-list-container) {
  grid-area: sidebar;
}

:deep(.chat-container) {
  grid-area: content;
}

/* Медиа-запрос для планшетов */
@media (min-width: 768px) and (max-width: 1023px) {
  .desktop-chat-layout {
    grid-template-columns: 240px 1fr;
  }
}

/* Медиа-запрос для больших экранов */
@media (min-width: 1400px) {
  .desktop-chat-layout {
    grid-template-columns: 300px 1fr;
  }
}
</style>
