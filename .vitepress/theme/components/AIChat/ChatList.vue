<script setup lang="ts">
import { MessageSquare, Search } from "lucide-vue-next"

const props = defineProps<{
  /**
   * Сгруппированные чаты по годам и месяцам
   */
  groupedChats: Record<string, Record<string, string[]>>

  /**
   * ID текущего выбранного чата
   */
  selectedChatId: string

  /**
   * Значение строки поиска
   */
  searchInput: string

  /**
   * Заголовок панели списка чатов
   */
  panelTitle?: string

  /**
   * Показывать ли поле поиска
   */
  showSearch?: boolean

  /**
   * Идентификатор текущего макета (desktop или mobile)
   */
  layout?: "desktop" | "mobile"
}>()

const emit = defineEmits<{
  /**
   * Событие изменения поисковой строки
   */
  (e: "update:searchInput", value: string): void

  /**
   * Событие выбора чата
   */
  (e: "select-chat", chatId: string): void

  /**
   * Событие создания нового чата
   */
  (e: "create-chat"): void

  /**
   * Событие возврата на главный экран (только для мобильного макета)
   */
  (e: "go-back"): void
}>()

// Функция для получения заголовка чата
const getChatTitle = (chatId: string) => {
  // В компоненте используем props
  // Хранилище должно быть доступно в родительском компоненте
  emit("select-chat", chatId)
}

// Запрашиваем создание нового чата у родителя
const createNewChat = () => {
  emit("create-chat")
}

// Возврат на предыдущий экран (для мобильного макета)
const goBack = () => {
  emit("go-back")
}

// Обновление строки поиска
const updateSearchInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit("update:searchInput", target.value)
}
</script>

<template>
  <div class="chat-list-container" :class="{ 'mobile-chat-list': layout === 'mobile' }">
    <!-- Заголовок и поиск -->
    <div class="list-header">
      <!-- Для мобильного макета добавляем кнопку "Назад" -->
      <button v-if="layout === 'mobile'" class="back-button" @click="goBack">← Назад</button>

      <div class="list-title">{{ panelTitle || "Чаты" }}</div>

      <!-- Поле поиска (опциональное) -->
      <div v-if="showSearch" class="search-container">
        <Search :size="18" class="search-icon" />
        <input :value="searchInput" @input="updateSearchInput" class="search-input" placeholder="Поиск чатов..." type="text" />
      </div>
    </div>

    <!-- Кнопка создания нового чата -->
    <button class="new-chat-button" @click="createNewChat">
      <span>Новый чат</span>
    </button>

    <!-- Список чатов -->
    <div class="chats-list">
      <div v-for="(yearData, year) in groupedChats" :key="year" class="chat-year-group">
        <h2 class="year-header">{{ year }}</h2>

        <div v-for="(monthChats, month) in yearData" :key="`${year}-${month}`" class="chat-month-group">
          <h3 class="month-header">{{ month }}</h3>

          <div v-for="chatId in monthChats" :key="chatId" class="chat-item" :class="{ active: chatId === selectedChatId }" @click="emit('select-chat', chatId)">
            <MessageSquare :size="18" class="chat-icon" />
            <!-- Используем слот для отображения заголовка чата -->
            <slot name="chat-title" :chat-id="chatId">
              <span class="chat-name">Чат {{ new Date(Number(chatId)).toLocaleString() }}</span>
            </slot>
          </div>
        </div>
      </div>

      <!-- Если список пуст, показываем сообщение -->
      <div v-if="Object.keys(groupedChats).length === 0" class="empty-list-message">
        <p>Нет чатов, соответствующих поиску</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Основной контейнер */
.chat-list-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

/* Заголовок и поиск */
.list-header {
  padding: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.list-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 16px;
}

/* Поиск */
.search-container {
  position: relative;
  margin-bottom: 8px;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-3);
}

.search-input {
  width: 100%;
  padding: 8px 8px 8px 36px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-light);
}

/* Кнопка назад */
.back-button {
  padding: 8px 12px;
  margin-bottom: 10px;
  background: none;
  border: none;
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.back-button:hover {
  text-decoration: underline;
}

/* Кнопка нового чата */
.new-chat-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 16px;
  padding: 10px;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.new-chat-button:hover {
  background-color: var(--vp-c-brand-dark);
}

/* Список чатов */
.chats-list {
  flex: 1;
  overflow-y: auto;
  padding: 0 16px 16px 16px;
}

.year-header {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 16px 0 8px 0;
  color: var(--vp-c-text-1);
}

.month-header {
  font-size: 1rem;
  font-weight: 500;
  margin: 12px 0 8px 0;
  color: var(--vp-c-text-2);
  padding-bottom: 4px;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.chat-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  margin-bottom: 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: var(--vp-c-bg-soft);
}

.chat-item:hover {
  background-color: var(--vp-c-bg-mute);
}

.chat-item.active {
  background-color: var(--vp-c-bg-alt);
  font-weight: 500;
}

.chat-icon {
  color: var(--vp-c-text-3);
}

.chat-name {
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.empty-list-message {
  text-align: center;
  padding: 20px;
  color: var(--vp-c-text-2);
}

/* Адаптация для мобильного режима */
.mobile-chat-list .chat-item {
  padding: 12px;
  margin-bottom: 8px;
}

.mobile-chat-list .year-header {
  font-size: 1.1rem;
  margin-top: 20px;
}
</style>
