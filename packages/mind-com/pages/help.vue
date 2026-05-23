<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: "Get Support — InterMIND",
  meta: [
    {
      name: "description",
      content:
        "Have questions about AI-powered meeting interpretation, multilingual communication, or enterprise onboarding? We're here to help — fast, human, and with no confusion.",
    },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/help` }],
})

const services = [
  "I need help getting started",
  "I want to schedule a demo",
  "I have a technical issue or bug",
  "I need help with meeting integration",
  "I have questions about translation quality",
  "I need assistance with team onboarding",
  "I have billing or subscription questions",
  "I want to explore enterprise features",
  "I want to get Mind API application ID and token without restrictions",
  "General question or feedback",
]
</script>

<template>
  <div class="content">
    <h1>💬 Need Assistance? No delays, no confusion — just answers.</h1>
    <p class="lede">
      Let us know what you're trying to achieve — and we'll help you move forward.<br />
      Fast, focused, and with a real human on the other end.
    </p>

    <ContactForm
      :services="services"
      category-label="What brings you to InterMind today? *"
      category-placeholder="Choose your main reason…"
      message-label="Tell us more *"
      message-placeholder="Anything you'd like to share — goals, context, or technical details."
      button-text="Get expert help now"
    />

    <blockquote>
      <p><em>We usually respond within one business day.</em></p>
      <p><em>Your request will be reviewed by a real human — not a bot.</em></p>
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
  color: #666;
}
blockquote p {
  margin: 0.25rem 0;
}
</style>
