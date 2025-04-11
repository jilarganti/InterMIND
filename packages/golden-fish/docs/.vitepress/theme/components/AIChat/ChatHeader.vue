<script setup lang="ts">
import { ref, onMounted } from "vue"
import { ArrowLeft } from "lucide-vue-next"

const props = defineProps<{
  /**
   * Заголовок чата
   */
  title: string

  /**
   * Статус редактирования заголовка
   */
  isEditing: boolean

  /**
   * Значение поля редактирования заголовка
   */
  editableTitle: string

  /**
   * Показать кнопку "Назад" (для мобильного макета)
   */
  showBackButton?: boolean

  /**
   * Идентификатор текущего макета (desktop или mobile)
   */
  layout?: "desktop" | "mobile"

  /**
   * Является ли чат черновиком (не добавлен в список)
   */
  isDraft?: boolean
}>()

const emit = defineEmits<{
  /**
   * Событие начала редактирования заголовка
   */
  (e: "start-editing"): void

  /**
   * Событие сохранения заголовка
   */
  (e: "save-title"): void

  /**
   * Событие изменения редактируемого заголовка
   */
  (e: "update:editableTitle", value: string): void

  /**
   * Событие клика по кнопке "Назад"
   */
  (e: "go-back"): void
}>()

// Ref для поля ввода заголовка
const titleInputRef = ref<HTMLInputElement | null>(null)

const vFocus = {
  mounted: (el: HTMLElement) => el.focus(),
}

// Обработчик изменения значения поля
const updateEditableTitle = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit("update:editableTitle", target.value)
}

// При монтировании устанавливаем фокус на поле ввода, если открыто редактирование
onMounted(() => {
  if (props.isEditing && titleInputRef.value) {
    titleInputRef.value.focus()
  }
})
</script>

<template>
  <div class="chat-header" :class="{ 'mobile-header': layout === 'mobile' }">
    <!-- Кнопка "Назад" (для мобильной версии) -->
    <button v-if="showBackButton" class="back-button" @click="emit('go-back')">
      <ArrowLeft :size="20" />
    </button>

    <div class="chat-title-container">
      <!-- Отображение заголовка -->
      <div v-if="!isEditing" class="chat-title editable-title" :class="{ 'draft-title': isDraft }" @click="!isDraft && emit('start-editing')" :title="title">
        {{ title }}
        <!-- Индикатор черновика -->
        <span v-if="isDraft" class="draft-indicator">🆕</span>
      </div>

      <!-- Редактирование заголовка -->
      <input
        v-else
        v-focus
        ref="titleInputRef"
        :value="editableTitle"
        @input="updateEditableTitle"
        @blur="emit('save-title')"
        @keydown.enter="emit('save-title')"
        class="title-input"
        placeholder="Введите название чата..."
      />
    </div>
  </div>
</template>

<style scoped>
.chat-header {
  padding: 16px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg);
}

.mobile-header {
  padding: 12px 16px;
}

.back-button {
  background: none;
  border: none;
  padding: 8px;
  margin-right: 12px;
  color: var(--vp-c-text-1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-title-container {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.chat-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.editable-title {
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  display: inline-block;
  max-width: calc(100% - 16px);
}

.editable-title:hover {
  background-color: var(--vp-c-bg-soft);
}

.editable-title:hover::after {
  content: "✏️";
  font-size: 0.875rem;
  margin-left: 8px;
  opacity: 0.6;
}

/* Стили для черновика */
.draft-title {
  cursor: default;
  font-style: italic;
  color: var(--vp-c-text-2);
}

.draft-title:hover {
  background-color: transparent;
}

.draft-title:hover::after {
  content: "";
}

.draft-indicator {
  font-size: 0.75rem;
  font-weight: normal;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: 8px;
  display: inline-block;
  vertical-align: 1px;
}

.title-input {
  width: 100%;
  max-width: 800px;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  padding: 4px 8px;
  outline: none;
  height: 38px; /* Соответствует высоте заголовка */
}

.title-input:focus {
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-light);
}

/* Адаптация для мобильного режима */
.mobile-header .chat-title {
  font-size: 1.125rem;
}

.mobile-header .title-input {
  font-size: 1.125rem;
  height: 34px;
}
</style>
