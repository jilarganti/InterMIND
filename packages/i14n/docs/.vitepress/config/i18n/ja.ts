import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ja"

export const ja = defineConfig({
  description: "UAEにおける専門的な会社設立・サポートサービス。会社設立、銀行取引、税務、法務、ビザソリューションを提供。ビジネスの夢を実現します！",
  head: [
    ["meta", { property: "og:title", content: "UAEにおける専門的な会社設立・サポートサービス。会社設立、銀行取引、税務、法務、ビザソリューション。" }],
  ],

  themeConfig: {
    nav: [
      {
        text: "ガイド",
        activeMatch: `${BASE_PATH}/guide/`,
        items: [{ text: "はじめに", link: `${BASE_PATH}/guide/what-is-imind` }],
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
      buttonLabel4NavButton: "専門家とすぐにチャット",
    },
    contact_form: {
      name: "お名前 *",
      namePlaceholder: "あなたのお名前",
      email: "メールアドレス *",
      emailPlaceholder: "あなたのメールアドレス",
      phone: "電話番号 *",
      phonePlaceholder: "例：+1 1234567890 または (1) 123 456-7890",
      phoneError: "電話番号を入力してください",
      category: "ご用件 *",
      categoryPlaceholder: "サービスタイプを選択",
      message: "目標についてお聞かせください（任意）",
      messagePlaceholder: "最適なソリューションをご提案するため、ご要望の詳細をお聞かせください",
      submit: "リクエストを送信",
      sending: "送信中...",
      successTitle: "ありがとうございます！",
      successMessage: "ご興味をお持ちいただき、誠にありがとうございます！担当者が shortly にご連絡させていただきます。",
      defaultCategories: [
        "新規会社設立",
        "事業拡大計画（支店やフランチャイズなど）",
        "会社移転",
        "Golden Visa",
        "ビザ申請のみ",
        "銀行口座開設",
        "その他のサービス",
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
        { text: "仕組み", link: "how-it-works" },
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