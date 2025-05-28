---
layout: home
title: "Videollamadas potenciadas por interpretación simultánea"

isHome: true
---

<!-- text="Videollamadas potenciadas por traducción simultánea de voz." -->
<!-- text="Las aulas tardan años; InterMind ofrece comprensión en tiempo real hoy, en todos los idiomas." -->
<!-- text="Reuniones por video **multilingües** con interpretación de **voz**" -->
<!-- title="Reuniones por video con interpretación **en vivo**" -->

<HeroSection
title="Reúnase en **Cualquier** Idioma"
text="Hable en su idioma nativo. Escuche a todos los demás — como si también lo hablaran.">

<AuthButton text="Escuche la diferencia" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Solicitar una Demo"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Precios" /> -->
</HeroSection>

> **¿Para quién es esto?**  
> Diseñado para **equipos globales** donde las barreras del idioma causan retrasos, pérdida de negocios o malentendidos costosos. Aprenda más en nuestra sección de [Markets](./product/overview/markets).

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Traducción ≠ Comprensión. Esto es lo siguiente.',
  details: 'Sin importar el idioma, **su voz es escuchada — y comprendida** — como si compartieran la misma lengua.',
    items: [
      '⚡︎ De forma natural, en [tiempo real](/product/how-it-works), y sin subtítulos ni retrasos.',
      '✧ La interpretación potenciada por IA captura el tono, la intención y la terminología específica de la industria.',
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
    title: 'La Mente Dentro de Sus Reuniones',
    details: 'InterMind convierte cada llamada multilingüe en conocimiento claro y consultable.',
    items: [
      '🔍 **Pregunte cualquier cosa** — la IA encuentra respuestas **en todas sus reuniones**.',
      '✧ Extrae automáticamente tareas, responsables y fechas límite.',
      '✧ Resume los puntos clave en cualquier idioma — instantáneamente.',
    ],
    link: '/product/how-it-works#🧩-deep-memory-deep-understanding',
    src: {
      light: '/2l.png',
      dark: '/2d.png',
    },
    inversion: true
  }" />

<span id="3"></span>
<FeatureBlock :card="{
    title: 'Diseñado para Reuniones Serias — No Solo para Charlar',
    details: 'InterMind es una **plataforma de videollamadas de nivel profesional**, no un complemento o plugin ligero.',
    items: [
      '✧ Resolución 1080p, supresión inteligente de ruido, programación, moderación, compartir pantalla, grabación, subtitulado, chat entre participantes e integración con calendario — todo incluido, listo para usar.',
    ],
    link: '/product/how-it-works',
    src: {
      light: '/3.png',
      dark: '/3.png',
    },
    inversion: false
  }" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: 'Privacidad Donde Importa',
    details:
      'InterMind está construido para conversaciones críticas de confianza — donde la privacidad y el control son más importantes.',
    items: [
      '⚡︎ [Enrutamiento de privacidad basado en regiones](/product/privacy-architecture) — UE, EE. UU., SE Asia',
      '✧ **Cero entrenamiento de datos**. Sin acceso de terceros.'
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

Desde la primera llamada hasta conversaciones fluidas — a cualquier escala.

<PricingPlans :plans="[
  {
    title: '**Básico** 1 usuario',
    price: '**Gratis**',
    details: '25 reuniones gratuitas',
    items: [
      'Reuniones de video para **100** participantes [💬](#3)',
      '**30** GB de almacenamiento compartido por usuario',
      'Búsqueda en todas tus reuniones [💬](#2)',
      'Interpretación simultánea [💬](#1)',
    ],
  },
  {
    title: '**Pro** 1-99 usuarios',
    price: '**$20** /mes/usuario, facturado anualmente',
    details: 'o $25 facturado mensualmente',
    items: [
      'Reuniones de video para **150** participantes [💬](#3)',
      '**2** TB de almacenamiento compartido por usuario',
      'Búsqueda en todas tus reuniones [💬](#2)',
      'Interpretación simultánea [💬](#1)',
    ],
  },
  {
    title: '**Empresarial** 1-250 usuarios',
    price: '**Precio personalizado**',
    details: 'Diseñado para la privacidad',
    items: [
      'Reuniones de video para **500** participantes [💬](#3)',
      '**5** TB de almacenamiento compartido por usuario',
      'Búsqueda en todas tus reuniones [💬](#2)',
      'Interpretación simultánea [💬](#1)',
      '**Enrutamiento de privacidad por región** [💬](#4)',
      '**Colega IA**. Parece humano. Suena natural. (versión-⍺)',
    ],
  }
]">
<AuthButton text="Prueba gratis" buttonClass="alt"/>
<AuthButton text="Comprar ahora" buttonClass="brand"/>
<ContactFormModalNav buttonText="Habla con nuestro equipo" buttonClass="alt"/>
</PricingPlans>

<span id="Testimonials"></span>

## Lo Que Dicen Nuestros Clientes

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

<span id="FAQ"></span>

## Preguntas Frecuentes

<AccordionGroup :items="
[
  {
    q: '¿Qué es un usuario con licencia y qué es un Participante?',
    a: 'Un *usuario con licencia* tiene una licencia gratuita o de pago y puede programar reuniones dentro de los límites de su plan. Los *Participantes* son los invitados — **no necesitan una cuenta o licencia** para unirse y pueden conectarse desde cualquier dispositivo **gratuitamente**.'
  },
  {
    q: '¿Cuántas personas pueden usar una licencia de InterMind?',
    a: 'Cada *usuario con licencia* puede organizar **reuniones ilimitadas**. Si varios miembros del equipo necesitan organizar reuniones simultáneamente, cada uno necesitará su propia licencia.'
  },
  {
    q: '¿Cuál es la duración máxima de una reunión?',
    a: 'Las reuniones pueden durar hasta **24 horas** en todos los planes.'
  },
  {
    q: '¿Hay un límite en el número de reuniones que puedo organizar?',
    a: 'El plan *Free Basic* incluye **25 reuniones gratuitas**. Los planes *Pro* y *Business* ofrecen reuniones ilimitadas con más participantes y control.'
  },
  {
    q: '¿Cómo garantiza InterMind la privacidad y seguridad de los datos?',
    a: 'InterMind es **privado por diseño**. Todos los datos se procesan y almacenan en la región que selecciones — *UE, EE. UU. o Asia*. Cumplimos con **GDPR, CCPA y UAE PDPL**, y **nunca usamos tu contenido** para entrenamiento o acceso de terceros. El **enrutamiento de privacidad basado en región** está disponible en el plan *Business*.'
  },
  {
    q: '¿Puedo probar InterMind antes de comprar un plan?',
    a: 'Absolutamente. El plan *Free Basic* te da acceso completo a las funciones principales con **25 reuniones gratuitas** — incluyendo **interpretación simultánea** y **búsqueda de reuniones**. No se requiere tarjeta de crédito. Actualiza cuando quieras.'
  },
  {
    q: '¿Qué pasa si necesito ayuda o soporte?',
    a: 'El soporte está disponible a través de nuestro **centro de ayuda**, **correo electrónico** y **chat en vivo**. Los usuarios *Business* obtienen **soporte prioritario** con un contacto dedicado.'
  },
  {
    q: '¿Cómo gestiono mi suscripción (actualizar, reducir o cancelar)?',
    a: 'Puedes cambiar tu plan en cualquier momento a través de la **configuración de tu cuenta**. Los cambios surten efecto **inmediatamente**. Para cancelaciones, los *planes mensuales* se cancelan al final del ciclo de facturación. Los *planes anuales* se pueden cancelar con un **reembolso prorrateado**.'
  },
  {
    q: '¿Qué idiomas admite InterMind para interpretación?',
    a: 'Admitimos **más de 100 idiomas** con interpretación en tiempo real. La lista sigue creciendo — consulta nuestro sitio web para actualizaciones.'
  },
  {
    q: '¿Puedo usar InterMind para webinars o eventos grandes?',
    a: 'Sí. Los planes *Pro* y *Business* son ideales para **reuniones grandes y webinars** — con soporte para hasta **500 participantes** en *Business*.'
  }
]
"/>
