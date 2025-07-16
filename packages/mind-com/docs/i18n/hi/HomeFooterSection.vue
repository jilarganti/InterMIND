<template>
  <HomeFooter
    :columns="[
      {
        title: 'उत्पाद',
        links: [
          { text: 'अवलोकन', link: './product/overview/what-is-intermind' },
          { text: 'शुरुआत करना', link: './product/guide/getting-started' },
          { text: 'प्रशंसापत्र', link: '#testimonials' },
          { text: 'मूल्य निर्धारण', link: '#Pricing' },
        ],
      },
      {
        title: 'सहायता',
        links: [
          { text: 'सहायता प्राप्त करें', link: './resources/help' },
          { text: 'अक्सर पूछे जाने वाले प्रश्न', link: '#FAQ' },
          { text: 'सेवा स्थिति', link: 'https://status.mind.com/' },
          { text: 'गोपनीयता नीति', link: './resources/company/Privacy-Policy' },
          { text: 'AI कानूनी गाइड', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: 'संसाधन',
        links: [
          // { text: 'Blog', link: './blog' },
          { text: 'ब्रांड संपत्ति', link: './resources/media-kit' },
          { text: 'AI API / LLM दस्तावेज़', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'कंपनी',
        links: [
          { text: 'हमारे बारे में', link: './resources/company/about' },
          { text: 'टीम', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: 'संपर्क', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>