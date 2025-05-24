---
layout: home
title: "Traductor de Voz con IA para Videollamadas en Directo"
description: "Las reuniones multilingües no necesitan Zoom, plugins ni intérpretes. InterMind es un traductor de voz con IA para videollamadas en tiempo real — habla y traduce al instante."
isHome: true
---

<!-- text="Céntrate en el crecimiento — deja que InterMind se encargue de los idiomas." -->
<!-- text="Las aulas tardan años; InterMind ofrece comprensión en tiempo real hoy, en todos los idiomas." -->
<!-- text="Reuniones por Video **Multilingües** con Interpretación por **Voz**" -->
<!-- title="Reuniones por Video con **Interpretación** en Directo" -->

<HeroSection
title="Reúnete en **Cualquier** Idioma"
text="Nueva generación de videollamadas. Traducción de voz con IA — evolucionada a interpretación en tiempo real.">

<AuthButton text="Escucha la diferencia" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Solicitar una Demo"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Precios" /> -->
</HeroSection>

> **¿Para quién es esto?**  
> Para equipos internacionales donde las barreras lingüísticas provocan pérdida de negocios, retrasos o malentendidos.

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Traducción ≠ Comprensión. Esto es lo siguiente.',
  details: 'Sin importar el idioma, **tu voz es escuchada — y comprendida** — como si compartieran la misma lengua.',
    items: [
      '⚡︎ De forma natural, en [tiempo real](/product/how-it-works), y sin subtítulos ni retrasos.',
      '✧ La interpretación potenciada por IA capta el tono, la intención y la terminología específica del sector.',
    ],
  link: './product/what-is-intermind',
  src: {
    light: '/1.png',
    dark: '/1.png',
  },
  inversion: false
}" />

<span id="3"></span>
<FeatureBlock :card="{
    title: 'La Mente Dentro de Tus Reuniones',
    details: 'InterMind convierte cada llamada multilingüe en conocimiento claro y consultable.',
    items: [
      '🔍 **Pregunta cualquier cosa** — la IA encuentra respuestas **en todas tus reuniones**.',
      '✧ Extrae automáticamente tareas, responsables y fechas límite.',
      '✧ Resume los puntos clave en cualquier idioma — al instante.',
    ],
    link: '/product/how-it-works#🧩-deep-memory-deep-understanding',
    src: {
      light: '/2l.png',
      dark: '/2d.png',
    },
    inversion: true
  }" />

<span id="2"></span>
<FeatureBlock :card="{
    title: 'Diseñado para Reuniones Serias — No Solo para Charlar',
    details: 'InterMind es una **plataforma de reuniones por video** de nivel profesional, no un complemento o plugin ligero.',
    items: [
      '✧ Resolución 1080p, supresión inteligente de ruido, programación, moderación, compartir pantalla, grabación, chat entre participantes e integración completa con calendario — todo incluido, **listo para usar**.',
    ],
    link: '/product/how-it-works',
    src: {
      light: '/3l.png',
      dark: '/3d.png',
    },
    inversion: false
  }" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: 'Privacidad Donde Importa',
    details:
      'InterMind está diseñado para conversaciones que requieren confianza — donde la privacidad y el control son fundamentales.',
    items: [
      '⚡︎ [Privacidad basada en regiones](/product/privacy-architecture) — UE, EE. UU., SE Asia',
      '✧ Cumple con: GDPR, CCPA, UAE PDPL',
      '✧ **Cero entrenamiento con datos**. Sin acceso de terceros.'
    ],
    link: '/product/privacy-architecture',
    src: {
      light: '/4.png',
      dark: '/4.png',
    },
    inversion: true
  }"
/>

<span id="Pricing"></span>

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
    details: 'o $25 facturado mensualmente',
    items: [
      'Reuniones de video de 150 participantes + 2 TB de almacenamiento compartido por usuario [💬](#2)',
      'Interpretación de voz a voz [💬](#1)',
      'Asistente de IA [💬](#3)',
    ],
  },
  {
    title: '**Empresarial** &nbsp 1-500 usuarios',
    price: '**Privacidad**',
    details: 'Seguridad de nivel empresarial',
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
<ContactFormModalNav buttonText="Solicitar acceso" buttonClass="alt"/>
</PricingPlans>

<span id="FAQ"></span>

## Preguntas Frecuentes

<AccordionGroup :items="[
  {
    q: '¿Qué es un usuario con licencia y qué es un Participante?',
    a: 'Un usuario con licencia tiene una licencia gratuita o de pago y puede programar reuniones con participantes según la capacidad que permite su plan. Un Participante es un invitado a una reunión programada por alguien con una licencia de reunión. Un Participante no requiere una cuenta o licencia para unirse a una reunión y puede **unirse gratis**. Los participantes pueden unirse a una reunión desde dispositivos de escritorio, móviles y tabletas.'
  },
  {
    q: '¿Cuántos participantes pueden unirse a la reunión?',
    a: 'El número de participantes depende de su plan: Basic permite hasta 100 participantes, Pro admite hasta 150 participantes y Business permite hasta 500 participantes por reunión.'
  },
  {
    q: '¿Cuántas personas pueden usar una licencia de InterMind?',
    a: 'Un usuario con licencia puede organizar un número ilimitado de reuniones. Sin embargo, si varios usuarios necesitan programar reuniones separadas al mismo tiempo, necesitará licencias de reunión adicionales por usuario.'
  },
  {
    q: '¿La interpretación de voz funciona en todos los planes?',
    a: 'Sí, la interpretación de voz a voz en tiempo real funciona en todos los planes, incluido el plan Basic gratuito. Sin embargo, el plan Basic está limitado a 25 reuniones en total. Los planes Pro y Business permiten reuniones ilimitadas con límites de participantes aumentados y funciones adicionales.'
  },
  {
    q: '¿Cuál es la duración máxima de una reunión?',
    a: 'Las reuniones pueden durar hasta 24 horas en todos los planes.'
  },
  {
    q: '¿Puedo grabar reuniones?',
    a: 'Sí, todos los planes admiten la grabación de reuniones. Las grabaciones se almacenan en su cuenta y se pueden acceder posteriormente.'
  },
  {
    q: '¿Hay un límite en el número de reuniones que puedo organizar?',
    a: 'El plan Basic permite hasta 25 reuniones, mientras que los planes Pro y Business permiten reuniones ilimitadas.'
  },
  {
    q: '¿Puedo usar InterMind en dispositivos móviles?',
    a: 'Sí, InterMind es totalmente compatible con dispositivos de escritorio, móviles y tabletas.'
  },
  {
    q: '¿Qué pasa si necesito más almacenamiento para las grabaciones?',
    a: 'El plan Pro ofrece 2 TB de almacenamiento compartido por usuario, mientras que el plan Business proporciona 5 TB. Si necesita más, contáctenos para soluciones personalizadas.'
  },
  {
    q: '¿Cómo garantiza InterMind la privacidad y seguridad de los datos?',
    a: 'InterMind está diseñado pensando en la privacidad. Ofrecemos procesamiento basado en región, configuración privada por defecto y cumplimiento con los estándares GDPR, CCPA y UAE PDPL.'
  },
  {
    q: '¿Puedo probar InterMind antes de comprar un plan?',
    a: 'Sí, puede comenzar con el plan Basic gratuito para experimentar las funciones antes de actualizar a los planes Pro o Business.'
  },
  {
    q: '¿Qué pasa si necesito ayuda o soporte?',
    a: 'Ofrecemos soporte a través de nuestro centro de ayuda, correo electrónico y chat en vivo. Para usuarios del plan Business, hay soporte dedicado disponible.'
  },
  {
    q: '¿Puedo cancelar mi suscripción en cualquier momento?',
    a: 'Sí, puede cancelar su suscripción en cualquier momento. Para planes mensuales, la cancelación tiene efecto al final del ciclo de facturación actual. Los planes anuales se pueden cancelar con un reembolso prorrateado.'
  },
  {
    q: '¿Cómo actualizo o bajo de categoría mi plan?',
    a: 'Puede actualizar o bajar de categoría su plan en cualquier momento a través de la configuración de su cuenta. Los cambios tendrán efecto inmediatamente.'
  },
  {
    q: '¿Qué idiomas admite InterMind para la interpretación de voz?',
    a: 'InterMind admite una amplia gama de idiomas para la interpretación de voz en tiempo real. La lista se expande continuamente, así que consulte nuestro sitio web para las últimas actualizaciones.'
  }
]" />

<span id="Testimonials"></span>

## Lo Que Dicen Nuestros Clientes

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>