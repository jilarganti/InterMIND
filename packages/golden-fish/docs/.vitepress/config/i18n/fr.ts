import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/fr"

export const fr = defineConfig({
  description:
    "Services experts de création et d'accompagnement d'entreprises aux EAU. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visa. Réalisons vos rêves professionnels !",
  head: [
    [
      "meta",
      {
        property: "og:title",
        content:
          "Services experts de création et d'accompagnement d'entreprises aux EAU. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visa.",
      },
    ],
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
        items: [{ text: "À propos de nous", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Contacts", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Paramètres de confidentialité</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">Conditions générales</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Politique de confidentialité</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Réglementations légales pour les services d'IA</a>`,
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
      phone: "Téléphone *",
      phonePlaceholder: "ex., +1 1234567890 ou (1) 123 456-7890",
      phoneError: "Veuillez saisir un numéro de téléphone",
      category: "Comment pouvons-nous vous aider ? *",
      categoryPlaceholder: "sélectionnez le type de service",
      message: "Discutons de vos objectifs (facultatif)",
      messagePlaceholder: "Veuillez partager les détails de votre demande pour nous aider à préparer la meilleure solution pour vos besoins",
      submit: "Envoyer la demande",
      sending: "Envoi en cours...",
      successTitle: "Merci !",
      successMessage: "Nous apprécions grandement votre intérêt ! Notre équipe vous contactera prochainement pour discuter de vos besoins.",
      defaultCategories: [
        "Création d'une nouvelle entreprise",
        "Plan d'expansion (nouvelle succursale ou franchise)",
        "Relocalisation d'entreprise",
        "Golden Visa",
        "Visas uniquement",
        "Ouverture de comptes bancaires",
        "Autres services",
      ],
      defaultButtonText: "Envoyez-nous un message",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Aperçu des affaires aux EAU",
      items: [
        { text: "Création d'entreprise", link: "company-registration/overview" },
        { text: "Avantages et inconvénients", link: "company-registration/benefits-problems" },
        { text: "Solutions bancaires entreprises", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "Visas et EID", link: "company-registration/employment-visas" },
        { text: "Frais et délais", link: "company-registration/fees-timelines" },
        { text: "Paiement uniquement après succès", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Structures d'entreprise aux EAU",
      collapsed: false,
      items: [
        { text: "Étapes de création d'entreprise", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Conformité garantie pour les entreprises aux EAU",
      collapsed: false,
      items: [
        { text: "Approbations garanties de comptes bancaires entreprises", link: "corporate-banking-services/guaranteed-account-approvals" },
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
        { text: "Mainland vs free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "Comparaison des entités aux EAU", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "À propos de nous", link: "about" },
    { text: "Contacts", link: "contacts" },
    { text: "Conditions générales", link: "TERMS-CONDITIONS" },
    { text: "Politique de confidentialité", link: "Privacy-Policy" },
    { text: "Réglementations légales pour les services d'IA", link: "Legal-Regulations-for-AI-Services" },
  ]
}
