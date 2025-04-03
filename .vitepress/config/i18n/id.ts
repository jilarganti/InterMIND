import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/id"

export const id = defineConfig({
  description: "Layanan pembentukan dan dukungan perusahaan UAE yang ahli. Solusi pendirian perusahaan, perbankan, pajak, hukum dan visa. Mewujudkan impian bisnis Anda!",
  head: [
    ["meta", { property: "og:title", content: "Layanan pembentukan dan dukungan perusahaan UAE yang ahli. Solusi pendirian perusahaan, perbankan, pajak, hukum dan visa." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "Layanan",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Pendaftaran perusahaan", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "Solusi perbankan", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "Migrasi", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "Sumber Daya",
        items: [{ text: "Tentang Kami", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Kontak", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: '©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Pengaturan Privasi</a>',
    },

    contact_form: {
      name: "Nama *",
      namePlaceholder: "nama Anda",
      email: "Email *",
      emailPlaceholder: "alamat email Anda",
      phone: "Telepon *",
      phonePlaceholder: "contoh, +1 1234567890 atau (1) 123 456-7890",
      phoneError: "Silakan masukkan nomor telepon",
      category: "Bagaimana kami dapat membantu Anda? *",
      categoryPlaceholder: "pilih jenis layanan",
      message: "Mari diskusikan tujuan Anda (opsional)",
      messagePlaceholder: "jelaskan proyek atau kebutuhan Anda",
      submit: "Kirim permintaan",
      sending: "Mengirim...",
      successTitle: "Terima kasih!",
      successMessage: "Kami sangat menghargai minat Anda! Tim kami akan segera menghubungi Anda untuk membahas kebutuhan Anda.",
      defaultCategories: ["Pendaftaran perusahaan", "Pembukaan rekening bank", "EID & Golden Visa", "Layanan Lainnya"],
      defaultButtonText: "Dapatkan konsultasi gratis",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Ringkasan bisnis UAE",
      collapsed: false,
      items: [
        { text: "Pendaftaran perusahaan", link: "company-registration/overview" },
        { text: "Kelebihan & kekurangan", link: "company-registration/benefits-problems" },
        { text: "Solusi perbankan korporat", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "Visa & EID", link: "company-registration/employment-visas" },
        { text: "Biaya dan jadwal", link: "company-registration/fees-timelines" },
        { text: "Bayar hanya setelah berhasil", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Struktur korporat UAE",
      collapsed: true,
      items: [
        { text: "Langkah pendaftaran perusahaan", link: "company-registration/insights/incorporation-steps" },
        { text: "Free zones UAE", link: "company-registration/free-zones" },
        { text: "Mainland UAE", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Kepatuhan bisnis UAE dijamin",
      collapsed: true,
      items: [
        { text: "Persetujuan rekening bank korporat dijamin", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Rekening bank untuk bisnis berisiko tinggi", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Jaga kepatuhan dan perlindungan bisnis Anda", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Hukum, akuntansi dan pajak",
      collapsed: true,
      items: [
        { text: "Pertimbangan akuntansi dan pajak", link: "company-registration/accounting-legal" },
        { text: "Register UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Perbandingan",
      collapsed: true,
      items: [
        { text: "Mainland vs free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "Perbandingan entitas UAE", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [{ text: "Tentang Kami", link: `about` }]
}

function sidebarContactUs(): DefaultTheme.SidebarItem[] {
  return [{ text: "Kontak", link: `contacts` }]
}