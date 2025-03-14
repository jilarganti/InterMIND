// .vitepress/theme/composables/AIChat/useChatUi.ts
import { nextTick, ref } from "vue"
import type { Ref } from "vue"
import MarkdownIt from "markdown-it"

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

      // Обработка клика по изображению
      if (target?.classList.contains("chat-interactive-image")) {
        const query = target.getAttribute("data-query")
        if (query) {
          // Создаем визуальный фидбек
          const htmlTarget = target as HTMLElement
          htmlTarget.style.transition = "all 0.3s"
          htmlTarget.style.animation = "pulse 1s 2"
          htmlTarget.style.boxShadow = "0 0 0 2px var(--vp-c-brand)"

          // Отправляем запрос после небольшой задержки
          setTimeout(() => {
            // Устанавливаем режим followup
            if (setMode) {
              setMode("followup")
            }
            submitTextFn(query, "followup")

            // Восстанавливаем стили
            setTimeout(() => {
              htmlTarget.style.animation = ""
              htmlTarget.style.boxShadow = ""
            }, 1000)
          }, 300)
        }
      }

      // Обработка клика по кнопке у ссылки или blockquote
      if (target?.classList.contains("interactive-element-button") || target?.closest(".interactive-element-button")) {
        const buttonEl = target.classList.contains("interactive-element-button") ? target : target.closest(".interactive-element-button")
        const query = buttonEl?.getAttribute("data-query")

        if (query && buttonEl) {
          // Создаем визуальный фидбек
          const htmlButton = buttonEl as HTMLElement
          htmlButton.style.transition = "all 0.3s"
          htmlButton.style.animation = "pulse 1s 1"

          // Отправляем запрос после небольшой задержки
          setTimeout(() => {
            // Устанавливаем режим followup
            if (setMode) {
              setMode("followup")
            }
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

  // Настройка открытия ссылок в новой вкладке
  const defaultRender = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

  // Модификация для ссылок: добавляем атрибуты для безопасности
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrSet("target", "_blank")
    tokens[idx].attrSet("rel", "noopener")
    return defaultRender(tokens, idx, options, env, self)
  }

  // Добавляем пост-процессинг для добавления интерактивных кнопок
  const addInteractiveButtons = (html: string): string => {
    // Временный DOM для манипуляций с HTML
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = html

    // Обработка ссылок: добавляем кнопку перед каждой ссылкой
    const links = tempDiv.querySelectorAll("a")
    links.forEach((link) => {
      // Не добавляем кнопку для простых ссылок без текста
      if (!link.textContent || link.textContent.trim().length < 5) return

      // Получаем текст ссылки и href
      const linkText = link.textContent.trim()
      const href = link.getAttribute("href") || ""

      // Определяем, что использовать в запросе - текст до скобок или полный текст
      const displayTextMatch = linkText.match(/(.*?)\s*\[.*?\]/)
      const queryText = displayTextMatch ? displayTextMatch[1].trim() : linkText

      // Создаем кнопку и устанавливаем ей нужные атрибуты
      const button = document.createElement("button")
      button.className = "interactive-element-button"
      button.setAttribute("data-query", queryText)
      button.setAttribute("title", queryText)
      button.innerHTML = '<span class="interactive-icon">ℹ️</span>'

      // Вставляем кнопку перед ссылкой
      link.parentNode?.insertBefore(button, link)
    })

    // Обработка blockquote: добавляем кнопку в начало
    const blockquotes = tempDiv.querySelectorAll("blockquote")
    blockquotes.forEach((blockquote) => {
      // Проверяем что в blockquote есть текст
      if (!blockquote.textContent || blockquote.textContent.trim().length < 5) return

      // Получаем текст и убираем эмодзи
      const text = blockquote.textContent.trim()
      const queryText = text.replace(/^[\p{Emoji}\s]+/u, "").trim()

      // Ищем первый параграф или первый текстовый узел
      const firstParagraph = blockquote.querySelector("p:first-child")

      if (firstParagraph) {
        // Создаем кнопку
        const button = document.createElement("button")
        button.className = "interactive-element-button"
        button.setAttribute("data-query", queryText)
        button.setAttribute("title", queryText)
        button.innerHTML = '<span class="interactive-icon">ℹ️</span>'

        // Вставляем кнопку в начало параграфа
        firstParagraph.insertBefore(button, firstParagraph.firstChild)
        firstParagraph.insertBefore(document.createTextNode(" "), firstParagraph.childNodes[1])
      } else {
        // Создаем кнопку и вставляем её в начало blockquote
        const button = document.createElement("button")
        button.className = "interactive-element-button"
        button.setAttribute("data-query", queryText)
        button.setAttribute("title", queryText)
        button.innerHTML = '<span class="interactive-icon">ℹ️</span>'

        blockquote.insertBefore(document.createTextNode(" "), blockquote.firstChild)
        blockquote.insertBefore(button, blockquote.firstChild)
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
