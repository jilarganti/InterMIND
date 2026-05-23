<script setup lang="ts">
// Chat page is intentionally noindex (set in nuxt.config.ts robots + sitemap exclude).
// Phase 5 ports the AI chat UI here.
useHead({
  title: "Chat — InterMIND",
  meta: [{ name: "robots", content: "noindex,nofollow" }],
})
</script>

<template>
  <main style="max-width: 720px; margin: 4rem auto; padding: 2rem; font-family: system-ui, sans-serif">
    <h1>Chat</h1>
    <p>Phase 5 wires the AI chat widget into this page.</p>
  </main>
</template>
