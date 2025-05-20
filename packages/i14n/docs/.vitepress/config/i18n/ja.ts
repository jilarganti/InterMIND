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
        text: "/mind",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [{ text: "はじめに", link: `${BASE_PATH}/guide/what-is-imind` }],
      },
      {
        text: "mind",
        items: [
          { text: "会社概要", link: `${BASE_PATH}/resources/about` },
          { text: "お問い合わせ", link: `${BASE_PATH}/resources/contacts` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/guide/`]: { base: `${BASE_PATH}/guide/`, items: sidebarServices() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">プライバシー設定</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">プライバシーポリシー</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AIサービスの法的規制</a>`,
    },

    localization: {
      placeholder4SearchInput: "質問を入力してください...",
      placeholder4ChatFooter: "質問を入力してください...",
      placeholder4ChatList: "チャットトピックを入力...",
      buttonLabel4NavButton: "即時専門家チャット",
    },
    contact_form: {
      name: "お名前 *",
      namePlaceholder: "あなたのお名前",
      email: "メールアドレス *",
      emailPlaceholder: "あなたのメールアドレス",
      phone: "企業サイト *",
      phonePlaceholder: "例：https://imind.com",
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
        "AI会議アシスタントに興味があります",
        "地域ベースのプライバシーとデータ管理に興味があります",
        "その他 / 該当なし",
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
        { text: "iMindとは？", link: "what-is-imind" },
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