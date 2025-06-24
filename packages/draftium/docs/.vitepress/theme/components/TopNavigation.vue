<template>
  <div class="top-bar">
    <div class="logo-container">
      <button @click="goTo('/')" class="logo-btn">
        <img src="/logo.svg" alt="Logo" class="top-logo" />
      </button>
    </div>

    <div class="time-display">{{ time }} • {{ weekday }}, {{ day }} {{ month }}</div>

    <div class="right-icons">
      <button @click="goTo('/product/guide/getting-started')" title="Support">❔</button>
      <button @click="goTo('/resources/help')" title="Report a problem">💬</button>
      <button @click="goTo('/account/screens/settings')" title="Settings">⚙️</button>
      <button @click="goTo('/account/upgrade')" title="Upgrade plan">📈</button>
      <button @click="goTo('/account/screens/profile')" title="Profile">👤</button>
      <button @click="goTo('/account')" title="Account">👦🏻</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { useRouter } from "vitepress"

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

.top-logo {
  height: 28px;
  width: auto;
  display: block;
}

.time-display {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.right-icons {
  display: flex;
  align-items: center;
}

.logo-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

.right-icons button {
  background: none;
  border: none;
  text-decoration: none;
  margin-left: 12px;
  cursor: pointer;
  font-size: 16px;
  color: var(--vp-c-text-2);
  transition: color 0.2s;
  padding: 4px;
  border-radius: 4px;
}

.right-icons button:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

@media (max-width: 768px) {
  .time-display {
    display: none;
  }

  .right-icons button {
    margin-left: 8px;
  }
}
</style>
