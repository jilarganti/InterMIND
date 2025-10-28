---
layout: BlogPost
title: "Yazılım Test Kavramları ve Terminolojisine Giriş"
description: Yazılım test temellerini anlamak için yeni başlayanlar için rehber - test türleri, süreçler ve temel terminoloji dahil.
date: 2025-10-06
author: "[Jilarganti](https://github.com/jilarganti)"
head:
  - - meta
    - name: keywords
      content: yazılım testi, test temelleri, QA, manuel test, otomatik test, test türleri
---

# Yazılım test temelleri: Kapsamlı rehber (2025)

<p class="subtitle">Yazılım testine başlamak için bilmeniz gereken her şey</p>

> **Yazılım Testi Nedir?**  
> Yazılım testi, bir yazılım uygulamasının beklendiği gibi çalıştığını değerlendirme ve doğrulama sürecidir. Yazılım kullanıcılara ulaşmadan önce hataları, eksiklikleri veya eksik gereksinimleri belirlemeye yardımcı olur.

## Yazılım Test Türleri

Geliştirme yaşam döngüsünde her biri farklı bir amaca hizmet eden dört ana test türü vardır:

| Tür                     | Neyi Test Ederiz            | Ne Zaman           | Amaç                    |
| ----------------------- | ---------------------------- | ------------------ | ----------------------- |
| **Birim Testi**         | Bireysel fonksiyonlar/metodlar | Geliştirme sırasında | Her parçanın çalıştığını doğrula |
| **Entegrasyon Testi**   | Modüllerin birlikte çalışması | Birim testlerinden sonra | Bağlantıları kontrol et |
| **Sistem Testi**        | Tamamlanmış uygulama         | Yayınlamadan önce  | Uçtan uca doğrulama     |
| **Kabul Testi**         | İş gereksinimleri            | Son aşama          | Hazır olduğunu onayla   |

## Test Süreci

Yazılım testi, planlamadan yayına kadar net bir iş akışı izler:

<div class="process-flow">
  <div class="process-step">
    <div class="process-icon">📋</div>
    <div class="process-label">Planlama</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">✍️</div>
    <div class="process-label">Tasarım</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">▶️</div>
    <div class="process-label">Yürütme</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">🐛</div>
    <div class="process-label">Raporlama</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">🔧</div>
    <div class="process-label">Düzeltme</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">✅</div>
    <div class="process-label">Doğrulama</div>
  </div>
</div>

## Manuel vs Otomatik Test

Her iki yaklaşımın da test stratejisinde yeri vardır:

<div class="comparison-grid">

<div class="comparison-card manual">

### 👤 Manuel Test

- İnsan test uzmanları uygulamayı keşfeder
- UI/UX değerlendirmesi için mükemmel
- Yeni özellikler için ideal
- Esnek ve yaratıcı
- Tekrarlayan görevler için daha yavaş

**En uygun olduğu durumlar:** Keşifsel test, kullanılabilirlik, geçici senaryolar

</div>

<div class="comparison-card automated">

### 🤖 Otomatik Test

- Betikler testleri otomatik olarak çalıştırır
- Hızlı ve tutarlı
- Regresyon testi için ideal
- İlk kurulum zamanı gerektirir
- Uzun vadede maliyet etkin

**En uygun olduğu durumlar:** Regresyon, API testi, tekrarlanan senaryolar

</div>

</div>

## Test Piramidi

Dengeli bir test stratejisi şu dağılımı takip eder:

<div class="pyramid">
  <div class="pyramid-level level-ui">UI/E2E Testleri (Daha Az)</div>
  <div class="pyramid-level level-integration">Entegrasyon Testleri (Daha Fazla)</div>
  <div class="pyramid-level level-unit">Birim Testleri (En Fazla)</div>
</div>

<p style="text-align: center; color: var(--vp-c-text-2); margin-top: 1em;">
  <small>Daha fazla birim testi = daha hızlı geri bildirim, daha düşük maliyet. Daha az UI testi = daha az bakım.</small>
</p>

## Yaygın Test Terimleri

| Terim                  | Tanım                                                                       |
| ---------------------- | --------------------------------------------------------------------------- |
| **Test Senaryosu**     | Beklenen sonuçlarla birlikte test edilecek belirli bir senaryo             |
| **Hata/Kusur**         | Yanlış davranışa neden olan bir hata veya kusur                            |
| **Regresyon Testi**    | Yeni değişikliklerin mevcut özellikleri bozmadığından emin olmak için yeniden test etme |
| **Smoke Testing**      | Yapının daha derin testler için yeterince kararlı olup olmadığını kontrol eden hızlı temel testler |
| **Test Kapsamı**       | Testler tarafından çalıştırılan kodun yüzdesi                              |

## Sık Sorulan Sorular

### S: Yazılım testi için kodlama becerileri gerekli mi?

Manuel test için temel teknik bilgi yeterlidir. Otomasyon testi programlama becerileri gerektirir (Python, Java, JavaScript yaygın dillerdir).

### S: QA ve test arasındaki fark nedir?

Test, hata bulmaktır. QA (Kalite Güvencesi), iyi süreçler ve standartlar aracılığıyla hataları önlemeye yönelik daha geniş bir süreçtir.

### S: Ne kadar test yeterlidir?

Mükemmel bir sayı yoktur. Risk, zaman ve kaynakları dengeleyin. Kritik özellikler daha fazla test gerektirir; düşük riskli alanlar daha az gerektirir.

### S: Yapay zeka yazılım test uzmanlarının yerini alabilir mi?

Yapay zeka tekrarlayan testleri otomatikleştirebilir, ancak iş mantığını, sınır durumları ve kullanıcı deneyimini anlamak için insan test uzmanları hala gereklidir.

---

::: info Teste Başlamaya Hazır mısınız?
Bu kılavuz temel konuları kapsar. Öğrenmenin en iyi yolu pratik yapmaktır—basit test durumlarıyla başlayın ve becerilerinizi kademeli olarak geliştirin.
:::

<style scoped>
.subtitle {
  color: var(--vp-c-text-2);
  font-size: 1.1em;
  margin-bottom: 2em;
}

.process-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2em 0;
  padding: 1.5em;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  flex-wrap: wrap;
}

.process-step {
  text-align: center;
  flex: 1;
  min-width: 80px;
  margin: 10px 5px;
}

.process-icon {
  font-size: 2em;
  margin-bottom: 0.3em;
}

.process-label {
  font-size: 0.9em;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.arrow {
  font-size: 1.5em;
  color: var(--vp-c-brand);
  margin: 0 5px;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em;
  margin: 2em 0;
}

.comparison-card {
  padding: 1.5em;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.comparison-card.manual {
  border-left: 4px solid #ffc107;
}

.comparison-card.automated {
  border-left: 4px solid #17a2b8;
}

.comparison-card h3 {
  margin-top: 0;
  margin-bottom: 1em;
  color: var(--vp-c-text-1);
}

.comparison-card ul {
  list-style: none;
  padding-left: 0;
}

.comparison-card li {
  padding: 0.5em 0;
  padding-left: 1.5em;
  position: relative;
  color: var(--vp-c-text-1);
}

.comparison-card li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

.comparison-card p {
  margin-top: 1em;
  color: var(--vp-c-text-2);
}

.comparison-card strong {
  color: var(--vp-c-text-1);
}

.pyramid {
  margin: 2em auto;
  text-align: center;
  max-width: 500px;
}

.pyramid-level {
  margin: 10px auto;
  padding: 15px;
  border-radius: 4px;
  font-weight: 500;
  transition: transform 0.2s;
  color: white;
}

.pyramid-level:hover {
  transform: scale(1.02);
}

.level-ui {
  width: 40%;
  background: #e74c3c;
}

.level-integration {
  width: 60%;
  background: #f39c12;
}

.level-unit {
  width: 80%;
  background: #27ae60;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
  
  .process-flow {
    flex-direction: column;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
}
</style>