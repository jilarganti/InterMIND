import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fr"

export const fr = defineConfig({
  description: "Services experts de formation d'entreprise aux EAU et services de support. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visa. Réalisons vos rêves d'entreprise !",
  head: [
    ["meta", { property: "og:title", content: "Services experts de formation d'entreprise aux EAU et services de support. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visa." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "Guide",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [{ text: "Introduction", link: `${BASE_PATH}/guide/what-is-imind` }],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Paramètres de confidentialité</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Politique de confidentialité</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Réglementations légales pour les services d'IA</a>`,
    },

    localization: {
      placeholder4SearchInput: "Posez n'importe quelle question...",
      placeholder4ChatFooter: "Posez n'importe quelle question...",
      placeholder4ChatList: "Entrez le sujet de discussion...",
      buttonLabel4NavButton: "Chat expert instantané",
    },
    contact_form: {
      name: "Nom *",
      namePlaceholder: "votre nom",
      email: "E-mail *",
      emailPlaceholder: "votre adresse e-mail",
      phone: "Site d'entreprise *",
      phonePlaceholder: "par ex., https://imind.com",
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