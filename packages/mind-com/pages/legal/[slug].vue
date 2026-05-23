<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

const { data: doc } = await useAsyncData(`legal-${route.path}`, () => queryCollection("legal").path(route.path).first())

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: "Document not found", fatal: true })
}

const pageUrl = `${siteUrl}${doc.value.path}`

useHead({
  title: `${doc.value.title} — InterMIND`,
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
