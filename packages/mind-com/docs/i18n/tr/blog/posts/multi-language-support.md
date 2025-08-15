---
layout: BlogPost
title: "InterMIND'de Çok Dilli Destek"
date: 2025-03-05
author: Localization Team
---

# InterMIND'de Çok Dilli Destek

InterMIND, platformumuzu dünya çapındaki kullanıcılar için erişilebilir kılan kapsamlı çok dilli destek sunmaktan gurur duyar.

## Desteklenen Diller

Şu anda InterMIND **19+ dil** desteklemektedir:

- İngilizce, İspanyolca, Fransızca, Almanca
- Çince (Basitleştirilmiş ve Geleneksel)
- Japonca, Korece
- Arapça, İbranice
- Rusça, Lehçe
- Ve daha birçoğu!

## Nasıl Çalışır

Çeviri sistemimiz şunları kullanır:

1. **AI destekli çeviriler**: OpenAI ve Anthropic modellerini kullanarak
2. **Otomatik yedekleme**: Bir hizmet başarısız olursa, diğerine geçeriz
3. **RTL desteği**: Sağdan sola yazılan diller için tam destek

## Çevirilerle Başlangıç

InterMIND'a kendi dilinizde erişmek için:

1. Dilinize özel URL'yi ziyaret edin (örn. `/es/`, `/fr/`, `/ar/`)
2. AI sohbet otomatik olarak dilinizi algılar ve dilinizde yanıt verir
3. Tüm dokümantasyon tercih ettiğiniz dilde mevcuttur

## Geliştiriciler İçin

Yeni bir dil eklemek basittir:

```javascript
// translateConfig.ts dosyasında
languages: {
  "pt": "Portuguese",
  // Dilinizi buraya ekleyin
}
```

Ardından şunu çalıştırın: `pnpm translate`

InterMIND'ı dilden bağımsız olarak herkese erişilebilir kılma konusunda bize katılın!