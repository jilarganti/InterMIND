// shared/components/NavButton.vue
<script setup lang="ts">
import { computed } from "vue"
import { useData } from "vitepress"
import { useLocalizedPath } from "../utils/locale"
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"

const props = withDefaults(
  defineProps<{
    buttonLabel?: string
    to: string
    buttonClass?: "brand" | "alt" | "sponsor"
    buttonStyle?: string
  }>(),
  {
    buttonClass: "alt",
    buttonStyle: "display: flex;",
  },
)

const { navigateTo } = useLocalizedPath()
const label = computed(() => props.buttonLabel || useData().site.value.themeConfig.localization.buttonLabel4NavButton)

/**
 * Обработчик клика по кнопке - переход по ссылке с учетом локали
 */
const handleClick = (event: Event): void => {
  event.preventDefault()
  navigateTo(props.to)
}
</script>

<template>
  <div :style="props.buttonStyle">
    <VPButton :text="label" :theme="buttonClass" :href="props.to" @click="handleClick" />
  </div>
</template>
