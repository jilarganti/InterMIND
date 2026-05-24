<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

const { data: posts } = await useAsyncData("blog-index", () =>
  queryCollection("blog")
    .where("hidden", "<>", true)
    .order("date", "DESC")
    .select("path", "title", "description", "date", "author", "image", "badge")
    .all(),
)

const title = "Blog — InterMIND"
const description =
  "Long-form research and analysis on real-time AI interpretation, multilingual meetings, and global team communication from the InterMIND team."

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}/blog` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/blog` }],
})

function authorName(raw?: string | null): string | undefined {
  if (!raw) return undefined
  const match = raw.match(/^\[([^\]]+)\]/)
  return match ? match[1] : raw
}
</script>

<template>
  <UContainer class="blog-container">
    <UPageHeader
      title="Blog"
      description="Research and analysis on real-time AI interpretation and multilingual collaboration."
      class="py-12"
    />

    <UPageBody>
      <UBlogPosts v-if="posts && posts.length">
        <UBlogPost
          v-for="post in posts"
          :key="post.path"
          :title="post.title"
          :description="post.description"
          :date="new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })"
          :badge="post.badge ? { label: post.badge, color: 'primary' } : undefined"
          :authors="authorName(post.author) ? [{ name: authorName(post.author)! }] : undefined"
          :to="post.path"
          variant="naked"
        >
          <template v-if="post.image" #header>
            <img :src="post.image" :alt="post.title" class="og-cover" loading="lazy" width="1200" height="630" />
          </template>
        </UBlogPost>
      </UBlogPosts>

      <p v-else class="empty">No posts yet.</p>
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
.og-cover {
  width: 100%;
  height: auto;
  aspect-ratio: 1200 / 630;
  object-fit: cover;
  border-radius: 0.5rem;
  display: block;
}
.empty {
  color: #888;
  text-align: center;
  padding: 3rem 0;
}
</style>
