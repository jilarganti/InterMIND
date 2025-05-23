import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ja"

export const ja = defineConfig({
  description:
    "多言語ミーティングにZoom、プラグイン、通訳者は必要ありません。InterMindはリアルタイムビデオ通話用のAI音声翻訳ツールです—即座に話して翻訳できます。",
  head: [
    ["meta", { property: "og:title", content: "ライブビデオ通話用AIボイス翻訳 | InterMIND" }],
    [
      "meta",
      {
        name: "keywords",
        content: "AI音声翻訳、リアルタイム翻訳、ビデオ通話翻訳、多言語ミーティング、Zoom翻訳代替、通訳ツール",
      },
    ],
  ],

  themeConfig: {
    nav: [
      {
        text: "製品",
        activeMatch: `${BASE_PATH}/guide/`,
        link: `${BASE_PATH}/guide/what-is-intermind`,
      },
      {
        text: "会社概要",
        activeMatch: `${BASE_PATH}/resources/`,
        link: `${BASE_PATH}/resources/about`,
      },
      {
        text: "リソース",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [
          { text: "料金", link: `${BASE_PATH}/#clear-and-simple-pricing` },
          { text: "よくある質問", link: `${BASE_PATH}/#frequently-asked-questions` },
          { text: "お客様の声", link: `${BASE_PATH}/#what-customers-are-saying` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">プライバシー設定</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">プライバシーポリシー</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AIサービスの法的規制</a>`,
    },

    localization: {
      placeholder4SearchInput: "何でも質問してください...",
      placeholder4ChatFooter: "何でも質問してください...",
      placeholder4ChatList: "チャットトピックを入力...",
      buttonLabel4NavButton: "インスタントエキスパートチャット",
    },
    contact_form: {
      name: "お名前 *",
      namePlaceholder: "あなたのお名前",
      email: "メールアドレス *",
      emailPlaceholder: "あなたのメールアドレス",
      phone: "企業サイト *",
      phonePlaceholder: "例：https://mind.com",
      phoneError: "電話番号を入力してください",
      category: "ご要望をお聞かせください *",
      categoryPlaceholder: "サービスタイプを選択",
      message: "目標についてご相談ください（任意）",
      messagePlaceholder: "追加の詳細情報をご記入ください（任意）",
      submit: "リクエストを送信",
      sending: "送信中...",
      successTitle: "ありがとうございます！",
      successMessage: "ご興味をお持ちいただき、誠にありがとうございます！担当チームが shortly にご連絡させていただきます。",
      defaultCategories: [
        "リアルタイム音声通訳に興味があります",
        "AIミーティングアシスタントに興味があります",
        "地域ベースのプライバシーとデータ管理に興味があります",
        "その他 / リストにない項目",
      ],

      defaultButtonText: "メッセージを送信",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "はじめに",
      collapsed: false,
      items: [
        { text: "InterMINDとは？", link: "what-is-intermind" },
        { text: "仕組み", link: "how-it-works" },
        { text: "地域データプライバシー", link: "privacy-architecture" },
        { text: "ユースケース", link: "use-cases" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "会社概要", link: "/about" },
    { text: "お問い合わせ", link: "/contacts" },
  ]
}