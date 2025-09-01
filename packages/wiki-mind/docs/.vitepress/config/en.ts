/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"
import fs from "fs"
import path from "path"

const BASE_PATH = ""

export const en = defineConfig({
  description:
    "Professional video conferencing with simultaneous interpretation in 19+ languages. AI-powered translation that captures tone, intent, and context for global teams.",
  head: [
    ["meta", { property: "og:title", content: "InterMIND | Real-time Speech Translation for Global Teams" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Professional video conferencing with simultaneous voice interpretation in 19+ languages. Meet globally, communicate naturally with AI-powered translation.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "Docs",
        activeMatch: `${BASE_PATH}/nuxt/docs/`,
        link: `${BASE_PATH}/nuxt/docs/getting-started/introduction`,
      },
    ],

    sidebar: {
      // [`${BASE_PATH}/nuxt/`]: { base: `${BASE_PATH}/nuxt/`, items: sidebarDocs() },
      [`${BASE_PATH}/nuxt/docs/`]: { base: `${BASE_PATH}/nuxt/docs/`, items: generateSidebar() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Privacy Settings</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Privacy Policy</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Legal Regulations for AI Services</a> | <a href="https://status.mind.com/">Service status</a>`,
    },

    localization: {
      placeholder4SearchInput: "Ask anything...",
      placeholder4ChatFooter: "Ask anything...",
      placeholder4ChatList: "Enter chat topic...",
      buttonLabel4NavButton: "Assistant",
      buttonLabel4SignInButton: "Sign in",
      buttonLabel4GetStartedButton: "Get started",
      buttonLabel4TryItButton: "Try for free",
      buttonLabel4BackToBlog: "← Back to the blog",
    },
    contact_form: {
      name: "Name *",
      namePlaceholder: "your name",
      email: "Email *",
      emailPlaceholder: "your email address",
      webSite: "Company website",
      webSitePlaceholder: "e.g. https://companyname.com",
      webSiteError: "Please enter webSite",
      category: "What’s your primary goal? *",
      categoryPlaceholder: "Choose what matters most",
      message: "Let's discuss your goals (optional)",
      messagePlaceholder: "Please provide any additional details (optional)",
      submit: "Submit request",
      sending: "Sending...",
      successTitle: "Thank you!",
      successMessage: "We’ve received your message — our team will be in touch shortly.",
      defaultCategories: [],

      defaultButtonText: "Send us a message",
      // defaultButtonText: "Get a free consultation",
    },
  },
})

// Function to automatically generate sidebar from file structure
function generateSidebar(): DefaultTheme.SidebarItem[] {
  // Determine the correct path based on BASE_PATH
  const basePath = BASE_PATH as string
  const isLocalized = basePath && basePath !== ""
  const langPath = isLocalized ? basePath.replace("/", "") : "en"
  const nuxtPath = isLocalized ? path.resolve(__dirname, `../../../i18n/${langPath}/nuxt`) : path.resolve(__dirname, "../../en/nuxt")

  if (!fs.existsSync(nuxtPath)) {
    return []
  }

  const sections: DefaultTheme.SidebarItem[] = []
  const folders = fs
    .readdirSync(nuxtPath)
    .filter((name) => {
      const fullPath = path.join(nuxtPath, name)
      return fs.statSync(fullPath).isDirectory()
    })
    .sort()

  for (const folder of folders) {
    const folderPath = path.join(nuxtPath, folder)
    const folderName = folder.replace(/^\d+\./, "") // Remove numeric prefix

    // Get section title from folder name
    let sectionTitle = folderName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    // Helper function to process files and subdirectories
    function processDirectory(dirPath: string, basePath: string): DefaultTheme.SidebarItem[] {
      const dirItems: DefaultTheme.SidebarItem[] = []
      const entries = fs.readdirSync(dirPath).sort()

      for (const entry of entries) {
        const entryPath = path.join(dirPath, entry)
        const stat = fs.statSync(entryPath)

        if (stat.isDirectory() && !entry.startsWith(".")) {
          // Process subdirectory
          const subDirName = entry.replace(/^\d+\./, "")
          const subDirTitle = subDirName
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

          const subItems = processDirectory(entryPath, `${basePath}/${subDirName}`)

          if (subItems.length > 0) {
            dirItems.push({
              text: subDirTitle,
              collapsed: true,
              items: subItems,
            })
          }
        } else if (entry.endsWith(".md") && !entry.match(/(\d+\.)?index\.md$/)) {
          // Process markdown file
          const fileName = entry.replace(/\.md$/, "").replace(/^\d+\./, "")

          // Convert filename to readable title
          let title = fileName
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

          dirItems.push({
            text: title,
            link: `${basePath}/${fileName}`,
          })
        }
      }

      return dirItems
    }

    const sectionItems = processDirectory(folderPath, folderName)

    if (sectionItems.length > 0) {
      sections.push({
        text: sectionTitle,
        collapsed: false,
        items: sectionItems,
      })
    }
  }

  return sections
}
