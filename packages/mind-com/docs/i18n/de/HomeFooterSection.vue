<template>
  <HomeFooter
    :columns="[
      {
        title: 'PRODUKT',
        links: [
          { text: 'Überblick', link: './product/overview/what-is-intermind' },
          { text: 'Erste Schritte', link: './product/guide/getting-started' },
          { text: 'Erfahrungsberichte', link: '#testimonials' },
          { text: 'Preise', link: '#Pricing' },
        ],
      },
      {
        title: 'SUPPORT',
        links: [
          { text: 'Support erhalten', link: './resources/help' },
          { text: 'FAQ', link: '#FAQ' },
          { text: 'Service-Status', link: 'https://status.mind.com/' },
          { text: 'Datenschutzrichtlinie', link: './resources/company/Privacy-Policy' },
          { text: 'KI-Rechtsleitfaden', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: 'RESSOURCEN',
        links: [
          // { text: 'Blog', link: './blog' },
          { text: 'Marken-Assets', link: './resources/media-kit' },
          { text: 'AI API / LLM Docs', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'UNTERNEHMEN',
        links: [
          { text: 'Über uns', link: './resources/company/about' },
          { text: 'Team', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: 'Kontakt', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>