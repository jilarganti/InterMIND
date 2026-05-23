<script setup lang="ts">
const config = useRuntimeConfig()
const productUrl = config.public.productUrl

const columns = [
  {
    title: "SUPPORT",
    links: [
      { text: "Get Support", href: "/help" },
      { text: "Privacy Policy", href: "/legal/privacy" },
      { text: "AI Legal Guide", href: "/legal/terms" },
      { text: "Service Status", href: "https://status.mind.com/", external: true },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { text: "Blog", href: "/blog" },
      { text: "Global Language Access Compliance", href: "/blog/global-language-access-compliance" },
      { text: "Brand Assets", href: "/brand-assets" },
      { text: "AI API / LLM Docs", href: "/llms-full.txt", external: true },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { text: "About", href: "/about" },
      { text: "Team", href: "/team" },
      { text: "Careers", href: "/careers" },
      { text: "Contacts", href: "/contacts" },
    ],
  },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="columns">
        <div v-for="col in columns" :key="col.title" class="column">
          <h4>{{ col.title }}</h4>
          <ul>
            <li v-for="link in col.links" :key="link.href">
              <a
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener' : undefined"
                class="footer-link"
              >
                {{ link.text }}
                <span v-if="link.external" aria-hidden="true"> ↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="meta">
        © Mind, {{ year }}. ·
        <a :href="productUrl">New version: {{ productUrl.replace(/^https?:\/\//, "") }}</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: #fafafa;
  border-top: 1px solid #ececec;
  padding: 3rem 1.5rem 2rem;
  margin-top: 4rem;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;
}
.column h4 {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #1c1c1c;
  margin: 0 0 1rem;
}
.column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.footer-link {
  color: #4a4a4a;
  text-decoration: none;
  font-size: 0.95rem;
  line-height: 1.4;
}
.footer-link:hover {
  color: #dd9144;
}
.meta {
  border-top: 1px solid #ececec;
  padding-top: 1rem;
  font-size: 0.85rem;
  color: #777;
}
.meta a {
  color: #777;
}
.meta a:hover {
  color: #dd9144;
}
</style>
