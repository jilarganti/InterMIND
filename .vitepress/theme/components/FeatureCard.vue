<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  title: string
  details?: string
  items: string[]
  images: {
    light: string
    dark: string
    alt?: string
  }
  linkText?: string
  linkHref?: string
  bullet?: string
}>()

// Add video detection computed property
const isVideoLight = computed(() => props.images.light?.toLowerCase().match(/\.(mp4|webm|ogg)$/))
const isVideoDark = computed(() => props.images.dark?.toLowerCase().match(/\.(mp4|webm|ogg)$/))

const processText = (text: string) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<span class="hl">$1</span>')
}

const handleCardClick = () => {
  if (props.linkHref) {
    window.location.href = props.linkHref
  }
}

const bulletStyle = computed(() => props.bullet || "•")
</script>

<template>
  <div class="feature-card" :class="{ 'is-clickable': linkHref }" @click="handleCardClick">
    <!-- Light theme media -->
    <video v-if="isVideoLight" autoplay muted playsinline class="feature-image light">
      <source :src="images.light" :type="`video/${images.light.split('.').pop()}`" />
    </video>
    <img v-else :src="images.light" class="feature-image light" :alt="images.alt" />

    <!-- Dark theme media -->
    <video v-if="isVideoDark" autoplay muted playsinline class="feature-image dark">
      <source :src="images.dark" :type="`video/${images.dark.split('.').pop()}`" />
    </video>
    <img v-else :src="images.dark" class="feature-image dark" :alt="images.alt" />

    <h3 class="feature-title">{{ title }}</h3>

    <p v-if="details" class="feature-details" v-html="processText(details)"></p>

    <ul class="feature-list" :style="{ '--bullet-content': `'${bulletStyle}'` }">
      <li v-for="(item, index) in items" :key="index" class="feature-item">
        <div class="feature-text" v-html="processText(item)"></div>
      </li>
    </ul>

    <a v-if="linkHref" :href="linkHref" class="feature-link" @click.stop>
      {{ linkText }}
      <span class="arrow">→</span>
    </a>
  </div>
</template>

<style scoped>
.feature-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-gray-border);
  padding: 24px;
  border-radius: 12px;
  transition: all 0.3s;
}

.is-clickable {
  cursor: pointer;
}

.is-clickable:hover,
.is-clickable:focus-within {
  border-color: var(--vp-hl-color);
}

.feature-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
  object-fit: cover;
}

.feature-image.dark {
  display: none;
}

.dark .feature-image.light {
  display: none;
}

.dark .feature-image.dark {
  display: block;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
}

.feature-details {
  margin: 0 0 12px;
  color: var(--vp-c-text-2);
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  padding-left: 1.5em;
  margin-bottom: 12px;
  color: var(--vp-c-text-2);
  position: relative;
}

.feature-item::before {
  content: var(--bullet-content);
  position: absolute;
  left: 0;
  color: var(--vp-c-brand);
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  margin-top: auto;
  position: relative;
  z-index: 1;
}

.feature-link:hover {
  text-decoration: underline;
}

.arrow {
  transition: transform 0.2s;
}

.feature-link:hover .arrow {
  transform: translateX(4px);
}
</style>
