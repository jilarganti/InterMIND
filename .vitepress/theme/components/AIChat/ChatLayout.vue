<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue"
import AIChat from "./AIChat.vue"
import { useChatsStore } from "@theme/stores/chatsStore"
import "./style.css"

const chatsStore = useChatsStore()
const showRawMessages = ref(false)

// Проверка на режим разработки
const isDevelopment = computed(() => {
  if (typeof import.meta.env !== "undefined") {
    return !import.meta.env.VITE_IS_PROD
  }
  return false
})

const tags = ref([
  { id: "1", text: "Expo City Dubai" },
  { id: "2", text: "Dubai Frame tickets" },
  { id: "3", text: "Burj Khalifa tickets" },
  { id: "4", text: "Dubai Mall restaurants" },
  { id: "5", text: "Palm Jumeirah rental" },
])

interface ChatRef {
  insertText: (text: string) => void
  toggleRawMessages?: (value: boolean) => void
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

// Переключение режима отображения сырых сообщений
const toggleRawMode = () => {
  showRawMessages.value = !showRawMessages.value
  if (chatInputRef.value && chatInputRef.value.toggleRawMessages) {
    chatInputRef.value.toggleRawMessages(showRawMessages.value)
  }
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
      <!-- Debug toggle only shown in development -->
      <div v-if="isDevelopment" class="debug-toggle-container">
        <button @click="toggleRawMode" class="debug-toggle-button" :class="{ 'debug-toggle-active': showRawMessages }">
          {{ showRawMessages ? "Raw Mode ON" : "Raw Mode OFF" }}
        </button>
      </div>
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
      <AIChat
        v-if="chatsStore.selectedChatId"
        ref="chatInputRef"
        :key="chatsStore.selectedChatId"
        :chat-id="chatsStore.selectedChatId"
        :show-raw="showRawMessages"
      />
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
