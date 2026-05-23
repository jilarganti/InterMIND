<script setup lang="ts">
import { ref } from "vue"
import { Icon } from "@iconify/vue"

interface Props {
  scheduleUrl?: string
  joinUrl?: string
  hostUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  scheduleUrl: "#schedule",
  joinUrl: "#join",
  hostUrl: "#host",
})

const searchQuery = ref("")
</script>

<template>
  <div class="meeting-panel">
    <div class="buttons-container">
      <a :href="scheduleUrl" class="button-item">
        <div class="button-icon schedule-icon">
          <Icon icon="mdi:calendar" style="font-size: 24px" />
        </div>
        <span class="button-text">Schedule</span>
      </a>

      <a :href="joinUrl" class="button-item">
        <div class="button-icon join-icon">
          <Icon icon="mdi:plus" style="font-size: 24px" />
        </div>
        <span class="button-text">Join</span>
      </a>

      <a :href="hostUrl" class="button-item">
        <div class="button-icon host-icon">
          <Icon icon="mdi:video" style="font-size: 24px" />
        </div>
        <span class="button-text">Host</span>
      </a>
    </div>

    <div class="search-section">
      <div class="search-container">
        <Icon icon="mdi:magnify" class="search-icon" />
        <input type="text" placeholder="Поиск..." class="search-input" v-model="searchQuery" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.meeting-panel {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.buttons-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.button-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.button-item:hover {
  transform: translateY(-2px);
}

.button-text {
  color: var(--vp-c-text-1);
  font-weight: 500;
  font-size: 14px;
}

.button-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 8px;
}

.schedule-icon,
.join-icon {
  background: #4285f4;
  color: white;
}

.host-icon {
  background: #ff6b35;
  color: white;
}

.search-section {
  margin-top: 30px;
}

.search-container {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-3);
  font-size: 20px;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 12px 12px 12px 45px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 16px;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

@media (max-width: 768px) {
  .buttons-container {
    flex-direction: column;
    align-items: center;
  }

  .button-item {
    flex-direction: row;
    gap: 15px;
    width: 100%;
    max-width: 200px;
    justify-content: flex-start;
    padding: 10px;
    border-radius: 8px;
  }

  .button-item:hover {
    background: var(--vp-c-bg-soft);
  }

  .button-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 0;
  }
}
</style>
