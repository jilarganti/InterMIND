/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fr"

export const fr = defineConfig({
  description:
    "Visioconférence professionnelle avec interprétation simultanée en plus de 19 langues. Traduction alimentée par l'IA qui capture le ton, l'intention et le contexte pour les équipes mondiales.",
  head: [
    ["meta", { property: "og:title", content: "InterMIND | Traduction vocale en temps réel pour les équipes mondiales" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Visioconférence professionnelle avec interprétation vocale simultanée en plus de 19 langues. Rencontrez-vous mondialement, communiquez naturellement avec la traduction alimentée par l'IA.",
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
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Paramètres de confidentialité</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Politique de confidentialité</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Réglementations légales pour les services d'IA</a> | <a href="https://status.mind.com/">Statut du service</a>`,
    },

    localization: {
      placeholder4SearchInput: "Demandez n'importe quoi...",
      placeholder4ChatFooter: "Demandez n'importe quoi...",
      placeholder4ChatList: "Entrez le sujet de discussion...",
      buttonLabel4NavButton: "Assistant",
      buttonLabel4SignInButton: "Se connecter",
      buttonLabel4GetStartedButton: "Commencer",
      buttonLabel4TryItButton: "Essayer gratuitement",
      buttonLabel4BackToBlog: "← Retour au blog",
    },
    contact_form: {
      name: "Nom *",
      namePlaceholder: "votre nom",
      email: "Email *",
      emailPlaceholder: "votre adresse email",
      webSite: "Site web de l'entreprise",
      webSitePlaceholder: "ex. https://nomdelentreprise.com",
      webSiteError: "Veuillez saisir le site web",
      category: "Quel est votre objectif principal ? *",
      categoryPlaceholder: "Choisissez ce qui compte le plus",
      message: "Discutons de vos objectifs (optionnel)",
      messagePlaceholder: "Veuillez fournir des détails supplémentaires (optionnel)",
      submit: "Envoyer la demande",
      sending: "Envoi en cours...",
      successTitle: "Merci !",
      successMessage: "Nous avons reçu votre message — notre équipe vous contactera sous peu.",
      defaultCategories: [],

      defaultButtonText: "Envoyez-nous un message",
      // defaultButtonText: "Obtenez une consultation gratuite",
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
        { text: "Comment ça fonctionne", link: "overview/how-it-works" },
        { text: "Plateforme de visioconférence", link: "overview/video-meeting-platform" },
        { text: "Confidentialité des données régionales", link: "overview/privacy-architecture" },
        { text: "Marchés prioritaires", link: "overview/markets" },
      ],
    },
    {
      text: "GUIDE",
      collapsed: false,
      items: [
        { text: "Premiers pas", link: "guide/getting-started" },
        { text: "Gestion de compte", link: "guide/account-management" },
        { text: "Création de réunions", link: "guide/creating-meetings" },
        { text: "Interface de réunion", link: "guide/meeting-interface" },
        { text: "Rôles utilisateur", link: "guide/user-roles" },
        { text: "Fonctionnalités IA", link: "guide/ai-features" },
        { text: "Historique des réunions", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Dépannage", link: "guide/troubleshooting" },
        { text: "Tarifs", link: "guide/pricing" },
        { text: "Aide et support", link: "guide/help-support" },
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
        { text: "Politique de confidentialité", link: "/company/Privacy-Policy" },
        { text: "Guide juridique IA", link: "/company/Legal-Regulations-for-AI-Services" },
      ],
    },
    // {
    //   text: "RESSOURCES",
    //   collapsed: false,
    //   items: [
    //     { text: "Ressources de marque", link: "/media-kit" },
    //     // { text: "Gestion de compte", link: "guide/account-management" },
    //   ],
    // },
    {
      text: "ENTREPRISE",
      collapsed: false,
      items: [
        { text: "À propos", link: "/company/about" },
        { text: "Équipe", link: "/company/team" },
        { text: "Carrières", link: "/company/careers" },
        { text: "Contacts", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Résumé exécutif", link: "/InterMind-Executive-Summary" },
    { text: "Stratégie de mise sur le marché", link: "/go-to-market-strategy" },
    { text: "Présentation investisseur", link: "/InterMind-Investor-Pitch" },
    { text: "Justification des projections financières (Année 1–3)", link: "/Financial-Projections-Justification" },
  ]
}