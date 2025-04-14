import { h } from "vue"
import DefaultTheme from "vitepress/theme"
import "./style.css"

import { components } from "shared"
import sharedTheme from "shared"

const { ContactFormModal, NavButton } = components

// Просто расширяем тему из shared и регистрируем те же компоненты
export default {
  ...sharedTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Для десктопов (в навбаре)
      "nav-bar-content-after": () =>
        h("div", { class: "auth-buttons-container" }, [
          h(ContactFormModal, { buttonText: "Send request" }),
          h(NavButton, { text: "Ask AI", buttonClass: "alt", to: "/chat" }),
        ]),
      // Для мобильных (в выпадающем меню)
      "nav-screen-content-after": () =>
        h("div", { class: "auth-buttons-container mobile-buttons" }, [
          h(ContactFormModal, { buttonText: "Send request" }),
          h(NavButton, { text: "Ask AI", buttonClass: "alt", to: "/chat" }),
        ]),
    })
  },
}
