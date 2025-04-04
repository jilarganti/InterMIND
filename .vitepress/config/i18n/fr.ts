import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fr"

export const fr = defineConfig({
  description: "Services professionnels de formation d'entreprise aux EAU. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visa. Réalisons vos rêves d'entreprise !",
  head: [
    ["meta", { property: "og:title", content: "Services professionnels de formation d'entreprise aux EAU. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visa." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "Services",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Création d'entreprise", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "Solutions bancaires", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "Migration", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "Ressources",
        items: [{ text: "À propos", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Contact", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Paramètres de confidentialité</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Politique de confidentialité</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Réglementations légales pour les services d'IA</a>`,
    },

    contact_form: {
      name: "Nom *",
      namePlaceholder: "votre nom",
      email: "Email *",
      emailPlaceholder: "votre adresse email",
      phone: "Téléphone *",
      phonePlaceholder: "ex., +1 1234567890 ou (1) 123 456-7890",
      phoneError: "Veuillez saisir un numéro de téléphone",
      category: "Comment pouvons-nous vous aider ? *",
      categoryPlaceholder: "sélectionnez le type de service",
      message: "Discutons de vos objectifs (facultatif)",
      messagePlaceholder: "décrivez votre projet ou vos besoins",
      submit: "Envoyer la demande",
      sending: "Envoi en cours...",
      successTitle: "Merci !",
      successMessage: "Nous apprécions grandement votre intérêt ! Notre équipe vous contactera sous peu pour discuter de vos besoins.",
      defaultCategories: ["Création d'entreprise", "Ouverture de comptes bancaires", "EID & Golden Visa", "Autres services"],
      defaultButtonText: "Obtenir une consultation gratuite",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Aperçu des affaires aux EAU",
      collapsed: false,
      items: [
        { text: "Création d'entreprise", link: "company-registration/overview" },
        { text: "Avantages et inconvénients", link: "company-registration/benefits-problems" },
        { text: "Solutions bancaires entreprises", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "Visas et EID", link: "company-registration/employment-visas" },
        { text: "Frais et délais", link: "company-registration/fees-timelines" },
        { text: "Paiement uniquement après succès", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Structures d'entreprise aux EAU",
      collapsed: true,
      items: [
        { text: "Étapes de création d'entreprise", link: "company-registration/insights/incorporation-steps" },
        { text: "Free zones aux EAU", link: "company-registration/free-zones" },
        { text: "Mainland aux EAU", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Conformité garantie pour les entreprises aux EAU",
      collapsed: true,
      items: [
        { text: "Approbations garanties de comptes bancaires entreprises", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Comptes bancaires pour entreprises à haut risque", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Maintenir votre entreprise conforme et protégée", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Juridique, comptabilité et fiscalité",
      collapsed: true,
      items: [
        { text: "Considérations comptables et fiscales", link: "company-registration/accounting-legal" },
        { text: "Registre UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Comparaisons",
      collapsed: true,
      items: [
        { text: "Mainland vs free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "Comparaison des entités aux EAU", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "À propos", link: "about" },
    { text: "Contacts", link: "contacts" },
    { text: "Politique de confidentialité", link: "Privacy-Policy" },
    { text: "Réglementations légales pour les services d'IA", link: "Legal-Regulations-for-AI-Services" },
  ]
}