// .vitepress/theme/utils/chatUtils.ts
import type { UIMessage } from "@ai-sdk/ui-utils"

/**
 * Регулярное выражение для поиска маркеров изображений
 * Экспортируем константу для повторного использования в других модулях
 */
export const IMAGE_MARKER_REGEX = /<!-- NEEDS_IMAGE:([^>]+) -->/g

/**
 * Функция для экранирования спецсимволов в регулярных выражениях
 */
export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/**
 * Проверяет, содержит ли сообщение маркеры изображений
 */
export function hasImageMarkers(content: string): boolean {
  // Сбрасываем позицию поиска в регулярном выражении
  IMAGE_MARKER_REGEX.lastIndex = 0
  return IMAGE_MARKER_REGEX.test(content)
}
