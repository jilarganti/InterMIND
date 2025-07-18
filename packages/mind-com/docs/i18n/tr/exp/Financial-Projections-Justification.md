# Mali Projeksiyonlar Gerekçesi (1-3. Yıl) <Badge type="success" text="updated" />

Bu belge, InterMind'ın ilk üç yıl boyunca kullanıcı büyümesi, gelir (ARR) ve birim ekonomisi için mali modelinin arkasındaki varsayımları açıklamaktadır.

## Müşteri Büyümesi

| Yıl | Ücretli Hesaplar | Gerekçe                                                                                                                                                            |
| --- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | 1,600            | 5 gelişmekte olan pazarda (MX, BR, TR, TH, ID) ilk kullanıma sunma, ihracat odaklı B2B kullanıcılar tarafından erken benimsenme. İngilizce alternatiflere yüksek talep. |
| 2   | 15,600           | 10+ ülkede yerelleştirilmiş SEO ve ücretli kampanyalar, müşteri toplantıları yoluyla ağ etkileri, freemium hunisinin ölçeklendirilmesi. Zoom/CRM entegrasyonları orta pazar edinimini yönlendiriyor. |
| 3   | 72,000           | "Kendi dilinizde konuşun" UX aracılığıyla viral büyüme, derin dikey entegrasyonlar (ERP, onboarding, hukuki), AB/MENA'da bayi programları.                        |

## Yıllık Yinelenen Gelir (ARR)

| Yıl | ARR         | Temel Varsayımlar                                                                                                                |
| --- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1   | $705,600    | 1,600 ücretli hesap × 1.5 ortalama lisans × $24.50/ay → muhafazakar freemium dönüşümü + pilot B2B programları.                   |
| 2   | $8,985,600  | 15,600 ücretli hesap × 2.0 ortalama lisans × $24.00/ay → geliştirilmiş freemium dönüşümü + aktif B2B kazanımı.                  |
| 3   | $50,760,000 | 72,000 ücretli hesap × 2.5 ortalama lisans × $23.50/ay → ürün olgunluğu, orta pazar ölçeklendirmesi, ek satışlar (depolama, gizlilik bölgeleri). |

## Hesap Başına Lisans: Gerçekçi Segmentasyon

### **Temel Görüş:** %80+ tek kullanıcılı kalacak, ancak orta pazar büyümesi daha yüksek ortalama yaratıyor

| Segment              | Y1 Dağılımı       | Y2 Dağılımı         | Y3 Dağılımı       |
| -------------------- | ----------------- | ------------------- | ----------------- |
| **Solo/Serbest**     | %83 (1.0 lis/hes) | %81.5 (1.0 lis/hes) | %80 (1.0 lis/hes) |
| **Küçük İşletme**    | %15 (2.0 lis/hes) | %15 (3.0 lis/hes)   | %15 (4.0 lis/hes) |
| **Orta Pazar**       | %2 (18.5 lis/hes) | %3.5 (21.0 lis/hes) | %5 (22.0 lis/hes) |
| **Ağırlıklı Ortalama** | **1.5 lis/hes**   | **2.0 lis/hes**     | **2.5 lis/hes**   |

### **Lisans Büyüme Mantığı:**

**Y1:** Pilot benimseme — ürünü test eden minimal ekipler, çoğunlukla bireysel kullanıcılar  
**Y2:** Departman yaygınlaştırması — mevcut hesaplarda satış/destek departmanlarına genişleme, orta pazar penetrasyonu başlıyor  
**Y3:** Departman çapında benimseme — orta pazar şirketleri birden fazla ekip ve departmanda ölçekleniyor

## CAC (Müşteri Edinme Maliyeti)

| Yıl | CAC Ort | Gerekçe                                                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | $95     | Ücretli arama, kurucu liderliğindeki satışlar ve düşük maliyetli pilot projeler karışımı. Yüksek niyetli anahtar kelimelerle ülke düzeyinde kampanyalar (örn. "como hablar ingles reuniones"). |
| 2   | $90     | Geliştirilmiş huni metrikleri, yerelleştirilmiş onboarding ve içerik pazarlaması sayesinde CAC azalır. Organik ve yönlendirme kanalları güçlenir.        |
| 3   | $85     | Bayi programları, partner entegrasyonları ve olgun atıf modellemesinden CAC verimliliği.                                                                  |

## LTV (Müşteri Yaşam Boyu Değeri)

| Yıl | LTV    | Hesaplama Temeli                                                                                     |
| --- | ------ | ---------------------------------------------------------------------------------------------------- |
| 1   | $178.9 | ARPU $36.8/ay × 4.9 ay ortalama süre (erken kullanıcılar, freemium segmentinde yüksek kayıp).       |
| 2   | $308.0 | ARPU $48.0/ay × 6.4 ay ortalama süre (gelişmiş elde tutma, B2B müşteriler daha sadık).             |
| 3   | $470.0 | ARPU $58.8/ay × 8.0 ay ortalama süre (orta pazar hakimiyeti; yüksek ACV + yenilemeler + ek satışlar, %10 kayıp). |

## Brüt Kar Marjı

| Yıl | Marj | Etkenler                                                                                                                  |
| --- | ---- | ------------------------------------------------------------------------------------------------------------------------- |
| 1   | 73%  | Konuşma çevirisi yığınının hesaplama maliyeti (~$0.08/dk/kullanıcı), bant genişliği, minimal altyapı. Geliştirme amorti edildi. |
| 2   | 77%  | Model optimizasyonu, daha iyi GPU kullanımı, LLM satıcı indirimleri, hibrit altyapıya geçiş (kenar çıkarımı).            |
| 3   | 80%  | Şirket içi konuşma/LLM modelleri, otomatik ölçeklendirme altyapısı, kullanıcı başına sabit altyapı. B2B özellikleri düşük marjinal maliyetlerle daha yüksek fiyatlandırıldı. |

## Temel Birim Ekonomisi Metrikleri

| Metrik                      | Y1     | Y2     | Y3     | Hedef Değer |
| --------------------------- | ------ | ------ | ------ | ----------- |
| **LTV/CAC**                 | 1.9    | 3.4    | 5.5    | >3.0        |
| **Geri Ödeme Süresi**       | 8.5 ay | 5.8 ay | 4.2 ay | <12 ay      |
| **Brüt Gelir Tutma**        | 85%    | 88%    | 90%    | >85%        |
| **Net Gelir Tutma**         | 95%    | 115%   | 130%   | >110%       |

## Kritik Model Varsayımları

### **Fiyatlandırma Stratejisi:**

- LTV'yi artırmak için yıllar boyunca hafif fiyat optimizasyonu
- Y2-Y3'te premium özelliklerle orta pazar segmenti
- Çoklu koltuk hesapları için hacim indirimleri

### **Müşteri Segmentasyonu Evrimi:**

- **Y1:** SMB erken benimseyicilere odaklanma (yüksek churn, hızlı benimsenme)
- **Y2:** Entegrasyonlar ve ortaklıklar yoluyla orta pazara genişleme
- **Y3:** Özel müşteri başarısı ve çok departmanlı kullanımlarla orta pazar ölçeklendirmesi

### **Coğrafi Genişleme:**

- Önce gelişmekte olan pazarlar (düşük CAC, yüksek büyüme oranı)
- Sonra gelişmiş pazarlar (yüksek LTV, daha karmaşık edinim)

## Riskler ve Risk Azaltma

**Dahil edilmeyen olumlu senaryolar:**

- API monetizasyonu (Y2 yılında planlanmış)
- Orta ölçekli müşteriler için beyaz etiket lisanslama
- Pazar yeri entegrasyonları (Zoom App Store, Microsoft Teams)

**Maliyet varsayımları şunları hesaba katar:**

- Yerelleştirilmiş ödeme yöntemleri ve döviz kuru dalgalanmaları
- Yasal uyumluluk (PDPL/GDPR) ve destek maliyetleri
- Fiyatlandırma üzerindeki rekabet baskısı

**Fiyatlandırma doğrulaması:**

- Karşılaştırılabilir SaaS araçlarına karşı kıyaslama (Zoom, DeepL Pro, Otter AI)
- Hedef segmentlerde fiyat hassasiyeti testi
- Pilot programlar aracılığıyla ödeme istekliliği analizi

> **Sonuç:** Bu projeksiyonlar büyüme hırsını disiplinli SaaS ekonomisi ile dengelemektedir — sürdürülebilir LTV/CAC oranlarını (Y3'e kadar >5x) ve gerçekçi müşteri tabanı segmentasyonu ile %80+ brüt marjları hedeflemektedir.