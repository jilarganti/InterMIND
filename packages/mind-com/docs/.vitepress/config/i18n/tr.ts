import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/tr"

export const tr = defineConfig({
  description: "InterMIND, görüntülü aramalar için gerçek zamanlı konuşma çevirisi sağlar — dil engellerini anında ortadan kaldırır. mind.com ekibi tarafından desteklenmektedir.",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND, görüntülü aramalar için gerçek zamanlı konuşma çevirisi sağlar — dil engellerini anında ortadan kaldırır. mind.com ekibi tarafından desteklenmektedir.",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | Global Ekipler için Gerçek Zamanlı Konuşma Çevirisi" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND, görüntülü aramalarda anında konuşma çevirisi sunar — engelsiz, çok dilli, net iletişim. mind.com ekibi tarafından desteklenmektedir.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "Ürün",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },

      {
        text: "Fiyatlandırma",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Kaynaklar",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "SSS", link: `${BASE_PATH}/#FAQ` },
          { text: "Referanslar", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Gizlilik Ayarları</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Gizlilik Politikası</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Yapay Zeka Hizmetleri için Yasal Düzenlemeler</a> | <a href="https://status.mind.com/">Hizmet durumu</a>`,
    },

    localization: {
      placeholder4SearchInput: "Herhangi bir şey sor...",
      placeholder4ChatFooter: "Herhangi bir şey sor...",
      placeholder4ChatList: "Sohbet konusu girin...",
      buttonLabel4NavButton: "Asistan",
      buttonLabel4SignInButton: "Giriş yap",
      buttonLabel4GetStartedButton: "Başla",
    },
    contact_form: {
      name: "İsim *",
      namePlaceholder: "adınız",
      email: "E-posta *",
      emailPlaceholder: "e-posta adresiniz",
      webSite: "Şirket web sitesi *",
      webSitePlaceholder: "örn. https://sirketadi.com",
      webSiteError: "Lütfen web sitesi numarasını girin",
      category: "Öncelikli hedefiniz nedir? *",
      categoryPlaceholder: "En önemli olanı seçin",
      message: "Hedeflerinizi tartışalım (isteğe bağlı)",
      messagePlaceholder: "Lütfen ek detayları belirtin (isteğe bağlı)",
      submit: "İsteği gönder",
      sending: "Gönderiliyor...",
      successTitle: "Teşekkürler!",
      successMessage: "Mesajınızı aldık — ekibimiz yakında sizinle iletişime geçecek.",
      defaultCategories: [
        "Toplantılardaki dil engellerini ortadan kaldırın",
        "Toplantıları aranabilir ve uygulanabilir hale getirin",
        "Uyumluluk ve veri yerleşimini sağlayın (AB / ABD / Asya)",
        "Sadece keşfediyorum / Diğer",
      ],

      defaultButtonText: "Bize mesaj gönderin",
    },
  } as DefaultTheme.Config,
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "GENEL BAKIŞ",
      collapsed: false,
      items: [
        { text: "InterMIND Nedir?", link: "overview/what-is-intermind" },
        { text: "Nasıl Çalışır", link: "overview/how-it-works" },
        { text: "Video Toplantı Platformu", link: "overview/video-meeting-platform" },
        { text: "Bölgesel Veri Gizliliği", link: "overview/privacy-architecture" },
        { text: "Öncelikli Pazarlar", link: "overview/markets" },
      ],
    },
    {
      text: "REHBER",
      collapsed: false,
      items: [
        { text: "Başlarken", link: "guide/getting-started" },
        { text: "Hesap Yönetimi", link: "guide/account-management" },
        { text: "Toplantı Oluşturma", link: "guide/creating-meetings" },
        { text: "Toplantı Arayüzü", link: "guide/meeting-interface" },
        { text: "Kullanıcı Rolleri", link: "guide/user-roles" },
        { text: "Yapay Zeka Özellikleri", link: "guide/ai-features" },
        { text: "Toplantı Geçmişi", link: "guide/meeting-history" },
        { text: "SSS", link: "guide/faq" },
        { text: "Sorun Giderme", link: "guide/troubleshooting" },
        { text: "Fiyatlandırma", link: "guide/pricing" },
        { text: "Yardım ve Destek", link: "guide/help-support" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "DESTEK",
      collapsed: false,
      items: [
        { text: "Destek Alın", link: "/help" },
      ],
    },
    {
      text: "KAYNAKLAR",
      collapsed: false,
      items: [
        { text: "Marka Varlıkları", link: "/media-kit" },
      ],
    },
    {
      text: "ŞİRKET",
      collapsed: false,
      items: [
        { text: "Hakkında", link: "/company/about" },
        { text: "Ekip", link: "/company/team" },
        { text: "İletişim", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Yönetici Özeti", link: "/InterMind-Executive-Summary" },
    { text: "Pazara Giriş Stratejisi", link: "/go-to-market-strategy" },
    { text: "Yatırımcı Sunumu", link: "/InterMind-Investor-Pitch" },
    { text: "Finansal Projeksiyonlar Gerekçelendirmesi (1-3 Yıl)", link: "/Financial-Projections-Justification" },
  ]
}