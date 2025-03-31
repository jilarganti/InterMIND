// .vitepress/theme/utils/markdown.ts

import MarkdownIt from "markdown-it"

// Создаем экземпляр markdown-it с нужными опциями
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

/**
 * Рендерит маркдаун в HTML
 */
export function renderMarkdown(text: string): string {
  return md.render(text)
}
