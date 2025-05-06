<script setup lang="ts">
import { computed } from "vue"
// Import VPButton - Adjust path if necessary based on your VitePress setup
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"
import { renderMarkdown } from "../../../../../shared/utils/markdown"

interface ActionItem {
  text: string
  link: string
  // Theme can be 'brand', 'alt', 'sponsor' as per VPButton props
  theme: "brand" | "alt" | "sponsor"
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
      <!-- Use VPButton component -->
      <VPButton v-for="(action, idx) in actions" :key="idx" :text="action.text" :href="action.link" :theme="action.theme" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  text-align: center;
  /* margin: 8rem 0; */
  width: 100%; /* Ensure it takes full available width */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.hero-title {
  font-size: calc(2.8rem + 1.2vw);
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
  font-size: calc(0.6rem + 1.2vw);
  font-weight: 500;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  margin-top: calc(1.5rem + 1.2vw);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: calc(2rem + 1.2vw);
}

/* Add this rule to remove underline from VPButtons within hero actions */
.hero-actions :deep(.VPButton) {
  text-decoration: none; /* Override default link styling */
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2rem;
    overflow-wrap: break-word;
  }

  .hero-text {
    font-size: 1rem;
    overflow-wrap: break-word;
  }

  .hero-actions {
    /* Add this rule for hero-actions */
    margin-top: 2rem; /* Use fixed margin for smaller screens */
  }
}
</style>
