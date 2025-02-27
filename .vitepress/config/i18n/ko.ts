import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ko"

export const ko = defineConfig({
  description: "UAE 전문 기업 설립 및 지원 서비스. 회사 설립, 은행업무, 세금, 법률 및 비자 솔루션. 귀하의 비즈니스 꿈을 현실로 만들어드립니다!",
  head: [["meta", { property: "og:title", content: "UAE 전문 기업 설립 및 지원 서비스. 회사 설립, 은행업무, 세금, 법률 및 비자 솔루션." }]],

  themeConfig: {
    nav: [
      {
        text: "서비스",
        activeMatch: `${BASE_PATH}/company-registration/`,
        items: [
          { text: "기업 등록", link: `${BASE_PATH}/uae-business/company-registration/overview` },
          { text: "은행 솔루션", link: `${BASE_PATH}/uae-business/company-registration/banking` },
          { text: "이주", link: `${BASE_PATH}/uae-business/company-registration/employment-visas` },
        ],
      },
      {
        text: "리소스",
        items: [{ text: "회사 소개", link: `${BASE_PATH}/resources/about` }],
      },
      { text: "연락처", link: `${BASE_PATH}/resources/contacts` },
    ],

    sidebar: {
      [`${BASE_PATH}/uae-business/`]: { base: `${BASE_PATH}/uae-business/`, items: sidebarServices() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarInsights() },
      [`${BASE_PATH}/contact-us/`]: { base: `${BASE_PATH}/contact-us/`, items: sidebarContactUs() },
    },

    footer: {
      message: '©Golden Fish, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">개인정보 설정</a>',
    },

    contact_form: {
      name: "이름 *",
      namePlaceholder: "귀하의 이름",
      email: "이메일 *",
      emailPlaceholder: "귀하의 이메일 주소",
      phone: "전화번호 *",
      phonePlaceholder: "예: +1 1234567890 또는 (1) 123 456-7890",
      phoneError: "전화번호를 입력해 주세요",
      category: "어떤 도움이 필요하신가요? *",
      categoryPlaceholder: "서비스 유형 선택",
      message: "목표에 대해 논의해 보세요 (선택사항)",
      messagePlaceholder: "프로젝트나 요구사항을 설명해 주세요",
      submit: "요청 제출",
      sending: "전송 중...",
      successTitle: "감사합니다!",
      successMessage: "관심을 가져주셔서 대단히 감사합니다! 저희 팀이 곧 연락하여 귀하의 요구사항을 논의하겠습니다.",
      defaultCategories: ["기업 등록", "은행 계좌 개설", "EID & Golden Visa", "기타 서비스"],
      defaultButtonText: "무료 상담 받기",
    },
  },
})

function sidebarServices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "UAE 비즈니스 요약",
      collapsed: false,
      items: [
        { text: "기업 등록", link: "company-registration/overview" },
        { text: "장단점", link: "company-registration/benefits-problems" },
        { text: "기업 은행 솔루션", link: "offer/banking/" },
        { text: "Golden Visa", link: "offer/golden-visa/" },
        { text: "비자 및 EID", link: "company-registration/employment-visas" },
        { text: "수수료 및 소요기간", link: "company-registration/fees-timelines" },
      ],
    },
    {
      text: "UAE 기업 구조",
      collapsed: true,
      items: [
        { text: "기업 등록 절차", link: "company-registration/insights/incorporation-steps" },
        { text: "UAE Free Zone", link: "company-registration/free-zones" },
        { text: "UAE Mainland", link: "company-registration/mainland" },
      ],
    },
    {
      text: "UAE 비즈니스 규정 준수 보장",
      collapsed: true,
      items: [
        { text: "기업 은행 계좌 승인 보장", link: "corporate-banking-services/guaranteed-account-approvals" },
        { text: "고위험 사업을 위한 은행 계좌", link: "corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business" },
        { text: "비즈니스 규정 준수 및 보호 유지", link: "company-registration/Protect-Your-Business" },
      ],
    },
    {
      text: "법률, 회계 및 세무",
      collapsed: true,
      items: [
        { text: "회계 및 세무 고려사항", link: "company-registration/accounting-legal" },
        { text: "UBO 등록", link: "company-registration/ubo" },
      ],
    },
    {
      text: "비교",
      collapsed: true,
      items: [
        { text: "Mainland vs Free Zone", link: "comparison/mainland-vs-free-zones" },
        { text: "UAE 법인 유형 비교", link: "comparison/entity-types" },
      ],
    },
  ]
}

function sidebarInsights(): DefaultTheme.SidebarItem[] {
  return [{ text: "회사 소개", link: `about` }]
}

function sidebarContactUs(): DefaultTheme.SidebarItem[] {
  return [{ text: "연락처", link: `contacts` }]
}
