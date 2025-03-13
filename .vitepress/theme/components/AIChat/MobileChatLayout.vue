<script setup lang="ts">
import { ref, computed } from "vue"
import ChatList from "./ChatList.vue"
import ChatContainer from "./ChatContainer.vue"
import { useChatManagement } from "@theme/composables/AIChat/useChatManagement"
import { ArrowLeft } from "lucide-vue-next"

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
const chatContainerRef = ref(null)

// Обработчик создания нового чата
const handleCreateChat = () => {
  const chatId = createNewChat()
  setCurrentView("chat")
}

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
</script>

<template>
  <div class="mobile-layout">
    <!-- Список чатов -->
    <div v-if="currentView === 'chats'" class="layout-view chats-view">
      <div class="chat-header">
        <h2 class="title">Чаты</h2>
        <button class="new-chat-button" @click="handleCreateChat">Новый чат</button>
      </div>

      <div class="chats-container">
        <!-- Поиск чатов -->
        <div class="search-container">
          <input v-model="searchInput" class="search-input" placeholder="Поиск чатов..." type="text" />
        </div>

        <!-- Группы чатов -->
        <div class="chat-groups-list">
          <div v-for="(yearData, year) in groupedChats" :key="year" class="chat-year-group">
            <h3 class="year-header">{{ year }}</h3>

            <div v-for="(monthChats, month) in yearData" :key="`${year}-${month}`" class="chat-month-group">
              <h4 class="month-header">{{ month }}</h4>

              <div
                v-for="chatId in monthChats"
                :key="chatId"
                class="chat-item"
                :class="{ active: chatId === chatsStore.selectedChatId }"
                @click="selectChat(chatId)"
              >
                <span class="chat-name">
                  {{ chatsStore.getChatTitle(chatId) || "🆕" }}
                </span>
              </div>
            </div>
          </div>

          <!-- Сообщение, если нет чатов -->
          <div v-if="Object.keys(groupedChats).length === 0" class="empty-chats-message">
            <p>У вас пока нет сохраненных чатов</p>
          </div>
        </div>
      </div>
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

/* Заголовок экрана чатов */
.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.new-chat-button {
  padding: 8px 16px;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

/* Контейнер списка чатов */
.chats-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Поиск */
.search-container {
  padding: 12px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.search-input {
  width: 100%;
  padding: 10px 16px;
  border-radius: 24px;
  font-size: 16px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  outline: none;
  border: 1px solid var(--vp-c-divider);
}

/* Список групп чатов */
.chat-groups-list {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

/* Группировка чатов */
.chat-year-group {
  margin-bottom: 16px;
}

.year-header {
  font-size: 18px;
  font-weight: 600;
  margin: 16px 0 8px 0;
  color: var(--vp-c-text-1);
}

.month-header {
  font-size: 16px;
  font-weight: 500;
  margin: 12px 0 8px 0;
  color: var(--vp-c-text-2);
  padding-bottom: 4px;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.chat-item {
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  cursor: pointer;
  transition: background-color 0.2s;
}

.chat-item:hover,
.chat-item:active {
  background-color: var(--vp-c-bg-mute);
}

.chat-item.active {
  background-color: var(--vp-c-bg-alt);
  font-weight: 500;
}

.chat-name {
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

/* Пустой список чатов */
.empty-chats-message {
  padding: 20px 0;
  text-align: center;
  color: var(--vp-c-text-2);
}
</style>
