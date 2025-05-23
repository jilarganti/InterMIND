import { h } from "vue"
import { type App } from "vue"
import DefaultTheme from "vitepress/theme"
import { useData } from "vitepress"
import "./style.css"
import { components } from "shared"
import sharedTheme from "shared"
import AuthButton from "../components/AuthButton.vue"

const { SearchInput } = components

// Расширяем тему из shared и регистрируем компоненты
export default {
  ...sharedTheme,
  Layout() {
    // const { site } = useData()
    // const buttonLabel = useData().site.value.themeConfig.localization.buttonLabel4AuthButton
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-before": () => {
        return h(SearchInput)
      },
      "nav-bar-content-after": () =>
        h("div", { class: "auth-buttons-container" }, [
          h(AuthButton, { text: useData().site.value.themeConfig.localization.buttonLabel4AuthButton, buttonClass: "alt" }),
          // h(NavButton, { text: "Ask AI", buttonClass: "alt", to: "/chat" }),
        ]),
    })
  },
  enhanceApp({ app, router }: { app: App; router: any }) {
    // Added router to signature
    // Call shared theme's enhanceApp to register global components and plugins
    if (sharedTheme.enhanceApp) {
      sharedTheme.enhanceApp({ app, router })
    }

    app.component("AuthButton", AuthButton)
  },
}
