import { h } from "vue"
import DefaultTheme from "vitepress/theme"
import "./style.css"

import { components } from "shared"
import sharedTheme from "shared"

const { ContactFormModalNav, NavButton } = components

// Просто расширяем тему из shared и регистрируем те же компоненты
export default {
  ...sharedTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Для десктопов (в навбаре)
      "nav-bar-content-after": () =>
        h("div", { class: "auth-buttons-container" }, [
          h(NavButton, { buttonLabel: "Ask AI", to: "/chat" }),
          // h(ContactFormModalNav, { buttonText: "Send request" }),
        ]),
      // Для мобильных (в выпадающем меню)
      "nav-screen-content-after": () =>
        h("div", { class: "auth-buttons-container mobile-buttons" }, [
          h(NavButton, { buttonLabel: "Ask AI", buttonClass: "alt", to: "/chat" }),
          h(ContactFormModalNav, { buttonText: "Send request" }),
        ]),
      // Для обычных страниц (внизу страницы)
      "doc-footer-before": () =>
        h("div", { class: "auth-buttons-container" }, [
          h(ContactFormModalNav, { buttonText: "Get a free consultation" }),
          // h(NavButton, { buttonLabel: "Ask AI", buttonClass: "alt", to: "/chat" }),
        ]),
    })
  },
}
