<script setup lang="ts">
import { computed } from "vue"
import { useData } from "vitepress"
import { renderMarkdown } from "../utils/markdown" // Предполагается, что у нас есть утилита для рендеринга маркдауна
import { useLocalizedPath } from "../utils/locale" // Импортируем утилиту для работы с локализованными путями

/**
 * Компонент FeatureBlock для отображения контента с изображением/видео
 * @prop {Object} card - Данные для отображения карточки
 * @prop {string} [card.title] - Заголовок
 * @prop {string} [card.details] - Описание (поддерживает markdown)
 * @prop {string} [card.link] - Ссылка для перехода при клике на изображение
 * @prop {Object} [card.src] - Изображение/видео
 * @prop {string} card.src.light - Путь к изображению для светлой темы
 * @prop {string} [card.src.dark] - Путь к изображению для темной темы
 * @prop {string} [card.src.alt] - Альтернативный текст для изображения
 * @prop {string} [card.src.width] - Ширина изображения/видео
 * @prop {boolean} [card.inversion] - Инвертировать порядок текста и изображения
 * @prop {string[]} [card.items] - Список элементов (поддерживает markdown)
 */
const props = defineProps<{
  card: {
    title?: string
    details?: string
    link?: string
    src?: {
      light: string
      dark?: string
      alt?: string
      width?: string
    }
    inversion?: boolean
    items?: string[]
  }
}>()

const { isDark } = useData()
const { navigateTo } = useLocalizedPath()

// Определяем источник медиа в зависимости от темы
const mediaUrl = computed(() => {
  if (!props.card.src) return null

  // Если темная тема и есть темное изображение, используем его
  if (isDark.value && props.card.src.dark) {
    return props.card.src.dark
  }

  // Иначе используем светлое изображение
  return props.card.src.light
})

// Определяем альтернативный текст для изображения
const altText = computed(() => props.card.src?.alt || props.card.title || "")

// Ширина медиа, если задана
const mediaWidth = computed(() => props.card.src?.width || "100%")

// Определяем, является ли медиа видео на основе расширения файла
const isVideo = computed(() => mediaUrl.value?.toLowerCase().match(/\.(mp4|webm|ogg)$/))

// Обработчик клика по медиа для перехода по ссылке
const handleMediaClick = () => {
  if (props.card.link) {
    // Используем функцию navigateTo для локализованного перехода
    navigateTo(props.card.link)
  }
}

// Класс для курсора, если доступен переход по ссылке
const mediaClass = computed(() => ({
  clickable: !!props.card.link,
}))

// Рендерим маркдаун в HTML
const renderedDescription = computed(() => {
  if (!props.card.details) return ""
  return renderMarkdown(props.card.details)
})

const renderedTitle = computed(() => {
  if (!props.card.title) return ""
  return renderMarkdown(props.card.title)
})

// Рендерим маркдаун в элементах списка
const renderedItems = computed(() => {
  return props.card.items?.map((item) => renderMarkdown(item)) || []
})
</script>

<template>
  <div class="usp-wrapper" :class="{ inverted: card.inversion }">
    <!-- Контейнер для контента (описание) -->
    <div class="content-container">
      <h3 v-if="card.title" class="usp-title" v-html="renderedTitle"></h3>
      <div v-if="card.details" class="usp-description" v-html="renderedDescription"></div>
      <ul v-if="card.items" class="usp-list">
        <li v-for="(item, index) in renderedItems" :key="index" class="usp-list-item" v-html="item"></li>
      </ul>
      <slot name="content"></slot>
    </div>

    <!-- Контейнер для медиа (изображение или видео) -->
    <div v-if="mediaUrl" class="media-container" :class="mediaClass" @click="handleMediaClick">
      <video v-if="isVideo" autoplay muted playsinline loop class="media-content" :style="{ width: mediaWidth }">
        <source :src="mediaUrl" :type="`video/${mediaUrl.split('.').pop()}`" />
      </video>
      <img v-else :src="mediaUrl" :alt="altText" class="media-content" :style="{ width: mediaWidth }" />
    </div>
  </div>
</template>

<style scoped>
.usp-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* max-width: 1200px; */
  /* margin: 0 auto 4px; */
  align-items: stretch;
}

.media-container.clickable {
  cursor: pointer;
}

.usp-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 16px;
  color: var(--vp-c-text-1);
}

.usp-title :deep(p) {
  margin: 0;
}

.usp-title :deep(strong) {
  color: var(--vp-hl-color);
}

.usp-description {
  font-size: 16px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 16px;
}

.usp-description :deep(p) {
  margin: 0;
}

.usp-description :deep(strong) {
  color: var(--vp-hl-color);
}

.media-content {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  display: block;
  border: 1px solid transparent;
  transition: border 0.2s;
}

.clickable:hover .media-content {
  border-color: var(--vp-hl-color);
}

.usp-list {
  list-style: none;
  /* padding: 0.5rem; */
  /* margin: 0 0 8px; */
}

.usp-list-item {
  margin-bottom: 4px; /* Reduced from 8px to 4px */
  color: var(--vp-c-text-2);
}

.usp-list-item :deep(p) {
  margin: 0; /* Ensure no extra margin from <p> tags */
}

.usp-list-item :deep(strong) {
  color: var(--vp-hl-color);
}

@media (min-width: 768px) {
  .usp-wrapper {
    flex-direction: row;
    padding: 24px;
    margin-bottom: 48px;
    gap: 32px;
  }

  .content-container {
    flex: 1 1 500px;
    max-width: 500px;
    padding: 0;
    order: 0;
  }

  .media-container {
    flex: 0 1 500px;
    padding: 0;
    order: 1;
  }

  .usp-wrapper.inverted .content-container {
    order: 1;
  }

  .usp-wrapper.inverted .media-container {
    order: 0;
  }

  .usp-title {
    font-size: 28px;
  }
}
</style>
