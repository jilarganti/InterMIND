// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-23",
  devtools: { enabled: false },
  ssr: true,

  // Phase 5 will add @pinia/nuxt for AI chat store.
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@vueuse/nuxt",
    // Sentry's Nuxt module wires the build-time bits (source-map upload, server
    // instrumentation). Skip it in local dev so `nuxt dev` stays fast and quiet.
    ...(process.env.NODE_ENV !== "development" ? ["@sentry/nuxt/module"] : []),
    // PostHog self-disables in dev via the `posthog.disabled` flag below.
    "nuxt-posthog",
  ],

  // Default for new visitors: follow OS preference (Nuxt UI ships
  // @nuxtjs/color-mode under the hood). Stored choice wins after first toggle.
  colorMode: {
    preference: "system",
    fallback: "light",
    storageKey: "mind-com:color-mode",
  },

  css: ["~/assets/css/main.css", "~/assets/css/prose.css"],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? "https://mind.com",
      productUrl: process.env.NUXT_PUBLIC_PRODUCT_URL ?? "https://intermind.com",
      signInUrl:
        process.env.NUXT_PUBLIC_SIGN_IN_URL ??
        "https://id.inter.mind.com/realms/vca/protocol/openid-connect/auth?client_id=vca&scope=openid&response_type=code&state=oZ19WALjY1nJd83Rbwfeu&redirect_uri=https%3A%2F%2Finter.mind.com%2Fauth%2Fcallback&ui_locales=en",
      gtmId: process.env.GTM_ID ?? "",
      // Usercentrics Template ID of the PostHog Data Processing Service — drives
      // consent gating in app/plugins/posthog-consent.client.ts.
      ucPosthogId: process.env.NUXT_PUBLIC_UC_POSTHOG_ID ?? "uRoG9JxhEUtI4V",
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL ?? "https://mind.com",
    name: "Mind.com",
    indexable: process.env.VERCEL_ENV === "production",
  },

  // Internationalization (i18n). Locales mirror the product (inter.mind.com)
  // so a visitor landing on either property gets the same language set. UI
  // strings live in app/locales/<code>.json; content is mirrored under
  // content/<code>/{blog,legal}/ by scripts/i18n-translate-content.ts.
  i18n: {
    // Allow inline HTML (<strong>, <em>, <a>) inside locale message values.
    // Without this, unplugin-vue-i18n aborts loading the whole file the moment
    // it sees a tag — every key from that file then renders as the raw key.
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "es", name: "Spanish (Latin America)", file: "es.json" },
      { code: "pt", name: "Portuguese (Brazilian)", file: "pt.json" },
      { code: "fr", name: "French", file: "fr.json" },
      { code: "de", name: "German", file: "de.json" },
      { code: "ru", name: "Russian", file: "ru.json" },
      { code: "zh", name: "Chinese (Simplified)", file: "zh.json" },
    ],
    langDir: "locales",
    restructureDir: "app",
    defaultLocale: "en",
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL ?? "https://mind.com",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "mind-com:locale",
      fallbackLocale: "en",
      redirectOn: "root",
    },
  },

  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },

  robots: {
    disallow: ["/api/"],
  },

  content: {
    build: {
      markdown: {
        toc: { depth: 3, searchDepth: 3 },
      },
    },
  },

  // Product analytics (nuxt-posthog → posthog-js). The marketing site is a
  // public, EU-facing property, so capture starts OPTED OUT and is enabled only
  // after Usercentrics grants the PostHog service consent — see
  // app/plugins/posthog-consent.client.ts.
  posthog: {
    disabled: process.env.NODE_ENV === "development",
    // Public, write-only project token (PostHog "Mind.com", id 188389, EU) —
    // safe to ship in the client bundle. Override per-env via NUXT_PUBLIC_POSTHOG_KEY.
    publicKey: process.env.NUXT_PUBLIC_POSTHOG_KEY || "phc_ydw5Nf2ebr6c3iS76xjxzeaJoctMENyxTYVD48gSCPGV",
    host: "https://eu.i.posthog.com",
    clientOptions: {
      // Nothing is captured until the consent plugin calls opt_in_capturing().
      opt_out_capturing_by_default: true,
      // 'always' so anonymous landing visitors still get profiles once opted in
      // (the project defaults to identified_only, which would drop them).
      person_profiles: "always" as const,
      // Site-wide click/submit autocapture (incl. the /contacts lead form).
      autocapture: {
        dom_event_allowlist: ["click", "submit"],
      },
      session_recording: {
        maskAllInputs: true,
        maskTextSelector: "[data-ph-mask]",
      },
      capture_pageview: true,
      capture_pageleave: true,
      // Errors are owned by Sentry; don't double-report them into PostHog.
      capture_exceptions: false,
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
      // `htmlAttrs.lang` and `<link hreflang>` are set per-request by
      // `useLocaleHead()` in app.vue — keep them out of the static config
      // so @nuxtjs/i18n can drive them.
      meta: [
        { name: "theme-color", content: "#dd9144" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Mind" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
      // Usercentrics Web CMP (V3) — GDPR consent banner. Must load before any
      // third-party script that needs consent; PostHog stays opted out until
      // app/plugins/posthog-consent.client.ts sees this CMP grant the service.
      script: [
        {
          id: "usercentrics-cmp",
          src: "https://web.cmp.usercentrics.eu/ui/loader.js",
          "data-settings-id": "oOBkcAZgmMkYWC",
          async: true,
          tagPriority: "critical",
        },
      ],
    },
  },

  vite: {
    server: {
      hmr: { overlay: false },
    },
    // Surface Vercel/Sentry build env to client code (sentry.client.config.ts).
    define: {
      "import.meta.env.VITE_VERCEL_ENV": JSON.stringify(process.env.VERCEL_ENV || "development"),
      // Sentry DSN is public (ships in client JS). Falls back to the mind-com
      // project DSN so error reporting works without extra Vercel config.
      "import.meta.env.VITE_SENTRY_DSN": JSON.stringify(
        process.env.SENTRY_DSN || "https://0beb350c4f5bcab452137618f4ec0d4f@o4511386578255872.ingest.de.sentry.io/4511462432899152",
      ),
      "import.meta.env.VITE_SENTRY_RELEASE": JSON.stringify(process.env.VERCEL_GIT_COMMIT_SHA || ""),
      // Per-deploy id (distinct from the SHA: redeploys of the same commit get a
      // distinct id). Falls back to VERCEL_URL for older runtimes.
      "import.meta.env.VITE_VERCEL_DEPLOYMENT_ID": JSON.stringify(process.env.VERCEL_DEPLOYMENT_ID || process.env.VERCEL_URL || ""),
    },
  },

  // Hidden client source maps: uploaded to Sentry for readable stack traces,
  // stripped from the public bundle so they aren't served to visitors.
  sourcemap: {
    client: "hidden",
  },

  // Source-map upload (build-time only; skipped in dev where the module is off).
  ...(process.env.NODE_ENV !== "development" && {
    sentry: {
      sourceMapsUploadOptions: {
        // EU SaaS — org/projects live on de.sentry.io.
        url: "https://de.sentry.io/",
        org: "mind-com",
        project: process.env.SENTRY_PROJECT || "mind-com",
        authToken: process.env.SENTRY_AUTH_TOKEN,
        silent: true,
        telemetry: false,
      },
    },
  }),
})
