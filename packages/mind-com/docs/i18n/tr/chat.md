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
    { id: "49", text: "bu sitenin popüler sayfaları, tablo", category: "general" },
  { id: "49", text: "bu site, en çok sorulan 10 soru", category: "general" },
  { id: "49", text: "serbest bölge site bağlantıları, tablo", category: "general" },
  { id: "49", text: "fiyatlı serbest bölge sitelerinin bağlantı tablosu", category: "general" },
  
  { id: "1", text: "BAE'de şirket kuruluşu", category: "business" },
  { id: "7", text: "BAE ticaret lisansı gereksinimleri", category: "business" },
  { id: "7", text: "BAE kuruluş türlerinin karşılaştırması, tablo ve analitik", category: "business" },
  { id: "7", text: "iki kuruculu finansal işletme için İngiltere'den çeşitli serbest bölgelere şirket taşıma maliyetinin uzman karşılaştırması. 8 vize, 3 aile üyesi + bir köpek. İş merkezinde kira. İngiliz, BAE sakini değil", category: "business" },
  { id: "48", text: "BAE'deki en iyi 10 hastane, artıları ve eksileri", category: "healthcare" },

  { id: "15", text: "BAE'de vekaletname", category: "legal" },

  // Бизнес-услуги (первый блок)
  { id: "2", text: "Anakara şirket kurulumu", category: "business" },
  { id: "3", text: "Serbest bölge şirket kaydı", category: "business" },
  { id: "4", text: "Offshore şirket kuruluşu", category: "business" },
  { id: "5", text: "BAE serbest meslek vizesi", category: "business" },
  { id: "6", text: "Dubai iş lisansı", category: "business" },
  { id: "23", text: "BAE iş kurulumu", category: "business" },
  { id: "24", text: "Dubai serbest bölgeleri", category: "business" },
  { id: "25", text: "BAE şirket kaydı", category: "business" },
  { id: "26", text: "BAE serbest meslek vizesi", category: "business" },
  
  // Визы и иммиграция
  { id: "8", text: "BAE Altın Vize başvurusu", category: "visa" },
  { id: "9", text: "BAE çalışma vizesi", category: "visa" },
  { id: "10", text: "BAE'de aile vizesi sponsorluğu", category: "visa" },
  { id: "11", text: "Vize tıbbi test gereksinimleri", category: "visa" },
  { id: "12", text: "BAE oturma vizesi süreci", category: "visa" },
  { id: "27", text: "BAE vize gereksinimleri", category: "visa" },
  
  // Юридические и документы
  { id: "13", text: "Emirates ID başvurusu", category: "legal" },
  { id: "14", text: "BAE belge tasdiki", category: "legal" },
  { id: "16", text: "BAE iş sözleşmesi incelemesi", category: "legal" },
  { id: "40", text: "Emirates ID yenileme", category: "legal" },
  
  // Финансовые услуги
  { id: "17", text: "BAE kurumsal banka hesabı", category: "finance" },
  { id: "18", text: "BAE vergi kaydı (KDV)", category: "finance" },
  { id: "19", text: "BAE'de muhasebe hizmetleri", category: "finance" },
  { id: "20", text: "BAE Ekonomik Öz Düzenlemeleri", category: "finance" },
  { id: "41", text: "BAE bankacılık hizmetleri", category: "finance" },
  
  // Недвижимость и услуги
  { id: "21", text: "BAE emlak yatırımı", category: "property" },
  { id: "22", text: "Dubai ofis alanı kiralama", category: "property" },

  // Здравоохранение
  { id: "47", text: "BAE sağlık sigortası", category: "healthcare" },
  { id: "49", text: "BAE tıbbi kontrol", category: "healthcare" },
  
  // Туризм и развлечения (в конце)
  { id: "28", text: "Dubai turistik yerler", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Dubai Frame biletleri", category: "attractions" },
  { id: "31", text: "Burj Khalifa biletleri", category: "attractions" },
  { id: "32", text: "Gelecek Müzesi", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Dubai Mall alışveriş", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />