<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const productUrl = config.public.productUrl

const columns = computed(() => [
  {
    title: t("footer.supportTitle"),
    links: [
      { text: t("footer.getSupport"), href: localePath("/help") },
      { text: t("footer.privacyPolicy"), href: localePath("/legal/privacy") },
      { text: t("footer.aiLegalGuide"), href: localePath("/legal/terms") },
      { text: t("footer.serviceStatus"), href: "https://status.mind.com/", external: true },
    ],
  },
  {
    title: t("footer.resourcesTitle"),
    links: [
      { text: t("footer.blog"), href: localePath("/blog") },
      { text: t("footer.globalLanguageAccess"), href: localePath("/blog/global-language-access-compliance") },
      { text: t("footer.brandAssets"), href: localePath("/brand-assets") },
      { text: t("footer.aiApiDocs"), href: "/llms-full.txt", external: true },
    ],
  },
  {
    title: t("footer.companyTitle"),
    links: [
      { text: t("footer.about"), href: localePath("/about") },
      { text: t("footer.team"), href: localePath("/team") },
      { text: t("footer.careers"), href: localePath("/careers") },
      { text: t("footer.contacts"), href: localePath("/contacts") },
    ],
  },
])

const year = new Date().getFullYear()
const productUrlBare = productUrl.replace(/^https?:\/\//, "")
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="columns">
        <div v-for="col in columns" :key="col.title" class="column">
          <h4>{{ col.title }}</h4>
          <ul>
            <li v-for="link in col.links" :key="link.href">
              <a :href="link.href" :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noopener' : undefined" class="footer-link">
                {{ link.text }}
                <span v-if="link.external" aria-hidden="true"> ↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="meta">
        {{ t("footer.copyright", { year }) }} ·
        <a :href="productUrl">{{ t("footer.newVersionLabel", { url: productUrlBare }) }}</a>
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
