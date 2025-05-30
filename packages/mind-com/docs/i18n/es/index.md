---
layout: home
title: "Videollamadas potenciadas por interpretación simultánea"
isHome: true
---

<!-- text="Videollamadas potenciadas por traducción simultánea de voz." -->
<!-- title="Reuniones por Video con **Interpretación** en Vivo" -->

<HeroSection
  title="Reúnase en **Cualquier** Idioma"
  text="Hable en su idioma nativo. Escuche a todos los demás — como si también lo hablaran.">

  <AuthButton text="Escuche la diferencia" buttonClass="brand"/>
</HeroSection>

> **¿Para quién es esto?**  
> Diseñado para **equipos globales** donde las barreras del idioma causan retrasos, pérdida de negocios o malentendidos costosos. [Más información ...](./product/overview/markets)

<br>

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Traducción ≠ Comprensión. Esto es lo siguiente.',
  details: 'Sin importar el idioma, **su voz es escuchada — y comprendida** — como si compartieran la misma lengua.',
    items: [
      '⚡︎ De forma natural, en [tiempo real](./product/overview/how-it-works), y sin subtítulos ni retrasos.',
      '✧ Interpretación potenciada por IA que captura el tono, la intención y la terminología específica de la industria.',
    ],
  link: './product/overview/what-is-intermind',
  src: {
    light: '/1l.png',
    dark: '/1d.png',
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
    link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
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
      '✧ Resolución 1080p, supresión inteligente de ruido, programación, moderación, compartir pantalla, grabación, subtítulos, chat entre participantes e integración con calendario — todo incluido, listo para usar.',
    ],
    link: './product/overview/how-it-works',
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
      'InterMind está diseñado para conversaciones críticas de confianza — donde la privacidad y el control son más importantes.',
    items: [
      '⚡︎ [Zonas de Privacidad](./product/overview/privacy-architecture) — UE, EE. UU., SE Asia',
      '✧ **Cero entrenamiento de datos**. Sin acceso de terceros.'
    ],
    link: './product/overview/privacy-architecture',
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
    details: 'sin tarjeta de crédito requerida',
    items: [
      '**25** reuniones',
      '**100** participantes en reuniones de video [💬](#3)',
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
      'Reuniones **ilimitadas**',
      '**150** participantes en reuniones de video [💬](#3)',
      '**2** TB de almacenamiento compartido por usuario',
      'Búsqueda en todas tus reuniones [💬](#2)',
      'Interpretación simultánea [💬](#1)',
    ],
  },
  {
    title: '**Empresarial** 100+ usuarios',
    price: '**Precio personalizado**',
    details: 'Diseñado para la privacidad',
    items: [
      'Reuniones **ilimitadas**',
      '**500** participantes en reuniones de video [💬](#3)',
      '**5** TB de almacenamiento compartido por usuario',
      'Búsqueda en todas tus reuniones [💬](#2)',
      'Interpretación simultánea [💬](#1)',
      '**Zonas de Privacidad** [💬](#4)',
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
    a: 'InterMind es **privado por diseño**. Todos los datos se procesan y almacenan dentro de su **Zona de Privacidad** seleccionada — _EU_, _US_, o _Asia_. Cumplimos con [**GDPR**](https://gdpr.eu), [**CCPA**](https://oag.ca.gov/privacy/ccpa), y UAE PDPL, y **nunca usamos su contenido** para entrenamiento o acceso de terceros. El **control avanzado de Zona de Privacidad** está disponible en el plan **Business**.'
  },
  {
    q: '¿Puedo probar InterMind antes de comprar un plan?',
    a: 'Absolutamente. El plan *Free Basic* te da acceso completo a las funciones principales con **25 reuniones gratuitas** — incluyendo **interpretación simultánea** y **búsqueda de reuniones**. No se requiere tarjeta de crédito. Actualiza cuando quieras.'
  },
  {
    q: '¿Qué pasa si necesito ayuda o soporte?',
    a: 'El soporte está disponible a través de nuestro **centro de ayuda**, **correo electrónico** y **chat en vivo**. Los usuarios de *Business* obtienen **soporte prioritario** con un contacto dedicado.'
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