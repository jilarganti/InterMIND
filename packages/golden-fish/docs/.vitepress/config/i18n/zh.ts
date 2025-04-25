import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/zh"

export const zh = defineConfig({
  description: "阿联酋公司成立及支持服务专家。公司设立、银行、税务、法律及签证解决方案。让您的商业梦想成为现实！",
  head: [
    ["meta", { property: "og:title", content: "阿联酋公司成立及支持服务专家。公司设立、银行、税务、法律及签证解决方案。" }],
  ],

  themeConfig: {
    nav: [
      {
        text: "服务",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "公司注册", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "银行解决方案", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "移民", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "资源",
        items: [{ text: "关于我们", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "联系方式", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">隐私设置</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">隐私政策</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">人工智能服务法律法规</a>`,
    },

    localization: {
      placeholder4SearchInput: "随时咨询...",
      placeholder4ChatFooter: "随时咨询...",
      placeholder4ChatList: "输入聊天主题...",
      buttonLabel4NavButton: "即时专家聊天",
    },
    contact_form: {
      name: "姓名 *",
      namePlaceholder: "您的姓名",
      email: "电子邮件 *",
      emailPlaceholder: "您的电子邮件地址",
      phone: "电话 *",
      phonePlaceholder: "例如：+1 1234567890 或 (1) 123 456-7890",
      phoneError: "请输入电话号码",
      category: "我们如何帮助您？ *",
      categoryPlaceholder: "选择服务类型",
      message: "让我们讨论您的目标（可选）",
      messagePlaceholder: "请分享您的咨询详情，以帮助我们为您准备最佳解决方案",
      submit: "提交请求",
      sending: "发送中...",
      successTitle: "谢谢您！",
      successMessage: "我们非常感谢您的关注！我们的团队将尽快与您联系，讨论您的需求。",
      defaultCategories: [
        "新公司成立",
        "扩张计划（例如新分支或特许经营）",
        "公司搬迁",
        "黄金签证",
        "仅限签证目的",
        "开设银行账户",
        "其他服务",
      ],
      defaultButtonText: "给我们留言",
      // defaultButtonText: "获取免费咨询",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "阿联酋商业概览",
      // collapsed: false,
      items: [
        { text: "公司注册", link: "company-registration/overview" },
        { text: "优势与劣势", link: "company-registration/benefits-problems" },
        { text: "企业银行解决方案", link: "company-registration/banking" },
        { text: "黄金签证", link: "company-registration//golden-visa" },
        { text: "签证与EID", link: "company-registration/employment-visas" },
        { text: "费用与时间表", link: "company-registration/fees-timelines" },
        { text: "成功后付款", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "阿联酋公司架构",
      collapsed: false,
      items: [
        { text: "公司注册步骤", link: "company-registration/insights/incorporation-steps" },
        { text: "阿联酋自由区", link: "company-registration/free-zones" },
        { text: "阿联酋大陆", link: "company-registration/mainland" },
      ],
    },
    {
      text: "阿联酋商业合规保障",
      collapsed: false,
      items: [
        { text: "保证企业银行账户批准", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "高风险业务的银行账户", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "保持您的业务合规与受保护", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "法律、会计和税务",
      collapsed: false,
      items: [
        { text: "会计和税务考虑", link: "company-registration/accounting-legal" },
        { text: "UBO登记", link: "company-registration/ubo" },
      ],
    },
    {
      text: "比较",
      collapsed: false,
      items: [
        { text: "大陆与自由区对比", link: "comparison/mainland-vs-free-zones" },
        { text: "阿联酋实体比较", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "关于我们", link: "about" },
    { text: "联系方式", link: "contacts" },
    { text: "隐私政策", link: "Privacy-Policy" },
    { text: "人工智能服务法律法规", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "联系方式", link: `contacts` }]
// }