import { nextTick } from "vue"
import type { Ref } from "vue"

export function useTextareaHandler(textareaRef: Ref<HTMLTextAreaElement | null>, input: Ref<string>) {
    // Регулировка высоты textarea
    const adjustTextareaHeight = (target: HTMLTextAreaElement): void => {
        target.style.height = "auto"
        target.style.height = `${target.scrollHeight}px`
    }

    // Обработчик ввода для регулировки высоты
    const handleInput = (event: Event): void => {
        const textarea = event.target as HTMLTextAreaElement
        adjustTextareaHeight(textarea)
    }

    // Сброс высоты textarea
    const resetTextareaHeight = (): void => {
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
                adjustTextareaHeight(textarea)
            })
        }
    }

    return {
        adjustTextareaHeight,
        handleInput,
        resetTextareaHeight,
        insertText
    }
}