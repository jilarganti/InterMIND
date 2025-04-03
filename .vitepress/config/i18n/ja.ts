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
        text: "サービス",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "会社登記", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "銀行ソリューション", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "移民", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "リソース",
        items: [{ text: "会社概要", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "お問い合わせ", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: '©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">プライバシー設定</a>',
    },

    contact_form: {
      name: "お名前 *",
      namePlaceholder: "お名前を入力してください",
      email: "メールアドレス *",
      emailPlaceholder: "メールアドレスを入力してください",
      phone: "電話番号 *",
      phonePlaceholder: "例：+1 1234567890 または (1) 123 456-7890",
      phoneError: "電話番号を入力してください",
      category: "ご用件 *",
      categoryPlaceholder: "サービスタイプを選択してください",
      message: "ご要望をお聞かせください（任意）",
      messagePlaceholder: "プロジェクトまたは要件についてご記入ください",
      submit: "送信する",
      sending: "送信中...",
      successTitle: "ありがとうございます！",
      successMessage: "お問い合わせありがとうございます！担当者が速やかにご連絡させていただきます。",
      defaultCategories: ["会社登記", "銀行口座開設", "EID & Golden Visa", "その他のサービス"],
      defaultButtonText: "無料相談を予約する",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAEビジネス概要",
      collapsed: false,
      items: [
        { text: "会社登記", link: "company-registration/overview" },
        { text: "メリット・デメリット", link: "company-registration/benefits-problems" },
        { text: "法人向け銀行ソリューション", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "ビザ & EID", link: "company-registration/employment-visas" },
        { text: "手数料と所要期間", link: "company-registration/fees-timelines" },
        { text: "成功報酬型", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "UAE企業構造",
      collapsed: true,
      items: [
        { text: "会社登記の手順", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE Free Zone", link: "company-registration/free-zones" },
        { text: "UAE Mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAE事業コンプライアンス保証",
      collapsed: true,
      items: [
        { text: "法人口座開設の承認保証", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "ハイリスク事業向け銀行口座", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "事業のコンプライアンスと保護", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "法務・会計・税務",
      collapsed: true,
      items: [
        { text: "会計・税務の考慮事項", link: "company-registration/accounting-legal" },
        { text: "UBOレジスター", link: "company-registration/ubo" },
      ],
    },
    {
      text: "比較",
      collapsed: true,
      items: [
        { text: "Mainland vs Free Zone", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE事業体の比較", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [{ text: "会社概要", link: `about` }]
}

function sidebarContactUs(): DefaultTheme.SidebarItem[] {
  return [{ text: "お問い合わせ", link: `contacts` }]
}