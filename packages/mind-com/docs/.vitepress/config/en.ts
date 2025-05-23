import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = ""

export const en = defineConfig({
  description:
    "Multilingual meetings don’t need Zoom, plugins, or interpreters. InterMind is an AI voice translator for real-time video calls — speak and translate instantly.",
  head: [
    ["meta", { property: "og:title", content: "AI Voice Translator for Live Video Calls | InterMIND" }],
    [
      "meta",
      {
        name: "keywords",
        content: "AI voice translator, real-time translation, translate video calls, multilingual meetings, Zoom translator alternative, interpreter tool",
      },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "Product",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/what-is-intermind`,
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
          { text: "Pricing", link: `${BASE_PATH}/#clear-and-simple-pricing` },
          { text: "FAQ", link: `${BASE_PATH}/#frequently-asked-questions` },
          { text: "Testimonials", link: `${BASE_PATH}/#what-customers-are-saying` },
        ],
        //   },
        // ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarServices() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarInsights() },
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

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "What is InterMIND?", link: "what-is-intermind" },
        { text: "How it Works", link: "how-it-works" },
        { text: "Regional Data Privacy", link: "privacy-architecture" },
        { text: "Use cases", link: "use-cases" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contacts" },
  ]
}
