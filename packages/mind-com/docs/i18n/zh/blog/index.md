---
layout: page
title: "博客"
sidebar: false
---

<script setup>
import { data as posts } from './posts.data'
</script>

# 博客

<div class="mt-8">
  <article v-for="post of posts" :key="post.url" class="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
    <h2>
      <a :href="post.url" class="text-[var(--vp-c-text-1)] no-underline text-2xl font-semibold transition-colors duration-250 hover:text-[var(--vp-c-brand-2)]">{{ post.title }}</a>
    </h2>
    <p class="text-[var(--vp-c-text-2)] text-sm mt-2">{{ post.date.string }}</p>
    <p class="text-[var(--vp-c-text-1)] mt-4 leading-relaxed" v-if="post.excerpt">{{ post.excerpt }}</p>
    <p class="mt-4">
      <a :href="post.url" class="text-[var(--vp-c-brand-1)] no-underline font-medium hover:underline">阅读更多 →</a>
    </p>
  </article>
</div>