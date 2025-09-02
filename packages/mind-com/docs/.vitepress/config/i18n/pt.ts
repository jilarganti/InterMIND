/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/pt"

export const pt = defineConfig({
  description:
    "Videoconferência profissional com interpretação simultânea em mais de 19 idiomas. Tradução com IA que captura tom, intenção e contexto para equipes globais.",
  head: [
    ["meta", { property: "og:title", content: "InterMIND | Tradução de Fala em Tempo Real para Equipes Globais" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Videoconferência profissional com interpretação de voz simultânea em mais de 19 idiomas. Reúna-se globalmente, comunique-se naturalmente com tradução com IA.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "Produto",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "Preços",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Recursos",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Depoimentos", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
      [`${BASE_PATH}/account/`]: { base: `${BASE_PATH}/account/`, items: sidebarAccount() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configurações de Privacidade</a> | <a href="${BASE_PATH}/resources/company/privacy-policy">Política de Privacidade</a> | <a href="${BASE_PATH}/resources/company/legal-regulations-for-ai-services">Regulamentações Legais para Serviços de IA</a> | <a href="https://status.mind.com/">Status do serviço</a>`,
    },

    localization: {
      placeholder4SearchInput: "Pergunte qualquer coisa...",
      placeholder4ChatFooter: "Pergunte qualquer coisa...",
      placeholder4ChatList: "Digite o tópico do chat...",
      buttonLabel4NavButton: "Assistente",
      buttonLabel4SignInButton: "Entrar",
      buttonLabel4GetStartedButton: "Começar",
      buttonLabel4TryItButton: "Experimente grátis",
      buttonLabel4BackToBlog: "← Voltar ao blog",
    },
    contact_form: {
      name: "Nome *",
      namePlaceholder: "seu nome",
      email: "Email *",
      emailPlaceholder: "seu endereço de email",
      webSite: "Site da empresa",
      webSitePlaceholder: "ex. https://nomedaempresa.com",
      webSiteError: "Por favor, insira o site",
      category: "Qual é o seu objetivo principal? *",
      categoryPlaceholder: "Escolha o que mais importa",
      message: "Vamos discutir seus objetivos (opcional)",
      messagePlaceholder: "Por favor, forneça detalhes adicionais (opcional)",
      submit: "Enviar solicitação",
      sending: "Enviando...",
      successTitle: "Obrigado!",
      successMessage: "Recebemos sua mensagem — nossa equipe entrará em contato em breve.",
      defaultCategories: [],

      defaultButtonText: "Envie-nos uma mensagem",
      // defaultButtonText: "Obtenha uma consulta gratuita",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "VISÃO GERAL",
      collapsed: false,
      items: [
        { text: "O que é o InterMIND?", link: "overview/what-is-intermind" },
        { text: "Como funciona", link: "overview/how-it-works" },
        { text: "Plataforma de videoconferência", link: "overview/video-meeting-platform" },
        { text: "Tradução vs interpretação: qual é a diferença?", link: "overview/translation-vs-interpretation-whats-the-difference" },
        { text: "Privacidade de dados regional", link: "overview/privacy-architecture" },
        { text: "Mercados prioritários", link: "overview/markets" },
      ],
    },
    {
      text: "GUIA",
      collapsed: false,
      items: [
        { text: "Primeiros passos", link: "guide/getting-started" },
        { text: "Gerenciamento de conta", link: "guide/account-management" },
        { text: "Criando reuniões", link: "guide/creating-meetings" },
        { text: "Interface da reunião", link: "guide/meeting-interface" },
        { text: "Funções do usuário", link: "guide/user-roles" },
        { text: "Recursos de IA", link: "guide/ai-features" },
        { text: "Histórico de reuniões", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Solução de problemas", link: "guide/troubleshooting" },
        { text: "Preços", link: "guide/pricing" },
        { text: "Ajuda e suporte", link: "guide/help-support" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "SUPORTE",
      collapsed: false,
      items: [
        { text: "Obter suporte", link: "/help" },
        { text: "Política de privacidade", link: "/company/privacy-policy" },
        { text: "Guia legal de IA", link: "/company/legal-regulations-for-ai-services" },
      ],
    },
    // {
    //   text: "RECURSOS",
    //   collapsed: false,
    //   items: [
    //     { text: "Recursos da marca", link: "/media-kit" },
    //     // { text: "Gerenciamento de conta", link: "guide/account-management" },
    //   ],
    // },
    {
      text: "EMPRESA",
      collapsed: false,
      items: [
        { text: "Sobre", link: "/company/about" },
        { text: "Equipe", link: "/company/team" },
        { text: "Carreiras", link: "/company/careers" },
        { text: "Contatos", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Resumo executivo", link: "/InterMind-Executive-Summary" },
    { text: "Estratégia de entrada no mercado", link: "/go-to-market-strategy" },
    { text: "Apresentação para investidores", link: "/InterMind-Investor-Pitch" },
    { text: "Justificativa das projeções financeiras (anos 1–3)", link: "/Financial-Projections-Justification" },
  ]
}

function sidebarAccount(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "INÍCIO",
      link: "/",
    },
    {
      text: "REUNIÕES",
      collapsed: false,
      items: [
        { text: "Reuniões", link: "/meetings" },
        { text: "Histórico", link: "/history" },
        { text: "Upgrade", link: "/upgrade" },
      ],
    },

    {
      text: "CONFIGURAÇÕES",
      collapsed: true,
      items: [
        { text: "Perfil", link: "/settings/profile" },
        { text: "Configurações", link: "/settings/settings" },
        { text: "Configurações", link: "/settings/upgrade" },
      ],
    },
  ]
}
