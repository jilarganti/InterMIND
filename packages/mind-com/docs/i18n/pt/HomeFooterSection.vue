<template>
  <HomeFooter
    :columns="[
      {
        title: 'PRODUTO',
        links: [
          { text: 'Visão geral', link: './product/overview/what-is-intermind' },
          { text: 'Primeiros passos', link: './product/guide/getting-started' },
          { text: 'Depoimentos', link: '#testimonials' },
          { text: 'Preços', link: '#Pricing' },
        ],
      },
      {
        title: 'SUPORTE',
        links: [
          { text: 'Obter suporte', link: './resources/help' },
          { text: 'FAQ', link: '#FAQ' },
          { text: 'Status do serviço', link: 'https://status.mind.com/' },
          { text: 'Política de privacidade', link: './resources/company/Privacy-Policy' },
          { text: 'Guia jurídico de IA', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: 'RECURSOS',
        links: [
          // { text: 'Blog', link: './blog' },
          { text: 'Recursos da marca', link: './resources/media-kit' },
          { text: 'Documentação AI API / LLM', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'EMPRESA',
        links: [
          { text: 'Sobre', link: './resources/company/about' },
          { text: 'Equipe', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: 'Contatos', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>