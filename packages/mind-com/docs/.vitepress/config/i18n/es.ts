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
        text: "Precios",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Recursos",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "Preguntas frecuentes", link: `${BASE_PATH}/#FAQ` },
          { text: "Testimonios", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configuración de privacidad</a> | <a href="${BASE_PATH}/company/Privacy-Policy">Política de privacidad</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">Regulaciones legales para servicios de IA</a> | <a href="https://status.mind.com/">Estado del servicio</a>`,
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
      webSite: "Sitio web de la empresa *",
      webSitePlaceholder: "ej. https://nombreempresa.com",
      webSiteError: "Por favor ingrese el sitio web",
      category: "¿Cuál es tu objetivo principal? *",
      categoryPlaceholder: "Elige lo más importante",
      message: "Hablemos de tus objetivos (opcional)",
      messagePlaceholder: "Proporciona detalles adicionales (opcional)",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      successTitle: "¡Gracias!",
      successMessage: "Hemos recibido tu mensaje — nuestro equipo se pondrá en contacto pronto.",
      defaultCategories: [
        "Eliminar barreras lingüísticas en reuniones",
        "Hacer las reuniones rastreables y procesables",
        "Garantizar el cumplimiento y residencia de datos (UE / EE. UU. / Asia)",
        "Solo explorando / Otro",
      ],

      defaultButtonText: "Envíanos un mensaje",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "DESCRIPCIÓN GENERAL",
      collapsed: false,
      items: [
        { text: "¿Qué es InterMIND?", link: "overview/what-is-intermind" },
        { text: "Cómo funciona", link: "overview/how-it-works" },
        { text: "Plataforma de reuniones por video", link: "overview/video-meeting-platform" },
        { text: "Privacidad de datos regional", link: "overview/privacy-architecture" },
        { text: "Mercados prioritarios", link: "overview/markets" },
      ],
    },
    {
      text: "GUÍA",
      collapsed: false,
      items: [
        { text: "Primeros pasos", link: "guide/getting-started" },
        { text: "Gestión de cuenta", link: "guide/account-management" },
        { text: "Crear reuniones", link: "guide/creating-meetings" },
        { text: "Interfaz de reunión", link: "guide/meeting-interface" },
        { text: "Roles de usuario", link: "guide/user-roles" },
        { text: "Funciones de IA", link: "guide/ai-features" },
        { text: "Historial de reuniones", link: "guide/meeting-history" },
        { text: "Preguntas frecuentes", link: "guide/faq" },
        { text: "Solución de problemas", link: "guide/troubleshooting" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "SOPORTE",
      collapsed: false,
      items: [
        { text: "Obtener soporte", link: "/help" },
      ],
    },
    {
      text: "RECURSOS",
      collapsed: false,
      items: [
        { text: "Recursos de marca", link: "/media-kit" },
      ],
    },
    {
      text: "EMPRESA",
      collapsed: false,
      items: [
        { text: "Acerca de", link: "/company/about" },
        { text: "Contactos", link: "/company/contacts" },
      ],
    },
  ]
}