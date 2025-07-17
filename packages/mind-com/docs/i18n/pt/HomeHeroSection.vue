<template>
  <HeroSection title="Encontre-se em **Qualquer** Idioma" :typingSpeed="5" text="Tradução de fala ao vivo em **videochamadas** — comunicação rápida, clara e sem fronteiras.">
    <NavButton buttonLabel="Como funciona" buttonClass="brand" to="/#HowItWorks" />
    <AuthButton text="Começar" buttonClass="alt" eventName="im_get_started_attempt" />
  </HeroSection>

  <span id="1"></span>
  <FeatureBlock
    :card="{
      title: 'Tradução ≠ Compreensão. Veja o que vem a seguir.',
      details: 'Não importa o idioma, sua voz é ouvida — e compreendida — como se vocês compartilhassem a mesma língua.',
      items: [
        '✧ Naturalmente, em [tempo real](./product/overview/how-it-works), e sem legendas ou atraso.',
        '✧ Interpretação alimentada por IA captura tom, intenção e terminologia específica do setor.',
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
      title: 'A mente dentro das suas reuniões',
      details: 'InterMind transforma cada chamada multilíngue em conhecimento claro e pesquisável.',
      items: [
        '✧ **Pergunte qualquer coisa** — IA encontra respostas **em todas as suas reuniões**.',
        '✧ Extrai automaticamente tarefas, responsáveis e prazos.',
        '✧ Resume pontos-chave em qualquer idioma — instantaneamente.',
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
      title: 'Construído para reuniões sérias — não apenas para conversar',
      details: 'InterMind é uma [plataforma de videoconferência de nível profissional](./product/overview/video-meeting-platform), não um complemento leve ou plugin.',
      items: [
        '✧ Resolução 1080p, supressão inteligente de ruído, agendamento, moderação, compartilhamento de tela, gravação, legendagem, chat de participantes e integração com calendário — tudo integrado, **pronto para usar**.',
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
      title: 'Privacidade onde importa',
      details: 'InterMind é construído para conversas críticas de confiança — onde privacidade e controle são fundamentais.',
      items: ['✧ [Zonas de privacidade](./product/overview/privacy-architecture) — UE, EUA, Sudeste Asiático', '✧ **Zero treinamento de dados**. Sem acesso de terceiros.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />
</template>