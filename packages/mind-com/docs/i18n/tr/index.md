---
layout: home
title: "Video Toplantılar için Gerçek Zamanlı Konuşma Çevirisi"
description: "19+ dilde eşzamanlı tercümanlık ile profesyonel video konferans. Ton, niyet ve bağlamı yakalayan AI destekli çeviri. Küresel olarak buluşun, doğal iletişim kurun."
isHome: true
---

<!-- <HeroSection title="**Herhangi** Bir Dilde Buluşun" :typingSpeed="10" text="Video aramalarında canlı konuşma çevirisi. Anında anlayış, engel yok."> -->

<HeroSection title="**Herhangi** Bir Dili Anlayın" :typingSpeed="20" text="Anında **Ses** Çevirisi ile Çok Dilli Video Toplantıları">
<NavButton buttonLabel="Demo izle" buttonClass="brand" to="/#VideoDemo" eventName="watch_demo" />
<NavButton buttonLabel="Asistan" buttonClass="alt" to="/chat" eventName="chat_assistant" />
</HeroSection>

{#1}

<FeatureBlock
    :card="{
      title: 'Çeviri ≠ Anlayış. İşte sıradaki adım.',
      details: 'Dil ne olursa olsun, sesiniz duyulur — ve anlaşılır — sanki aynı dili paylaşıyormuşsunuz gibi.',
      items: [
        '✧ Doğal olarak, [gerçek zamanlı](./product/overview/how-it-works) ve altyazı veya gecikme olmadan.',
        '✧ AI destekli tercümanlık ton, niyet ve sektöre özel terminolojiyi yakalar.',
      ],
      link: './product/overview/what-is-intermind',
      src: {
        light: '/media-kit/animals-cartoon-3-2.webp',
        dark: '/1d.webp',
      },
      inversion: false,
    }"
  />

{#2}

<FeatureBlock
    :card="{
      title: 'Toplantılarınızdaki Akıl',
      details: 'InterMind her çok dilli aramayı net, aranabilir bilgiye dönüştürür.',
      items: [
        '✧ **Her şeyi sorun** — AI **toplantılarınız genelinde** cevaplar bulur.',
        '✧ Görevleri, sahiplerini ve son tarihleri otomatik çıkarır.',
        '✧ Anahtar noktaları herhangi bir dilde özetler — anında.',
      ],
      link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
      src: {
        light: '/2l.webp',
        dark: '/2d.webp',
      },
      inversion: true,
    }"
  />

{#3}

<FeatureBlock
    :card="{
      title: 'Ciddi Toplantılar İçin Tasarlandı — Sadece Konuşmak İçin Değil',
      details: 'InterMind [profesyonel seviye video toplantı platformudur](./product/overview/video-meeting-platform), hafif bir eklenti veya plugin değil.',
      items: [
        '✧ 1080p çözünürlük, akıllı gürültü bastırma, planlama, moderasyon, ekran paylaşımı, kayıt, altyazı, katılımcı sohbeti ve takvim entegrasyonu — hepsi dahili, **kullanıma hazır**.',
      ],
      link: './product/overview/video-meeting-platform',
      src: {
        light: '/3l.mp4',
        dark: '/3d.mp4',
      },
      inversion: false,
    }"
  />

{#4}

<FeatureBlock
    :card="{
      title: 'Önemli Olan Yerde Gizlilik',
      details: 'InterMind güven gerektiren konuşmalar için tasarlandı — gizlilik ve kontrolün en önemli olduğu yerde.',
      items: ['✧ [Gizlilik Bölgeleri](./product/overview/privacy-architecture) — AB, ABD, Güneydoğu Asya', '✧ **Sıfır veri eğitimi**. Üçüncü taraf erişimi yok.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.webp',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />

> **Bu kimler için?**  
> _Dil engellerinin gecikmelere, kaybedilen anlaşmalara veya maliyetli yanlış anlaşılmalara neden olduğu uluslararası ekipler için tasarlandı._ [Daha fazla bilgi ...](./product/overview/markets)

## Google Meet + Canlı Çeviri Gibi Çalışır {#HowItWorks}

Tanıdık arayüz. Evrensel iletişim. Google Meet kadar kolay — dil engellerini ortadan kaldıran anlık çeviri ile.

<FeatureCards
    :features="[
      {
        title: 'Ücretsiz kaydolun',
        details: 'Dilinizi seçin ve [hesap oluşturun](#Pricing).',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'Toplantı başlatın',
        details: 'Anında oluşturun veya önceden planlayın.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'Toplantıya katılın',
        details: 'Bağlantıya tıklayın, adınızı girin, anında katılın.',
        icon: {
          light: '/join.webp',
          dark: '/join.webp',
        },
      },
      {
        title: 'Kendi dilinizde konuşun',
        details: 'Herkes kendi dilinde konuşur ve duyar.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />

<!-- <br> -->

## Video Demo {#VideoDemo}

<VideoPlayer src="/promo/demo-en-mx.mp4" />

## Örnek: Toplantıda gerçek zamanlı konuşma çevirisinin nasıl çalıştığı {#Example}

Diyelim ki:

Kullanıcı **site yerelleştirme dili** olarak **İspanyolca** kullanıyor. Bir toplantı düzenliyor ve iki katılımcı davet ediyor:

- 🧑‍💼 Katılımcı 1 arayüzü **İngilizce** kullanıyor
- 👩 Katılımcı 2 arayüzü **Çince** kullanıyor

### Toplantı sırasında ne olur?

Her katılımcı ürüne girerken seçtiği dilde **konuşur ve duyar**.  
Bu tek dil ayarı şunları kapsar:

- **Arayüz dili**
- **Konuşma girişi** (söyledikleriniz)
- **Çevrilmiş çıktı** (duyduklarınız)

| Katılımcı   | Seçilen Dil | Konuştuğu Dil | Duyduğu Dil |
| ----------- | ----------- | ------------- | ----------- |
| Ev sahibi   | İspanyolca  | İspanyolca    | İspanyolca  |
| Katılımcı 1 | İngilizce   | İngilizce     | İngilizce   |
| Katılımcı 2 | Çince       | Çince         | Çince       |

[Platform tüm konuşmaları gerçek zamanlı olarak otomatik yorumlar](./product/overview/how-it-works) — böylece herkes aynı dili konuşuyormuş gibi iletişim kurar.

### Arama sırasında dilinizi değiştirebilir misiniz?

Evet. **Ayarlar**'ı açıp `Diliniz` alanını değiştirebilirsiniz:

:::details Ayarlar Paneli
<img src="/settings.png" alt="ayarlar-paneli" width="300px" />
:::

Bunu değiştirmek şu anlama gelir:

- Doğru çeviri için `seçilen dilde` konuşmalısınız
- Diğerlerini `seçilen dilde` duyacaksınız
- Arayüz otomatik olarak `seçilen dile` geçecek

> ✨ "Diliniz" **tek birleşik bir ayardır**  
> **Nasıl konuştuğunuzu**, **ne duyduğunuzu** ve **ne gördüğünüzü** kontrol eder.  
> Bir dilde konuşup başka bir dilde dinlemek **desteklenmez** — deneyimi basit ve öngörülebilir tutmak için tasarım gereği.

## Müşterilerimiz Ne Diyor {#Testimonials}

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

## Net ve Basit Fiyatlandırma {#Pricing}

İlk aramadan akıcı konuşmalara — her ölçekte.

<PricingPlans
    :plans="[
      {
        title: '**Temel** &nbsp 1 kullanıcı',
        price: '**Ücretsiz**',
        details: 'kredi kartı gerekmez',
        items: [
          '**25** toplantı',
          '**100** katılımcılı video toplantıları [💬](#3)',
          'Kullanıcı başına **30** GB ortak depolama',
          'Tüm toplantılarınızda arama [💬](#2)',
          'Eşzamanlı çeviri [💬](#1)',
        ],
      },
      {
        title: '**Pro**  &nbsp 1-99 kullanıcı',
        price: '**$20** /ay/kullanıcı, yıllık faturalandırma',
        details: 'veya aylık $25',
        items: [
          '**Sınırsız** toplantı',
          '**150** katılımcılı video toplantıları [💬](#3)',
          'Kullanıcı başına **2** TB ortak depolama',
          'Tüm toplantılarınızda arama [💬](#2)',
          'Eşzamanlı çeviri [💬](#1)',
        ],
      },
      {
        title: '**İş** &nbsp 100+ kullanıcı',
        price: '**Özel fiyatlandırma**',
        details: 'Gizlilik için tasarlandı',
        items: [
          '**Sınırsız** toplantı',
          '**500** katılımcılı video toplantıları [💬](#3)',
          'Kullanıcı başına **5** TB ortak depolama',
          'Tüm toplantılarınızda arama [💬](#2)',
          'Eşzamanlı çeviri [💬](#1)',
          '**Gizlilik Bölgeleri** [💬](#4)',
        ],
      },
    ]">

<AuthButton text="Başlayın" button-class="brand" event-name="get_started_attempt"/>
<AuthButton text="Şimdi satın alın" mode="checkout" eventName="buy_now_attempt" />
<ContactForm 
  buttonText="Ekibimizle konuşun" 
  buttonClass="alt"
  :services="[
    'İş planı için özel teklif alın',
    'Kurumsal özellikler ve Gizlilik Bölgelerini görüşün',
    'Ekibim için demo planlayın',
    'Ekip katılımı hakkında sorular (100+ kullanıcı)',
    'Entegrasyon ve teknik gereksinimler',
    'Diğer iş sorguları'
  ]" />
</PricingPlans>

> 💡 **_Zamanınızı dilbilgisi ezberlemek yerine mesleğinizde ustalaşmaya harcamanız daha iyi._**  
> 💡 **_Gerçek ortaklıklar gerçek konuşmalarla başlar — onların dilinde._**

## Sık Sorulan Sorular {#FAQ}

<AccordionGroup
    :items="[
      {
        q: 'InterMind hangi dillerde çeviri desteği sunuyor?',
        a: 'InterMind aşağıdaki 19 dilde **gerçek zamanlı çeviri** desteği sunmaktadır:<br><br>- العربية (ar) – Arapça<br>- Čeština (cs) – Çekçe<br>- Deutsch (de) – Almanca<br>- English (en) – İngilizce<br>- Español (es) – İspanyolca<br>- Français (fr) – Fransızca<br>- हिन्दी (hi) – Hintçe<br>- Magyar (hu) – Macarca<br>- Italiano (it) – İtalyanca<br>- 日本語 (ja) – Japonca<br>- 한국어 (ko) – Korece<br>- Nederlands (nl) – Hollandaca<br>- Polski (pl) – Lehçe<br>- Português (pt) – Portekizce<br>- Русский (ru) – Rusça<br>- Türkçe (tr) – Türkçe<br>- 中文 (zh) – Çince<br><br>Bu listeyi sürekli genişletiyoruz — her büyük sürümle birlikte yeni diller eklenmektedir.',
      },
      {
        q: 'Lisanslı kullanıcı nedir ve Katılımcı nedir?',
        a: '*Lisanslı kullanıcı* ücretsiz veya ücretli toplantı lisansına sahiptir ve planının sınırları dahilinde toplantı planlayabilir. *Katılımcılar* davetlilerdir — toplantıya katılmak için **hesap veya lisansa ihtiyaçları yoktur** ve herhangi bir cihazdan **ücretsiz** bağlanabilirler.',
      },
      {
        q: 'Bir InterMind lisansını kaç kişi kullanabilir?',
        a: 'Her *lisanslı kullanıcı* **sınırsız toplantı** düzenleyebilir. Birden fazla ekip üyesinin aynı anda toplantı düzenlemesi gerekiyorsa, her birinin kendi lisansına ihtiyacı olacaktır.',
      },
      {
        q: 'Bir toplantının maksimum süresi nedir?',
        a: 'Toplantılar tüm planlarda **24 saate** kadar sürebilir.',
      },
      {
        q: 'Düzenleyebileceğim toplantı sayısında bir sınır var mı?',
        a: '*Ücretsiz Temel* plan **25 ücretsiz toplantı** içerir. *Pro* ve *İş* planları daha fazla katılımcı ve kontrol ile sınırsız toplantı sunar.',
      },
      {
        q: 'InterMind veri gizliliği ve güvenliğini nasıl sağlıyor?',
        a: 'InterMind **tasarım gereği gizlidir**. Tüm veriler seçtiğiniz **Gizlilik Bölgesi** içinde işlenir ve saklanır — _AB_, _ABD_ veya _Asya_. [**GDPR**](https://gdpr.eu), [**CCPA**](https://oag.ca.gov/privacy/ccpa) ve BAE PDPL\'ye uygun çalışıyoruz ve **içeriğinizi asla** eğitim veya üçüncü taraf erişimi için kullanmıyoruz. Gelişmiş [Gizlilik Bölgesi kontrolü](./product/overview/privacy-architecture) **İş** planında mevcuttur.',
      },
      {
        q: 'Bir plan satın almadan önce InterMind\'ı deneyebilir miyim?',
        a: 'Kesinlikle. *Ücretsiz Temel* plan size **25 ücretsiz toplantı** ile temel özelliklere tam erişim sağlar — **eşzamanlı çeviri** ve **toplantı arama** dahil. Kredi kartı gerekmez. İstediğiniz zaman yükseltebilirsiniz.',
      },
      {
        q: 'Yardım veya desteğe ihtiyacım olursa ne yapmalıyım?',
        a: 'Destek [yardım merkezimiz](./resources/help) aracılığıyla mevcuttur. *İş* kullanıcıları özel iletişim ile **öncelikli destek** alır.',
      },
      {
        q: 'Aboneliğimi nasıl yönetirim (yükseltme, düşürme veya iptal)?',
        a: 'Planınızı **hesap ayarlarınız** üzerinden istediğiniz zaman değiştirebilirsiniz. Değişiklikler **anında** geçerli olur. İptaller için *Aylık planlar* fatura döngüsünün sonunda iptal olur. *Yıllık planlar* **orantılı geri ödeme** ile iptal edilebilir.',
      },
      {
        q: 'InterMind\'ı webinar veya büyük etkinlikler için kullanabilir miyim?',
        a: 'Evet. *Pro* ve *İş* planları **büyük toplantılar ve webinarlar** için idealdir — *İş* planında **500 katılımcıya** kadar destek ile.',
      },
    ]"/>

<HomeFooter
    :columns="[
      {
        title: 'ÜRÜN',
        links: [
          { text: 'Genel Bakış', link: './product/overview/what-is-intermind' },
          { text: 'Başlangıç', link: './product/guide/getting-started' },
          { text: 'Referanslar', link: '#Testimonials' },
          { text: 'Fiyatlandırma', link: '#Pricing' },
        ],
      },
      {
        title: 'DESTEK',
        links: [
          { text: 'Destek Al', link: './resources/help' },
          { text: 'SSS', link: '#FAQ' },
          { text: 'Gizlilik Politikası', link: './resources/company/privacy-policy' },
          { text: 'AI Hukuki Rehberi', link: './resources/company/legal-regulations-for-ai-services' },
          { text: 'Servis Durumu', link: 'https://status.mind.com/' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: 'KAYNAKLAR',
        links: [
          { text: 'Blog', link: './blog/' },
          { text: 'Küresel Dil Erişimi Uyumluluğu', link: './blog/posts/global-language-access-compliance' },
          { text: 'Marka Varlıkları', link: './resources/media-kit' },
          { text: 'AI API / LLM Dokümanları', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'ŞİRKET',
        links: [
          { text: 'Hakkımızda', link: './resources/company/about' },
          { text: 'Ekip', link: './resources/company/team' },
          { text: 'Kariyer', link: './resources/company/careers' },
          { text: 'İletişim', link: './resources/company/contacts' },
        ],
      },
    ]"/>
