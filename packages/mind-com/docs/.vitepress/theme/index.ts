import { h } from "vue"
import { type App } from "vue"
import DefaultTheme from "vitepress/theme"
import { useData, inBrowser } from "vitepress"
import sharedTheme from "shared"
import { Icon } from "@iconify/vue"
import { inject } from "@vercel/analytics"
import { injectSpeedInsights } from "@vercel/speed-insights"
import AuthButton from "./components/AuthButton.vue"
import ContactForm from "./components/ContactForm.vue"
import { components } from "shared"
import "./styles/index.css"

const { NavButton, SearchInput } = components

// Добавляем элементы в макет
export default {
  ...sharedTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Для десктопов (в навбаре)
      "nav-bar-content-before": () => {
        // const { site } = useData()
        // const phonePlaceholder = site.value.themeConfig.localization.placeholder4SearchInput
        return h(SearchInput)
      },
      "nav-bar-content-after": () =>
        h("div", { class: "auth-buttons-container" }, [
          h(AuthButton, { text: useData().site.value.themeConfig.localization.buttonLabel4AuthButton, buttonClass: "alt", eventName: "sign_in_attempt" }),
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
    app.component("ContactForm", ContactForm)

    // Регистрация внешних компонентов пакета
    app.component("Icon", Icon)

    // Vercel Analytics
    if (inBrowser) {
      inject()
      injectSpeedInsights()
    }
  },
}
