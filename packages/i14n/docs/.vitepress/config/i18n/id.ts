import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/id"

export const id = defineConfig({
  description: "Layanan pembentukan perusahaan dan dukungan ahli di UEA. Penyiapan perusahaan, perbankan, pajak, solusi legal dan visa. Mewujudkan impian bisnis Anda!",
  head: [
    ["meta", { property: "og:title", content: "Layanan pembentukan perusahaan dan dukungan ahli di UEA. Penyiapan perusahaan, perbankan, pajak, solusi legal dan visa." }],
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
        items: [{ text: "Tentang kami", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Kontak", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Pengaturan Privasi</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Kebijakan Privasi</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Regulasi Legal untuk Layanan AI</a>`,
    },

    localization: {
      placeholder4SearchInput: "Tanya apa saja...",
      placeholder4ChatFooter: "Tanya apa saja...",
      placeholder4ChatList: "Masukkan topik chat...",
      buttonLabel4NavButton: "Chat ahli instan",
    },
    contact_form: {
      name: "Nama *",
      namePlaceholder: "nama Anda",
      email: "Email *",
      emailPlaceholder: "alamat email Anda",
      phone: "Telepon *",
      phonePlaceholder: "mis., +1 1234567890 atau (1) 123 456-7890",
      phoneError: "Silakan masukkan nomor telepon",
      category: "Bagaimana kami bisa membantu Anda? *",
      categoryPlaceholder: "pilih jenis layanan",
      message: "Mari kita bahas tujuan Anda (opsional)",
      messagePlaceholder: "Silakan bagikan detail pertanyaan Anda untuk membantu kami menyiapkan solusi terbaik untuk kebutuhan Anda",
      submit: "Kirim permintaan",
      sending: "Mengirim...",
      successTitle: "Terima kasih!",
      successMessage: "Kami sangat menghargai minat Anda! Tim kami akan segera menghubungi Anda untuk membahas kebutuhan Anda.",
      defaultCategories: [
        "Pembentukan perusahaan baru",
        "Rencana ekspansi (mis. cabang atau waralaba baru)",
        "Relokasi perusahaan",
        "Golden Visa",
        "Hanya untuk keperluan visa",
        "Membuka rekening bank",
        "Layanan Lainnya",
      ],
      defaultButtonText: "Kirim pesan kepada kami",
      // defaultButtonText: "Dapatkan konsultasi gratis",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Ringkasan bisnis UEA",
      // collapsed: false,
      items: [
        { text: "Pendaftaran perusahaan", link: "company-registration/overview" },
        { text: "Kelebihan & kekurangan", link: "company-registration/benefits-problems" },
        { text: "Solusi perbankan korporat", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "Visa & EID", link: "company-registration/employment-visas" },
        { text: "Biaya dan waktu", link: "company-registration/fees-timelines" },
        { text: "Bayar setelah sukses", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Struktur korporat UEA",
      collapsed: false,
      items: [
        { text: "Langkah pendaftaran perusahaan", link: "company-registration/insights/incorporation-steps" },
        { text: "Zona bebas UEA", link: "company-registration/free-zones" },
        { text: "Daratan UEA", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Kepatuhan bisnis UEA terjamin",
      collapsed: false,
      items: [
        { text: "Persetujuan rekening bank korporat terjamin", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Rekening bank untuk bisnis berisiko tinggi", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Jaga bisnis Anda tetap patuh dan terlindungi", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Legal, akuntansi dan pajak",
      collapsed: false,
      items: [
        { text: "Pertimbangan akuntansi dan pajak", link: "company-registration/accounting-legal" },
        { text: "Daftar UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "Perbandingan",
      collapsed: false,
      items: [
        { text: "Daratan vs zona bebas", link: "comparison/mainland-vs-free-zones" },
        { text: "Perbandingan entitas UEA", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Tentang kami", link: "about" },
    { text: "Kontak", link: "contacts" },
    { text: "Kebijakan Privasi", link: "Privacy-Policy" },
    { text: "Regulasi Legal untuk Layanan AI", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "Kontak", link: `contacts` }]
// }