<template>
  <HomeFooter
    :columns="[
      {
        title: 'PRODUIT',
        links: [
          { text: 'Aperçu', link: './product/overview/what-is-intermind' },
          { text: 'Commencer', link: './product/guide/getting-started' },
          { text: 'Témoignages', link: '#testimonials' },
          { text: 'Tarifs', link: '#Pricing' },
        ],
      },
      {
        title: 'SUPPORT',
        links: [
          { text: 'Obtenir de l\'aide', link: './resources/help' },
          { text: 'FAQ', link: '#FAQ' },
          { text: 'État du service', link: 'https://status.mind.com/' },
          { text: 'Politique de confidentialité', link: './resources/company/Privacy-Policy' },
          { text: 'Guide juridique IA', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: 'RESSOURCES',
        links: [
          // { text: 'Blog', link: './blog' },
          { text: 'Ressources de marque', link: './resources/media-kit' },
          { text: 'Documentation API IA / LLM', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'ENTREPRISE',
        links: [
          { text: 'À propos', link: './resources/company/about' },
          { text: 'Équipe', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: 'Contacts', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>