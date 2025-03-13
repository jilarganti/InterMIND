<script setup lang="ts">
import { MessageSquare, Search, Plus, Home } from "lucide-vue-next"

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
    <!-- Поисковая строка и кнопка нового чата -->
    <div class="search-toolbar">
      <!-- Кнопка Home для перехода на главную страницу -->
      <a href="/" class="toolbar-button neutral-button" title="На главную">
        <Home :size="20" />
      </a>

      <div class="search-container">
        <Search :size="18" class="search-icon" />
        <input :value="searchInput" @input="updateSearchInput" class="search-input" placeholder="Поиск чатов..." type="text" />
      </div>

      <button class="toolbar-button neutral-button" @click="createNewChat" title="Новый чат">
        <Plus :size="20" />
      </button>
    </div>

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
  background-color: var(--vp-c-bg-soft);
}

/* Панель поиска и создания чата */
.search-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background-color: var(--vp-c-bg-soft);
}

/* Общие стили для кнопок в тулбаре */
.toolbar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
  box-sizing: border-box;
}

/* Нейтральный стиль кнопок */
.neutral-button {
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s;
}

.neutral-button:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider-dark);
}

/* Поиск */
.search-container {
  position: relative;
  flex: 1;
  height: 40px;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-3);
  z-index: 1;
}

.search-input {
  width: 100%;
  height: 40px;
  padding: 0 10px 0 36px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  box-sizing: border-box;
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-light);
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
  background-color: var(--vp-c-bg);
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
