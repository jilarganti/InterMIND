<script setup lang="ts">
const { t } = useI18n({ useScope: "global" })
const localePath = useLocalePath()

const columns = computed(() => [
  {
    title: t("footer.resourcesTitle"),
    links: [
      { text: t("footer.blog"), href: localePath("/blog") },
      { text: t("footer.globalLanguageAccess"), href: localePath("/blog/global-language-access-compliance") },
      { text: t("footer.brandAssets"), href: localePath("/brand-assets") },
      { text: t("footer.serviceStatus"), href: "https://intermind.checkly-dashboards.com/", external: true },
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
        {{ t("footer.copyright", { year }) }} · <a :href="localePath('/legal/privacy')">{{ t("footer.privacyPolicy") }}</a> ·
        <a :href="localePath('/legal/terms')">{{ t("footer.aiLegalGuide") }}</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Two-tone vCard: footer inverts the page background.
   Light theme → dark footer. Dark theme → light footer. */
.app-footer {
  background: #111827;
  border-top: 1px solid #1f2937;
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
  color: #ffffff;
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
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.95rem;
  line-height: 1.4;
}
.footer-link:hover {
  color: #ffffff;
  text-decoration: underline;
}
.meta {
  border-top: 1px solid #1f2937;
  padding-top: 1rem;
  font-size: 0.85rem;
  color: #6b7280;
}
.meta a {
  color: #6b7280;
}
.meta a:hover {
  color: #ffffff;
  text-decoration: underline;
}

:where(html.dark) .app-footer {
  background: #fafafa;
  border-top-color: #ececec;
}
:where(html.dark) .column h4 {
  color: #1c1c1c;
}
:where(html.dark) .footer-link {
  color: #4a4a4a;
}
:where(html.dark) .footer-link:hover {
  color: #1c1c1c;
}
:where(html.dark) .meta {
  border-top-color: #ececec;
  color: #777;
}
:where(html.dark) .meta a {
  color: #777;
}
:where(html.dark) .meta a:hover {
  color: #1c1c1c;
}
</style>
