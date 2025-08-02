import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ja"

export const ja = defineConfig({
  description: "InterMINDはビデオ通話のリアルタイム音声翻訳を提供し、言語の壁を即座に解消します。mind.comチームが開発。",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMINDはビデオ通話のリアルタイム音声翻訳を提供し、言語の壁を即座に解消します。mind.comチームが開発。",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | グローバルチームのためのリアルタイム音声翻訳" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMINDはビデオ通話での即時音声翻訳を提供—クリアで多言語のコミュニケーションを実現。mind.comチームが開発。",
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
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">プライバシー設定</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">プライバシーポリシー</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">AIサービスの法的規制</a> | <a href="https://status.mind.com/">サービスステータス</a>`,
    },

    localization: {
      placeholder4SearchInput: "質問を入力してください...",
      placeholder4ChatFooter: "質問を入力してください...",
      placeholder4ChatList: "チャットトピックを入力...",
      buttonLabel4NavButton: "インスタントエキスパートチャット",
      buttonLabel4SignInButton: "サインイン",
      buttonLabel4GetStartedButton: "はじめる",
    },
    contact_form: {
      name: "お名前 *",
      namePlaceholder: "あなたのお名前",
      email: "メールアドレス *",
      emailPlaceholder: "あなたのメールアドレス",
      webSite: "会社のウェブサイト *",
      webSitePlaceholder: "例：https://companyname.com",
      webSiteError: "ウェブサイトを入力してください",
      category: "主な目的は何ですか？ *",
      categoryPlaceholder: "最も重要な項目を選択してください",
      message: "目標についてお聞かせください（任意）",
      messagePlaceholder: "追加の詳細情報をご記入ください（任意）",
      submit: "リクエストを送信",
      sending: "送信中...",
      successTitle: "ありがとうございます！",
      successMessage: "メッセージを受け付けました — チームが早急にご連絡いたします。",
      defaultCategories: [
        "会議での言語の壁を解消",
        "会議を検索可能かつアクション可能に",
        "コンプライアンスとデータ所在地の確保（EU/US/アジア）",
        "情報収集/その他",
      ],

      defaultButtonText: "メッセージを送信",
    },
  } as DefaultTheme.Config,
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
        { text: "重点市場", link: "overview/markets" },
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
      ],
    },
    {
      text: "リソース",
      collapsed: false,
      items: [
        { text: "ブランドアセット", link: "/media-kit" },
      ],
    },
    {
      text: "企業情報",
      collapsed: false,
      items: [
        { text: "会社概要", link: "/company/about" },
        { text: "チーム", link: "/company/team" },
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
    { text: "財務予測の根拠（1-3年目）", link: "/Financial-Projections-Justification" },
  ]
}