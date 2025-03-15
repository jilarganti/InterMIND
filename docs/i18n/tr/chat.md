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
  { id: "2", text: "Dubai Frame biletleri", category: "attractions" },
  { id: "3", text: "Burj Khalifa biletleri", category: "attractions" },
  { id: "4", text: "Gelecek Müzesi", category: "attractions" },
  { id: "5", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "7", text: "Dubai Mall restoranları", category: "food" },
  { id: "8", text: "Dubai'de en iyi Arap yemekleri", category: "food" },
  { id: "9", text: "Dubai Michelin yıldızlı restoranlar", category: "food" },
  { id: "10", text: "Sharjah sokak lezzetleri", category: "food" },
  { id: "11", text: "Palm Jumeirah kiralık", category: "housing" },
  { id: "12", text: "Dubai Marina daireleri", category: "housing" },
  { id: "13", text: "Abu Dhabi uygun fiyatlı konutlar", category: "housing" },
  { id: "14", text: "BAE kira kanunları", category: "housing" },
  { id: "15", text: "Dubai Metro haritası", category: "transportation" },
  { id: "16", text: "Abu Dhabi taksi ücretleri", category: "transportation" },
  { id: "17", text: "BAE sürücü belgesi", category: "transportation" },
  { id: "18", text: "Dubai RTA hizmetleri", category: "transportation" },
  { id: "19", text: "Dubai Mall alışveriş", category: "shopping" },
  { id: "20", text: "Global Village Dubai", category: "shopping" },
  { id: "21", text: "Dubai Altın Çarşısı", category: "shopping" },
  { id: "22", text: "Mall of Emirates kampanyaları", category: "shopping" },
  { id: "23", text: "BAE şirket kurulumu", category: "business" },
  { id: "24", text: "Dubai free zones", category: "business" },
  { id: "25", text: "BAE şirket tescili", category: "business" },
  { id: "26", text: "BAE serbest çalışma vizesi", category: "business" },
  { id: "27", text: "BAE vize gereklilikleri", category: "travel" },
  { id: "28", text: "Dubai turistik yerleri", category: "travel" },
  { id: "29", text: "BAE ziyaret vizesi başvurusu", category: "travel" },
  { id: "30", text: "Abu Dhabi turistik mekanları", category: "travel" },
  { id: "31", text: "Dubai çöl safarisi", category: "travel" },
  { id: "32", text: "Dubai'de yabancılar için iş fırsatları", category: "jobs" },
  { id: "33", text: "BAE çalışma izni süreci", category: "jobs" },
  { id: "34", text: "BAE'de uzaktan çalışma işleri", category: "jobs" },
  { id: "35", text: "BAE maaş rehberi", category: "jobs" },
  { id: "36", text: "BAE hava durumu tahmini", category: "events" },
  { id: "37", text: "Dubai yaklaşan etkinlikler", category: "events" },
  { id: "38", text: "BAE milli gün kutlamaları", category: "events" },
  { id: "39", text: "Dubai alışveriş festivali", category: "events" },
  { id: "40", text: "Emirates ID yenileme", category: "services" },
  { id: "41", text: "BAE bankacılık hizmetleri", category: "services" },
  { id: "42", text: "DEWA fatura ödeme", category: "services" },
  { id: "43", text: "Etisalat paket yükseltme", category: "services" },
  { id: "44", text: "Dubai'deki en iyi okullar", category: "education" },
  { id: "45", text: "BAE üniversite kabul", category: "education" },
  { id: "46", text: "KHDA okul değerlendirmeleri", category: "education" },
  { id: "47", text: "BAE sağlık sigortası", category: "healthcare" },
  { id: "48", text: "Dubai'deki en iyi hastaneler", category: "healthcare" },
  { id: "49", text: "BAE sağlık kontrolü", category: "healthcare" },
  { id: "50", text: "DHA hizmetleri", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />