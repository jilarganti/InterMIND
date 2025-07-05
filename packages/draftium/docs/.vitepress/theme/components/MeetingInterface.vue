<script setup lang="ts">
import { ref } from "vue"

// Импорт вашего компонента кнопки
// import Button from './Button.vue'

interface Props {
  meetingId?: string
  scheduleUrl?: string
  joinUrl?: string
  hostUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  meetingId: "685 782 7369",
  scheduleUrl: "#schedule",
  joinUrl: "#join",
  hostUrl: "#host",
})

const copied = ref(false)

const copyMeetingId = async () => {
  try {
    await navigator.clipboard.writeText(props.meetingId.replace(/\s/g, ""))
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error("Не удалось скопировать:", err)
  }
}
</script>

<template>
  <div class="meeting-panel">
    <div class="buttons-container">
      <div class="button-item">
        <div class="button-icon schedule-icon">📅</div>
        <Button :href="scheduleUrl" text="Schedule" />
      </div>

      <div class="button-item">
        <div class="button-icon join-icon">➕</div>
        <Button :href="joinUrl" text="Join" />
      </div>

      <div class="button-item">
        <div class="button-icon host-icon">📹</div>
        <Button :href="hostUrl" text="Host" />
      </div>
    </div>

    <div class="meeting-id-section">
      <h3>Personal Meeting ID</h3>
      <div class="meeting-id-container">
        <span class="meeting-id">{{ meetingId }}</span>
        <button @click="copyMeetingId" class="copy-button" :title="copied ? 'Скопировано!' : 'Копировать ID'">
          {{ copied ? "✓" : "📋" }}
        </button>
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

.meeting-id-section h3 {
  color: var(--vp-c-text-1);
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
}

.meeting-id-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.meeting-id {
  font-size: 18px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  letter-spacing: 1px;
}

.copy-button {
  background: transparent;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.copy-button:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

@media (max-width: 768px) {
  .buttons-container {
    flex-direction: column;
    align-items: center;
  }

  .button-item {
    flex-direction: row;
    gap: 15px;
  }

  .button-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 0;
  }
}
</style>
