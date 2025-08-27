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
        text: "Product",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "Pricing",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Resources",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Testimonials", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
      [`${BASE_PATH}/account/`]: { base: `${BASE_PATH}/account/`, items: sidebarAccount() },
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

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "OVERVIEW",
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
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "SUPPORT",
      collapsed: false,
      items: [
        { text: "Get Support", link: "/help" },
        { text: "Privacy Policy", link: "/company/Privacy-Policy" },
        { text: "AI Legal Guide", link: "/company/Legal-Regulations-for-AI-Services" },
      ],
    },
    // {
    //   text: "RESOURCES",
    //   collapsed: false,
    //   items: [
    //     { text: "Brand Assets", link: "/media-kit" },
    //     // { text: "Account Management", link: "guide/account-management" },
    //   ],
    // },
    {
      text: "COMPANY",
      collapsed: false,
      items: [
        { text: "About", link: "/company/about" },
        { text: "Team", link: "/company/team" },
        { text: "Careers", link: "/company/careers" },
        { text: "Contacts", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Executive Summary", link: "/InterMind-Executive-Summary" },
    { text: "Go To Market Strategy", link: "/go-to-market-strategy" },
    { text: "Investor Pitch", link: "/InterMind-Investor-Pitch" },
    { text: "Financial Projections Justification (Yr 1–3)", link: "/Financial-Projections-Justification" },
  ]
}

function sidebarAccount(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "HOME",
      link: "/",
    },
    {
      text: "MEETINGS",
      collapsed: false,
      items: [
        { text: "Meetings", link: "/meetings" },
        { text: "History", link: "/history" },
        { text: "Upgrade", link: "/upgrade" },
      ],
    },

    {
      text: "SETTINGS",
      collapsed: true,
      items: [
        { text: "Profile", link: "/settings/profile" },
        { text: "Settings", link: "/settings/settings" },
        { text: "Settings", link: "/settings/upgrade" },
      ],
    },
  ]
}
