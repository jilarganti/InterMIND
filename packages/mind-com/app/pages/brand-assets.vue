<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: "Brand Assets — InterMIND",
  meta: [
    {
      name: "description",
      content: "InterMIND marketing resources and identity guidelines, including logo, content, and trademarks.",
    },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/brand-assets` }],
})

const interpretationImages = [
  { src: "/media-kit/animals-cartoon-3-2.webp", alt: "Simultaneous interpretation" },
  { src: "/media-kit/animals-cartoon-1-1.webp", alt: "Simultaneous interpretation" },
  { src: "/media-kit/5.webp", alt: "Simultaneous interpretation" },
  { src: "/media-kit/6.webp", alt: "Simultaneous interpretation" },
  { src: "/media-kit/animals-5-4.webp", alt: "Simultaneous interpretation" },
]
const searchImages = [
  { src: "/2d.webp", alt: "Search across all your meetings" },
  { src: "/2l.webp", alt: "Search across all your meetings" },
]
</script>

<template>
  <div class="content">
    <h1>Media Kit</h1>
    <p>
      A collection of InterMIND marketing resources and identity guidelines, including our logo, content, and trademarks. To download, right-click an image and
      choose "Save image".
    </p>

    <h2>Metadata</h2>

    <h3>Title</h3>
    <ul>
      <li>Real-time speech translation in video calls.</li>
      <li>Live speech translation in video calls — <strong>no</strong> delays, <strong>no</strong> lost deals, <strong>no</strong> language barriers.</li>
    </ul>

    <h3>Description</h3>
    <ul>
      <li>
        Live speech translation in video calls for <strong>international teams</strong> where language barriers cause
        <strong>delays, lost deals, or costly misunderstandings</strong>.
      </li>
      <li>InterMIND adds real-time speech translation to every video call, so international teams never lose deals, time, or clarity to language barriers.</li>
    </ul>

    <h2>Logo</h2>
    <div class="logo-row">
      <img src="/logo.webp" alt="InterMIND logo" width="300" class="transparency-grid" />
      <img src="/logo.svg" alt="InterMIND logo" width="100" class="transparency-grid" />
    </div>

    <h2>Brand Colors</h2>
    <pre><code>-webkit-linear-gradient(90deg, #994a11 0%, #cc833c 50%, #ffbb66 100%)</code></pre>

    <h2>Promotional Images</h2>

    <h3>Simultaneous interpretation</h3>
    <ImageGrid :images="interpretationImages" />

    <h3>Search across all your meetings</h3>
    <ImageGrid :images="searchImages" />
  </div>
</template>

<style scoped>
.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}
h1 {
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  margin: 1rem 0 1.5rem;
}
h2 {
  font-size: 1.3rem;
  margin: 2rem 0 1rem;
  font-weight: 600;
}
h3 {
  font-size: 1.05rem;
  margin: 1.5rem 0 0.75rem;
  font-weight: 600;
}
ul {
  padding-left: 1.25rem;
}
.logo-row {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 0;
}
.transparency-grid {
  background-color: #ffffff;
  background-image:
    linear-gradient(45deg, #eeeeee 25%, transparent 25%, transparent 75%, #eeeeee 75%),
    linear-gradient(45deg, #eeeeee 25%, transparent 25%, transparent 75%, #eeeeee 75%);
  background-size: 12px 12px;
  background-position:
    0 0,
    6px 6px;
  border-radius: 6px;
}
pre {
  background: #1c1c1c;
  color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.85rem;
}
</style>
