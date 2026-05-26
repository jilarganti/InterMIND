<script setup lang="ts">
// Corporate vCard for mind.com. Single-screen, ~60 words on the page.
// Audience: B2B procurement / press / random partners who land here looking
// for "is this a real company?". Anyone going deeper goes to the product
// (intermind.com) or asks for Strategy-2026 directly.
const { t } = useI18n()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const productUrl = config.public.productUrl

const metaTitle = computed(() => t("home.metaTitle"))
const metaDescription = computed(() => t("home.metaDescription"))
const ogImage = `${siteUrl}/og-cover.png`

const organizationJsonLd = computed(() => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Mind",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: t("home.schema.orgDescription"),
  sameAs: [productUrl],
  email: "hello@mind.com",
  telephone: "+971 58 574 88 06",
  address: {
    "@type": "PostalAddress",
    streetAddress: "City Avenue Building, Office 405-070, Port Saeed",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
}))

const websiteJsonLd = computed(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Mind",
  publisher: { "@id": `${siteUrl}/#organization` },
}))

useHead({
  title: () => metaTitle.value,
  meta: [
    { name: "description", content: () => metaDescription.value },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}/` },
    { property: "og:title", content: () => metaTitle.value },
    { property: "og:description", content: () => metaDescription.value },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "Mind" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: () => metaTitle.value },
    { name: "twitter:description", content: () => metaDescription.value },
    { name: "twitter:image", content: ogImage },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/` }],
  script: [
    { type: "application/ld+json", innerHTML: () => JSON.stringify(organizationJsonLd.value) },
    { type: "application/ld+json", innerHTML: () => JSON.stringify(websiteJsonLd.value) },
  ],
})

const entities = [
  {
    name: "MindMeeting OÜ",
    roleKey: "home.vcard.entityEuRole",
    jurisdiction: "Estonia · Reg. 16207677 · VAT EE102465446",
  },
  {
    name: "Golden Fish Corporate Services Provider LLC",
    roleKey: "home.vcard.entityUaeRole",
    jurisdiction: "UAE · Reg. 2411728 · License 1414192",
  },
]
</script>

<template>
  <div class="min-h-[calc(100vh-12rem)] flex items-center">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
      <p class="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Mind</p>

      <h1 class="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
        <span class="text-gray-900 dark:text-white">{{ t("home.vcard.headlinePart1") }}</span>
        {{ " " }}
        <span class="text-gray-600 dark:text-gray-300">{{ t("home.vcard.headlinePart2") }}</span>
        {{ " " }}
        <span class="text-gray-400 dark:text-gray-500">{{ t("home.vcard.headlinePart3") }}</span
        ><span class="text-red-500">.</span>
      </h1>

      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
        {{ t("home.vcard.productLine") }}
        <a
          :href="productUrl"
          target="_blank"
          rel="noopener"
          class="font-bold text-gray-900 dark:text-white underline underline-offset-4 decoration-2 hover:decoration-gray-500"
          >intermind.com</a
        >
      </p>

      <div class="flex flex-wrap gap-3 mb-16">
        <UButton :to="productUrl" external color="neutral" size="xl"> {{ t("home.vcard.openProduct") }} </UButton>
        <UButton to="mailto:hello@mind.com" color="neutral" variant="outline" size="xl"> hello@mind.com </UButton>
      </div>

      <dl class="grid sm:grid-cols-2 gap-x-10 gap-y-6 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-8">
        <div v-for="entity in entities" :key="entity.name">
          <dt class="font-semibold text-gray-900 dark:text-white">{{ entity.name }}</dt>
          <dd class="mt-1">{{ t(entity.roleKey) }}</dd>
          <dd class="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{{ entity.jurisdiction }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
