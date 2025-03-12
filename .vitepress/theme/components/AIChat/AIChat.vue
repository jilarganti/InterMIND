<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"
import MobileChatLayout from "./MobileChatLayout.vue"
import DesktopChatLayout from "./DesktopChatLayout.vue"
import { useChatsStore } from "@theme/stores/chatsStore"

// Определение типа устройства
const isDesktop = ref(false)

// Инициализируем хранилище чатов
const chatsStore = useChatsStore()

// Функция для определения типа устройства
const updateLayoutType = () => {
  isDesktop.value = window.innerWidth >= 768
}

// Инициализация при монтировании компонента
onMounted(() => {
  // Проверяем размер экрана
  updateLayoutType()

  // Добавляем слушатель изменения размера окна
  window.addEventListener("resize", updateLayoutType)

  // Инициализируем хранилище чатов
  chatsStore.ensureChat()

  // Создаем новый чат, если список пуст
  if (chatsStore.chatIds.length === 0) {
    chatsStore.createNewChat()
  }
})

// Очистка при размонтировании компонента
onUnmounted(() => {
  window.removeEventListener("resize", updateLayoutType)
})
</script>

<template>
  <div class="ai-chat-container">
    <!-- Отображаем соответствующий макет в зависимости от типа устройства -->
    <DesktopChatLayout v-if="isDesktop" />
    <MobileChatLayout v-else />
  </div>
</template>

<style>
/* Глобальные стили для чат-интерфейса */
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

/* Скрываем элементы VitePress, которые могут мешать чату */
.VPNavBarTitle a,
.VPNavBar .VPNavBarTitle,
.vp-doc a[href="#top"],
a[href="#top"],
.VPBackToTop,
.VPDocFooter .prev-next {
  display: none !important;
}
</style>
