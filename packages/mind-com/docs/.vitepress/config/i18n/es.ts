import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/es"

export const es = defineConfig({
  description:
    "Las reuniones multilingües no necesitan Zoom, plugins o intérpretes. InterMind es un traductor de voz con IA para videollamadas en tiempo real — habla y traduce instantáneamente.",
  head: [
    ["meta", { property: "og:title", content: "Traductor de Voz con IA para Videollamadas en Vivo | InterMIND" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "traductor de voz con IA, traducción en tiempo real, traducir videollamadas, reuniones multilingües, alternativa al traductor de Zoom, herramienta de interpretación",
      },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "Producto",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/what-is-intermind`,
      },
      {
        text: "Empresa",
        activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/company/about`,
      },
      {
        text: "Recursos",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "Precios", link: `${BASE_PATH}/#clear-and-simple-pricing` },
          { text: "Preguntas Frecuentes", link: `${BASE_PATH}/#frequently-asked-questions` },
          { text: "Testimonios", link: `${BASE_PATH}/#what-customers-are-saying` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarServices() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configuración de Privacidad</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Política de Privacidad</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Regulaciones Legales para Servicios de IA</a>`,
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
      phoneError: "Por favor ingresa el número de teléfono",
      category: "Por favor dinos cómo podemos ayudarte *",
      categoryPlaceholder: "selecciona el tipo de servicio",
      message: "Hablemos de tus objetivos (opcional)",
      messagePlaceholder: "Por favor proporciona detalles adicionales (opcional)",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      successTitle: "¡Gracias!",
      successMessage: "¡Agradecemos mucho tu interés! Nuestro equipo te contactará pronto para discutir tus necesidades.",
      defaultCategories: [
        "Me interesa la interpretación de voz en tiempo real",
        "Me interesa el asistente de reuniones con IA",
        "Me interesa la privacidad y control de datos por región",
        "Otro / No listado",
      ],

      defaultButtonText: "Envíanos un mensaje",
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
        { text: "Privacidad de datos regional", link: "privacy-architecture" },
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
