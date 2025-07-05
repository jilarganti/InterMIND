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
      // {
      //   text: "Şirket",
      //   activeMatch: `${BASE_PATH}/company/`,
      //   link: `${BASE_PATH}/company/about`,
      // },
      {
        text: "Fiyatlandırma",
        // activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Kaynaklar",
        activeMatch: `${BASE_PATH}/product/`,
        // items: [
        //   {
        //     text: "KEŞFET",
        items: [
          // { text: "Fiyatlandırma", link: `${BASE_PATH}/#Pricing` },
          { text: "SSS", link: `${BASE_PATH}/#FAQ` },
          { text: "Referanslar", link: `${BASE_PATH}/#Testimonials` },
          // { text: "Ekip", link: `${BASE_PATH}/resources/team` },
          // { text: "Medya Kiti", link: `${BASE_PATH}/resources/media-kit` },
        ],
        //   },
        // ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      // [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Gizlilik Ayarları</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Gizlilik Politikası</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">AI Hizmetleri için Yasal Düzenlemeler</a> | <a href="https://status.mind.com/">Hizmet durumu</a>`,
    },

    localization: {
      placeholder4SearchInput: "Herhangi bir şey sorun...",
      placeholder4ChatFooter: "Herhangi bir şey sorun...",
      placeholder4ChatList: "Sohbet konusunu girin...",
      buttonLabel4NavButton: "Anında uzman sohbeti",
      buttonLabel4AuthButton: "Giriş yap",
    },
    contact_form: {
      name: "Ad *",
      namePlaceholder: "adınız",
      email: "E-posta *",
      emailPlaceholder: "e-posta adresiniz",
      webSite: "Şirket web sitesi *",
      webSitePlaceholder: "örn. https://sirketadi.com",
      webSiteError: "Lütfen web sitesi adresini girin",
      category: "Birincil hedefiniz nedir? *",
      categoryPlaceholder: "En önemli olanı seçin",
      message: "Hedeflerinizi tartışalım (isteğe bağlı)",
      messagePlaceholder: "Lütfen ek detayları belirtin (isteğe bağlı)",
      submit: "Talep gönder",
      sending: "Gönderiliyor...",
      successTitle: "Teşekkürler!",
      successMessage: "Mesajınızı aldık — ekibimiz kısa süre içinde sizinle iletişime geçecek.",
      defaultCategories: [
        "Toplantılardaki dil engellerini ortadan kaldır",
        "Toplantıları aranabilir ve eyleme dönüştürülebilir yap",
        "Uyumluluk ve veri yerleşimi sağla (AB / ABD / Asya)",
        "Sadece keşfediyorum / Diğer",
      ],

      defaultButtonText: "Bize mesaj gönderin",
      // defaultButtonText: "Ücretsiz danışmanlık alın",
    },
  } as DefaultTheme.Config,
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
        // { text: "Nasıl çalışır", link: "overview/how-it-works" },
      ],
    },
    {
      text: "KAYNAKLAR",
      collapsed: false,
      items: [
        { text: "Marka varlıkları", link: "/media-kit" },
        // { text: "Hesap yönetimi", link: "guide/account-management" },
      ],
    },
    {
      text: "ŞİRKET",
      collapsed: false,
      items: [
        { text: "Hakkımızda", link: "/company/about" },
        { text: "Ekip", link: "/company/team" },
        { text: "İletişim", link: "/company/contacts" },
      ],
    },
  ]
}

// function sidebarResources(): DefaultTheme.SidebarItem[] {
//   return [
//     { text: "Hakkımızda", link: "/about" },
//     { text: "İletişim", link: "/contacts" },
//     { text: "Destek al", link: "/help" },
//     { text: "Marka varlıkları", link: "/media-kit" },
//   ]
// }