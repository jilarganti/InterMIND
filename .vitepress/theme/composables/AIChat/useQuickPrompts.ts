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
 */
export function useQuickPrompts(chatInputRef: Ref<ChatThreadMethods | null>, mainInputRef?: Ref<string>, options: UseQuickPromptsOptions = {}) {
  // Список быстрых поисковых запросов по категориям
  const quickPrompts = ref<QuickPrompt[]>([
    // Attractions - достопримечательности
    { id: "1", text: "Expo City Dubai", category: "attractions" },
    { id: "2", text: "Dubai Frame tickets", category: "attractions" },
    { id: "3", text: "Burj Khalifa tickets", category: "attractions" },
    { id: "4", text: "Museum of the Future", category: "attractions" },
    { id: "5", text: "Abu Dhabi Louvre", category: "attractions" },
    { id: "6", text: "Ferrari World Abu Dhabi", category: "attractions" },

    // Food - рестораны и кафе
    { id: "7", text: "Dubai Mall restaurants", category: "food" },
    { id: "8", text: "Best Arabic food Dubai", category: "food" },
    { id: "9", text: "Dubai Michelin star restaurants", category: "food" },
    { id: "10", text: "Sharjah street food", category: "food" },

    // Housing - жильё
    { id: "11", text: "Palm Jumeirah rental", category: "housing" },
    { id: "12", text: "Dubai Marina apartments", category: "housing" },
    { id: "13", text: "Abu Dhabi affordable housing", category: "housing" },
    { id: "14", text: "UAE rental laws", category: "housing" },

    // Transportation - транспорт
    { id: "15", text: "Dubai Metro map", category: "transportation" },
    { id: "16", text: "Abu Dhabi taxi rates", category: "transportation" },
    { id: "17", text: "UAE driving license", category: "transportation" },
    { id: "18", text: "Dubai RTA services", category: "transportation" },

    // Shopping - покупки
    { id: "19", text: "Dubai Mall shopping", category: "shopping" },
    { id: "20", text: "Global Village Dubai", category: "shopping" },
    { id: "21", text: "Dubai Gold Souk", category: "shopping" },
    { id: "22", text: "Mall of Emirates offers", category: "shopping" },

    // Business - бизнес
    { id: "23", text: "UAE business setup", category: "business" },
    { id: "24", text: "Dubai free zones", category: "business" },
    { id: "25", text: "UAE company registration", category: "business" },
    { id: "26", text: "UAE freelance visa", category: "business" },

    // Travel & Visa - путешествия и визы
    { id: "27", text: "UAE visa requirements", category: "travel" },
    { id: "28", text: "Dubai tourist attractions", category: "travel" },
    { id: "29", text: "UAE visit visa application", category: "travel" },
    { id: "30", text: "Abu Dhabi tourist places", category: "travel" },
    { id: "31", text: "Desert safari Dubai", category: "travel" },

    // Jobs - работа
    { id: "32", text: "Dubai jobs for expatriates", category: "jobs" },
    { id: "33", text: "UAE work permit process", category: "jobs" },
    { id: "34", text: "Remote jobs in UAE", category: "jobs" },
    { id: "35", text: "UAE salary guide", category: "jobs" },

    // Weather & Events - погода и события
    { id: "36", text: "UAE weather forecast", category: "events" },
    { id: "37", text: "Dubai upcoming events", category: "events" },
    { id: "38", text: "UAE national day celebrations", category: "events" },
    { id: "39", text: "Dubai shopping festival", category: "events" },

    // Services - услуги
    { id: "40", text: "Emirates ID renewal", category: "services" },
    { id: "41", text: "UAE banking services", category: "services" },
    { id: "42", text: "DEWA bill payment", category: "services" },
    { id: "43", text: "Etisalat package upgrade", category: "services" },

    // Education - образование
    { id: "44", text: "Best schools in Dubai", category: "education" },
    { id: "45", text: "UAE university admission", category: "education" },
    { id: "46", text: "KHDA school ratings", category: "education" },

    // Healthcare - здравоохранение
    { id: "47", text: "UAE health insurance", category: "healthcare" },
    { id: "48", text: "Best hospitals in Dubai", category: "healthcare" },
    { id: "49", text: "Medical check-up UAE", category: "healthcare" },
    { id: "50", text: "DHA services", category: "healthcare" },
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
