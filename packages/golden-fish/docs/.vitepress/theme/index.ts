import { h } from "vue"
import { type App } from "vue"
import DefaultTheme from "vitepress/theme"
import { useData, inBrowser } from "vitepress"
import { components } from "shared"
import sharedTheme from "shared"
import ContactForm from "./components/ContactForm.vue"
import { Icon } from "@iconify/vue"
import { inject } from "@vercel/analytics"
import { injectSpeedInsights } from "@vercel/speed-insights"
import "./style.css"

const { ContactFormModalNav, NavButton, SearchInput } = components

// Расширяем тему из shared и регистрируем компоненты
export default {
  ...sharedTheme, // It inherits everything from sharedTheme
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Для десктопов (в навбаре)
      "nav-bar-content-before": () => {
        // const { site } = useData()
        // const phonePlaceholder = site.value.themeConfig.localization.placeholder4SearchInput
        return h(SearchInput)
      },
      // Для десктопов (в навбаре)
      "nav-bar-content-after": () =>
        h("div", { class: "auth-buttons-container" }, [
          // h(NavButton, { buttonLabel: "Ask AI", to: "/chat" }),
          // h(ContactFormModalNav, { buttonText: "Send request" }),
        ]),
      // Для мобильных (в выпадающем меню)
      "nav-screen-content-after": () => {
        // const { site } = useData()
        // const buttonLabel = site.value.themeConfig.localization.buttonLabel4NavButton
        return h("div", { class: "auth-buttons-container" }, [
          h(NavButton, { to: "/chat" }),
          // h(NavButton, { buttonLabel: "Ask AI", buttonClass: "alt", to: "/chat" }),
          // h(ContactFormModalNav, { buttonText: "Send request" }),
        ])
      },
      // Для обычных страниц (внизу страницы)
      "doc-footer-before": () => {
        // const { site } = useData()
        // const buttonLabel = site.value.themeConfig.localization.buttonLabel4NavButton
        return h("div", { class: "auth-buttons-container mobile-buttons" }, [
          h(NavButton, { to: "/chat" }),
          // h(NavButton, { buttonLabel: "Ask AI", buttonClass: "alt", to: "/chat" }),
          // h(ContactFormModalNav, { buttonText: "Send request" }),
        ])
      },
    })
  },
  // Расширяем тему из shared и регистрируем компоненты
  enhanceApp({ app, router }: { app: App; router: any }) {
    // Регистрация компонентов из shared
    if (sharedTheme.enhanceApp) {
      sharedTheme.enhanceApp({ app, router })
    }
    // Регистрация моих компонентов пакета
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
