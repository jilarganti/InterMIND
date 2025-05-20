import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fr"

export const fr = defineConfig({
  description: "Services experts de formation et d'accompagnement d'entreprises aux EAU. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visas. Réalisons vos rêves professionnels !",
  head: [
    ["meta", { property: "og:title", content: "Services experts de formation et d'accompagnement d'entreprises aux EAU. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visas." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "/mind",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [{ text: "Introduction", link: `${BASE_PATH}/guide/what-is-imind` }],
      },
      {
        text: "mind",
        items: [
          { text: "À propos", link: `${BASE_PATH}/resources/about` },
          { text: "Contact", link: `${BASE_PATH}/resources/contacts` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Paramètres de confidentialité</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Politique de confidentialité</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Réglementations légales pour les services d'IA</a>`,
    },

    localization: {
      placeholder4SearchInput: "Posez votre question...",
      placeholder4ChatFooter: "Posez votre question...",
      placeholder4ChatList: "Entrez le sujet de discussion...",
      buttonLabel4NavButton: "Chat expert instantané",
    },
    contact_form: {
      name: "Nom *",
      namePlaceholder: "votre nom",
      email: "Email *",
      emailPlaceholder: "votre adresse email",
      phone: "Site d'entreprise *",
      phonePlaceholder: "ex., https://imind.com",
      phoneError: "Veuillez saisir un numéro de téléphone",
      category: "Dites-nous comment nous pouvons vous aider *",
      categoryPlaceholder: "sélectionnez le type de service",
      message: "Discutons de vos objectifs (facultatif)",
      messagePlaceholder: "Veuillez fournir des détails supplémentaires (facultatif)",
      submit: "Envoyer la demande",
      sending: "Envoi en cours...",
      successTitle: "Merci !",
      successMessage: "Nous apprécions grandement votre intérêt ! Notre équipe vous contactera prochainement pour discuter de vos besoins.",
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
        { text: "Qu'est-ce que iMind ?", link: "what-is-imind" },
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