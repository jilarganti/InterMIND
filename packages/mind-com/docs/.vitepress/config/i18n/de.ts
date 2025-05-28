import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/de"

export const de = defineConfig({
  description:
    "InterMind ist eine Echtzeit-Dolmetschplattform für mehrsprachige Videomeetings. Jeder Teilnehmer spricht in seiner Muttersprache — und hört andere, als würden sie es auch tun. Keine Plugins. Keine Downloads. Nur nahtlose, natürliche Gespräche in über 100 Sprachen.",
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
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarServices() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Datenschutzeinstellungen</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Datenschutzerklärung</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Rechtliche Bestimmungen für KI-Dienste</a>`,
    },

    localization: {
      placeholder4SearchInput: "Fragen Sie alles...",
      placeholder4ChatFooter: "Fragen Sie alles...",
      placeholder4ChatList: "Chat-Thema eingeben...",
      buttonLabel4NavButton: "Sofort-Expertenchat",
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
      submit: "Anfrage absenden",
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

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Überblick",
      collapsed: false,
      items: [
        { text: "Was ist InterMIND?", link: "overview/what-is-intermind" },
        { text: "Funktionsweise", link: "overview/how-it-works" },
        { text: "Regionaler Datenschutz", link: "overview/privacy-architecture" },
        { text: "Hauptmärkte", link: "overview/markets" },
      ],
    },
    {
      text: "Anleitung",
      collapsed: false,
      items: [{ text: "Erste Schritte", link: "guide/getting-started" }],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Über uns", link: "/about" },
    { text: "Kontakt", link: "/contacts" },
  ]
}