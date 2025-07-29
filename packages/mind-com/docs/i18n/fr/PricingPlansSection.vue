<template>
  <span id="Pricing"></span>

  <PricingPlans
    :plans="[
      {
        title: '**Basique** &nbsp 1 utilisateur',
        price: '**Gratuit**',
        details: 'aucune carte de crédit requise',
        items: [
          '**25** réunions',
          '**100** participants aux réunions vidéo [💬](#3)',
          '**30** Go de stockage partagé par utilisateur',
          'Recherche dans toutes vos réunions [💬](#2)',
          'Interprétation simultanée [💬](#1)',
        ],
      },
      {
        title: '**Pro**  &nbsp 1-99 utilisateurs',
        price: '**20 $** /mois/utilisateur, facturé annuellement',
        details: 'ou 25 $ facturé mensuellement',
        items: [
          '**Illimitées** réunions',
          '**150** participants aux réunions vidéo [💬](#3)',
          '**2** To de stockage partagé par utilisateur',
          'Recherche dans toutes vos réunions [💬](#2)',
          'Interprétation simultanée [💬](#1)',
        ],
      },
      {
        title: '**Business** &nbsp 100+ utilisateurs',
        price: '**Tarification personnalisée**',
        details: 'Conçu pour la confidentialité',
        items: [
          '**Illimitées** réunions',
          '**500** participants aux réunions vidéo [💬](#3)',
          '**5** To de stockage partagé par utilisateur',
          'Recherche dans toutes vos réunions [💬](#2)',
          'Interprétation simultanée [💬](#1)',
          '**Zones de confidentialité** [💬](#4)',
        ],
      },
    ]"
  >
    <AuthButton text="Essayer gratuitement" buttonClass="brand" eventName="try_it_attempt" />
    <AuthButton text="Acheter maintenant" buttonClass="alt" mode="checkout" eventName="buy_now_attempt" />
    <ContactForm buttonText="Parler à notre équipe" buttonClass="alt" />
  </PricingPlans>
</template>
