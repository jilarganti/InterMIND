import { h } from "vue"
import { type App } from "vue"
import DefaultTheme from "vitepress/theme"
// import { useData } from "vitepress"
import "./style.css"

import { components } from "shared"
import sharedTheme from "shared"
import AuthButton from "../components/AuthButton.vue"
import HeroSection from "../components/HeroSection.vue"

const { ContactFormModalNav, NavButton, SearchInput, FeatureBlock } = components

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
          h(AuthButton, { text: "Sign in", buttonClass: "alt" }),
          // h(NavButton, { text: "Ask AI", buttonClass: "alt", to: "/chat" }),
        ]),
      // "home-hero-actions-after": () =>
      //   h("div", { class: "auth-buttons-container" }, [
      //     h(AuthButton, { text: "Sign in", buttonClass: "brand" }),
      //     h(NavButton, { text: "Ask AI", buttonClass: "alt", to: "/chat" }),
      //   ]),
    })
  },
  enhanceApp({ app, router }: { app: App; router: any }) {
    // Added router to signature
    // Call shared theme's enhanceApp to register global components and plugins
    if (sharedTheme.enhanceApp) {
      sharedTheme.enhanceApp({ app, router })
    }

    // i14n-specific component registrations
    app.component("HeroSection", HeroSection)
    app.component("AuthButton", AuthButton)
  },
}
