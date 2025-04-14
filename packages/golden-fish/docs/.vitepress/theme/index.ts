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
    // const { frontmatter } = useData()

    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-after": () =>
        h("div", { class: "auth-buttons-container" }, [
          h(ContactFormModal, {
            buttonText: "Send request",
            // formStyle: "display: block; margin: 20px auto;",
          }),
          h(NavButton, { text: "Ask AI", buttonClass: "alt", to: "/chat" }),
        ]),
      // "aside-ads-before": () => h(AsideSponsors),
      // "home-features-after": () => h(HomeSponsors),
    })
  },
  // Если нужно переопределить какие-то методы темы, можно это сделать здесь
  // enhanceApp({ app, router }) {},
}
