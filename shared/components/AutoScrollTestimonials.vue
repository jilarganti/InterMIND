<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { useIntervalFn } from "@vueuse/core"

const testimonials = ref([])
const scrollContainer = ref(null)
const isPaused = ref(false)
const SCROLL_AMOUNT = 1
const SCROLL_INTERVAL = 30 // ms

const { pause, resume } = useIntervalFn(
  () => {
    const el = scrollContainer.value
    if (!el || isPaused.value) return

    el.scrollTop += SCROLL_AMOUNT

    // Reset when reaching the bottom
    if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
      el.scrollTop = 0
    }
  },
  SCROLL_INTERVAL,
  { immediate: false },
)

async function loadTestimonials() {
  try {
    const res = await fetch("/testimonials.json")
    const data = await res.json()
    testimonials.value = data.sort(() => Math.random() - 0.5)
  } catch (error) {
    console.error("Failed to load testimonials:", error)
    testimonials.value = [] // Clear or leave empty on error
  }
}

const handleMouseEnter = () => {
  isPaused.value = true
}

const handleMouseLeave = () => {
  isPaused.value = false
}

onMounted(async () => {
  await loadTestimonials()
  resume()
})

onUnmounted(() => pause())
</script>

<template>
  <div class="testimonial-wrapper" ref="scrollContainer" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="testimonial-grid">
      <div v-for="(t, i) in testimonials" :key="i" class="testimonial-card">
        <p class="testimonial-title">{{ t.title }}</p>
        <p class="testimonial-text">"{{ t.text }}"</p>
        <p class="testimonial-author">— {{ t.author }}</p>
        <p class="testimonial-stars">★★★★★</p>
      </div>
    </div>
    <!-- Duplicate content for continuous scrolling -->
    <div class="testimonial-grid">
      <div v-for="(t, i) in testimonials" :key="`dup-${i}`" class="testimonial-card">
        <p class="testimonial-title">{{ t.title }}</p>
        <p class="testimonial-text">"{{ t.text }}"</p>
        <p class="testimonial-author">— {{ t.author }}</p>
        <p class="testimonial-stars">★★★★★</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-wrapper {
  height: 600px;
  overflow-y: hidden;
  background-color: var(--vp-c-bg-soft); /* Use VitePress variable */
  border: 1px solid var(--vp-c-divider); /* Use VitePress variable */
  border-radius: 16px;
  padding: 24px;
  /* color: #ffffff; Removed, inherit from VitePress theme */
  position: relative;
  /* font-family: sans-serif; Removed, inherit from VitePress theme */
  /* Hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.testimonial-wrapper::-webkit-scrollbar {
  display: none;
}

.testimonial-grid {
  /* display: flex; */ /* Removed */
  /* flex-wrap: wrap; */ /* Removed */
  column-gap: 24px;
  /* row-gap: 24px; */ /* Removed */
  padding-bottom: 24px;
  /* align-items: flex-start; */ /* Removed */
  column-count: 3; /* Added */
}

.testimonial-card {
  /* flex: 1 1 calc(33.333% - 16px); */ /* Removed */
  /* max-width: calc(33.333% - 16px); */ /* Removed */
  background-color: var(--vp-c-bg-alt); /* Use VitePress variable */
  border: 1px solid var(--vp-c-divider); /* Use VitePress variable */
  border-radius: 12px;
  padding: 16px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); Removed */
  break-inside: avoid-column; /* Added */
  margin-bottom: 24px; /* Added */
}

.testimonial-title {
  font-weight: bold;
  color: var(--vp-c-text-1); /* Use VitePress variable for primary text */
  margin-bottom: 8px;
  font-size: 16px;
}

.testimonial-text {
  font-style: italic;
  color: var(--vp-c-text-2); /* Use VitePress variable for secondary text */
}

.testimonial-author {
  margin-top: 12px;
  color: var(--vp-c-text-3); /* Use VitePress variable for tertiary text */
  font-weight: bold;
}

.testimonial-stars {
  margin-top: 4px;
  color: var(--vp-hl-color); /* Use VitePress highlight color variable */
  font-size: 14px;
}
</style>
