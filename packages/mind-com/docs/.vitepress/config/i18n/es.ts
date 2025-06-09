import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/es"

export const es = defineConfig({
  description:
    "InterMIND añade traducción de voz en tiempo real a cada videollamada, para que los equipos internacionales nunca pierdan negocios, tiempo o claridad debido a las barreras del idioma.",
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
        text: "Precios",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Recursos",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Testimonios", link: `${BASE_PATH}/#Testimonials` },
          { text: "Kit de Medios", link: `${BASE_PATH}/resources/media-kit` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configuración de Privacidad</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Política de Privacidad</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Regulaciones Legales para Servicios de IA</a> | <a href="https://status.mind.com/">Estado del servicio</a>`,
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
      phoneError: "Por favor ingrese el número de teléfono",
      category: "Por favor dinos cómo podemos ayudar *",
      categoryPlaceholder: "selecciona tipo de servicio",
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

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Descripción general",
      collapsed: false,
      items: [
        { text: "¿Qué es InterMIND?", link: "overview/what-is-intermind" },
        { text: "Cómo funciona", link: "overview/how-it-works" },
        { text: "Plataforma de videoreuniones", link: "overview/video-meeting-platform" },
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
        { text: "Interfaz de reunión", link: "guide/meeting-interface" },
        { text: "Roles de usuario", link: "guide/user-roles" },
        { text: "Funciones de IA", link: "guide/ai-features" },
        { text: "Historial de reuniones", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Solución de problemas", link: "guide/troubleshooting" },
      ],
    },
  ]
}

function sidebarCompany(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Acerca de", link: "/about" },
    { text: "Contactos", link: "/contacts" },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [{ text: "Kit de Medios", link: "/media-kit" }]
}