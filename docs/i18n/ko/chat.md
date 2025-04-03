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
  // 비즈니스 서비스 (첫 번째 블록)
  { id: "1", text: "UAE 회사 등록", category: "business" },
  { id: "2", text: "Mainland 회사 설립", category: "business" },
  { id: "3", text: "Free zone 회사 등록", category: "business" },
  { id: "4", text: "Offshore 회사 설립", category: "business" },
  { id: "5", text: "UAE 프리랜서 비자", category: "business" },
  { id: "6", text: "두바이 사업 면허", category: "business" },
  { id: "7", text: "UAE 무역 면허 요건", category: "business" },
  { id: "23", text: "UAE 사업 설립", category: "business" },
  { id: "24", text: "두바이 Free zone", category: "business" },
  { id: "25", text: "UAE 회사 등록", category: "business" },
  { id: "26", text: "UAE 프리랜서 비자", category: "business" },
  
  // 비자 및 이민
  { id: "8", text: "UAE Golden Visa 신청", category: "visa" },
  { id: "9", text: "UAE 취업 비자", category: "visa" },
  { id: "10", text: "UAE 가족 비자 스폰서십", category: "visa" },
  { id: "11", text: "비자 의료 검사 요건", category: "visa" },
  { id: "12", text: "UAE 거주 비자 절차", category: "visa" },
  { id: "27", text: "UAE 비자 요건", category: "visa" },
  
  // 법률 및 서류
  { id: "13", text: "Emirates ID 신청", category: "legal" },
  { id: "14", text: "UAE 문서 공증", category: "legal" },
  { id: "15", text: "UAE 위임장", category: "legal" },
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
  { id: "22", text: "두바이 사무실 임대", category: "property" },

  // 의료
  { id: "47", text: "UAE 건강 보험", category: "healthcare" },
  { id: "48", text: "두바이 최고의 병원", category: "healthcare" },
  { id: "49", text: "UAE 건강 검진", category: "healthcare" },
  
  // 관광 및 엔터테인먼트 (마지막)
  { id: "28", text: "두바이 관광 명소", category: "travel" },
  { id: "29", text: "Expo City 두바이", category: "attractions" },
  { id: "30", text: "Dubai Frame 티켓", category: "attractions" },
  { id: "31", text: "Burj Khalifa 티켓", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Dubai Mall 쇼핑", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>