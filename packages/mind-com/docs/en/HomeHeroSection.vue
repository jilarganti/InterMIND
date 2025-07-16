<template>
  <HeroSection title="Meet in **Any** Language" :typingSpeed="5" text="Live speech translation in **video calls** — fast, clear, borderless communication.">
    <NavButton buttonLabel="How it works" buttonClass="brand" to="/#HowItWorks" />
    <AuthButton text="Get started" buttonClass="alt" eventName="im_get_started_attempt" />
  </HeroSection>

  <span id="1"></span>
  <FeatureBlock
    :card="{
      title: 'Translation ≠ Understanding. Here’s what’s next.',
      details: 'No matter the language, your voice is heard — and understood — as if you shared the same tongue.',
      items: [
        '✧ Naturally, in [real time](./product/overview/how-it-works), and without subtitles or lag.',
        '✧ AI-powered interpretation captures tone, intent, and industry-specific terminology.',
      ],
      link: './product/overview/what-is-intermind',
      src: {
        light: '/media-kit/animals-cartoon-3-2.png',
        dark: '/1d.png',
      },
      inversion: false,
    }"
  />

  <span id="2"></span>
  <FeatureBlock
    :card="{
      title: 'The Mind Within Your Meetings',
      details: 'InterMind turns every multilingual call into clear, searchable knowledge.',
      items: [
        '✧ **Ask anything** — AI finds answers **across your meetings**.',
        '✧ Auto-extracts tasks, owners, and deadlines.',
        '✧ Summarizes key points in any language — instantly.',
      ],
      link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
      src: {
        light: '/2l.png',
        dark: '/2d.png',
      },
      inversion: true,
    }"
  />

  <span id="3"></span>
  <FeatureBlock
    :card="{
      title: 'Built for Serious Meetings — Not Just Talking',
      details: 'InterMind is a [professional-grade video meeting platform](./product/overview/video-meeting-platform), not a lightweight add-on or plugin.',
      items: [
        '✧ 1080p resolution, smart noise suppression, scheduling, moderation, screen sharing, recording, subtitling, participant chat and calendar integration — all built in, **ready to go**.',
      ],
      link: './product/overview/video-meeting-platform',
      src: {
        light: '/3l.mp4',
        dark: '/3d.mp4',
      },
      inversion: false,
    }"
  />

  <span id="4"></span>
  <FeatureBlock
    :card="{
      title: 'Privacy Where It Matters',
      details: 'InterMind is built for trust-critical conversations — where privacy and control matter most.',
      items: ['✧ [Privacy Zones](./product/overview/privacy-architecture) — EU, US, SE Asia', '✧ **Zero data training**. No third-party access.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />
</template>
