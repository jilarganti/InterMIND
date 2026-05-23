// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-23",
  devtools: { enabled: false },
  ssr: true,

  // Phase 5 will add @pinia/nuxt for AI chat store.
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxtjs/sitemap", "@nuxtjs/robots", "@vueuse/nuxt"],

  css: ["~/assets/css/main.css", "~/assets/css/prose.css"],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? "https://mind.com",
      productUrl: process.env.NUXT_PUBLIC_PRODUCT_URL ?? "https://intermind.com",
      signInUrl:
        process.env.NUXT_PUBLIC_SIGN_IN_URL ??
        "https://id.inter.mind.com/realms/vca/protocol/openid-connect/auth?client_id=vca&scope=openid&response_type=code&state=oZ19WALjY1nJd83Rbwfeu&redirect_uri=https%3A%2F%2Finter.mind.com%2Fauth%2Fcallback&ui_locales=en",
      gtmId: process.env.GTM_ID ?? "",
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL ?? "https://mind.com",
    name: "InterMIND",
    indexable: process.env.VERCEL_ENV === "production",
  },

  sitemap: {
    // software-testing-basics-* is intentionally excluded: it stays at mind.com
    // with a canonical pointing to intermind.com (Variant B — soft consolidation).
    exclude: ["/chat", "/chat/**", "/blog/software-testing-basics-concepts-and-terminology"],
    sources: ["/api/__sitemap__/urls"],
  },

  robots: {
    disallow: ["/chat", "/api/"],
  },

  content: {
    build: {
      markdown: {
        toc: { depth: 3, searchDepth: 3 },
      },
    },
  },

  nitro: {
    preset: "vercel",
    serverAssets: [
      {
        baseName: "content",
        dir: "content",
      },
    ],
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
