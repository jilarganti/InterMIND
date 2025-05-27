---
layout: home
title: "AI Voice Translator for Live Video Calls"
description: "Multilingual meetings don’t need Zoom, plugins, or interpreters. InterMind is an AI voice translator for real-time video calls — speak and translate instantly."
isHome: true
---

<!-- text="Focus on growth — let InterMind handle the languages." -->
<!-- text="Classrooms take years; InterMind delivers real-time understanding today, in every language."> -->
<!-- text="**Multilingual** Video Meetings with **Voice** Interpretation" -->
<!-- title="Live **Interpretation** Video Meetings" -->

<HeroSection
title="Meet in **Any** Language"
text="Not just translation. Simultaneous, voice-first interpretation that feels human.">

<AuthButton text="Hear the difference" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Request a Demo"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Pricing" /> -->
</HeroSection>

> **Who is this for?**  
> For international teams where language barriers lead to lost deals, delays, or miscommunication. Priority Markets include global manufacturing hubs, US industrial partners, high-tech Asia, multilingual EU, MENA, and Latin America. Learn more in our [Markets](./product/markets) section.

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Translation ≠ Understanding. Here’s what’s next.',
  details: 'No matter the language, **your voice is heard — and understood** — as if you shared the same tongue.',
    items: [
      '⚡︎ Naturally, in [real time](/product/how-it-works), and without subtitles or lag.',
      '✧ AI-powered interpretation captures tone, intent, and industry-specific terminology.',
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
    title: 'The Mind Within Your Meetings',
    details: 'InterMind turns every multilingual call into clear, searchable knowledge.',
    items: [
      '🔍 **Ask anything** — AI finds answers **across your meetings**.',
      '✧ Auto-extracts tasks, owners, and deadlines.',
      '✧ Summarizes key points in any language — instantly.',
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
    title: 'Built for Serious Meetings — Not Just Talking',
    details: 'InterMind is a **professional-grade video meeting platform**, not a lightweight add-on or plugin.',
    items: [
      '✧ 1080p resolution, smart noise suppression, scheduling, moderation, screen sharing, recording, participant chat, calendar integration and translation — all built in, ready to go.',
      '✧ **Free Forever** — no credit card, no time limit.',
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
    title: 'Privacy Where It Matters',
    details:
      'InterMind is built for trust-critical conversations — where privacy and control matter most.',
    items: [
      '⚡︎ [Region-based privacy](/product/privacy-architecture) — EU, US, SE Asia',
      '✧ Compliant: GDPR, CCPA, UAE PDPL',
      '✧ **Zero data training**. No third-party access.'
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

## Clear and Simple Pricing

Choose the plan that speaks your language. From subtitles to full voice interpretation — grow as your team does.

<PricingPlans :plans="[
  {
    title: '**Basic** 1 user',
    price: '**Free**',
    details: '25 free meetings',
    items: [
      '100 participant video meetings [💬](#3)',
      '30GB pooled storage per user',
      '**Simultaneous voice translation** [💬](#1)',
      'AI meeting assistant for notes & summaries [💬](#2)',
    ],
  },
  {
    title: '**Pro**  1-99 users',
    price: '**$20** /month/user, billed annually',
    details: 'or $25 billed monthly',
    items: [
      '150 participant video meetings [💬](#3)',
      '2TB pooled storage per user',
      '**Simultaneous voice translation** [💬](#1)',
      'AI meeting assistant for notes & summaries [💬](#2)',
    ],
  },
  {
    title: '**Business** 1-250 users',
    price: '**Custom pricing**',
    details: 'Built for privacy & compliance',
    items: [
      '500 participant video meetings [💬](#3)',
      '5TB pooled storage per user',
      '**Simultaneous voice translation** [💬](#1)',
      '**AI colleague**. Looks human. Sounds natural. Smarter than you 👽.',
      '**Region-based privacy routing** (EU / US / Asia) [💬](#4)',
    ],
  }
]">
<AuthButton text="Try for free" buttonClass="alt"/>
<AuthButton text="Buy now" buttonClass="brand"/>
<ContactFormModalNav buttonText="Talk to our team" buttonClass="alt"/>
</PricingPlans>

<span id="FAQ"></span>

## Frequently Asked Questions

<AccordionGroup :items="
[
  {
    q: 'What is a Licensed user and what is a Participant?',
    a: 'A *licensed user* has a free or paid meeting license and can schedule meetings within their plan\'s limits. *Participants* are invitees — they **don’t need an account or license** to join and can connect from any device **for free**.'
  },
  {
    q: 'How many participants can join a meeting?',
    a: 'It depends on your plan: *Basic* supports up to **100 participants**, *Pro* up to **150**, and *Business* up to **500**.'
  },
  {
    q: 'How many people can use one InterMind license?',
    a: 'Each *licensed user* can host **unlimited meetings**. If multiple team members need to host meetings simultaneously, each will need their own license.'
  },
  {
    q: 'Does voice interpretation work on all plans?',
    a: 'Yes, *voice interpretation* is available across all plans. On *Basic*, it works with **subtitles only**. *Pro* and *Business* unlock full **two-way voice-to-voice interpretation**, more capacity, and advanced features.'
  },
  {
    q: 'What is the maximum duration of a meeting?',
    a: 'Meetings can run up to **24 hours** on all plans.'
  },
  {
    q: 'Can I record meetings?',
    a: 'Yes, all plans support **meeting recording**. Recordings are stored securely in your account and accessible anytime.'
  },
  {
    q: 'Is there a limit on the number of meetings I can host?',
    a: 'No. You can host **unlimited meetings** — even on the *Free Basic* plan. *Pro* and *Business* plans offer more power, participants, and control.'
  },
  {
    q: 'What if I need more storage for recordings?',
    a: '*Pro* includes **2 TB** of pooled storage per user. *Business* offers **5 TB**. Need more? **Contact us** for custom options.'
  },
  {
    q: 'How does InterMind ensure data privacy and security?',
    a: 'InterMind is **private by design**. All data is processed and stored in your selected region — *EU, US, or Asia*. We comply with **GDPR, CCPA, and UAE PDPL**, and **never use your content** for training or third-party access.'
  },
  {
    q: 'Can I try InterMind before purchasing a plan?',
    a: 'Absolutely. The *Free Basic* plan gives you full access to core features — including **multilingual meetings**, **subtitles**, and an **AI assistant**. No credit card, **no time limit**. Upgrade anytime.'
  },
  {
    q: 'What if I need help or support?',
    a: 'Support is available via our **help center**, **email**, and **live chat**. *Business* users get **priority support** with a dedicated contact.'
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Yes. *Monthly plans* cancel at the end of the billing cycle. *Annual plans* can be canceled for a **prorated refund**.'
  },
  {
    q: 'How do I upgrade or downgrade my plan?',
    a: 'You can change your plan anytime through your **account settings**. Changes take effect **immediately**.'
  },
  {
    q: 'What languages does InterMind support for voice interpretation?',
    a: 'We support **100+ languages** with real-time voice interpretation. The list keeps growing — check our website for updates.'
  },
  {
    q: 'Can I use InterMind for webinars or large events?',
    a: 'Yes. *Pro* and *Business* plans are ideal for **large meetings and webinars** — with support for up to **500 participants** on *Business*.'
  }
]
"/>

<span id="Testimonials"></span>

## What Customers Are Saying

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>
