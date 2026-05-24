<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const { locale, t } = useI18n()
const localePath = useLocalePath()

const blogCollectionMap = {
  en: "blog",
  es: "blog_es",
  pt: "blog_pt",
  fr: "blog_fr",
  de: "blog_de",
  ru: "blog_ru",
  zh: "blog_zh",
} as const
type BlogCollection = (typeof blogCollectionMap)[keyof typeof blogCollectionMap]

const defaultBlogCollection = "blog" as const
const blogCollection = computed<BlogCollection>(() => blogCollectionMap[locale.value as keyof typeof blogCollectionMap] ?? defaultBlogCollection)

// route.path inside a localized route includes the locale prefix (e.g. /ru/blog/foo);
// @nuxt/content collections are mounted at the bare /blog prefix, so strip it.
const contentPath = computed(() => {
  const prefix = `/${locale.value}`
  return locale.value !== "en" && route.path.startsWith(prefix) ? route.path.slice(prefix.length) : route.path
})

async function fetchPost(collection: BlogCollection) {
  try {
    return await queryCollection(collection).path(contentPath.value).first()
  } catch (error) {
    console.debug(`[Blog] Failed to query ${collection}, falling back`, error)
    return null
  }
}

const { data: post } = await useAsyncData(
  () => `blog-post-${locale.value}-${contentPath.value}`,
  async () => {
    const localized = await fetchPost(blogCollection.value)
    if (localized) return localized
    if (blogCollection.value !== defaultBlogCollection) return fetchPost(defaultBlogCollection)
    return null
  },
  { watch: [blogCollection, contentPath] },
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Post not found", fatal: true })
}

const pageUrl = `${siteUrl}${route.path}`
const canonical = post.value.canonical ?? pageUrl

useHead({
  title: `${post.value.title} — InterMIND`,
  meta: [
    { name: "description", content: post.value.description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: pageUrl },
    { property: "og:title", content: post.value.title },
    { property: "og:description", content: post.value.description },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: post.value.title },
    { name: "twitter:description", content: post.value.description },
    { property: "article:published_time", content: post.value.date },
  ],
  link: [{ rel: "canonical", href: canonical }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.value.title,
        description: post.value.description,
        datePublished: post.value.date,
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        url: pageUrl,
        publisher: {
          "@type": "Organization",
          name: "InterMIND",
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.svg` },
        },
      }),
    },
  ],
})

const localeDateMap: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
  pt: "pt-BR",
  fr: "fr-FR",
  de: "de-DE",
  ru: "ru-RU",
  zh: "zh-CN",
}
function formatDate(d: string): string {
  return new Date(d).toLocaleDateString(localeDateMap[locale.value] ?? "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
</script>

<template>
  <div v-if="post" class="content">
    <article class="post">
      <header class="post-header">
        <p class="meta">{{ formatDate(post.date) }}</p>
        <h1>{{ post.title }}</h1>
        <p class="lede">{{ post.description }}</p>
      </header>
      <ContentRenderer :value="post" class="prose" />
    </article>
    <p class="back">
      <NuxtLink :to="localePath('/blog')">{{ t("blog.backToBlog") }}</NuxtLink>
    </p>
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
.post-header {
  margin: 2rem 0 3rem;
}
.meta {
  font-size: 0.85rem;
  color: #888;
  margin: 0 0 0.5rem;
}
.post h1 {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  line-height: 1.2;
  margin: 0 0 1rem;
  letter-spacing: -0.01em;
}
.lede {
  font-size: 1.1rem;
  color: #555;
  margin: 0;
}
.back {
  margin: 3rem 0 0;
}
.back a {
  color: #555;
  text-decoration: none;
}
.back a:hover {
  color: #dd9144;
}
</style>
