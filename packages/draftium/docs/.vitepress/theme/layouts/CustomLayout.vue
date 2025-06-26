<template>
  <div class="meet-wrapper">
    <TopNavigation />

    <!-- Mobile menu button -->
    <button v-if="hasSidebar" @click="toggleSidebar" class="mobile-menu-btn" :class="{ active: sidebarOpen }">
      <Icon icon="mdi:menu" />
      <span>Menu</span>
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
                <a :href="item.link" class="sidebar-link" @click="closeSidebar">{{ item.text }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content" :class="{ 'with-sidebar': hasSidebar }">
        <Content v-if="page.isNotFound" />
        <template v-else>
          <h1 v-if="frontmatter.title" class="headline">{{ frontmatter.title }}</h1>
          <h3 v-if="frontmatter.description" class="subtext">{{ frontmatter.description }}</h3>

          <!-- Custom actions for home page -->
          <div v-if="frontmatter.layout === 'home'" class="actions">
            <button class="primary-btn">📹 Новая встреча</button>
            <input class="code-input" placeholder="Введите код или псевдоним" />
            <button class="join-btn">Присоединиться</button>
          </div>

          <!-- Markdown content -->
          <div class="content-wrapper">
            <Content />
          </div>

          <!-- Custom illustration for home page -->
          <div v-if="frontmatter.layout === 'home'" class="illustration">
            <p class="invite-title">Ссылка для приглашения</p>
            <p class="invite-desc">
              Нажмите <strong>Новая встреча</strong>, чтобы получить ссылку и<br />
              отправить её тем, кого хотите пригласить.
            </p>
          </div>

          <a v-if="frontmatter.learnMore" :href="frontmatter.learnMore" target="_blank" class="learn-more"> Learn more about InterMIND </a>
        </template>
      </main>
    </div>

    <!-- Chat Footer -->
    <footer class="chat-footer" :class="{ 'with-sidebar': hasSidebar }">
      <input class="chat-input" type="text" placeholder="Напишите сообщение…" />
      <button class="chat-send">➤</button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress"
import { computed, ref } from "vue"
import TopNavigation from "../components/TopNavigation.vue"
import { Icon } from "@iconify/vue"

const { page, frontmatter, theme } = useData()

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
</script>

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

/* Mobile menu button */
.mobile-menu-btn {
  display: none;
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  height: 48px;
  background: var(--vp-c-bg);
  border: none;
  border-bottom: 1px solid var(--vp-c-border);
  padding: 0 16px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  cursor: pointer;
  z-index: 30;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.mobile-menu-btn:hover {
  background: var(--vp-c-bg-soft);
}

.mobile-menu-btn.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
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
  padding: 6px 12px;
  font-size: 14px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  border-radius: 6px;
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

.content-wrapper {
  max-width: 768px;
  width: 100%;
  text-align: left;
  margin: 24px 0;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.with-sidebar .actions {
  justify-content: flex-start;
}

.primary-btn {
  background-color: var(--vp-c-brand-1);
  color: white;
  padding: 10px 18px;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.primary-btn:hover {
  background-color: var(--vp-c-brand-2);
}

.code-input {
  padding: 10px 14px;
  border: 1px solid var(--vp-c-border);
  border-radius: 20px;
  font-size: 14px;
  width: 230px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.code-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.join-btn {
  background: none;
  border: none;
  font-size: 14px;
  color: var(--vp-c-brand-1);
  cursor: pointer;
}

.join-btn:hover {
  text-decoration: underline;
}

.illustration img {
  width: 140px;
  height: auto;
  margin-bottom: 12px;
}

.invite-title {
  font-size: 18px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.invite-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
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
  .meet-wrapper {
    padding-top: 96px; /* Место для топ-навигации + кнопка меню */
  }

  .mobile-menu-btn {
    display: flex;
  }

  .sidebar-overlay {
    display: block;
  }

  .sidebar {
    transform: translateX(-100%);
    top: 96px; /* Под топ-навигацией и кнопкой меню */
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

  .with-sidebar .actions {
    justify-content: flex-start;
  }

  .chat-footer.with-sidebar {
    left: 0; /* На мобильных возвращаем на всю ширину */
  }
}
</style>
