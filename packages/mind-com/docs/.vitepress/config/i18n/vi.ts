/// <reference types="../theme/types/themeConfig" />

import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/vi"

export const vi = defineConfig({
  description:
    "Hội nghị video chuyên nghiệp với phiên dịch đồng thời bằng hơn 19 ngôn ngữ. Dịch thuật được hỗ trợ bởi AI nắm bắt được giọng điệu, ý định và ngữ cảnh cho các nhóm toàn cầu.",
  head: [
    ["meta", { property: "og:title", content: "InterMIND | Dịch thuật giọng nói thời gian thực cho nhóm toàn cầu" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Hội nghị video chuyên nghiệp với phiên dịch giọng nói đồng thời bằng hơn 19 ngôn ngữ. Họp mặt toàn cầu, giao tiếp tự nhiên với dịch thuật được hỗ trợ bởi AI.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "Sản phẩm",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },
      {
        text: "Bảng giá",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "Tài nguyên",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "Câu hỏi thường gặp", link: `${BASE_PATH}/#FAQ` },
          { text: "Lời chứng thực", link: `${BASE_PATH}/#Testimonials` },
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
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Cài đặt quyền riêng tư</a> | <a href="${BASE_PATH}/resources/company/privacy-policy">Chính sách bảo mật</a> | <a href="${BASE_PATH}/resources/company/legal-regulations-for-ai-services">Quy định pháp lý cho dịch vụ AI</a> | <a href="https://status.mind.com/">Trạng thái dịch vụ</a>`,
    },

    localization: {
      placeholder4SearchInput: "Hỏi bất cứ điều gì...",
      placeholder4ChatFooter: "Hỏi bất cứ điều gì...",
      placeholder4ChatList: "Nhập chủ đề trò chuyện...",
      buttonLabel4NavButton: "Trợ lý",
      buttonLabel4SignInButton: "Đăng nhập",
      buttonLabel4GetStartedButton: "Bắt đầu",
      buttonLabel4TryItButton: "Dùng thử miễn phí",
      buttonLabel4BackToBlog: "← Quay lại blog",
    },
    contact_form: {
      name: "Tên *",
      namePlaceholder: "tên của bạn",
      email: "Email *",
      emailPlaceholder: "địa chỉ email của bạn",
      webSite: "Website công ty",
      webSitePlaceholder: "ví dụ: https://tencongty.com",
      webSiteError: "Vui lòng nhập website",
      category: "Mục tiêu chính của bạn là gì? *",
      categoryPlaceholder: "Chọn điều quan trọng nhất",
      message: "Hãy thảo luận về mục tiêu của bạn (tùy chọn)",
      messagePlaceholder: "Vui lòng cung cấp thêm chi tiết (tùy chọn)",
      submit: "Gửi yêu cầu",
      sending: "Đang gửi...",
      successTitle: "Cảm ơn bạn!",
      successMessage: "Chúng tôi đã nhận được tin nhắn của bạn — nhóm của chúng tôi sẽ liên hệ sớm.",
      defaultCategories: [],

      defaultButtonText: "Gửi tin nhắn cho chúng tôi",
      // defaultButtonText: "Nhận tư vấn miễn phí",
    },
  },
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "TỔNG QUAN",
      collapsed: false,
      items: [
        { text: "InterMIND là gì?", link: "overview/what-is-intermind" },
        { text: "Cách hoạt động", link: "overview/how-it-works" },
        { text: "Nền tảng họp video", link: "overview/video-meeting-platform" },
        { text: "Dịch thuật vs Phiên dịch: Sự khác biệt là gì?", link: "overview/translation-vs-interpretation-whats-the-difference" },
        { text: "Bảo mật dữ liệu khu vực", link: "overview/privacy-architecture" },
        { text: "Thị trường ưu tiên", link: "overview/markets" },
      ],
    },
    {
      text: "HƯỚNG DẪN",
      collapsed: false,
      items: [
        { text: "Bắt đầu", link: "guide/getting-started" },
        { text: "Quản lý tài khoản", link: "guide/account-management" },
        { text: "Tạo cuộc họp", link: "guide/creating-meetings" },
        { text: "Giao diện cuộc họp", link: "guide/meeting-interface" },
        { text: "Vai trò người dùng", link: "guide/user-roles" },
        { text: "Tính năng AI", link: "guide/ai-features" },
        { text: "Lịch sử cuộc họp", link: "guide/meeting-history" },
        { text: "Câu hỏi thường gặp", link: "guide/faq" },
        { text: "Khắc phục sự cố", link: "guide/troubleshooting" },
        { text: "Bảng giá", link: "guide/pricing" },
        { text: "Trợ giúp & Hỗ trợ", link: "guide/help-support" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "HỖ TRỢ",
      collapsed: false,
      items: [
        { text: "Nhận hỗ trợ", link: "/help" },
        { text: "Chính sách bảo mật", link: "/company/privacy-policy" },
        { text: "Hướng dẫn pháp lý AI", link: "/company/legal-regulations-for-ai-services" },
      ],
    },
    // {
    //   text: "TÀI NGUYÊN",
    //   collapsed: false,
    //   items: [
    //     { text: "Tài sản thương hiệu", link: "/media-kit" },
    //     // { text: "Quản lý tài khoản", link: "guide/account-management" },
    //   ],
    // },
    {
      text: "CÔNG TY",
      collapsed: false,
      items: [
        { text: "Giới thiệu", link: "/company/about" },
        { text: "Đội ngũ", link: "/company/team" },
        { text: "Tuyển dụng", link: "/company/careers" },
        { text: "Liên hệ", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Tóm tắt điều hành", link: "/InterMind-Executive-Summary" },
    { text: "Chiến lược tiếp cận thị trường", link: "/go-to-market-strategy" },
    { text: "Thuyết trình nhà đầu tư", link: "/InterMind-Investor-Pitch" },
    { text: "Giải trình dự báo tài chính (Năm 1–3)", link: "/Financial-Projections-Justification" },
  ]
}

function sidebarAccount(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "TRANG CHỦ",
      link: "/",
    },
    {
      text: "CUỘC HỌP",
      collapsed: false,
      items: [
        { text: "Cuộc họp", link: "/meetings" },
        { text: "Lịch sử", link: "/history" },
        { text: "Nâng cấp", link: "/upgrade" },
      ],
    },

    {
      text: "CÀI ĐẶT",
      collapsed: true,
      items: [
        { text: "Hồ sơ", link: "/settings/profile" },
        { text: "Cài đặt", link: "/settings/settings" },
        { text: "Cài đặt", link: "/settings/upgrade" },
      ],
    },
  ]
}
