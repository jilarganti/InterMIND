// .vitepress/theme/composables/AIChat/useChatUi.ts
import { nextTick, ref } from "vue"
import type { Ref } from "vue"
import MarkdownIt from "markdown-it"
import footnote from "markdown-it-footnote" // Импортируем плагин для сносок

interface ImageClickHandlers {
  setupImageClicks: () => void
  cleanupImageClicks: () => void
}

/**
 * Composable для управления UI элементами чата
 * @param messagesContainerRef Ref на контейнер сообщений
 * @param textareaRef Ref на поле ввода (опциональный)
 * @param input Ref на значение поля ввода (опциональный)
 * @param setMode Функция для изменения режима чата (опциональный)
 */
export function useChatUi(
  messagesContainerRef: Ref<HTMLDivElement | null>,
  textareaRef?: Ref<HTMLTextAreaElement | null>,
  input?: Ref<string>,
  setMode?: (mode: string) => void,
) {
  // Проверка на мобильное устройство
  const isMobile = ref(false)

  // Устанавливаем флаг мобильного устройства при инициализации
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth < 768

    // Обновляем флаг при изменении размера окна
    window.addEventListener("resize", () => {
      isMobile.value = window.innerWidth < 768
    })
  }

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
   * Обработка кликов по интерактивным элементам (изображения, ссылки, blockquotes)
   */
  const setupImageClickHandler = (submitTextFn: (text: string, mode?: string) => void): ImageClickHandlers => {
    // Обработчик клика по интерактивным элементам
    const handleElementClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      // Обработка клика по сноскам
      if (target?.classList.contains("footnote-ref") || target?.closest(".footnote-ref")) {
        event.preventDefault()

        const link = target.tagName === "A" ? target : target.closest("a")

        if (link) {
          const href = link.getAttribute("href")
          if (href && href.startsWith("#")) {
            const id = href.substring(1)
            const footnote = messagesContainerRef.value?.querySelector(`#${id}`)

            if (footnote) {
              // Прокручиваем к сноске (с учетом контейнера сообщений)
              const containerTop = messagesContainerRef.value?.getBoundingClientRect().top || 0
              const footnoteTop = footnote.getBoundingClientRect().top
              const offset = footnoteTop - containerTop - 20 // 20px отступ

              if (messagesContainerRef.value) {
                messagesContainerRef.value.scrollTop += offset
              }

              // Визуально выделяем сноску на короткое время
              footnote.classList.add("footnote-highlight")
              setTimeout(() => {
                footnote.classList.remove("footnote-highlight")
              }, 2000)
            }
          }
        }

        return
      }

      // Обработка клика по обратной ссылке сноски
      if (target?.classList.contains("footnote-backref") || target?.closest(".footnote-backref")) {
        event.preventDefault()

        const link = target.tagName === "A" ? target : target.closest("a")

        if (link) {
          const href = link.getAttribute("href")
          if (href && href.startsWith("#")) {
            const id = href.substring(1)
            const refElement = messagesContainerRef.value?.querySelector(`#${id}`)

            if (refElement) {
              // Прокручиваем к ссылке на сноску
              const containerTop = messagesContainerRef.value?.getBoundingClientRect().top || 0
              const refTop = refElement.getBoundingClientRect().top
              const offset = refTop - containerTop - 100 // 100px отступ для лучшей видимости

              if (messagesContainerRef.value) {
                messagesContainerRef.value.scrollTop += offset
              }

              // Визуально выделяем ссылку на короткое время
              refElement.classList.add("footnote-highlight")
              setTimeout(() => {
                refElement.classList.remove("footnote-highlight")
              }, 2000)
            }
          }
        }

        return
      }

      // Обработка клика по изображению
      if (target?.classList.contains("chat-interactive-image")) {
        const query = target.getAttribute("data-query")
        if (query) {
          // Создаем визуальный фидбек
          const htmlTarget = target as HTMLElement
          htmlTarget.style.color = "var(--chat-bg-mute)"

          // Отправляем запрос после небольшой задержки
          setTimeout(() => {
            submitTextFn(query, "followup")
          }, 300)
        }
      }

      // Обработка клика по blockquote
      if (target?.classList.contains("interactive-blockquote-text") || target?.closest(".interactive-blockquote-text")) {
        const element = target.classList.contains("interactive-blockquote-text") ? target : target.closest(".interactive-blockquote-text")
        const query = element?.getAttribute("data-query")

        if (query && element) {
          // Создаем визуальный фидбек
          const htmlElement = element as HTMLElement
          htmlElement.style.color = "var(--chat-bg-mute)"

          // Отправляем запрос после небольшой задержки
          setTimeout(() => {
            submitTextFn(query, "followup")
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

  // Применяем плагин сносок (footnotes)
  md.use(footnote)

  // Настройка открытия ссылок в новой вкладке
  const defaultRender = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

  // Модификация для ссылок: добавляем атрибуты для безопасности только для внешних ссылок
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const href = tokens[idx].attrGet("href") || ""

    // Определяем, является ли ссылка внешней
    const isExternalLink = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")
    const isAnchorLink = href.startsWith("#")

    // Добавляем target="_blank" только для внешних ссылок
    // Внутренние относительные ссылки и якоря остаются в той же вкладке
    if (isExternalLink) {
      tokens[idx].attrSet("target", "_blank")
      tokens[idx].attrSet("rel", "noopener noreferrer")
    }

    return defaultRender(tokens, idx, options, env, self)
  }

  // Добавляем пост-процессинг для добавления интерактивных элементов
  const addInteractiveButtons = (html: string): string => {
    // Временный DOM для манипуляций с HTML
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = html

    // Обработка ссылок: оставляем как обычные markdown ссылки
    // (код удален - ссылки теперь работают как обычные markdown ссылки)

    // Обработка blockquote: делаем весь текст интерактивным
    const blockquotes = tempDiv.querySelectorAll("blockquote")
    blockquotes.forEach((blockquote) => {
      // Проверяем что в blockquote есть текст
      if (!blockquote.textContent || blockquote.textContent.trim().length < 5) return

      // Получаем текст и убираем эмодзи
      const text = blockquote.textContent.trim()
      const queryText = text.replace(/^[\p{Emoji}\s]+/u, "").trim()

      // Ищем первый параграф
      const firstParagraph = blockquote.querySelector("p:first-child")

      if (firstParagraph) {
        // Сохраняем оригинальное содержимое
        const originalContent = firstParagraph.innerHTML

        // Создаем интерактивный элемент с тем же содержимым
        firstParagraph.innerHTML = ""
        const interactiveText = document.createElement("span")
        interactiveText.className = "interactive-blockquote-text"
        interactiveText.setAttribute("data-query", queryText)
        interactiveText.innerHTML = originalContent
        // interactiveText.style.cursor = "pointer"
        // interactiveText.style.color = "var(--chat-brand-color)"
        // interactiveText.style.textDecoration = "underline"

        // Вставляем интерактивный элемент в параграф
        firstParagraph.appendChild(interactiveText)
      }
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

    // Изображения и интерактивные элементы
    setupImageClickHandler,

    // Markdown
    renderMarkdown,

    // Утилиты
    isMobile,
  }
}
