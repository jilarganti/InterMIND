import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/tr"

export const tr = defineConfig({
  description: "Uzman BAE şirket kurulumu ve destek hizmetleri. Şirket kurulumu, bankacılık, vergi, hukuk ve vize çözümleri. İş hayallerinizi gerçeğe dönüştürüyoruz!",
  head: [
    ["meta", { property: "og:title", content: "Uzman BAE şirket kurulumu ve destek hizmetleri. Şirket kurulumu, bankacılık, vergi, hukuk ve vize çözümleri." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "Hizmetler",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Şirket kaydı", link: `${BASE_PATH}/uae-business/company-registration/overview` },
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
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Gizlilik Ayarları</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Gizlilik Politikası</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Yapay Zeka Hizmetleri için Yasal Düzenlemeler</a>`,
    },

    localization: {
      placeholder4SearchInput: "Hızlı arama...",
      buttonLabel4NavButton: "Anında uzman sohbeti",
    },
    contact_form: {
      name: "İsim *",
      namePlaceholder: "isminiz",
      email: "E-posta *",
      emailPlaceholder: "e-posta adresiniz",
      phone: "Telefon *",
      phonePlaceholder: "örn., +1 1234567890 veya (1) 123 456-7890",
      phoneError: "Lütfen telefon numarası girin",
      category: "Size nasıl yardımcı olabiliriz? *",
      categoryPlaceholder: "hizmet türünü seçin",
      message: "Hedeflerinizi tartışalım (isteğe bağlı)",
      messagePlaceholder: "İhtiyaçlarınıza en uygun çözümü hazırlamamız için lütfen sorgu detaylarınızı paylaşın",
      submit: "Talep gönder",
      sending: "Gönderiliyor...",
      successTitle: "Teşekkürler!",
      successMessage: "İlginiz için çok teşekkür ederiz! Ekibimiz kısa süre içinde ihtiyaçlarınızı tartışmak için sizinle iletişime geçecektir.",
      defaultCategories: [
        "Yeni şirket kurulumu",
        "Genişleme planı (örn. yeni şube veya franchise)",
        "Şirket taşıma",
        "Golden Visa",
        "Sadece vize amaçlı",
        "Banka hesaplarının açılması",
        "Diğer Hizmetler",
      ],
      defaultButtonText: "Bize bir mesaj gönderin",
      // defaultButtonText: "Ücretsiz danışmanlık alın",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "BAE iş özeti",
      // collapsed: false,
      items: [
        { text: "Şirket kaydı", link: "company-registration/overview" },
        { text: "Artılar & eksiler", link: "company-registration/benefits-problems" },
        { text: "Kurumsal bankacılık çözümleri", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "Vizeler & EID", link: "company-registration/employment-visas" },
        { text: "Ücretler ve zaman çizelgeleri", link: "company-registration/fees-timelines" },
        { text: "Başarıdan sonra öde", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "BAE kurumsal yapıları",
      collapsed: false,
      items: [
        { text: "Şirket kayıt adımları", link: "company-registration/insights/incorporation-steps" },
        { text: "BAE serbest bölgeler", link: "company-registration/free-zones" },
        { text: "BAE anakara", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Garantili BAE iş uyumu",
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
        { text: "Muhasebe ve vergi düşünceleri", link: "company-registration/accounting-legal" },
        { text: "UBO kaydı", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Karşılaştırmalar",
      collapsed: false,
      items: [
        { text: "Anakara ile serbest bölgeler karşılaştırması", link: "comparison/mainland-vs-free-zones" },
        { text: "Karşılaştırıldığında BAE kurumları", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Hakkımızda", link: "about" },
    { text: "İletişim", link: "contacts" },
    { text: "Gizlilik Politikası", link: "Privacy-Policy" },
    { text: "Yapay Zeka Hizmetleri için Yasal Düzenlemeler", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "İletişim", link: `contacts` }]
// }