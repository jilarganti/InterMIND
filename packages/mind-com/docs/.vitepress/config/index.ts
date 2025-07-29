import { defineConfig } from "vitepress"
import markdownItFootnote from "markdown-it-footnote"
import llmstxt from "vitepress-plugin-llms"
import { locales } from "./locales"

/**
 * * Integration and site configuration constants.
 * ! This data should not contain secrets, as it will be available in client code
 */
const SITE_URL = "https://mind.com"
const NOINDEX_PAGES = ["exp/", "chat"]
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
const baseUrl = vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"

export default defineConfig({
  title: "InterMIND",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  locales, // Using localization from locales.ts

  rewrites: {
    "en/:rest*": ":rest*",
    "i18n/:locale/:rest*": ":locale/:rest*",
  },

  transformPageData(pageData, ctx) {
    const pagePath = pageData.relativePath.replace(/\.md$/, "").replace(/index$/, "")
    pageData.frontmatter.head ??= []

    // Add dir: rtl for RTL languages
    if (RTL_LOCALES.includes(pagePath.split("/")[0])) {
      pageData.frontmatter.dir = "rtl"
    }

    // noindex for non-production and excluded pages
    if (NOINDEX_PAGES.some((path) => pagePath.includes(path)) || !isProduction) {
      pageData.frontmatter.head.push(["meta", { name: "robots", content: "noindex" }])
    }
  },

  markdown: {
    config: (md) => {
      md.use(markdownItFootnote)
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
      // isProduction &&
      llmstxt({
        workDir: "en",
        ignoreFiles: ["index.md", "chat.md", "exp.md"],
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
  },

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#dd9144" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "mind.com" }],
    ["meta", { property: "og:url", content: SITE_URL + "/" }],
    [
      "script",
      {},
      `
      (function() {
        // Google Tag Manager main script
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID_TO_USE}');
      })();
      `,
    ],
    [
      "noscript",
      {},
      `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID_TO_USE}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    ],
  ],
})
