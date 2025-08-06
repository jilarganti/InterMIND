import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/es"

export const es = defineConfig({
  description: "InterMIND proporciona traducción de voz en tiempo real para videollamadas — eliminando las barreras del idioma instantáneamente. Desarrollado por el equipo de mind.com.",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND proporciona traducción de voz en tiempo real para videollamadas — eliminando las barreras del idioma instantáneamente. Desarrollado por el equipo de mind.com.",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | Traducción de Voz en Tiempo Real para Equipos Globales" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND ofrece traducción instantánea de voz en videollamadas — comunicación clara y multilingüe sin barreras. Desarrollado por el equipo de mind.com.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
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
          { text: "Preguntas Frecuentes", link: `${BASE_PATH}/#FAQ` },
          { text: "Testimonios", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configuración de Privacidad</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Política de Privacidad</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Regulaciones Legales para Servicios de IA</a> | <a href="https://status.mind.com/">Estado del servicio</a>`,
    },

    localization: {
      placeholder4SearchInput: "Pregunta lo que quieras...",
      placeholder4ChatFooter: "Pregunta lo que quieras...",
      placeholder4ChatList: "Ingresa el tema del chat...",
      buttonLabel4NavButton: "Asistente",
      buttonLabel4SignInButton: "Iniciar sesión",
      buttonLabel4GetStartedButton: "Comenzar",
    },
    contact_form: {
      name: "Nombre *",
      namePlaceholder: "tu nombre",
      email: "Correo electrónico *",
      emailPlaceholder: "tu dirección de correo electrónico",
      webSite: "Sitio web de la empresa *",
      webSitePlaceholder: "ej. https://nombreempresa.com",
      webSiteError: "Por favor ingresa el sitio web",
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
        "Garantizar cumplimiento y residencia de datos (UE / EE.UU. / Asia)",
        "Solo explorando / Otro",
      ],

      defaultButtonText: "Envíanos un mensaje",
    },
  } as DefaultTheme.Config,
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "DESCRIPCIÓN GENERAL",
      collapsed: false,
      items: [
        { text: "¿Qué es InterMIND?", link: "overview/what-is-intermind" },
        { text: "Cómo Funciona", link: "overview/how-it-works" },
        { text: "Plataforma de Videollamadas", link: "overview/video-meeting-platform" },
        { text: "Privacidad Regional de Datos", link: "overview/privacy-architecture" },
        { text: "Mercados Prioritarios", link: "overview/markets" },
      ],
    },
    {
      text: "GUÍA",
      collapsed: false,
      items: [
        { text: "Primeros Pasos", link: "guide/getting-started" },
        { text: "Gestión de Cuenta", link: "guide/account-management" },
        { text: "Crear Reuniones", link: "guide/creating-meetings" },
        { text: "Interfaz de Reuniones", link: "guide/meeting-interface" },
        { text: "Roles de Usuario", link: "guide/user-roles" },
        { text: "Funciones de IA", link: "guide/ai-features" },
        { text: "Historial de Reuniones", link: "guide/meeting-history" },
        { text: "Preguntas Frecuentes", link: "guide/faq" },
        { text: "Solución de Problemas", link: "guide/troubleshooting" },
        { text: "Precios", link: "guide/pricing" },
        { text: "Ayuda y Soporte", link: "guide/help-support" },
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
        { text: "Obtener Soporte", link: "/help" },
      ],
    },
    {
      text: "RECURSOS",
      collapsed: false,
      items: [
        { text: "Recursos de Marca", link: "/media-kit" },
      ],
    },
    {
      text: "EMPRESA",
      collapsed: false,
      items: [
        { text: "Acerca de", link: "/company/about" },
        { text: "Equipo", link: "/company/team" },
        { text: "Contactos", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Resumen Ejecutivo", link: "/InterMind-Executive-Summary" },
    { text: "Estrategia de Comercialización", link: "/go-to-market-strategy" },
    { text: "Presentación para Inversores", link: "/InterMind-Investor-Pitch" },
    { text: "Justificación de Proyecciones Financieras (Año 1-3)", link: "/Financial-Projections-Justification" },
  ]
}