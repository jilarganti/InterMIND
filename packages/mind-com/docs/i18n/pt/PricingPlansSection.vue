<template>
  <span id="Pricing"></span>

  <PricingPlans
    :plans="[
      {
        title: '**Básico** &nbsp 1 usuário',
        price: '**Grátis**',
        details: 'cartão de crédito não necessário',
        items: [
          '**25** reuniões',
          '**100** participantes em videochamadas [💬](#3)',
          '**30** GB de armazenamento compartilhado por usuário',
          'Pesquise em todas as suas reuniões [💬](#2)',
          'Interpretação simultânea [💬](#1)',
        ],
      },
      {
        title: '**Pro**  &nbsp 1-99 usuários',
        price: '**$20** /mês/usuário, cobrado anualmente',
        details: 'ou $25 cobrado mensalmente',
        items: [
          '**Ilimitadas** reuniões',
          '**150** participantes em videochamadas [💬](#3)',
          '**2** TB de armazenamento compartilhado por usuário',
          'Pesquise em todas as suas reuniões [💬](#2)',
          'Interpretação simultânea [💬](#1)',
        ],
      },
      {
        title: '**Business** &nbsp 100+ usuários',
        price: '**Preço personalizado**',
        details: 'Desenvolvido para privacidade',
        items: [
          '**Ilimitadas** reuniões',
          '**500** participantes em videochamadas [💬](#3)',
          '**5** TB de armazenamento compartilhado por usuário',
          'Pesquise em todas as suas reuniões [💬](#2)',
          'Interpretação simultânea [💬](#1)',
          '**Zonas de Privacidade** [💬](#4)',
        ],
      },
    ]"
  >
    <AuthButton text="Experimente grátis" buttonClass="brand" eventName="try_it_attempt" />
    <AuthButton text="Comprar agora" buttonClass="alt" mode="checkout" eventName="buy_now_attempt" />
    <ContactForm buttonText="Fale com nossa equipe" buttonClass="alt" />
  </PricingPlans>
</template>
