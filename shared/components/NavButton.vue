// shared/components/NavButton.vue
<script setup lang="ts">
import { computed } from "vue"
import { useData } from "vitepress"
import { useLocalizedPath } from "../utils/locale"
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"

interface Props {
  /**
   * Текст кнопки
   */
  buttonLabel?: string

  /**
   * Класс для кнопки (используется для определения темы: 'alt' или 'brand')
   */
  buttonClass?: "brand" | "alt" | "sponsor"

  /**
   * Ссылка для перехода
   */
  to: string
}

const props = defineProps<Props>()

const { navigateTo } = useLocalizedPath()
const { site, frontmatter } = useData()

const hide = computed(() => frontmatter.value.hideComponents?.includes("NavButton"))
const label = computed(() => props.buttonLabel || site.value.themeConfig.localization.buttonLabel4NavButton)

// Вычисляемая тема для VPButton
const computedTheme = computed(() => {
  if (props.buttonClass === "alt" || props.buttonClass === "sponsor" || props.buttonClass === "brand") {
    return props.buttonClass
  }
  return "brand" // По умолчанию 'brand'
})

/**
 * Обработчик клика по кнопке - переход по ссылке с учетом локали
 */
const handleClick = (): void => {
  navigateTo(props.to)
}
</script>

<template>
  <VPButton v-if="!hide" :text="label" :theme="computedTheme" :href="'javascript:void(0);'" @click="handleClick" custom />
</template>

<style scoped>
/* Стили удалены, так как VPButton имеет свои собственные стили */
</style>
