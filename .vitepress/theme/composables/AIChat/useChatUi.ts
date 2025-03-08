// .vitepress/theme/composables/useChatUi.ts
import { nextTick } from "vue"
import type { Ref } from "vue"
import MarkdownIt from "markdown-it"

interface ImageClickHandlers {
  setupImageClicks: () => void
  cleanupImageClicks: () => void
}

/**
 * Универсальный composable для работы с UI элементами чата
 */
export function useChatUi(messagesContainerRef: Ref<HTMLDivElement | null>, textareaRef?: Ref<HTMLTextAreaElement | null>, input?: Ref<string>) {
  /**
   * Скролл к концу контейнера сообщений
   */
  const scrollToBottom = async (): Promise<void> => {
    await nextTick()
    if (messagesContainerRef.value) {
      const container = messagesContainerRef.value
      container.scrollTop = container.scrollHeight
    }
  }

  /**
   * Функции для работы с textarea
   */
  // Регулировка высоты textarea
  const adjustHeight = (target: HTMLTextAreaElement): void => {
    target.style.height = "auto"
    target.style.height = `${target.scrollHeight}px`
  }

  // Обработчик ввода
  const handleInput = (event: Event): void => {
    if (textareaRef?.value) {
      const textarea = event.target as HTMLTextAreaElement
      adjustHeight(textarea)
    }
  }

  // Сброс высоты textarea
  const resetHeight = (): void => {
    if (textareaRef?.value) {
      textareaRef.value.style.height = "auto"
    }
  }

  // Вставка текста в позицию курсора
  const insertText = (text: string): void => {
    if (textareaRef?.value && input) {
      const textarea = textareaRef.value
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const textBefore = input.value.substring(0, start)
      const textAfter = input.value.substring(end)

      input.value = textBefore + text + textAfter

      // Устанавливаем позицию курсора после вставленного текста
      nextTick(() => {
        textarea.focus()
        const newPosition = start + text.length
        textarea.selectionStart = newPosition
        textarea.selectionEnd = newPosition
        adjustHeight(textarea)
      })
    }
  }

  // Обработчик нажатий клавиш
  const handleKeyDown = (event: KeyboardEvent, submitFn: (event: Event) => void): void => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      if (input?.value.trim()) {
        submitFn(event)
      }
    }
  }

  /**
   * Обработка кликов по изображениям
   */
  const setupImageClickHandler = (submitTextFn: (text: string) => void): ImageClickHandlers => {
    // Обработчик клика по изображению
    const handleImageClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      // Проверяем, что кликнули по интерактивному изображению
      if (target?.classList.contains("chat-interactive-image")) {
        const query = target.getAttribute("data-query")
        if (query) {
          console.log(`🟢 CLIENT: Клик по изображению с запросом "${query}"`)

          // Создаем визуальный фидбек
          target.style.transition = "all 0.3s"
          target.style.animation = "pulse 1s 2"
          target.style.boxShadow = "0 0 0 2px var(--vp-c-brand)"

          // Отправляем запрос после небольшой задержки
          setTimeout(() => {
            submitTextFn(query)

            // Восстанавливаем стили
            setTimeout(() => {
              target.style.animation = ""
              target.style.boxShadow = ""
            }, 1000)
          }, 300)
        }
      }
    }

    // Добавление обработчика
    const setupImageClicks = () => {
      messagesContainerRef.value?.addEventListener("click", handleImageClick)
    }

    // Удаление обработчика
    const cleanupImageClicks = () => {
      messagesContainerRef.value?.removeEventListener("click", handleImageClick)
    }

    return { setupImageClicks, cleanupImageClicks }
  }

  /**
   * Рендеринг Markdown
   */
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: false,
  })

  // Настройка открытия ссылок в новой вкладке
  const defaultRender = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrSet("target", "_blank")
    tokens[idx].attrSet("rel", "noopener")
    return defaultRender(tokens, idx, options, env, self)
  }

  const renderMarkdown = (content: string): string => {
    return md.render(content)
  }

  return {
    // Скролл
    scrollToBottom,

    // Работа с текстовым полем
    handleInput,
    resetHeight,
    insertText,
    handleKeyDown,

    // Изображения
    setupImageClickHandler,

    // Markdown
    renderMarkdown,
  }
}
