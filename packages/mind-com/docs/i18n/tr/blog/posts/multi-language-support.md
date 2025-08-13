---
layout: BlogPost
title: "InterMIND'de Çoklu Dil Desteği"
date: 2025-03-05
author: Yerelleştirme Ekibi
---

# InterMIND'de Çoklu Dil Desteği

InterMIND, platformumuzu dünya çapındaki kullanıcılara erişilebilir kılarak kapsamlı çoklu dil desteği sunmaktan gurur duyar.

<!--more-->

## Desteklenen Diller

InterMIND şu anda **19+ dili** desteklemektedir:

- İngilizce, İspanyolca, Fransızca, Almanca
- Çince (Basitleştirilmiş ve Geleneksel)
- Japonca, Korece
- Arapça, İbranice
- Rusça, Lehçe
- Ve daha fazlası!

## Nasıl Çalışır

Çeviri sistemimiz şunları kullanır:

1. **Yapay zeka destekli çeviriler**: OpenAI ve Anthropic modellerini kullanarak
2. **Otomatik yedekleme**: Bir servis başarısız olursa, diğerine geçiş yaparız
3. **RTL desteği**: Sağdan sola yazılan diller için tam destek

## Çevirilerle Başlarken

InterMIND'a kendi dilinizde erişmek için:

1. Dilinize özel URL'yi ziyaret edin (örn. `/es/`, `/fr/`, `/ar/`)
2. Yapay zeka sohbeti otomatik olarak dilinizi algılar ve yanıt verir
3. Tüm dokümantasyon tercih ettiğiniz dilde mevcuttur

## Geliştiriciler İçin

Yeni bir dil eklemek çok basit:

```javascript
// In translateConfig.ts
languages: {
  "pt": "Portuguese",
  // Dilinizi buraya ekleyin
}
```

Ardından şunu çalıştırın: `pnpm translate`

Dilden bağımsız olarak InterMIND'ı herkese erişilebilir kılma çabamıza katılın!