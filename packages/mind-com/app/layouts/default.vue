<script setup lang="ts">
const config = useRuntimeConfig()
const productUrl = config.public.productUrl
const signInUrl = config.public.signInUrl
</script>

<template>
  <div class="page">
    <header class="site-header">
      <a href="/" class="brand" aria-label="InterMIND home">
        <span class="brand-mark">InterMIND</span>
      </a>
      <nav class="nav">
        <a href="/blog">Blog</a>
        <a :href="signInUrl" class="nav-cta">Sign in</a>
        <a :href="productUrl" class="nav-cta nav-cta-primary">New version</a>
      </nav>
    </header>
    <main class="site-main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #1c1c1c;
  background: #fafaf7;
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    "Segoe UI",
    sans-serif;
  line-height: 1.55;
}
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}
.brand {
  text-decoration: none;
  color: inherit;
}
.brand-mark {
  font-weight: 700;
  letter-spacing: 0.02em;
  font-size: 1.05rem;
}
.nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-size: 0.95rem;
}
.nav a {
  color: #1c1c1c;
  text-decoration: none;
}
.nav a:hover {
  opacity: 0.7;
}
.nav-cta {
  padding: 0.5rem 1rem;
  background: #1c1c1c;
  color: #fff !important;
  border-radius: 999px;
  font-weight: 500;
}
.nav-cta:hover {
  background: #dd9144;
  opacity: 1;
}
.nav-cta-primary {
  background: #dd9144;
}
.nav-cta-primary:hover {
  background: #c87a30;
}
.site-main {
  flex: 1;
  width: 100%;
}
</style>
