<script setup>
  const chatPrompts = [
    // Temel Ürün ve Teknoloji
    "Gerçek zamanlı AI tercümanlık vs geleneksel simultane tercümanlar",
    "Video toplantılarda AI sesli çevirinin nasıl çalıştığı",
    "Konuşmadan konuşmaya çeviri gecikme ölçütleri",
    "İş görüşmeleri için AI tercümanlık doğruluğu",
    "Canlı toplantılarda bağlam farkında AI çeviri",
    
    // İş Kullanım Durumları
    "Dil engellerinin olmadığı uluslararası satış toplantıları",
    "Anında çeviri ile küresel ekip işbirliği",
    "Sınır ötesi üretim tedarikçi iletişimi",
    "Çok dilli müşteri destek video aramaları",
    "Uluslararası eğitim ve öğretim oturumları",
    
    // Teknik Performans
    "Zayıf ağ koşullarında video konferans",
    "apiMind vs Google Meet çeviri performansı",
    "apiMind vs Zoom tercümanlık özellikleri",
    "Aksanlarda konuşma tanıma doğruluğu",
    "AI tercümanlı aramalar için bant genişliği gereksinimleri",
    
    // İş ROI ve Ekonomi
    "Maliyet karşılaştırması: AI tercümanlık vs insan tercümanlar",
    "Dil erişim teknolojisi uygulamasının ROI'si",
    "İş dünyasında dil engellerinin gizli maliyetleri",
    "Anında AI çeviri ile zaman tasarrufu",
    "Uluslararası anlaşmalarda yanlış iletişim maliyetlerini azaltma",
    
    // Uyumluluk ve Düzenlemeler
    "ABD'de dil erişim yasaları (Title VI, ADA, LEP)",
    "Çok dilli video platformları için GDPR uyumluluğu",
    "Sağlık hizmetlerinde dil erişim düzenlemeleri (Bölüm 1557)",
    "Bulut çeviri hizmetlerinde veri egemenliği",
    
    // Rekabet Analizi
    "Microsoft Teams gerçek zamanlı çeviri sınırlamaları",
    "Google Meet otomatik altyazılar vs AI tercümanlık",
    "Zoom çeviri özellikleri karşılaştırması",
    "Geleneksel LSP vs AI tercümanlık platformları",
    
    // Teknoloji Trendleri
    "AI ile simultane tercümanlığın geleceği",
    "Çok modlu AI çeviri (ses + görsel bağlam)",
    "AI tercümanlıkta duygusal zeka",
    "Düşük gecikmeli tercümanlık için edge computing",
    
    // Başarı Hikayeleri ve Vaka Çalışmaları
    "Şirketler AI tercümanlık ile uluslararası satışları nasıl artırdı",
    "AI ile tercüman maliyetlerini %80 azaltma",
    "Üniversitelerin erişilebilirlik için AI tercümanlık benimsemesi",
    "Hastane sistemi LEP hasta memnuniyeti iyileştirmesi",
  ]
</script>

<AIChat :prompts="chatPrompts" />