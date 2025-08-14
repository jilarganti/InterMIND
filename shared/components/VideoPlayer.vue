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
  <div class="video-container" @mouseenter="showButton = true" @mouseleave="showButton = false">
    <video ref="videoRef" :autoplay="autoplay" :loop="loop" :muted="muted" playsinline class="video-element" @loadeddata="startVideo">
      <source :src="src" type="video/mp4" />
    </video>

    <button @click="toggleMute" class="mute-button" :class="{ 'show': showButton }" :title="isMuted ? 'Включить звук' : 'Выключить звук'">
      <Icon v-if="isMuted" icon="solar:volume-cross-bold" />
      <Icon v-else icon="solar:volume-loud-bold" />
    </button>
  </div>
</template>

<style scoped>
/* На мобильных кнопка более видна */
@media (max-width: 768px) {
  .group button {
    opacity: 0.8;
  }
}
</style>
