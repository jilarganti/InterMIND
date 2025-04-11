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
          htmlTarget.style.color = "var(--chat-bg-mute)"

          // Отправляем запрос после небольшой задержки
          setTimeout(() => {
            // Устанавливаем режим followup
            if (setMode) {
              setMode("followup")
            }
            submitTextFn(query, "followup")

            // Восстанавливаем стили
            // setTimeout(() => {}, 1000)
          }, 300)
        }
      }

      // Обработка клика по интерактивному тексту ссылки
      if (target?.classList.contains("interactive-link-text")) {
        const query = target.getAttribute("data-query")

        if (query) {
          // Создаем визуальный фидбек
          const htmlTarget = target as HTMLElement
          htmlTarget.style.color = "var(--chat-bg-mute)"

          // Отправляем запрос после небольшой задержки
          setTimeout(() => {
            if (setMode) {
              setMode("followup")
            }
            submitTextFn(query, "followup")
          }, 300)

          // Предотвращаем всплытие события, чтобы не срабатывал клик по ссылке
          event.stopPropagation()
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

  // Добавляем пост-процессинг для добавления интерактивных элементов
  const addInteractiveButtons = (html: string): string => {
    // Временный DOM для манипуляций с HTML
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = html

    // Обработка ссылок: делаем текст перед ссылкой интерактивным
    const links = tempDiv.querySelectorAll("a")
    links.forEach((link) => {
      // Не обрабатываем пустые ссылки или ссылки с коротким текстом
      if (!link.textContent || link.textContent.trim().length < 5) return

      // Получаем текст ссылки и href
      const linkText = link.textContent.trim()
      const href = link.getAttribute("href") || ""

      // Определяем, что использовать в запросе - текст до скобок или полный текст
      const displayTextMatch = linkText.match(/(.*?)\s*\[.*?\]/)
      const queryText = displayTextMatch ? displayTextMatch[1].trim() : linkText

      // Создаем интерактивный элемент для текста перед ссылкой
      const interactiveText = document.createElement("span")
      interactiveText.className = "interactive-link-text"
      interactiveText.setAttribute("data-query", queryText)
      interactiveText.setAttribute("title", "Learn more: " + queryText)
      interactiveText.textContent = queryText + ":"
      // interactiveText.style.cursor = "pointer"
      // interactiveText.style.color = "var(--chat-brand-color)"
      // interactiveText.style.textDecoration = "underline"

      // Изменяем текст ссылки на URL без https:// и без параметров после ?, и ограничиваем длину до 30 символов
      let displayUrl = href.replace(/^https?:\/\//, "").replace(/\?.*$/, "")
      if (displayUrl.length > 30) {
        displayUrl = displayUrl.substring(0, 27) + "..."
      }
      link.textContent = displayUrl

      // Вставляем интерактивный текст перед ссылкой
      link.parentNode?.insertBefore(interactiveText, link)
    })

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
