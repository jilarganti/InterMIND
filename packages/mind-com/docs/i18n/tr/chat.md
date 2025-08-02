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
    // İş dünyasında dil bariyerleriyle ilgili arama sorguları
    { id: "1", text: "Dillerini bilmeden yabancı müşterilerle nasıl iletişim kurulur", category: "communication" },
    { id: "2", text: "İş toplantıları için gerçek zamanlı çeviri", category: "translation" },
    { id: "3", text: "Görüntülü görüşme tercüman yazılımı", category: "interpretation" },
    { id: "4", text: "Dil engelleri nedeniyle kaybedilen anlaşmalar", category: "business-problems" },
    
    // Özel iş senaryoları
    { id: "5", text: "Uluslararası müşterilere nasıl sunum yapılır", category: "presentations" },
    { id: "6", text: "Farklı dillerde ürün demosu yapma", category: "demos" },
    { id: "7", text: "Uluslararası satış toplantısı en iyi uygulamaları", category: "sales" },
    { id: "8", text: "Farklı ülkelerden tedarikçilerle iletişim", category: "supply-chain" },
    
    // Çözüm arama sorguları
    { id: "9", text: "Pahalı insan tercümanlara alternatif", category: "cost-saving" },
    { id: "10", text: "Yapay zeka çevirisi ve insan çevirmen karşılaştırması", category: "comparison" },
    { id: "11", text: "İş için anlık dil çevirisi", category: "instant-translation" },
    { id: "12", text: "Çok dilli takım işbirliği araçları", category: "collaboration" },
    
    // Teknik gereksinim aramaları
    { id: "13", text: "Teknik görüşmeler için çeviri doğruluğu", category: "accuracy" },
    { id: "14", text: "Kurumsal güvenli çeviri yazılımı", category: "security" },
    { id: "15", text: "Mevcut video konferans sistemleriyle entegrasyon", category: "integration" },
    { id: "16", text: "GDPR uyumlu çeviri hizmeti", category: "compliance" },
    
    // ROI ve iş değeri
    { id: "17", text: "Uluslararası ticarette yanlış iletişimin maliyeti", category: "roi" },
    { id: "18", text: "Tercüman maliyetleri ve yapay zeka çözümü karşılaştırması", category: "cost-calculator" },
    { id: "19", text: "Uluslararası satış dönüşüm oranlarını artırma", category: "conversion" },
    { id: "20", text: "Dil eğitimi olmadan global genişleme", category: "expansion" },
    
    // Rakip karşılaştırma aramaları
    { id: "21", text: "Google Meet çeviri sınırlamaları", category: "google-meet" },
    { id: "22", text: "Zoom altyazı çeviri sorunları", category: "zoom" },
    { id: "23", text: "Microsoft Teams çeviri kalitesi sorunları", category: "teams" },
    
    // Sektöre özel aramalar
    { id: "24", text: "Yurtdışı tedarikçilerle üretim iletişimi", category: "manufacturing" },
    { id: "25", text: "İhracat işletmeleri için dil çözümü", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />