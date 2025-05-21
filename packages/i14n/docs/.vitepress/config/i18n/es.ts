import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/es"

export const es = defineConfig({
  description: "Servicios expertos de formación y soporte de empresas en EAU. Configuración de empresas, servicios bancarios, fiscales, legales y soluciones de visado. ¡Haciendo realidad tus sueños empresariales!",
  head: [
    ["meta", { property: "og:title", content: "Servicios expertos de formación y soporte de empresas en EAU. Configuración de empresas, servicios bancarios, fiscales, legales y soluciones de visado." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "InterMind",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [
          {
            text: "PRODUCTO",
            items: [
              { text: "Empezar con InterMIND", link: `${BASE_PATH}/guide/what-is-intermind` },
              { text: "Cómo funciona", link: `${BASE_PATH}/guide/how-it-works` },
              { text: "Preguntas frecuentes", link: `${BASE_PATH}/#frequently-asked-questions` },
            ],
          },
          {
            text: "INFORMACIÓN",
            items: [
              { text: "Testimonios", link: `${BASE_PATH}/#what-customers-are-saying` },
              { text: "Precios", link: `${BASE_PATH}/#clear-and-simple-pricing` },
            ],
          },
        ],
      },
      {
        text: "Mind",
        activeMatch: `${BASE_PATH}/resources/`,
        items: [
          {
            text: "EMPRESA",
            items: [
              { text: "Sobre Mind.com", link: `${BASE_PATH}/resources/about` },
              { text: "Contactos", link: `${BASE_PATH}/resources/contacts` },
            ],
          },
          {
            text: "INFORMACIÓN",
            items: [{ text: "iMind.com", link: "https://imind.com" }],
          },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configuración de privacidad</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Política de privacidad</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Regulaciones legales para servicios de IA</a>`,
    },

    localization: {
      placeholder4SearchInput: "Pregunta cualquier cosa...",
      placeholder4ChatFooter: "Pregunta cualquier cosa...",
      placeholder4ChatList: "Ingresa el tema del chat...",
      buttonLabel4NavButton: "Chat experto instantáneo",
    },
    contact_form: {
      name: "Nombre *",
      namePlaceholder: "tu nombre",
      email: "Correo electrónico *",
      emailPlaceholder: "tu dirección de correo electrónico",
      phone: "Sitio corporativo *",
      phonePlaceholder: "ej., https://mind.com",
      phoneError: "Por favor, ingresa el número de teléfono",
      category: "Por favor, dinos cómo podemos ayudar *",
      categoryPlaceholder: "selecciona tipo de servicio",
      message: "Hablemos de tus objetivos (opcional)",
      messagePlaceholder: "Por favor, proporciona detalles adicionales (opcional)",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      successTitle: "¡Gracias!",
      successMessage: "¡Agradecemos mucho tu interés! Nuestro equipo te contactará pronto para discutir tus necesidades.",
      defaultCategories: [
        "Me interesa la interpretación de voz en tiempo real",
        "Me interesa el asistente de reuniones con IA",
        "Me interesa el control de privacidad y datos basado en región",
        "Otro / No listado",
      ],

      defaultButtonText: "Envíanos un mensaje",
      // defaultButtonText: "Obtén una consulta gratuita",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Introducción",
      collapsed: false,
      items: [
        { text: "¿Qué es InterMIND?", link: "what-is-intermind" },
        { text: "Cómo funciona", link: "how-it-works" },
        { text: "Arquitectura de privacidad segmentada por región de InterMind", link: "privacy-architecture" },
        { text: "Casos de uso", link: "use-cases" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Acerca de", link: "/about" },
    { text: "Contacto", link: "/contacts" },
  ]
}