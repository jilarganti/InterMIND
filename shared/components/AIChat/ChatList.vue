<script setup lang="ts">
import { MessageSquare, Search, Plus, ArrowLeft } from "lucide-vue-next"
import { computed } from "vue"
import { useData, useRouter } from "vitepress"

interface GroupedChats {
  [year: string]: {
    [month: string]: string[]
  }
}

interface Props {
  /**
   * Сгруппированные чаты по годам и месяцам
   */
  groupedChats: GroupedChats

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
}

const props = defineProps<Props>()

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

const placeholder = computed(() => useData().site.value.themeConfig.localization.placeholder4ChatList)

// Используем VitePress роутер для навигации
const router = useRouter()

// Функция для перехода на домашнюю страницу текущей локали
const goToHome = () => {
  const currentRoute = router.route
  const localePrefix = currentRoute.path.match(/^\/([^\/]+)\//)?.[1]

  // Переходим на домашнюю страницу локали или корневую
  router.go(localePrefix ? `/${localePrefix}/` : "/")
}

// Преобразуем вложенную структуру в плоский список групп по месяцам
const flattenedGroups = computed(() => {
  // Правильно типизируем результирующий объект
  const result: Record<string, string[]> = {}

  // Объединяем все месяцы из разных лет
  for (const [year, monthData] of Object.entries(props.groupedChats)) {
    for (const [month, chatIds] of Object.entries(monthData)) {
      // Добавляем год к названию месяца для уникальности
      const monthKey = `${month} ${year}`
      result[monthKey] = chatIds
    }
  }

  return result
})

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
      <!-- Кнопка Back для перехода на главную страницу -->
      <button @click="goToHome" class="toolbar-button neutral-button" title="Back to home">
        <ArrowLeft :size="20" />
      </button>

      <div class="search-container">
        <Search :size="18" class="search-icon" />
        <input :value="searchInput" @input="updateSearchInput" class="search-input" :placeholder="placeholder" type="text" />
      </div>

      <button class="toolbar-button neutral-button" @click="createNewChat" title="New Chat">
        <Plus :size="20" />
      </button>
    </div>

    <!-- Список чатов -->
    <div class="chats-list">
      <!-- Упрощенная структура - только по месяцам -->
      <div v-for="(chatIds, month) in flattenedGroups" :key="month" class="chat-month-group">
        <div class="month-header">{{ month }}</div>

        <div v-for="chatId in chatIds" :key="chatId" class="chat-item" :class="{ active: chatId === selectedChatId }" @click="emit('select-chat', chatId)">
          <MessageSquare :size="18" class="chat-icon" />
          <!-- Используем слот для отображения заголовка чата -->
          <slot name="chat-title" :chat-id="chatId">
            <span class="chat-name">Чат {{ new Date(Number(chatId)).toLocaleString() }}</span>
          </slot>
        </div>
      </div>

      <!-- Если список пуст, показываем сообщение -->
      <div v-if="Object.keys(flattenedGroups).length === 0" class="empty-list-message">
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

/* Заголовок месяца */
.month-header {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  padding: 8px 0;
  margin-top: 4px;
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
</style>
