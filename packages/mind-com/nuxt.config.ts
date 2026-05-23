// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-23",
  devtools: { enabled: false },
  ssr: true,

  // Phase 1 minimal modules. Phase 3 adds @nuxt/content; Phase 5 adds @pinia/nuxt.
  modules: ["@nuxtjs/sitemap", "@nuxtjs/robots", "@vueuse/nuxt"],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? "https://mind.com",
      productUrl: process.env.NUXT_PUBLIC_PRODUCT_URL ?? "https://intermind.com",
      gtmId: process.env.GTM_ID ?? "",
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL ?? "https://mind.com",
    name: "InterMIND",
    indexable: process.env.VERCEL_ENV === "production",
  },

  sitemap: {
    exclude: ["/chat", "/chat/**"],
  },

  robots: {
    disallow: ["/chat", "/api/"],
  },

  nitro: {
    preset: "vercel",
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        { name: "theme-color", content: "#dd9144" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "InterMIND" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    },
  },

  vite: {
    server: {
      hmr: { overlay: false },
    },
  },
})
