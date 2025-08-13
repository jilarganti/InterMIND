<template>
  <article class="blog-article">
    <header class="blog-header">
      <h1>{{ frontmatter.title }}</h1>
      <div class="blog-meta">
        <time :datetime="frontmatter.date">{{ formatDate(frontmatter.date) }}</time>
        <span v-if="frontmatter.author" class="blog-author">by {{ frontmatter.author }}</span>
      </div>
    </header>
    <div class="blog-content">
      <Content />
    </div>
    <footer class="blog-footer">
      <a href="/en/blog/" class="back-to-blog">← Back to Blog</a>
    </footer>
  </article>
</template>

<script setup>
import { useData } from "vitepress"
const { frontmatter } = useData()

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
</script>

<style scoped>
.blog-article {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

.blog-header {
  margin-bottom: 3rem;
  text-align: center;
}

.blog-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.blog-meta {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.blog-meta time {
  margin-right: 1rem;
}

.blog-content {
  font-size: 1.05rem;
  line-height: 1.7;
}

.blog-content :deep(h2) {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.blog-content :deep(p) {
  margin-bottom: 1.5rem;
}

.blog-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.back-to-blog {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.back-to-blog:hover {
  text-decoration: underline;
}
</style>
