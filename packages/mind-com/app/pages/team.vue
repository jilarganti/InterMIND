<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: "Team — InterMIND",
  meta: [
    {
      name: "description",
      content: "At Mind.com, humans lead, AI amplifies. Together, we blend creativity, code, and understanding to erase language barriers for good.",
    },
  ],
  link: [{ rel: "canonical", href: `${siteUrl}/team` }],
})

const humans = [
  {
    name: "The **Mind.com** Team",
    desc: "Erasing language barriers for good",
    avatarLink: "/logo.svg",
    links: [
      { icon: "mdi:twitter", link: "https://x.com/imindcom" },
      { icon: "mdi:linkedin", link: "https://www.linkedin.com/company/mind" },
    ],
  },
  {
    name: "Windicted",
    country: "Portugal",
    avatarLink: "https://secure.gravatar.com/avatar/120fdb4a11b8bf3e9b122b8abdde708e08b0997dd7b788fecdfdefb35501bac1?s=1600&d=identicon",
    links: [{ icon: "mdi:gitlab", link: "https://gitlab.com/alexander.strikhalev" }],
  },
  {
    name: "Jilarganti",
    desc: "Bringing **new minds** to InterMIND",
    country: "UAE",
    avatarLink: "https://github.com/jilarganti.png",
    links: [
      { icon: "mdi:github", link: "https://github.com/jilarganti" },
      { icon: "mdi:linkedin", link: "https://www.linkedin.com/in/aleksey-korolev" },
    ],
  },
]

const ai = [
  { name: "Claude", desc: "Bringing clarity to conversations", country: "USA", links: [{ link: "https://claude.ai/", label: "claude.ai" }] },
  { name: "Gemini", desc: "Connecting knowledge with intent", country: "USA", links: [{ link: "https://gemini.google.com/", label: "gemini.google.com" }] },
  { name: "ChatGPT", desc: "Interpreting with nuance and memory", country: "USA", links: [{ link: "https://chatgpt.com/", label: "chatgpt.com" }] },
  {
    name: "DeepSeek",
    desc: "Thinking in code and reasoning in context",
    country: "China",
    links: [{ link: "https://chat.deepseek.com/", label: "chat.deepseek.com" }],
  },
]
</script>

<template>
  <div class="content">
    <h1>At Mind.com, humans lead, AI amplifies</h1>
    <p class="lede">
      Together, we blend creativity, code, and understanding to erase language barriers for good. Learn more <a href="/about">about our mission</a>.
    </p>

    <h2>Human Team</h2>
    <TeamMembersGrid :members="humans" />

    <h2>AI Team</h2>
    <p class="note">
      AI team members are not human, but they are integral to our operations. They assist in various tasks, from coding to research, and help us break down
      language barriers.
    </p>
    <TeamMembersGrid :members="ai" />

    <p><strong>Want to join us?</strong> Check out our <a href="/careers">career opportunities</a>.</p>
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
  margin: 1rem 0 1rem;
}
h2 {
  font-size: 1.4rem;
  margin: 2.5rem 0 1rem;
  font-weight: 600;
}
.lede {
  color: #555;
  margin: 0 0 1rem;
}
.note {
  font-size: 0.9rem;
  color: #777;
  margin: 0 0 1rem;
}
a {
  color: #dd9144;
}
</style>
