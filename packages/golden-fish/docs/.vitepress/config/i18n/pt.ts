import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/pt"

export const pt = defineConfig({
  description: "Especialistas em formação de empresas e serviços de apoio nos Emirados Árabes Unidos. Configuração de empresa, soluções bancárias, fiscais, legais e de vistos. Tornando seus sonhos empresariais em realidade!",
  head: [
    ["meta", { property: "og:title", content: "Especialistas em formação de empresas e serviços de apoio nos Emirados Árabes Unidos. Configuração de empresa, soluções bancárias, fiscais, legais e de vistos." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "Serviços",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Registro de empresa", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "Soluções bancárias", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "Migração", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "Recursos",
        items: [{ text: "Sobre nós", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Contatos", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configurações de Privacidade</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Política de Privacidade</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Regulamentações Legais para Serviços de IA</a>`,
    },

    localization: {
      placeholder4SearchInput: "Pergunte qualquer coisa...",
      placeholder4ChatFooter: "Pergunte qualquer coisa...",
      placeholder4ChatList: "Insira o tópico do chat...",
      buttonLabel4NavButton: "Chat instantâneo com especialista",
    },
    contact_form: {
      name: "Nome *",
      namePlaceholder: "seu nome",
      email: "Email *",
      emailPlaceholder: "seu endereço de email",
      phone: "Telefone *",
      phonePlaceholder: "ex.: +55 123456789 ou (55) 123 456-7890",
      phoneError: "Por favor, insira o número de telefone",
      category: "Como podemos ajudá-lo? *",
      categoryPlaceholder: "selecione o tipo de serviço",
      message: "Vamos discutir seus objetivos (opcional)",
      messagePlaceholder: "Por favor, compartilhe os detalhes do seu pedido para nos ajudar a preparar a melhor solução para suas necessidades",
      submit: "Enviar pedido",
      sending: "Enviando...",
      successTitle: "Obrigado!",
      successMessage: "Agradecemos muito seu interesse! Nossa equipe entrará em contato em breve para discutir suas necessidades.",
      defaultCategories: [
        "Formação de nova empresa",
        "Plano de expansão (ex.: nova filial ou franquia)",
        "Relocação de empresa",
        "Golden Visa",
        "Apenas para fins de visto",
        "Abertura de contas bancárias",
        "Outros Serviços",
      ],
      defaultButtonText: "Envie-nos uma mensagem",
      // defaultButtonText: "Obtenha uma consulta gratuita",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Resumo de negócios nos Emirados Árabes Unidos",
      // collapsed: false,
      items: [
        { text: "Registro de empresa", link: "company-registration/overview" },
        { text: "Prós & contras", link: "company-registration/benefits-problems" },
        { text: "Soluções bancárias corporativas", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "Vistos & EID", link: "company-registration/employment-visas" },
        { text: "Taxas e prazos", link: "company-registration/fees-timelines" },
        { text: "Pague somente após o sucesso", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Estruturas corporativas nos Emirados Árabes Unidos",
      collapsed: false,
      items: [
        { text: "Etapas para registro de empresa", link: "company-registration/insights/incorporation-steps" },
        { text: "Zonas livres dos Emirados Árabes Unidos", link: "company-registration/free-zones" },
        { text: "Continente dos Emirados Árabes Unidos", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Conformidade empresarial garantida nos Emirados Árabes Unidos",
      collapsed: false,
      items: [
        { text: "Aprovações garantidas de conta bancária corporativa", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Contas bancárias para negócios de alto risco", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Mantenha seu negócio em conformidade e protegido", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Jurídico, contabilidade e impostos",
      collapsed: false,
      items: [
        { text: "Considerações sobre contabilidade e impostos", link: "company-registration/accounting-legal" },
        { text: "Registro de UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Comparativos",
      collapsed: false,
      items: [
        { text: "Continente vs zonas livres", link: "comparison/mainland-vs-free-zones" },
        { text: "Comparação de entidades dos Emirados Árabes Unidos", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Sobre nós", link: "about" },
    { text: "Contatos", link: "contacts" },
    { text: "Política de Privacidade", link: "Privacy-Policy" },
    { text: "Regulamentações Legais para Serviços de IA", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "Contatos", link: `contacts` }]
// }