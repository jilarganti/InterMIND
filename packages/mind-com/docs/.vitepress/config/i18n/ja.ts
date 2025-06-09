import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ja"

export const ja = defineConfig({
  description:
    "InterMINDは、国際チームが言語の壁によって取引、時間、明確さを失うことがないよう、すべてのビデオ通話にリアルタイム音声翻訳を追加します。",
  head: [["meta", { property: "og:title", content: "同時通訳機能搭載のビデオ通話 | InterMIND" }]],

  themeConfig: {
    nav: [
      {
        text: "製品",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "企業情報",
        activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/company/about`,
      },
      {
        text: "料金",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "リソース",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "お客様の声", link: `${BASE_PATH}/#Testimonials` },
          { text: "メディアキット", link: `${BASE_PATH}/resources/media-kit` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">プライバシー設定</a> | <a href="${BASE_PATH}/company/Privacy-Policy">プライバシーポリシー</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">AIサービスの法的規制</a> | <a href="https://status.mind.com/">サービスステータス</a>`,
    },

    localization: {
      placeholder4SearchInput: "質問を入力してください...",
      placeholder4ChatFooter: "質問を入力してください...",
      placeholder4ChatList: "チャットトピックを入力...",
      buttonLabel4NavButton: "インスタントエキスパートチャット",
      buttonLabel4AuthButton: "サインイン",
    },
    contact_form: {
      name: "お名前 *",
      namePlaceholder: "あなたのお名前",
      email: "メールアドレス *",
      emailPlaceholder: "あなたのメールアドレス",
      phone: "企業サイト *",
      phonePlaceholder: "例：https://mind.com",
      phoneError: "電話番号を入力してください",
      category: "ご用件をお聞かせください *",
      categoryPlaceholder: "サービスタイプを選択",
      message: "目標についてご相談ください（任意）",
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
        { text: "FAQ", link: "guide/faq" },
        { text: "トラブルシューティング", link: "guide/troubleshooting" },
      ],
    },
  ]
}

function sidebarCompany(): DefaultTheme.SidebarItem[] {
  return [
    { text: "企業情報", link: "/about" },
    { text: "お問い合わせ", link: "/contacts" },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [{ text: "メディアキット", link: "/media-kit" }]
}