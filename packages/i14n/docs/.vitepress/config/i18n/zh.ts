import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/zh"

export const zh = defineConfig({
  description: "专业的阿联酋公司成立和支持服务。提供公司设立、银行、税务、法律和签证解决方案。让您的商业梦想成为现实！",
  head: [
    ["meta", { property: "og:title", content: "专业的阿联酋公司成立和支持服务。提供公司设立、银行、税务、法律和签证解决方案。" }],
  ],

  themeConfig: {
    nav: [
      {
        text: "指南",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [{ text: "简介", link: `${BASE_PATH}/guide/what-is-imind` }],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">隐私设置</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">隐私政策</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">人工智能服务法律规定</a>`,
    },

    localization: {
      placeholder4SearchInput: "询问任何问题...",
      placeholder4ChatFooter: "询问任何问题...",
      placeholder4ChatList: "输入聊天主题...",
      buttonLabel4NavButton: "即时专家咨询",
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
      messagePlaceholder: "请分享您的咨询详情，以帮助我们为您准备最佳解决方案",
      submit: "提交请求",
      sending: "发送中...",
      successTitle: "感谢您！",
      successMessage: "非常感谢您的关注！我们的团队将很快与您联系，讨论您的需求。",
      defaultCategories: [
        "新公司成立",
        "扩张计划（如新分支机构或特许经营）",
        "公司迁移",
        "Golden Visa",
        "仅签证目的",
        "开立银行账户",
        "其他服务",
      ],
      defaultButtonText: "给我们发送消息",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "简介",
      collapsed: false,
      items: [
        { text: "什么是iMind？", link: "what-is-imind" },
        { text: "如何运作", link: "how-it-works" },
        { text: "InterMind的区域分段隐私架构", link: "privacy-architecture" },
        { text: "使用案例", link: "use-cases" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "关于我们", link: "/about" },
    { text: "联系我们", link: "/contacts" },
  ]
}