<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue"
import AIChat from "./AIChat.vue"
import { useChatsStore } from "@theme/stores/chatsStore"
import { ArrowUp, ArrowLeft, Menu, Plus, Home, MessageSquare, Search } from "lucide-vue-next"

// Инициализируем хранилище чатов
const chatsStore = useChatsStore()

// Управление текущим layout: 'main', 'chats', 'chat'
const currentView = ref("chat")

// Поле ввода текста для быстрого поиска
const searchInput = ref("")
const searchInputRef = ref(null)

// Состояние и значение для редактирования заголовка чата
const isEditingTitle = ref(false)
const editableChatTitle = ref("")
const titleInputRef = ref(null)

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

// Фильтрация чатов при поиске
const filteredChatIds = computed(() => {
  if (!searchInput.value) return chatsStore.chatIds

  return chatsStore.chatIds.filter((chatId) => {
    const date = new Date(Number(chatId))
    return date.toLocaleString().toLowerCase().includes(searchInput.value.toLowerCase())
  })
})

// Группировка отфильтрованных чатов по годам и месяцам
const groupedChats = computed(() => {
  const groups = {}

  filteredChatIds.value.forEach((id) => {
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

// Функция для выбора чата
const handleSelectChat = (chatId: string) => {
  chatsStore.selectChat(chatId)
}

// Функции для управления редактированием заголовка
const startEditingTitle = () => {
  if (chatsStore.selectedChatId) {
    editableChatTitle.value = chatsStore.getChatTitle(chatsStore.selectedChatId) || ""
    isEditingTitle.value = true
    // Устанавливаем фокус на поле ввода после его появления
    setTimeout(() => {
      if (titleInputRef.value) {
        titleInputRef.value.focus()
      }
    }, 10)
  }
}

const saveTitle = () => {
  if (chatsStore.selectedChatId) {
    chatsStore.setChatTitle(chatsStore.selectedChatId, editableChatTitle.value.trim())
    isEditingTitle.value = false
  }
}

// Функция для создания нового чата
const createNewChat = () => {
  chatsStore.createNewChat()
}

// Обработчик ввода в поле поиска
const handleSearchInput = () => {
  // Реализация поиска по чатам
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

// Отслеживаем изменение selectedChatId
watch(
  () => chatsStore.selectedChatId,
  (newChatId) => {
    // Убедимся, что выбранный чат существует
    if (newChatId && !chatsStore.chatIds.includes(newChatId)) {
      if (chatsStore.chatIds.length > 0) {
        chatsStore.selectChat(chatsStore.chatIds[0])
      } else {
        createNewChat()
      }
    }
  },
)
</script>

<template>
  <div class="desktop-chat-layout">
    <!-- Левая боковая панель со списком чатов -->
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-brand">Golden Fish</div>
        <div class="search-container">
          <Search :size="18" class="search-icon" />
          <input v-model="searchInput" @input="handleSearchInput" ref="searchInputRef" class="search-input" placeholder="Поиск чатов..." type="text" />
        </div>
      </div>

      <!-- Кнопка создания нового чата -->
      <button class="new-chat-button" @click="createNewChat">
        <Plus :size="18" />
        <span>Новый чат</span>
      </button>

      <!-- Список чатов -->
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
              <MessageSquare :size="18" class="chat-icon" />
              <span class="chat-name">{{ chatsStore.getChatTitle(chatId) || `Чат от ${new Date(Number(chatId)).toLocaleString()}` }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Основной контент чата -->
    <div class="chat-content">
      <!-- Заголовок чата для десктопной версии -->
      <div v-if="chatsStore.selectedChatId" class="desktop-chat-header">
        <div class="chat-title-container">
          <div
            v-if="!isEditingTitle"
            class="chat-title editable-title"
            @click="startEditingTitle"
            :title="chatsStore.getChatTitle(chatsStore.selectedChatId) || 'Новый чат'"
          >
            {{ chatsStore.getChatTitle(chatsStore.selectedChatId) || "Новый чат" }}
          </div>
          <input
            v-else
            v-model="editableChatTitle"
            class="title-input"
            @blur="saveTitle"
            @keydown.enter="saveTitle"
            ref="titleInputRef"
            placeholder="Введите название чата..."
          />
        </div>
      </div>

      <AIChat v-if="chatsStore.selectedChatId" ref="chatInputRef" :key="chatsStore.selectedChatId" :chat-id="chatsStore.selectedChatId" />

      <!-- Placeholder, когда нет выбранного чата -->
      <div v-else class="no-chat-selected">
        <div class="placeholder-content">
          <Home :size="48" />
          <h2>Выберите чат или создайте новый</h2>
          <button class="create-chat-btn" @click="createNewChat">Создать новый чат</button>
        </div>
      </div>
    </div>

    <!-- Правая панель с быстрыми подсказками (опционально) -->
    <div class="quick-prompts-panel">
      <div class="panel-header">
        <h3>Быстрые запросы</h3>
      </div>
      <div class="quick-prompts-list">
        <button v-for="prompt in quickPrompts" :key="prompt.id" class="quick-prompt-button" @click="chatInputRef?.insertText(prompt.text)">
          {{ prompt.text }}
        </button>
      </div>
    </div>
  </div>
</template>
