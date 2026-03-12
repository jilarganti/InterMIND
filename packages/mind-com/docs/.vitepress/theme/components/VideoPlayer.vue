<script setup lang="ts">
/**
 * Simple VideoPlayer with mute/unmute button
 * Lazy-loads video when it enters viewport to improve FCP/LCP
 */
import { ref, onMounted, onUnmounted } from "vue"
import { Icon } from "@iconify/vue"

interface Props {
  src: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: true,
  loop: false,
  muted: true,
})

const videoRef = ref<HTMLVideoElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const isMuted = ref(props.muted)
let observer: IntersectionObserver | null = null

const toggleMute = () => {
  isMuted.value = !isMuted.value
  if (videoRef.value) {
    videoRef.value.muted = isMuted.value
  }
}

onMounted(() => {
  if (!containerRef.value || !videoRef.value) return

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && videoRef.value) {
        // Start loading and playing when visible
        videoRef.value.preload = "auto"
        if (props.autoplay) videoRef.value.play().catch(() => {})
        observer?.disconnect()
      }
    },
    { rootMargin: "200px" },
  )
  observer.observe(containerRef.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div ref="containerRef" class="relative w-full group">
    <video ref="videoRef" :loop="loop" :muted="muted" playsinline preload="none" class="w-full h-auto rounded-lg">
      <source :src="src" type="video/mp4" />
    </video>

    <button
      @click="toggleMute"
      :class="[
        'absolute top-4 left-4 w-12 h-12 md:top-24 md:left-24 md:w-24 md:h-12 bg-white/90 text-black border-0 focus:outline-none flex items-center justify-center rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100',
      ]"
    >
      <Icon v-if="isMuted" icon="tabler:volume-off" class="text-xl md:text-3xl text-red-500" />
      <Icon v-else icon="tabler:volume" class="text-xl md:text-3xl" />
    </button>
  </div>
</template>
