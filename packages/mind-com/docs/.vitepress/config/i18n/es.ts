import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/es"

export const es = defineConfig({
  description:
    "InterMind es una plataforma de interpretación en tiempo real para reuniones de video multilingües. Cada participante habla en su idioma nativo y escucha a los demás como si también lo hicieran. Sin complementos. Sin descargas. Solo conversaciones naturales y fluidas en más de 100 idiomas.",
  head: [["meta", { property: "og:title", content: "Videollamadas potenciadas por interpretación simultánea | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "Producto",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
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
          { text: "Precios", link: `${BASE_PATH}/#Pricing` },
          { text: "Preguntas frecuentes", link: `${BASE_PATH}/#FAQ` },
          { text: "Testimonios", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarServices() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configuración de privacidad</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Política de privacidad</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Regulaciones legales para servicios de IA</a>`,
    },

    localization: {
      placeholder4SearchInput: "Pregunta cualquier cosa...",
      placeholder4ChatFooter: "Pregunta cualquier cosa...",
      placeholder4ChatList: "Ingresa el tema del chat...",
      buttonLabel4NavButton: "Chat experto instantáneo",
      buttonLabel4AuthButton: "Iniciar sesión",
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
      messagePlaceholder: "Proporciona detalles adicionales (opcional)",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      successTitle: "¡Gracias!",
      successMessage: "¡Agradecemos mucho tu interés! Nuestro equipo te contactará pronto para discutir tus necesidades.",
      defaultCategories: [
        "Me interesa la interpretación de voz en tiempo real",
        "Me interesa el asistente de reuniones con IA",
        "Me interesa el control de privacidad y datos por región",
        "Otro / No listado",
      ],

      defaultButtonText: "Envíanos un mensaje",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Descripción general",
      collapsed: false,
      items: [
        { text: "¿Qué es InterMIND?", link: "overview/what-is-intermind" },
        { text: "Cómo funciona", link: "overview/how-it-works" },
        { text: "Privacidad de datos regional", link: "overview/privacy-architecture" },
        { text: "Mercados prioritarios", link: "overview/markets" },
      ],
    },
    {
      text: "Guía",
      collapsed: false,
      items: [
        { text: "Primeros pasos", link: "guide/getting-started" },
        { text: "Gestión de cuenta", link: "guide/account-management" },
        { text: "Crear reuniones", link: "guide/creating-meetings" },
        { text: "Interfaz de reuniones", link: "guide/meeting-interface" },
        { text: "Roles de usuario", link: "guide/user-roles" },
        { text: "Funciones de IA", link: "guide/ai-features" },
        { text: "Historial de reuniones", link: "guide/meeting-history" },
        { text: "Preguntas frecuentes", link: "guide/faq" },
        { text: "Solución de problemas", link: "guide/troubleshooting" },
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