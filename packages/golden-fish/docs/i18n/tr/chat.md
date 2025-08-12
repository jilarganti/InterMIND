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
    { id: "49", text: "bu site, ilk 10 SSS", category: "general" },
    { id: "49", text: "free zone site bağlantıları, tablo", category: "general" },
    { id: "49", text: "fiyatlı free zone sitelerine bağlantılar tablosu", category: "general" },
    
    { id: "1", text: "BAE'de şirket tescili", category: "business" },
    { id: "7", text: "BAE ticaret lisansı gereklilikleri", category: "business" },
    { id: "7", text: "BAE kuruluş türlerinin karşılaştırması, tablo ve analiz", category: "business" },
    { id: "7", text: "iki kuruculu finansal bir işletme için İngiltere'den çeşitli free zone'lara şirket taşıma maliyetinin uzman karşılaştırması. 8 vize, 3 aile üyesi + köpek. İş merkezinde kiralama. İngiliz, BAE mukimi değil", category: "business" },
    { id: "48", text: "BAE'deki En İyi 10 Hastane, Artıları ve Eksileri", category: "healthcare" },

    { id: "15", text: "BAE'de Vekaletname", category: "legal" },

    // İş Hizmetleri (ilk blok)
    { id: "2", text: "Mainland şirket kurulumu", category: "business" },
    { id: "3", text: "Free zone şirket tescili", category: "business" },
    { id: "4", text: "Offshore şirket kurulumu", category: "business" },
    { id: "5", text: "BAE freelance vizesi", category: "business" },
    { id: "6", text: "Dubai ticaret lisansı", category: "business" },
    { id: "23", text: "BAE iş kurulumu", category: "business" },
    { id: "24", text: "Dubai free zone'ları", category: "business" },
    { id: "25", text: "BAE şirket tescili", category: "business" },
    { id: "26", text: "BAE freelance vizesi", category: "business" },
    
    // Vize ve Göçmenlik
    { id: "8", text: "BAE Golden Visa başvurusu", category: "visa" },
    { id: "9", text: "BAE çalışma vizesi", category: "visa" },
    { id: "10", text: "BAE'de aile vizesi sponsorluğu", category: "visa" },
    { id: "11", text: "Vize sağlık testi gereklilikleri", category: "visa" },
    { id: "12", text: "BAE oturma vizesi süreci", category: "visa" },
    { id: "27", text: "BAE vize gereklilikleri", category: "visa" },
    
    // Hukuki ve Belgeler
    { id: "13", text: "Emirates ID başvurusu", category: "legal" },
    { id: "14", text: "BAE belge tasdiki", category: "legal" },
    { id: "16", text: "BAE iş sözleşmesi incelemesi", category: "legal" },
    { id: "40", text: "Emirates ID yenileme", category: "legal" },
    
    // Finansal Hizmetler
    { id: "17", text: "BAE kurumsal banka hesabı", category: "finance" },
    { id: "18", text: "BAE vergi kaydı (KDV)", category: "finance" },
    { id: "19", text: "BAE'de muhasebe hizmetleri", category: "finance" },
    { id: "20", text: "BAE Economic Substance Regulations", category: "finance" },
    { id: "41", text: "BAE bankacılık hizmetleri", category: "finance" },
    
    // Gayrimenkul ve Hizmetler
    { id: "21", text: "BAE gayrimenkul yatırımı", category: "property" },
    { id: "22", text: "Dubai ofis alanı kiralama", category: "property" },

    // Sağlık Hizmetleri
    { id: "47", text: "BAE sağlık sigortası", category: "healthcare" },
    { id: "49", text: "BAE sağlık kontrolü", category: "healthcare" },
    
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
