import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fr"

export const fr = defineConfig({
  description:
    "InterMind est une plateforme d'interprétation en temps réel pour les réunions vidéo multilingues. Chaque participant parle sa langue maternelle et entend les autres comme s'ils la parlaient aussi. Pas de plugins. Pas de téléchargements. Juste des conversations naturelles et fluides dans plus de 100 langues.",
  head: [["meta", { property: "og:title", content: "Appels vidéo alimentés par l'interprétation simultanée | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "Produit",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "Entreprise",
        activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/company/about`,
      },
      {
        text: "Ressources",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "Tarification", link: `${BASE_PATH}/#Pricing` },
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Témoignages", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarServices() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Paramètres de confidentialité</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Politique de confidentialité</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Réglementations légales pour les services d'IA</a>`,
    },

    localization: {
      placeholder4SearchInput: "Posez n'importe quelle question...",
      placeholder4ChatFooter: "Posez n'importe quelle question...",
      placeholder4ChatList: "Entrez le sujet du chat...",
      buttonLabel4NavButton: "Chat expert instantané",
      buttonLabel4AuthButton: "Se connecter",
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
      successMessage: "Nous apprécions grandement votre intérêt ! Notre équipe vous contactera prochainement pour discuter de vos besoins.",
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
      text: "Aperçu",
      collapsed: false,
      items: [
        { text: "Qu'est-ce qu'InterMIND ?", link: "overview/what-is-intermind" },
        { text: "Comment ça marche", link: "overview/how-it-works" },
        { text: "Confidentialité des données régionales", link: "overview/privacy-architecture" },
        { text: "Marchés prioritaires", link: "overview/markets" },
      ],
    },
    {
      text: "Guide",
      collapsed: false,
      items: [
        { text: "Premiers pas", link: "guide/getting-started" },
        { text: "Gestion du compte", link: "guide/account-management" },
        { text: "Création de réunions", link: "guide/creating-meetings" },
        { text: "Interface de réunion", link: "guide/meeting-interface" },
        { text: "Rôles des utilisateurs", link: "guide/user-roles" },
        { text: "Fonctionnalités IA", link: "guide/ai-features" },
        { text: "Historique des réunions", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Dépannage", link: "guide/troubleshooting" },
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