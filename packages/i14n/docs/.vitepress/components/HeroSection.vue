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

// Computed property to style the word(s) enclosed in ** **
const styledTitle = computed(() => {
  // Regex to find text enclosed in double asterisks
  const regex = /\*\*(.*?)\*\*/
  // Replace the pattern with the span tag
  const highlightedTitle = props.title.replace(regex, '<span class="highlighted-word">$1</span>')
  return highlightedTitle
})
const renderedText = computed(() => renderMarkdown(props.text))
</script>

<template>
  <section class="hero-section">
    <!-- Use v-html to render the styled title -->
    <h1 class="hero-title" v-html="styledTitle"></h1>
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
  /* margin: 8rem 0; */
}

.hero-title {
  font-size: calc(3rem + 1.2vw);
  font-weight: 700;
  line-height: 1.2;
  margin-top: 6rem;
}

.hero-title :deep(.highlighted-word) {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.hero-text {
  font-size: calc(0.7rem + 0.8vw);
  font-weight: 500;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  margin-top: 2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
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
