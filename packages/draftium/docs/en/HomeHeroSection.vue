<template>
  <HeroSection title="Don’t Pitch It — Prototype It" text="Iterate on UI, logic, and structure — before you write a single line of code.">
    <!-- <AuthButton text="Try it in your language" buttonClass="brand"/> -->
    <NavButton buttonLabel="DRAFTIUM" buttonClass="brand" to="./account/" />
  </HeroSection>

  <span id="1"></span>
  <FeatureBlock
    :card="{
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
      inversion: false,
    }"
  />
</template>
