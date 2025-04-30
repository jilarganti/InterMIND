import { h } from "vue"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import { components } from "shared"
import sharedTheme from "shared"

const { ContactFormModalNav, NavButton, SearchInput } = components

// Расширяем тему из shared и регистрируем компоненты
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
}
