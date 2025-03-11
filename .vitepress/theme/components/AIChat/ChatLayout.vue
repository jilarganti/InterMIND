<script setup lang="ts">
import { ref, onMounted, computed } from "vue"
import AIChat from "./AIChat.vue"
import { useChatsStore } from "@theme/stores/chatsStore"
import { ArrowUp } from "lucide-vue-next"
import "./style.css"

// Инициализируем хранилище чатов
const chatsStore = useChatsStore()

// Управление текущим layout: 'main', 'chats', 'chat'
const currentView = ref("main")

// Поле ввода текста на главном экране
const mainInput = ref("")
const mainInputRef = ref(null)

// Ссылка на компонент чата для доступа к его методам
interface ChatRef {
  insertText: (text: string) => void
  submitTextDirectly: (text: string) => void
}
const chatInputRef = ref<ChatRef | null>(null)

// Список быстрых поисковых запросов
const quickPrompts = ref([
  { id: "1", text: "Expo City Dubai" },
  { id: "2", text: "Dubai Frame tickets" },
  { id: "3", text: "Burj Khalifa tickets" },
  { id: "4", text: "Dubai Mall restaurants" },
  { id: "5", text: "Palm Jumeirah rental" },
])

// Группировка чатов по годам и месяцам
const groupedChats = computed(() => {
  const groups = {}

  chatsStore.chatIds.forEach((id) => {
    const date = new Date(Number(id))
    const year = date.getFullYear()
    const month = date.toLocaleString("default", { month: "long" })

    if (!groups[year]) {
      groups[year] = {}
    }

    if (!groups[year][month]) {
      groups[year][month] = []
    }

    groups[year][month].push(id)
  })

  return groups
})

// Функция для добавления текста тега в поле ввода на главном экране
const addTagToInput = (tagText: string) => {
  // Добавляем тег в поле ввода с пробелом в конце
  mainInput.value += (mainInput.value ? " " : "") + tagText + " "
  // Ставим фокус на поле ввода
  setTimeout(() => {
    if (mainInputRef.value) {
      mainInputRef.value.focus()
    }
  }, 10)
}

// Функция для отправки запроса с главного экрана
const sendMainInput = () => {
  if (!mainInput.value.trim()) return

  createNewChat()

  // Небольшая задержка для гарантии, что чат уже создан
  setTimeout(() => {
    if (chatInputRef.value) {
      chatInputRef.value.submitTextDirectly(mainInput.value.trim())
      mainInput.value = "" // Очищаем поле ввода
    }
  }, 100)
}

// Функция для выбора чата
const handleSelectChat = (chatId: string) => {
  chatsStore.selectChat(chatId)
  currentView.value = "chat"
}

// Функция для создания нового чата
const createNewChat = () => {
  chatsStore.createNewChat()
  currentView.value = "chat"
}

// Инициализация при монтировании компонента
onMounted(() => {
  // Инициализируем хранилище чатов
  chatsStore.ensureChat()

  // Создаем новый чат, если список пуст
  if (chatsStore.chatIds.length === 0) {
    chatsStore.createNewChat()
  }
})
</script>

<template>
  <div class="mobile-layout">
    <!-- Main layout -->
    <div v-if="currentView === 'main'" class="layout-view main-view">
      <div class="mobile-header">
        <button class="nav-button" @click="currentView = 'chats'">Чаты</button>
        <h1 class="view-title">Golden Fish</h1>
      </div>

      <div class="quick-prompts">
        <button v-for="prompt in quickPrompts" :key="prompt.id" class="quick-prompt-button" @click="addTagToInput(prompt.text)">
          {{ prompt.text }}
        </button>
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

    <!-- Chats list layout -->
    <div v-else-if="currentView === 'chats'" class="layout-view chats-view">
      <div class="mobile-header">
        <button class="nav-button" @click="currentView = 'main'">Назад</button>
        <h1 class="view-title">Чаты</h1>
      </div>

      <div class="chats-list">
        <div v-for="(yearData, year) in groupedChats" :key="year" class="chat-year-group">
          <h2 class="year-header">{{ year }}</h2>

          <div v-for="(monthChats, month) in yearData" :key="`${year}-${month}`" class="chat-month-group">
            <h3 class="month-header">{{ month }}</h3>

            <div
              v-for="chatId in monthChats"
              :key="chatId"
              class="chat-item"
              :class="{ active: chatId === chatsStore.selectedChatId }"
              @click="handleSelectChat(chatId)"
            >
              <span class="chat-name">Чат от {{ new Date(Number(chatId)).toLocaleString() }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat conversation layout -->
    <div v-else-if="currentView === 'chat'" class="layout-view chat-view">
      <div class="mobile-header">
        <button class="nav-button" @click="currentView = 'main'">Назад</button>
        <h1 class="view-title">Чат</h1>
      </div>

      <AIChat v-if="chatsStore.selectedChatId" ref="chatInputRef" :key="chatsStore.selectedChatId" :chat-id="chatsStore.selectedChatId" />
    </div>
  </div>
</template>
