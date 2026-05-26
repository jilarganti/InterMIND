<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const { locale, t } = useI18n({ useScope: "global" })
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

async function getBlogPosts(collection: BlogCollection) {
  try {
    return await queryCollection(collection)
      .where("hidden", "<>", true)
      .order("date", "DESC")
      .select("path", "title", "description", "date", "author", "image", "badge")
      .all()
  } catch (error) {
    console.debug(`[Blog] Failed to query ${collection}, falling back`, error)
    return []
  }
}

const { data: posts } = await useAsyncData(
  () => `blog-index-${locale.value}`,
  async () => {
    const localizedPosts = await getBlogPosts(blogCollection.value)
    if (blogCollection.value === defaultBlogCollection) return localizedPosts
    // Fill gaps with English originals so an incomplete locale tree still surfaces every post.
    const localizedSlugs = new Set(localizedPosts.map((p) => p.path))
    const fallbackPosts = await getBlogPosts(defaultBlogCollection)
    return [...localizedPosts, ...fallbackPosts.filter((p) => !localizedSlugs.has(p.path))].sort(
      (a, b) => Date.parse(b.date) - Date.parse(a.date),
    )
  },
  { watch: [blogCollection] },
)

const metaTitle = computed(() => t("blog.metaTitle"))
const metaDescription = computed(() => t("blog.metaDescription"))

useHead({
  title: () => metaTitle.value,
  meta: [
    { name: "description", content: () => metaDescription.value },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}/blog` },
    { property: "og:title", content: () => metaTitle.value },
    { property: "og:description", content: () => metaDescription.value },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: () => metaTitle.value },
    { name: "twitter:description", content: () => metaDescription.value },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/blog` }],
})

function authorName(raw?: string | null): string | undefined {
  if (!raw) return undefined
  const match = raw.match(/^\[([^\]]+)\]/)
  return match ? match[1] : raw
}

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
  <UContainer class="blog-container">
    <UPageHeader :title="t('blog.title')" :description="t('blog.description')" class="py-12" />

    <UPageBody>
      <UBlogPosts v-if="posts && posts.length">
        <UBlogPost
          v-for="post in posts"
          :key="post.path"
          :title="post.title"
          :description="post.description"
          :date="formatDate(post.date)"
          :badge="post.badge ? { label: post.badge, color: 'primary' } : undefined"
          :authors="authorName(post.author) ? [{ name: authorName(post.author)! }] : undefined"
          :to="localePath(post.path)"
          variant="naked"
        >
          <template v-if="post.image" #header>
            <img :src="post.image" :alt="post.title" class="og-cover" loading="lazy" width="1200" height="630" />
          </template>
        </UBlogPost>
      </UBlogPosts>

      <p v-else class="empty">{{ t("blog.noPosts") }}</p>
    </UPageBody>
  </UContainer>
</template>

<style scoped>
.blog-container {
  padding-bottom: 4rem;
}
:deep([class*="grid-cols-3"]) {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
}
/* Nuxt UI's naked variant ships `shadow-lg` on the header, which renders as a
   visible halo around the image in light theme. Drop the shadow and let the
   cover fill the slot so there's no letterboxing either. */
:deep([data-slot="header"]) {
  box-shadow: none;
}
.og-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.empty {
  color: #888;
  text-align: center;
  padding: 3rem 0;
}
</style>
