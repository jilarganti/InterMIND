<script setup>
  const chatPrompts = [
    // Ağrı tabanlı arama sorguları - İş dünyasında dil engelleri
    "Pahalı insan tercümanlarına alternatif",
    "Yabancı müşterilerle dillerini bilmeden nasıl iletişim kurulur",
    "İş toplantıları için gerçek zamanlı çeviri",
    "Video arama tercüman yazılımı",
    "Dil engelleri nedeniyle kaybedilen anlaşmalar",
    
    // Spesifik iş senaryoları
    "Uluslararası müşterilere nasıl sunum yapılır",
    "Farklı dillerde ürün demoları nasıl yapılır",
    "Uluslararası satış toplantısı en iyi uygulamaları",
    "Farklı ülkelerden tedarikçilerle iletişim",
    
    // Çözüm arayan sorgular
    "AI çeviri ile insan tercüman karşılaştırması",
    "İş için anlık dil çevirisi",
    "Çok dilli ekip işbirliği araçları",
    
    // Teknik gereksinimler aramaları
    "Teknik tartışmalar için çeviri doğruluğu",
    "Kurumsal için güvenli çeviri yazılımı",
    "Mevcut video konferans ile entegrasyon",
    "GDPR uyumlu çeviri hizmeti",
    
    // ROI ve iş değeri
    "Uluslararası iş dünyasında yanlış anlaşılmanın maliyeti",
    "Tercüman maliyetleri ile AI çözümü karşılaştırması",
    "Uluslararası satış dönüşüm oranlarını artırma",
    "Dil eğitimi olmadan küresel genişleme",
    
    // Rakip karşılaştırma aramaları
    "Google Meet çeviri sınırlamaları",
    "Zoom altyazı çeviri sorunları",
    "Microsoft Teams çeviri kalitesi sorunları",
    
    // Sektöre özel aramalar
    "Denizaşırı tedarikçilerle üretim iletişimi",
    "İhracat işi dil çözümü",
  ]
</script>

<AIChat :prompts="chatPrompts" />