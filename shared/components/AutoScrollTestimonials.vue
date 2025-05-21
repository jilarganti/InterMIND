<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue"
import { useIntervalFn } from "@vueuse/core"

const props = defineProps({
  testimonialsUrl: {
    type: String,
  },
  height: {
    type: [String, Number],
    default: 600,
  },
  scrollInterval: {
    type: Number,
    default: 50,
  },
})

const testimonials = ref([])
const scrollContainer = ref(null)
const isPaused = ref(false)
const SCROLL_AMOUNT = 1

const frameHeight = computed(() => (typeof props.height === "number" ? `${props.height}px` : props.height))

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
  props.scrollInterval,
  { immediate: false },
)

async function loadTestimonials() {
  try {
    const res = await fetch(props.testimonialsUrl)
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
  <div class="testimonial-wrapper" ref="scrollContainer" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" :style="{ height: frameHeight }">
    <div class="testimonial-grid">
      <div v-for="(t, i) in testimonials" :key="i" class="testimonial-card">
        <p class="testimonial-title">{{ t.title }}</p>
        <p class="testimonial-text">"{{ t.text }}"</p>
        <div class="testimonial-footer">
          <span class="testimonial-author">— {{ t.author }}</span>
          <span class="testimonial-stars">{{ t.stars }}</span>
        </div>
      </div>
    </div>
    <!-- Duplicate content for continuous scrolling -->
    <div class="testimonial-grid">
      <div v-for="(t, i) in testimonials" :key="`dup-${i}`" class="testimonial-card">
        <p class="testimonial-title">{{ t.title }}</p>
        <p class="testimonial-text">"{{ t.text }}"</p>
        <div class="testimonial-footer">
          <span class="testimonial-author">— {{ t.author }}</span>
          <span class="testimonial-stars">{{ t.stars }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-wrapper {
  overflow-y: hidden;
  margin-top: 32px;
  border-radius: 16px;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.testimonial-wrapper::-webkit-scrollbar {
  display: none;
}

.testimonial-grid {
  column-gap: 24px;
  column-count: 3; /* Desktop: 3 columns */
}

@media (max-width: 1024px) {
  .testimonial-grid {
    column-count: 2; /* Tablet: 2 columns */
  }
}

@media (max-width: 768px) {
  .testimonial-grid {
    column-count: 1; /* Mobile: 1 column */
  }
}

.testimonial-card {
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 16px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  break-inside: avoid-column;
  margin-bottom: 24px;
}

.testimonial-title {
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
  font-size: 20px;
}

.testimonial-text {
  font-style: italic;
  color: var(--vp-c-text-2); /* Use VitePress variable for secondary text */
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.testimonial-author {
  color: var(--vp-c-text-3); /* Use VitePress variable for tertiary text */
  font-weight: bold;
}

.testimonial-stars {
  color: var(--vp-hl-color); /* Use VitePress highlight color variable */
  font-size: 14px;
  margin-top: 0; /* remove margin-top since it's now inline */
}
</style>
