import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/tr"

export const tr = defineConfig({
  description:
    "Uzman BAE şirket kurulum ve destek hizmetleri. Şirket kurulumu, bankacılık, vergi, hukuk ve vize çözümleri. İş hayallerinizi gerçeğe dönüştürüyoruz!",
  head: [
    ["meta", { property: "og:title", content: "Uzman BAE şirket kurulum ve destek hizmetleri. Şirket kurulumu, bankacılık, vergi, hukuk ve vize çözümleri." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "Hizmetler",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Şirket tescili", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "Bankacılık çözümleri", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "Göç", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "Kaynaklar",
        items: [{ text: "Hakkımızda", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "İletişim", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `© Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Gizlilik Ayarları</a> | <a href="${BASE_PATH}/resources/TERMS-CONDITIONS">Şartlar ve Koşullar</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Gizlilik Politikası</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Yapay Zeka Hizmetleri için Yasal Düzenlemeler</a>`,
    },

    localization: {
      placeholder4SearchInput: "Herhangi bir şey sorun...",
      placeholder4ChatFooter: "Herhangi bir şey sorun...",
      placeholder4ChatList: "Sohbet konusunu girin...",
      buttonLabel4NavButton: "Anında uzman sohbeti",
    },
    contact_form: {
      name: "İsim *",
      namePlaceholder: "adınız",
      email: "E-posta *",
      emailPlaceholder: "e-posta adresiniz",
      phone: "Telefon *",
      phonePlaceholder: "örn., +1 1234567890 veya (1) 123 456-7890",
      phoneError: "Lütfen telefon numarası girin",
      category: "Size nasıl yardımcı olabiliriz? *",
      categoryPlaceholder: "hizmet türünü seçin",
      message: "Hedeflerinizi tartışalım (isteğe bağlı)",
      messagePlaceholder: "İhtiyaçlarınız için en iyi çözümü hazırlamamıza yardımcı olmak için lütfen sorgunuzun detaylarını paylaşın",
      submit: "Talebi gönder",
      sending: "Gönderiliyor...",
      successTitle: "Teşekkürler!",
      successMessage: "İlginiz için çok teşekkür ederiz! Ekibimiz ihtiyaçlarınızı görüşmek üzere kısa süre içinde sizinle iletişime geçecektir.",
      defaultCategories: [
        "Yeni şirket kurulumu",
        "Genişleme planı (yeni şube veya franchise)",
        "Şirket taşıma",
        "Golden Visa",
        "Sadece vize amaçlı",
        "Banka hesabı açma",
        "Diğer Hizmetler",
      ],
      defaultButtonText: "Bize mesaj gönderin",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "BAE iş özeti",
      items: [
        { text: "Şirket tescili", link: "company-registration/overview" },
        { text: "Artılar ve eksiler", link: "company-registration/benefits-problems" },
        { text: "Kurumsal bankacılık çözümleri", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "Vizeler ve EID", link: "company-registration/employment-visas" },
        { text: "Ücretler ve süreler", link: "company-registration/fees-timelines" },
        { text: "Sadece başarıdan sonra ödeme", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "BAE kurumsal yapıları",
      collapsed: false,
      items: [
        { text: "Şirket tescil adımları", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "BAE iş uyumluluğu garantili",
      collapsed: false,
      items: [
        { text: "Garantili kurumsal banka hesabı onayları", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Yüksek riskli işletmeler için banka hesapları", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "İşletmenizi uyumlu ve korumalı tutun", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Hukuk, muhasebe ve vergi",
      collapsed: false,
      items: [
        { text: "Muhasebe ve vergi hususları", link: "company-registration/accounting-legal" },
        { text: "UBO kaydı", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Karşılaştırmalar",
      collapsed: false,
      items: [
        { text: "Mainland ve free zones karşılaştırması", link: "comparison/mainland-vs-free-zones" },
        { text: "BAE varlıkları karşılaştırması", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Hakkımızda", link: "about" },
    { text: "İletişim", link: "contacts" },
    { text: "Şartlar ve Koşullar", link: "TERMS-CONDITIONS" },
    { text: "Gizlilik Politikası", link: "Privacy-Policy" },
    { text: "Yapay Zeka Hizmetleri için Yasal Düzenlemeler", link: "Legal-Regulations-for-AI-Services" },
  ]
}
