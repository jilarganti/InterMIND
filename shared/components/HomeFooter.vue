<script setup lang="ts">
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
              <a :href="item.link" class="footer-link" target="_blank" rel="noopener">
                {{ item.text }}
                <span v-if="item.link.startsWith('http')" class="external-indicator">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.home-footer {
  /* background: var(--vp-c-bg-alt); */
  padding: 32px;
  margin-bottom: -7rem; /* Убираем отступ снизу */
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
  min-width: 0; /* Позволяет тексту переноситься */
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

.external-indicator {
  font-size: 0.8em;
  margin-left: 0.25em;
  opacity: 0.7;
}

/* @media (max-width: 768px) {
  .footer-columns {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
} */
</style>
