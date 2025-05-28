import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/zh"

export const zh = defineConfig({
  description:
    "InterMind是一个实时多语言视频会议口译平台。每位参与者都可以使用母语交谈 — 并听到其他人仿佛也在使用同样的语言。无需插件。无需下载。只需在100多种语言之间进行自然流畅的对话。",
  head: [["meta", { property: "og:title", content: "由同声传译驱动的视频通话 | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "产品",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
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
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">隐私设置</a> | <a href="${BASE_PATH}/company/Privacy-Policy">隐私政策</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">人工智能服务法律规定</a>`,
    },

    localization: {
      placeholder4SearchInput: "输入任何问题...",
      placeholder4ChatFooter: "输入任何问题...",
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
      successMessage: "非常感谢您的关注！我们的团队将很快与您联系，讨论您的需求。",
      defaultCategories: [
        "我对实时语音口译感兴趣",
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
      text: "概述",
      collapsed: false,
      items: [
        { text: "什么是InterMIND？", link: "overview/what-is-intermind" },
        { text: "工作原理", link: "overview/how-it-works" },
        { text: "区域数据隐私", link: "overview/privacy-architecture" },
        { text: "重点市场", link: "overview/markets" },
      ],
    },
    {
      text: "指南",
      collapsed: false,
      items: [{ text: "入门指南", link: "guide/getting-started" }],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "关于我们", link: "/about" },
    { text: "联系我们", link: "/contacts" },
  ]
}