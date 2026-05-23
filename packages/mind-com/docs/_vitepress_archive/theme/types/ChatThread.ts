// .vitepress/theme/types/ChatThread.ts
export interface ChatThreadMethods {
  /**
   * Вставляет текст в поле ввода на позицию курсора
   */
  insertText: (text: string) => void

  /**
   * Напрямую отправляет текст как сообщение с опциональным режимом
   */
  submitTextDirectly: (text: string, mode?: string) => void
}
