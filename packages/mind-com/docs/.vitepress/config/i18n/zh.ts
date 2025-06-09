import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/zh"

export const zh = defineConfig({
  description:
    "InterMIND为每个视频通话添加实时语音翻译，使国际团队永远不会因语言障碍而失去商机、时间或清晰度。",
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
          { text: "媒体资料", link: `${BASE_PATH}/resources/media-kit` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">隐私设置</a> | <a href="${BASE_PATH}/company/Privacy-Policy">隐私政策</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">人工智能服务法律规定</a>`,
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
      messagePlaceholder: "请提供任何附加详细信息（可选）",
      submit: "提交请求",
      sending: "发送中...",
      successTitle: "感谢您！",
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

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "概述",
      collapsed: false,
      items: [
        { text: "什么是InterMIND？", link: "overview/what-is-intermind" },
        { text: "工作原理", link: "overview/how-it-works" },
        { text: "视频会议平台", link: "overview/video-meeting-platform" },
        { text: "区域数据隐私", link: "overview/privacy-architecture" },
        { text: "重点市场", link: "overview/markets" },
      ],
    },
    {
      text: "指南",
      collapsed: false,
      items: [
        { text: "入门指南", link: "guide/getting-started" },
        { text: "账户管理", link: "guide/account-management" },
        { text: "创建会议", link: "guide/creating-meetings" },
        { text: "会议界面", link: "guide/meeting-interface" },
        { text: "用户角色", link: "guide/user-roles" },
        { text: "AI功能", link: "guide/ai-features" },
        { text: "会议历史", link: "guide/meeting-history" },
        { text: "常见问题", link: "guide/faq" },
        { text: "故障排除", link: "guide/troubleshooting" },
      ],
    },
  ]
}

function sidebarCompany(): DefaultTheme.SidebarItem[] {
  return [
    { text: "关于我们", link: "/about" },
    { text: "联系我们", link: "/contacts" },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    { text: "媒体资料", link: "/media-kit" },
  ]
}