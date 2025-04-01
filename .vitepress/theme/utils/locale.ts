// .vitepress/theme/utils/locale.ts
import { useData, useRouter } from "vitepress"
import type { Router } from "vitepress"

/**
 * Разрешает относительный путь относительно базового пути
 * @param relativePath Относительный путь (например, "../about" или "./services")
 * @param basePath Базовый путь (например, "/company/team")
 * @returns Абсолютный путь
 */
function resolveRelativePath(relativePath: string, basePath: string): string {
  // Если путь уже абсолютный, возвращаем его
  if (relativePath.startsWith("/")) return relativePath

  // Убираем имя файла из базового пути, если оно есть
  let baseDir = basePath
  if (!basePath.endsWith("/")) {
    baseDir = basePath.substring(0, basePath.lastIndexOf("/") + 1)
  }

  // Разбиваем пути на сегменты
  const segments = baseDir.split("/").filter((s) => s)
  const relativeParts = relativePath.split("/").filter((s) => s)

  // Обрабатываем "../" и "./" в относительном пути
  for (let i = 0; i < relativeParts.length; i++) {
    if (relativeParts[i] === "..") {
      // Поднимаемся на уровень выше
      segments.pop()
      // Удаляем "../" из пути
      relativeParts.splice(i, 1)
      i--
    } else if (relativeParts[i] === ".") {
      // Удаляем "./" из пути
      relativeParts.splice(i, 1)
      i--
    } else {
      // Это обычный сегмент пути, прерываем цикл
      break
    }
  }

  // Соединяем массивы и возвращаем результат
  return "/" + [...segments, ...relativeParts].join("/")
}

/**
 * Функция для преобразования пути с учетом локали
 * @param path Исходный путь
 * @param locale Текущая локаль
 * @param currentPath Текущий путь (необходим для разрешения относительных путей)
 * @returns Локализованный путь
 */
export function createLocalizedPath(path: string, locale: string, currentPath: string = "/"): string {
  // Если это внешняя ссылка или якорь, возвращаем как есть
  if (path.startsWith("http") || path.startsWith("#")) {
    return path
  }

  const currentLang = locale.slice(0, 2)

  // Сначала разрешаем относительный путь, если нужно
  let resolvedPath = path
  if (!path.startsWith("/")) {
    resolvedPath = resolveRelativePath(path, currentPath)
  }

  // Для английского (базовый) возвращаем путь как есть
  if (currentLang === "en") {
    return resolvedPath
  }

  // Если путь уже содержит локаль, возвращаем его как есть
  if (resolvedPath.startsWith(`/${currentLang}/`)) {
    return resolvedPath
  }

  // Добавляем локаль к абсолютному пути
  return `/${currentLang}${resolvedPath}`
}

/**
 * Хук для работы с локализованными путями
 */
export function useLocalizedPath() {
  const { lang, page } = useData()
  const router = useRouter()

  /**
   * Создает локализованный путь
   * @param path Исходный путь (без учета локали)
   * @returns Локализованный путь
   */
  const getLocalizedPath = (path: string): string => {
    // Используем текущий путь страницы для разрешения относительных ссылок
    return createLocalizedPath(path, lang.value, "/" + page.value.relativePath)
  }

  /**
   * Выполняет переход по локализованному пути
   * @param path Исходный путь (без учета локали)
   */
  const navigateTo = (path: string): void => {
    const localizedPath = getLocalizedPath(path)
    router.go(localizedPath)
  }

  return {
    getLocalizedPath,
    navigateTo,
  }
}
