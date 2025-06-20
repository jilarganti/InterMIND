import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = ""

export const en = defineConfig({
  description:
    "InterMIND adds real-time speech translation to every video call, so international teams never lose deals, time, or clarity to language barriers.",
  head: [["meta", { property: "og:title", content: "Video calls powered by simultaneous interpretation | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "Product",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      // {
      //   text: "Company",
      //   activeMatch: `${BASE_PATH}/company/`,
      //   link: `${BASE_PATH}/company/about`,
      // },
      {
        text: "Pricing",
        // activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Resources",
        activeMatch: `${BASE_PATH}/product/`,
        // items: [
        //   {
        //     text: "EXPLORE",
        items: [
          // { text: "Pricing", link: `${BASE_PATH}/#Pricing` },
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Testimonials", link: `${BASE_PATH}/#Testimonials` },
          // { text: "Team", link: `${BASE_PATH}/resources/team` },
          // { text: "Media Kit", link: `${BASE_PATH}/resources/media-kit` },
        ],
        //   },
        // ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/account/`]: { base: `${BASE_PATH}/account/`, items: sidebarAccount() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Privacy Settings</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Privacy Policy</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Legal Regulations for AI Services</a> | <a href="https://status.mind.com/">Service status</a>`,
    },

    localization: {
      placeholder4SearchInput: "Ask anything...",
      placeholder4ChatFooter: "Ask anything...",
      placeholder4ChatList: "Enter chat topic...",
      buttonLabel4NavButton: "Instant expert chat",
      buttonLabel4AuthButton: "Sign in",
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
        // { text: "Team", link: "/team" },
        { text: "Contacts", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarAccount(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Meetings", link: "/" },
    { text: "History", link: "/" },
  ]
}
