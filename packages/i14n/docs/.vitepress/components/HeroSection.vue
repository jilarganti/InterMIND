<script setup lang="ts">
import { computed } from "vue"
import { renderMarkdown } from "../../../../../shared/utils/markdown"

interface ActionItem {
  text: string
  link: string
  theme: string
}

const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  actions: { type: Array as () => ActionItem[], default: () => [] },
})

const renderedText = computed(() => renderMarkdown(props.text))
</script>

<template>
  <section class="hero-section">
    <h1 class="hero-title">{{ props.title }}</h1>
    <p class="hero-text" v-html="renderedText"></p>
    <div v-if="actions && actions.length" class="hero-actions">
      <a v-for="(action, idx) in actions" :key="idx" :href="action.link" :class="['hero-action', action.theme]">
        {{ action.text }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  text-align: center;
  margin: 8rem 0;
  /* padding: 0 1.5rem; */
  /* max-width: 100%; */
}

.hero-title {
  font-size: calc(3rem + 1.2vw);
  font-weight: 700;
  line-height: 1.2;
  /* margin-bottom: 1rem; */
  background: var(--vp-home-hero-name-background);
  /* -webkit-background-clip: text; */
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-text {
  font-size: calc(rem + 0.8vw);
  font-weight: 500;
  /* margin: 0.5rem auto 1.2rem; */
  /* max-width: 768px; */
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.hero-action {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.hero-action.primary {
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border: 1px solid var(--vp-button-brand-border);
}

.hero-action.secondary {
  background-color: var(--vp-button-alt-bg);
  color: var(--vp-button-alt-text);
  border: 1px solid var(--vp-button-alt-border);
}

.hero-action.brand {
  background-color: var(--vp-c-brand);
  color: white;
  border: 1px solid var(--vp-c-brand-dark);
}

.hero-action.primary:hover {
  background-color: var(--vp-button-brand-hover-bg);
  color: var(--vp-button-brand-hover-text);
  border-color: var(--vp-button-brand-hover-border);
}

.hero-action.secondary:hover,
.hero-action.brand:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .hero-section {
    margin: 2rem 0;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-text {
    font-size: 1.2rem;
  }
}
</style>
