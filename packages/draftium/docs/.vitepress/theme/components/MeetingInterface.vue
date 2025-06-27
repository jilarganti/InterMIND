<script setup lang="ts">
// Meeting interface component
</script>

<template>
  <div class="meeting-interface">
    <!-- Custom illustration for meeting page -->
    <div class="illustration">
      <p class="invite-title">Ссылка для приглашения</p>
      <p class="invite-desc">
        Нажмите <strong>Новая встреча</strong>, чтобы получить ссылку и<br />
        отправить её тем, кого хотите пригласить.
      </p>
    </div>

    <!-- Custom actions for meeting page -->
    <div class="actions">
      <button class="primary-btn">📹 Новая встреча</button>
      <input class="code-input" placeholder="Введите код или псевдоним" />
      <button class="join-btn">Присоединиться</button>
    </div>
  </div>
</template>

<style scoped>
.meeting-interface {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  align-items: center;
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

.illustration {
  text-align: center;
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

/* Responsive behavior when used with sidebar */
@media (max-width: 768px) {
  .actions {
    justify-content: center;
  }
}

/* When parent has sidebar class, align actions to start */
.with-sidebar .meeting-interface .actions {
  justify-content: flex-start;
}
</style>
