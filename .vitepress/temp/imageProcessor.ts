// utils/imageProcessor.js

export async function processImagesInText(text: string): Promise<string> {
  // Регулярное выражение для поиска маркеров [NEEDS_IMAGE:запрос]
  const imageRegex = /\[NEEDS_IMAGE:([^\]]+)\]/g
  let match
  let processedText = text
  let promises = []

  // Ищем все маркеры изображений в тексте
  while ((match = imageRegex.exec(text)) !== null) {
    const fullMatch = match[0]
    const query = match[1]

    // Создаем промис для каждого маркера
    const promise = fetch(`/api/search-images?q=${encodeURIComponent(query)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.images && data.images.length > 0) {
          const imageUrl = data.images[0].url
          const imageMarkdown = `![${query}](${imageUrl})`
          // Заменяем маркер на markdown-изображение
          processedText = processedText.replace(new RegExp(fullMatch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), imageMarkdown)
        } else {
          // Если изображения не найдены, просто удаляем маркер
          processedText = processedText.replace(new RegExp(fullMatch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "")
        }
      })
      .catch((error) => {
        console.error("Error processing image:", error)
        // В случае ошибки удаляем маркер
        processedText = processedText.replace(new RegExp(fullMatch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "")
      })

    promises.push(promise)
  }

  // Ждем завершения всех запросов
  if (promises.length > 0) {
    await Promise.all(promises)
  }

  return processedText
}
