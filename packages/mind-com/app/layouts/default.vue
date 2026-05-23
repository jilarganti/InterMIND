<script setup lang="ts">
const config = useRuntimeConfig()
const productUrl = config.public.productUrl
const signInUrl = config.public.signInUrl
</script>

<template>
  <div class="page">
    <header class="site-header">
      <div class="site-header-inner">
        <a href="/" class="brand" aria-label="InterMIND home">
          <img src="/logo.svg" alt="" class="brand-logo" width="28" height="28" />
          <span class="brand-mark">InterMIND</span>
        </a>
        <nav class="nav">
          <UButton to="/blog" variant="ghost" color="neutral" size="md" class="nav-link-btn">Blog</UButton>
          <UButton :to="signInUrl" external variant="solid" color="neutral" size="md" class="nav-cta-btn">Sign in</UButton>
          <UButton :to="productUrl" external color="primary" size="md" trailing-icon="i-lucide-arrow-right" class="nav-cta-btn nav-cta-btn-primary">
            New version
          </UButton>
        </nav>
      </div>
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
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(250, 250, 247, 0.7);
  backdrop-filter: saturate(160%) blur(14px);
  -webkit-backdrop-filter: saturate(160%) blur(14px);
  border-bottom: 1px solid rgba(28, 28, 28, 0.06);
}
.site-header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.5rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
  color: inherit;
}
.brand-glyph {
  width: 22px;
  height: 22px;
  border-radius: 7px;
  background: linear-gradient(135deg, #dd9144 0%, #ff5e8a 55%, #6c8cff 100%);
  box-shadow:
    0 4px 12px -4px rgba(221, 145, 68, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}
.brand-logo {
  width: 28px;
  height: 28px;
  display: block;
  filter: drop-shadow(0 2px 6px rgba(221, 145, 68, 0.3));
}
.brand-mark {
  font-weight: 700;
  letter-spacing: 0.01em;
  font-size: 1.05rem;
}
.nav {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.95rem;
}
:deep(.nav-link-btn) {
  color: var(--ink, #1c1c1c) !important;
  border-radius: 999px !important;
}
:deep(.nav-cta-btn) {
  border-radius: 999px !important;
  font-weight: 600;
  transition:
    transform 0.15s ease,
    box-shadow 0.2s ease;
}
:deep(.nav-cta-btn:hover) {
  transform: translateY(-1px);
}
:deep(.nav-cta-btn-primary) {
  background: linear-gradient(135deg, #dd9144 0%, #e7642f 100%) !important;
  color: #fff !important;
  box-shadow: 0 8px 22px -8px rgba(221, 145, 68, 0.7);
}
:deep(.nav-cta-btn-primary:hover) {
  box-shadow: 0 12px 26px -8px rgba(221, 145, 68, 0.8);
}
.site-main {
  flex: 1;
  width: 100%;
}
</style>
