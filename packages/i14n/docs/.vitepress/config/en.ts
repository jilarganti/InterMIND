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
        text: "Giude",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [{ text: "Introduction", link: `${BASE_PATH}/guide/what-is-intermind` }],
      },
      // {
      //   text: "Resources",
      //   items: [
      //     { text: "About", link: `${BASE_PATH}/resources/about` },
      //     { text: "Contact", link: `${BASE_PATH}/resources/contacts` },
      //   ],
      // },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
      // [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© MindMeeting OÜ, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Privacy Settings</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Privacy Policy</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Legal Regulations for AI Services</a>`,
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
      phone: "Phone *",
      phonePlaceholder: "e.g., +1 1234567890 or (1) 123 456-7890",
      phoneError: "Please enter phone number",
      category: "How can we help you? *",
      categoryPlaceholder: "select service type",
      message: "Let's discuss your goals (optional)",
      messagePlaceholder: "Please share your inquiry details to help us prepare the best solution for your needs",
      submit: "Submit request",
      sending: "Sending...",
      successTitle: "Thank you!",
      successMessage: "We greatly appreciate your interest! Our team will contact you shortly to discuss your needs.",
      defaultCategories: [
        "New company formation",
        "Expansion plan (ie. new branch or franchise)",
        "Company relocation",
        "Golden Visa",
        "Visa purposes only",
        "Opening bank accounts",
        "Other Services",
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
        { text: "What is InterMind?", link: "what-is-intermind" },
        { text: "Region-Segmented Privacy Architecture by InterMind", link: "privacy-architecture" },
        { text: "How it works", link: "how-it-works" },
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
