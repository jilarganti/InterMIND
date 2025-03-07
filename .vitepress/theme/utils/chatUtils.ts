// .vitepress/theme/utils/chatUtils.ts
import { nextTick } from "vue"
import type { Ref } from "vue"
import MarkdownIt from "markdown-it"

/**
 * Утилита для скролла к концу контейнера сообщений
 */
export function useScrollToBottom(messagesContainerRef: Ref<HTMLDivElement | null>) {
    const scrollToBottom = async (): Promise<void> => {
        await nextTick()
        if (messagesContainerRef.value) {
            const container = messagesContainerRef.value
            container.scrollTop = container.scrollHeight
        }
    }

    return {
        scrollToBottom,
    }
}

/**
 * Утилита для обработки textarea
 */
export function useTextarea(textareaRef: Ref<HTMLTextAreaElement | null>, input: Ref<string>) {
    // Регулировка высоты textarea
    const adjustHeight = (target: HTMLTextAreaElement): void => {
        target.style.height = "auto"
        target.style.height = `${target.scrollHeight}px`
    }

    // Обработчик ввода для регулировки высоты
    const handleInput = (event: Event): void => {
        const textarea = event.target as HTMLTextAreaElement
        adjustHeight(textarea)
    }

    // Сброс высоты textarea
    const resetHeight = (): void => {
        if (textareaRef.value) {
            textareaRef.value.style.height = "auto"
        }
    }

    // Вставка текста в позицию курсора
    const insertText = (text: string): void => {
        if (textareaRef.value) {
            const textarea = textareaRef.value
            const start = textarea.selectionStart
            const end = textarea.selectionEnd
            const textBefore = input.value.substring(0, start)
            const textAfter = input.value.substring(end)

            input.value = textBefore + text + textAfter

            // Set cursor position after inserted text
            nextTick(() => {
                textarea.focus()
                const newPosition = start + text.length
                textarea.selectionStart = newPosition
                textarea.selectionEnd = newPosition
                adjustHeight(textarea)
            })
        }
    }

    // Обработчик нажатия клавиш
    const handleKeyDown = (event: KeyboardEvent, submitFn: (event: Event) => void): void => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault()
            if (input.value.trim()) {
                submitFn(event)
            }
        }
    }

    return {
        adjustHeight,
        handleInput,
        resetHeight,
        insertText,
        handleKeyDown
    }
}

/**
 * Утилита для обработки событий клика по изображениям
 */
export function useImageClick(
    messagesContainerRef: Ref<HTMLDivElement | null>,
    submitText: (text: string) => void
) {
    // Обработчик клика по изображению
    function handleImageClick(event: MouseEvent) {
        const target = event.target as HTMLElement

        // Проверяем, что кликнули по интерактивному изображению
        if (target && target.classList.contains('chat-interactive-image')) {
            // Получаем оригинальный поисковый запрос из атрибутов
            const query = target.getAttribute('data-query')
            if (query) {
                console.log(`🟢 CLIENT: Клик по изображению с запросом "${query}"`)

                // Создаем фидбек пользователю, что запрос отправляется
                const pulseAnimation = 'pulse 1s 2'
                const originalTransition = target.style.transition

                // Применяем эффект пульсации
                target.style.transition = 'all 0.3s'
                target.style.animation = pulseAnimation
                target.style.boxShadow = '0 0 0 2px var(--vp-c-brand)'

                setTimeout(() => {
                    // Отправляем запрос в чат
                    submitText(query)

                    // Восстанавливаем стили
                    setTimeout(() => {
                        target.style.animation = ''
                        target.style.boxShadow = ''
                        target.style.transition = originalTransition
                    }, 1000)
                }, 300)
            }
        }
    }

    return {
        handleImageClick
    }
}

/**
 * Утилита для рендеринга Markdown
 */
export function useMarkdownRenderer() {
    const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        breaks: false
    })

    // Настройка открытия ссылок в новой вкладке
    const defaultRender = md.renderer.rules.link_open ||
        ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        tokens[idx].attrSet("target", "_blank")
        tokens[idx].attrSet("rel", "noopener")
        return defaultRender(tokens, idx, options, env, self)
    }

    const renderMarkdown = (content: string): string => {
        return md.render(content)
    }

    return {
        renderMarkdown
    }
}