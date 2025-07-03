import { h } from "vue"
import { type App } from "vue"
import DefaultTheme from "vitepress/theme"
import { useData } from "vitepress"
import "./styles/index.css"
import { components } from "shared"
import sharedTheme from "shared"
import { Icon } from "@iconify/vue"
import AuthButton from "./components/AuthButton.vue"
import ContactFormModalNav from "./components/ContactFormModalNav.vue"
import AccountLayout from "./layouts/AccountLayout.vue"

export default {
  ...sharedTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-after": () =>
        h("div", { class: "auth-buttons-container" }, [
          h(AuthButton, {
            text: useData().site.value.themeConfig.localization.buttonLabel4AuthButton,
            buttonClass: "alt",
          }),
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
    app.component("ContactFormModalNav", ContactFormModalNav)
    app.component("AccountLayout", AccountLayout)
    app.component("Icon", Icon)
  },
}
