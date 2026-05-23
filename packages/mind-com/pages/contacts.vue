<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: "Contact InterMIND",
  meta: [
    {
      name: "description",
      content:
        "Want to partner with InterMind, invest, or reach our executive team? Use this form for business inquiries, media requests, or legal matters.",
    },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/contacts` }],
})

const services = [
  "Strategic partnership opportunity",
  "Investment or funding discussion",
  "Enterprise solution inquiry",
  "Media & press request",
  "Legal or compliance matter",
  "Security concern or report",
  "Business development proposal",
  "General business inquiry",
]
</script>

<template>
  <div class="content">
    <h1>🤝 Want to Reach InterMind? Let's Connect.</h1>
    <p class="lede">
      Use this form to contact our company team directly — for partnerships, investments, media, compliance, or other business-related matters. We'll make sure your message reaches the right person.
    </p>

    <ContactForm
      :services="services"
      category-label="What is your reason for contacting us? *"
      category-placeholder="Choose your topic..."
      message-label="Message *"
      message-placeholder="Share any relevant background, timelines, or context you'd like us to consider."
      button-text="Send your message"
    />

    <blockquote>
      <p><strong>Need product-related help?</strong> Visit our <a href="/help">Support Page</a> for fast answers and assistance from the InterMind team.</p>
      <p><strong>Want to learn more about us?</strong> Check out our <a href="/about">about page</a>, meet <a href="/team">the team</a>, or explore <a href="/careers">career opportunities</a>.</p>
    </blockquote>
  </div>
</template>

<style scoped>
.content {
  max-width: 760px;
  margin: 0 auto;
  padding: 2rem;
}
h1 {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  margin: 1rem 0 1rem;
}
.lede {
  color: #555;
  margin-bottom: 2rem;
}
blockquote {
  border-left: 3px solid #ececea;
  padding-left: 1rem;
  margin: 2rem 0;
  color: #555;
}
blockquote a {
  color: #dd9144;
}
</style>
