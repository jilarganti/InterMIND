import { h, type App } from "vue"
import Theme from "vitepress/theme"
import { useData, inBrowser } from "vitepress"
import sharedTheme from "shared"
import { Icon } from "@iconify/vue"
import { inject } from "@vercel/analytics"
import { injectSpeedInsights } from "@vercel/speed-insights"
import AuthButton from "./components/AuthButton.vue"
import ContactForm from "./components/ContactForm.vue"
import BlogPost from "./components/BlogPost.vue"
import { components } from "shared"
import "./styles/index.css"
import AIChat from "./components/AIChat/AIChat.vue"

const { NavButton } = components

// Добавляем элементы в макет
export default {
  ...sharedTheme,
  Layout() {
    return h(Theme.Layout, null, {
      "nav-bar-content-after": () => {
        const { site, frontmatter } = useData()

        return frontmatter.value.layout === "home"
          ? h(AuthButton, {
              eventName: "sign_in_attempt",
              buttonStyle: "margin: 0 1rem;",
              text: site.value.themeConfig.localization.buttonLabel4SignInButton,
            })
          : h(NavButton, {
              to: "/chat",
              buttonStyle: "margin: 0 1rem;",
              buttonLabel: site.value.themeConfig.localization.buttonLabel4NavButton,
            })
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
    app.component("AuthButton", AuthButton)
    app.component("ContactForm", ContactForm)
    app.component("AIChat", AIChat)
    app.component("BlogPost", BlogPost)

    // Регистрация внешних компонентов пакета
    app.component("Icon", Icon)

    // Vercel Analytics
    if (inBrowser) {
      inject()
      injectSpeedInsights()
    }
  },
}
