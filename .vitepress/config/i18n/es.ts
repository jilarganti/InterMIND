import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/es"

export const es = defineConfig({
  description: "Servicios expertos de formación y soporte de empresas en EAU. Configuración de empresas, banca, impuestos, soluciones legales y de visados. ¡Haciendo realidad sus sueños empresariales!",
  head: [
    ["meta", { property: "og:title", content: "Servicios expertos de formación y soporte de empresas en EAU. Configuración de empresas, banca, impuestos, soluciones legales y de visados." }],
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
        items: [{ text: "Acerca de", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Contacto", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: '©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configuración de privacidad</a>',
    },

    contact_form: {
      name: "Nombre *",
      namePlaceholder: "su nombre",
      email: "Correo electrónico *",
      emailPlaceholder: "su dirección de correo electrónico",
      phone: "Teléfono *",
      phonePlaceholder: "ej., +1 1234567890 o (1) 123 456-7890",
      phoneError: "Por favor, introduzca el número de teléfono",
      category: "¿Cómo podemos ayudarle? *",
      categoryPlaceholder: "seleccione tipo de servicio",
      message: "Hablemos de sus objetivos (opcional)",
      messagePlaceholder: "describa su proyecto o requisitos",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      successTitle: "¡Gracias!",
      successMessage: "¡Agradecemos enormemente su interés! Nuestro equipo se pondrá en contacto con usted en breve para discutir sus necesidades.",
      defaultCategories: ["Registro de empresas", "Apertura de cuentas bancarias", "EID y Golden Visa", "Otros servicios"],
      defaultButtonText: "Obtener una consulta gratuita",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Resumen de negocios en EAU",
      collapsed: false,
      items: [
        { text: "Registro de empresas", link: "company-registration/overview" },
        { text: "Ventajas y desventajas", link: "company-registration/benefits-problems" },
        { text: "Soluciones bancarias corporativas", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "Visados y EID", link: "company-registration/employment-visas" },
        { text: "Tarifas y plazos", link: "company-registration/fees-timelines" },
        { text: "Pague solo después del éxito", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Estructuras corporativas en EAU",
      collapsed: true,
      items: [
        { text: "Pasos para el registro de empresas", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Cumplimiento empresarial garantizado en EAU",
      collapsed: true,
      items: [
        { text: "Aprobaciones garantizadas de cuentas bancarias corporativas", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Cuentas bancarias para negocios de alto riesgo", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Mantenga su negocio en cumplimiento y protegido", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Legal, contabilidad e impuestos",
      collapsed: true,
      items: [
        { text: "Consideraciones contables y fiscales", link: "company-registration/accounting-legal" },
        { text: "Registro UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Comparaciones",
      collapsed: true,
      items: [
        { text: "Mainland vs free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "Comparación de entidades en EAU", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [{ text: "Acerca de", link: `about` }]
}

function sidebarContactUs(): DefaultTheme.SidebarItem[] {
  return [{ text: "Contactos", link: `contacts` }]
}