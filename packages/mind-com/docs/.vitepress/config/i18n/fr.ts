import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fr"

export const fr = defineConfig({
  description:
    "Les réunions multilingues n'ont pas besoin de Zoom, de plugins ou d'interprètes. InterMind est un traducteur vocal IA pour les appels vidéo en temps réel — parlez et traduisez instantanément.",
  head: [
    ["meta", { property: "og:title", content: "Traducteur Vocal IA pour Appels Vidéo en Direct | InterMIND" }],
    [
      "meta",
      {
        name: "keywords",
        content: "traducteur vocal IA, traduction en temps réel, traduire appels vidéo, réunions multilingues, alternative à Zoom traducteur, outil d'interprétation",
      },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "Produit",
        activeMatch: `${BASE_PATH}/guide/`,
        link: `${BASE_PATH}/guide/what-is-intermind`,
      },
      {
        text: "Entreprise",
        activeMatch: `${BASE_PATH}/resources/`,
        link: `${BASE_PATH}/resources/about`,
      },
      {
        text: "Ressources",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [
          { text: "Tarification", link: `${BASE_PATH}/#clear-and-simple-pricing` },
          { text: "FAQ", link: `${BASE_PATH}/#frequently-asked-questions` },
          { text: "Témoignages", link: `${BASE_PATH}/#what-customers-are-saying` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Paramètres de confidentialité</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Politique de confidentialité</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Réglementations légales pour les services IA</a>`,
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
      email: "Email *",
      emailPlaceholder: "votre adresse email",
      phone: "Site d'entreprise *",
      phonePlaceholder: "ex., https://mind.com",
      phoneError: "Veuillez entrer un numéro de téléphone",
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
        "Je suis intéressé par le contrôle des données et la confidentialité régionale",
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
        { text: "Qu'est-ce qu'InterMIND ?", link: "what-is-intermind" },
        { text: "Comment ça marche", link: "how-it-works" },
        { text: "Confidentialité des données régionales", link: "privacy-architecture" },
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