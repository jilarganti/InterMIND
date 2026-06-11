<script setup lang="ts">
// Corporate vCard for mind.com. Single-screen, ~60 words on the page.
// Audience: B2B procurement / press / random partners who land here looking
// for "is this a real company?". Anyone going deeper goes to the product
// (intermind.com) or asks for Strategy-2026 directly.
const { t } = useI18n({ useScope: "global" })
const localePath = useLocalePath()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const productUrl = config.public.productUrl

// "legacy" → the ~1y inter.mind.com cohort, "new" → everyone else (and bots).
// Resolved server-side in server/middleware/audience.ts. See useAudience().
const audience = useAudience()

const metaTitle = computed(() => t("home.metaTitle"))
const metaDescription = computed(() => t("home.metaDescription"))
const ogImage = `${siteUrl}/og-cover.png`

const organizationJsonLd = computed(() => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Mind.com",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: t("home.schema.orgDescription"),
  sameAs: [productUrl],
}))

const websiteJsonLd = computed(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Mind.com",
  publisher: { "@id": `${siteUrl}/#organization` },
}))

useHead({
  title: () => metaTitle.value,
  meta: [
    { name: "description", content: () => metaDescription.value },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}${localePath("/")}` },
    { property: "og:title", content: () => metaTitle.value },
    { property: "og:description", content: () => metaDescription.value },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "Mind.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: () => metaTitle.value },
    { name: "twitter:description", content: () => metaDescription.value },
    { name: "twitter:image", content: ogImage },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/")}` }],
  script: [
    { type: "application/ld+json", innerHTML: () => JSON.stringify(organizationJsonLd.value) },
    { type: "application/ld+json", innerHTML: () => JSON.stringify(websiteJsonLd.value) },
  ],
})
</script>

<template>
  <HomeLegacy v-if="audience === 'legacy'" />
  <HomeDefault v-else />
</template>
