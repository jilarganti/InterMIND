<template>
  <HomeFooter
    :columns="[
      {
        title: 'ÜRÜN',
        links: [
          { text: 'Genel Bakış', link: './product/overview/what-is-intermind' },
          { text: 'Başlangıç', link: './product/guide/getting-started' },
          { text: 'Referanslar', link: '#testimonials' },
          { text: 'Fiyatlandırma', link: '#Pricing' },
        ],
      },
      {
        title: 'DESTEK',
        links: [
          { text: 'Destek Al', link: './resources/help' },
          { text: 'SSS', link: '#FAQ' },
          { text: 'Servis Durumu', link: 'https://status.mind.com/' },
          { text: 'Gizlilik Politikası', link: './resources/company/Privacy-Policy' },
          { text: 'AI Hukuki Rehberi', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: 'KAYNAKLAR',
        links: [
          // { text: 'Blog', link: './blog' },
          { text: 'Marka Varlıkları', link: './resources/media-kit' },
          { text: 'AI API / LLM Dokümanları', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'ŞİRKET',
        links: [
          { text: 'Hakkında', link: './resources/company/about' },
          { text: 'Ekip', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: 'İletişim', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>