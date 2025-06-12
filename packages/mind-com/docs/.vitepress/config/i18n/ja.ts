import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ja"

export const ja = defineConfig({
  description:
    "InterMINDは、すべてのビデオ通話にリアルタイム音声翻訳を追加し、国際チームが言語の壁によって取引、時間、明確性を失うことがないようにします。",
  head: [["meta", { property: "og:title", content: "同時通訳によるビデオ通話 | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "製品",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      // {
      //   text: "会社",
      //   activeMatch: `${BASE_PATH}/company/`,
      //   link: `${BASE_PATH}/company/about`,
      // },
      {
        text: "料金",
        // activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "リソース",
        activeMatch: `${BASE_PATH}/product/`,
        // items: [
        //   {
        //     text: "探索",
        items: [
          // { text: "料金", link: `${BASE_PATH}/#Pricing` },
          { text: "よくある質問", link: `${BASE_PATH}/#FAQ` },
          { text: "お客様の声", link: `${BASE_PATH}/#Testimonials` },
          // { text: "チーム", link: `${BASE_PATH}/resources/team` },
          // { text: "メディアキット", link: `${BASE_PATH}/resources/media-kit` },
        ],
        //   },
        // ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      // [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">プライバシー設定</a> | <a href="${BASE_PATH}/company/Privacy-Policy">プライバシーポリシー</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">AIサービスの法的規制</a> | <a href="https://status.mind.com/">サービス状況</a>`,
    },

    localization: {
      placeholder4SearchInput: "何でもお聞きください...",
      placeholder4ChatFooter: "何でもお聞きください...",
      placeholder4ChatList: "チャットトピックを入力...",
      buttonLabel4NavButton: "即座の専門家チャット",
      buttonLabel4AuthButton: "サインイン",
    },
    contact_form: {
      name: "お名前 *",
      namePlaceholder: "お名前",
      email: "メールアドレス *",
      emailPlaceholder: "メールアドレス",
      webSite: "会社のウェブサイト *",
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
      defaultCategories: [
        "会議での言語の壁を排除",
        "会議を検索可能で実行可能にする",
        "コンプライアンスとデータ居住性の確保（EU / US / アジア）",
        "探索中 / その他",
      ],

      defaultButtonText: "メッセージを送信",
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
        // { text: "仕組み", link: "overview/how-it-works" },
      ],
    },
    {
      text: "リソース",
      collapsed: false,
      items: [
        { text: "ブランドアセット", link: "/media-kit" },
        // { text: "アカウント管理", link: "guide/account-management" },
      ],
    },
    {
      text: "会社",
      collapsed: false,
      items: [
        { text: "会社概要", link: "/company/about" },
        // { text: "チーム", link: "/team" },
        { text: "お問い合わせ", link: "/company/contacts" },
      ],
    },
  ]
}

// function sidebarResources(): DefaultTheme.SidebarItem[] {
//   return [
//     { text: "会社概要", link: "/about" },
//     { text: "お問い合わせ", link: "/contacts" },
//     { text: "サポートを受ける", link: "/help" },
//     { text: "ブランドアセット", link: "/media-kit" },
//   ]
// }