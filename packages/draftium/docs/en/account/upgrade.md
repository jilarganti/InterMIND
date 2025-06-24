---
layout: custom
---

# Plans that grow with you

<PricingPlans :plans="[
  {
    title: '**Pro**  &nbsp 1-99 users',
    price: '**$20** /month/user, billed annually',
    details: 'or $25 billed monthly',
    items: [
      '**unlimited** meetings',
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
      '**unlimited** meetings',
      '**500** participant video meetings [💬](#3)',
      '**5** TB pooled storage per user',
      'Search across all your meetings [💬](#2)',
      'Simultaneous interpretation [💬](#1)',
      '**Privacy Zones** [💬](#4)',
    ],
  }
]">
<NavButton buttonLabel="Buy Now" buttonClass="brand" to="./screens/upgrade"/>
<ContactFormModalNav buttonText="Talk to our team" buttonClass="alt"/>
</PricingPlans>
