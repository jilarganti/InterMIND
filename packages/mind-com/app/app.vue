<script setup lang="ts">
const { locale } = useI18n({ useScope: "global" })

useHead({
  htmlAttrs: {
    lang: locale,
    dir: "ltr" as const,
  },
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
