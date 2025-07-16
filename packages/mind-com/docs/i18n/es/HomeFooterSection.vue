<template>
  <HomeFooter
    :columns="[
      {
        title: 'PRODUCTO',
        links: [
          { text: 'Descripción general', link: './product/overview/what-is-intermind' },
          { text: 'Primeros pasos', link: './product/guide/getting-started' },
          { text: 'Testimonios', link: '#testimonials' },
          { text: 'Precios', link: '#Pricing' },
        ],
      },
      {
        title: 'SOPORTE',
        links: [
          { text: 'Obtener soporte', link: './resources/help' },
          { text: 'Preguntas frecuentes', link: '#FAQ' },
          { text: 'Estado del servicio', link: 'https://status.mind.com/' },
          { text: 'Política de privacidad', link: './resources/company/Privacy-Policy' },
          { text: 'Guía legal de IA', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: 'RECURSOS',
        links: [
          // { text: 'Blog', link: './blog' },
          { text: 'Recursos de marca', link: './resources/media-kit' },
          { text: 'Documentación API de IA / LLM', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'EMPRESA',
        links: [
          { text: 'Acerca de', link: './resources/company/about' },
          { text: 'Equipo', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: 'Contactos', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>