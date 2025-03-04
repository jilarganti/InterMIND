import MarkdownIt from "markdown-it"

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: false,
})

// Настройка открытия ссылок в новой вкладке
const defaultRender = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx]
  if (token.attrs) {
    token.attrSet("target", "_blank")
    token.attrSet("rel", "noopener")
  }
  return defaultRender(tokens, idx, options, env, self)
}

// Настройка для отображения изображений
const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp"]

// Безопасное получение атрибута из токена
const getTokenAttr = (token: any, attrName: string): string | null => {
  if (!token || !token.attrs) return null
  const attr = token.attrs.find((attr: [string, string]) => attr[0] === attrName)
  return attr ? attr[1] : null
}

// Функция для проверки URL на изображение
const isImageUrl = (url: string | null): boolean => {
  if (!url) return false

  const lowercaseUrl = url.toLowerCase()
  return (
    imageExtensions.some((ext) => lowercaseUrl.endsWith(ext)) ||
    lowercaseUrl.includes("/image/") ||
    lowercaseUrl.includes(".unsplash.com/") ||
    lowercaseUrl.includes(".imgur.com/")
  )
}

// Настраиваем автоматическое преобразование URL изображений в теги img
const originalLinkRender =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  // Безопасное получение атрибута href
  const token = tokens[idx]
  const href = getTokenAttr(token, "href")

  if (href && isImageUrl(href)) {
    // Найти следующий токен (обычно text)
    let textToken = null
    let j = idx + 1
    while (j < tokens.length && tokens[j].type !== "link_close") {
      if (tokens[j].type === "text") {
        textToken = tokens[j]
        break
      }
      j++
    }

    const altText = textToken ? textToken.content : ""

    // Заменяем открывающий тег ссылки на открывающий тег изображения
    token.type = "image"
    token.tag = "img"
    // Используем атрибуты с безопасной проверкой
    token.attrs = token.attrs || []
    token.attrs = [
      ["src", href],
      ["alt", altText],
      ["class", "message-image"],
    ]

    // Превращаем закрывающий тег ссылки в самозакрывающийся тег изображения
    if (j < tokens.length) {
      tokens[j].type = "text"
      tokens[j].content = ""
    }

    return self.renderToken(tokens, idx, options)
  }

  return originalLinkRender(tokens, idx, options, env, self)
}

// Обрабатываем стандартную разметку изображений в markdown (![alt](url))
md.renderer.rules.image = function (tokens, idx, options, env, self) {
  const token = tokens[idx]

  // Проверяем, что attrs существует
  if (!token.attrs) {
    return self.renderToken(tokens, idx, options)
  }

  const srcIndex = token.attrIndex("src")
  if (srcIndex < 0 || !token.attrs[srcIndex]) {
    return self.renderToken(tokens, idx, options)
  }

  const src = token.attrs[srcIndex][1]
  const alt = token.content || ""

  return `<img src="${src}" alt="${alt}" class="message-image" />`
}

// Настройка обработки переносов строк
md.set({ breaks: false })

const renderMarkdown = (content: string) => {
  return md.render(content)
}

export { md, renderMarkdown }
