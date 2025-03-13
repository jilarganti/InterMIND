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

// Функция для безопасной инициализации чата
const initializeChat = () => {
  try {
    // Проверяем корректность данных в localStorage
    const storedIds = localStorage.getItem("chat_ids")
    const storedData = localStorage.getItem("chats_data")

    if (storedIds && storedData) {
      try {
        // Пробуем распарсить данные
        JSON.parse(storedIds)
        JSON.parse(storedData)
      } catch (error) {
        // Если данные повреждены, сбрасываем их
        console.warn("Обнаружены поврежденные данные в localStorage, выполняем сброс")
        localStorage.removeItem("chat_ids")
        localStorage.removeItem("chats_data")
        return
      }
    }

    // Инициализируем хранилище чатов
    if (chatsStore.chatIds.length > 0) {
      // Если есть сохраненные чаты, выбираем первый
      chatsStore.selectChat(chatsStore.chatIds[0])
    } else {
      // Если нет сохраненных чатов, создаем новый
      chatsStore.createNewChat()
    }
  } catch (error) {
    console.error("Ошибка при инициализации чата:", error)
  }
}

// Инициализация при монтировании компонента
onMounted(() => {
  // Проверяем размер экрана
  updateLayoutType()

  // Добавляем слушатель изменения размера окна
  window.addEventListener("resize", updateLayoutType)

  // Безопасная инициализация чата
  initializeChat()
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
/* Контейнер чата */
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
