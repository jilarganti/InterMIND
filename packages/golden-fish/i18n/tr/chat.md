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
  // İş Hizmetleri (ilk blok)
  { id: "1", text: "UAE'de şirket tescili", category: "business" },
  { id: "2", text: "Mainland şirket kurulumu", category: "business" },
  { id: "3", text: "Free zone şirket tescili", category: "business" },
  { id: "4", text: "Offshore şirket kurulumu", category: "business" },
  { id: "5", text: "UAE freelance vizesi", category: "business" },
  { id: "6", text: "Dubai ticari lisansı", category: "business" },
  { id: "7", text: "UAE ticari lisans gereklilikleri", category: "business" },
  { id: "23", text: "UAE şirket kurulumu", category: "business" },
  { id: "24", text: "Dubai free zones", category: "business" },
  { id: "25", text: "UAE şirket tescili", category: "business" },
  { id: "26", text: "UAE freelance vizesi", category: "business" },
  
  // Vize ve Göçmenlik
  { id: "8", text: "UAE Golden Visa başvurusu", category: "visa" },
  { id: "9", text: "UAE çalışma vizesi", category: "visa" },
  { id: "10", text: "UAE'de aile vizesi sponsorluğu", category: "visa" },
  { id: "11", text: "Vize sağlık testi gereklilikleri", category: "visa" },
  { id: "12", text: "UAE oturma vizesi süreci", category: "visa" },
  { id: "27", text: "UAE vize gereklilikleri", category: "visa" },
  
  // Hukuki ve Belgeler
  { id: "13", text: "Emirates ID başvurusu", category: "legal" },
  { id: "14", text: "UAE belge tasdiki", category: "legal" },
  { id: "15", text: "UAE'de vekaletname", category: "legal" },
  { id: "16", text: "UAE iş sözleşmesi incelemesi", category: "legal" },
  { id: "40", text: "Emirates ID yenileme", category: "legal" },
  
  // Finansal Hizmetler
  { id: "17", text: "UAE kurumsal banka hesabı", category: "finance" },
  { id: "18", text: "UAE vergi kaydı (KDV)", category: "finance" },
  { id: "19", text: "UAE'de muhasebe hizmetleri", category: "finance" },
  { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
  { id: "41", text: "UAE bankacılık hizmetleri", category: "finance" },
  
  // Gayrimenkul ve Hizmetler
  { id: "21", text: "UAE gayrimenkul yatırımı", category: "property" },
  { id: "22", text: "Dubai ofis alanı kiralama", category: "property" },

  // Sağlık
  { id: "47", text: "UAE sağlık sigortası", category: "healthcare" },
  { id: "48", text: "Dubai'deki en iyi hastaneler", category: "healthcare" },
  { id: "49", text: "UAE sağlık kontrolü", category: "healthcare" },
  
  // Turizm ve Eğlence (sonda)
  { id: "28", text: "Dubai turistik yerleri", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Dubai Frame biletleri", category: "attractions" },
  { id: "31", text: "Burj Khalifa biletleri", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Dubai Mall alışveriş", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>