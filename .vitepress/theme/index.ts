import { h } from "vue"
import DefaultTheme from "vitepress/theme"
import type { Theme } from "vitepress"
import "./styles/style.css"
import "./styles/AIChat.css"

import { useData, inBrowser, useRouter } from "vitepress"
import { watchEffect } from "vue"
import { createPinia } from "pinia"

import { components } from "./components"
import { initUtmTracking } from "./utils/utm"

const { AsideSponsors } = components

const PATH_CLEANUP_REGEX = /^(?:en|ar|hi|ur|bn|ml|ta|te|fa|zh|fr|ru|uk|tr|ko|ja|tl|id|vi|pt|es)\/|(\.[^/.]+)$/g

export default {
  extends: DefaultTheme,
  // Layout,
  Layout() {
    const { page, lang } = useData()
    const router = useRouter()
    /**
     * Redirect to the localized path for the first time
     */
    watchEffect(() => {
      if (inBrowser) {
        const browserLang = navigator.language.slice(0, 2)
        const currentLang = lang.value.slice(0, 2)
        const cookieLang = document.cookie.match(/nf_lang=([^;]+)/)?.[1]?.slice(0, 2)
        const path = page.value.relativePath.replace(PATH_CLEANUP_REGEX, "")

        if (!cookieLang) {
          document.cookie = `nf_lang=${browserLang}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
          if (currentLang !== browserLang) {
            router.go(browserLang === "en" ? `/${path}` : `/${browserLang}/${path}`)
          }
        }

        // Инициализация отслеживания UTM-параметров при загрузке страницы
        initUtmTracking()
      }
    })

    return h(DefaultTheme.Layout, null, {
      // "aside-ads-before": () => h(AsideSponsors),
      // "home-features-after": () => h(HomeSponsors),
      // "nav-bar-content-after": () => h(TypeForm, { typeformId: "01J8Q752166MZH0T93ZYYJ3ZMD" }),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(createPinia())
    // Регистрируем свои компоненты одним циклом
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })

    // Слушатель изменения роута для обновления UTM-параметров
    if (inBrowser) {
      // Инициализируем UTM при запуске приложения
      setTimeout(() => {
        initUtmTracking()
      }, 0)

      // Добавляем слушатель изменений в URL, так как VitePress не имеет полноценных событий роутера
      window.addEventListener("popstate", () => {
        initUtmTracking()
      })

      // Метод вызывается при смене страницы
      router.onAfterRouteChange = () => {
        initUtmTracking()
      }
    }
  },
} satisfies Theme
