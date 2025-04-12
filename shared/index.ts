import { h } from "vue"
import DefaultTheme from "vitepress/theme"
import type { Theme } from "vitepress"
import "./styles/AIChat.css"

import { useData, inBrowser, useRouter } from "vitepress"
import { watchEffect } from "vue"
import { createPinia } from "pinia"

import { components } from "./components"
import { initUtmTracking } from "./utils/utm"

const PATH_CLEANUP_REGEX = /^(?:en|ar|hi|ur|bn|ml|ta|te|fa|zh|fr|ru|uk|tr|ko|ja|id|vi|pt|es)\/|(\.[^/.]+)$/g

// Экспортируем компоненты напрямую
export { components }

// Создаем и экспортируем тему по умолчанию
export default {
  extends: DefaultTheme,
  Layout() {
    const { page, lang } = useData()
    const router = useRouter()

    watchEffect(() => {
      if (inBrowser) {
        // Не делаем редирект, если это бот
        const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)
        if (isBot) return

        const browserLang = navigator.language.slice(0, 2)
        const currentLang = lang.value.slice(0, 2)
        const supportedLanguages = ["ar", "bn", "es", "fa", "fr", "hi", "id", "ja", "ko", "ml", "pt", "ru", "ta", "te", "tr", "uk", "ur", "vi", "zh"]

        // Проверяем поддерживается ли язык браузера
        const isSupported = supportedLanguages.includes(browserLang)

        // Получаем сохраненный язык из cookie
        const cookieLang = document.cookie.match(/nf_lang=([^;]+)/)?.[1]?.slice(0, 2)

        // Определяем, нужен ли редирект
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

    return h(DefaultTheme.Layout)
  },

  enhanceApp({ app, router }) {
    app.use(createPinia())

    // Регистрируем свои компоненты
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })

    // Слушатель изменения роута для обновления UTM-параметров
    if (inBrowser) {
      // Инициализируем UTM при запуске приложения
      setTimeout(initUtmTracking, 0)

      // Добавляем слушатель изменений в URL
      window.addEventListener("popstate", initUtmTracking)

      // Метод вызывается при смене страницы
      router.onAfterRouteChange = initUtmTracking
    }
  },
} satisfies Theme
