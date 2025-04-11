// .vitepress/theme/utils/imageLoader.ts
import type { UIMessage } from "@ai-sdk/ui-utils"
import { IMAGE_MARKER_REGEX, escapeRegExp } from "./chatUtils"

/**
 * Интерфейс для результата поиска изображений
 */
interface ImageSearchResult {
  url: string
  title: string
}

/**
 * Интерфейс для ответа API поиска изображений
 */
interface ImageSearchResponse {
  images: ImageSearchResult[]
}

/**
 * Менеджер для асинхронной загрузки изображений в чат
 */
export class ImageLoader {
  private imagePromises = new Map<string, Promise<string>>()
  private imagePlaceholders = new Map<string, string>()
  private messageUpdater: (index: number, oldStr: string, newStr: string) => void
  private pendingQueries = new Set<string>()

  // Кеш для хранения уже использованных URL изображений
  private usedImageUrls = new Set<string>()

  /**
   * @param messageUpdater Функция для обновления содержимого сообщения
   */
  constructor(messageUpdater: (index: number, oldStr: string, newStr: string) => void) {
    this.messageUpdater = messageUpdater
  }

  /**
   * Сбрасывает состояние загрузчика
   */
  reset() {
    this.imagePromises.clear()
    this.imagePlaceholders.clear()
    this.pendingQueries.clear()
    // Не сбрасываем usedImageUrls, чтобы сохранять историю использованных изображений в рамках сессии
  }

  /**
   * Нормализует URL изображения для сравнения
   * Убирает параметры запроса и фрагменты
   */
  private normalizeImageUrl(url: string): string {
    try {
      // Создаем URL объект
      const urlObj = new URL(url)
      // Возвращаем URL без параметров запроса и фрагмента
      return `${urlObj.protocol}//${urlObj.hostname}${urlObj.pathname}`
    } catch (e) {
      // Если не удалось разобрать URL, возвращаем оригинальный
      return url
    }
  }

  /**
   * Обрабатывает маркеры изображений в содержимом сообщения
   * @param content Содержимое сообщения
   * @param messageIndex Индекс сообщения в массиве
   * @param isComplete Флаг завершения ответа
   * @returns Обновленное содержимое сообщения
   */
  processImageMarkers(content: string, messageIndex: number, isComplete = false): string {
    let modifiedContent = content
    let match: RegExpExecArray | null

    // Сбрасываем регулярное выражение
    IMAGE_MARKER_REGEX.lastIndex = 0

    // Перебираем все маркеры в тексте
    while ((match = IMAGE_MARKER_REGEX.exec(content)) !== null) {
      const fullMatch = match[0]
      const query = match[1].trim()

      // Пропускаем, если запрос уже обрабатывается
      if (this.pendingQueries.has(query)) {
        continue
      }

      // Добавляем маркер для предотвращения повторной обработки
      this.pendingQueries.add(query)

      // Во время стриминга сохраняем оригинальный маркер
      const placeholder = fullMatch

      // Сохраняем плейсхолдер для данного запроса
      this.imagePlaceholders.set(query, placeholder)

      // Начинаем загрузку изображения, если его еще нет в кеше
      if (!this.imagePromises.has(query)) {
        this.loadImage(query, messageIndex)
      }
    }

    return modifiedContent
  }

  /**
   * Асинхронно загружает изображение и обновляет сообщение
   * @param query Поисковый запрос для изображения
   * @param messageIndex Индекс сообщения для обновления
   */
  private loadImage(query: string, messageIndex: number) {
    // Запрашиваем сразу 5 изображений
    const imagePromise = fetch(`/api/search-images?q=${encodeURIComponent(query)}&limit=5`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка поиска изображения: ${response.status} ${response.statusText}`)
        }
        return response.json() as Promise<ImageSearchResponse>
      })
      .then((data) => {
        if (data.images && data.images.length > 0) {
          // Выбираем первое изображение, которое еще не использовалось
          const unusedImage = data.images.find((image) => {
            const normalizedUrl = this.normalizeImageUrl(image.url)
            return !this.usedImageUrls.has(normalizedUrl)
          })

          // Если нашли неиспользованное изображение, используем его
          // Иначе используем первое в списке
          const image = unusedImage || data.images[0]
          const imageUrl = image.url
          const title = image.title || query

          // Добавляем нормализованный URL в список использованных
          const normalizedUrl = this.normalizeImageUrl(imageUrl)
          this.usedImageUrls.add(normalizedUrl)

          // Создаем HTML для изображения
          return `<figure class="image-container">
            <img class="chat-interactive-image" src="${imageUrl}" data-query="${query}" data-title="${title}" style="max-width:100%">
            <figcaption style="font-size:0.8em;color:#666;margin-top:4px"><a href="${imageUrl}" target="_blank">${title}</a></figcaption>
          </figure>`
        } else {
          return `<div class="image-error">[Изображение для "${query}" не найдено]</div>`
        }
      })
      .catch((error) => {
        console.error(`Ошибка загрузки изображения для "${query}":`, error)
        return `<div class="image-error">[Ошибка загрузки изображения: ${error.message}]</div>`
      })

    // Сохраняем промис
    this.imagePromises.set(query, imagePromise)
  }

  /**
   * Обновляет содержимое сообщения после загрузки всех изображений
   * @param message Сообщение для обновления
   * @param messageIndex Индекс сообщения
   * @returns Промис с обновленным сообщением
   */
  async finalizeMessage(message: UIMessage, messageIndex: number): Promise<UIMessage> {
    if (message.role !== "assistant") return message

    // Дожидаемся загрузки всех изображений
    const pendingImages = Array.from(this.pendingQueries).map((query) => this.imagePromises.get(query) || Promise.resolve(""))

    await Promise.all(pendingImages)

    // Получаем финальное содержимое
    let finalContent = message.content

    // Заменяем все маркеры на загруженные изображения только после завершения ответа
    for (const [query, imagePromise] of this.imagePromises.entries()) {
      const placeholder = this.imagePlaceholders.get(query)
      const imageHtml = await imagePromise

      if (placeholder && imageHtml) {
        finalContent = finalContent.replace(new RegExp(escapeRegExp(placeholder), "g"), imageHtml)
      }
    }

    // Возвращаем обновленное сообщение
    return {
      ...message,
      content: finalContent,
    }
  }
}
