<script setup>
  const chatPrompts = [
    // Acı temelli arama sorguları - İş dünyasında dil engelleri
    "Pahalı insan tercümanlarına alternatif",
    "Dillerini bilmeden yabancı müşterilerle nasıl iletişim kurulur",
    "İş toplantıları için gerçek zamanlı çeviri",
    "Görüntülü görüşme tercüman yazılımı",
    "Dil engelleri nedeniyle kaybedilen anlaşmalar",
    
    // Özel iş senaryoları
    "Uluslararası müşterilere nasıl sunum yapılır",
    "Farklı dillerde ürün demoları nasıl yapılır",
    "Uluslararası satış toplantısı en iyi uygulamaları",
    "Farklı ülkelerden tedarikçilerle iletişim",
    
    // Çözüm arayan sorgular
    "Yapay zeka çevirisi ve insan tercümanı karşılaştırması",
    "İş için anlık dil çevirisi",
    "Çok dilli ekip işbirliği araçları",
    
    // Teknik gereksinim aramaları
    "Teknik görüşmeler için çeviri doğruluğu",
    "Kurumsal güvenli çeviri yazılımı",
    "Mevcut video konferans sistemleriyle entegrasyon",
    "GDPR uyumlu çeviri hizmeti",
    
    // ROI ve iş değeri
    "Uluslararası ticarette iletişim eksikliğinin maliyeti",
    "Tercüman maliyetleri ve yapay zeka çözümü karşılaştırması",
    "Uluslararası satış dönüşüm oranlarını artırma",
    "Dil eğitimi olmadan global genişleme",
    
    // Rakip karşılaştırma aramaları
    "Google Meet çeviri sınırlamaları",
    "Zoom altyazı çeviri sorunları",
    "Microsoft Teams çeviri kalitesi sorunları",
    
    // Sektöre özel aramalar
    "Yurtdışı tedarikçilerle üretim iletişimi",
    "İhracat işletmeleri için dil çözümü",
  ]
</script>

<AIChat :prompts="chatPrompts" />