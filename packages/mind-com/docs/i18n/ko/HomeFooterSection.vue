<template>
  <HomeFooter
    :columns="[
      {
        title: '제품',
        links: [
          { text: '개요', link: './product/overview/what-is-intermind' },
          { text: '시작하기', link: './product/guide/getting-started' },
          { text: '고객 후기', link: '#testimonials' },
          { text: '가격', link: '#Pricing' },
        ],
      },
      {
        title: '지원',
        links: [
          { text: '지원 받기', link: './resources/help' },
          { text: '자주 묻는 질문', link: '#FAQ' },
          { text: '서비스 상태', link: 'https://status.mind.com/' },
          { text: '개인정보 보호정책', link: './resources/company/Privacy-Policy' },
          { text: 'AI 법적 가이드', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: '리소스',
        links: [
          // { text: 'Blog', link: './blog' },
          { text: '브랜드 자산', link: './resources/media-kit' },
          { text: 'AI API / LLM 문서', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: '회사',
        links: [
          { text: '소개', link: './resources/company/about' },
          { text: '팀', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: '연락처', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>