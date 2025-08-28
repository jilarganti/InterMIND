/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"

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
        activeMatch: `${BASE_PATH}/docs/`,
        link: `${BASE_PATH}/nuxt/getting-started/introduction`,
      },
    ],

    sidebar: {
      [`${BASE_PATH}/docs/`]: { base: `${BASE_PATH}/docs/`, items: sidebarDocs() },
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

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "GETTING STARTED",
      collapsed: false,
      items: [
        { text: "What is InterMIND?", link: "overview/what-is-intermind" },
        { text: "How it Works", link: "overview/how-it-works" },
        { text: "Video Meeting Platform", link: "overview/video-meeting-platform" },
        { text: "Regional Data Privacy", link: "overview/privacy-architecture" },
        { text: "Priority Markets", link: "overview/markets" },
      ],
    },
    {
      text: "GUIDE",
      collapsed: false,
      items: [
        { text: "Getting Started", link: "guide/getting-started" },
        { text: "Account Management", link: "guide/account-management" },
        { text: "Creating Meetings", link: "guide/creating-meetings" },
        { text: "Meeting Interface", link: "guide/meeting-interface" },
        { text: "User Roles", link: "guide/user-roles" },
        { text: "AI Features", link: "guide/ai-features" },
        { text: "Meeting History", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Troubleshooting", link: "guide/troubleshooting" },
        { text: "Pricing", link: "guide/pricing" },
        { text: "Help & Support", link: "guide/help-support" },
      ],
    },
    {
      text: "API",
      collapsed: false,
      items: [
        { text: "Getting Started", link: "guide/getting-started" },
        { text: "Account Management", link: "guide/account-management" },
        { text: "Creating Meetings", link: "guide/creating-meetings" },
        { text: "Meeting Interface", link: "guide/meeting-interface" },
        { text: "User Roles", link: "guide/user-roles" },
        { text: "AI Features", link: "guide/ai-features" },
        { text: "Meeting History", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Troubleshooting", link: "guide/troubleshooting" },
        { text: "Pricing", link: "guide/pricing" },
        { text: "Help & Support", link: "guide/help-support" },
      ],
    },
  ]
}
