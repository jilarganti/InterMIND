import type { UIMessage } from "@ai-sdk/ui-utils"

export function useImageProcessing() {
    // Функция для экранирования спецсимволов в регулярных выражениях
    function escapeRegExp(string: string): string {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }

    // Функция для обработки маркеров изображений в тексте
    async function processImagesInMessage(message: UIMessage): Promise<UIMessage> {
        if (!message || message.role !== "assistant") return message

        console.log("🟢 CLIENT: Проверяем наличие маркеров изображений в сообщении...")

        // Проверяем, есть ли маркеры изображений в тексте
        const imageRegex = /\[NEEDS_IMAGE:([^\]]+)\]/g
        if (!imageRegex.test(message.content)) {
            console.log("🟢 CLIENT: Маркеры изображений не найдены")
            return message
        }

        console.log("🟢 CLIENT: Найдены маркеры изображений, начинаем обработку")

        // Сбрасываем regex для повторного поиска
        imageRegex.lastIndex = 0

        let match
        let processedContent = message.content
        let matchPromises = []

        // Находим все маркеры и обрабатываем их
        while ((match = imageRegex.exec(message.content)) !== null) {
            const fullMatch = match[0]
            const query = match[1]

            console.log(`🟢 CLIENT: Обрабатываем маркер для запроса "${query}"`)

            // Создаем промис для каждого маркера
            const searchPromise = fetch(`/api/search-images?q=${encodeURIComponent(query)}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(`🟢 CLIENT: Получены результаты поиска для "${query}":`, data)

                    if (data.images && data.images.length > 0) {
                        const imageUrl = data.images[0].url
                        console.log(`🟢 CLIENT: Найдено изображение: ${imageUrl.substring(0, 50)}...`)

                        const imageMarkdown = `![${query}](${imageUrl})`
                        processedContent = processedContent.replace(new RegExp(escapeRegExp(fullMatch), "g"), imageMarkdown)
                    } else {
                        console.log(`🟢 CLIENT: Изображения для "${query}" не найдены`)
                        processedContent = processedContent.replace(new RegExp(escapeRegExp(fullMatch), "g"), `[Изображение для "${query}" не найдено]`)
                    }
                })
                .catch((err) => {
                    console.error(`🔴 CLIENT: Ошибка при поиске изображения для "${query}":`, err)
                    processedContent = processedContent.replace(new RegExp(escapeRegExp(fullMatch), "g"), `[Ошибка поиска изображения для "${query}"]`)
                })

            matchPromises.push(searchPromise)
        }

        // Ждем завершения всех запросов
        if (matchPromises.length > 0) {
            console.log(`🟢 CLIENT: Ожидаем завершения ${matchPromises.length} запросов изображений...`)
            await Promise.all(matchPromises)
            console.log("🟢 CLIENT: Все запросы изображений завершены")

            // Создаем новое сообщение с обработанным контентом
            return {
                ...message,
                content: processedContent,
            }
        }

        return message
    }

    return {
        processImagesInMessage
    }
}
