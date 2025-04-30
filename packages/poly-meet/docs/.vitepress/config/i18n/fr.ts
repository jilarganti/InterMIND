import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fr"

export const fr = defineConfig({
  description: "Services professionnels de création d'entreprise et de soutien aux Émirats Arabes Unis. Création d'entreprise, solutions bancaires, fiscales, juridiques et de visa. Réalisez vos rêves d'affaires !",
  head: [
    ["meta", { property: "og:title", content: "Services professionnels de création d'entreprise et de soutien aux Émirats Arabes Unis. Création d'entreprise, solutions bancaires, fiscales, juridiques et de visa." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "Services",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Enregistrement d'entreprise", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "Solutions bancaires", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "Migration", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "Ressources",
        items: [{ text: "À propos de nous", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Contacts", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Paramètres de confidentialité</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Politique de confidentialité</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Réglementations juridiques pour les services d'IA</a>`,
    },

    localization: {
      placeholder4SearchInput: "Posez n'importe quelle question...",
      placeholder4ChatFooter: "Posez n'importe quelle question...",
      placeholder4ChatList: "Entrez le sujet de la discussion...",
      buttonLabel4NavButton: "Chat instantané avec un expert",
    },
    contact_form: {
      name: "Nom *",
      namePlaceholder: "votre nom",
      email: "Email *",
      emailPlaceholder: "votre adresse email",
      phone: "Téléphone *",
      phonePlaceholder: "par exemple, +1 1234567890 ou (1) 123 456-7890",
      phoneError: "Veuillez entrer un numéro de téléphone",
      category: "Comment pouvons-nous vous aider ? *",
      categoryPlaceholder: "sélectionnez le type de service",
      message: "Discutons de vos objectifs (facultatif)",
      messagePlaceholder: "Veuillez partager les détails de votre demande pour nous aider à préparer la meilleure solution pour vos besoins",
      submit: "Envoyer la demande",
      sending: "Envoi...",
      successTitle: "Merci !",
      successMessage: "Nous apprécions grandement votre intérêt ! Notre équipe vous contactera sous peu pour discuter de vos besoins.",
      defaultCategories: [
        "Création de nouvelle entreprise",
        "Plan d'expansion (par ex. nouvelle succursale ou franchise)",
        "Relocalisation d'entreprise",
        "Visa doré",
        "Uniquement pour le visa",
        "Ouverture de comptes bancaires",
        "Autres services",
      ],
      defaultButtonText: "Envoyez-nous un message",
      // defaultButtonText: "Obtenez une consultation gratuite",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Résumé des affaires aux EAU",
      // collapsed: false,
      items: [
        { text: "Enregistrement d'entreprise", link: "company-registration/overview" },
        { text: "Avantages & inconvénients", link: "company-registration/benefits-problems" },
        { text: "Solutions bancaires d'entreprise", link: "company-registration/banking" },
        { text: "Visa doré", link: "company-registration//golden-visa" },
        { text: "Visas & EID", link: "company-registration/employment-visas" },
        { text: "Frais et délais", link: "company-registration/fees-timelines" },
        { text: "Payez seulement après succès", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Structures d'entreprise aux EAU",
      collapsed: false,
      items: [
        { text: "Étapes d'enregistrement d'entreprise", link: "company-registration/insights/incorporation-steps" },
        { text: "Zones franches des EAU", link: "company-registration/free-zones" },
        { text: "Continent des EAU", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Conformité des affaires aux EAU garantie",
      collapsed: false,
      items: [
        { text: "Approvals de comptes bancaires d'entreprise garantis", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Comptes bancaires pour entreprises à haut risque", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Maintenez votre entreprise conforme et protégée", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Juridique, comptabilité et fiscalité",
      collapsed: false,
      items: [
        { text: "Considérations comptables et fiscales", link: "company-registration/accounting-legal" },
        { text: "Registre UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Comparaisons",
      collapsed: false,
      items: [
        { text: "Continent vs zones franches", link: "comparison/mainland-vs-free-zones" },
        { text: "Comparaison des entités des EAU", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "À propos de nous", link: "about" },
    { text: "Contacts", link: "contacts" },
    { text: "Politique de confidentialité", link: "Privacy-Policy" },
    { text: "Réglementations juridiques pour les services d'IA", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "Contacts", link: `contacts` }]
// }