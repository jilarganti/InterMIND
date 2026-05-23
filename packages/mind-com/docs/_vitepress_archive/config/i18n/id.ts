/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/id"

export const id = defineConfig({
  description:
    "Konferensi video profesional dengan interpretasi simultan dalam 19+ bahasa. Terjemahan bertenaga AI yang menangkap nada, maksud, dan konteks untuk tim global.",
  head: [
    ["meta", { property: "og:title", content: "InterMIND | Terjemahan Ucapan Real-time untuk Tim Global" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Konferensi video profesional dengan interpretasi suara simultan dalam 19+ bahasa. Bertemu secara global, berkomunikasi secara alami dengan terjemahan bertenaga AI.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "Produk",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "Harga",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Sumber Daya",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Testimoni", link: `${BASE_PATH}/#Testimonials` },
          { text: "Blog", link: `${BASE_PATH}/blog/` },
          { text: "Tentang", link: `${BASE_PATH}/resources/company/about` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
      [`${BASE_PATH}/account/`]: { base: `${BASE_PATH}/account/`, items: sidebarAccount() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Pengaturan Privasi</a> | <a href="${BASE_PATH}/resources/company/privacy-policy">Kebijakan Privasi</a> | <a href="${BASE_PATH}/resources/company/legal-regulations-for-ai-services">Regulasi Hukum untuk Layanan AI</a> | <a href="https://status.mind.com/">Status layanan</a>`,
    },

    localization: {
      placeholder4SearchInput: "Tanya apa saja...",
      placeholder4ChatFooter: "Tanya apa saja...",
      placeholder4ChatList: "Masukkan topik chat...",
      buttonLabel4NavButton: "Asisten",
      buttonLabel4SignInButton: "Masuk",
      buttonLabel4GetStartedButton: "Mulai",
      buttonLabel4TryItButton: "Coba gratis",
      buttonLabel4BackToBlog: "← Kembali ke blog",
    },
    contact_form: {
      name: "Nama *",
      namePlaceholder: "nama Anda",
      email: "Email *",
      emailPlaceholder: "alamat email Anda",
      webSite: "Website perusahaan",
      webSitePlaceholder: "contoh: https://namaperusahaan.com",
      webSiteError: "Silakan masukkan website",
      category: "Apa tujuan utama Anda? *",
      categoryPlaceholder: "Pilih yang paling penting",
      message: "Mari diskusikan tujuan Anda (opsional)",
      messagePlaceholder: "Silakan berikan detail tambahan (opsional)",
      submit: "Kirim permintaan",
      sending: "Mengirim...",
      successTitle: "Terima kasih!",
      successMessage: "Kami telah menerima pesan Anda — tim kami akan segera menghubungi Anda.",
      defaultCategories: [],

      defaultButtonText: "Kirim pesan kepada kami",
      // defaultButtonText: "Dapatkan konsultasi gratis",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "GAMBARAN UMUM",
      collapsed: false,
      items: [
        { text: "Apa itu InterMIND?", link: "overview/what-is-intermind" },
        { text: "Cara Kerja", link: "overview/how-it-works" },
        { text: "Platform Rapat Video", link: "overview/video-meeting-platform" },
        { text: "Terjemahan vs Interpretasi: Apa Perbedaannya?", link: "overview/translation-vs-interpretation-whats-the-difference" },
        { text: "Privasi Data Regional", link: "overview/privacy-architecture" },
        { text: "Pasar Prioritas", link: "overview/markets" },
      ],
    },
    {
      text: "PANDUAN",
      collapsed: false,
      items: [
        { text: "Memulai", link: "guide/getting-started" },
        { text: "Manajemen Akun", link: "guide/account-management" },
        { text: "Membuat Rapat", link: "guide/creating-meetings" },
        { text: "Antarmuka Rapat", link: "guide/meeting-interface" },
        { text: "Peran Pengguna", link: "guide/user-roles" },
        { text: "Fitur AI", link: "guide/ai-features" },
        { text: "Riwayat Rapat", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Pemecahan Masalah", link: "guide/troubleshooting" },
        { text: "Harga", link: "guide/pricing" },
        { text: "Bantuan & Dukungan", link: "guide/help-support" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "DUKUNGAN",
      collapsed: false,
      items: [
        { text: "Dapatkan Dukungan", link: "/help" },
        { text: "Kebijakan Privasi", link: "/company/privacy-policy" },
        { text: "Panduan Hukum AI", link: "/company/legal-regulations-for-ai-services" },
      ],
    },
    {
      text: "PERUSAHAAN",
      collapsed: false,
      items: [
        { text: "Tentang", link: "/company/about" },
        { text: "Tim", link: "/company/team" },
        { text: "Karir", link: "/company/careers" },
        { text: "Kontak", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Ringkasan Eksekutif", link: "/InterMind-Executive-Summary" },
    { text: "Strategi Go To Market", link: "/go-to-market-strategy" },
    { text: "Pitch Investor", link: "/InterMind-Investor-Pitch" },
    { text: "Justifikasi Proyeksi Keuangan (Tahun 1–3)", link: "/Financial-Projections-Justification" },
  ]
}

function sidebarAccount(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "BERANDA",
      link: "/",
    },
    {
      text: "RAPAT",
      collapsed: false,
      items: [
        { text: "Rapat", link: "/meetings" },
        { text: "Riwayat", link: "/history" },
        { text: "Upgrade", link: "/upgrade" },
      ],
    },

    {
      text: "PENGATURAN",
      collapsed: true,
      items: [
        { text: "Profil", link: "/settings/profile" },
        { text: "Pengaturan", link: "/settings/settings" },
        { text: "Pengaturan", link: "/settings/upgrade" },
      ],
    },
  ]
}