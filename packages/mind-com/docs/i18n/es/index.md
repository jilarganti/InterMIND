---
layout: home
title: "Traductor de Voz con IA para Videollamadas en Vivo"
description: "Las reuniones multilingües no necesitan Zoom, plugins ni intérpretes. InterMind es un traductor de voz con IA para videollamadas en tiempo real — habla y traduce instantáneamente."
isHome: true
---

<!-- text="Céntrate en el crecimiento — deja que InterMind se encargue de los idiomas." -->
<!-- text="Las aulas tardan años; InterMind ofrece comprensión en tiempo real hoy, en todos los idiomas." -->
<!-- text="Comprende al instante — sin aprender idiomas extranjeros" -->
<!-- title="Reuniones por Video con **Interpretación** en Vivo" -->

<HeroSection
title="Reuniones por Video **Multilingües** con Interpretación por **Voz**"
text="Para empresas donde las **barreras lingüísticas** significan pérdida de negocios, retrasos y errores costosos.">

<AuthButton text="Prueba gratis" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Solicitar una Demo"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Precios" /> -->
</HeroSection>

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Habla Instantáneamente en Más de 100 Idiomas',
  details: 'InterMind permite que cada participante hable en su idioma nativo — de forma natural, en [tiempo real](/product/how-it-works), y sin subtítulos ni retrasos.',
    items: [
      '✧ Habla libremente — sé entendido al instante.',
      '✧ Interpretación impulsada por IA que capta el tono, la intención y la terminología específica de la industria.',
      '⚡︎ Interpretación **voz a voz** bidireccional y continua sin configuración manual.',
    ],
  link: './product/what-is-intermind',
  src: {
    light: '/1.png',
    dark: '/1.png',
  },
  inversion: false
}" />

<span id="2"></span>
<FeatureBlock :card="{
    title: 'Diseñado para Reuniones Serias — No Solo para Charlar',
    details: 'InterMind es una plataforma de reuniones por video de nivel profesional, no un complemento o plugin ligero.',
    items: [
      '✧ Resolución 1080p, supresión inteligente de ruido y captación de voz focalizada.',
      '✧ Programación, moderación, demostraciones, grabación e integración completa con calendario — todo incluido, listo para usar. Las reuniones pueden durar hasta 24 horas.',
      '⚡︎ Transcripciones en vivo, chat entre participantes y un asistente de IA que mantiene las reuniones productivas.'
    ],
    link: '/product/how-it-works',
    src: {
      light: '/3l.png',
      dark: '/3d.png',
    },
    inversion: true
  }" />

<span id="3"></span>
<FeatureBlock :card="{
  title: 'La **Mente Interior** de Tus Reuniones',
  details: 'InterMind convierte cada llamada multilingüe en conocimiento claro y consultable.',
  items: [
    '⚡︎ Busca instantáneamente cualquier contenido en reuniones pasadas y actuales. Haz preguntas naturalmente, obtén respuestas precisas sin revisar grabaciones.',
    '✧ Nunca pierdas elementos de acción de ninguna reunión. Nuestra IA extrae automáticamente tareas, responsables y fechas límite de las conversaciones.',
    '✧ Los resúmenes de reuniones por IA entregan puntos clave instantáneamente en cualquier idioma, manteniendo a todos alineados sin tomar notas manualmente.',
  ],
  link: '/product/how-it-works#🧩-deep-memory-deep-understanding',
  src: {
    light: '/2l.png',
    dark: '/2d.png',
  },
  inversion: false
}" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: 'Seguro y Confidencial por Diseño',
    details:
      'InterMind está construido para conversaciones donde la confianza importa. Si bien confiamos en infraestructura de terceros de primera clase, [la confidencialidad siempre está en tus manos](/product/privacy-architecture).',
    items: [
      '⚡︎ Privacidad basada en regiones — elige dónde se procesan tus datos. Dirigimos toda la interpretación, almacenamiento y análisis a través de infraestructura alineada con tu zona de cumplimiento (por ejemplo, UE, EE. UU., Asia).',
      '✧ Privado por defecto — InterMind **nunca** almacena ni utiliza tu contenido para entrenamiento, perfilado o acceso de terceros.',
      '✧ Cumplimiento por arquitectura — Preparado para GDPR, CCPA y UAE PDPL, con soporte completo para derechos de exportación y eliminación.'
    ],
    link: '/product/privacy-architecture',
    src: {
      light: '/4.png',
      dark: '/4.png',
    },
    inversion: true
  }"
/>

## Precios Claros y Sencillos

Elija el plan que se adapte a las necesidades de comunicación multilingüe de su organización.

<PricingPlans :plans="[
  {
    title: '**Básico** &nbsp 1 usuario',
    price: '**Gratis**',
    details: '25 reuniones gratuitas',
    items: [
      'Reuniones de video de 100 participantes + 30 GB de almacenamiento compartido por usuario [💬](#2)',
      'Interpretación de voz a voz [💬](#1)',
      'Asistente de IA [💬](#3)',
    ],
  },
  {
    title: '**Pro** &nbsp 1-99 usuarios',
    price: '**$20** /mes/usuario, facturado anualmente',
    details: 'o $13.99 facturado mensualmente',
    items: [
      'Reuniones de video de 150 participantes + 2 TB de almacenamiento compartido por usuario [💬](#2)',
      'Interpretación de voz a voz [💬](#1)',
      'Asistente de IA [💬](#3)',
    ],
  },
  {
    title: '**Empresarial** &nbsp 1–250 usuarios',
    price: 'Plan **personalizado** para equipos grandes',
    details: 'Optimizado para escala, privacidad y control',
    items: [
      'Reuniones de video de 500 participantes + 5 TB de almacenamiento compartido por usuario [💬](#2)',
      'Interpretación de voz a voz [💬](#1)',
      'Asistente de IA [💬](#3)',
      'Privacidad basada en región [💬](#4)',
    ],
  }
]">
<AuthButton text="Prueba gratis" buttonClass="alt"/>
<AuthButton text="Comprar ahora" buttonClass="brand"/>
<ContactFormModalNav buttonText="Contactar ventas" buttonClass="alt"/>
</PricingPlans>

## Preguntas Frecuentes

<AccordionGroup :items="[
  {
    q: '¿Qué es un usuario con licencia y qué es un Participante?',
    a: 'Un usuario con licencia tiene una licencia de reunión gratuita o de pago y puede programar reuniones con participantes según la capacidad que permite su plan. Un Participante es un invitado en una reunión programada por alguien con una licencia de reunión. Un Participante no requiere una cuenta o licencia para unirse a una reunión y puede **unirse gratuitamente**. Los participantes pueden unirse a una reunión desde dispositivos de escritorio, móviles y tabletas.'
  },
  {
      q: '¿Cuántos participantes pueden unirse a la reunión?',
      a: 'El número de participantes depende de tu plan: Basic permite hasta 100 participantes, Pro admite hasta 150 participantes y Business permite hasta 500 participantes por reunión.'
  },
  {
    q: '¿Cuántas personas pueden usar una licencia de InterMind?',
    a: 'Un usuario con licencia puede organizar un número ilimitado de reuniones. Sin embargo, si varios usuarios necesitan programar reuniones separadas al mismo tiempo, necesitarás licencias de reunión adicionales por usuario.'
  },
  {
      q: '¿La interpretación de voz funciona en todos los planes?',
      a: 'Sí, la interpretación de voz a voz en tiempo real funciona en todos los planes, incluido el plan Basic gratuito. Sin embargo, el plan Basic está limitado a 25 reuniones en total. Los planes Pro y Business permiten reuniones ilimitadas con límites de participantes aumentados y funciones adicionales.'
  }
]" />

## Lo Que Dicen Nuestros Clientes

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>
