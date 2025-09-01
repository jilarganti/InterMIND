/// <reference types="../theme/types/themeConfig" />

import { defineConfig } from "vitepress"
import markdownItFootnote from "markdown-it-footnote"
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
const baseUrl = vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"

export default defineConfig({
  title: "InterMIND",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  locales, // Using localization from locales.ts
  ignoreDeadLinks: true, // Temporarily disable dead link checking

  rewrites(id) {
    return id
      .replace(/\/(\d+\.)/g, "/")
      .replace(/(\d{2}\.)/g, "")
      .replace(/^en\//, "")
      .replace(/^i18n\/([^/]+)\//, "$1/")
  },

  transformPageData(pageData, ctx) {
    const pagePath = pageData.relativePath.replace(/\.md$/, "").replace(/index$/, "")
    pageData.frontmatter.head ??= []

    // Add dir: rtl for RTL languages
    if (RTL_LOCALES.includes(pagePath.split("/")[0])) {
      pageData.frontmatter.dir = "rtl"
    }

    // Disable footer for all blog pages
    if (pagePath.includes("/posts/")) {
      pageData.frontmatter.footer = false
    }

    // noindex for non-production and excluded pages
    if (NOINDEX_PAGES.some((path) => pagePath.includes(path)) || !isProduction) {
      pageData.frontmatter.head.push(["meta", { name: "robots", content: "noindex" }])
    }
  },

  markdown: {
    config: (md) => {
      md.use(markdownItFootnote)

      // Custom read-more transformation
      const originalRender = md.render
      md.render = function (src, env) {
        // Transform :read-more tags before markdown processing
        const readMoreRegex = /:read-more\{title="([^"]+)"\s+to="([^"]+)"\}/g

        const transformedSrc = src.replace(readMoreRegex, (match, title, to) => {
          const href = to.startsWith("/") ? to : `/${to}`
          return `<div class="read-more-link">
                    <a href="${href}" class="read-more-button">
                      <span class="read-more-text">${title}</span>
                      <span class="read-more-arrow">→</span>
                    </a>
                  </div>`
        })

        return originalRender.call(this, transformedSrc, env)
      }
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
      // Plugin to handle missing assets - must be first
      {
        name: "missing-assets-handler",
        enforce: "pre",
        resolveId(id, importer) {
          if (id.startsWith("/assets/")) {
            // Return a virtual id for missing assets
            return "virtual:missing-asset:" + id
          }
        },
        load(id) {
          if (id.startsWith("virtual:missing-asset:")) {
            // Return empty string for missing assets
            return 'export default ""'
          }
        },
      },
      isProduction &&
        llmstxt({
          workDir: "en",
          ignoreFiles: ["exp/*", "chat.md"],
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
