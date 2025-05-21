import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = ""

export const en = defineConfig({
  description: "Expert UAE company formation and support services. Company setup, banking, tax, legal and visa solutions. Making your business dreams reality!",
  head: [
    ["meta", { property: "og:title", content: "Expert UAE company formation and support services. Company setup, banking, tax, legal and visa solutions." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "InterMind",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [
          { text: "Introduction", link: `${BASE_PATH}/guide/what-is-intermind` },
          { text: "Testimonials", link: `${BASE_PATH}/#what-customers-are-saying` },
        ],
      },
      {
        text: "Mind",
        items: [
          { text: "About", link: `${BASE_PATH}/resources/about` },
          { text: "Contact", link: `${BASE_PATH}/resources/contacts` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
      // [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Privacy Settings</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Privacy Policy</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Legal Regulations for AI Services</a>`,
    },

    localization: {
      placeholder4SearchInput: "Ask anything...",
      placeholder4ChatFooter: "Ask anything...",
      placeholder4ChatList: "Enter chat topic...",
      buttonLabel4NavButton: "Instant expert chat",
    },
    contact_form: {
      name: "Name *",
      namePlaceholder: "your name",
      email: "Email *",
      emailPlaceholder: "your email address",
      phone: "Corp site *",
      phonePlaceholder: "e.g., https://imind.com",
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
        { text: "What is iMind?", link: "what-is-imind" },
        { text: "How it works", link: "how-it-works" },
        { text: "Region-Segmented Privacy Architecture by InterMind", link: "privacy-architecture" },
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
