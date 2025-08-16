---
title: InterMIND Blog - AI Translation & Video Communication Insights
description: Stay updated with the latest news, technical insights, and product updates from InterMIND - the AI-powered real-time translation platform for video communications.
lastUpdated: false
---

<script setup>
import { data as posts } from './posts.data'
import { renderMarkdown } from 'shared/utils/markdown'
</script>

<!-- # Blog -->

<div class="mt-8">
  <article v-for="post of posts" :key="post.url" class="mb-6 pb-10 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
    <h1>
      <a :href="post.url" class="text-2xl font-semibold text-[var(--vp-c-text-1)] hover:text-[var(--vp-c-brand-1)] no-underline">{{ post.title }}</a>
    </h1>
    <div class="text-[var(--vp-c-text-2)] text-sm mt-2 flex items-center flex-nowrap">
      <span>{{ post.date.string }}</span>
      <span v-if="post.author" class="ml-2 flex items-center flex-nowrap">by&nbsp;<span v-html="renderMarkdown(post.author)"></span></span>
    </div>
    <div class="text-[var(--vp-c-text-1)] mt-4 leading-relaxed" v-if="post.description" v-html="renderMarkdown(post.description)">
    </div>
    <a :href="post.url" class="text-[var(--vp-c-brand-1)] no-underline font-medium hover:underline mt-2 inline-block">Read more</a>
  </article>
</div>
