<template>
  <span id="1"></span>
  <FeatureBlock
    :card="{
      title: 'Traducción ≠ Comprensión. Esto es lo que sigue.',
      details: 'Sin importar el idioma, tu voz es escuchada — y comprendida — como si compartieras la misma lengua.',
      items: [
        '✧ Naturalmente, en [tiempo real](./product/overview/how-it-works), y sin subtítulos o retrasos.',
        '✧ La interpretación impulsada por IA captura el tono, la intención y la terminología específica de la industria.',
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
      title: 'La mente dentro de tus reuniones',
      details: 'InterMind convierte cada llamada multilingüe en conocimiento claro y consultable.',
      items: [
        '✧ **Pregunta cualquier cosa** — la IA encuentra respuestas **en todas tus reuniones**.',
        '✧ Extrae automáticamente tareas, responsables y fechas límite.',
        '✧ Resume puntos clave en cualquier idioma — al instante.',
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
      title: 'Construido para reuniones serias — no solo para hablar',
      details: 'InterMind es una [plataforma de videollamadas de nivel profesional](./product/overview/video-meeting-platform), no un complemento ligero o plugin.',
      items: [
        '✧ Resolución 1080p, supresión inteligente de ruido, programación, moderación, compartir pantalla, grabación, subtitulado, chat de participantes e integración de calendario — todo integrado, **listo para usar**.',
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
      title: 'Privacidad donde importa',
      details: 'InterMind está construido para conversaciones críticas de confianza — donde la privacidad y el control importan más.',
      items: ['✧ [Zonas de privacidad](./product/overview/privacy-architecture) — UE, EE.UU., Sudeste Asiático', '✧ **Cero entrenamiento de datos**. Sin acceso de terceros.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />
</template>