// .vitepress/theme/composables/AIChat/useQuickPrompts.ts
import { ref } from "vue"
import type { Ref } from "vue"
import type { ChatThreadMethods } from "@theme/types/ChatThread"

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

/**
 * Управление быстрыми подсказками для чата
 * @param chatInputRef - Ref на компонент чата
 * @param prompts - Массив быстрых подсказок
 * @param mainInputRef - Ref на поле ввода в мобильном режиме
 * @param options - Дополнительные опции
 */
export function useQuickPrompts(
  chatInputRef: Ref<ChatThreadMethods | null>,
  prompts: Ref<QuickPrompt[]> | QuickPrompt[],
  mainInputRef?: Ref<string>,
  options: UseQuickPromptsOptions = {},
) {
  // Список быстрых поисковых запросов, получаемый из пропса
  const quickPrompts = ref<QuickPrompt[]>(Array.isArray(prompts) ? prompts : prompts.value)

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
