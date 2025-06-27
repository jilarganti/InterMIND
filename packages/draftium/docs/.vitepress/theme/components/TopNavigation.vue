<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { useRouter } from "vitepress"
import { Icon } from "@iconify/vue"

const router = useRouter()
const time = ref("")
const weekday = ref("")
const day = ref("")
const month = ref("")

let interval: ReturnType<typeof setInterval>

const goTo = (path: string) => {
  router.go(path)
}

const updateTime = () => {
  const now = new Date()
  weekday.value = now.toLocaleDateString("ru-RU", { weekday: "short" })
  day.value = now.getDate().toString()
  month.value = now.toLocaleDateString("ru-RU", { month: "short" })
  time.value = now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
}

onMounted(() => {
  updateTime()
  interval = setInterval(updateTime, 60000)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<template>
  <div class="top-bar">
    <div class="logo-container">
      <button @click="goTo('/')" class="logo-btn">
        <img src="/logo.svg" alt="Logo" class="top-logo" />
      </button>
    </div>

    <div class="time-display">{{ time }} • {{ weekday }}, {{ day }} {{ month }}</div>

    <div class="right-icons">
      <button @click="goTo('/product/guide/getting-started')" title="Support" class="nav-button">
        <Icon icon="mdi:help-circle-outline" />
      </button>
      <button @click="goTo('/resources/help')" title="Report a problem" class="nav-button">
        <Icon icon="mdi:message-outline" />
      </button>
      <button @click="goTo('/account/screens/settings')" title="Settings" class="nav-button">
        <Icon icon="mdi:cog-outline" />
      </button>
      <button @click="goTo('/account/upgrade')" title="Upgrade plan" class="nav-button upgrade-btn">
        <Icon icon="mdi:trending-up" />
        <span class="upgrade-text">Upgrade</span>
      </button>
      <button @click="goTo('/account/screens/profile')" title="Profile" class="nav-button">
        <Icon icon="mdi:account-outline" />
      </button>
      <button @click="goTo('/account')" title="Account" class="nav-button account-btn">
        <Icon icon="mdi:account-circle-outline" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-size: 13px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-border);
  z-index: 100;
  backdrop-filter: blur(8px);
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.logo-btn:hover {
  background: var(--vp-c-bg-soft);
}

.top-logo {
  height: 28px;
  width: auto;
  display: block;
}

.time-display {
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 13px;
  user-select: none;
}

.right-icons {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
  border-radius: 6px;
  font-size: 16px;
  position: relative;
}

.nav-button:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.upgrade-btn {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.upgrade-btn:hover {
  background: var(--vp-c-brand-1);
  color: white;
}

.upgrade-text {
  font-size: 12px;
  font-weight: 500;
}

.account-btn {
  margin-left: 8px;
  padding-left: 12px;
  border-left: 1px solid var(--vp-c-border);
}

.account-btn:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

/* Tooltip improvements */
.nav-button[title]:hover::after {
  content: attr(title);
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  white-space: nowrap;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  pointer-events: none;
}

.nav-button[title]:hover::before {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid var(--vp-c-bg-elv);
  z-index: 1000;
  pointer-events: none;
}

@media (max-width: 768px) {
  .time-display {
    display: none;
  }

  .right-icons {
    gap: 2px;
  }

  .nav-button {
    padding: 6px;
  }

  .upgrade-text {
    display: none;
  }

  .account-btn {
    margin-left: 4px;
    padding-left: 6px;
  }
}

@media (max-width: 480px) {
  .top-bar {
    padding: 0 12px;
  }

  .nav-button {
    padding: 4px;
  }
}
</style>
