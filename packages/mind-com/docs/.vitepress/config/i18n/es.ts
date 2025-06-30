import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/es"

export const es = defineConfig({
  description: "InterMIND proporciona traducción de voz en tiempo real para videollamadas — eliminando las barreras del idioma al instante. Desarrollado por el equipo de mind.com.",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND proporciona traducción de voz en tiempo real para videollamadas — eliminando las barreras del idioma al instante. Desarrollado por el equipo de mind.com.",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | Traducción de Voz en Tiempo Real para Equipos Globales" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND ofrece traducción de voz instantánea en videollamadas — comunicación multilingüe clara sin barreras. Desarrollado por el equipo de mind.com.",
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
      // {
      //   text: "Empresa",
      //   activeMatch: `${BASE_PATH}/company/`,
      //   link: `${BASE_PATH}/company/about`,
      // },
      {
        text: "Precios",
        // activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Recursos",
        activeMatch: `${BASE_PATH}/product/`,
        // items: [
        //   {
        //     text: "EXPLORAR",
        items: [
          // { text: "Precios", link: `${BASE_PATH}/#Pricing` },
          { text: "Preguntas frecuentes", link: `${BASE_PATH}/#FAQ` },
          { text: "Testimonios", link: `${BASE_PATH}/#Testimonials` },
          // { text: "Equipo", link: `${BASE_PATH}/resources/team` },
          // { text: "Kit de medios", link: `${BASE_PATH}/resources/media-kit` },
        ],
        //   },
        // ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      // [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configuración de privacidad</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Política de privacidad</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Regulaciones legales para servicios de IA</a> | <a href="https://status.mind.com/">Estado del servicio</a>`,
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
      webSiteError: "Por favor ingresa el sitio web",
      category: "¿Cuál es tu objetivo principal? *",
      categoryPlaceholder: "Elige lo que más te importa",
      message: "Hablemos de tus objetivos (opcional)",
      messagePlaceholder: "Por favor proporciona cualquier detalle adicional (opcional)",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      successTitle: "¡Gracias!",
      successMessage: "Hemos recibido tu mensaje — nuestro equipo se pondrá en contacto contigo pronto.",
      defaultCategories: [
        "Eliminar barreras del idioma en reuniones",
        "Hacer las reuniones buscables y accionables",
        "Asegurar cumplimiento y residencia de datos (UE / EE.UU. / Asia)",
        "Solo explorando / Otro",
      ],

      defaultButtonText: "Envíanos un mensaje",
      // defaultButtonText: "Obtén una consulta gratuita",
    },
  } as DefaultTheme.Config,
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "RESUMEN",
      collapsed: false,
      items: [
        { text: "¿Qué es InterMIND?", link: "overview/what-is-intermind" },
        { text: "Cómo funciona", link: "overview/how-it-works" },
        { text: "Plataforma de videorreuniones", link: "overview/video-meeting-platform" },
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
        // { text: "Cómo funciona", link: "overview/how-it-works" },
      ],
    },
    {
      text: "RECURSOS",
      collapsed: false,
      items: [
        { text: "Recursos de marca", link: "/media-kit" },
        // { text: "Gestión de cuenta", link: "guide/account-management" },
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

// function sidebarResources(): DefaultTheme.SidebarItem[] {
//   return [
//     { text: "Acerca de", link: "/about" },
//     { text: "Contactos", link: "/contacts" },
//     { text: "Obtener soporte", link: "/help" },
//     { text: "Recursos de marca", link: "/media-kit" },
//   ]
// }