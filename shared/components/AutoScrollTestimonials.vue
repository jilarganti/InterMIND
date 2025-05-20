<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const testimonials = ref([])
const scrollContainer = ref(null)
let frame

const scrollStep = 0.5

// Сохраняем ссылку на scroll-функцию и animationFrame
const scroll = () => {
  const el = scrollContainer.value
  if (!el) return

  el.scrollTop += scrollStep
  if (el.scrollTop >= el.scrollHeight / 2) {
    el.scrollTop = 0
  }

  frame = requestAnimationFrame(scroll)
}

// Загружаем данные
async function loadTestimonials() {
  const res = await fetch("/testimonials.json")
  const data = await res.json()
  testimonials.value = [...data.sort(() => Math.random() - 0.5), ...data]
}

// Регистрируем хуки ДО await
onMounted(async () => {
  await loadTestimonials()
  frame = requestAnimationFrame(scroll)
})

onUnmounted(() => cancelAnimationFrame(frame))
</script>

<template>
  <div ref="scrollContainer" class="h-64 overflow-hidden relative text-sm leading-relaxed border rounded-2xl p-4" style="scroll-behavior: auto">
    <div class="flex flex-col gap-4">
      <div v-for="(t, i) in testimonials" :key="i" class="opacity-80">
        <p>“{{ t.text }}”</p>
        <p class="text-xs text-muted mt-1">— {{ t.author }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Убираем скроллбар */
::-webkit-scrollbar {
  display: none;
}
</style>
