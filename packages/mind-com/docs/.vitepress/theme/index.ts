import { h, type App } from "vue"
import Theme from "vitepress/theme"
import { useData, inBrowser } from "vitepress"
import sharedTheme from "shared"
import { Icon } from "@iconify/vue"
import { inject } from "@vercel/analytics"
import { injectSpeedInsights } from "@vercel/speed-insights"
import AuthButton from "./components/AuthButton.vue"
import ContactForm from "./components/ContactForm.vue"
import { components } from "shared"
import "./styles/index.css"
import AIChat from "./components/AIChat/AIChat.vue"

const { NavButton, SearchInput } = components

// Добавляем элементы в макет
export default {
  ...sharedTheme,
  Layout() {
    return h(Theme.Layout, null, {
      "nav-bar-content-after": () =>
        h(AuthButton, { eventName: "sign_in_attempt", text: useData().site.value.themeConfig.localization.buttonLabel4SignInButton }),
      "sidebar-nav-after": () =>
        h(NavButton, { to: "/chat", buttonClass: "alt", buttonLabel: useData().site.value.themeConfig.localization.buttonLabel4NavButton }),
      "doc-footer-before": () =>
        h(AuthButton, {
          eventName: "get_started_attempt",
          buttonClass: "brand",
          text: useData().site.value.themeConfig.localization.buttonLabel4GetStartedButton,
        }),
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
    app.component("AIChat", AIChat)

    // Регистрация внешних компонентов пакета
    app.component("Icon", Icon)

    // Vercel Analytics
    if (inBrowser) {
      inject()
      injectSpeedInsights()
    }
  },
}
