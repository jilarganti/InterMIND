// .vitepress/theme/composables/AIChat/useChatTitle.ts
import { ref, watch } from "vue"
import { useChatsStore } from "@theme/stores/chatsStore"
import type { Ref } from "vue"

export function useChatTitle(titleInputRef: Ref<HTMLInputElement | null> = ref(null)) {
  const chatsStore = useChatsStore()

  // Состояние и значение для редактирования заголовка чата
  const isEditingTitle = ref(false)
  const editableChatTitle = ref("")

  // Функция для начала редактирования заголовка
  const startEditingTitle = () => {
    if (!chatsStore.selectedChatId) return

    editableChatTitle.value = chatsStore.getChatTitle(chatsStore.selectedChatId) || ""
    isEditingTitle.value = true

    // Устанавливаем фокус на поле ввода после его появления
    setTimeout(() => {
      if (titleInputRef.value) {
        titleInputRef.value.focus()
      }
    }, 10)
  }

  // Функция для сохранения заголовка
  const saveTitle = () => {
    if (!chatsStore.selectedChatId) return

    chatsStore.setChatTitle(chatsStore.selectedChatId, editableChatTitle.value.trim())
    isEditingTitle.value = false
  }

  // Функция для отмены редактирования заголовка
  const cancelTitleEditing = () => {
    isEditingTitle.value = false
  }

  // Обновление заголовка при изменении выбранного чата
  watch(
    () => chatsStore.selectedChatId,
    (newChatId) => {
      if (newChatId) {
        // Сбрасываем режим редактирования при смене чата
        isEditingTitle.value = false
      }
    },
  )

  return {
    // Состояние
    isEditingTitle,
    editableChatTitle,

    // Методы
    startEditingTitle,
    saveTitle,
    cancelTitleEditing,
  }
}
