import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = ""

export const en = defineConfig({
  description: "InterMIND provides real-time speech translation for video calls — eliminating language barriers instantly. Powered by the mind.com team.",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND provides real-time speech translation for video calls — eliminating language barriers instantly. Powered by the mind.com team.",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | Real-time Speech Translation for Global Teams" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND offers instant speech translation in video calls — clear, multilingual communication without barriers. Powered by the mind.com team.",
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
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Privacy Settings</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Privacy Policy</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Legal Regulations for AI Services</a> | <a href="https://status.mind.com/">Service status</a>`,
    },

    localization: {
      placeholder4SearchInput: "Ask anything...",
      placeholder4ChatFooter: "Ask anything...",
      placeholder4ChatList: "Enter chat topic...",
      buttonLabel4NavButton: "Instant expert chat",
      buttonLabel4SignInButton: "Sign in",
      buttonLabel4GetStartedButton: "Get started",
    },
    contact_form: {
      name: "Name *",
      namePlaceholder: "your name",
      email: "Email *",
      emailPlaceholder: "your email address",
      webSite: "Company website *",
      webSitePlaceholder: "e.g. https://companyname.com",
      webSiteError: "Please enter webSite number",
      category: "What’s your primary goal? *",
      categoryPlaceholder: "Choose what matters most",
      message: "Let's discuss your goals (optional)",
      messagePlaceholder: "Please provide any additional details (optional)",
      submit: "Submit request",
      sending: "Sending...",
      successTitle: "Thank you!",
      successMessage: "We’ve received your message — our team will be in touch shortly.",
      defaultCategories: [
        "Eliminate language barriers in meetings",
        "Make meetings searchable and actionable",
        "Ensure compliance & data residency (EU / US / Asia)",
        "Just exploring / Other",
      ],

      defaultButtonText: "Send us a message",
      // defaultButtonText: "Get a free consultation",
    },
  } as DefaultTheme.Config,
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
        // { text: "How it Works", link: "overview/how-it-works" },
      ],
    },
    {
      text: "RESOURCES",
      collapsed: false,
      items: [
        { text: "Brand Assets", link: "/media-kit" },
        // { text: "Account Management", link: "guide/account-management" },
      ],
    },
    {
      text: "COMPANY",
      collapsed: false,
      items: [
        { text: "About", link: "/company/about" },
        { text: "Team", link: "/company/team" },
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
