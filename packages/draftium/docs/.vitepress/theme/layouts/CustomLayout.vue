<script setup lang="ts">
import { useData, useRouter } from "vitepress"
import { computed, ref } from "vue"
import TopNavigation from "../components/TopNavigation.vue"
import { Icon } from "@iconify/vue"

const { page, theme } = useData()
const router = useRouter()

// Состояние сайдбара
const sidebarOpen = ref(false)

// Получаем данные сайдбара для текущей страницы
const sidebarItems = computed(() => {
  const { sidebar } = theme.value
  if (!sidebar) return []

  const currentPath = page.value.relativePath

  // Ищем подходящую конфигурацию sidebar
  for (const key in sidebar) {
    const normalizedKey = key.replace(/^\//, "").replace(/\/$/, "")
    if (currentPath.startsWith(normalizedKey)) {
      const config = sidebar[key]
      return config.items || []
    }
  }

  return []
})

const hasSidebar = computed(() => sidebarItems.value.length > 0)

// Функции для управления сайдбаром
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}

// Функция для навигации
const navigateTo = (link: string) => {
  router.go(link)
  closeSidebar()
}
</script>

<template>
  <div class="meet-wrapper">
    <TopNavigation />

    <!-- Floating mobile menu button -->
    <button v-if="hasSidebar" @click="toggleSidebar" class="floating-menu-btn" :class="{ active: sidebarOpen }">
      <Icon :icon="sidebarOpen ? 'mdi:close' : 'mdi:menu'" />
    </button>

    <!-- Sidebar overlay for mobile -->
    <div v-if="hasSidebar && sidebarOpen" @click="closeSidebar" class="sidebar-overlay"></div>

    <!-- Layout with sidebar support -->
    <div class="layout-container">
      <!-- Sidebar -->
      <aside v-if="hasSidebar" class="sidebar" :class="{ 'sidebar-open': sidebarOpen }">
        <nav>
          <div v-for="group in sidebarItems" :key="group.text" class="sidebar-group">
            <h3 class="sidebar-title">{{ group.text }}</h3>
            <ul class="sidebar-links">
              <li v-for="item in group.items" :key="item.link">
                <button class="sidebar-link" @click="navigateTo(item.link)">{{ item.text }}</button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content" :class="{ 'with-sidebar': hasSidebar }">
        <!-- Markdown content -->
        <div class="content-wrapper">
          <Content />
        </div>
      </main>
    </div>

    <!-- Chat Footer -->
    <footer class="chat-footer" :class="{ 'with-sidebar': hasSidebar }">
      <input class="chat-input" type="text" placeholder="Напишите сообщение…" />
      <button class="chat-send">➤</button>
    </footer>
  </div>
</template>

<style>
.meet-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: var(--vp-font-family-base);
  position: relative;
  padding-top: 48px;
  padding-bottom: 64px;
}

.layout-container {
  flex: 1;
  display: flex;
  min-height: 0;
}

/* Floating mobile menu button */
.floating-menu-btn {
  display: none;
  position: fixed;
  bottom: 80px; /* Над чат-футером */
  left: 16px;
  width: 56px;
  height: 56px;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 40;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.floating-menu-btn:hover {
  background: var(--vp-c-brand-2);
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.floating-menu-btn.active {
  background: var(--vp-c-red);
  transform: rotate(90deg);
}

/* Sidebar overlay */
.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 25;
}

.sidebar {
  width: 272px;
  flex-shrink: 0;
  background: var(--vp-c-bg-soft);
  border-right: 1px solid var(--vp-c-border);
  padding: 32px 24px 0;
  overflow-y: auto;
  position: fixed;
  top: 48px; /* Высота топ-навигации */
  left: 0;
  bottom: 0; /* До самого низа экрана */
  z-index: 20; /* Выше чат-футера */
  transition: transform 0.3s ease;
}

.sidebar-group {
  margin-bottom: 24px;
}

.sidebar-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px 0;
}

.sidebar-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar-link {
  display: block;
  width: 100%;
  padding: 6px 12px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  border-radius: 6px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
}

.sidebar-link:hover {
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-brand-1);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  text-align: center;
  min-width: 0;
}

.main-content.with-sidebar {
  margin-left: 272px; /* Ширина сайдбара */
  padding: 32px 48px;
  align-items: flex-start;
  text-align: left;
  justify-content: flex-start;
}

.headline {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.subtext {
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin-bottom: 24px;
}

/* Стили для Markdown контента */
.content-wrapper h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
}

.content-wrapper h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 2rem 0 1rem 0;
  color: var(--vp-c-text-1);
}

.content-wrapper h3 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 1.5rem 0 0.75rem 0;
  color: var(--vp-c-text-1);
}

.content-wrapper p {
  margin: 1rem 0;
  color: var(--vp-c-text-1);
  line-height: 1.6;
}

.content-wrapper ul,
.content-wrapper ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
  color: var(--vp-c-text-1);
}

.content-wrapper li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.content-wrapper code {
  background: var(--vp-c-bg-soft);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.875em;
  color: var(--vp-c-text-1);
}

.content-wrapper pre {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
}

.content-wrapper blockquote {
  border-left: 4px solid var(--vp-c-brand-1);
  padding-left: 1rem;
  margin: 1rem 0;
  color: var(--vp-c-text-2);
  font-style: italic;
}

.learn-more {
  margin-top: 32px;
  font-size: 13px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.learn-more:hover {
  text-decoration: underline;
}

.chat-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-border);
  z-index: 10;
  transition: left 0.3s ease;
}

.chat-footer.with-sidebar {
  left: 272px; /* Сдвигаем вправо на ширину сайдбара */
}

.chat-input {
  flex: 1;
  height: 36px;
  border: 1px solid var(--vp-c-border);
  border-radius: 18px;
  padding: 0 14px;
  font-size: 14px;
  outline: none;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.chat-input:focus {
  border-color: var(--vp-c-brand-1);
}

.chat-send {
  background: none;
  border: none;
  font-size: 20px;
  margin-left: 8px;
  cursor: pointer;
  color: var(--vp-c-brand-1);
}

.chat-send:hover {
  color: var(--vp-c-brand-2);
}

/* Responsive design */
@media (max-width: 768px) {
  .floating-menu-btn {
    display: flex;
  }

  .sidebar-overlay {
    display: block;
  }

  .sidebar {
    transform: translateX(-100%);
    top: 48px; /* Только под топ-навигацией */
    z-index: 30;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  }

  .sidebar.sidebar-open {
    transform: translateX(0);
  }

  .layout-container {
    flex-direction: column;
  }

  .main-content.with-sidebar {
    margin-left: 0;
    padding: 24px;
    align-items: flex-start;
    text-align: left;
    justify-content: flex-start;
  }

  .chat-footer.with-sidebar {
    left: 0; /* На мобильных возвращаем на всю ширину */
  }
}
</style>
