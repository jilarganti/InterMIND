import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fr"

export const fr = defineConfig({
  description: "InterMIND offre la traduction vocale en temps réel pour les appels vidéo — éliminant instantanément les barrières linguistiques. Propulsé par l'équipe mind.com.",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND offre la traduction vocale en temps réel pour les appels vidéo — éliminant instantanément les barrières linguistiques. Propulsé par l'équipe mind.com.",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | Traduction Vocale en Temps Réel pour les Équipes Internationales" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND propose une traduction vocale instantanée lors des appels vidéo — une communication multilingue claire sans barrières. Propulsé par l'équipe mind.com.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "Produit",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },

      {
        text: "Tarifs",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Ressources",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Témoignages", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Paramètres de confidentialité</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Politique de confidentialité</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Réglementations légales pour les services d\'IA</a> | <a href="https://status.mind.com/">État du service</a>`,
    },

    localization: {
      placeholder4SearchInput: "Posez n'importe quelle question...",
      placeholder4ChatFooter: "Posez n'importe quelle question...",
      placeholder4ChatList: "Entrez le sujet de discussion...",
      buttonLabel4NavButton: "Assistant",
      buttonLabel4SignInButton: "Se connecter",
      buttonLabel4GetStartedButton: "Commencer",
    },
    contact_form: {
      name: "Nom *",
      namePlaceholder: "votre nom",
      email: "Email *",
      emailPlaceholder: "votre adresse email",
      webSite: "Site web de l'entreprise *",
      webSitePlaceholder: "ex. https://nomsociete.com",
      webSiteError: "Veuillez saisir le site web",
      category: "Quel est votre objectif principal ? *",
      categoryPlaceholder: "Choisissez ce qui compte le plus",
      message: "Discutons de vos objectifs (facultatif)",
      messagePlaceholder: "Veuillez fournir des détails supplémentaires (facultatif)",
      submit: "Envoyer la demande",
      sending: "Envoi en cours...",
      successTitle: "Merci !",
      successMessage: "Nous avons reçu votre message — notre équipe vous contactera bientôt.",
      defaultCategories: [
        "Éliminer les barrières linguistiques dans les réunions",
        "Rendre les réunions consultables et exploitables",
        "Assurer la conformité et la résidence des données (UE / US / Asie)",
        "Simple exploration / Autre",
      ],

      defaultButtonText: "Envoyez-nous un message",
    },
  } as DefaultTheme.Config,
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "APERÇU",
      collapsed: false,
      items: [
        { text: "Qu'est-ce qu'InterMIND ?", link: "overview/what-is-intermind" },
        { text: "Comment ça marche", link: "overview/how-it-works" },
        { text: "Plateforme de réunion vidéo", link: "overview/video-meeting-platform" },
        { text: "Confidentialité des données régionales", link: "overview/privacy-architecture" },
        { text: "Marchés prioritaires", link: "overview/markets" },
      ],
    },
    {
      text: "GUIDE",
      collapsed: false,
      items: [
        { text: "Premiers pas", link: "guide/getting-started" },
        { text: "Gestion du compte", link: "guide/account-management" },
        { text: "Création de réunions", link: "guide/creating-meetings" },
        { text: "Interface de réunion", link: "guide/meeting-interface" },
        { text: "Rôles utilisateurs", link: "guide/user-roles" },
        { text: "Fonctionnalités IA", link: "guide/ai-features" },
        { text: "Historique des réunions", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Dépannage", link: "guide/troubleshooting" },
        { text: "Tarification", link: "guide/pricing" },
        { text: "Aide & Support", link: "guide/help-support" },
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
        { text: "Obtenir de l'aide", link: "/help" },
      ],
    },
    {
      text: "RESSOURCES",
      collapsed: false,
      items: [
        { text: "Ressources de marque", link: "/media-kit" },
      ],
    },
    {
      text: "ENTREPRISE",
      collapsed: false,
      items: [
        { text: "À propos", link: "/company/about" },
        { text: "Équipe", link: "/company/team" },
        { text: "Contacts", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Résumé exécutif", link: "/InterMind-Executive-Summary" },
    { text: "Stratégie de mise sur le marché", link: "/go-to-market-strategy" },
    { text: "Présentation aux investisseurs", link: "/InterMind-Investor-Pitch" },
    { text: "Justification des projections financières (An 1-3)", link: "/Financial-Projections-Justification" },
  ]
}