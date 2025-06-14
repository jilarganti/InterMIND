import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/de"

export const de = defineConfig({
  description:
    "InterMIND fügt Echtzeit-Sprachübersetzung zu jedem Videoanruf hinzu, damit internationale Teams niemals Geschäfte, Zeit oder Klarheit durch Sprachbarrieren verlieren.",
  head: [["meta", { property: "og:title", content: "Videoanrufe mit simultaner Übersetzung | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "Produkt",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      // {
      //   text: "Unternehmen",
      //   activeMatch: `${BASE_PATH}/company/`,
      //   link: `${BASE_PATH}/company/about`,
      // },
      {
        text: "Preise",
        // activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Ressourcen",
        activeMatch: `${BASE_PATH}/product/`,
        // items: [
        //   {
        //     text: "ERKUNDEN",
        items: [
          // { text: "Preise", link: `${BASE_PATH}/#Pricing` },
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
      // [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Datenschutz-Einstellungen</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Datenschutzrichtlinie</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Rechtliche Bestimmungen für KI-Dienste</a> | <a href="https://status.mind.com/">Service-Status</a>`,
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
      webSite: "Unternehmens-Website *",
      webSitePlaceholder: "z.B. https://firmenname.com",
      webSiteError: "Bitte geben Sie die Website ein",
      category: "Was ist Ihr Hauptziel? *",
      categoryPlaceholder: "Wählen Sie, was am wichtigsten ist",
      message: "Lassen Sie uns über Ihre Ziele sprechen (optional)",
      messagePlaceholder: "Bitte geben Sie zusätzliche Details an (optional)",
      submit: "Anfrage senden",
      sending: "Wird gesendet...",
      successTitle: "Vielen Dank!",
      successMessage: "Wir haben Ihre Nachricht erhalten — unser Team wird sich in Kürze bei Ihnen melden.",
      defaultCategories: [
        "Sprachbarrieren in Meetings beseitigen",
        "Meetings durchsuchbar und umsetzbar machen",
        "Compliance & Datenresidenz sicherstellen (EU / US / Asien)",
        "Nur am Erkunden / Sonstiges",
      ],

      defaultButtonText: "Senden Sie uns eine Nachricht",
      // defaultButtonText: "Kostenlose Beratung erhalten",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ÜBERBLICK",
      collapsed: false,
      items: [
        { text: "Was ist InterMIND?", link: "overview/what-is-intermind" },
        { text: "Wie es funktioniert", link: "overview/how-it-works" },
        { text: "Video-Meeting-Plattform", link: "overview/video-meeting-platform" },
        { text: "Regionaler Datenschutz", link: "overview/privacy-architecture" },
        { text: "Prioritätsmärkte", link: "overview/markets" },
      ],
    },
    {
      text: "ANLEITUNG",
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

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "SUPPORT",
      collapsed: false,
      items: [
        { text: "Support erhalten", link: "/help" },
        // { text: "Wie es funktioniert", link: "overview/how-it-works" },
      ],
    },
    {
      text: "RESSOURCEN",
      collapsed: false,
      items: [
        { text: "Marken-Assets", link: "/media-kit" },
        // { text: "Kontoverwaltung", link: "guide/account-management" },
      ],
    },
    {
      text: "UNTERNEHMEN",
      collapsed: false,
      items: [
        { text: "Über uns", link: "/company/about" },
        // { text: "Team", link: "/team" },
        { text: "Kontakte", link: "/company/contacts" },
      ],
    },
  ]
}

// function sidebarResources(): DefaultTheme.SidebarItem[] {
//   return [
//     { text: "Über uns", link: "/about" },
//     { text: "Kontakte", link: "/contacts" },
//     { text: "Support erhalten", link: "/help" },
//     { text: "Marken-Assets", link: "/media-kit" },
//   ]
// }
