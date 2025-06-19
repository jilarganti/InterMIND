---
layout: home
title: "Live speech translation for video calls"
isHome: true
---

<!-- title: "Video calls powered by simultaneous interpretation" -->
<!-- text="Speak your native language. Hear everyone else — as if they spoke it too." -->

<HeroSection
  title="Don’t Pitch It — Prototype It"
  text="Iterate on UI, logic, and structure — before you write a single line of code.">

  <!-- <AuthButton text="Try it in your language" buttonClass="brand"/> -->
  <NavButton buttonLabel="DRAFTIUM" buttonClass="brand" to="./account/index"/>
</HeroSection>

<span id="1"></span>
<FeatureBlock :card="{
  title: 'Translation ≠ Understanding. Here’s what’s next.',
  details: 'No matter the language, **your voice is heard — and understood** — as if you shared the same tongue.',
    items: [
      '⚡︎ Naturally, in [real time](./product/overview/how-it-works), and without subtitles or lag.',
      '✧ AI-powered interpretation captures tone, intent, and industry-specific terminology.',
    ],
  link: './product/overview/what-is-intermind',
  src: {
    light: '/media-kit/animals-cartoon-3-2.png',
    dark: '/1d.png',
  },
  inversion: false
}" />

<span id="2"></span>

<span id="3"></span>

<span id="4"></span>

> [!tip] Who is this for?  
> Built for **international teams** where language barriers cause **delays**, **lost deals**, or **costly misunderstandings**. [Learn more ...](./product/overview/markets)

<br>

<span id="Pricing"></span>

## Clear and Simple Pricing

From first call to fluent conversations — at any scale.

<PricingPlans :plans="[
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
<AuthButton text="Try for free" buttonClass="alt"/>
<AuthButton text="Buy now" buttonClass="brand"/>
<ContactFormModalNav buttonText="Talk to our team" buttonClass="alt"/>
</PricingPlans>

> [!warning] 😱 Either you speak every language — or someone else closes your deals.

<span id="Testimonials"></span>

## What Customers Are Saying

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

> [!tip] 🥇 Your time is better spent mastering your craft — not memorizing grammar.

<span id="FAQ"></span>

## Frequently Asked Questions

<AccordionGroup :items="
[
  {
    q: 'What languages does InterMind support for interpretation?',
    a: 'InterMind supports **real-time interpretation** in the following 19 languages:<br><br>- العربية (ar) – Arabic<br>- Čeština (cs) – Czech<br>- Deutsch (de) – German<br>- English (en) – English<br>- Español (es) – Spanish<br>- Français (fr) – French<br>- हिन्दी (hi) – Hindi<br>- Magyar (hu) – Hungarian<br>- Italiano (it) – Italian<br>- 日本語 (ja) – Japanese<br>- 한국어 (ko) – Korean<br>- Nederlands (nl) – Dutch<br>- Polski (pl) – Polish<br>- Português (pt) – Portuguese<br>- Русский (ru) – Russian<br>- Türkçe (tr) – Turkish<br>- 中文 (zh) – Chinese<br>- עברית (he) – Hebrew<br>- ไทย (th) – Thai<br><br>We are continuously expanding this list — new languages are added with every major release.'
  },
]
"/>

<HomeFooter :columns="[
  {
    title: 'PRODUCT',
    links: [
      { text: 'Overview', link: './product/overview/what-is-intermind' },
      { text: 'Getting Started', link: './product/guide/getting-started' },
      { text: 'Testimonials', link: '#testimonials' },
      { text: 'Pricing', link: '#Pricing' },
    ]
  },
  {
    title: 'SUPPORT',
    links: [
      { text: 'Get Support', link: './resources/help' },
      { text: 'FAQ', link: '#FAQ' },
      { text: 'Service Status', link: 'https://status.mind.com/' },
      { text: 'Privacy Policy', link: './resources/company/Privacy-Policy' },
      { text: 'AI Legal Guide', link: './resources/company/Legal-Regulations-for-AI-Services' },
      // { text: 'Privacy Settings', link: '#' },
    ]
  },
  {
    title: 'RESOURCES',
    links: [
      // { text: 'Blog', link: './blog' },
      { text: 'Brand Assets', link: './resources/media-kit' },
      // { text: 'AI API / LLM Docs', link: 'https://mind.com/llms-full.txt' },
    ]
  },
  {
    title: 'COMPANY',
    links: [
      { text: 'About', link: './resources/company/about' },
      // { text: 'Team', link: './resources/company/team' },
      // { text: 'Careers', link: './resources/company/careers' },
      { text: 'Contacts', link: './resources/company/contacts' }
    ]
  },
]" />
