/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/zh"

export const zh = defineConfig({
  description: "InterMIND 为视频通话提供实时语音翻译——即时消除语言障碍。由 mind.com 团队提供技术支持。",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND 为视频通话提供实时语音翻译——即时消除语言障碍。由 mind.com 团队提供技术支持。",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | 全球团队实时语音翻译" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND 在视频通话中提供即时语音翻译——清晰的多语言沟通，无障碍交流。由 mind.com 团队提供技术支持。",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "产品",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "定价",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "资源",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "常见问题", link: `${BASE_PATH}/#FAQ` },
          { text: "用户评价", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">隐私设置</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">隐私政策</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">AI 服务法律法规</a> | <a href="https://status.mind.com/">服务状态</a>`,
    },

    localization: {
      placeholder4SearchInput: "询问任何问题...",
      placeholder4ChatFooter: "询问任何问题...",
      placeholder4ChatList: "输入聊天主题...",
      buttonLabel4NavButton: "助手",
      buttonLabel4SignInButton: "登录",
      buttonLabel4GetStartedButton: "开始使用",
      buttonLabel4TryItButton: "免费试用",
      buttonLabel4BackToBlog: "← 返回博客",
    },
    contact_form: {
      name: "姓名 *",
      namePlaceholder: "您的姓名",
      email: "邮箱 *",
      emailPlaceholder: "您的邮箱地址",
      webSite: "公司网站",
      webSitePlaceholder: "例如：https://companyname.com",
      webSiteError: "请输入网站地址",
      category: "您的主要目标是什么？*",
      categoryPlaceholder: "选择最重要的内容",
      message: "让我们讨论您的目标（可选）",
      messagePlaceholder: "请提供任何其他详细信息（可选）",
      submit: "提交请求",
      sending: "发送中...",
      successTitle: "谢谢您！",
      successMessage: "我们已收到您的消息——我们的团队将很快与您联系。",
      defaultCategories: [],

      defaultButtonText: "给我们发送消息",
      // defaultButtonText: "获取免费咨询",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "概述",
      collapsed: false,
      items: [
        { text: "什么是 InterMIND？", link: "overview/what-is-intermind" },
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
        { text: "快速入门", link: "guide/getting-started" },
        { text: "账户管理", link: "guide/account-management" },
        { text: "创建会议", link: "guide/creating-meetings" },
        { text: "会议界面", link: "guide/meeting-interface" },
        { text: "用户角色", link: "guide/user-roles" },
        { text: "AI 功能", link: "guide/ai-features" },
        { text: "会议历史", link: "guide/meeting-history" },
        { text: "常见问题", link: "guide/faq" },
        { text: "故障排除", link: "guide/troubleshooting" },
        { text: "定价", link: "guide/pricing" },
        { text: "帮助与支持", link: "guide/help-support" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "支持",
      collapsed: false,
      items: [
        { text: "获取支持", link: "/help" },
        { text: "隐私政策", link: "/company/Privacy-Policy" },
        { text: "AI 法律指南", link: "/company/Legal-Regulations-for-AI-Services" },
      ],
    },
    // {
    //   text: "资源",
    //   collapsed: false,
    //   items: [
    //     { text: "品牌资产", link: "/media-kit" },
    //     // { text: "账户管理", link: "guide/account-management" },
    //   ],
    // },
    {
      text: "公司",
      collapsed: false,
      items: [
        { text: "关于我们", link: "/company/about" },
        { text: "团队", link: "/company/team" },
        { text: "招聘", link: "/company/careers" },
        { text: "联系我们", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "执行摘要", link: "/InterMind-Executive-Summary" },
    { text: "市场进入策略", link: "/go-to-market-strategy" },
    { text: "投资者推介", link: "/InterMind-Investor-Pitch" },
    { text: "财务预测说明（第1-3年）", link: "/Financial-Projections-Justification" },
  ]
}