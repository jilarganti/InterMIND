<template>
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
    ]"
  >
    <AuthButton text="Ücretsiz deneyin" buttonClass="brand" eventName="im_try_it_attempt" />
    <AuthButton text="Şimdi satın alın" buttonClass="alt" mode="checkout" eventName="im_buy_now_attempt" />
    <ContactForm buttonText="Ekibimizle konuşun" buttonClass="alt" />
  </PricingPlans>
</template>