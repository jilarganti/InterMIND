import { h } from "vue"
import { type App } from "vue"
import DefaultTheme from "vitepress/theme"
import { useData } from "vitepress"
import "./style.css"
import { components } from "shared"
import sharedTheme from "shared"
import AuthButton from "../components/AuthButton.vue"
import { Icon } from "@iconify/vue"
import { inject } from "@vercel/analytics"
import { injectSpeedInsights } from "@vercel/speed-insights"

const { SearchInput } = components

// Добавляем элементы в макет
export default {
  ...sharedTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // "nav-bar-content-before": () => {
      //   return h(SearchInput)
      // },
      "nav-bar-content-after": () =>
        h("div", { class: "auth-buttons-container" }, [
          h(AuthButton, { text: useData().site.value.themeConfig.localization.buttonLabel4AuthButton, buttonClass: "alt" }),
        ]),
    })
  },

  // Расширяем тему из shared и регистрируем компоненты
  enhanceApp({ app, router }: { app: App; router: any }) {
    // Регистрация компонентов из shared
    if (sharedTheme.enhanceApp) {
      sharedTheme.enhanceApp({ app, router })
    }
    // Регистрация моих компонентов пакета
    app.component("AuthButton", AuthButton)

    // Регистрация внешних компонентов пакета
    app.component("Icon", Icon)

    // Vercel Analytics
    if (typeof window !== "undefined") {
      inject()
      injectSpeedInsights()
    }
  },
}
