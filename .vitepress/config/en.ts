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
        text: "Services",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Company registration", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "Banking solutions", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "Migration", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "Resources",
        items: [{ text: "About", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Contact", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: '©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Privacy Settings</a>',
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
      messagePlaceholder: "describe your project or requirements",
      submit: "Submit request",
      sending: "Sending...",
      successTitle: "Thank you!",
      successMessage: "We greatly appreciate your interest! Our team will contact you shortly to discuss your needs.",
      defaultCategories: ["Company registration", "Opening bank accounts", "EID & Golden Visa", "Other Services"],
      defaultButtonText: "Get a free consultation",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAE business summary",
      collapsed: false,
      items: [
        { text: "Company registration", link: "company-registration/overview" },
        { text: "Pros & cons", link: "company-registration/benefits-problems" },
        { text: "Corporate banking solutions", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "Visas & EID", link: "company-registration/employment-visas" },
        { text: "Fees and timelines", link: "company-registration/fees-timelines" },
      ],
    },
    {
      text: "UAE corporate structures",
      collapsed: true,
      items: [
        { text: "Company registration steps", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAE business compliance guaranteed",
      collapsed: true,
      items: [
        { text: "Guaranteed corporate bank account approvals", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Bank accounts for high-risk business", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Keep your business compliant and protected", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Legal, accounting and tax",
      collapsed: true,
      items: [
        { text: "Accounting and tax considerations", link: "company-registration/accounting-legal" },
        { text: "UBO register", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Comparisons",
      collapsed: true,
      items: [
        { text: "Mainland vs free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE entities compared", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [{ text: "About", link: `about` }]
}

function sidebarContactUs(): DefaultTheme.SidebarItem[] {
  return [{ text: "Contacts", link: `contacts` }]
}
