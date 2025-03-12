// .vitepress/theme/composables/AIChat/useQuickPrompts.ts
import { ref } from "vue"
import type { Ref } from "vue"

export interface QuickPrompt {
  id: string
  text: string
  category?: string
}

interface UseQuickPromptsOptions {
  /**
   * Специальная обработка для мобильного режима
   * Например, в мобильном режиме может потребоваться добавить текст в поле ввода вместо прямой отправки
   */
  isMobileMode?: boolean
}

export function useQuickPrompts(
  chatInputRef: Ref<{ insertText: (text: string) => void; submitTextDirectly: (text: string) => void } | null>,
  mainInputRef?: Ref<string>,
  options: UseQuickPromptsOptions = {},
) {
  // Список быстрых поисковых запросов - можно расширить категориями
  const quickPrompts = ref<QuickPrompt[]>([
    { id: "1", text: "Expo City Dubai", category: "attractions" },
    { id: "2", text: "Dubai Frame tickets", category: "attractions" },
    { id: "3", text: "Burj Khalifa tickets", category: "attractions" },
    { id: "4", text: "Dubai Mall restaurants", category: "food" },
    { id: "5", text: "Palm Jumeirah rental", category: "housing" },
  ])

  // Функция для использования быстрой подсказки в десктопном режиме
  const insertQuickPrompt = (text: string) => {
    if (chatInputRef.value) {
      chatInputRef.value.insertText(text)
    }
  }

  // Функция для использования быстрой подсказки в мобильном режиме
  const addTagToMainInput = (text: string) => {
    if (!mainInputRef) return

    // Проверяем, нужно ли добавлять пробел перед тегом
    const needsSpace = mainInputRef.value && !mainInputRef.value.endsWith(" ")

    // Добавляем тег в поле ввода с пробелом в конце
    mainInputRef.value += (needsSpace ? " " : "") + text + " "
  }

  // Функция для отправки быстрой подсказки напрямую
  const submitQuickPrompt = (text: string) => {
    if (chatInputRef.value) {
      chatInputRef.value.submitTextDirectly(text)
    }
  }

  // Универсальная функция обработки клика по быстрой подсказке
  const handleQuickPrompt = (text: string) => {
    if (options.isMobileMode && mainInputRef) {
      // В мобильном режиме добавляем текст в основное поле ввода
      addTagToMainInput(text)
    } else {
      // В десктопном режиме вставляем в поле ввода чата
      insertQuickPrompt(text)
    }
  }

  return {
    quickPrompts,
    insertQuickPrompt,
    addTagToMainInput,
    submitQuickPrompt,
    handleQuickPrompt,
  }
}
