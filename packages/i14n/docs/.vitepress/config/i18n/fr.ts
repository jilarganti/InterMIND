import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fr"

export const fr = defineConfig({
  description: "Services experts de formation et d'accompagnement d'entreprises aux EAU. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visa. Réalisons vos rêves d'entreprise !",
  head: [
    ["meta", { property: "og:title", content: "Services experts de formation et d'accompagnement d'entreprises aux EAU. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visa." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "InterMind",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [
          {
            text: "PRODUIT",
            items: [
              { text: "Débuter avec InterMIND", link: `${BASE_PATH}/guide/what-is-intermind` },
              { text: "Comment ça marche", link: `${BASE_PATH}/guide/how-it-works` },
              { text: "FAQ", link: `${BASE_PATH}/#frequently-asked-questions` },
            ],
          },
          {
            text: "APERÇUS",
            items: [
              { text: "Témoignages", link: `${BASE_PATH}/#what-customers-are-saying` },
              { text: "Tarification", link: `${BASE_PATH}/#clear-and-simple-pricing` },
            ],
          },
        ],
      },
      {
        text: "Mind",
        activeMatch: `${BASE_PATH}/resources/`,
        items: [
          {
            text: "ENTREPRISE",
            items: [
              { text: "À propos de Mind.com", link: `${BASE_PATH}/resources/about` },
              { text: "Contacts", link: `${BASE_PATH}/resources/contacts` },
            ],
          },
          {
            text: "APERÇUS",
            items: [{ text: "iMind.com", link: "https://imind.com" }],
          },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Paramètres de confidentialité</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Politique de confidentialité</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Réglementations légales pour les services d'IA</a>`,
    },

    localization: {
      placeholder4SearchInput: "Posez n'importe quelle question...",
      placeholder4ChatFooter: "Posez n'importe quelle question...",
      placeholder4ChatList: "Saisissez le sujet du chat...",
      buttonLabel4NavButton: "Chat expert instantané",
    },
    contact_form: {
      name: "Nom *",
      namePlaceholder: "votre nom",
      email: "Email *",
      emailPlaceholder: "votre adresse email",
      phone: "Site d'entreprise *",
      phonePlaceholder: "ex., https://mind.com",
      phoneError: "Veuillez saisir un numéro de téléphone",
      category: "Dites-nous comment nous pouvons vous aider *",
      categoryPlaceholder: "sélectionnez le type de service",
      message: "Discutons de vos objectifs (facultatif)",
      messagePlaceholder: "Veuillez fournir des détails supplémentaires (facultatif)",
      submit: "Envoyer la demande",
      sending: "Envoi en cours...",
      successTitle: "Merci !",
      successMessage: "Nous apprécions grandement votre intérêt ! Notre équipe vous contactera sous peu pour discuter de vos besoins.",
      defaultCategories: [
        "Je suis intéressé par l'interprétation vocale en temps réel",
        "Je suis intéressé par l'assistant de réunion IA",
        "Je suis intéressé par le contrôle des données et de la confidentialité par région",
        "Autre / Non listé",
      ],

      defaultButtonText: "Envoyez-nous un message",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introduction",
      collapsed: false,
      items: [
        { text: "Qu'est-ce que InterMIND ?", link: "what-is-intermind" },
        { text: "Comment ça marche", link: "how-it-works" },
        { text: "Architecture de confidentialité segmentée par région par InterMind", link: "privacy-architecture" },
        { text: "Cas d'utilisation", link: "use-cases" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "À propos", link: "/about" },
    { text: "Contact", link: "/contacts" },
  ]
}