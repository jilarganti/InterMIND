import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/pt"

export const pt = defineConfig({
  description: "O InterMIND oferece tradução simultânea de voz para videochamadas — eliminando barreiras linguísticas instantaneamente. Desenvolvido pela equipe mind.com.",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "O InterMIND oferece tradução simultânea de voz para videochamadas — eliminando barreiras linguísticas instantaneamente. Desenvolvido pela equipe mind.com.",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | Tradução Simultânea de Voz para Equipes Globais" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "O InterMIND oferece tradução instantânea de voz em videochamadas — comunicação clara e multilíngue sem barreiras. Desenvolvido pela equipe mind.com.",
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
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configurações de Privacidade</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Política de Privacidade</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Regulamentações Legais para Serviços de IA</a> | <a href="https://status.mind.com/">Status do serviço</a>`,
    },

    localization: {
      placeholder4SearchInput: "Pergunte qualquer coisa...",
      placeholder4ChatFooter: "Pergunte qualquer coisa...",
      placeholder4ChatList: "Digite o tópico do chat...",
      buttonLabel4NavButton: "Chat com especialista instantâneo",
      buttonLabel4SignInButton: "Entrar",
      buttonLabel4GetStartedButton: "Começar",
    },
    contact_form: {
      name: "Nome *",
      namePlaceholder: "seu nome",
      email: "E-mail *",
      emailPlaceholder: "seu endereço de e-mail",
      webSite: "Site da empresa *",
      webSitePlaceholder: "ex: https://nomedasuaempresa.com",
      webSiteError: "Por favor, insira o site",
      category: "Qual é seu objetivo principal? *",
      categoryPlaceholder: "Escolha o que é mais importante",
      message: "Vamos discutir seus objetivos (opcional)",
      messagePlaceholder: "Forneça detalhes adicionais (opcional)",
      submit: "Enviar solicitação",
      sending: "Enviando...",
      successTitle: "Obrigado!",
      successMessage: "Recebemos sua mensagem — nossa equipe entrará em contato em breve.",
      defaultCategories: [
        "Eliminar barreiras linguísticas em reuniões",
        "Tornar reuniões pesquisáveis e acionáveis",
        "Garantir conformidade e residência de dados (UE / EUA / Ásia)",
        "Apenas explorando / Outro",
      ],

      defaultButtonText: "Envie-nos uma mensagem",
    },
  } as DefaultTheme.Config,
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "VISÃO GERAL",
      collapsed: false,
      items: [
        { text: "O que é o InterMIND?", link: "overview/what-is-intermind" },
        { text: "Como Funciona", link: "overview/how-it-works" },
        { text: "Plataforma de Videoconferência", link: "overview/video-meeting-platform" },
        { text: "Privacidade Regional de Dados", link: "overview/privacy-architecture" },
        { text: "Mercados Prioritários", link: "overview/markets" },
      ],
    },
    {
      text: "GUIA",
      collapsed: false,
      items: [
        { text: "Primeiros Passos", link: "guide/getting-started" },
        { text: "Gerenciamento de Conta", link: "guide/account-management" },
        { text: "Criando Reuniões", link: "guide/creating-meetings" },
        { text: "Interface de Reunião", link: "guide/meeting-interface" },
        { text: "Funções de Usuário", link: "guide/user-roles" },
        { text: "Recursos de IA", link: "guide/ai-features" },
        { text: "Histórico de Reuniões", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Solução de Problemas", link: "guide/troubleshooting" },
        { text: "Preços", link: "guide/pricing" },
        { text: "Ajuda e Suporte", link: "guide/help-support" },
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
        { text: "Obter Suporte", link: "/help" },
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
        { text: "Sobre", link: "/company/about" },
        { text: "Equipe", link: "/company/team" },
        { text: "Contatos", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Resumo Executivo", link: "/InterMind-Executive-Summary" },
    { text: "Estratégia de Entrada no Mercado", link: "/go-to-market-strategy" },
    { text: "Apresentação para Investidores", link: "/InterMind-Investor-Pitch" },
    { text: "Justificativa de Projeções Financeiras (Anos 1-3)", link: "/Financial-Projections-Justification" },
  ]
}