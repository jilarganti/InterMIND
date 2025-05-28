---
layout: home
title: "Video calls powered by simultaneous interpretation"

isHome: true
---

<!-- text="Video calls powered by simultaneous voice translation." -->
<!-- text="Classrooms take years; InterMind delivers real-time understanding today, in every language."> -->
<!-- text="**Multilingual** Video Meetings with **Voice** Interpretation" -->
<!-- title="Live **Interpretation** Video Meetings" -->

<HeroSection
title="Meet in **Any** Language"
text="Speak your native language. Hear everyone else — as if they spoke it too.">

<AuthButton text="Hear the difference" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="Request a Demo"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="Pricing" /> -->
</HeroSection>

> **Who is this for?**  
> Built for **global teams** where language barriers cause delays, lost deals, or costly misunderstandings. Learn more in our [Markets](./product/overview/markets) section.

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
      '✧ 1080p resolution, smart noise suppression, scheduling, moderation, screen sharing, recording, subtitling, participant chat and calendar integration — all built in, ready to go.',
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
      '⚡︎ [Region-based privacy routing](/product/privacy-architecture) — EU, US, SE Asia',
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

From first call to fluent conversations — at any scale.

<PricingPlans :plans="[
  {
    title: '**Basic** 1 user',
    price: '**Free**',
    details: '25 free meetings',
    items: [
      '**100** participant video meetings [💬](#3)',
      '**30** GB pooled storage per user',
      'Search across all your meetings [💬](#2)',
      'Simultaneous interpretation [💬](#1)',
    ],
  },
  {
    title: '**Pro**  1-99 users',
    price: '**$20** /month/user, billed annually',
    details: 'or $25 billed monthly',
    items: [
      '**150** participant video meetings [💬](#3)',
      '**2** TB pooled storage per user',
      'Search across all your meetings [💬](#2)',
      'Simultaneous interpretation [💬](#1)',
    ],
  },
  {
    title: '**Business** 1-250 users',
    price: '**Custom pricing**',
    details: 'Built for privacy',
    items: [
      '**500** participant video meetings [💬](#3)',
      '**5** TB pooled storage per user',
      'Search across all your meetings [💬](#2)',
      'Simultaneous interpretation [💬](#1)',
      '**Region-based privacy routing** [💬](#4)',
      '**AI colleague**. Looks human. Sounds natural. (⍺-version)',
    ],
  }
]">
<AuthButton text="Try for free" buttonClass="alt"/>
<AuthButton text="Buy now" buttonClass="brand"/>
<ContactFormModalNav buttonText="Talk to our team" buttonClass="alt"/>
</PricingPlans>

<span id="Testimonials"></span>

## What Customers Are Saying

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

<span id="FAQ"></span>

## Frequently Asked Questions

<AccordionGroup :items="
[
  {
    q: 'What is a Licensed user and what is a Participant?',
    a: 'A *licensed user* has a free or paid meeting license and can schedule meetings within their plan\'s limits. *Participants* are invitees — they **don’t need an account or license** to join and can connect from any device **for free**.'
  },
  {
    q: 'How many people can use one InterMind license?',
    a: 'Each *licensed user* can host **unlimited meetings**. If multiple team members need to host meetings simultaneously, each will need their own license.'
  },
  {
    q: 'What is the maximum duration of a meeting?',
    a: 'Meetings can run up to **24 hours** on all plans.'
  },
  {
    q: 'Is there a limit on the number of meetings I can host?',
    a: 'The *Free Basic* plan includes **25 free meetings**. *Pro* and *Business* plans offer unlimited meetings with more participants and control.'
  },
  {
    q: 'How does InterMind ensure data privacy and security?',
    a: 'InterMind is **private by design**. All data is processed and stored in your selected region — *EU, US, or Asia*. We comply with **GDPR, CCPA, and UAE PDPL**, and **never use your content** for training or third-party access. **Region-based privacy routing** is available on the *Business* plan.'
  },
  {
    q: 'Can I try InterMind before purchasing a plan?',
    a: 'Absolutely. The *Free Basic* plan gives you full access to core features with **25 free meetings** — including **simultaneous interpretation** and **meeting search**. No credit card required. Upgrade anytime.'
  },
  {
    q: 'What if I need help or support?',
    a: 'Support is available via our **help center**, **email**, and **live chat**. *Business* users get **priority support** with a dedicated contact.'
  },
  {
    q: 'How do I manage my subscription (upgrade, downgrade, or cancel)?',
    a: 'You can change your plan anytime through your **account settings**. Changes take effect **immediately**. For cancellations, *Monthly plans* cancel at the end of the billing cycle. *Annual plans* can be canceled for a **prorated refund**.'
  },
  {
    q: 'What languages does InterMind support for interpretation?',
    a: 'We support **100+ languages** with real-time interpretation. The list keeps growing — check our website for updates.'
  },
  {
    q: 'Can I use InterMind for webinars or large events?',
    a: 'Yes. *Pro* and *Business* plans are ideal for **large meetings and webinars** — with support for up to **500 participants** on *Business*.'
  }
]
"/>
