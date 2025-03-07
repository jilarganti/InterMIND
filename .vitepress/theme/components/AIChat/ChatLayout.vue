<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import AIChat from "./AIChat.vue"
import { useChatsStore } from "@theme/stores/chatsStore"

const chatsStore = useChatsStore()

const tags = ref([
  { id: "1", text: "Expo City Dubai" },
  { id: "2", text: "Dubai Frame tickets" },
  { id: "3", text: "Burj Khalifa tickets" },
  { id: "4", text: "Dubai Mall restaurants" },
  { id: "5", text: "Palm Jumeirah rental" },
])

interface ChatRef {
  insertText: (text: string) => void
}
const chatInputRef = ref<ChatRef | null>(null)

const insertTag = (tagText: string) => {
  if (chatInputRef.value) {
    chatInputRef.value.insertText(tagText)
  }
}

// Создаем функцию для выбора чата
const handleSelectChat = (chatId: string) => {
  chatsStore.selectChat(chatId)
}

onMounted(() => {
  // Инициализируем Pinia-хранилище
  chatsStore.ensureChat()

  // Создаем новый чат только если список пуст
  if (chatsStore.chatIds.length === 0) {
    chatsStore.createNewChat()
  }
})
</script>

<template>
  <div class="layout-container">
    <!-- Left column - Dialogs list -->
    <div class="dialogs-column">
      <h2 class="column-header">Chats</h2>
      <div class="dialogs-list">
        <div
          v-for="chatId in chatsStore.chatIds"
          :key="chatId"
          class="dialog-item"
          :class="{ 'dialog-item-active': chatId === chatsStore.selectedChatId }"
          @click="handleSelectChat(chatId)"
        >
          <div class="dialog-name">Chat {{ chatId }}</div>
          <div class="dialog-timestamp">{{ new Date(Number(chatId)).toLocaleTimeString() }}</div>
        </div>
      </div>
      <button class="new-chat-button" @click="chatsStore.createNewChat">+ New Chat</button>
    </div>

    <!-- Middle column - Chat -->
    <div class="chat-column">
      <AIChat v-if="chatsStore.selectedChatId" ref="chatInputRef" :key="chatsStore.selectedChatId" :chat-id="chatsStore.selectedChatId" />
    </div>

    <!-- Right column - Tags -->
    <div class="tags-column">
      <h2 class="column-header">Quick Prompts</h2>
      <div class="tags-list">
        <button v-for="tag in tags" :key="tag.id" class="tag-button" @click="insertTag(tag.text)">
          {{ tag.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: grid;
  grid-template-columns: 300px minmax(600px, 1fr) 250px;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--vp-c-gray-bg);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.dialogs-column,
.chat-column,
.tags-column {
  height: 100vh;
  overflow-y: auto;
  position: relative;
  background-color: var(--vp-c-gray-bg);
}

.chat-column {
  min-width: 0;
  background-color: var(--vp-c-gray-bg);
  display: flex;
  flex-direction: column;
}

.dialogs-column {
  border-right: 1px solid var(--vp-c-gray-border);
}

.tags-column {
  border-left: 1px solid var(--vp-c-gray-border);
}

.column-header {
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  border-bottom: 1px solid var(--vp-c-gray-border);
  margin: 0;
  color: var(--vp-c-main-1);
}

.dialogs-list {
  padding: 0.5rem;
}

.dialog-item {
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dialog-item:hover {
  background-color: var(--vp-c-blue-bg);
}

.dialog-item-active {
  background-color: var(--vp-c-gray-border);
}

.dialog-name {
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--vp-c-main-1);
}

.dialog-timestamp {
  font-size: 0.75rem;
  color: var(--vp-c-main-1);
}

.tags-list {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tag-button {
  padding: 0.75rem;
  border: 1px solid var(--vp-c-gray-border);
  border-radius: 0.5rem;
  background-color: var(--vp-c-gray-bg);
  color: var(--vp-c-main-1);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.tag-button:hover {
  background-color: var(--vp-c-blue-bg);
  border-color: var(--vp-c-blue-border);
}

.tag-button:active {
  background-color: var(--vp-c-blue-bg);
}

.tag-button::before {
  content: "#";
  margin-right: 0.5rem;
  color: var(--vp-c-main-2);
}

.tags-column {
  border-left: 1px solid var(--vp-c-gray-border);
  padding: 0;
}

.tags-list {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.new-chat-button {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--vp-c-gray-border);
  border-radius: 0.5rem;
  background-color: var(--vp-c-gray-bg);
  color: var(--vp-c-main-1);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}

.new-chat-button:hover {
  background-color: var(--vp-c-blue-bg);
  border-color: var(--vp-c-blue-border);
}
</style>
