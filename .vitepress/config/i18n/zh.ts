import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/zh"

export const zh = defineConfig({
  description: "专业的阿联酋公司成立和支持服务。公司设立、银行业务、税务、法律和签证解决方案。让您的商业梦想成为现实！",
  head: [["meta", { property: "og:title", content: "专业的阿联酋公司成立和支持服务。公司设立、银行业务、税务、法律和签证解决方案。" }]],

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
      { text: "联系我们", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: '©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">隐私设置</a>',
    },

    contact_form: {
      name: "姓名 *",
      namePlaceholder: "您的姓名",
      email: "电子邮箱 *",
      emailPlaceholder: "您的电子邮箱地址",
      phone: "电话 *",
      phonePlaceholder: "例如：+1 1234567890 或 (1) 123 456-7890",
      phoneError: "请输入电话号码",
      category: "我们如何帮助您？ *",
      categoryPlaceholder: "选择服务类型",
      message: "让我们讨论您的目标（可选）",
      messagePlaceholder: "描述您的项目或需求",
      submit: "提交请求",
      sending: "发送中...",
      successTitle: "感谢您！",
      successMessage: "非常感谢您的关注！我们的团队将尽快与您联系，讨论您的需求。",
      defaultCategories: ["公司注册", "开设银行账户", "EID和Golden Visa", "其他服务"],
      defaultButtonText: "获取免费咨询",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "阿联酋商业概述",
      collapsed: false,
      items: [
        { text: "公司注册", link: "company-registration/overview" },
        { text: "优势与劣势", link: "company-registration/benefits-problems" },
        { text: "企业银行解决方案", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "签证和EID", link: "company-registration/employment-visas" },
        { text: "费用和时间表", link: "company-registration/fees-timelines" },
      ],
    },
    {
      text: "阿联酋公司结构",
      collapsed: true,
      items: [
        { text: "公司注册步骤", link: "company-registration/insights/incorporation-steps" },
        { text: "阿联酋自由区", link: "company-registration/free-zones" },
        { text: "阿联酋大陆", link: "company-registration/mainland" },
      ],
    },
    {
      text: "阿联酋商业合规保证",
      collapsed: true,
      items: [
        { text: "保证企业银行账户审批", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "高风险企业银行账户", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "保持业务合规和受保护", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "法律、会计和税务",
      collapsed: true,
      items: [
        { text: "会计和税务考虑", link: "company-registration/accounting-legal" },
        { text: "UBO登记", link: "company-registration/ubo" },
      ],
    },
    {
      text: "比较",
      collapsed: true,
      items: [
        { text: "大陆与自由区对比", link: "comparison/mainland-vs-free-zones" },
        { text: "阿联酋实体比较", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [{ text: "关于我们", link: `about` }]
}

function sidebarContactUs(): DefaultTheme.SidebarItem[] {
  return [{ text: "联系方式", link: `contacts` }]
}
