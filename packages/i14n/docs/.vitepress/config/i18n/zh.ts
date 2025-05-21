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
        text: "InterMind",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [{ text: "简介", link: `${BASE_PATH}/guide/what-is-intermind` }],
      },
      {
        text: "Mind",
        items: [
          { text: "关于我们", link: `${BASE_PATH}/resources/about` },
          { text: "联系我们", link: `${BASE_PATH}/resources/contacts` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">隐私设置</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">隐私政策</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">人工智能服务法律规定</a>`,
    },

    localization: {
      placeholder4SearchInput: "请输入问题...",
      placeholder4ChatFooter: "请输入问题...",
      placeholder4ChatList: "输入聊天主题...",
      buttonLabel4NavButton: "即时专家咨询",
    },
    contact_form: {
      name: "姓名 *",
      namePlaceholder: "您的姓名",
      email: "电子邮箱 *",
      emailPlaceholder: "您的电子邮箱地址",
      phone: "公司网站 *",
      phonePlaceholder: "例如：https://imind.com",
      phoneError: "请输入电话号码",
      category: "请告诉我们如何帮助您 *",
      categoryPlaceholder: "选择服务类型",
      message: "让我们讨论您的目标（可选）",
      messagePlaceholder: "请提供任何附加详细信息（可选）",
      submit: "提交请求",
      sending: "发送中...",
      successTitle: "谢谢！",
      successMessage: "非常感谢您的关注！我们的团队将很快与您联系，讨论您的需求。",
      defaultCategories: [
        "我对实时语音翻译感兴趣",
        "我对AI会议助手感兴趣",
        "我对基于区域的隐私和数据控制感兴趣",
        "其他/未列出",
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