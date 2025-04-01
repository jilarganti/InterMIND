// .vitepress/theme/utils/markdown.ts

import MarkdownIt from "markdown-it"
import { createLocalizedPath } from "./locale"
import { useData } from "vitepress"

// Создаем экземпляр markdown-it с нужными опциями
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

// Переопределяем обработчик ссылок для добавления локализации
const defaultRender = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  // Проверяем, что токены существуют
  if (!tokens || idx >= tokens.length) {
    return defaultRender(tokens, idx, options, env, self)
  }

  // Получаем атрибуты ссылки
  const aIndex = tokens[idx].attrIndex("href")

  if (aIndex >= 0 && tokens[idx].attrs) {
    const href = tokens[idx].attrs[aIndex][1]

    // Локализуем только внутренние ссылки
    if (href && !href.startsWith("http") && !href.startsWith("#") && !href.startsWith("mailto:")) {
      try {
        // Получаем текущую локаль и текущий путь из env (если переданы)
        const locale = env?.locale || "en"
        const currentPath = env?.currentPath || "/"

        // Локализуем ссылку
        const localizedHref = createLocalizedPath(href, locale, currentPath)
        tokens[idx].attrs[aIndex][1] = localizedHref
      } catch (e) {
        console.error("Ошибка локализации ссылки:", e)
      }
    }

    // Добавляем атрибуты безопасности для внешних ссылок
    if (href && href.startsWith("http")) {
      tokens[idx].attrSet("target", "_blank")
      tokens[idx].attrSet("rel", "noopener noreferrer")
    }
  }

  // Вызываем оригинальный рендер
  return defaultRender(tokens, idx, options, env, self)
}

/**
 * Рендерит маркдаун в HTML с локализацией ссылок
 * @param text Текст в формате маркдаун
 * @returns HTML
 */
export function renderMarkdown(text: string): string {
  // Попытка получить текущую локаль и путь
  let locale = "en"
  let currentPath = "/"

  try {
    // В VitePress окружении useData доступен
    if (typeof useData === "function") {
      const { lang, page } = useData()
      locale = lang.value
      currentPath = "/" + page.value.relativePath
    }
  } catch (e) {
    // Если не удалось получить данные через useData, используем значения по умолчанию
    console.warn("Не удалось получить локаль из VitePress context:", e)
  }

  // Передаем локаль и текущий путь в окружение маркдауна
  return md.render(text, { locale, currentPath })
}
