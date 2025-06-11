<script setup lang="ts">
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue"

defineProps<{
  columns: {
    title: string
    links: { text: string; link: string }[]
  }[]
}>()
</script>

<template>
  <footer class="home-footer">
    <div class="container">
      <div class="footer-columns">
        <div v-for="(column, index) in columns" :key="index" class="footer-column">
          <h4>{{ column.title }}</h4>
          <ul>
            <li v-for="(item, linkIndex) in column.links" :key="linkIndex">
              <VPLink :href="item.link" class="footer-link">
                {{ item.text }}
              </VPLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.home-footer {
  padding: 32px;
  margin-bottom: -7rem;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  border-top: 20px solid var(--vp-c-bg-soft);
}

.container {
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.footer-column {
  min-width: 0;
}

h4 {
  margin-bottom: 1em;
  font-weight: 600;
  font-size: 1.1em;
  color: var(--vp-c-text-1);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: var(--vp-c-text-2);
  font-size: 0.95em;
  text-decoration: none;
  display: inline-block;
  margin-bottom: em;
}
</style>
