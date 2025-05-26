import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/zh"

export const zh = defineConfig({
  description:
    "多语言会议无需Zoom、插件或翻译员。InterMind是一款用于实时视频通话的AI语音翻译器——即说即译。",
  head: [
    ["meta", { property: "og:title", content: "实时视频通话AI语音翻译器 | InterMIND" }],
    [
      "meta",
      {
        name: "keywords",
        content: "AI语音翻译器, 实时翻译, 视频通话翻译, 多语言会议, Zoom翻译替代方案, 翻译工具",
      },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "产品",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/what-is-intermind`,
      },
      {
        text: "公司",
        activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/company/about`,
      },
      {
        text: "资源",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "定价", link: `${BASE_PATH}/#Pricing` },
          { text: "常见问题", link: `${BASE_PATH}/#FAQ` },
          { text: "用户评价", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarServices() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">隐私设置</a> | <a href="${BASE_PATH}/company/Privacy-Policy">隐私政策</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">AI服务法律规定</a>`,
    },

    localization: {
      placeholder4SearchInput: "搜索任何内容...",
      placeholder4ChatFooter: "询问任何问题...",
      placeholder4ChatList: "输入聊天主题...",
      buttonLabel4NavButton: "即时专家对话",
      buttonLabel4AuthButton: "登录",
    },
    contact_form: {
      name: "姓名 *",
      namePlaceholder: "您的姓名",
      email: "电子邮箱 *",
      emailPlaceholder: "您的电子邮箱地址",
      phone: "公司网站 *",
      phonePlaceholder: "例如：https://mind.com",
      phoneError: "请输入电话号码",
      category: "请告诉我们如何帮助您 *",
      categoryPlaceholder: "选择服务类型",
      message: "让我们讨论您的目标（可选）",
      messagePlaceholder: "请提供任何附加详情（可选）",
      submit: "提交请求",
      sending: "发送中...",
      successTitle: "感谢您！",
      successMessage: "非常感谢您的关注！我们的团队将很快联系您讨论您的需求。",
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
        { text: "什么是InterMIND？", link: "what-is-intermind" },
        { text: "工作原理", link: "how-it-works" },
        { text: "区域数据隐私", link: "privacy-architecture" },
        { text: "重点市场", link: "markets" },
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