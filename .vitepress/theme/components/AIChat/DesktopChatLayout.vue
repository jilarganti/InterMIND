<script setup lang="ts">
import { ref, computed } from "vue"
import ChatList from "./ChatList.vue"
import ChatContainer from "./ChatContainer.vue"
import QuickPrompts from "./QuickPrompts.vue"
import { useChatManagement } from "@theme/composables/AIChat/useChatManagement"
import { useQuickPrompts } from "@theme/composables/AIChat/useQuickPrompts"

// Инициализируем управление чатами
const { searchInput, groupedChats, hasSelectedChat, createNewChat, selectChat, chatsStore } = useChatManagement()

// Проверяем, есть ли активный чат
const hasActiveChat = computed(() => Boolean(chatsStore.selectedChatId))

// Ссылка на компонент контейнера чата для доступа к его методам
const chatContainerRef = ref(null)

// Инициализируем работу с быстрыми подсказками
const { quickPrompts, insertQuickPrompt, submitQuickPrompt } = useQuickPrompts(chatContainerRef)

// Обработчик выбора быстрой подсказки
const handleQuickPromptSelect = (text: string) => {
  if (chatContainerRef.value) {
    insertQuickPrompt(text)
  }
}

// Обработчик использования подсказки на пустом экране
const handleUsePromptFromEmpty = (text: string) => {
  createNewChat()

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
          {{ chatsStore.getChatTitle(chatId) || `Чат от ${new Date(Number(chatId)).toLocaleString()}` }}
        </span>
      </template>
    </ChatList>

    <!-- Основной контейнер чата -->
    <ChatContainer
      ref="chatContainerRef"
      :chat-id="chatsStore.selectedChatId"
      :chat-title="chatsStore.getChatTitle(chatsStore.selectedChatId) || 'Новый чат'"
      layout="desktop"
      :show-header="true"
      :show-prompts-when-empty="true"
      @create-chat="createNewChat"
      @update-title="handleUpdateTitle"
      @use-prompt="handleUsePromptFromEmpty"
    />

    <!-- Правая панель с быстрыми подсказками (только если есть активный чат) -->
    <QuickPrompts
      v-if="hasActiveChat"
      :prompts="quickPrompts"
      layout="desktop"
      :show-header="true"
      panel-title="Быстрые запросы"
      @select-prompt="handleQuickPromptSelect"
    />

    <!-- Пустой div для сохранения структуры grid при отсутствии активного чата -->
    <div v-else class="empty-sidebar"></div>
  </div>
</template>

<style scoped>
/* Основной макет */
.desktop-chat-layout {
  display: grid;
  position: relative;
  background-color: var(--vp-c-bg);
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
  grid-template-columns: 280px 1fr 240px;
  grid-template-areas: "sidebar content prompts";
}

/* Медиа-запрос для планшетов */
@media (min-width: 768px) and (max-width: 1023px) {
  .desktop-chat-layout {
    grid-template-columns: 240px 1fr;
    grid-template-areas: "sidebar content";
  }

  /* Скрываем панель быстрых подсказок на планшетах */
  :deep(.quick-prompts-container),
  .empty-sidebar {
    display: none;
  }
}

/* Пустая боковая панель (заменитель для QuickPrompts) */
.empty-sidebar {
  grid-area: prompts;
  background-color: var(--vp-c-bg-soft);
  border-left: 1px solid var(--vp-c-divider);
}

/* Стили для компонентов */
:deep(.chat-list-container) {
  grid-area: sidebar;
}

:deep(.chat-container) {
  grid-area: content;
}

:deep(.quick-prompts-container) {
  grid-area: prompts;
}
</style>
