<script setup>
import { useData } from "vitepress"
import { computed } from "vue"
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"

const { site, page } = useData()

// Вычисляем правильный путь к странице блога
const blogPath = computed(() => {
  const currentPath = page.value.relativePath

  // Извлекаем локаль из пути (если есть)
  const localeMatch = currentPath.match(/^(i18n\/)?([a-z]{2})\//)
  const locale = localeMatch ? localeMatch[2] : null

  // Возвращаем путь к блогу с учётом локали
  return locale && locale !== "en" ? `/${locale}/blog/` : "/blog/"
})
</script>

<template>
  <article class="max-w-5xl mx-auto py-16 px-4 sm:px-8 lg:px-0">
    <div class="vp-doc">
      <Content />
    </div>
    <VPButton
      :text="site.themeConfig.localization.buttonLabel4BackToBlog"
      theme="brand"
      :href="blogPath"
      class="fixed left-4 bottom-4 z-50 shadow-md hover:shadow-lg transition-shadow"
    />
  </article>
</template>
