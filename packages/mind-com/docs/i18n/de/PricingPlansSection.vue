<template>
  <span id="Pricing"></span>

  <PricingPlans
    :plans="[
      {
        title: '**Basic** &nbsp 1 Benutzer',
        price: '**Kostenlos**',
        details: 'keine Kreditkarte erforderlich',
        items: [
          '**25** Meetings',
          '**100** Teilnehmer Video-Meetings [💬](#3)',
          '**30** GB gemeinsamer Speicher pro Benutzer',
          'Suche in allen Ihren Meetings [💬](#2)',
          'Simultandolmetschen [💬](#1)',
        ],
      },
      {
        title: '**Pro**  &nbsp 1-99 Benutzer',
        price: '**20 €** /Monat/Benutzer, jährlich abgerechnet',
        details: 'oder 25 € monatlich abgerechnet',
        items: [
          '**Unbegrenzte** Meetings',
          '**150** Teilnehmer Video-Meetings [💬](#3)',
          '**2** TB gemeinsamer Speicher pro Benutzer',
          'Suche in allen Ihren Meetings [💬](#2)',
          'Simultandolmetschen [💬](#1)',
        ],
      },
      {
        title: '**Business** &nbsp 100+ Benutzer',
        price: '**Individuelle Preisgestaltung**',
        details: 'Entwickelt für Datenschutz',
        items: [
          '**Unbegrenzte** Meetings',
          '**500** Teilnehmer Video-Meetings [💬](#3)',
          '**5** TB gemeinsamer Speicher pro Benutzer',
          'Suche in allen Ihren Meetings [💬](#2)',
          'Simultandolmetschen [💬](#1)',
          '**Privacy Zones** [💬](#4)',
        ],
      },
    ]"
  >
    <AuthButton text="Kostenlos testen" buttonClass="brand" eventName="im_try_it_attempt" />
    <AuthButton text="Jetzt kaufen" buttonClass="alt" mode="checkout" eventName="im_buy_now_attempt" />
    <ContactForm buttonText="Mit unserem Team sprechen" buttonClass="alt" />
  </PricingPlans>
</template>