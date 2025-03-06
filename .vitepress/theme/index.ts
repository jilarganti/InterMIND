import { h } from "vue"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import "./interactive-images.css"
import type { Theme } from "vitepress"
import { useData, inBrowser, useRouter } from "vitepress"
import { watchEffect } from "vue"

import { components } from "./components"
const { TypeForm, HomeSponsors, AsideSponsors } = components

const PATH_CLEANUP_REGEX = /^(?:en|ar|hi|ur|bn|ml|ta|te|fa|zh|fr|ru|uk|tr|ko|ja|tl|id|vi|pt|es)\/|(\.[^/.]+)$/g

export default {
  extends: DefaultTheme,
  // Layout,
  Layout() {
    const { page, lang } = useData()
    const router = useRouter()
    /**
     * Redirect to the localized path for the first time
     */
    watchEffect(() => {
      if (inBrowser) {
        const browserLang = navigator.language.slice(0, 2)
        const currentLang = lang.value.slice(0, 2)
        const cookieLang = document.cookie.match(/nf_lang=([^;]+)/)?.[1]?.slice(0, 2)
        const path = page.value.relativePath.replace(PATH_CLEANUP_REGEX, "")

        // console.log(browserLang, currentLang, cookieLang, path)

        if (!cookieLang) {
          document.cookie = `nf_lang=${browserLang}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
          if (currentLang !== browserLang) {
            router.go(browserLang === "en" ? `/${path}` : `/${browserLang}/${path}`)
          }
        }
      }
    })

    return h(DefaultTheme.Layout, null, {
      "home-features-after": () => h(HomeSponsors),
      "aside-ads-before": () => h(AsideSponsors),
      "nav-bar-content-after": () => h(TypeForm, { typeformId: "01J8Q752166MZH0T93ZYYJ3ZMD" }),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Регистрируем все компоненты одним циклом
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
} satisfies Theme
