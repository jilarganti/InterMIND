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
  { id: "1", text: "Expo City Dubai", category: "attractions" },
  { id: "2", text: "Dubai Frame 티켓", category: "attractions" },
  { id: "3", text: "Burj Khalifa 티켓", category: "attractions" },
  { id: "4", text: "Museum of the Future", category: "attractions" },
  { id: "5", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "7", text: "Dubai Mall 레스토랑", category: "food" },
  { id: "8", text: "두바이 최고의 아랍 음식", category: "food" },
  { id: "9", text: "두바이 미슐랭 스타 레스토랑", category: "food" },
  { id: "10", text: "샤르자 길거리 음식", category: "food" },
  { id: "11", text: "Palm Jumeirah 임대", category: "housing" },
  { id: "12", text: "Dubai Marina 아파트", category: "housing" },
  { id: "13", text: "아부다비 저렴한 주택", category: "housing" },
  { id: "14", text: "UAE 임대법", category: "housing" },
  { id: "15", text: "두바이 메트로 지도", category: "transportation" },
  { id: "16", text: "아부다비 택시 요금", category: "transportation" },
  { id: "17", text: "UAE 운전면허", category: "transportation" },
  { id: "18", text: "Dubai RTA 서비스", category: "transportation" },
  { id: "19", text: "Dubai Mall 쇼핑", category: "shopping" },
  { id: "20", text: "Global Village Dubai", category: "shopping" },
  { id: "21", text: "Dubai Gold Souk", category: "shopping" },
  { id: "22", text: "Mall of Emirates 할인", category: "shopping" },
  { id: "23", text: "UAE 사업 설립", category: "business" },
  { id: "24", text: "Dubai Free Zones", category: "business" },
  { id: "25", text: "UAE 회사 등록", category: "business" },
  { id: "26", text: "UAE 프리랜서 비자", category: "business" },
  { id: "27", text: "UAE 비자 요구사항", category: "travel" },
  { id: "28", text: "두바이 관광 명소", category: "travel" },
  { id: "29", text: "UAE 방문 비자 신청", category: "travel" },
  { id: "30", text: "아부다비 관광지", category: "travel" },
  { id: "31", text: "두바이 사막 사파리", category: "travel" },
  { id: "32", text: "외국인 두바이 취업", category: "jobs" },
  { id: "33", text: "UAE 취업 허가 절차", category: "jobs" },
  { id: "34", text: "UAE 원격 근무 일자리", category: "jobs" },
  { id: "35", text: "UAE 급여 가이드", category: "jobs" },
  { id: "36", text: "UAE 일기 예보", category: "events" },
  { id: "37", text: "두바이 예정 행사", category: "events" },
  { id: "38", text: "UAE 건국기념일 축하행사", category: "events" },
  { id: "39", text: "두바이 쇼핑 페스티벌", category: "events" },
  { id: "40", text: "Emirates ID 갱신", category: "services" },
  { id: "41", text: "UAE 은행 서비스", category: "services" },
  { id: "42", text: "DEWA 요금 납부", category: "services" },
  { id: "43", text: "Etisalat 패키지 업그레이드", category: "services" },
  { id: "44", text: "두바이 최고의 학교", category: "education" },
  { id: "45", text: "UAE 대학 입학", category: "education" },
  { id: "46", text: "KHDA 학교 평가", category: "education" },
  { id: "47", text: "UAE 건강보험", category: "healthcare" },
  { id: "48", text: "두바이 최고의 병원", category: "healthcare" },
  { id: "49", text: "UAE 건강검진", category: "healthcare" },
  { id: "50", text: "DHA 서비스", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />