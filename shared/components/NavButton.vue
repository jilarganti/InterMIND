// shared/components/NavButton.vue
<script setup lang="ts">
import { computed } from "vue"
import { useLocalizedPath } from "../utils/locale"

interface Props {
  /**
   * Текст кнопки
   */
  text: string

  /**
   * Класс для кнопки
   */
  buttonClass?: string

  /**
   * Ссылка для перехода
   */
  to: string

  /**
   * Стили для кнопки
   */
  buttonStyle?: string | Record<string, any>
}

const props = withDefaults(defineProps<Props>(), {
  buttonClass: "",
  buttonStyle: "",
})

const { navigateTo } = useLocalizedPath()

// Вычисляемый класс с добавлением brand по умолчанию
const computedClass = computed(() => {
  // Базовый класс
  const baseClass = "nav-button"

  // Если класс не указан, используем brand
  if (!props.buttonClass) {
    return `${baseClass} brand`
  }

  // Иначе используем указанный класс
  return `${baseClass} ${props.buttonClass}`
})

/**
 * Обработчик клика по кнопке - переход по ссылке с учетом локали
 */
const handleClick = (): void => {
  navigateTo(props.to)
}
</script>

<template>
  <button :class="computedClass" :style="buttonStyle" @click="handleClick">
    {{ text }}
  </button>
</template>

<style scoped>
.nav-button {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
}

/* Стили кнопки по умолчанию */
.nav-button.brand {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.nav-button.brand:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
}

/* Альтернативный стиль кнопки */
.nav-button.alt {
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}

.nav-button.alt:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}

.nav-button.alt:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}
</style>
