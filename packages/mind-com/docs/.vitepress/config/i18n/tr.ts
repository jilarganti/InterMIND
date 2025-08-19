/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/tr"

export const tr = defineConfig({
  description: "InterMIND video aramalar için gerçek zamanlı konuşma çevirisi sağlar — dil engellerini anında ortadan kaldırır. mind.com ekibi tarafından desteklenmektedir.",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND video aramalar için gerçek zamanlı konuşma çevirisi sağlar — dil engellerini anında ortadan kaldırır. mind.com ekibi tarafından desteklenmektedir.",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | Küresel Ekipler için Gerçek Zamanlı Konuşma Çevirisi" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND video aramalarda anlık konuşma çevirisi sunar — engelsiz net, çok dilli iletişim. mind.com ekibi tarafından desteklenmektedir.",
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
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Gizlilik Ayarları</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Gizlilik Politikası</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">AI Hizmetleri için Yasal Düzenlemeler</a> | <a href="https://status.mind.com/">Hizmet durumu</a>`,
    },

    localization: {
      placeholder4SearchInput: "Herhangi bir şey sorun...",
      placeholder4ChatFooter: "Herhangi bir şey sorun...",
      placeholder4ChatList: "Sohbet konusunu girin...",
      buttonLabel4NavButton: "Asistan",
      buttonLabel4SignInButton: "Giriş yap",
      buttonLabel4GetStartedButton: "Başlayın",
      buttonLabel4TryItButton: "Ücretsiz deneyin",
      buttonLabel4BackToBlog: "← Bloga geri dön",
    },
    contact_form: {
      name: "İsim *",
      namePlaceholder: "adınız",
      email: "E-posta *",
      emailPlaceholder: "e-posta adresiniz",
      webSite: "Şirket web sitesi",
      webSitePlaceholder: "örn. https://sirketadi.com",
      webSiteError: "Lütfen web sitesini girin",
      category: "Birincil hedefiniz nedir? *",
      categoryPlaceholder: "En önemli olanı seçin",
      message: "Hedeflerinizi tartışalım (isteğe bağlı)",
      messagePlaceholder: "Lütfen ek detayları belirtin (isteğe bağlı)",
      submit: "Talep gönder",
      sending: "Gönderiliyor...",
      successTitle: "Teşekkürler!",
      successMessage: "Mesajınızı aldık — ekibimiz kısa süre içinde sizinle iletişime geçecek.",
      defaultCategories: [],

      defaultButtonText: "Bize mesaj gönderin",
      // defaultButtonText: "Ücretsiz danışmanlık alın",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "GENEL BAKIŞ",
      collapsed: false,
      items: [
        { text: "InterMIND nedir?", link: "overview/what-is-intermind" },
        { text: "Nasıl çalışır", link: "overview/how-it-works" },
        { text: "Video toplantı platformu", link: "overview/video-meeting-platform" },
        { text: "Bölgesel veri gizliliği", link: "overview/privacy-architecture" },
        { text: "Öncelikli pazarlar", link: "overview/markets" },
      ],
    },
    {
      text: "KILAVUZ",
      collapsed: false,
      items: [
        { text: "Başlangıç", link: "guide/getting-started" },
        { text: "Hesap yönetimi", link: "guide/account-management" },
        { text: "Toplantı oluşturma", link: "guide/creating-meetings" },
        { text: "Toplantı arayüzü", link: "guide/meeting-interface" },
        { text: "Kullanıcı rolleri", link: "guide/user-roles" },
        { text: "AI özellikleri", link: "guide/ai-features" },
        { text: "Toplantı geçmişi", link: "guide/meeting-history" },
        { text: "SSS", link: "guide/faq" },
        { text: "Sorun giderme", link: "guide/troubleshooting" },
        { text: "Fiyatlandırma", link: "guide/pricing" },
        { text: "Yardım ve destek", link: "guide/help-support" },
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
        { text: "Destek al", link: "/help" },
        { text: "Gizlilik politikası", link: "/company/Privacy-Policy" },
        { text: "AI yasal kılavuzu", link: "/company/Legal-Regulations-for-AI-Services" },
      ],
    },
    // {
    //   text: "KAYNAKLAR",
    //   collapsed: false,
    //   items: [
    //     { text: "Marka varlıkları", link: "/media-kit" },
    //     // { text: "Hesap yönetimi", link: "guide/account-management" },
    //   ],
    // },
    {
      text: "ŞİRKET",
      collapsed: false,
      items: [
        { text: "Hakkında", link: "/company/about" },
        { text: "Ekip", link: "/company/team" },
        { text: "Kariyer", link: "/company/careers" },
        { text: "İletişim", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Yönetici özeti", link: "/InterMind-Executive-Summary" },
    { text: "Pazara giriş stratejisi", link: "/go-to-market-strategy" },
    { text: "Yatırımcı sunumu", link: "/InterMind-Investor-Pitch" },
    { text: "Mali projeksiyonlar gerekçesi (1-3. yıl)", link: "/Financial-Projections-Justification" },
  ]
}