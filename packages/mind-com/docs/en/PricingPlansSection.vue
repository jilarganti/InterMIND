<template>
  <span id="Pricing"></span>

  <PricingPlans
    :plans="[
      {
        title: '**Basic** &nbsp 1 user',
        price: '**Free**',
        details: 'no credit card required',
        items: [
          '**25** meetings',
          '**100** participant video meetings [💬](#3)',
          '**30** GB pooled storage per user',
          'Search across all your meetings [💬](#2)',
          'Simultaneous interpretation [💬](#1)',
        ],
      },
      {
        title: '**Pro**  &nbsp 1-99 users',
        price: '**$20** /month/user, billed annually',
        details: 'or $25 billed monthly',
        items: [
          '**Unlimited** meetings',
          '**150** participant video meetings [💬](#3)',
          '**2** TB pooled storage per user',
          'Search across all your meetings [💬](#2)',
          'Simultaneous interpretation [💬](#1)',
        ],
      },
      {
        title: '**Business** &nbsp 100+ users',
        price: '**Custom pricing**',
        details: 'Built for privacy',
        items: [
          '**Unlimited** meetings',
          '**500** participant video meetings [💬](#3)',
          '**5** TB pooled storage per user',
          'Search across all your meetings [💬](#2)',
          'Simultaneous interpretation [💬](#1)',
          '**Privacy Zones** [💬](#4)',
        ],
      },
    ]"
  >
    <AuthButton text="Try for free" buttonClass="brand" eventName="im_try_it_attempt" />
    <AuthButton text="Buy now" buttonClass="alt" mode="checkout" eventName="im_buy_now_attempt" />
    <ContactForm buttonText="Talk to our team" buttonClass="alt" />
  </PricingPlans>
</template>
