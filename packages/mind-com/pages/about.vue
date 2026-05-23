<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const productUrl = config.public.productUrl

useHead({
  title: "About — InterMIND",
  meta: [
    {
      name: "description",
      content:
        "Mind.com builds InterMIND — the world's first platform that makes multilingual conversations feel native. We're eliminating the last barrier to truly global collaboration.",
    },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/about` }],
})
</script>

<template>
  <div class="content prose">
    <h1>Mind.com: Erasing Language Barriers Forever</h1>

    <h2>Who We Are</h2>
    <p>
      <strong>Mind.com</strong> builds <strong>InterMIND</strong> — the world's first platform that makes multilingual conversations feel native. We're eliminating the last barrier to truly global collaboration.
    </p>

    <h2>Our Mission</h2>
    <p><strong>Make language learning obsolete for business.</strong></p>
    <p>Every conversation. Every meeting. Every deal — in any language, understood perfectly.</p>
    <p>No subtitles. No delays. No lost deals because of language.</p>

    <h2>What Is InterMIND?</h2>
    <p><strong>Not translation. Not interpretation. Something entirely new.</strong></p>
    <p>
      InterMIND is <strong>conversational telepathy</strong> — you think in English, they hear perfect Mandarin. They respond in Japanese, you understand every nuance.
    </p>
    <p>
      It preserves <strong>your voice</strong>, <strong>your tone</strong>, <strong>your personality</strong> — in any language. It captures <strong>context</strong>, <strong>cultural subtext</strong>, <strong>business intent</strong>.
    </p>
    <blockquote>Speak naturally. Be understood perfectly. Close more deals.</blockquote>
    <p>
      Try the platform on <a :href="productUrl">{{ productUrl.replace(/^https?:\/\//, "") }}</a>.
    </p>

    <h2>The Technology</h2>
    <p>Where others translate words, we transfer <strong>meaning</strong>.</p>
    <p>Where others add delay, we enable <strong>real-time flow</strong>.</p>
    <p>Where others create barriers, we create <strong>connection</strong>.</p>
    <p><strong>20+ languages. Zero cognitive load. Maximum impact.</strong></p>

    <h2>Our Philosophy</h2>
    <p>Language shouldn't determine who you can work with.</p>
    <p>Geography shouldn't limit your ambitions.</p>
    <p>Culture shouldn't be a competitive disadvantage.</p>
    <blockquote><strong>We're not building a translator. We're building a bridge between worlds.</strong></blockquote>
    <p>The future belongs to those who can collaborate globally — instantly, naturally, intelligently.</p>
    <p><em>— The Mind.com Team</em></p>

    <p>
      <strong>Ready to learn more?</strong> Visit our <a href="/team">team page</a>, explore <a href="/careers">career opportunities</a>, or <a href="/contacts">get in touch</a>.
    </p>
  </div>
</template>

<style scoped>
.content {
  max-width: 760px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.65;
}
h1 {
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  margin: 1rem 0 1.5rem;
  letter-spacing: -0.01em;
}
h2 {
  font-size: 1.4rem;
  margin: 2.5rem 0 1rem;
  font-weight: 600;
}
p {
  margin: 0 0 1rem;
}
blockquote {
  border-left: 3px solid #dd9144;
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: #444;
  font-style: italic;
}
a {
  color: #dd9144;
}
</style>
