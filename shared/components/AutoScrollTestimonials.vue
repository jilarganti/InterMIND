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

    // Simple scroll up
    el.scrollTop += SCROLL_AMOUNT

    // When reaching the bottom, reset to top
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
    testimonials.value = [
      { text: "Great service!", author: "John Doe" },
      { text: "Amazing product", author: "Jane Smith" },
      { text: "Highly recommended", author: "Mike Johnson" },
      { text: "Best customer support", author: "Sarah Miller" },
      { text: "Love this product", author: "Chris Taylor" },
      { text: "Will definitely use again", author: "Alex Brown" },
    ]
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
  <div class="testimonial-wrapper" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="testimonial-scroll" ref="scrollContainer">
      <div class="testimonial-grid">
        <div v-for="(t, i) in testimonials" :key="i" class="testimonial-card">
          <p class="testimonial-text">"{{ t.text }}"</p>
          <p class="testimonial-author">— {{ t.author }}</p>
          <p class="testimonial-stars">★★★★★</p>
        </div>
      </div>
      <!-- Duplicate content for seamless scrolling -->
      <div class="testimonial-grid">
        <div v-for="(t, i) in testimonials" :key="`dup-${i}`" class="testimonial-card">
          <p class="testimonial-text">"{{ t.text }}"</p>
          <p class="testimonial-author">— {{ t.author }}</p>
          <p class="testimonial-stars">★★★★★</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-wrapper {
  height: 600px;
  background-color: #121212;
  border: 1px solid #2a2a2a;
  border-radius: 16px;
  padding: 24px;
  color: #ffffff;
  position: relative;
  font-family: sans-serif;
  overflow: hidden;
}

.testimonial-scroll {
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.testimonial-scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.testimonial-grid {
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 24px;
}

.testimonial-card {
  flex: 1 1 calc(33.333% - 16px);
  max-width: calc(33.333% - 16px);
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 16px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.testimonial-text {
  font-style: italic;
  color: #ddd;
}

.testimonial-author {
  margin-top: 12px;
  color: #999;
  font-weight: bold;
}

.testimonial-stars {
  margin-top: 4px;
  color: #f5c518;
  font-size: 14px;
}
</style>
