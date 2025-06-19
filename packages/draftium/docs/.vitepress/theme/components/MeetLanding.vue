<template>
  <div class="meet-wrapper">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="logo-container">
        <a href="/">
          <img src="/logo.svg" alt="Logo" class="top-logo" />
        </a>
      </div>
      <div class="time-display">{{ time }} • {{ weekday }}, {{ day }} {{ month }}</div>
      <div class="right-icons">
        <a href="/product/guide/getting-started" title="Support">❔</a>
        <a href="/resources/help" title="Report a problem">💬</a>
        <a href="/account/screens/settings" title="Settings">⚙️</a>
        <a href="/account/upgrade" title="Upgrade plan">📈</a>
        <a href="/account" title="Account">👦🏻</a>
      </div>
    </div>

    <!-- Main Section -->
    <main class="main-content">
      <h1 class="headline">Meet in Any Language</h1>

      <h3 class="subtext">Live speech translation in video calls — no delays, no lost deals, no language barriers.</h3>

      <div class="actions">
        <button class="primary-btn">📹 Новая встреча</button>
        <input class="code-input" placeholder="Введите код или псевдоним" />
        <button class="join-btn">Присоединиться</button>
      </div>

      <div class="illustration">
        <!-- <img src="/logo.svg" alt="Иллюстрация" /> -->
        <p class="invite-title">Ссылка для приглашения</p>
        <p class="invite-desc">
          Нажмите <strong>Новая встреча</strong>, чтобы получить ссылку и<br />
          отправить ёё тем, кого хотите пригласить.
        </p>
      </div>

      <a href="/product/guide/getting-started" target="_blank" class="learn-more">Learn more about InterMIND</a>
    </main>

    <!-- Chat Footer -->
    <footer class="chat-footer">
      <input class="chat-input" type="text" placeholder="Напишите сообщение…" />
      <button class="chat-send">➤</button>
    </footer>
  </div>
</template>

<script setup lang="ts">
const now = new Date()
const weekday = now.toLocaleDateString("ru-RU", { weekday: "short" })
const day = now.getDate()
const month = now.toLocaleDateString("ru-RU", { month: "short" })
const time = now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
</script>

<style scoped>
.meet-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  position: relative;
  padding-top: 48px;
  padding-bottom: 64px;
}

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
  background: white;
  border-bottom: 1px solid #eee;
  z-index: 10;
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
  color: var(--vp-c-main-1);
}

.right-icons a {
  background: none;
  text-decoration: none;
  margin-left: 12px;
  cursor: pointer;
  font-size: 16px;
  color: var(--vp-c-main-2);
}

.right-icons a:hover {
  color: var(--vp-c-main-3);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 24px;
  text-align: center;
}

.headline {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.4;
  color: var(--vp-c-main-2);
}

.subtext {
  font-size: 16px;
  color: var(--vp-c-main-1);
  margin-bottom: 24px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.primary-btn {
  background-color: var(--vp-hl-color);
  color: white;
  padding: 10px 18px;
  font-size: 14px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.primary-btn:hover {
  background-color: color-mix(in srgb, var(--vp-hl-color) 85%, black);
}

.code-input {
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 14px;
  width: 230px;
}

.join-btn {
  background: none;
  border: none;
  font-size: 14px;
  color: var(--vp-hl-color);
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
  color: var(--vp-c-main-2);
}

.invite-desc {
  font-size: 14px;
  color: var(--vp-c-main-1);
}

.learn-more {
  margin-top: 32px;
  font-size: 13px;
  color: var(--vp-hl-color);
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
  background: var(--vp-c-gray-bg);
  border-top: 1px solid var(--vp-c-gray-border);
  z-index: 10;
}

.chat-input {
  flex: 1;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 18px;
  padding: 0 14px;
  font-size: 14px;
  outline: none;
}

.chat-send {
  background: none;
  border: none;
  font-size: 20px;
  margin-left: 8px;
  cursor: pointer;
  color: var(--vp-hl-color);
}
</style>
