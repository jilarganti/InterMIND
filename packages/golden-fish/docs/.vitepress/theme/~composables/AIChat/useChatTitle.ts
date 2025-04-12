// .vitepress/theme/composables/AIChat/useChatTitle.ts
import { ref } from "vue"
import { useChatsStore } from "@theme/~stores/chatsStore"

export function useChatTitle() {
  const chatsStore = useChatsStore()

  // Состояние и значение для редактирования заголовка чата
  const isEditingTitle = ref(false)
  const editableChatTitle = ref("")

  // Функция для начала редактирования заголовка
  const startEditingTitle = () => {
    if (!chatsStore.selectedChatId) return

    editableChatTitle.value = chatsStore.getChatTitle(chatsStore.selectedChatId) || ""
    isEditingTitle.value = true
  }

  // Функция для сохранения заголовка
  const saveTitle = () => {
    if (!chatsStore.selectedChatId) return

    // Сохраняем только если заголовок не пустой
    if (editableChatTitle.value.trim()) {
      chatsStore.setChatTitle(chatsStore.selectedChatId, editableChatTitle.value.trim())
    } else {
      // Если поле пустое, восстанавливаем текущий заголовок в поле редактирования
      const currentTitle = chatsStore.getChatTitle(chatsStore.selectedChatId) || ""
      editableChatTitle.value = currentTitle
    }

    isEditingTitle.value = false
  }

  // Функция для отмены редактирования заголовка
  const cancelTitleEditing = () => {
    isEditingTitle.value = false
  }

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
