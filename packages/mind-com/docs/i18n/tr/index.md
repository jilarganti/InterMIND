---
layout: home
title: "Video görüşmeler için canlı konuşma çevirisi"
isHome: true
---

<HeroSection title="**Her** Dilde Buluşun" :typingSpeed="10" text="Video görüşmelerde **canlı konuşma çevirisi** — hızlı, net, sınırsız iletişim.">
<NavButton buttonLabel="Nasıl çalışır" buttonClass="brand" to="/#HowItWorks" />
<NavButton buttonLabel="Asistan" buttonClass="alt" to="/chat" />
</HeroSection>

<span id="1"></span>
<FeatureBlock
    :card="{
      title: 'Çeviri ≠ Anlama. İşte sırada ne var.',
      details: 'Hangi dili konuşursanız konuşun, sesiniz aynı dili konuşuyormuş gibi duyulur ve anlaşılır.',
      items: [
        '✧ Doğal olarak, [gerçek zamanlı](./product/overview/how-it-works), altyazısız ve gecikmesiz.',
        '✧ Yapay zeka destekli çeviri, ton, niyet ve sektöre özgü terminolojiyi yakalar.',
      ],
      link: './product/overview/what-is-intermind',
      src: {
        light: '/media-kit/animals-cartoon-3-2.png',
        dark: '/1d.png',
      },
      inversion: false,
    }"
  />

<span id="2"></span>
<FeatureBlock
    :card="{
      title: 'Toplantılarınızın İçindeki Akıl',
      details: 'InterMind her çok dilli görüşmeyi net, aranabilir bilgiye dönüştürür.',
      items: [
        '✧ **Her şeyi sorun** — Yapay zeka **tüm toplantılarınız arasında** yanıtları bulur.',
        '✧ Görevleri, sorumluları ve son tarihleri otomatik çıkarır.',
        '✧ Önemli noktaları anında herhangi bir dilde özetler.',
      ],
      link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
      src: {
        light: '/2l.png',
        dark: '/2d.png',
      },
      inversion: true,
    }"
  />

<span id="3"></span>
<FeatureBlock
    :card="{
      title: 'Sadece Konuşma Değil, Ciddi Toplantılar İçin Tasarlandı',
      details: 'InterMind bir [profesyonel video toplantı platformudur](./product/overview/video-meeting-platform), hafif bir eklenti veya plugin değil.',
      items: [
        '✧ 1080p çözünürlük, akıllı gürültü bastırma, planlama, moderasyon, ekran paylaşımı, kayıt, altyazı, katılımcı sohbeti ve takvim entegrasyonu — hepsi dahil, **kullanıma hazır**.',
      ],
      link: './product/overview/video-meeting-platform',
      src: {
        light: '/3l.mp4',
        dark: '/3d.mp4',
      },
      inversion: false,
    }"
  />

<span id="4"></span>
<FeatureBlock
    :card="{
      title: 'Önemli Olan Yerde Gizlilik',
      details: 'InterMind, güven gerektiren konuşmalar için tasarlandı — gizlilik ve kontrolün en çok önem taşıdığı yerler için.',
      items: ['✧ [Gizlilik Bölgeleri](./product/overview/privacy-architecture) — AB, ABD, GD Asya', '✧ **Sıfır veri eğitimi**. Üçüncü taraf erişimi yok.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />

> [!tip] Bu kimler için?  
> Dil engellerinin **gecikmelere**, **kaybedilen anlaşmalara** veya **maliyetli yanlış anlamalara** neden olduğu **uluslararası ekipler** için tasarlandı. [Daha fazla bilgi ...](./product/overview/markets)

## Google Meet + Anlık Çeviri Gibi Çalışır

Tanıdık arayüz. Evrensel iletişim. Google Meet kadar kolay — dil engellerini ortadan kaldıran anlık çeviri ile.

<span id="HowItWorks"></span>

<FeatureCards
    :features="[
      {
        title: 'Ücretsiz kaydol',
        details: 'Dilini seç ve [hesap oluştur](#Pricing).',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: 'Toplantı başlat',
        details: 'Anında oluştur veya önceden planla.',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: 'Toplantıya katıl',
        details: 'Linke tıkla, adını gir, anında katıl.',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: 'Kendi dilinde konuş',
        details: 'Herkes kendi dilinde konuşur ve dinler.',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />

<span id="Example"></span>

## Örnek: Bir toplantıda gerçek zamanlı konuşma çevirisi nasıl çalışır

Diyelim ki:

> Kullanıcı **site yerelleştirme dili** olarak **İspanyolca** kullanıyor. Bir toplantı düzenliyor ve iki katılımcı davet ediyor:
>
> - 🧑‍💼 Katılımcı 1 arayüzü **İngilizce** kullanıyor
> - 👩 Katılımcı 2 arayüzü **Çince** kullanıyor

### Toplantı sırasında neler olur?

Her katılımcı, ürüne girerken seçtikleri dilde **konuşur ve duyar**.  
Bu tek dil ayarı şunlar için geçerlidir:

- **Arayüz dili**
- **Konuşma girişi** (söyledikleriniz)
- **Çeviri çıkışı** (duyduklarınız)

| Katılımcı    | Seçilen Dil | Konuşma Dili | Duyma Dili |
| ------------ | ------------ | ------------ | ---------- |
| Ev Sahibi    | İspanyolca  | İspanyolca   | İspanyolca |
| Katılımcı 1  | İngilizce   | İngilizce    | İngilizce  |
| Katılımcı 2  | Çince       | Çince        | Çince      |

[Platform tüm konuşmaları gerçek zamanlı olarak otomatik çeviriyor](./product/overview/how-it-works) — böylece herkes aynı dili konuşuyormuş gibi iletişim kurabiliyor.

### Görüşme sırasında dilinizi değiştirebilir misiniz?

Evet. **Ayarlar**'ı açıp `Diliniz` alanını değiştirebilirsiniz:

:::details Ayarlar Paneli
<img src="/settings.png" alt="ayarlar-paneli" width="300px" />
:::

Bu değişiklik şu anlama gelir:

- Doğru çeviri için `seçilen dilde` konuşmalısınız
- Diğerlerini `seçilen dilde` duyacaksınız
- Arayüz otomatik olarak `seçilen dile` geçecektir

> 📌 Not: "Diliniz" **tek bir birleşik ayardır**  
> **Nasıl konuştuğunuzu**, **ne duyduğunuzu** ve **ne gördüğünüzü** kontrol eder.  
> Bir dilde konuşup başka bir dilde dinlemek **desteklenmez** — deneyimi basit ve öngörülebilir tutmak için tasarlanmıştır.

## Net ve Basit Fiyatlandırma

İlk görüşmeden akıcı konuşmalara — her ölçekte.

<span id="Pricing"></span>

<PricingPlans
    :plans="[
      {
        title: '**Temel** &nbsp 1 kullanıcı',
        price: '**Ücretsiz**',
        details: 'kredi kartı gerekmez',
        items: [
          '**25** toplantı',
          '**100** katılımcılı video toplantıları [💬](#3)',
          'Kullanıcı başına **30** GB havuzlanmış depolama',
          'Tüm toplantılarınızda arama [💬](#2)',
          'Eşzamanlı tercüme [💬](#1)',
        ],
      },
      {
        title: '**Pro**  &nbsp 1-99 kullanıcı',
        price: '**$20** /ay/kullanıcı, yıllık faturalandırma',
        details: 'veya aylık $25',
        items: [
          '**Sınırsız** toplantı',
          '**150** katılımcılı video toplantıları [💬](#3)',
          'Kullanıcı başına **2** TB havuzlanmış depolama',
          'Tüm toplantılarınızda arama [💬](#2)',
          'Eşzamanlı tercüme [💬](#1)',
        ],
      },
      {
        title: '**Kurumsal** &nbsp 100+ kullanıcı',
        price: '**Özel fiyatlandırma**',
        details: 'Gizlilik için tasarlandı',
        items: [
          '**Sınırsız** toplantı',
          '**500** katılımcılı video toplantıları [💬](#3)',
          'Kullanıcı başına **5** TB havuzlanmış depolama',
          'Tüm toplantılarınızda arama [💬](#2)',
          'Eşzamanlı tercüme [💬](#1)',
          '**Gizlilik Bölgeleri** [💬](#4)',
        ],
      },
    ]">
<AuthButton text="Ücretsiz deneyin" buttonClass="brand" eventName="try_it_attempt" />
<AuthButton text="Şimdi satın alın" buttonClass="alt" mode="checkout" eventName="buy_now_attempt" />
<ContactForm buttonText="Ekibimizle görüşün" buttonClass="alt" />
</PricingPlans>

> [!warning] 😱 Ya her dili konuşursunuz — ya da başkası sizin satışlarınızı kapatır.

<span id="Testimonials"></span>

## Müşterilerimiz Ne Diyor

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

> [!tip] 🥇 Zamanınızı dilbilgisi ezberlemek yerine — ustalığınızı geliştirmek için harcayın.

## Sıkça Sorulan Sorular

<span id="FAQ"></span>

<AccordionGroup
    :items="[
      {
        q: 'InterMind hangi dillerde tercüme desteği sunuyor?',
        a: 'InterMind aşağıdaki 19 dilde **gerçek zamanlı tercüme** desteği sunmaktadır:<br><br>- العربية (ar) – Arapça<br>- Čeština (cs) – Çekçe<br>- Deutsch (de) – Almanca<br>- English (en) – İngilizce<br>- Español (es) – İspanyolca<br>- Français (fr) – Fransızca<br>- हिन्दी (hi) – Hintçe<br>- Magyar (hu) – Macarca<br>- Italiano (it) – İtalyanca<br>- 日本語 (ja) – Japonca<br>- 한국어 (ko) – Korece<br>- Nederlands (nl) – Hollandaca<br>- Polski (pl) – Lehçe<br>- Português (pt) – Portekizce<br>- Русский (ru) – Rusça<br>- Türkçe (tr) – Türkçe<br>- 中文 (zh) – Çince<br><br>Bu listeyi sürekli genişletiyoruz — her büyük güncellemede yeni diller eklenmektedir.',
      },
      {
        q: 'Lisanslı kullanıcı ve Katılımcı nedir?',
        a: 'Bir *lisanslı kullanıcı*, ücretsiz veya ücretli toplantı lisansına sahiptir ve planının sınırları dahilinde toplantılar planlayabilir. *Katılımcılar* davetlilerdir — toplantılara katılmak için **hesaba veya lisansa ihtiyaçları yoktur** ve herhangi bir cihazdan **ücretsiz** olarak bağlanabilirler.',
      },
      {
        q: 'Bir InterMind lisansını kaç kişi kullanabilir?',
        a: 'Her *lisanslı kullanıcı* **sınırsız toplantı** düzenleyebilir. Eğer birden fazla ekip üyesinin aynı anda toplantı düzenlemesi gerekiyorsa, her birinin kendi lisansına ihtiyacı olacaktır.',
      },
      {
        q: 'Bir toplantının maksimum süresi ne kadardır?',
        a: 'Tüm planlarda toplantılar **24 saate** kadar sürebilir.',
      },
      {
        q: 'Düzenleyebileceğim toplantı sayısında bir sınır var mı?',
        a: '*Ücretsiz Temel* plan **25 ücretsiz toplantı** içerir. *Pro* ve *Business* planları daha fazla katılımcı ve kontrol ile sınırsız toplantı sunar.',
      },
      {
        q: 'InterMind veri gizliliğini ve güvenliğini nasıl sağlıyor?',
        a: 'InterMind **tasarımı gereği gizlidir**. Tüm veriler seçtiğiniz **Gizlilik Bölgesi** içinde işlenir ve depolanır — _AB_, _ABD_ veya _Asya_. [**GDPR**](https://gdpr.eu), [**CCPA**](https://oag.ca.gov/privacy/ccpa) ve BAE PDPL ile uyumluyuz ve içeriğinizi **asla eğitim veya üçüncü taraf erişimi için kullanmayız**. Gelişmiş [Gizlilik Bölgesi kontrolü](./product/overview/privacy-architecture) **Business** planında mevcuttur.',
      },
      {
        q: 'Bir plan satın almadan önce InterMind\'ı deneyebilir miyim?',
        a: 'Kesinlikle. *Ücretsiz Temel* plan, **25 ücretsiz toplantı** ile temel özelliklere tam erişim sağlar — **eşzamanlı tercüme** ve **toplantı arama** dahil. Kredi kartı gerekmez. İstediğiniz zaman yükseltme yapabilirsiniz.',
      },
      {
        q: 'Yardıma veya desteğe ihtiyacım olursa ne yapabilirim?',
        a: 'Destek [yardım merkezimiz](./resources/help) üzerinden mevcuttur. *Business* kullanıcıları özel bir iletişim kişisiyle **öncelikli destek** alır.',
      },
      {
        q: 'Aboneliğimi nasıl yönetebilirim (yükseltme, düşürme veya iptal)?',
        a: 'Planınızı **hesap ayarları** üzerinden istediğiniz zaman değiştirebilirsiniz. Değişiklikler **anında** yürürlüğe girer. İptaller için, *Aylık planlar* fatura döneminin sonunda iptal edilir. *Yıllık planlar* **orantılı geri ödeme** ile iptal edilebilir.',
      },
      {
        q: 'InterMind\'ı webinarlar veya büyük etkinlikler için kullanabilir miyim?',
        a: 'Evet. *Pro* ve *Business* planları **büyük toplantılar ve webinarlar** için idealdir — *Business* planında **500 katılımcıya** kadar destek sunar.',
      },
    ]"/>

<HomeFooter
    :columns="[
      {
        title: 'ÜRÜN',
        links: [
          { text: 'Overview', link: './product/overview/what-is-intermind' },
          { text: 'Getting Started', link: './product/guide/getting-started' },
          { text: 'Testimonials', link: '#testimonials' },
          { text: 'Pricing', link: '#Pricing' },
        ],
      },
      {
        title: 'DESTEK',
        links: [
          { text: 'Get Support', link: './resources/help' },
          { text: 'FAQ', link: '#FAQ' },
          { text: 'Service Status', link: 'https://status.mind.com/' },
          { text: 'Privacy Policy', link: './resources/company/Privacy-Policy' },
          { text: 'AI Legal Guide', link: './resources/company/Legal-Regulations-for-AI-Services' },
        ],
      },
      {
        title: 'KAYNAKLAR',
        links: [
          { text: 'Brand Assets', link: './resources/media-kit' },
          { text: 'AI API / LLM Docs', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'ŞİRKET',
        links: [
          { text: 'About', link: './resources/company/about' },
          { text: 'Team', link: './resources/company/team' },
          { text: 'Contacts', link: './resources/company/contacts' },
        ],
      },
    ]"/>