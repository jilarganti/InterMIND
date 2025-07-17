<template>
  <HeroSection title="**Her** Dilde Buluşun" :typingSpeed="5" text="Video aramalarında canlı konuşma çevirisi — hızlı, net, sınırsız iletişim.">
    <NavButton buttonLabel="Nasıl çalışır" buttonClass="brand" to="/#HowItWorks" />
    <AuthButton text="Başlayın" buttonClass="alt" eventName="im_get_started_attempt" />
  </HeroSection>

  <span id="1"></span>
  <FeatureBlock
    :card="{
      title: 'Çeviri ≠ Anlama. İşte sıradaki adım.',
      details: 'Dil ne olursa olsun, sesiniz duyulur — ve anlaşılır — sanki aynı dili konuşuyormuşsunuz gibi.',
      items: [
        '✧ Doğal olarak, [gerçek zamanlı](./product/overview/how-it-works) ve altyazı veya gecikme olmadan.',
        '✧ AI destekli yorumlama ton, niyet ve sektöre özel terminolojiyi yakalar.',
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
      title: 'Toplantılarınızdaki Akıl',
      details: 'InterMind her çok dilli aramayı net, aranabilir bilgiye dönüştürür.',
      items: [
        '✧ **Her şeyi sorun** — AI **toplantılarınız genelinde** cevaplar bulur.',
        '✧ Görevleri, sahiplerini ve son tarihleri otomatik çıkarır.',
        '✧ Anahtar noktaları herhangi bir dilde özetler — anında.',
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

  <span id="4"></span>
  <FeatureBlock
    :card="{
      title: 'Önemli Olan Yerde Gizlilik',
      details: 'InterMind güven-kritik konuşmalar için tasarlandı — gizlilik ve kontrolün en önemli olduğu yerde.',
      items: ['✧ [Gizlilik Bölgeleri](./product/overview/privacy-architecture) — AB, ABD, Güneydoğu Asya', '✧ **Sıfır veri eğitimi**. Üçüncü taraf erişimi yok.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />
</template>