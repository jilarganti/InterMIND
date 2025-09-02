/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ja"

export const ja = defineConfig({
  description: "19以上の言語での同時通訳機能を備えたプロフェッショナルなビデオ会議。グローバルチーム向けに、トーン、意図、文脈を捉えるAI搭載翻訳。",
  head: [
    ["meta", { property: "og:title", content: "InterMIND | グローバルチーム向けリアルタイム音声翻訳" }],
    [
      "meta",
      {
        property: "og:description",
        content: "19以上の言語での同時音声通訳機能を備えたプロフェッショナルなビデオ会議。AI搭載翻訳でグローバルに会議し、自然にコミュニケーション。",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "製品",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "料金",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "リソース",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "よくある質問", link: `${BASE_PATH}/#FAQ` },
          { text: "お客様の声", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
      [`${BASE_PATH}/account/`]: { base: `${BASE_PATH}/account/`, items: sidebarAccount() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">プライバシー設定</a> | <a href="${BASE_PATH}/resources/company/privacy-policy">プライバシーポリシー</a> | <a href="${BASE_PATH}/resources/company/legal-regulations-for-ai-services">AIサービスの法的規制</a> | <a href="https://status.mind.com/">サービス状況</a>`,
    },

    localization: {
      placeholder4SearchInput: "何でもお聞きください...",
      placeholder4ChatFooter: "何でもお聞きください...",
      placeholder4ChatList: "チャットトピックを入力...",
      buttonLabel4NavButton: "アシスタント",
      buttonLabel4SignInButton: "サインイン",
      buttonLabel4GetStartedButton: "始める",
      buttonLabel4TryItButton: "無料で試す",
      buttonLabel4BackToBlog: "← ブログに戻る",
    },
    contact_form: {
      name: "お名前 *",
      namePlaceholder: "お名前",
      email: "メールアドレス *",
      emailPlaceholder: "メールアドレス",
      webSite: "会社のウェブサイト",
      webSitePlaceholder: "例：https://companyname.com",
      webSiteError: "ウェブサイトを入力してください",
      category: "主な目標は何ですか？ *",
      categoryPlaceholder: "最も重要なものを選択",
      message: "目標について話し合いましょう（任意）",
      messagePlaceholder: "追加の詳細があればご記入ください（任意）",
      submit: "リクエストを送信",
      sending: "送信中...",
      successTitle: "ありがとうございます！",
      successMessage: "メッセージを受信いたしました。チームより間もなくご連絡いたします。",
      defaultCategories: [],

      defaultButtonText: "メッセージを送る",
      // defaultButtonText: "無料相談を受ける",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "概要",
      collapsed: false,
      items: [
        { text: "InterMINDとは？", link: "overview/what-is-intermind" },
        { text: "仕組み", link: "overview/how-it-works" },
        { text: "ビデオ会議プラットフォーム", link: "overview/video-meeting-platform" },
        { text: "翻訳と通訳：違いは何ですか？", link: "overview/translation-vs-interpretation-whats-the-difference" },
        { text: "地域データプライバシー", link: "overview/privacy-architecture" },
        { text: "優先市場", link: "overview/markets" },
      ],
    },
    {
      text: "ガイド",
      collapsed: false,
      items: [
        { text: "はじめに", link: "guide/getting-started" },
        { text: "アカウント管理", link: "guide/account-management" },
        { text: "会議の作成", link: "guide/creating-meetings" },
        { text: "会議インターフェース", link: "guide/meeting-interface" },
        { text: "ユーザーロール", link: "guide/user-roles" },
        { text: "AI機能", link: "guide/ai-features" },
        { text: "会議履歴", link: "guide/meeting-history" },
        { text: "よくある質問", link: "guide/faq" },
        { text: "トラブルシューティング", link: "guide/troubleshooting" },
        { text: "料金", link: "guide/pricing" },
        { text: "ヘルプ＆サポート", link: "guide/help-support" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "サポート",
      collapsed: false,
      items: [
        { text: "サポートを受ける", link: "/help" },
        { text: "プライバシーポリシー", link: "/company/privacy-policy" },
        { text: "AI法的ガイド", link: "/company/legal-regulations-for-ai-services" },
      ],
    },
    // {
    //   text: "リソース",
    //   collapsed: false,
    //   items: [
    //     { text: "ブランドアセット", link: "/media-kit" },
    //     // { text: "アカウント管理", link: "guide/account-management" },
    //   ],
    // },
    {
      text: "会社情報",
      collapsed: false,
      items: [
        { text: "会社概要", link: "/company/about" },
        { text: "チーム", link: "/company/team" },
        { text: "採用情報", link: "/company/careers" },
        { text: "お問い合わせ", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "エグゼクティブサマリー", link: "/InterMind-Executive-Summary" },
    { text: "市場参入戦略", link: "/go-to-market-strategy" },
    { text: "投資家向けピッチ", link: "/InterMind-Investor-Pitch" },
    { text: "財務予測の根拠（1〜3年目）", link: "/Financial-Projections-Justification" },
  ]
}

function sidebarAccount(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ホーム",
      link: "/",
    },
    {
      text: "会議",
      collapsed: false,
      items: [
        { text: "会議", link: "/meetings" },
        { text: "履歴", link: "/history" },
        { text: "アップグレード", link: "/upgrade" },
      ],
    },

    {
      text: "設定",
      collapsed: true,
      items: [
        { text: "プロフィール", link: "/settings/profile" },
        { text: "設定", link: "/settings/settings" },
        { text: "設定", link: "/settings/upgrade" },
      ],
    },
  ]
}
