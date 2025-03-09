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
   * Обработка кликов по интерактивным элементам (изображения, ссылки, blockquotes)
   */
  const setupImageClickHandler = (submitTextFn: (text: string) => void): ImageClickHandlers => {
    // Обработчик клика по интерактивным элементам
    const handleElementClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      // Обработка клика по изображению (существующая функциональность)
      if (target?.classList.contains("chat-interactive-image")) {
        const query = target.getAttribute("data-query")
        if (query) {
          console.log(`🟢 CLIENT: Клик по изображению с запросом "${query}"`)

          // Создаем визуальный фидбек
          const htmlTarget = target as HTMLElement
          htmlTarget.style.transition = "all 0.3s"
          htmlTarget.style.animation = "pulse 1s 2"
          htmlTarget.style.boxShadow = "0 0 0 2px var(--vp-c-brand)"

          // Отправляем запрос после небольшой задержки
          setTimeout(() => {
            submitTextFn(query)

            // Восстанавливаем стили
            setTimeout(() => {
              htmlTarget.style.animation = ""
              htmlTarget.style.boxShadow = ""
            }, 1000)
          }, 300)
        }
      }

      // Обработка клика по кнопке у ссылки или blockquote (новая функциональность)
      if (target?.classList.contains("interactive-element-button") || target?.closest(".interactive-element-button")) {
        const buttonEl = target.classList.contains("interactive-element-button") ? target : target.closest(".interactive-element-button")
        const query = buttonEl?.getAttribute("data-query")

        if (query && buttonEl) {
          console.log(`🟢 CLIENT: Клик по кнопке с запросом "${query}"`)

          // Создаем визуальный фидбек
          const htmlButton = buttonEl as HTMLElement
          htmlButton.style.transition = "all 0.3s"
          htmlButton.style.animation = "pulse 1s 1"

          // Отправляем запрос после небольшой задержки
          setTimeout(() => {
            submitTextFn(query)
          }, 300)
        }
      }
    }

    // Добавление обработчика
    const setupImageClicks = () => {
      messagesContainerRef.value?.addEventListener("click", handleElementClick)
    }

    // Удаление обработчика
    const cleanupImageClicks = () => {
      messagesContainerRef.value?.removeEventListener("click", handleElementClick)
    }

    return { setupImageClicks, cleanupImageClicks }
  }

  /**
   * Рендеринг Markdown с добавлением интерактивных кнопок
   */
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: false,
  })

  // Настройка открытия ссылок в новой вкладке
  const defaultRender = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

  // Модификация для ссылок: добавляем интерактивную кнопку
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrSet("target", "_blank")
    tokens[idx].attrSet("rel", "noopener")
    return defaultRender(tokens, idx, options, env, self)
  }

  // Сохраняем оригинальный renderer для blockquote
  const defaultBlockquoteRender = md.renderer.rules.blockquote_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

  // Модифицируем renderer для blockquote
  md.renderer.rules.blockquote_open = (tokens, idx, options, env, self) => {
    return defaultBlockquoteRender(tokens, idx, options, env, self)
  }

  // Добавляем пост-процессинг для добавления интерактивных кнопок
  const addInteractiveButtons = (html: string): string => {
    // Временный DOM для манипуляций с HTML
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = html

    // Обработка ссылок: добавляем кнопку после каждой ссылки
    const links = tempDiv.querySelectorAll("a")
    links.forEach((link) => {
      // Не добавляем кнопку для простых ссылок без текста
      if (!link.textContent || link.textContent.trim().length < 5) return

      const linkText = link.textContent.trim()
      const container = document.createElement("span")
      container.className = "interactive-link-container"

      const button = document.createElement("button")
      button.className = "interactive-element-button"
      button.setAttribute("data-query", `Расскажи больше про ${linkText}`)
      button.setAttribute("title", `Спросить про "${linkText}"`)
      button.textContent = "⬆️"

      link.parentNode!.insertBefore(container, link.nextSibling)
      container.appendChild(button)
    })

    // Обработка blockquote: добавляем кнопку в конец каждого blockquote
    const blockquotes = tempDiv.querySelectorAll("blockquote")
    blockquotes.forEach((blockquote) => {
      const text = blockquote.textContent!.trim()
      // Удаляем эмодзи из начала текста для запроса
      const queryText = text.replace(/^[\p{Emoji}\s]+/u, "").trim()

      // Не добавляем кнопку для пустых blockquote
      if (!queryText || queryText.length < 5) return

      const button = document.createElement("button")
      button.className = "interactive-element-button blockquote-button"
      button.setAttribute("data-query", `Расскажи больше про ${queryText}`)
      button.setAttribute("title", `Узнать больше про "${queryText.substring(0, 30)}${queryText.length > 30 ? "..." : ""}"`)
      button.textContent = "⬆️"

      blockquote.appendChild(button)
    })

    return tempDiv.innerHTML
  }

  // Рендеринг Markdown с добавлением интерактивных элементов
  const renderMarkdown = (content: string): string => {
    const renderedHtml = md.render(content)
    return addInteractiveButtons(renderedHtml)
  }

  return {
    // Скролл
    scrollToBottom,

    // Работа с текстовым полем
    handleInput,
    resetHeight,
    insertText,
    handleKeyDown,

    // Изображения и интерактивные элементы
    setupImageClickHandler,

    // Markdown
    renderMarkdown,
  }
}
