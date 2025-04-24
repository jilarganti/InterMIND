import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/vi"

export const vi = defineConfig({
  description: "Dịch vụ thành lập và hỗ trợ công ty chuyên nghiệp tại UAE. Giải pháp thành lập công ty, ngân hàng, thuế, pháp lý và thị thực. Biến ước mơ kinh doanh của bạn thành hiện thực!",
  head: [
    ["meta", { property: "og:title", content: "Dịch vụ thành lập và hỗ trợ công ty chuyên nghiệp tại UAE. Giải pháp thành lập công ty, ngân hàng, thuế, pháp lý và thị thực." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "Dịch vụ",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "Đăng ký công ty", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "Giải pháp ngân hàng", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "Di trú", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "Tài nguyên",
        items: [{ text: "Về chúng tôi", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "Liên hệ", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Cài đặt quyền riêng tư</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">Chính sách bảo mật</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">Quy định pháp lý cho dịch vụ AI</a>`,
    },

    localization: {
      placeholder4SearchInput: "Tìm kiếm nhanh...",
    },
    contact_form: {
      name: "Họ tên *",
      namePlaceholder: "tên của bạn",
      email: "Email *",
      emailPlaceholder: "địa chỉ email của bạn",
      phone: "Điện thoại *",
      phonePlaceholder: "ví dụ: +1 1234567890 hoặc (1) 123 456-7890",
      phoneError: "Vui lòng nhập số điện thoại",
      category: "Chúng tôi có thể giúp gì cho bạn? *",
      categoryPlaceholder: "chọn loại dịch vụ",
      message: "Hãy thảo luận về mục tiêu của bạn (tùy chọn)",
      messagePlaceholder: "Vui lòng chia sẻ chi tiết yêu cầu để chúng tôi chuẩn bị giải pháp tốt nhất cho nhu cầu của bạn",
      submit: "Gửi yêu cầu",
      sending: "Đang gửi...",
      successTitle: "Cảm ơn bạn!",
      successMessage: "Chúng tôi rất cảm kích sự quan tâm của bạn! Đội ngũ của chúng tôi sẽ liên hệ với bạn sớm để thảo luận về nhu cầu của bạn.",
      defaultCategories: [
        "Thành lập công ty mới",
        "Kế hoạch mở rộng (chi nhánh hoặc nhượng quyền)",
        "Di dời công ty",
        "Golden Visa",
        "Chỉ cho mục đích thị thực",
        "Mở tài khoản ngân hàng",
        "Dịch vụ khác",
      ],
      defaultButtonText: "Gửi tin nhắn cho chúng tôi",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Tổng quan kinh doanh tại UAE",
      items: [
        { text: "Đăng ký công ty", link: "company-registration/overview" },
        { text: "Ưu và nhược điểm", link: "company-registration/benefits-problems" },
        { text: "Giải pháp ngân hàng doanh nghiệp", link: "company-registration/banking" },
        { text: "Golden Visa", link: "company-registration//golden-visa" },
        { text: "Thị thực & EID", link: "company-registration/employment-visas" },
        { text: "Phí và thời gian", link: "company-registration/fees-timelines" },
        { text: "Chỉ thanh toán sau khi thành công", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "Cấu trúc doanh nghiệp UAE",
      collapsed: false,
      items: [
        { text: "Các bước đăng ký công ty", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE free zones", link: "company-registration/free-zones" },
        { text: "UAE mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "Đảm bảo tuân thủ kinh doanh UAE",
      collapsed: false,
      items: [
        { text: "Đảm bảo phê duyệt tài khoản ngân hàng doanh nghiệp", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "Tài khoản ngân hàng cho doanh nghiệp rủi ro cao", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "Giữ doanh nghiệp của bạn tuân thủ và được bảo vệ", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "Pháp lý, kế toán và thuế",
      collapsed: false,
      items: [
        { text: "Các vấn đề kế toán và thuế", link: "company-registration/accounting-legal" },
        { text: "Đăng ký UBO", link: "company-registration/ubo" },
      ],
    },
    {
      text: "So sánh",
      collapsed: false,
      items: [
        { text: "Mainland và free zones", link: "comparison/mainland-vs-free-zones" },
        { text: "So sánh các loại hình doanh nghiệp UAE", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Về chúng tôi", link: "about" },
    { text: "Liên hệ", link: "contacts" },
    { text: "Chính sách bảo mật", link: "Privacy-Policy" },
    { text: "Quy định pháp lý cho dịch vụ AI", link: "Legal-Regulations-for-AI-Services" },
  ]
}