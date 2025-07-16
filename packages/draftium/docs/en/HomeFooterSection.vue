<template>
  <HomeFooter
    :columns="[
      {
        title: 'PRODUCT',
        links: [
          { text: 'Overview', link: './product/overview/what-is-intermind' },
          { text: 'Getting Started', link: './product/guide/getting-started' },
          { text: 'Testimonials', link: '#testimonials' },
          { text: 'Pricing', link: '#Pricing' },
        ],
      },
      {
        title: 'SUPPORT',
        links: [
          { text: 'Get Support', link: './resources/help' },
          { text: 'FAQ', link: '#FAQ' },
          { text: 'Service Status', link: 'https://status.mind.com/' },
          { text: 'Privacy Policy', link: './resources/company/Privacy-Policy' },
          { text: 'AI Legal Guide', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: 'RESOURCES',
        links: [
          // { text: 'Blog', link: './blog' },
          { text: 'Brand Assets', link: './resources/media-kit' },
          // { text: 'AI API / LLM Docs', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'COMPANY',
        links: [
          { text: 'About', link: './resources/company/about' },
          // { text: 'Team', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: 'Contacts', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>
