import { h } from "vue"
import DefaultTheme from "vitepress/theme"
// import { useData } from "vitepress"
import "./style.css"

import { components } from "shared"
import sharedTheme from "shared"
import AuthButton from "../components/AuthButton.vue"

const { ContactFormModalNav, NavButton, SearchInput } = components

// Расширяем тему из shared и регистрируем компоненты
export default {
  ...sharedTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Для десктопов (в навбаре)
      "nav-bar-content-before": () => {
        return h(SearchInput)
      },
      "nav-bar-content-after": () =>
        h("div", { class: "auth-buttons-container" }, [
          h(AuthButton, { text: "Sign in", buttonClass: "brand" }),
          // h(NavButton, { text: "Ask AI", buttonClass: "alt", to: "/chat" }),
        ]),
      // "home-hero-actions-after": () =>
      //   h("div", { class: "auth-buttons-container" }, [
      //     h(AuthButton, { text: "Sign in", buttonClass: "brand" }),
      //     h(NavButton, { text: "Ask AI", buttonClass: "alt", to: "/chat" }),
      //   ]),
    })
  },
}
