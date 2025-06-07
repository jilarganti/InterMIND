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
      {
        text: "Company",
        activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/company/about`,
      },
      {
        text: "Resources",
        activeMatch: `${BASE_PATH}/product/`,
        // items: [
        //   {
        //     text: "EXPLORE",
        items: [
          { text: "Pricing", link: `${BASE_PATH}/#Pricing` },
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Testimonials", link: `${BASE_PATH}/#Testimonials` },
          // { text: "Team", link: `${BASE_PATH}/resources/team` },
          { text: "Media Kit", link: `${BASE_PATH}/resources/media-kit` },
        ],
        //   },
        // ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Privacy Settings</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Privacy Policy</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Legal Regulations for AI Services</a>`,
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
      phone: "Corp site *",
      phonePlaceholder: "e.g., https://mind.com",
      phoneError: "Please enter phone number",
      category: "Please tell us how we can help *",
      categoryPlaceholder: "select service type",
      message: "Let's discuss your goals (optional)",
      messagePlaceholder: "Please provide any additional details (optional)",
      submit: "Submit request",
      sending: "Sending...",
      successTitle: "Thank you!",
      successMessage: "We greatly appreciate your interest! Our team will contact you shortly to discuss your needs.",
      defaultCategories: [
        "I'm interested in real-time voice interpretation",
        "I'm interested in the AI meeting assistant",
        "I'm interested in region-based privacy & data control",
        "Other / Not listed",
      ],

      defaultButtonText: "Send us a message",
      // defaultButtonText: "Get a free consultation",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Overview",
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
      text: "Guide",
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

function sidebarCompany(): DefaultTheme.SidebarItem[] {
  return [
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contacts" },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    // { text: "Team", link: "/team" },
    { text: "Media Kit", link: "/media-kit" },
  ]
}
