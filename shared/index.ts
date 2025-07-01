import { h } from "vue"
import { type App } from "vue"
import DefaultTheme from "vitepress/theme"
import type { Theme } from "vitepress"
import "./styles/AIChat.css"

import { inBrowser } from "vitepress"
import { createPinia } from "pinia"

import { components } from "./components"
import { initUtmTracking } from "./utils/utm"

export { components }

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout)
  },

  enhanceApp({ app, router }: { app: App; router: any }) {
    app.use(createPinia())

    // Регистрируем кастомные компоненты
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })

    // Сохраняем gclid в sessionStorage
    const gclid = new URLSearchParams(location.search).get("gclid")
    if (gclid) sessionStorage.setItem("gclid", gclid)

    // UTM-трекинг — только в браузере
    if (inBrowser) {
      initUtmTracking() // при первом визите

      router.onAfterRouteChange = initUtmTracking // при SPA переходах
      window.addEventListener("popstate", initUtmTracking) // при нажатии "назад"
    }
  },
} satisfies Theme
