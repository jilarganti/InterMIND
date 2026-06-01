<script setup lang="ts">
// `useLocaleHead({ seo })` drives the per-request <html lang>, hreflang
// alternates and OpenGraph locale tags so @nuxtjs/i18n keeps every locale
// cross-linked. We drop its rel=canonical link: each page sets its own
// locale-aware self-canonical via useHead, and emitting both would produce
// two canonical tags.
const i18nHead = useLocaleHead({ seo: true })

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
    dir: "ltr" as const,
  },
  link: (i18nHead.value.link ?? []).filter((l) => l.rel !== "canonical"),
  meta: i18nHead.value.meta ?? [],
}))
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
