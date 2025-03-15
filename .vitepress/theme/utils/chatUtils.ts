import type { UIMessage } from "@ai-sdk/ui-utils"

/**
 * Функция для экранирования спецсимволов в регулярных выражениях
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/**
 * Типы ответов от API поиска изображений
 */
interface ImageSearchResult {
  url: string
  title: string
}

interface ImageSearchResponse {
  images: ImageSearchResult[]
}

/**
 * Функция для обработки маркеров изображений в тексте
 * с добавлением ссылок на источники
 */
export async function processImagesInMessage(message: UIMessage): Promise<UIMessage> {
  if (!message || message.role !== "assistant") return message

  // Проверяем, есть ли маркеры изображений в тексте
  const imageRegex = /\[NEEDS_IMAGE:([^\]]+)\]/g
  if (!imageRegex.test(message.content)) {
    return message
  }

  // Сбрасываем regex для повторного поиска
  imageRegex.lastIndex = 0

  let processedContent = message.content
  const matchPromises: Promise<void>[] = []

  // Находим все маркеры и обрабатываем их
  let match: RegExpExecArray | null
  while ((match = imageRegex.exec(message.content)) !== null) {
    const fullMatch = match[0]
    const query = match[1]

    // Создаем промис для каждого маркера
    const searchPromise = fetch(`/api/search-images?q=${encodeURIComponent(query)}`)
      .then((response) => response.json() as Promise<ImageSearchResponse>)
      .then((data) => {
        if (data.images && data.images.length > 0) {
          const image = data.images[0]
          const imageUrl = image.url
          const title = image.title || query

          const imageHtml = `<figure class="image-container">
            <img class="chat-interactive-image" src="${imageUrl}" data-query="${query}" data-title="${title}" style="max-width:100%">
            <figcaption style="font-size:0.8em;color:#666;margin-top:4px"><a href="${imageUrl}" target="_blank">${title}</a></figcaption>
          </figure>`

          processedContent = processedContent.replace(new RegExp(escapeRegExp(fullMatch), "g"), imageHtml)
        } else {
          processedContent = processedContent.replace(new RegExp(escapeRegExp(fullMatch), "g"), `[Изображение для "${query}" не найдено]`)
        }
      })
      .catch((err) => {
        console.error(`Ошибка при поиске изображения для "${query}":`, err)
        processedContent = processedContent.replace(new RegExp(escapeRegExp(fullMatch), "g"), `[Ошибка поиска изображения для "${query}"]`)
      })

    matchPromises.push(searchPromise)
  }

  // Ждем завершения всех запросов
  if (matchPromises.length > 0) {
    await Promise.all(matchPromises)

    // Создаем новое сообщение с обработанным контентом
    return {
      ...message,
      content: processedContent,
    }
  }

  return message
}
