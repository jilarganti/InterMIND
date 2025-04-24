import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ko"

export const ko = defineConfig({
  description: "UAE 전문 기업 설립 및 지원 서비스. 회사 설립, 은행업무, 세금, 법률 및 비자 솔루션. 귀하의 비즈니스 꿈을 현실로 만들어 드립니다!",
  head: [
    ["meta", { property: "og:title", content: "UAE 전문 기업 설립 및 지원 서비스. 회사 설립, 은행업무, 세금, 법률 및 비자 솔루션." }],
  ],

  themeConfig: {
    nav: [
      {
        text: "서비스",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "회사 등록", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "은행 솔루션", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "이민", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "자료",
        items: [{ text: "회사 소개", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "연락처", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      // [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: `©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">개인정보 설정</a> | <a href="${BASE_PATH}/resources/Privacy-Policy">개인정보 처리방침</a> | <a href="${BASE_PATH}/resources/Legal-Regulations-for-AI-Services">AI 서비스 법적 규정</a>`,
    },

    localization: {
      placeholder4SearchInput: "빠른 검색...",
      buttonLabel4NavButton: "즉시 전문가 채팅",
    },
    contact_form: {
      name: "이름 *",
      namePlaceholder: "귀하의 이름",
      email: "이메일 *",
      emailPlaceholder: "귀하의 이메일 주소",
      phone: "전화번호 *",
      phonePlaceholder: "예: +1 1234567890 또는 (1) 123 456-7890",
      phoneError: "전화번호를 입력해 주세요",
      category: "어떻게 도와드릴까요? *",
      categoryPlaceholder: "서비스 유형 선택",
      message: "목표에 대해 논의해 보세요 (선택사항)",
      messagePlaceholder: "귀하의 요구에 가장 적합한 솔루션을 준비할 수 있도록 문의 사항을 공유해 주세요",
      submit: "요청 제출",
      sending: "전송 중...",
      successTitle: "감사합니다!",
      successMessage: "귀하의 관심에 깊이 감사드립니다! 저희 팀이 곧 연락을 드려 귀하의 요구 사항에 대해 논의할 것입니다.",
      defaultCategories: [
        "새로운 회사 설립",
        "확장 계획 (예: 새로운 지점 또는 프랜차이즈)",
        "회사 이전",
        "골든 비자",
        "비자 목적만",
        "은행 계좌 개설",
        "기타 서비스",
      ],
      defaultButtonText: "메시지 보내기",
      // defaultButtonText: "무료 상담 받기",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAE 비즈니스 요약",
      // collapsed: false,
      items: [
        { text: "회사 등록", link: "company-registration/overview" },
        { text: "장단점", link: "company-registration/benefits-problems" },
        { text: "기업 은행 솔루션", link: "company-registration/banking" },
        { text: "골든 비자", link: "company-registration//golden-visa" },
        { text: "비자 & EID", link: "company-registration/employment-visas" },
        { text: "수수료 및 시간표", link: "company-registration/fees-timelines" },
        { text: "성공 후 지불", link: "benefits/success-based-fees" },
      ],
    },
    {
      text: "UAE 기업 구조",
      collapsed: false,
      items: [
        { text: "회사 등록 단계", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE 프리 존", link: "company-registration/free-zones" },
        { text: "UAE 본토", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAE 비즈니스 컴플라이언스 보장",
      collapsed: false,
      items: [
        { text: "보장된 기업 은행 계좌 승인", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "고위험 비즈니스를 위한 은행 계좌", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "비즈니스를 컴플라이언스하고 보호하기", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "법률, 회계 및 세금",
      collapsed: false,
      items: [
        { text: "회계 및 세금 고려 사항", link: "company-registration/accounting-legal" },
        { text: "UBO 등록", link: "company-registration/ubo" },
      ],
    },
    {
      text: "비교",
      collapsed: false,
      items: [
        { text: "본토 대 프리 존", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE 엔티티 비교", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [
    { text: "회사 소개", link: "about" },
    { text: "연락처", link: "contacts" },
    { text: "개인정보 처리방침", link: "Privacy-Policy" },
    { text: "AI 서비스 법적 규정", link: "Legal-Regulations-for-AI-Services" },
  ]
}

// function sidebarContactUs(): DefaultTheme.SidebarItem[] {
//   return [{ text: "연락처", link: `contacts` }]
// }