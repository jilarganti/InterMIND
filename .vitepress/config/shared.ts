import { defineConfig } from "vitepress"
import markdownItFootnote from "markdown-it-footnote"
import { fileURLToPath, URL } from "node:url"
import { gtmHead } from "./gtm.config"

const hostLink = "https://goldenfish.ae"
const NOINDEX_PAGES = ["company-registration/fees-timelines", "include/recommended-banks", "@@@"]
const RTL_LOCALES = ["ar", "fa", "ur"]

// Определяем текущее окружение
const getEnvironment = () => {
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV

}

const isProduction = getEnvironment() === "production"
const getApiUrl = () => (process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : "http://localhost:3000")



export const shared = defineConfig({
  title: "Golden Fish",
  srcDir: "./docs",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  rewrites: {
    "en/:rest*": ":rest*",
    "i18n/:locale/:rest*": ":locale/:rest*",
  },
  transformPageData(pageData) {
    const pagePath = pageData.relativePath.replace(/\.md$/, "").replace(/index$/, "")
    pageData.frontmatter.head ??= []

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
    pageData.frontmatter.head.push(["link", { rel: "canonical", href: hostLink + "/" + pagePath }])
  },
  markdown: {
    config: (md) => {
      md.use(markdownItFootnote)
    },
  },
  vite: {
    define: {
      "import.meta.env.VITE_IS_PROD": isProduction,
    },
    resolve: {
      alias: {
        "@docs": fileURLToPath(new URL("../../docs/en", import.meta.url)),
        "@setup": fileURLToPath(new URL("../", import.meta.url)),
      },
    },
    server: {
      proxy: { "/api": { target: getApiUrl(), changeOrigin: true } },
    },
    plugins: [],
  },
  sitemap: {
    hostname: hostLink,
    // Убираем страницы noindex из sitemap.xml
    transformItems: (items) => items.filter((item) => !NOINDEX_PAGES.some((path) => item.url.endsWith(path))),
  },

  head: [
    ["link", { rel: "icon", type: "image/avif", href: "/img/Logo.avif" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Golden Fish" }],
    ["meta", { property: "og:url", content: hostLink }],
    ...gtmHead,
  ],
  themeConfig: {
    logo: { light: "/img/Logo.avif", dark: "/img/Logo.avif" },
  },
})
