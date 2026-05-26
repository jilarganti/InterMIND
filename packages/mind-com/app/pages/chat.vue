<script setup lang="ts">
// Chat page is intentionally noindex (set in nuxt.config.ts robots + sitemap exclude).
// Phase 5 ports the AI chat UI here.
const { t } = useI18n({ useScope: "global" })
useHead({
  title: () => t("chat.metaTitle"),
  meta: [{ name: "robots", content: "noindex,nofollow" }],
})
</script>

<template>
  <main style="max-width: 720px; margin: 4rem auto; padding: 2rem; font-family: system-ui, sans-serif">
    <h1>{{ t("chat.h1") }}</h1>
    <p>{{ t("chat.placeholder") }}</p>
  </main>
</template>
