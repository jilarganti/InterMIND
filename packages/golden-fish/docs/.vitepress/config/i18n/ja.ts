import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ja"

export const ja = defineConfig({
  description: "UAEでの会社設立とサポートサービスの専門家。会社設立、銀行、税務、法務、ビザのソリューション。あなたのビジネスの夢を現実に！",
  head: [
    ["meta", { property: "og:title", content: "UAEでの会社設立とサポートサービスの専門家。会社設立、銀行、税務、法務、ビザのソリューション。" }],
  ],

  themeConfig: {
    nav: [
      {
        text: "サービス",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "会社登録", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "銀行ソリューション", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "移住", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "リソース",
        items: [{ text: "私たちについて", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "お問い合わせ", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">プライバシー設定</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">プライバシーポリシー</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AIサービスの法的規制</a>`,
    },

    localization: {
      placeholder4SearchInput: "何でもお尋ねください...",
      placeholder4ChatFooter: "何でもお尋ねください...",
      placeholder4ChatList: "チャットのトピックを入力...",
      buttonLabel4NavButton: "即時エキスパートチャット",
    },
    contact_form: {
      name: "名前 *",
      namePlaceholder: "あなたの名前",
      email: "メール *",
      emailPlaceholder: "あなたのメールアドレス",
      phone: "電話番号 *",
      phonePlaceholder: "例：+1 1234567890 または (1) 123 456-7890",
      phoneError: "電話番号を入力してください",
      category: "どのようにお手伝いできますか？ *",
      categoryPlaceholder: "サービスタイプを選択",
      message: "あなたの目標について話しましょう（任意）",
      messagePlaceholder: "あなたの問い合わせの詳細を共有してください。最適なソリューションを準備するために",
      submit: "リクエストを送信",
      sending: "送信中...",
      successTitle: "ありがとうございます！",
      successMessage: "ご興味をいただき、誠にありがとうございます！弊社チームがまもなくご連絡し、ご要望について話し合います。",
      defaultCategories: [
        "新規会社設立",
        "拡張計画（例：新しい支店やフランチャイズ）",
        "会社の移転",
        "ゴールデンビザ",
        "ビザのみの目的",
        "銀行口座の開設",
        "その他のサービス",
      ],
      defaultButtonText: "メッセージを送る",
      // defaultButtonText: "無料相談を受ける",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAEビジネス概要",
      // collapsed: false,
      items: [
        { text: "会社登録", link: "company-registration/overview" },
        { text: "長所と短所", link: "company-registration/benefits-problems" },
        { text: "企業銀行ソリューション", link: "company-registration/banking" },
        { text: "ゴールデンビザ", link: "company-registration//golden-visa" },
        { text: "ビザとEID", link: "company-registration/employment-visas" },
        { text: "料金とタイムライン", link: "company-registration/fees-timelines" },
        { text: "成功後の支払いのみ", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "UAEの企業構造",
      collapsed: false,
      items: [
        { text: "会社登録手順", link: "company-registration/insights/incorporation-steps" },
        { text: "UAEフリーゾーン", link: "company-registration/free-zones" },
        { text: "UAE本土", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAEビジネスコンプライアンス保証",
      collapsed: false,
      items: [
        { text: "企業銀行口座承認保証", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "ハイリスクビジネスの銀行口座", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "ビジネスをコンプライアンスと保護する", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "法務、会計、税務",
      collapsed: false,
      items: [
        { text: "会計と税務の考慮事項", link: "company-registration/accounting-legal" },
        { text: "UBOレジスタ", link: "company-registration/ubo" },
      ],
    },
    {
      text: "比較",
      collapsed: false,
      items: [
        { text: "本土対フリーゾーン", link: "comparison/mainland-vs-free-zones" },
        { text: "UAEのエンティティ比較", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "私たちについて", link: "about" },
    { text: "お問い合わせ", link: "contacts" },
    { text: "プライバシーポリシー", link: "Privacy-Policy" },
    { text: "AIサービスの法的規制", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "お問い合わせ", link: `contacts` }]
// }