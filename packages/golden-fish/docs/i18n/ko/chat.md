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
    { id: "49", text: "이 사이트의 인기 페이지, 표", category: "general" },
    { id: "49", text: "이 사이트, 상위 10개 FAQ", category: "general" },
    { id: "49", text: "free zone 사이트 링크, 표", category: "general" },
    { id: "49", text: "가격이 포함된 free zone 사이트 링크 표", category: "general" },
    
    { id: "1", text: "UAE 회사 등록", category: "business" },
    { id: "7", text: "UAE 무역 라이선스 요구사항", category: "business" },
    { id: "7", text: "UAE 기업 유형 비교, 표 및 분석", category: "business" },
    { id: "7", text: "금융 사업을 위해 영국에서 다양한 free zone으로 회사를 이전하는 비용에 대한 전문가 비교. 비자 8개, 가족 구성원 3명 + 반려견. 비즈니스 센터 임대. 영국인, UAE 비거주자", category: "business" },
    { id: "48", text: "UAE 최고의 병원 10곳, 장단점", category: "healthcare" },

    { id: "15", text: "UAE의 위임장", category: "legal" },

    // 비즈니스 서비스 (첫 번째 블록)
    { id: "2", text: "Mainland 회사 설립", category: "business" },
    { id: "3", text: "Free zone 회사 등록", category: "business" },
    { id: "4", text: "Offshore 회사 설립", category: "business" },
    { id: "5", text: "UAE 프리랜서 비자", category: "business" },
    { id: "6", text: "두바이 사업 라이선스", category: "business" },
    { id: "23", text: "UAE 사업 설립", category: "business" },
    { id: "24", text: "두바이 free zones", category: "business" },
    { id: "25", text: "UAE 회사 등록", category: "business" },
    { id: "26", text: "UAE 프리랜서 비자", category: "business" },
    
    // 비자 및 이민
    { id: "8", text: "UAE Golden Visa 신청", category: "visa" },
    { id: "9", text: "UAE 취업 비자", category: "visa" },
    { id: "10", text: "UAE 가족 비자 스폰서십", category: "visa" },
    { id: "11", text: "비자 의료 검사 요구사항", category: "visa" },
    { id: "12", text: "UAE 거주 비자 절차", category: "visa" },
    { id: "27", text: "UAE 비자 요구사항", category: "visa" },
    
    // 법률 및 문서
    { id: "13", text: "Emirates ID 신청", category: "legal" },
    { id: "14", text: "UAE 문서 공증", category: "legal" },
    { id: "16", text: "UAE 사업 계약 검토", category: "legal" },
    { id: "40", text: "Emirates ID 갱신", category: "legal" },
    
    // 금융 서비스
    { id: "17", text: "UAE 기업 은행 계좌", category: "finance" },
    { id: "18", text: "UAE 세금 등록 (VAT)", category: "finance" },
    { id: "19", text: "UAE 회계 서비스", category: "finance" },
    { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
    { id: "41", text: "UAE 은행 서비스", category: "finance" },
    
    // 부동산 및 서비스
    { id: "21", text: "UAE 부동산 투자", category: "property" },
    { id: "22", text: "두바이 사무실 공간 임대", category: "property" },

    // 의료
    { id: "47", text: "UAE 건강 보험", category: "healthcare" },
    { id: "49", text: "UAE 건강 검진", category: "healthcare" },
    
    // 관광 및 엔터테인먼트 (마지막)
    { id: "28", text: "두바이 관광 명소", category: "travel" },
    { id: "29", text: "Expo City 두바이", category: "attractions" },
    { id: "30", text: "두바이 프레임 티켓", category: "attractions" },
    { id: "31", text: "부르즈 할리파 티켓", category: "attractions" },
    { id: "32", text: "미래 박물관", category: "attractions" },
    { id: "33", text: "아부다비 루브르", category: "attractions" },
    { id: "34", text: "페라리 월드 아부다비", category: "attractions" },
    { id: "35", text: "두바이 몰 쇼핑", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />
