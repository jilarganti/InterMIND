import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/es"

export const es = defineConfig({
  description:
    "Servicios expertos de formación y soporte de empresas en EAU. Configuración de empresas, servicios bancarios, fiscales, legales y soluciones de visado. ¡Haciendo realidad sus sueños empresariales!",
  head: [
    [
      "meta",
      {
        property: "og:title",
        content:
          "Servicios expertos de formación y soporte de empresas en EAU. Configuración de empresas, servicios bancarios, fiscales, legales y soluciones de visado.",
      },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "Servicios",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Registro de empresa", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "Soluciones bancarias", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "Migración", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "Recursos",
        items: [{ text: "Sobre nosotros", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Contactos", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configuración de privacidad</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">Términos y condiciones</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Política de privacidad</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Regulaciones legales para servicios de IA</a>`,
    },

    localization: {
      placeholder4SearchInput: "Pregunte cualquier cosa...",
      placeholder4ChatFooter: "Pregunte cualquier cosa...",
      placeholder4ChatList: "Ingrese tema del chat...",
      buttonLabel4NavButton: "Chat experto instantáneo",
    },
    contact_form: {
      name: "Nombre *",
      namePlaceholder: "su nombre",
      email: "Correo electrónico *",
      emailPlaceholder: "su dirección de correo electrónico",
      phone: "Teléfono *",
      phonePlaceholder: "ej., +1 1234567890 o (1) 123 456-7890",
      phoneError: "Por favor, ingrese número de teléfono",
      category: "¿Cómo podemos ayudarle? *",
      categoryPlaceholder: "seleccione tipo de servicio",
      message: "Hablemos de sus objetivos (opcional)",
      messagePlaceholder: "Por favor, comparta los detalles de su consulta para ayudarnos a preparar la mejor solución para sus necesidades",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      successTitle: "¡Gracias!",
      successMessage: "¡Agradecemos enormemente su interés! Nuestro equipo se pondrá en contacto con usted pronto para discutir sus necesidades.",
      defaultCategories: [
        "Formación de nueva empresa",
        "Plan de expansión (ej. nueva sucursal o franquicia)",
        "Reubicación de empresa",
        "Golden Visa",
        "Solo propósitos de visado",
        "Apertura de cuentas bancarias",
        "Otros servicios",
      ],
      defaultButtonText: "Envíenos un mensaje",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Resumen de negocios en EAU",
      items: [
        { text: "Registro de empresa", link: "company-registration/overview" },
        { text: "Ventajas y desventajas", link: "company-registration/benefits-problems" },
        { text: "Soluciones bancarias corporativas", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "Visados y EID", link: "company-registration/employment-visas" },
        { text: "Tarifas y plazos", link: "company-registration/fees-timelines" },
        { text: "Pague solo después del éxito", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Estructuras corporativas en EAU",
      collapsed: false,
      items: [
        { text: "Pasos para el registro de empresa", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Cumplimiento empresarial garantizado en EAU",
      collapsed: false,
      items: [
        { text: "Aprobaciones garantizadas de cuentas bancarias corporativas", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Cuentas bancarias para negocios de alto riesgo", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Mantenga su negocio en cumplimiento y protegido", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Legal, contabilidad e impuestos",
      collapsed: false,
      items: [
        { text: "Consideraciones contables y fiscales", link: "company-registration/accounting-legal" },
        { text: "Registro UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Comparaciones",
      collapsed: false,
      items: [
        { text: "Mainland vs free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "Comparación de entidades en EAU", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Sobre nosotros", link: "about" },
    { text: "Contactos", link: "contacts" },
    { text: "Términos y condiciones", link: "TERMS-CONDITIONS" },
    { text: "Política de privacidad", link: "Privacy-Policy" },
    { text: "Regulaciones legales para servicios de IA", link: "Legal-Regulations-for-AI-Services" },
  ]
}
