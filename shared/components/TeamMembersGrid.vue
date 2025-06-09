<script setup lang="ts">
import { Icon } from "@iconify/vue"

interface SocialLink {
  icon: string | { svg: string }
  link: string
  ariaLabel?: string
}

interface Member {
  name: string
  desc: string
  avatarLink: string
  links?: SocialLink[]
}

const props = defineProps<{
  members: Member[]
}>()

function replace(text: string, className: string, pattern = /\*\*(.*?)\*\*/g): string {
  return text.replace(pattern, `<span class="${className}">$1</span>`)
}
</script>

<template>
  <div class="team-grid">
    <div v-for="(member, index) in members" :key="index" class="team-card">
      <div class="team-avatar">
        <Icon
          v-if="
            typeof member.avatarLink === 'string' &&
            member.avatarLink.includes(':') &&
            !/^https?:\/\//.test(member.avatarLink) &&
            !member.avatarLink.startsWith('/')
          "
          :icon="member.avatarLink"
          style="font-size: 72px"
        />
        <img v-else :src="member.avatarLink" :alt="member.name" />
      </div>
      <div class="team-name" v-html="replace(member.name, 'highlighted-word')"></div>
      <div class="team-desc" v-html="replace(member.desc, 'highlighted-word')"></div>
      <div v-if="member.links && member.links.length" class="team-links">
        <a
          v-for="(link, linkIndex) in member.links"
          :key="linkIndex"
          :href="link.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="link.ariaLabel || member.name"
        >
          <Icon v-if="typeof link.icon === 'string'" :icon="link.icon" style="font-size: 28px" />
          <span v-else v-html="link.icon.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin: 24px auto;
}

.team-card {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 260px;
  height: 260px;
  max-width: 260px;
  max-height: 260px;
  box-sizing: border-box;
}

.team-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 0 0 3px var(--vp-c-bg);
}
.team-avatar img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}

.team-name {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.team-desc {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
  max-width: 240px;
}

.team-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.team-links a {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  transition: color 0.2s ease;
}
.team-links a:hover {
  color: var(--vp-c-brand);
}

:deep(.highlighted-word) {
  color: var(--vp-hl-color);
  font-weight: 500;
}

@media (max-width: 600px) {
  .team-card {
    width: 100vw;
    max-width: 100vw;
    min-width: 0;

    height: auto;
  }
}
</style>
