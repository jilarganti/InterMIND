<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const productUrl = config.public.productUrl

const vReveal = {
  mounted(el: HTMLElement) {
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible")
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible")
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
  },
}

const title = "InterMIND — Verifiable multilingual meetings for high-stakes rooms"
const description =
  "Video meetings where everyone speaks and is understood in their own language — with translation quality you can verify against a public benchmark, not just trust. Built for legal, regulatory, M&A and investor rooms where a mistranslation is a liability."
const ogImage = `${siteUrl}/og-cover.png`

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "InterMIND",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  description: "Verifiable multilingual video meetings for legal, regulatory, M&A and investor rooms. EU / neutral infrastructure, on-premise available.",
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
  description:
    "Multilingual video meeting platform with verifiable translation quality, customer-controlled glossaries, audit trail, EU / neutral infrastructure and on-premise deployment.",
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

// Floating language chips around the hero — phrases from regulated rooms.
const languages = [
  { code: "EN", phrase: "Within scope of the DPA", x: 8, y: 14, delay: 0 },
  { code: "ES", phrase: "Aceptamos los términos", x: 86, y: 20, delay: 0.6 },
  { code: "JA", phrase: "条件を承諾します", x: 6, y: 72, delay: 1.2 },
  { code: "DE", phrase: "Wir bestätigen die Frist", x: 90, y: 64, delay: 0.3 },
  { code: "FR", phrase: "Sous réserve d'audit", x: 14, y: 44, delay: 0.9 },
  { code: "ZH", phrase: "我们同意条款", x: 88, y: 42, delay: 1.5 },
  { code: "AR", phrase: "نوافق على البنود", x: 50, y: 90, delay: 1.8 },
]

// Mock meeting tiles — cross-border M&A call, each side speaking their own language.
const tiles = [
  { name: "Akira", flag: "🇯🇵", live: "弊社は補償条項を受け入れます", translated: "We accept the indemnity clause" },
  { name: "Sofía", flag: "🇪🇸", live: "Necesitamos limitar la responsabilidad", translated: "We need to cap the liability" },
  { name: "Lukas", flag: "🇩🇪", live: "Einverstanden, vorbehaltlich Audit", translated: "Agreed, subject to audit" },
  { name: "You", flag: "🇬🇧", live: "Let's lock the term sheet", translated: "Let's lock the term sheet", self: true },
]

// The silent-failure modes of running a meeting in everyone's second-best language.
const problems = [
  {
    title: "False precision",
    body: "Non-native speech sounds fluent but carries hidden errors. A confidently wrong sentence beats an obvious gap — the gap earns a follow-up question, the false clarity gets minuted. Bad knowledge is worse than no knowledge.",
  },
  {
    title: "Self-censorship",
    body: "People drop the nuance they can't express in a second language. The most knowledgeable person in the room becomes the least articulate.",
  },
  {
    title: "Fluency outranks competence",
    body: "Decisions tilt toward whoever speaks best, not whoever is right. In a negotiation, the native-English side holds an advantage before any substance is exchanged.",
  },
]

// The wedge: verifiable / auditable / controllable — never "highest quality".
const pillars = [
  {
    icon: "i-lucide-gauge",
    title: "Scored against a public benchmark",
    body: "Every release is measured on an open, reproducible benchmark — not a private screenshot. You can check the number; you don't have to trust the vendor.",
  },
  {
    icon: "i-lucide-book-marked",
    title: "Glossaries & termbases you control",
    body: "Legal, medical, financial terminology bound to your wording — not the model's best guess. Upload, version, audit. Your house style; your liability surface.",
  },
  {
    icon: "i-lucide-file-search",
    title: "Audit trail + human escalation",
    body: "Every translated segment is recorded with model, version and confidence. Critical passages can be routed to a human interpreter in-the-loop before the room moves on.",
  },
]

// Procurement-tier proof points. Three claims, no vanity metrics.
const stats = [
  { value: "Public", label: "translation benchmark" },
  { value: "Yours", label: "glossaries & termbases" },
  { value: "EU / on-prem", label: "data residency options" },
]

// The rooms the positioning doc actually targets.
const useCases = [
  {
    tone: "amber",
    title: "Legal negotiations",
    body: "Term sheets, settlements, IP licensing across jurisdictions — where one ambiguous clause is the whole exposure.",
  },
  {
    tone: "indigo",
    title: "Regulatory submissions",
    body: "Pre-submission meetings with EMA, BfArM, MHRA, SFDA — recorded, glossary-controlled, defensible on review.",
  },
  {
    tone: "emerald",
    title: "M&A and investor relations",
    body: "Cross-border deal calls and earnings Q&A where the buy-side speaks one language and the management another.",
  },
  {
    tone: "rose",
    title: "GxP and quality audits",
    body: "Vendor and site audits where every answer is on the record and the inspector's first language isn't the auditee's.",
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
          Live interpretation · closed beta
        </UBadge>
        <h1>
          Your most important meetings shouldn't run in
          <span class="gradient-text">everyone's second-best language.</span>
        </h1>
        <p class="lede">
          Everyone speaks and is understood in their own language — with translation quality you can verify against a public benchmark, not just trust. Built
          for rooms where a mistranslation is a liability.
        </p>
        <div class="cta-row">
          <UButton :to="productUrl" external size="xl" color="primary" trailing-icon="i-lucide-volume-2" class="btn-primary-grad">
            Try the live demo (sound on)
          </UButton>
          <UButton :to="`${productUrl}/benchmark`" external size="xl" color="neutral" variant="subtle" trailing-icon="i-lucide-gauge">
            See the public benchmark
          </UButton>
        </div>

        <p class="trust-strip">Legal · regulatory · investor relations · M&amp;A &nbsp;—&nbsp; EU / neutral infrastructure · on-premise available</p>

        <ul class="stats">
          <li v-for="s in stats" :key="s.label">
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- PROBLEM -->
    <section class="problem">
      <div v-reveal class="problem-header reveal">
        <span class="eyebrow">The problem</span>
        <h2>Meetings in everyone's second-best language fail <span class="gradient-text">silently</span>.</h2>
        <p class="problem-lede">
          Every cross-border meeting today defaults to a shared language nobody fully owns — almost always English. The status quo doesn't fail loudly. It fails
          quietly, in three ways:
        </p>
      </div>

      <div class="problem-grid">
        <article v-for="p in problems" :key="p.title" v-reveal class="problem-card reveal">
          <h3>{{ p.title }}</h3>
          <p>{{ p.body }}</p>
        </article>
      </div>

      <p class="disqualifier">
        A generic machine-translation layer doesn't fix this — it <em>reproduces</em> it, because good-enough translation also emits false precision. In a
        high-stakes room, <strong>good-enough is negative value.</strong>
      </p>
    </section>

    <!-- LIVE MEETING PREVIEW -->
    <section class="preview">
      <div v-reveal class="preview-header reveal">
        <span class="eyebrow">What it looks like</span>
        <h2>One deal call. Four languages. <span class="gradient-text">Nothing lost in translation.</span></h2>
        <p class="preview-lede">
          Each side speaks in their first language. Each side hears the others in theirs — with the exact terminology your termbase locks in, recorded on the
          audit trail, available to escalate to a human interpreter for the clauses that matter.
        </p>
      </div>

      <div class="meeting" role="img" aria-label="Mock cross-border M&A call with four participants speaking different languages">
        <div class="meeting-bar">
          <span class="dot dot-r" />
          <span class="dot dot-y" />
          <span class="dot dot-g" />
          <span class="meeting-title">Cross-border M&amp;A · interpretation on record</span>
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

    <!-- WEDGE / PILLARS -->
    <section class="values" aria-labelledby="pillars-heading">
      <div v-reveal class="pillars-header reveal">
        <span class="eyebrow">Why this is different</span>
        <h2 id="pillars-heading">Translation quality you can <span class="gradient-text">verify</span>, not just trust.</h2>
        <p class="pillars-lede">
          Everyone calls the same underlying models. A better quality score this quarter is erased next quarter. What we build — and incumbents structurally
          won't — is the layer that lets you check, constrain and audit what was actually said.
        </p>
      </div>
      <div class="pillars-grid">
        <article v-for="pl in pillars" :key="pl.title" v-reveal class="value reveal">
          <div class="value-icon">
            <UIcon :name="pl.icon" />
          </div>
          <h3>{{ pl.title }}</h3>
          <p>{{ pl.body }}</p>
        </article>
      </div>
    </section>

    <!-- QUALIFIER -->
    <section class="qualifier">
      <div v-reveal class="qualifier-inner reveal">
        <span class="eyebrow">On your terms</span>
        <h2>The rooms where a mistranslation is catastrophic are the same rooms where a <span class="gradient-text">data leak</span> is catastrophic.</h2>
        <p class="qualifier-lede">So data control rides with the wedge — not as the headline, but as procurement-grade proof.</p>
        <ul class="qualifier-rails">
          <li>
            <UIcon name="i-lucide-building-2" class="rail-icon" />
            <div>
              <strong>EU residency.</strong>
              <span>OVH Roubaix / Paris for GDPR- and Schrems-sensitive customers.</span>
            </div>
          </li>
          <li>
            <UIcon name="i-lucide-globe" class="rail-icon" />
            <div>
              <strong>UAE-neutral jurisdiction.</strong>
              <span>Out of US legal reach by design — a property of jurisdiction, not just architecture.</span>
            </div>
          </li>
          <li>
            <UIcon name="i-lucide-server" class="rail-icon" />
            <div>
              <strong>On-premise / air-gapped.</strong>
              <span>For defense, intelligence and ultra-regulated pharma. Your hardware, your network, your keys.</span>
            </div>
          </li>
        </ul>
        <p class="qualifier-foot">
          <ULink :to="`${productUrl}/security`" external class="qualifier-link">Read the security &amp; jurisdiction brief →</ULink>
        </p>
      </div>
    </section>

    <!-- USE CASES -->
    <section class="cases">
      <div v-reveal class="cases-header reveal">
        <span class="eyebrow">The rooms we're built for</span>
        <h2>High-stakes, regulated, cross-border.</h2>
        <p class="cases-lede">
          Not stand-ups. Not casual sales calls. The conversations where a mistranslation is a liability and the data must stay under your control.
        </p>
      </div>
      <div class="cases-grid">
        <article v-for="c in useCases" :key="c.title" v-reveal class="case reveal" :data-tone="c.tone">
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
        <h2>Your language. Your data. Your terms.</h2>
        <p>See the live demo, then open the public benchmark. Decide on numbers, not on a sales deck.</p>
        <div class="cta-row cta-row-band">
          <UButton :to="productUrl" external size="xl" color="primary" trailing-icon="i-lucide-volume-2" class="btn-primary-grad btn-lg">
            Try the live demo
          </UButton>
          <UButton :to="`${productUrl}/benchmark`" external size="xl" color="neutral" variant="subtle" trailing-icon="i-lucide-gauge" class="btn-lg">
            See the public benchmark
          </UButton>
        </div>
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
  margin: 0 0 1.5rem;
}
.trust-strip {
  margin: 0 auto 2.25rem;
  max-width: 720px;
  font-size: 0.82rem;
  letter-spacing: 0.02em;
  color: var(--ink-soft);
  opacity: 0.85;
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

/* ---------- PROBLEM ---------- */
.problem {
  max-width: 1100px;
  margin: 5rem auto 4rem;
  padding: 0 1.5rem;
}
.problem-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 3rem;
}
.problem h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
  font-weight: 800;
  line-height: 1.15;
}
.problem-lede {
  color: var(--ink-soft);
  font-size: 1.05rem;
  margin: 0;
  line-height: 1.6;
}
.problem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}
.problem-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-left: 3px solid var(--accent);
  border-radius: 16px;
  padding: 1.75rem 1.5rem;
}
.problem-card h3 {
  margin: 0 0 0.6rem;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.problem-card p {
  color: var(--ink-soft);
  font-size: 0.96rem;
  line-height: 1.55;
  margin: 0;
}
.disqualifier {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--ink);
  padding: 1.5rem 1.75rem;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(221, 145, 68, 0.08), rgba(255, 94, 138, 0.08));
  border: 1px solid var(--line);
}
.disqualifier em {
  font-style: italic;
  color: var(--accent);
  font-weight: 600;
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

/* ---------- VALUES / PILLARS ---------- */
.values {
  max-width: 1100px;
  margin: 5rem auto 4rem;
  padding: 0 1.5rem;
}
.pillars-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 3rem;
}
.values h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
  font-weight: 800;
  line-height: 1.15;
}
.pillars-lede {
  color: var(--ink-soft);
  font-size: 1.05rem;
  margin: 0;
  line-height: 1.6;
}
.pillars-grid {
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
  font-size: 1.25rem;
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

/* ---------- QUALIFIER ---------- */
.qualifier {
  max-width: 1100px;
  margin: 4rem auto;
  padding: 0 1.5rem;
}
.qualifier-inner {
  background: linear-gradient(160deg, #fbfaf6 0%, #ffffff 100%);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  text-align: center;
}
.qualifier h2 {
  font-size: clamp(1.6rem, 2.6vw, 2.2rem);
  letter-spacing: -0.02em;
  margin: 0.6rem auto 1rem;
  max-width: 760px;
  font-weight: 800;
  line-height: 1.2;
}
.qualifier-lede {
  color: var(--ink-soft);
  font-size: 1rem;
  margin: 0 auto 2.5rem;
  max-width: 620px;
}
.qualifier-rails {
  list-style: none;
  padding: 0;
  margin: 0 auto 2rem;
  max-width: 880px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  text-align: left;
}
.qualifier-rails li {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 1rem 1.1rem;
}
.qualifier-rails .rail-icon {
  font-size: 1.4rem;
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 2px;
}
.qualifier-rails strong {
  display: block;
  font-weight: 700;
  font-size: 0.98rem;
  margin-bottom: 0.2rem;
}
.qualifier-rails span {
  color: var(--ink-soft);
  font-size: 0.88rem;
  line-height: 1.45;
}
.qualifier-foot {
  margin: 0;
}
.qualifier-link {
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;
}
.qualifier-link:hover {
  text-decoration: underline;
}

/* ---------- USE CASES ---------- */
.cases {
  max-width: 1100px;
  margin: 5rem auto 4rem;
  padding: 0 1.5rem;
}
.cases-header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 2.5rem;
}
.cases-lede {
  color: var(--ink-soft);
  font-size: 1rem;
  margin: 0.8rem 0 0;
  line-height: 1.55;
}
.cta-row-band {
  margin: 0;
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
  .reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

/* ---------- SCROLL REVEAL ---------- */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}
/* Stagger inside grids */
.problem-grid .reveal:nth-child(2) {
  transition-delay: 0.08s;
}
.problem-grid .reveal:nth-child(3) {
  transition-delay: 0.16s;
}
.pillars-grid .reveal:nth-child(2) {
  transition-delay: 0.08s;
}
.pillars-grid .reveal:nth-child(3) {
  transition-delay: 0.16s;
}
.cases-grid .reveal:nth-child(2) {
  transition-delay: 0.08s;
}
.cases-grid .reveal:nth-child(3) {
  transition-delay: 0.16s;
}
.cases-grid .reveal:nth-child(4) {
  transition-delay: 0.24s;
}

/* ---------- HOVER LIFT ---------- */
.problem-card,
.value,
.case,
.qualifier-rails li {
  transition:
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.25s ease;
}
.problem-card:hover,
.value:hover,
.case:hover {
  transform: translateY(-4px);
  box-shadow:
    0 18px 40px -22px rgba(28, 28, 28, 0.18),
    0 2px 6px -2px rgba(28, 28, 28, 0.06);
  border-color: rgba(221, 145, 68, 0.35);
}
.qualifier-rails li:hover {
  transform: translateY(-2px);
  border-color: rgba(221, 145, 68, 0.35);
}

/* ---------- BIGGER H2 ---------- */
.problem h2,
.values h2,
.qualifier h2,
.cases h2,
.preview h2,
.cta-band h2 {
  font-size: clamp(2rem, 3.6vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
  font-weight: 800;
}
.eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
  display: inline-block;
  margin-bottom: 0.75rem;
}
</style>
