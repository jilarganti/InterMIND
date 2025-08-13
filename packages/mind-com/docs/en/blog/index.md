---
layout: page
title: Blog
sidebar: false
---

<script setup>
import { data as posts } from './posts.data'
</script>

# Blog

<div class="blog-list">
  <article v-for="post of posts" :key="post.url" class="blog-post">
    <h2>
      <a :href="post.url" class="blog-post-title">{{ post.title }}</a>
    </h2>
    <p class="blog-post-date">{{ post.date.string }}</p>
    <p class="blog-post-excerpt" v-if="post.excerpt">{{ post.excerpt }}</p>
    <p class="read-more">
      <a :href="post.url">Read more →</a>
    </p>
  </article>
</div>

<style scoped>
.blog-list {
  margin-top: 2rem;
}

.blog-post {
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.blog-post:last-child {
  border-bottom: none;
}

.blog-post-title {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  transition: color 0.25s;
}

.blog-post-title:hover {
  color: var(--vp-c-brand-2);
}

.blog-post-date {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.blog-post-excerpt {
  color: var(--vp-c-text-1);
  margin-top: 1rem;
  line-height: 1.6;
}

.read-more {
  margin-top: 1rem;
}

.read-more a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.read-more a:hover {
  text-decoration: underline;
}
</style>
