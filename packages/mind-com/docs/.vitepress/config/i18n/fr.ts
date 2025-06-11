import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fr"

export const fr = defineConfig({
  description:
    "InterMIND ajoute la traduction vocale en temps réel à chaque appel vidéo, permettant aux équipes internationales de ne jamais perdre d'opportunités, de temps ou de clarté à cause des barrières linguistiques.",
  head: [["meta", { property: "og:title", content: "Appels vidéo propulsés par l'interprétation simultanée | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "Produit",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "Tarification",
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
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Paramètres de confidentialité</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Politique de confidentialité</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Réglementations légales pour les services d'IA</a> | <a href="https://status.mind.com/">État du service</a>`,
    },

    localization: {
      placeholder4SearchInput: "Posez n'importe quelle question...",
      placeholder4ChatFooter: "Posez n'importe quelle question...",
      placeholder4ChatList: "Entrez le sujet de discussion...",
      buttonLabel4NavButton: "Chat expert instantané",
      buttonLabel4AuthButton: "Se connecter",
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
  },
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
        { text: "Contacts", link: "/company/contacts" },
      ],
    },
  ]
}