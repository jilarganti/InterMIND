import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ja"

export const ja = defineConfig({
  description: "UAEにおける専門的な会社設立・サポートサービス。会社設立、銀行取引、税務、法務、ビザソリューションを提供。ビジネスの夢を実現します！",
  head: [
    ["meta", { property: "og:title", content: "UAEにおける専門的な会社設立・サポートサービス。会社設立、銀行取引、税務、法務、ビザソリューションを提供。" }],
  ],

  themeConfig: {
    nav: [
      {
        text: "InterMind",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [
          {
            text: "製品",
            items: [
              { text: "InterMINDを始める", link: `${BASE_PATH}/guide/what-is-intermind` },
              { text: "仕組みについて", link: `${BASE_PATH}/guide/how-it-works` },
              { text: "よくある質問", link: `${BASE_PATH}/#frequently-asked-questions` },
            ],
          },
          {
            text: "インサイト",
            items: [
              { text: "お客様の声", link: `${BASE_PATH}/#what-customers-are-saying` },
              { text: "料金", link: `${BASE_PATH}/#clear-and-simple-pricing` },
            ],
          },
        ],
      },
      {
        text: "Mind",
        activeMatch: `${BASE_PATH}/resources/`,
        items: [
          {
            text: "会社情報",
            items: [
              { text: "Mind.comについて", link: `${BASE_PATH}/resources/about` },
              { text: "お問い合わせ", link: `${BASE_PATH}/resources/contacts` },
            ],
          },
          {
            text: "インサイト",
            items: [{ text: "iMind.com", link: "https://imind.com" }],
          },
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
      placeholder4SearchInput: "質問を入力してください...",
      placeholder4ChatFooter: "質問を入力してください...",
      placeholder4ChatList: "チャットトピックを入力...",
      buttonLabel4NavButton: "専門家とすぐにチャット",
    },
    contact_form: {
      name: "お名前 *",
      namePlaceholder: "あなたのお名前",
      email: "メールアドレス *",
      emailPlaceholder: "あなたのメールアドレス",
      phone: "企業サイト *",
      phonePlaceholder: "例：https://mind.com",
      phoneError: "電話番号を入力してください",
      category: "ご希望のサービスをお選びください *",
      categoryPlaceholder: "サービスタイプを選択",
      message: "目標についてお聞かせください（任意）",
      messagePlaceholder: "追加の詳細情報をご記入ください（任意）",
      submit: "リクエストを送信",
      sending: "送信中...",
      successTitle: "ありがとうございます！",
      successMessage: "ご興味をお持ちいただき、誠にありがとうございます！担当者が shortly にご連絡させていただきます。",
      defaultCategories: [
        "リアルタイム音声通訳に興味があります",
        "AI会議アシスタントに興味があります",
        "地域ベースのプライバシーとデータ管理に興味があります",
        "その他 / 該当なし",
      ],

      defaultButtonText: "メッセージを送信",
      // defaultButtonText: "無料相談を受ける",
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
        { text: "仕組みについて", link: "how-it-works" },
        { text: "InterMindによる地域分割プライバシーアーキテクチャ", link: "privacy-architecture" },
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