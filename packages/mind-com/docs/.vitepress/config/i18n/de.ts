import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/de"

export const de = defineConfig({
  description:
    "InterMind ist eine Echtzeit-Dolmetschplattform für mehrsprachige Videomeetings. Jeder Teilnehmer spricht in seiner Muttersprache — und hört andere, als würden sie es auch tun. Keine Plugins. Keine Downloads. Nur nahtlose, natürliche Gespräche in über 30 Sprachen.",
  head: [["meta", { property: "og:title", content: "Videoanrufe mit Simultandolmetschen | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "Produkt",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "Unternehmen",
        activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/company/about`,
      },
      {
        text: "Ressourcen",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "Preise", link: `${BASE_PATH}/#Pricing` },
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Referenzen", link: `${BASE_PATH}/#Testimonials` },
          { text: "Medienkit", link: `${BASE_PATH}/resources/media-kit` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Datenschutzeinstellungen</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Datenschutzerklärung</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Rechtliche Bestimmungen für KI-Dienste</a>`,
    },

    localization: {
      placeholder4SearchInput: "Fragen Sie alles...",
      placeholder4ChatFooter: "Fragen Sie alles...",
      placeholder4ChatList: "Chat-Thema eingeben...",
      buttonLabel4NavButton: "Sofortiger Experten-Chat",
      buttonLabel4AuthButton: "Anmelden",
    },
    contact_form: {
      name: "Name *",
      namePlaceholder: "Ihr Name",
      email: "E-Mail *",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      phone: "Firmenwebsite *",
      phonePlaceholder: "z.B. https://mind.com",
      phoneError: "Bitte Telefonnummer eingeben",
      category: "Bitte teilen Sie uns mit, wie wir helfen können *",
      categoryPlaceholder: "Servicetyp auswählen",
      message: "Lassen Sie uns Ihre Ziele besprechen (optional)",
      messagePlaceholder: "Bitte geben Sie zusätzliche Details an (optional)",
      submit: "Anfrage senden",
      sending: "Wird gesendet...",
      successTitle: "Vielen Dank!",
      successMessage: "Wir schätzen Ihr Interesse sehr! Unser Team wird Sie in Kürze kontaktieren, um Ihre Bedürfnisse zu besprechen.",
      defaultCategories: [
        "Ich interessiere mich für Echtzeit-Sprachdolmetschen",
        "Ich interessiere mich für den KI-Meeting-Assistenten",
        "Ich interessiere mich für regionsbasierte Datenschutz- und Datenkontrolle",
        "Sonstiges / Nicht aufgeführt",
      ],

      defaultButtonText: "Senden Sie uns eine Nachricht",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Überblick",
      collapsed: false,
      items: [
        { text: "Was ist InterMIND?", link: "overview/what-is-intermind" },
        { text: "Funktionsweise", link: "overview/how-it-works" },
        { text: "Regionaler Datenschutz", link: "overview/privacy-architecture" },
        { text: "Prioritätsmärkte", link: "overview/markets" },
      ],
    },
    {
      text: "Anleitung",
      collapsed: false,
      items: [
        { text: "Erste Schritte", link: "guide/getting-started" },
        { text: "Kontoverwaltung", link: "guide/account-management" },
        { text: "Meetings erstellen", link: "guide/creating-meetings" },
        { text: "Meeting-Oberfläche", link: "guide/meeting-interface" },
        { text: "Benutzerrollen", link: "guide/user-roles" },
        { text: "KI-Funktionen", link: "guide/ai-features" },
        { text: "Meeting-Verlauf", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Fehlerbehebung", link: "guide/troubleshooting" },
      ],
    },
  ]
}

function sidebarCompany(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Über uns", link: "/about" },
    { text: "Kontakt", link: "/contacts" },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Medienkit", link: "/media-kit" },
  ]
}