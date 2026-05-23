<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const productUrl = config.public.productUrl

const title = "InterMIND — Real-time multilingual video meetings"
const description =
  "InterMIND is a video meeting platform with real-time AI interpretation built in. Everyone speaks their own language, hears everyone else in theirs — no subtitles, no lag, no third-party plugin."
const ogImage = `${siteUrl}/og-cover.png`

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "InterMIND",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: "Real-time AI interpretation built into video meetings.",
  sameAs: [productUrl],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "InterMIND",
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
}

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "InterMIND",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: productUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  description: "Multilingual video meeting platform with real-time AI interpretation.",
}

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}/` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "InterMIND" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/` }],
  script: [
    { type: "application/ld+json", innerHTML: JSON.stringify(organizationJsonLd) },
    { type: "application/ld+json", innerHTML: JSON.stringify(websiteJsonLd) },
    { type: "application/ld+json", innerHTML: JSON.stringify(softwareJsonLd) },
  ],
})

// Floating language chips around the hero — purely decorative.
const languages = [
  { code: "EN", phrase: "Let's ship it", x: 8, y: 14, delay: 0 },
  { code: "ES", phrase: "Vamos a lanzarlo", x: 86, y: 20, delay: 0.6 },
  { code: "JA", phrase: "出荷しましょう", x: 6, y: 72, delay: 1.2 },
  { code: "DE", phrase: "Lass uns starten", x: 90, y: 64, delay: 0.3 },
  { code: "FR", phrase: "On y va", x: 14, y: 44, delay: 0.9 },
  { code: "ZH", phrase: "我们发布吧", x: 88, y: 42, delay: 1.5 },
  { code: "AR", phrase: "هيا بنا", x: 50, y: 90, delay: 1.8 },
]

// Mock meeting tiles for the product preview block.
const tiles = [
  { name: "Akira", flag: "🇯🇵", live: "出荷しましょう", translated: "Let's ship it" },
  { name: "Sofia", flag: "🇪🇸", live: "Vamos a lanzarlo", translated: "Let's ship it" },
  { name: "Lukas", flag: "🇩🇪", live: "Lass uns starten", translated: "Let's ship it" },
  { name: "You", flag: "🇬🇧", live: "Let's ship it", translated: "Let's ship it", self: true },
]

const stats = [
  { value: "<400 ms", label: "voice-to-voice latency" },
  { value: "40+", label: "languages, both directions" },
  { value: "0", label: "plugins to install" },
]

const useCases = [
  {
    tone: "amber",
    title: "Distributed teams",
    body: "Stand-ups, planning, retros — everyone contributes in the language they actually think in.",
  },
  {
    tone: "indigo",
    title: "Customers & partners",
    body: "Sales calls and onboarding without a third human in the room translating every sentence.",
  },
  {
    tone: "emerald",
    title: "Regulated work",
    body: "Legal, medical, support — accurate interpretation where misunderstanding has a price tag.",
  },
  {
    tone: "rose",
    title: "Hiring & interviews",
    body: "Hire from anywhere. Talk to candidates in their first language, not their fourth.",
  },
]
</script>

<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="mesh" aria-hidden="true">
        <span class="blob blob-a" />
        <span class="blob blob-b" />
        <span class="blob blob-c" />
        <span class="grid" />
      </div>

      <div
        v-for="lang in languages"
        :key="lang.code"
        class="lang-chip"
        :style="{ left: `${lang.x}%`, top: `${lang.y}%`, animationDelay: `${lang.delay}s` }"
        aria-hidden="true"
      >
        <span class="lang-code">{{ lang.code }}</span>
        <span class="lang-phrase">{{ lang.phrase }}</span>
      </div>

      <div class="hero-inner">
        <UBadge color="success" variant="soft" size="lg" class="hero-badge">
          <template #leading>
            <span class="pill-dot" />
          </template>
          Live AI interpretation · in beta
        </UBadge>
        <h1>
          Speak your language.
          <span class="gradient-text">Be understood in theirs.</span>
        </h1>
        <p class="lede">
          InterMIND is a video meeting platform with real-time AI interpretation built in. No subtitles. No third-party plugin. No language barrier.
        </p>
        <div class="cta-row">
          <UButton :to="productUrl" external size="xl" color="primary" trailing-icon="i-lucide-arrow-right" class="btn-primary-grad"> Open InterMIND </UButton>
          <UButton to="/blog" size="xl" color="neutral" variant="subtle"> Read the blog </UButton>
        </div>

        <ul class="stats">
          <li v-for="s in stats" :key="s.label">
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- LIVE MEETING PREVIEW -->
    <section class="preview">
      <div class="preview-header">
        <span class="eyebrow">What it looks like</span>
        <h2>One meeting. Four languages. <span class="gradient-text">Zero awkward pauses.</span></h2>
        <p class="preview-lede">
          Each person hears the others in their own language, in their own voice cadence — while they're still talking, not after the sentence ends.
        </p>
      </div>

      <div class="meeting" role="img" aria-label="Mock meeting with four participants speaking different languages">
        <div class="meeting-bar">
          <span class="dot dot-r" />
          <span class="dot dot-y" />
          <span class="dot dot-g" />
          <span class="meeting-title">Sprint review · live interpretation</span>
          <span class="meeting-rec">● REC</span>
        </div>
        <div class="meeting-grid">
          <div v-for="t in tiles" :key="t.name" class="tile" :class="{ 'tile-self': t.self }">
            <div class="tile-face">
              <span class="tile-flag">{{ t.flag }}</span>
            </div>
            <div class="tile-meta">
              <span class="tile-name">{{ t.name }} <span class="tile-mic">●</span></span>
              <span class="tile-live">{{ t.live }}</span>
              <span v-if="!t.self" class="tile-trans">→ {{ t.translated }}</span>
            </div>
          </div>
        </div>
        <div class="waveform" aria-hidden="true">
          <span v-for="n in 32" :key="n" :style="{ animationDelay: `${(n % 7) * 0.08}s` }" />
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="values">
      <article class="value">
        <div class="value-icon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6" />
            <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        </div>
        <h3>Real time, not subtitles</h3>
        <p>Voice-to-voice interpretation that runs while you speak — not a transcript that appears after the sentence ends.</p>
      </article>
      <article class="value">
        <div class="value-icon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.6" />
            <path d="M8 10v4M12 8v8M16 11v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        </div>
        <h3>Built into the meeting</h3>
        <p>The interpreter is part of the platform, not a plugin bolted onto someone else's video stack.</p>
      </article>
      <article class="value">
        <div class="value-icon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />
            <path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <h3>For conversations that matter</h3>
        <p>Designed for teams, partners and customers where misunderstanding has a price tag — not casual chit-chat.</p>
      </article>
    </section>

    <!-- USE CASES -->
    <section class="cases">
      <div class="cases-header">
        <span class="eyebrow">Where teams use it</span>
        <h2>Pick the conversation you keep dreading.</h2>
      </div>
      <div class="cases-grid">
        <article v-for="c in useCases" :key="c.title" class="case" :data-tone="c.tone">
          <span class="case-glyph" aria-hidden="true" />
          <h3>{{ c.title }}</h3>
          <p>{{ c.body }}</p>
        </article>
      </div>
    </section>

    <!-- CTA BAND -->
    <section class="cta-band">
      <div class="cta-glow" aria-hidden="true" />
      <div class="cta-band-inner">
        <h2>Try a multilingual meeting today.</h2>
        <p>No install. No plugin. Open a link, pick your language, talk.</p>
        <UButton :to="productUrl" external size="xl" color="primary" trailing-icon="i-lucide-arrow-right" class="btn-primary-grad btn-lg">
          Open InterMIND
        </UButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  --accent: #dd9144;
  --accent-2: #ff5e8a;
  --accent-3: #6c8cff;
  --ink: #1c1c1c;
  --ink-soft: #4a4a4a;
  --line: rgba(28, 28, 28, 0.08);
  --surface: #ffffff;
  color: var(--ink);
}

/* ---------- HERO ---------- */
.hero {
  position: relative;
  overflow: hidden;
  padding: 7rem 1.5rem 6rem;
  text-align: center;
}
.hero-inner {
  position: relative;
  max-width: 880px;
  margin: 0 auto;
  z-index: 2;
}
.mesh {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.55;
  animation: float 16s ease-in-out infinite;
}
.blob-a {
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, #ffb070 0%, transparent 70%);
  top: -160px;
  left: -120px;
}
.blob-b {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #ff7aa3 0%, transparent 70%);
  top: -80px;
  right: -200px;
  animation-delay: -6s;
}
.blob-c {
  width: 460px;
  height: 460px;
  background: radial-gradient(circle, #7da3ff 0%, transparent 70%);
  bottom: -180px;
  left: 30%;
  animation-delay: -10s;
}
.grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(28, 28, 28, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(28, 28, 28, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
}
@keyframes float {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(20px, -30px, 0) scale(1.08);
  }
}

.lang-chip {
  position: absolute;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(28, 28, 28, 0.08);
  font-size: 0.82rem;
  white-space: nowrap;
  box-shadow: 0 8px 24px -12px rgba(28, 28, 28, 0.25);
  animation: bob 6s ease-in-out infinite;
  transform: translate(-50%, -50%);
}
.lang-code {
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.04em;
}
.lang-phrase {
  color: var(--ink-soft);
}
@keyframes bob {
  0%,
  100% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
}
@media (max-width: 960px) {
  .lang-chip {
    display: none;
  }
}

.hero-badge {
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--line);
  color: var(--ink-soft) !important;
}
.pill-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2bb673;
  box-shadow: 0 0 0 0 rgba(43, 182, 115, 0.6);
  animation: pulse 2s ease-out infinite;
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(43, 182, 115, 0.6);
  }
  100% {
    box-shadow: 0 0 0 12px rgba(43, 182, 115, 0);
  }
}

.hero h1 {
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0 0 1.5rem;
  font-weight: 800;
}
.gradient-text {
  background: linear-gradient(110deg, var(--accent) 0%, var(--accent-2) 50%, var(--accent-3) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% 200%;
  animation: shimmer 8s ease-in-out infinite;
}
@keyframes shimmer {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
.lede {
  font-size: clamp(1.05rem, 1.4vw, 1.25rem);
  color: var(--ink-soft);
  margin: 0 auto 2rem;
  max-width: 620px;
  line-height: 1.6;
}
.cta-row {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 0 3rem;
}
/* Override the primary UButton with our gradient + glow look. */
:deep(.btn-primary-grad) {
  background: linear-gradient(135deg, var(--accent) 0%, #e7642f 100%) !important;
  color: #fff !important;
  border-radius: 999px !important;
  font-weight: 600;
  box-shadow:
    0 10px 30px -10px rgba(221, 145, 68, 0.65),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
:deep(.btn-primary-grad:hover) {
  transform: translateY(-2px);
  box-shadow:
    0 16px 36px -10px rgba(221, 145, 68, 0.75),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
}
:deep(.btn-lg) {
  padding: 1.1rem 2rem !important;
  font-size: 1.1rem !important;
}

.stats {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-grid;
  grid-auto-flow: column;
  gap: 2.5rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 1.1rem 1.8rem;
}
.stats li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.stats strong {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(120deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stats span {
  font-size: 0.78rem;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
@media (max-width: 640px) {
  .stats {
    grid-auto-flow: row;
    gap: 1rem;
    text-align: left;
  }
  .stats li {
    flex-direction: row;
    align-items: baseline;
    gap: 0.6rem;
  }
}

/* ---------- PREVIEW ---------- */
.preview {
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
}
.preview-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 3rem;
}
.eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 0.75rem;
}
.preview h2,
.cases h2,
.cta-band h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
  font-weight: 800;
  line-height: 1.15;
}
.preview-lede {
  color: var(--ink-soft);
  font-size: 1.05rem;
  margin: 0;
}

.meeting {
  position: relative;
  border-radius: 24px;
  background: linear-gradient(160deg, #1c1c1c 0%, #2a2a2a 100%);
  padding: 1rem;
  box-shadow:
    0 40px 80px -30px rgba(28, 28, 28, 0.35),
    inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  overflow: hidden;
}
.meeting::before {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, rgba(221, 145, 68, 0.45), rgba(108, 140, 255, 0.35), rgba(255, 94, 138, 0.4));
  filter: blur(30px);
  opacity: 0.45;
  z-index: -1;
}
.meeting-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.6rem 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.82rem;
}
.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.dot-r {
  background: #ff5f57;
}
.dot-y {
  background: #febc2e;
}
.dot-g {
  background: #28c840;
}
.meeting-title {
  margin-left: 0.75rem;
}
.meeting-rec {
  margin-left: auto;
  color: #ff6b6b;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
}
.meeting-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}
@media (max-width: 820px) {
  .meeting-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.tile {
  position: relative;
  border-radius: 14px;
  background: linear-gradient(160deg, #2f2f33 0%, #1f1f23 100%);
  aspect-ratio: 4 / 3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.04);
}
.tile-self {
  outline: 2px solid var(--accent);
  outline-offset: -2px;
}
.tile-face {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(2.5rem, 5vw, 3.4rem);
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3));
}
.tile-meta {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.9);
}
.tile-name {
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}
.tile-mic {
  color: #2bb673;
  font-size: 0.5rem;
  animation: pulse-mic 1.6s ease-in-out infinite;
}
@keyframes pulse-mic {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}
.tile-live {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.72rem;
  line-height: 1.3;
}
.tile-trans {
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 600;
}
.waveform {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  height: 32px;
  margin-top: 0.75rem;
}
.waveform span {
  width: 3px;
  background: linear-gradient(180deg, var(--accent), var(--accent-2));
  border-radius: 999px;
  animation: wave 1.2s ease-in-out infinite;
  height: 6px;
}
@keyframes wave {
  0%,
  100% {
    height: 6px;
    opacity: 0.55;
  }
  50% {
    height: 26px;
    opacity: 1;
  }
}

/* ---------- VALUES ---------- */
.values {
  max-width: 1100px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}
.value {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 2rem 1.75rem;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}
.value:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 40px -20px rgba(28, 28, 28, 0.18);
  border-color: rgba(221, 145, 68, 0.4);
}
.value-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(221, 145, 68, 0.18), rgba(108, 140, 255, 0.18));
  color: var(--accent);
  margin-bottom: 1rem;
}
.value-icon svg {
  width: 22px;
  height: 22px;
}
.value h3 {
  font-size: 1.15rem;
  margin: 0 0 0.6rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.value p {
  color: var(--ink-soft);
  font-size: 0.98rem;
  margin: 0;
  line-height: 1.55;
}

/* ---------- USE CASES ---------- */
.cases {
  max-width: 1100px;
  margin: 5rem auto 4rem;
  padding: 0 1.5rem;
}
.cases-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 2.5rem;
}
.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
.case {
  position: relative;
  background: linear-gradient(180deg, #fff 0%, #fbfaf6 100%);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.75rem 1.5rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  overflow: hidden;
}
.case::before {
  content: "";
  position: absolute;
  top: -40px;
  right: -40px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  filter: blur(30px);
  opacity: 0.5;
}
.case[data-tone="amber"]::before {
  background: #ffb070;
}
.case[data-tone="indigo"]::before {
  background: #7da3ff;
}
.case[data-tone="emerald"]::before {
  background: #6ee2a1;
}
.case[data-tone="rose"]::before {
  background: #ff7aa3;
}
.case:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 30px -18px rgba(28, 28, 28, 0.18);
}
.case-glyph {
  position: relative;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  margin-bottom: 0.85rem;
}
.case[data-tone="amber"] .case-glyph {
  background: linear-gradient(135deg, #dd9144, #ff7e3b);
}
.case[data-tone="indigo"] .case-glyph {
  background: linear-gradient(135deg, #6c8cff, #4a5cff);
}
.case[data-tone="emerald"] .case-glyph {
  background: linear-gradient(135deg, #2bb673, #1f8f5c);
}
.case[data-tone="rose"] .case-glyph {
  background: linear-gradient(135deg, #ff5e8a, #ff3d6e);
}
.case h3 {
  position: relative;
  font-size: 1.05rem;
  margin: 0 0 0.4rem;
  font-weight: 700;
}
.case p {
  position: relative;
  color: var(--ink-soft);
  font-size: 0.93rem;
  margin: 0;
  line-height: 1.5;
}

/* ---------- CTA BAND ---------- */
.cta-band {
  position: relative;
  margin: 4rem 1.5rem 5rem;
  border-radius: 28px;
  background: linear-gradient(135deg, #1c1c1c 0%, #2a1f1a 100%);
  color: #fff;
  overflow: hidden;
  text-align: center;
}
.cta-band-inner {
  position: relative;
  z-index: 2;
  padding: 4rem 1.5rem;
  max-width: 720px;
  margin: 0 auto;
}
.cta-band h2 {
  color: #fff;
}
.cta-band p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 2rem;
  font-size: 1.05rem;
}
.cta-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(60% 80% at 20% 100%, rgba(221, 145, 68, 0.55), transparent 60%),
    radial-gradient(50% 70% at 80% 0%, rgba(108, 140, 255, 0.45), transparent 60%),
    radial-gradient(40% 60% at 50% 50%, rgba(255, 94, 138, 0.3), transparent 70%);
  filter: blur(10px);
}

@media (prefers-reduced-motion: reduce) {
  .blob,
  .lang-chip,
  .pill-dot,
  .gradient-text,
  .tile-mic,
  .waveform span {
    animation: none !important;
  }
}
</style>
