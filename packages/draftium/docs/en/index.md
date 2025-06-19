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

  <!-- <AuthButton text="Hear the difference" buttonClass="brand"/> -->
  <AuthButton text="Try it in your language" buttonClass="brand"/>
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
<FeatureBlock :card="{
    title: 'The Mind Within Your Meetings',
    details: 'InterMind turns every multilingual call into clear, searchable knowledge.',
    items: [
      '🔍 **Ask anything** — AI finds answers **across your meetings**.',
      '✧ Auto-extracts tasks, owners, and deadlines.',
      '✧ Summarizes key points in any language — instantly.',
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
    title: 'Built for Serious Meetings — Not Just Talking',
    details: 'InterMind is a **professional-grade video meeting platform**, not a lightweight add-on or plugin.',
    items: [
      '✧ 1080p resolution, smart noise suppression, scheduling, moderation, screen sharing, recording, subtitling, participant chat and calendar integration — all built in, ready to go.',
    ],
    link: './product/overview/video-meeting-platform',
    src: {
      light: '/3l.mp4',
      dark: '/3d.mp4',
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
      '⚡︎ [Privacy Zones](./product/overview/privacy-architecture) — EU, US, SE Asia',
      '✧ **Zero data training**. No third-party access.'
    ],
    link: './product/overview/privacy-architecture',
    src: {
      light: '/4l.png',
      dark: '/4d.png',
    },
    inversion: true
  }"
/>

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
    a: 'InterMind is **private by design**. All data is processed and stored within your selected **Privacy Zone** — _EU_, _US_, or _Asia_. We comply with [**GDPR**](https://gdpr.eu), [**CCPA**](https://oag.ca.gov/privacy/ccpa), and UAE PDPL, and **never use your content** for training or third-party access.  Advanced [Privacy Zone control](./product/overview/privacy-architecture) is available on the **Business** plan.'
  },
  {
    q: 'Can I try InterMind before purchasing a plan?',
    a: 'Absolutely. The *Free Basic* plan gives you full access to core features with **25 free meetings** — including **simultaneous interpretation** and **meeting search**. No credit card required. Upgrade anytime.'
  },
  {
    q: 'What if I need help or support?',
    a: 'Support is available via our [help center](./resources/help). *Business* users get **priority support** with a dedicated contact.'
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
