import { h } from "vue"
import DefaultTheme from "vitepress/theme"
import type { Theme } from "vitepress"
import { useData, inBrowser, useRouter } from "vitepress"
import { watchEffect } from "vue"
import { createPinia } from "pinia"
import { initUtmTracking } from "./utm"

// Импортируем стили условно, внутри функции, чтобы не возникало конфликтов
// при использовании в проектах

// Список поддерживаемых языков для локализации
export const SUPPORTED_LANGUAGES = ["ar", "bn", "es", "fa", "fr", "hi", "id", "ja", "ko", "ml", "pt", "ru", "ta", "te", "tr", "uk", "ur", "vi", "zh"]

// Регулярное выражение для очистки путей
export const PATH_CLEANUP_REGEX = /^(?:en|ar|hi|ur|bn|ml|ta|te|fa|zh|fr|ru|uk|tr|ko|ja|id|vi|pt|es)\/|(\.[^/.]+)$/g

/**
 * Создает тему VitePress с общей функциональностью
 *
 * @param options Опции для настройки темы
 * @returns Тема VitePress
 */
export function createTheme(
  options: {
    // Указывает, нужно ли импортировать общие стили из shared
    withSharedStyles?: boolean
    // Функция рендеринга слотов макета
    renderSlots?: (h: typeof import("vue").h) => Record<string, () => any>
    // Дополнительные компоненты для регистрации
    components?: Record<string, any>
    // Дополнительная функция для enhanceApp
    enhanceAppHook?: (ctx: { app: any; router: any; siteData: any }) => void
  } = {},
): Theme {
  return {
    extends: DefaultTheme,
    Layout() {
      const { page, lang } = useData()
      const router = useRouter()

      // Редирект на локализованный путь
      watchEffect(() => {
        if (inBrowser) {
          // Не делаем редирект для ботов
          const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)
          if (isBot) return

          const browserLang = navigator.language.slice(0, 2)
          const currentLang = lang.value.slice(0, 2)

          // Проверяем поддерживается ли язык браузера
          const isSupported = SUPPORTED_LANGUAGES.includes(browserLang)

          // Получаем сохраненный язык из cookie
          const cookieLang = document.cookie.match(/nf_lang=([^;]+)/)?.[1]?.slice(0, 2)

          // Нужен ли редирект
          const needsRedirect = !cookieLang && isSupported && currentLang !== browserLang && browserLang !== "en"

          if (needsRedirect) {
            const path = page.value.relativePath.replace(PATH_CLEANUP_REGEX, "")
            document.cookie = `nf_lang=${browserLang}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
            router.go(`/${browserLang}/${path}`)
          }

          // Инициализация UTM отслеживания
          initUtmTracking()
        }
      })

      // Рендерим макет с опциональными слотами
      const slots = options.renderSlots ? options.renderSlots(h) : {}
      return h(DefaultTheme.Layout, null, slots)
    },

    enhanceApp({ app, router, siteData }) {
      // Инициализируем Pinia
      app.use(createPinia())

      // Регистрируем компоненты
      if (options.components) {
        Object.entries(options.components).forEach(([name, component]) => {
          app.component(name, component)
        })
      }

      // Настраиваем отслеживание UTM-параметров
      if (inBrowser) {
        // При запуске приложения
        setTimeout(initUtmTracking, 0)

        // При навигации
        window.addEventListener("popstate", initUtmTracking)

        // При смене страницы в VitePress
        router.onAfterRouteChange = initUtmTracking
      }

      // Вызываем дополнительный хук enhanceApp если он есть
      if (options.enhanceAppHook) {
        options.enhanceAppHook({ app, router, siteData })
      }
    },
  }
}
