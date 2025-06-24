<template>
  <div class="meet-wrapper">
    <TopNavigation />

    <!-- Main Content -->
    <main class="main-content">
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

    <!-- Chat Footer -->
    <footer class="chat-footer">
      <input class="chat-input" type="text" placeholder="Напишите сообщение…" />
      <button class="chat-send">➤</button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress"
import TopNavigation from "../components/TopNavigation.vue"

const { page, frontmatter } = useData()
</script>

<style scoped>
.meet-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: var(--vp-font-family-base);
  position: relative;
  padding-top: 48px;
  padding-bottom: 64px;
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
</style>
