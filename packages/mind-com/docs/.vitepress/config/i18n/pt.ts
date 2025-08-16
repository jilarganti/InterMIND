import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/pt"

export const pt = defineConfig({
  description: "InterMIND oferece tradução de fala em tempo real para videochamadas — eliminando barreiras linguísticas instantaneamente. Desenvolvido pela equipe mind.com.",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND oferece tradução de fala em tempo real para videochamadas — eliminando barreiras linguísticas instantaneamente. Desenvolvido pela equipe mind.com.",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | Tradução de fala em tempo real para equipes globais" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND oferece tradução instantânea de fala em videochamadas — comunicação multilíngue clara sem barreiras. Desenvolvido pela equipe mind.com.",
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
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configurações de privacidade</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Política de privacidade</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Regulamentações legais para serviços de IA</a> | <a href="https://status.mind.com/">Status do serviço</a>`,
    },

    localization: {
      placeholder4SearchInput: "Pergunte qualquer coisa...",
      placeholder4ChatFooter: "Pergunte qualquer coisa...",
      placeholder4ChatList: "Digite o tópico do chat...",
      buttonLabel4NavButton: "Assistente",
      buttonLabel4SignInButton: "Entrar",
      buttonLabel4GetStartedButton: "Começar",
      buttonLabel4TryItButton: "Experimente grátis",
    },
    contact_form: {
      name: "Nome *",
      namePlaceholder: "seu nome",
      email: "E-mail *",
      emailPlaceholder: "seu endereço de e-mail",
      webSite: "Site da empresa *",
      webSitePlaceholder: "ex. https://nomedaempresa.com",
      webSiteError: "Por favor, insira o site",
      category: "Qual é seu objetivo principal? *",
      categoryPlaceholder: "Escolha o que mais importa",
      message: "Vamos discutir seus objetivos (opcional)",
      messagePlaceholder: "Por favor, forneça detalhes adicionais (opcional)",
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
        { text: "O que é InterMIND?", link: "overview/what-is-intermind" },
        { text: "Como funciona", link: "overview/how-it-works" },
        { text: "Plataforma de videochamadas", link: "overview/video-meeting-platform" },
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
        { text: "Política de privacidade", link: "/company/Privacy-Policy" },
        { text: "Guia legal de IA", link: "/company/Legal-Regulations-for-AI-Services" },
      ],
    },
    {
      text: "RECURSOS",
      collapsed: false,
      items: [
        { text: "Recursos da marca", link: "/media-kit" },
        // { text: "Gerenciamento de conta", link: "guide/account-management" },
      ],
    },
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
    { text: "Justificativa das projeções financeiras (Anos 1–3)", link: "/Financial-Projections-Justification" },
  ]
}