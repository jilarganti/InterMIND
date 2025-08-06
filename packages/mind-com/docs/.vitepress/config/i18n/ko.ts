import { defineConfig, type DefaultTheme } from "vitepress"

const BASE_PATH = "/ko"

export const ko = defineConfig({
  description: "InterMIND는 화상 통화를 위한 실시간 음성 번역을 제공하여 언어 장벽을 즉시 제거합니다. mind.com 팀이 제공합니다.",
  head: [
    [
      "meta",
      {
        name: "description",
        content: "InterMIND는 화상 통화를 위한 실시간 음성 번역을 제공하여 언어 장벽을 즉시 제거합니다. mind.com 팀이 제공합니다.",
      },
    ],
    ["meta", { property: "og:title", content: "InterMIND | 글로벌 팀을 위한 실시간 음성 번역" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "InterMIND는 화상 통화에서 즉각적인 음성 번역을 제공합니다 — 장벽 없는 명확하고 다국어 커뮤니케이션. mind.com 팀이 제공합니다.",
      },
    ],
    ["meta", { property: "og:url", content: `https://mind.com${BASE_PATH}` }],
  ],
  themeConfig: {
    nav: [
      {
        text: "제품",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`,
      },

      {
        text: "가격",
        link: `${BASE_PATH}/#Pricing`,
      },
      {
        text: "리소스",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "자주 묻는 질문", link: `${BASE_PATH}/#FAQ` },
          { text: "고객 후기", link: `${BASE_PATH}/#Testimonials` },
        ],
      },
    ],

    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/exp/`]: { base: `${BASE_PATH}/exp/`, items: sidebarExp() },
    },

    footer: {
      message: `© Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">개인정보 설정</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">개인정보 처리방침</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">AI 서비스 법적 규정</a> | <a href="https://status.mind.com/">서비스 상태</a>`,
    },

    localization: {
      placeholder4SearchInput: "무엇이든 물어보세요...",
      placeholder4ChatFooter: "무엇이든 물어보세요...",
      placeholder4ChatList: "채팅 주제를 입력하세요...",
      buttonLabel4NavButton: "어시스턴트",
      buttonLabel4SignInButton: "로그인",
      buttonLabel4GetStartedButton: "시작하기",
    },
    contact_form: {
      name: "이름 *",
      namePlaceholder: "귀하의 이름",
      email: "이메일 *",
      emailPlaceholder: "귀하의 이메일 주소",
      webSite: "회사 웹사이트 *",
      webSitePlaceholder: "예: https://companyname.com",
      webSiteError: "웹사이트를 입력해주세요",
      category: "귀하의 주요 목표는 무엇입니까? *",
      categoryPlaceholder: "가장 중요한 것을 선택하세요",
      message: "목표에 대해 논의해보세요 (선택사항)",
      messagePlaceholder: "추가 세부사항을 입력해주세요 (선택사항)",
      submit: "요청 제출",
      sending: "전송 중...",
      successTitle: "감사합니다!",
      successMessage: "메시지를 받았습니다 — 곧 저희 팀이 연락드리겠습니다.",
      defaultCategories: [
        "회의에서 언어 장벽 제거",
        "회의를 검색 가능하고 실행 가능하게 만들기",
        "규정 준수 및 데이터 상주 보장 (EU / US / 아시아)",
        "탐색 중 / 기타",
      ],

      defaultButtonText: "메시지 보내기",
    },
  } as DefaultTheme.Config,
})

function sidebarProduct(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "개요",
      collapsed: false,
      items: [
        { text: "InterMIND란?", link: "overview/what-is-intermind" },
        { text: "작동 방식", link: "overview/how-it-works" },
        { text: "화상 회의 플랫폼", link: "overview/video-meeting-platform" },
        { text: "지역별 데이터 프라이버시", link: "overview/privacy-architecture" },
        { text: "우선 시장", link: "overview/markets" },
      ],
    },
    {
      text: "가이드",
      collapsed: false,
      items: [
        { text: "시작하기", link: "guide/getting-started" },
        { text: "계정 관리", link: "guide/account-management" },
        { text: "회의 만들기", link: "guide/creating-meetings" },
        { text: "회의 인터페이스", link: "guide/meeting-interface" },
        { text: "사용자 역할", link: "guide/user-roles" },
        { text: "AI 기능", link: "guide/ai-features" },
        { text: "회의 기록", link: "guide/meeting-history" },
        { text: "자주 묻는 질문", link: "guide/faq" },
        { text: "문제 해결", link: "guide/troubleshooting" },
        { text: "가격", link: "guide/pricing" },
        { text: "도움말 및 지원", link: "guide/help-support" },
      ],
    },
  ]
}

function sidebarResources(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "지원",
      collapsed: false,
      items: [
        { text: "지원받기", link: "/help" },
      ],
    },
    {
      text: "리소스",
      collapsed: false,
      items: [
        { text: "브랜드 자산", link: "/media-kit" },
      ],
    },
    {
      text: "회사",
      collapsed: false,
      items: [
        { text: "소개", link: "/company/about" },
        { text: "팀", link: "/company/team" },
        { text: "연락처", link: "/company/contacts" },
      ],
    },
  ]
}

function sidebarExp(): DefaultTheme.SidebarItem[] {
  return [
    { text: "경영 요약", link: "/InterMind-Executive-Summary" },
    { text: "시장 진출 전략", link: "/go-to-market-strategy" },
    { text: "투자자 피치", link: "/InterMind-Investor-Pitch" },
    { text: "재무 전망 근거 (1-3년차)", link: "/Financial-Projections-Justification" },
  ]
}