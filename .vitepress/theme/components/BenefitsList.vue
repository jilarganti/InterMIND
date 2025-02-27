<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  text: string
}

const props = defineProps<{
  features: Feature[]
}>()

const processText = (text: string) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<span class="hl">$1</span>')
}
</script>

<template>
  <div class="benefits-grid">
    <div v-for="(feature, index) in features" :key="index" class="benefit-card">
      <div class="emoji">{{ feature.icon }}</div>
      <div class="content">
        <h3 class="title">{{ feature.title }}</h3>
        <div class="text" v-html="processText(feature.text)"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Стили остаются теми же */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 32px 0;
}

.benefit-card {
  background: var(--vp-c-gray-bg);
  border: 1px solid var(--vp-c-gray-border);
  padding: 32px;
  border-radius: 12px;
  transition: background-color 0.3s;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* .benefit-card:hover {
  border-color: var(--vp-hl-color);
} */

.emoji {
  font-size: 3rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.text {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 960px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
