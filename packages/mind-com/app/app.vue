<script setup lang="ts">
// `useLocaleHead({ seo })` drives the hreflang alternates and OpenGraph locale
// tags so @nuxtjs/i18n keeps every locale cross-linked. We drop its
// rel=canonical link: each page sets its own locale-aware self-canonical via
// useHead, and emitting both would produce two canonical tags.
const { locale } = useI18n({ useScope: "global" })
const i18nHead = useLocaleHead({ seo: true })

// Drive <html lang> from the locale ref directly — it is always a resolved
// string during SSR, so the attribute is present in the raw HTML (Ahrefs
// "HTML lang attribute missing"). i18nHead.htmlAttrs.lang can be empty in the
// root setup before the route resolves, which dropped the attribute entirely.
useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
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
