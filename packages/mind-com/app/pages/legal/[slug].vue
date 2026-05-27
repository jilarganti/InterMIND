<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const { locale } = useI18n({ useScope: "global" })

const legalCollectionMap = {
  en: "legal",
  es: "legal_es",
  pt: "legal_pt",
  fr: "legal_fr",
  de: "legal_de",
  ru: "legal_ru",
  zh: "legal_zh",
} as const
type LegalCollection = (typeof legalCollectionMap)[keyof typeof legalCollectionMap]

const defaultLegalCollection = "legal" as const
const legalCollection = computed<LegalCollection>(
  () => legalCollectionMap[locale.value as keyof typeof legalCollectionMap] ?? defaultLegalCollection,
)

const contentPath = computed(() => {
  const prefix = `/${locale.value}`
  return locale.value !== "en" && route.path.startsWith(prefix) ? route.path.slice(prefix.length) : route.path
})

async function fetchDoc(collection: LegalCollection) {
  try {
    return await queryCollection(collection).path(contentPath.value).first()
  } catch (error) {
    console.debug(`[Legal] Failed to query ${collection}, falling back`, error)
    return null
  }
}

const { data: doc } = await useAsyncData(
  () => `legal-${locale.value}-${contentPath.value}`,
  async () => {
    const localized = await fetchDoc(legalCollection.value)
    if (localized) return localized
    if (legalCollection.value !== defaultLegalCollection) return fetchDoc(defaultLegalCollection)
    return null
  },
  { watch: [legalCollection, contentPath] },
)

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: "Document not found", fatal: true })
}

const pageUrl = `${siteUrl}${route.path}`

useHead({
  title: `${doc.value.title} — Mind.com`,
  meta: [
    { name: "description", content: doc.value.description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: pageUrl },
    { property: "og:title", content: doc.value.title },
    { property: "og:description", content: doc.value.description },
  ],
  link: [{ rel: "canonical", href: pageUrl }],
})
</script>

<template>
  <div v-if="doc" class="content">
    <article class="doc">
      <header class="doc-header">
        <h1>{{ doc.title }}</h1>
        <p v-if="doc.description" class="lede">{{ doc.description }}</p>
      </header>
      <ContentRenderer :value="doc" class="prose" />
    </article>
  </div>
</template>

<style scoped>
.content {
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.65;
}
.doc-header {
  margin: 2rem 0 3rem;
}
.doc h1 {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  line-height: 1.2;
  margin: 0 0 1rem;
}
.lede {
  font-size: 1.1rem;
  color: #555;
  margin: 0;
}
</style>
