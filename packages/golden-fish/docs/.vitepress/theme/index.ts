import { h } from "vue"
import DefaultTheme from "vitepress/theme"
import { useData } from "vitepress"
import "./style.css"

import { components } from "shared"
import sharedTheme from "shared"
import SearchInput from "../../../../../shared/components/AIChat/SearchInput.vue"

const { ContactFormModalNav, NavButton } = components

// Расширяем тему из shared и регистрируем компоненты
export default {
  ...sharedTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Для десктопов (в навбаре)
      "nav-bar-content-before": () => {
        const { site } = useData()
        const phonePlaceholder = site.value.themeConfig.localization.placeholder4SearchInput
        return h(SearchInput, { placeholder: phonePlaceholder })
      },
      // Для десктопов (в навбаре)
      "nav-bar-content-after": () =>
        h("div", { class: "auth-buttons-container" }, [
          // h(NavButton, { buttonLabel: "Ask AI", to: "/chat" }),
          // h(ContactFormModalNav, { buttonText: "Send request" }),
        ]),
      // Для мобильных (в выпадающем меню)
      "nav-screen-content-after": () =>
        h("div", { class: "auth-buttons-container mobile-buttons" }, [
          h(NavButton, { buttonLabel: "Chat to an expert", to: "/chat" }),
          // h(NavButton, { buttonLabel: "Ask AI", buttonClass: "alt", to: "/chat" }),
          // h(ContactFormModalNav, { buttonText: "Send request" }),
        ]),
      // Для обычных страниц (внизу страницы)
      "doc-footer-before": () =>
        h("div", { class: "auth-buttons-container" }, [
          // h(ContactFormModalNav, { buttonText: "Speak to an expert" }),
          h(NavButton, { buttonLabel: "Chat to an expert", to: "/chat" }),
        ]),
    })
  },
}
