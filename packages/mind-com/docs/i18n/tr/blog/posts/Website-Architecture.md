---
layout: BlogPost
title: "Mind.com Web Sitesi Mimarisi"
description: "AI Entegrasyonlu Modern JAMstack Çözümünün Teknik Araştırması"
date: 2025-08-15
author: "[Jilarganti](https://github.com/jilarganti)"
---

# Mind.com web sitesi mimarisi: AI entegrasyonlu modern JAMstack çözümünün teknik araştırması

<img src="/blog/iStock-681469612.jpg" alt="BAE dirhemi" width="500" align="right" style="padding: 1.5rem" class="dark-only">
<img src="/blog/iStock-681469612.jpg" alt="Emirates NBD" width="500" align="right" style="padding: 1.5rem" class="light-only">

[mind.com](https://mind.com) web sitesi, JAMstack geliştirme en iyi uygulamalarını son teknoloji AI teknolojileriyle birleştirerek pazarlama siteleri için modern mimarinin mükemmel bir örneğini temsil ediyor. Bu teknik analizde, InterMIND monorepo\'sunun bir parçası olan ancak dinamik yeteneklere sahip bağımsız bir statik platform olarak işlev gören bu projenin altında yatan mimari kararları ayrıntılı olarak inceleyeceğiz.

> **Temel mimari yenilikler**, projeyi tipik pazarlama sitelerinden ayıran çeşitli teknik çözümler içeriyor.

## Yapay Zeka Destekli Otomatik Çeviri Sistemi

Sistem, geleneksel i18n dosyaları ve sözlükler kullanmadan tüm site içeriğini otomatik olarak 20+ dile çevirir. `pnpm translate` komutu çalıştırıldığında, betik `docs/en/` dizinindeki dosyaları analiz eder ve `docs/i18n/{lang}/` dizininde çevrilmiş versiyonlar oluşturur. Herhangi bir metin formatını destekler — Markdown, Vue bileşenleri, TypeScript, JavaScript. Sistem iki yapay zeka modeli (OpenAI GPT-4 ve Anthropic Claude) kullanır ve hatalarda otomatik yedekleme yapar. Her dil versiyonu ayrı bir statik sayfa olarak oluşturulur, JavaScript bağımlılıkları olmadan tam arama motoru indekslemesi sağlar.

## İndekslenmiş İçerikle Arama AI Sohbeti

AI sohbet, önceden indekslenmiş site içeriği ile çalışarak yanlış bilgi üretimini ortadan kaldırır. Derleme süreci (`pnpm build`) sırasında, tüm içerik vektör gömme formatına dönüştürülür ve sunucusuz bir vektör veritabanı olan Upstash Vector'a yüklenir. Arama, ilgili dokümantasyon parçalarını bulmak için kosinüs benzerliği aracılığıyla semantik eşleştirme kullanır. RAG mimarisi, AI modelinin (Claude 3.5 Haiku veya GPT-4) yalnızca bilgi tabanından bulunan parçalara dayalı olarak yanıtlar üretmesine olanak tanır. Sohbet, sorgu dilini otomatik olarak algılar ve manuel yapılandırma gerektirmeden 100'den fazla dili destekleyerek aynı dilde yanıt verir.

## Temel Mimari: VitePress + Vue.js

Mind.com, JAMstack mimarisi gelişiminde evrimsel bir adımı temsil eden modern bir statik site oluşturucu olan **VitePress** üzerine inşa edilmiştir. VitePress, performans ve işlevsellik arasında optimal denge sağlayan benzersiz bir **hibrit SSR/SSG modeli** uygular.

### Temel Mimari Avantajlar

VitePress'in **hibrit render modeli**, iki aşamalı içerik yükleme sağlar: ilk yükleme hızlı görüntüleme ve optimal SEO için statik HTML olarak gerçekleşir, ardından site istemci tarafı navigasyon ve sayfa ön yükleme ile Vue SPA'ya dönüşür. Bu mimari, bir pazarlama sitesi için kritik öneme sahip olan **neredeyse mükemmel Core Web Vitals puanları** elde eder.

**Vue 3 ve Composition API entegrasyonu**, mind.com geliştiricilerine statik mimari içinde dinamik bileşenler oluşturmak için güçlü araçlar sağlar. Birinci sınıf TypeScript desteği, bileşenlerden API entegrasyonlarına kadar tüm uygulama seviyelerinde tip güvenliği sağlar.

**Vite destekli geliştirme**, büyük miktarda içerikle çalışan ekipler için kritik öneme sahip olan Hot Module Replacement aracılığıyla 100ms altında güncellemelerle anında dev sunucu başlatımını garanti eder.

### Performans Optimizasyonu

Mind.com birden fazla performans optimizasyon stratejisi kullanır:

**Akıllı hidrasyon**, yalnızca dinamik sayfa bölümlerinin yüklenmesini sağlarken, statik içerik hidrasyon sürecinden etkilenmez. Bu, sayfa etkileşim süresini radikal şekilde azaltır.

**Otomatik kod bölme**, kullanıcının görüş alanındaki bağlantıların akıllı ön yüklemesi ile her sayfa için ayrı parçalar oluşturarak anında navigasyon sağlar.

**Kaynak optimizasyonu**, optimal önbellek başlıkları ile hash'lenmiş statik varlıkların otomatik oluşturulmasını, lazy loading ile modern WebP/AVIF görüntü formatları desteğini içerir.

## AI Entegrasyonu: Vektör Veritabanları ve Semantik Arama

mind.com'un en yenilikçi özelliklerinden biri, AI yeteneklerinin statik mimariye entegrasyonudur. Platform, semantik arama ve AI sohbeti için temel olarak **Upstash Vector** kullanır.

### Vektör Arama Mimarisi

**Upstash Vector**, 1536 boyuta kadar gömülü veriler arasında verimli en yakın komşu araması için DiskANN algoritmasını kullanan sunucusuz bir vektör veritabanı olarak işlev görür. Vercel AI SDK ile entegrasyon, minimal gecikme ile RAG (Retrieval-Augmented Generation) sohbet botları sağlar.

**Gömme stratejileri** arasında belgelerin vektörleştirmeden önce nokta veya paragraflarla akıllı bir şekilde parçalara bölünmesi, 1536 boyutlu vektörler oluşturmak için `text-embedding-3-small` gibi modern modellerin kullanılması ve optimal performans için 1000 kayıt grupları halinde toplu veri ekleme yer alır.

### İkili AI Mimarisi

Mind.com, **iki AI sağlayıcısı** kullanan gelişmiş bir strateji uygular: OpenAI GPT-4 ve Anthropic Claude. Bu mimari birkaç kritik avantaj sağlar.

**Akıllı istek yönlendirme**, çok modlu yetenekler ve gerçek zamanlı işleme gerektiren görevler için GPT-4 kullanımına olanak tanırken, Claude karmaşık akıl yürütme ve çapraz dilsel görevler için uygulanır ve burada 14+ dilde İngilizce'ye göre %85+ performans gösterir.

**Yedekleme stratejileri** arasında kota tabanlı geçiş (OpenAI kotası tükendiğinde Anthropic'e geçiş), model-spesifik yönlendirme ve maliyet optimizasyonu için dinamik sağlayıcı seçimi yer alır.

### Otomatik Dil Algılama

Sistem, manuel belirtim olmaksızın gelen isteklerin dilini otomatik olarak algılar ve 100+ dili destekler. Claude, üstün çapraz dilsel yetenekler göstererek diyaloglar içinde sorunsuz dil değiştirme ve kültürel bağlam anlayışını destekler.

## Vercel Üzerinde Sunucusuz Mimari

Mind.com, modern sunucusuz geliştirme desenlerini uygulayarak API backend'inin temeli olarak **Vercel Serverless Functions** kullanır.

### TypeScript ve Fluid Compute

2025'te **Vercel Functions**, fonksiyon örneklerini yeniden kullanarak ve tek bir örnek içinde eşzamanlı yürütmeyi etkinleştirerek soğuk başlatmaları azaltan Fluid Compute aracılığıyla geliştirilmiş bir eşzamanlılık modeli sağlar.

**TypeScript entegrasyonu**, doğrulama için tam TypeScript desteği ve Zod şemaları ile yeni @vercel/sdk paketini, ayrıntılı tür bilgileri içeren yapılandırılmış hata yanıtlarını ve sunucusuz ortamlarda parametre işleme için genişletilmiş NextResponse nesnelerini içerir.

### Domain Koruma Middleware

**Domain koruma uygulaması**, otomatik CORS başlık yönetimi için `cors: true` ile Serverless Framework aracılığıyla CORS yapılandırmasını, kimlik doğrulama yeteneği önbelleğe alma ile API Gateway için Özel Yetkilendiricileri ve CORS, kimlik doğrulama ve hata işleme dahil Lambda fonksiyonları için Middy middleware motorunu içerir.

## OAuth ve Kullanıcı Kimlik Doğrulaması

Mind.com'un kimlik doğrulama sistemi, InterMIND ürün tarafında uygulanan **harici bir OAuth hizmeti** ile entegre olur. Bu mimari karar, pazarlama platformu ile ana ürün arasında endişelerin ayrılmasını sağlar.

### Harici OAuth Entegrasyonu

**AuthButton bileşeni** tam OAuth akışını yönetir ve kullanıcıları ortam tabanlı URL'ler (`dev.inter.mind.com/auth` vs `inter.mind.com/auth`) ile harici kimlik doğrulama hizmetine yönlendirir.

**İstemci kimliği yapılandırması** genel güvenli bir tanımlayıcı `oauthClientId = "vca"` kullanır ve harici kimlik doğrulama sistemi ile doğru frontend entegrasyonuna olanak tanır.

**Site tarafında durumsuz yaklaşım** mind.com'un kullanıcı oturumlarını yerel olarak saklamadığı, kullanıcı kimlik doğrulama durumu yönetimi için harici sisteme güvendiği anlamına gelir.

## Çok Dilli Destek: 20+ Dil

Mind.com, tam RTL (sağdan sola) metin yönü desteği ile 20'den fazla dili destekleyerek uluslararası genişlemeye ciddi bir yaklaşım sergilemektedir.

### RTL ve LTR Desteği

Otomatik metin yönü yönetimi için geleneksel `left/right` yerine **CSS Mantıksal Özellikleri** kullanılır. Sass mixinleri otomatik RTL/LTR stil üretimi sağlar ve özel Unicode karakterleri (LRE, PDF) RTL bağlamında parantez ve tırnak işaretlerini düzgün şekilde işler.

### Devrimsel AI Destekli Çeviri Sistemi

**Çeviri Scripti**, web sitesi uluslararasılaştırma yaklaşımını temelden değiştiren **temel bir teknolojik yenilik** temsil eder. Çeviri sözlüklerinin oluşturulması ve sürekli bakımını gerektiren geleneksel i18n sistemlerinin aksine, bu sistem **manuel çeviri yönetimi ihtiyacını tamamen ortadan kaldırır**. `docs/en/` dizinindeki kaynak içeriği analiz ederek, sistem otomatik olarak `docs/i18n/{lang}/` içinde çeviriler oluşturur ve yapılandırmada belirtilen herhangi bir sayıda dili destekler. Yürütme, paket dizininden basit bir `pnpm translate` komutu ile tetiklenir.

**Evrensel format desteği** kritik bir avantajdır: sistem Markdown, Vue bileşenleri, TypeScript, JavaScript ve diğer herhangi bir metin formatını özel adaptasyon olmadan işler. Bu, **dokümantasyondan UI bileşenlerine kadar tüm site içeriğinin otomatik olarak çevrildiği** anlamına gelir ve yapı, biçimlendirme ve işlevsellik korunur.

**Dünya standartlarında SEO optimizasyonu**, her dil için tam statik sayfalar oluşturarak elde edilir. İçeriği dinamik olarak yükleyen istemci tarafı i18n çözümlerinin aksine, her dil sürümü ayrı bir statik sayfa olarak bulunur ve **mükemmel arama motoru indeksleme** ve anında içerik yükleme sağlar. Arama botları JavaScript bağımlılıkları olmadan tamamen çevrilmiş HTML görür.

**İkili AI mimarisi**, hatalarda otomatik model değiştirme ile OpenAI GPT-4 ve Anthropic Claude kullanır. Sistem artımlı çeviri (yalnızca değişen dosyalar), otomatik dosya yapısı senkronizasyonu ve `checkBuildErrors: true` aracılığıyla çevrilmiş dosyaların isteğe bağlı derleme kontrolünü içerir.

**Akıllı prompt mühendisliği**, markdown biçimlendirmesinin korunması, kod bloklarının değişmezliği, tüm bağlantı ve referansların bakımı ve yalnızca doğal dil metninin çevrilmesini sağlar. Sistem, AI modelleri tarafından optimal işleme için büyük dosyaları otomatik olarak bölümlere ayırır.

**Hata işleme ve otomatik düzeltme**, çeviri hatalarında otomatik olarak bir sonraki modele geçme, kısmen çevrilmiş dosyaları `.log` uzantısıyla kaydetme, mevcut tüm modelleri kullanarak sorunlu dosyaları yeniden çevirme ve düzeltilemeyen dosyaların son raporlamasını içerir.

## Pipedrive ile CRM Entegrasyonu

Pipedrive CRM entegrasyonu, modern pazarlama sitelerinin sunucusuz mimari içinde müşteri adaylarını nasıl etkili bir şekilde yönettiğini göstermektedir.

### Müşteri Adayı Yönetimi Otomasyonu

**Olay odaklı mimari**, müşteri adayı işleme için S3/EventBridge tetikleyicilerini, müşteri adayı verisi normalleştirme için sunucusuz fonksiyonları ve Pipedrive ile pazarlama otomasyon platformları arasında senkronizasyon kullanır.

**Analitik pipeline**, veri pipeline orkestrasyon için Step Functions, ETL operasyonları için Lambda fonksiyonları ve verimli uzun vadeli veri depolama için Parquet formatında optimize edilmiş depolama ile uygulanmaktadır.

## Pinia ile Durum Yönetimi

Mind.com, statik siteler için optimize edilmiş Vue 3 uygulama durum yönetimi için modern bir çözüm olarak **Pinia** kullanır.

### Pinia Entegrasyon Desenleri

**Store tanımı**, tema ve arama sorguları için reaktif referanslar, türetilmiş durumlar için hesaplanmış değerler ve durum mutasyonları için eylemler ile Composition API yaklaşımını kullanır.

**Durum kalıcılığı**, localStorage ve sessionStorage desteği ile pinia-plugin-persistedstate aracılığıyla, yalnızca gerekli durum parçalarının seçici olarak kaydedilmesi ve SSR ortamında kullanılamayan tarayıcı API'lerinin zarif bir şekilde işlenmesi ile uygulanır.

### UTM Takip Entegrasyonu

**Analytics store**, URL'den UTM parametrelerini otomatik olarak yakalar, oturum takibi için bunları sessionStorage'da kaydeder ve atıf takibi için Google Analytics ile entegre olur.

## Analitik Entegrasyonu

Mind.com, **Google Tag Manager** ve **Google Analytics 4** aracılığıyla analitiğe modern bir yaklaşım kullanır.

### GTM Entegrasyonu

**Sunucu tarafı A/B testi**, performansı korumak için edge fonksiyonları aracılığıyla uygulanır ve Lighthouse puanlarını 10 puan düşürebilen geleneksel istemci tarafı A/B test araçlarından kaçınır.

Deney takibi için **özel dataLayer olayları** `{'experimentId': 'id', 'variationId': 'id'}` yapısını kullanır ve performans etkisi olmadan doğru test varyant takibini sağlar.

## Güvenlik ve Ölçeklenebilirlik

### Çok Katmanlı Güvenlik Yaklaşımı

**API Gateway Throttling** metod düzeyinde hız sınırlaması, DDoS koruması için hız tabanlı kurallarla AWS WAF ve joker karakter konfigürasyonları yerine belirli domain beyaz listesi ile CORS politikaları sağlar.

**Gizli veri yönetimi** hassas veriler için ortam değişkenleri ve parametre depoları, fonksiyon yürütmeden önce API Gateway düzeyinde girdi doğrulama ve uygun hata işleme ile yapılandırılmış yanıt formatlaması aracılığıyla uygulanır.

### Veri Gizliliği Hususları

**Gizlilik öncelikli mimari** sunucu tarafında veri depolama olmaksızın uçtan uca şifreleme, uygun süre sonu ile güvenli kimlik doğrulama çerezleri, uyumluluk gereksinimleri için kapsamlı günlük kaydı ve yalnızca temel kullanıcı bilgilerini içeren JWT token'ları aracılığıyla veri minimizasyonu içerir.

## Mind.com Mimari Avantajları

### Performans

Mind.com'un mimarisi geleneksel yaklaşımlara kıyasla **%35-60 performans iyileştirmesi** sağlar. JAMstack siteleri %35 daha hızlı yüklenir ve %50'si First Contentful Paint'i 1 saniyenin altında gerçekleştirir.

**Trafik yönetimi**, CDN dağıtımı ve sunucusuz ölçeklendirme sayesinde geleneksel sunucu tarafında render edilen mimarilere kıyasla önemli ölçüde daha düşük maliyetlerle 10 kat iyileştirilmiştir.

### Geliştirici Deneyimi

**pnpm ile monorepo** üstün kurulum hızı sağlar: npm (~45s), yarn (~35s), pnpm (~22s), npm için proje başına 130MB yerine toplam 85MB paylaşılan disk alanı kullanır.

**CI/CD optimizasyonu** etkilenen her paket için paralel işlerin dinamik oluşturulması, artımlı yapılar ve içerik senkronizasyonu ile otomatik dağıtım tetikleyicilerini içerir.

## Rekabet Avantajları

Mind.com, AI entegrasyonu ile modern JAMstack mimarisinin nasıl önemli rekabet avantajları yarattığını göstermektedir:

**Azaltılmış saldırı yüzeyi** ile çalışma zamanı sunucusu veya veritabanı güvenlik açıkları bulunmaz, statik dosyalar SQL enjeksiyonu ve sunucu tarafı saldırı vektörlerini ortadan kaldırır, CDN tabanlı dağıtım DDoS koruması ve küresel yedeklilik sağlar.

**Maliyet etkinliği** CDN barındırma ile elde edilir, geleneksel sunucu barındırmadan önemli ölçüde daha ucuzdur, eklenti ve sunucu yönetimi olmadan azaltılmış operasyonel maliyetler, CDN dağıtımı aracılığıyla otomatik ölçeklendirme ve sunucusuz fonksiyon kullanımı backend bakım yükünü azaltır.

## Sonuç

Mind.com'un mimarisi, modern web geliştirme ilkelerinin örnek bir uygulamasını temsil eder ve statik performansı dinamik AI yetenekleriyle başarılı bir şekilde birleştirir. VitePress + Vue.js + Serverless Functions + AI entegrasyonunun kombinasyonu, minimal operasyonel maliyetlerle üstün kullanıcı deneyimi sunan güçlü, ölçeklenebilir bir platform yaratır.

Pazarlama sitesi mimarisine yönelik bu yaklaşım, 2025'te JAMstack ekosisteminin olgunluğunu gösterir ve kurumsal düzeydeki çözümler için geliştirme yönünü işaret eder. Son teknoloji AI teknolojilerini statik mimariye entegre etmek, JAMstack yaklaşımının tüm performans ve güvenlik avantajlarını korurken kişiselleştirme ve müşteri deneyimi otomasyonu için yeni olanaklar açar.

Mind.com, modern teknolojik çözümlerin nasıl sinerjik etkiler yaratabileceğinin, bireysel bileşenlerin toplamını aşabileceğinin ve pazarlama teknolojisi endüstrisi için yeni standartlar belirleyebileceğinin bir örneği olarak hizmet eder.