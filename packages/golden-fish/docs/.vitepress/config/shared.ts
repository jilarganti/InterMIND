import { defineConfig } from "vitepress"
import markdownItFootnote from "markdown-it-footnote"
import { fileURLToPath, URL } from "node:url"
import { gtmHead } from "./gtm.config"

const hostUrl = "https://goldenfish.ae"
const NOINDEX_PAGES = ["company-registration/fees-timelines", "include/recommended-banks", "test", "chat"]
const RTL_LOCALES = ["ar", "fa", "ur"]
// Список UTM-параметров для сохранения в параметрах страницы
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "campaign_id"]

const isProduction = process.env.VERCEL_ENV === "production"
const vercelUrl = process.env.VERCEL_URL || process.env.VERCEL_BRANCH_URL
const baseUrl = vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000"

export const shared = defineConfig({
  title: "Golden Fish",
  // srcDir: "./docs",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  rewrites: {
    "en/:rest*": ":rest*",
    "i18n/:locale/:rest*": ":locale/:rest*",
  },
  transformPageData(pageData, ctx) {
    const pagePath = pageData.relativePath.replace(/\.md$/, "").replace(/index$/, "")
    pageData.frontmatter.head ??= []

    // Инициализируем params как пустой объект
    pageData.params = {}

    // Определяем язык из пути файла
    const locale = pagePath.split("/")[0]

    // Добавляем dir: rtl для RTL языков
    if (RTL_LOCALES.includes(locale)) {
      pageData.frontmatter.dir = "rtl"
    }

    // noindex для не прода и исключенных страниц
    if (NOINDEX_PAGES.some((path) => pagePath.includes(path)) || !isProduction) {
      pageData.frontmatter.head.push(["meta", { name: "robots", content: "noindex" }])
    }

    // canonical link
    // pageData.frontmatter.head.push(["link", { rel: "canonical", href: hostUrl + "/" + pagePath }])

    // Сохраняем UTM-параметры в метаданных страницы
    // Извлекаем параметры из URL текущего запроса (если он доступен)
    if (typeof window !== "undefined" && window.location.search) {
      try {
        const urlParams = new URLSearchParams(window.location.search)

        // Сохраняем все UTM-параметры в params
        UTM_PARAMS.forEach((param) => {
          const value = urlParams.get(param)
          if (value) {
            pageData.params![param] = value
          }
        })
      } catch (e) {
        console.error("Error extracting query parameters:", e)
      }
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
    },
    resolve: {
      alias: {
        "@config": fileURLToPath(new URL("../config/", import.meta.url)),
        "@theme": fileURLToPath(new URL("../theme/", import.meta.url)),
        "@docs": fileURLToPath(new URL("../../../en", import.meta.url)),
      },
    },
    server: {
      proxy: {
        "/api": { target: baseUrl, changeOrigin: true },
        "/test": { target: baseUrl, rewrite: (path) => "/api/redirect" },
        "^/(?!api|assets).*": {
          target: baseUrl,
          rewrite: (path) => "/api/redirect",
          bypass: (req) => {
            if (req.headers.cookie?.includes("nf_lang")) {
              return false // Не выполнять прокси, пропустить к обычной обработке
            }
          },
        },
      },
    },
    plugins: [],
  },
  sitemap: {
    hostname: hostUrl,
    // Убираем страницы noindex из sitemap.xml
    transformItems: (items) => items.filter((item) => !NOINDEX_PAGES.some((path) => item.url.endsWith(path))),
  },

  head: [
    ["link", { rel: "icon", type: "image/avif", href: "/img/Logo.avif" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Golden Fish" }],
    ["meta", { property: "og:url", content: hostUrl }],
    ...gtmHead,
  ],
  themeConfig: {
    logo: { light: "/img/Logo.avif", dark: "/img/Logo.avif" },
  },
})
