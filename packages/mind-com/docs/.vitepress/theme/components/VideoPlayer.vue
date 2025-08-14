<script setup lang="ts">
/**
 * Simple VideoPlayer with mute/unmute button
 */
import { ref, onMounted } from "vue"
import { Icon } from "@iconify/vue"

interface Props {
  src: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: true,
  loop: true,
  muted: true,
})

const videoRef = ref<HTMLVideoElement | null>(null)
const isMuted = ref(props.muted)
const showButton = ref(false)

const toggleMute = () => {
  isMuted.value = !isMuted.value
  if (videoRef.value) {
    videoRef.value.muted = isMuted.value
  }
}

const startVideo = async () => {
  if (videoRef.value && props.autoplay) {
    try {
      await videoRef.value.play()
    } catch {
      // Браузер заблокировал автозапуск, ничего страшного
    }
  }
}

onMounted(() => {
  setTimeout(startVideo, 100)
})
</script>

<template>
  <div class="relative w-full group" @mouseenter="showButton = true" @mouseleave="showButton = false">
    <video ref="videoRef" :autoplay="autoplay" :loop="loop" :muted="muted" playsinline class="w-full h-auto rounded-lg" @loadeddata="startVideo">
      <source :src="src" type="video/mp4" />
    </video>

    <button
      @click="toggleMute"
      :class="[
        'absolute top-24 left-24 w-24 h-12',
        'bg-white/90 text-black',
        'flex items-center justify-center',
        'rounded-full shadow-lg',
        showButton ? 'opacity-100' : 'opacity-0',
        'md:group-hover:opacity-100',
      ]"
    >
      <Icon v-if="isMuted" icon="tabler:volume-off" class="text-2xl" />
      <Icon v-else icon="tabler:volume" class="text-3xl" />
    </button>
  </div>
</template>

<style scoped>
/* На мобильных показываем кнопку всегда */
@media (max-width: 768px) {
  button {
    opacity: 1 !important;
  }
}
</style>
