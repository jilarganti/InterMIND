<script setup lang="ts">
/// <reference types="../../types/global" />

import { ref, computed } from "vue"
import ChatList from "./ChatList.vue"
import ChatContainer from "./ChatContainer.vue"
import { useChatManagement } from "../../composables/AIChat/useChatManagement"
import { useQuickPrompts } from "../../composables/AIChat/useQuickPrompts"
import type { ChatThreadMethods } from "../../types/ChatThread"

// Определяем пропсы
interface Props {
  /**
   * Быстрые подсказки для чата
   */
  prompts: string[]
}

// Используем defineProps с типом Props
const props = withDefaults(defineProps<Props>(), {
  prompts: () => [], // По умолчанию пустой массив
})

// Инициализируем управление чатами
const { searchInput, groupedChats, hasSelectedChat, createNewChat, selectChat, chatsStore } = useChatManagement()

// Проверка на временный чат
const isTempChat = computed(() => {
  return chatsStore.isTempChat(chatsStore.selectedChatId)
})

// Определение заголовка чата
const chatTitle = computed(() => {
  const chatId = chatsStore.selectedChatId
  if (!chatId) return ""

  // Для временного чата показываем дата создания
  if (isTempChat.value) {
    return new Date(Number(chatId)).toLocaleString()
  }

  return chatsStore.getChatTitle(chatId) || ""
})

// Ссылка на компонент контейнера чата для доступа к его методам
const chatContainerRef = ref<{
  insertText: (text: string) => void
  submitTextDirectly: (text: string) => void
} | null>(null)

// Инициализируем работу с быстрыми подсказками, передавая пропсы из родителя
const { quickPrompts, submitQuickPrompt } = useQuickPrompts(chatContainerRef, props.prompts)

// Обработчик использования подсказки на пустом экране
const handleUsePromptFromEmpty = (text: string) => {
  window.dataLayer?.push({ event: "layout_prompt", prompt_text: text })
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
      :show-search="true"
      layout="desktop"
      @update:search-input="searchInput = $event"
      @select-chat="selectChat"
      @create-chat="createNewChat"
    >
      <!-- Используем слот для отображения заголовка чата -->
      <template #chat-title="{ chatId }">
        <span class="chat-name">
          {{ chatsStore.getChatTitle(chatId) }}
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
      :prompts="quickPrompts"
      @create-chat="createNewChat"
      @update-title="handleUpdateTitle"
      @use-prompt="handleUsePromptFromEmpty"
    />
  </div>
</template>

<style scoped>
/* Основной макет - двухколоночный */
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

/* Медиа-запрос для больших экранов */
@media (min-width: 1400px) {
  .desktop-chat-layout {
    grid-template-columns: 350px 1fr;
  }
}
</style>
