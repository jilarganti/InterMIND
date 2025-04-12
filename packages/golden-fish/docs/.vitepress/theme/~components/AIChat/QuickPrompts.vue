<script setup lang="ts">
import type { QuickPrompt } from "@theme/~composables/AIChat/useQuickPrompts"

const props = defineProps<{
  /**
   * Список быстрых подсказок
   */
  prompts: QuickPrompt[]

  /**
   * Идентификатор текущего макета (desktop или mobile)
   */
  layout?: "desktop" | "mobile"

  /**
   * Показывать заголовок панели
   */
  showHeader?: boolean

  /**
   * Заголовок панели
   */
  panelTitle?: string
}>()

const emit = defineEmits<{
  /**
   * Событие выбора быстрой подсказки
   */
  (e: "select-prompt", text: string): void
}>()
</script>

<template>
  <div class="quick-prompts-container" :class="{ 'mobile-prompts': layout === 'mobile' }">
    <!-- Заголовок панели -->
    <div v-if="showHeader" class="panel-header">
      <h3>{{ panelTitle || "Быстрые запросы" }}</h3>
    </div>

    <!-- Список быстрых подсказок -->
    <div class="quick-prompts-list">
      <button v-for="prompt in prompts" :key="prompt.id" class="quick-prompt-button" @click="emit('select-prompt', prompt.text)">
        {{ prompt.text }}
      </button>

      <!-- Если список пуст, показываем сообщение -->
      <div v-if="prompts.length === 0" class="empty-prompts-message">
        <p>Нет доступных подсказок</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Основной контейнер */
.quick-prompts-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}

/* Мобильная версия */
.mobile-prompts {
  padding: 16px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-left: none;
  background-color: var(--vp-c-bg);
}

/* Заголовок панели */
.panel-header {
  padding: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.panel-header h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

/* Список подсказок */
.quick-prompts-list {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
}

/* Кнопки подсказок */
.quick-prompt-button {
  padding: 10px 12px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-align: left;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.2s;
}

.quick-prompt-button:hover {
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand);
}

/* Сообщение при отсутствии подсказок */
.empty-prompts-message {
  text-align: center;
  color: var(--vp-c-text-2);
  padding: 20px 0;
}

/* Стили для мобильного режима */
.mobile-prompts .quick-prompt-button {
  width: 100%;
  padding: 16px;
  text-align: left;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.mobile-prompts .quick-prompt-button:hover {
  background-color: var(--vp-c-bg-mute);
}

/* Адаптивность для планшетов */
@media (min-width: 768px) and (max-width: 1023px) {
  .quick-prompts-container {
    display: none;
  }
}
</style>
