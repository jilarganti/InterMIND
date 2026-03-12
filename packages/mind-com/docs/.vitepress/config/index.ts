/// <reference types="../theme/types/themeConfig" />
/// <reference types="../theme/types/markdown-it-task-lists" />

import { defineConfig } from "vitepress"
import markdownItFootnote from "markdown-it-footnote"
import markdownItTaskLists from "markdown-it-task-lists"
import llmstxt from "vitepress-plugin-llms"
import { locales } from "./locales"

/**
 * * Integration and site configuration constants.
 * ! This data should not contain secrets, as it will be available in client code
 */
const SITE_URL = "https://mind.com"
const NOINDEX_PAGES = ["exp/", "account/", "chat"]
const RTL_LOCALES = ["ar", "fa", "ur"]
const APP_DOMAIN = "inter.mind.com"
const APP_DOMAIN_DEV = "dev.inter.mind.com"
const GTM_ID_TO_USE = process.env.GTM_ID // Google Tag Manager ID, set in Vercel environment variables

// OAuth paths
const isProduction = process.env.VERCEL_ENV === "production"
const appBaseUrl = "https://" + (isProduction ? APP_DOMAIN : APP_DOMAIN_DEV)
const oauthProviderUrl = appBaseUrl + "/auth"
const checkoutUrl = appBaseUrl + "/checkout"
const oauthClientId = "vca"

const vercelUrl = process.env.VERCEL_URL || process.env.VERCEL_BRANCH_URL
const baseUrl = vercelUrl ? `https://${vercelUrl}` : "http://localhost:3100"

const i18nLocales = Object.keys(locales).filter((localeKey) => localeKey !== "root")

const rewriteRules = i18nLocales.reduce(
  (rules, localeKey) => {
    rules[`${localeKey}/:rest*`] = `i18n/${localeKey}/:rest*`
    rules[`i18n/${localeKey}/:rest*`] = `${localeKey}/:rest*`
    return rules
  },
  { "en/:rest*": ":rest*" } as Record<string, string>,
)

export default defineConfig({
  title: "InterMIND",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  locales, // Using localization from locales.ts

  rewrites: rewriteRules,

  transformPageData(pageData, ctx) {
    const normalizedRelativePath = pageData.relativePath.replace(/^en\//, "").replace(/^i18n\/([a-z]{2})\//, "$1/")

    const pagePath = normalizedRelativePath.replace(/\.md$/, "").replace(/index$/, "")
    pageData.frontmatter.head ??= []

    // Add dir: rtl for RTL languages
    if (RTL_LOCALES.includes(pagePath.split("/")[0])) {
      pageData.frontmatter.dir = "rtl"
    }

    // Disable footer for all blog pages
    if (pagePath.includes("/posts/")) {
      // pageData.frontmatter.footer = false
    }

    // noindex for non-production, excluded pages, and pages with noindex frontmatter
    if (NOINDEX_PAGES.some((path) => pagePath.includes(path)) || pageData.frontmatter.noindex || !isProduction) {
      pageData.frontmatter.head.push(["meta", { name: "robots", content: "noindex" }])
    }
  },

  markdown: {
    config: (md) => {
      md.use(markdownItFootnote)
      md.use(markdownItTaskLists, { enabled: true, label: true, labelAfter: false })
    },
  },

  vite: {
    define: {
      "import.meta.env.VITE_IS_PROD": isProduction,
      "import.meta.env.VITE_BASE_URL": JSON.stringify(baseUrl),
      "import.meta.env.VITE_OAUTH_PROVIDER_URL": JSON.stringify(oauthProviderUrl),
      "import.meta.env.VITE_OAUTH_CLIENT_ID": JSON.stringify(oauthClientId),
      "import.meta.env.VITE_APP_BASE_URL": JSON.stringify(appBaseUrl),
      "import.meta.env.VITE_CHECKOUT_URL": JSON.stringify(checkoutUrl),
    },
    server: {
      proxy: {
        "/api": { target: baseUrl, changeOrigin: true },
      },
    },
    plugins: [
      isProduction &&
        llmstxt({
          workDir: "en",
          ignoreFiles: ["exp/*", "resources/*", "account/*", "promo/*", "chat.md"],
        }),
    ],
  },

  sitemap: {
    hostname: SITE_URL,
    // Remove noindex pages from sitemap.xml
    transformItems: (items) => items.filter((item) => !NOINDEX_PAGES.some((path) => item.url.includes(path))),
  },

  themeConfig: {
    logo: { light: "/logo.svg", dark: "/logo.svg" },
    llmTokenLimit: 100000, // Token limit for LLMs (100k tokens)
  },

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#dd9144" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "mind.com" }],
    ["meta", { property: "og:url", content: SITE_URL + "/" }],
    // Preconnect to external domains for faster resource loading
    ["link", { rel: "preconnect", href: "https://www.googletagmanager.com", crossorigin: "" }],
    ["link", { rel: "dns-prefetch", href: "https://www.googletagmanager.com" }],
    ["link", { rel: "preconnect", href: "https://api.iconify.design", crossorigin: "" }],
    [
      "script",
      {},
      `
      // Defer GTM loading until after page becomes interactive
      window.addEventListener('load', function() {
        setTimeout(function() {
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID_TO_USE}');
        }, 1500);
      });
      `,
    ],
    [
      "noscript",
      {},
      `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID_TO_USE}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    ],
  ],
})
