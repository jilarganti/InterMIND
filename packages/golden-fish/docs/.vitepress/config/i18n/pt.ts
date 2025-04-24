import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/pt"

export const pt = defineConfig({
  description: "Serviços especializados de formação e suporte de empresas nos EAU. Soluções para constituição de empresas, serviços bancários, impostos, questões legais e vistos. Transformando seus sonhos empresariais em realidade!",
  head: [
    ["meta", { property: "og:title", content: "Serviços especializados de formação e suporte de empresas nos EAU. Soluções para constituição de empresas, serviços bancários, impostos, questões legais e vistos." }],
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
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Configurações de Privacidade</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Política de Privacidade</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Regulamentações Legais para Serviços de IA</a>`,
    },

    localization: {
      placeholder4SearchInput: "Pesquisa rápida...",
    },
    contact_form: {
      name: "Nome *",
      namePlaceholder: "seu nome",
      email: "E-mail *",
      emailPlaceholder: "seu endereço de e-mail",
      phone: "Telefone *",
      phonePlaceholder: "ex., +1 1234567890 ou (1) 123 456-7890",
      phoneError: "Por favor, insira o número de telefone",
      category: "Como podemos ajudar? *",
      categoryPlaceholder: "selecione o tipo de serviço",
      message: "Vamos discutir seus objetivos (opcional)",
      messagePlaceholder: "Por favor, compartilhe os detalhes da sua consulta para nos ajudar a preparar a melhor solução para suas necessidades",
      submit: "Enviar solicitação",
      sending: "Enviando...",
      successTitle: "Obrigado!",
      successMessage: "Agradecemos muito seu interesse! Nossa equipe entrará em contato em breve para discutir suas necessidades.",
      defaultCategories: [
        "Nova formação de empresa",
        "Plano de expansão (ex. nova filial ou franquia)",
        "Relocalização de empresa",
        "Golden Visa",
        "Apenas para fins de visto",
        "Abertura de contas bancárias",
        "Outros Serviços",
      ],
      defaultButtonText: "Envie-nos uma mensagem",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Resumo de negócios nos EAU",
      items: [
        { text: "Registro de empresa", link: "company-registration/overview" },
        { text: "Prós e contras", link: "company-registration/benefits-problems" },
        { text: "Soluções bancárias corporativas", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "Vistos e EID", link: "company-registration/employment-visas" },
        { text: "Taxas e prazos", link: "company-registration/fees-timelines" },
        { text: "Pague apenas após o sucesso", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Estruturas corporativas nos EAU",
      collapsed: false,
      items: [
        { text: "Etapas de registro de empresa", link: "company-registration/insights/incorporation-steps" },
        { text: "Free zones dos EAU", link: "company-registration/free-zones" },
        { text: "Mainland dos EAU", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Conformidade empresarial garantida nos EAU",
      collapsed: false,
      items: [
        { text: "Aprovações garantidas de contas bancárias corporativas", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Contas bancárias para negócios de alto risco", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Mantenha seu negócio em conformidade e protegido", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Jurídico, contabilidade e impostos",
      collapsed: false,
      items: [
        { text: "Considerações contábeis e fiscais", link: "company-registration/accounting-legal" },
        { text: "Registro UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Comparações",
      collapsed: false,
      items: [
        { text: "Mainland vs free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "Comparação de entidades nos EAU", link: "comparison/entity-types" },
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