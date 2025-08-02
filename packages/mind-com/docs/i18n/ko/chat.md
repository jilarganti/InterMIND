---
footer: false
# sidebar: false
# aside: false
next: false
lastUpdated: false
navbar: false
# layout: doc
---

<script setup>
  const chatPrompts = [
    // 비즈니스 언어 장벽 관련 검색어
    { id: "1", text: "외국어를 모르는 상태에서 해외 고객과 소통하는 방법", category: "communication" },
    { id: "2", text: "비즈니스 미팅을 위한 실시간 통역", category: "translation" },
    { id: "3", text: "화상 통화 통역 소프트웨어", category: "interpretation" },
    { id: "4", text: "언어 장벽으로 인한 거래 실패", category: "business-problems" },
    
    // 구체적인 비즈니스 시나리오
    { id: "5", text: "해외 고객 대상 프레젠테이션 방법", category: "presentations" },
    { id: "6", text: "다양한 언어로 제품 데모 진행하기", category: "demos" },
    { id: "7", text: "국제 영업 미팅 모범 사례", category: "sales" },
    { id: "8", text: "다국적 공급업체와의 의사소통", category: "supply-chain" },
    
    // 솔루션 검색 쿼리
    { id: "9", text: "고가의 통역사 대체 방안", category: "cost-saving" },
    { id: "10", text: "AI 통역과 인간 통역사 비교", category: "comparison" },
    { id: "11", text: "비즈니스용 즉각 언어 통역", category: "instant-translation" },
    { id: "12", text: "다국어 팀 협업 도구", category: "collaboration" },
    
    // 기술 요구사항 검색
    { id: "13", text: "기술적 논의를 위한 번역 정확도", category: "accuracy" },
    { id: "14", text: "기업용 보안 번역 소프트웨어", category: "security" },
    { id: "15", text: "기존 화상회의 시스템과의 통합", category: "integration" },
    { id: "16", text: "GDPR 준수 번역 서비스", category: "compliance" },
    
    // ROI 및 비즈니스 가치
    { id: "17", text: "국제 비즈니스에서 의사소통 오류의 비용", category: "roi" },
    { id: "18", text: "통역사 비용 대 AI 솔루션 비교", category: "cost-calculator" },
    { id: "19", text: "국제 영업 전환율 향상", category: "conversion" },
    { id: "20", text: "언어 교육 없는 글로벌 확장", category: "expansion" },
    
    // 경쟁사 비교 검색
    { id: "21", text: "Google Meet 번역 한계", category: "google-meet" },
    { id: "22", text: "Zoom 자막 번역 문제", category: "zoom" },
    { id: "23", text: "Microsoft Teams 번역 품질 이슈", category: "teams" },
    
    // 산업별 검색
    { id: "24", text: "해외 공급업체와의 제조업 커뮤니케이션", category: "manufacturing" },
    { id: "25", text: "수출 기업 언어 솔루션", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />