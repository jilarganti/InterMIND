import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/es"

export const es = defineConfig({
  description: "Expertos en formación de empresas y servicios de apoyo en los EAU. Creación de empresas, soluciones bancarias, fiscales, legales y de visados. ¡Haciendo realidad los sueños de su negocio!",
  head: [
    ["meta", { property: "og:title", content: "Expertos en formación de empresas y servicios de apoyo en los EAU. Creación de empresas, soluciones bancarias, fiscales, legales y de visados." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "Servicios",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Registro de empresas", link: `${BASE_PATH}/uae-business/company-registration/overview` },
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
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configuración de privacidad</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Política de privacidad</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Regulaciones legales para servicios de IA</a>`,
    },

    localization: {
      placeholder4SearchInput: "Pregunta cualquier cosa...",
      placeholder4ChatFooter: "Pregunta cualquier cosa...",
      placeholder4ChatList: "Introduce el tema de la conversación...",
      buttonLabel4NavButton: "Chat instantáneo con expertos",
    },
    contact_form: {
      name: "Nombre *",
      namePlaceholder: "tu nombre",
      email: "Correo electrónico *",
      emailPlaceholder: "tu dirección de correo electrónico",
      phone: "Teléfono *",
      phonePlaceholder: "p. ej., +1 1234567890 o (1) 123 456-7890",
      phoneError: "Por favor, introduce el número de teléfono",
      category: "¿Cómo podemos ayudarte? *",
      categoryPlaceholder: "selecciona el tipo de servicio",
      message: "Hablemos de tus objetivos (opcional)",
      messagePlaceholder: "Por favor, comparte los detalles de tu consulta para ayudarnos a preparar la mejor solución para tus necesidades",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      successTitle: "¡Gracias!",
      successMessage: "¡Agradecemos mucho tu interés! Nuestro equipo se pondrá en contacto contigo en breve para discutir tus necesidades.",
      defaultCategories: [
        "Formación de nueva empresa",
        "Plan de expansión (p. ej., nueva sucursal o franquicia)",
        "Reubicación de empresa",
        "Visa Dorada",
        "Solo para propósitos de visa",
        "Apertura de cuentas bancarias",
        "Otros servicios",
      ],
      defaultButtonText: "Envíanos un mensaje",
      // defaultButtonText: "Obtén una consulta gratuita",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Resumen de negocios en los EAU",
      // collapsed: false,
      items: [
        { text: "Registro de empresas", link: "company-registration/overview" },
        { text: "Pros y contras", link: "company-registration/benefits-problems" },
        { text: "Soluciones bancarias corporativas", link: "company-registration/banking" },
        { text: "Visa Dorada", link: "company-registration//golden-visa" },
        { text: "Visas y EID", link: "company-registration/employment-visas" },
        { text: "Tarifas y plazos", link: "company-registration/fees-timelines" },
        { text: "Paga solo después del éxito", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Estructuras corporativas en los EAU",
      collapsed: false,
      items: [
        { text: "Pasos para el registro de empresas", link: "company-registration/insights/incorporation-steps" },
        { text: "Zonas francas de los EAU", link: "company-registration/free-zones" },
        { text: "Continente de los EAU", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Cumplimiento empresarial garantizado en los EAU",
      collapsed: false,
      items: [
        { text: "Aprobaciones garantizadas de cuentas bancarias corporativas", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Cuentas bancarias para negocios de alto riesgo", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Mantén tu negocio cumpliendo y protegido", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Legal, contabilidad e impuestos",
      collapsed: false,
      items: [
        { text: "Consideraciones de contabilidad e impuestos", link: "company-registration/accounting-legal" },
        { text: "Registro de UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Comparaciones",
      collapsed: false,
      items: [
        { text: "Continente vs zonas francas", link: "comparison/mainland-vs-free-zones" },
        { text: "Comparación de entidades en los EAU", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Sobre nosotros", link: "about" },
    { text: "Contactos", link: "contacts" },
    { text: "Política de privacidad", link: "Privacy-Policy" },
    { text: "Regulaciones legales para servicios de IA", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "Contactos", link: `contacts` }]
// }