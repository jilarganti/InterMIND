<template>
  <div class="mt-8">
    <article v-for="post of posts" :key="post.url" class="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <h2>
        <a :href="post.url" class="text-2xl font-semibold text-[var(--vp-c-text-1)] hover:text-[var(--vp-c-brand-1)] no-underline">{{ post.title }}</a>
      </h2>
      <p class="text-[var(--vp-c-text-2)] text-sm mt-2">
        {{ post.date.string }}
        <span v-if="post.author" class="ml-4">by {{ post.author }}</span>
      </p>
      <div class="text-[var(--vp-c-text-1)] mt-4 leading-relaxed vp-doc" v-if="post.description" v-html="renderMarkdown(post.description)"></div>
      <a :href="post.url" class="text-[var(--vp-c-brand-1)] no-underline font-medium hover:underline mt-2 inline-block">Read more</a>
    </article>
  </div>
</template>

<script setup lang="ts">
interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  excerpt: string | undefined
  description: string
  author: string | undefined
}

defineProps<{
  posts: Post[]
}>()

function renderMarkdown(content: string): string {
  if (!content) return ""

  // Обрабатываем простой Markdown: жирный текст, курсив, ссылки
  return content
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // **жирный**
    .replace(/\*(.*?)\*/g, "<em>$1</em>") // *курсив*
    .replace(/`(.*?)`/g, "<code>$1</code>") // `код`
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[var(--vp-c-brand-1)] hover:underline">$1</a>') // [текст](ссылка)
}
</script>

<style scoped>
.vp-doc :deep(strong) {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.vp-doc :deep(em) {
  font-style: italic;
}

.vp-doc :deep(code) {
  background-color: var(--vp-c-bg-soft);
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 0.9em;
  font-family: var(--vp-font-family-mono);
}
</style>
