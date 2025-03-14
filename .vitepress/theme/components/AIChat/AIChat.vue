<script setup lang="ts">
import { onMounted } from "vue"
import MobileChatLayout from "./MobileChatLayout.vue"
import DesktopChatLayout from "./DesktopChatLayout.vue"
import { useChatLayout } from "@theme/composables/AIChat/useChatLayout"
import { useChatsStore } from "@theme/stores/chatsStore"

// Используем composable для определения типа устройства
const { isDesktop } = useChatLayout()

// Инициализируем хранилище чатов
const chatsStore = useChatsStore()

// Инициализация при монтировании компонента
onMounted(() => {
  // Используем готовый метод из хранилища для инициализации чата
  chatsStore.ensureChat()
})
</script>

<template>
  <div class="ai-chat-container">
    <!-- Отображаем соответствующий макет в зависимости от типа устройства -->
    <DesktopChatLayout v-if="isDesktop" />
    <MobileChatLayout v-else />
  </div>
</template>

<style scoped>
.ai-chat-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
}
</style>
