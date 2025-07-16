<template>
  <span id="Pricing"></span>

  <PricingPlans
    :plans="[
      {
        title: '**Básico** &nbsp 1 usuario',
        price: '**Gratis**',
        details: 'no se requiere tarjeta de crédito',
        items: [
          '**25** reuniones',
          '**100** participantes en videollamadas [💬](#3)',
          '**30** GB de almacenamiento compartido por usuario',
          'Buscar en todas tus reuniones [💬](#2)',
          'Interpretación simultánea [💬](#1)',
        ],
      },
      {
        title: '**Pro**  &nbsp 1-99 usuarios',
        price: '**$20** /mes/usuario, facturado anualmente',
        details: 'o $25 facturado mensualmente',
        items: [
          '**Ilimitadas** reuniones',
          '**150** participantes en videollamadas [💬](#3)',
          '**2** TB de almacenamiento compartido por usuario',
          'Buscar en todas tus reuniones [💬](#2)',
          'Interpretación simultánea [💬](#1)',
        ],
      },
      {
        title: '**Empresarial** &nbsp 100+ usuarios',
        price: '**Precio personalizado**',
        details: 'Diseñado para privacidad',
        items: [
          '**Ilimitadas** reuniones',
          '**500** participantes en videollamadas [💬](#3)',
          '**5** TB de almacenamiento compartido por usuario',
          'Buscar en todas tus reuniones [💬](#2)',
          'Interpretación simultánea [💬](#1)',
          '**Zonas de privacidad** [💬](#4)',
        ],
      },
    ]"
  >
    <AuthButton text="Probar gratis" buttonClass="brand" eventName="im_try_it_attempt" />
    <AuthButton text="Comprar ahora" buttonClass="alt" mode="checkout" eventName="im_buy_now_attempt" />
    <ContactForm buttonText="Hablar con nuestro equipo" buttonClass="alt" />
  </PricingPlans>
</template>
