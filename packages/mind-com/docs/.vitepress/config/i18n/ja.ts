import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ja"

export const ja = defineConfig({
  description:
    "InterMindは多言語ビデオ会議のためのリアルタイム通訳プラットフォームです。参加者は母国語で話し、他の参加者も母国語で話しているかのように聞くことができます。プラグインも、ダウンロードも不要。100以上の言語で自然な会話をシームレスに実現します。",
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
        text: "リソース",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "料金", link: `${BASE_PATH}/#Pricing` },
          { text: "よくある質問", link: `${BASE_PATH}/#FAQ` },
          { text: "お客様の声", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarServices() },
      [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">プライバシー設定</a> | <a href="${BASE_PATH}/company/Privacy-Policy">プライバシーポリシー</a> | <a href="${BASE_PATH}/company/Legal-Regulations-for-AI-Services">AIサービスの法的規制</a>`,
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
      category: "ご用件をお選びください *",
      categoryPlaceholder: "サービスタイプを選択",
      message: "目的についてお聞かせください（任意）",
      messagePlaceholder: "追加の詳細情報をご記入ください（任意）",
      submit: "リクエストを送信",
      sending: "送信中...",
      successTitle: "ありがとうございます！",
      successMessage: "ご興味をお持ちいただき、誠にありがとうございます！担当者が shortly にご連絡させていただきます。",
      defaultCategories: [
        "リアルタイム音声通訳に興味があります",
        "AI会議アシスタントに興味があります",
        "地域ベースのプライバシーとデータ管理に興味があります",
        "その他",
      ],

      defaultButtonText: "メッセージを送信",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "概要",
      collapsed: false,
      items: [
        { text: "InterMINDとは？", link: "overview/what-is-intermind" },
        { text: "仕組み", link: "overview/how-it-works" },
        { text: "地域データプライバシー", link: "overview/privacy-architecture" },
        { text: "重点市場", link: "overview/markets" },
      ],
    },
    {
      text: "ガイド",
      collapsed: false,
      items: [{ text: "はじめに", link: "guide/getting-started" }],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "企業情報", link: "/about" },
    { text: "お問い合わせ", link: "/contacts" },
  ]
}