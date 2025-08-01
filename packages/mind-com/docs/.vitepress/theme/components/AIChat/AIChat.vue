// shared/components/AIChat/AIChat.vue
<script setup lang="ts">
import { onMounted, provide, ref } from "vue"
import MobileChatLayout from "./MobileChatLayout.vue"
import DesktopChatLayout from "./DesktopChatLayout.vue"
import { useChatLayout } from "../../composables/AIChat/useChatLayout"
import { useChatsStore } from "../../stores/chatsStore"
import type { QuickPrompt } from "../../composables/AIChat/useQuickPrompts"

// Определяем пропсы для компонента
interface Props {
  /**
   * Массив быстрых подсказок для чата
   */
  prompts?: QuickPrompt[]
}

// Используем defineProps с типом Props
const props = withDefaults(defineProps<Props>(), {
  prompts: () => [], // По умолчанию пустой массив
})

// Используем composable для определения типа устройства
const { isDesktop } = useChatLayout()

// Инициализируем хранилище чатов
const chatsStore = useChatsStore()

// Создаем реактивную ссылку для начального сообщения
const initialMessage = ref<string | null>(null)

// Предоставляем начальное сообщение дочерним компонентам
provide("initialMessage", initialMessage)

// Инициализация при монтировании компонента
onMounted(() => {
  // Используем готовый метод из хранилища для инициализации чата
  chatsStore.ensureChat()

  // Проверяем наличие query параметра
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search)
    const query = urlParams.get("q")

    if (query) {
      initialMessage.value = query
    }
  }
})
</script>

<template>
  <div class="ai-chat-container">
    <!-- Отображаем соответствующий макет в зависимости от типа устройства и передаем prompts -->
    <DesktopChatLayout v-if="isDesktop" :prompts="prompts" />
    <MobileChatLayout v-else :prompts="prompts" />
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
