<script setup lang="ts">
interface TeamMemberLink {
  icon?: string
  link: string
  label?: string
}
interface TeamMember {
  name: string
  desc?: string
  country?: string
  avatarLink?: string
  links?: TeamMemberLink[]
}
defineProps<{ members: TeamMember[] }>()
const { t } = useI18n({ useScope: "global" })

function iconLabel(icon?: string): string {
  const fallback = t("teamMembers.defaultLinkLabel")
  if (!icon) return fallback
  const map: Record<string, string> = {
    "mdi:twitter": "𝕏",
    "mdi:linkedin": "LinkedIn",
    "mdi:github": "GitHub",
    "mdi:gitlab": "GitLab",
  }
  return map[icon] ?? fallback
}

function isImageUrl(s?: string): boolean {
  if (!s) return false
  return s.startsWith("/") || s.startsWith("http") || s.endsWith(".svg") || s.endsWith(".png") || s.endsWith(".webp") || s.endsWith(".jpg")
}

function renderMarkdownBold(s: string): string {
  return s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
}
</script>

<template>
  <div class="team-grid">
    <article v-for="m in members" :key="m.name" class="member">
      <div class="avatar">
        <img v-if="isImageUrl(m.avatarLink)" :src="m.avatarLink" :alt="m.name" />
        <span v-else class="avatar-placeholder">{{ m.name.charAt(0) }}</span>
      </div>
      <h3 class="name" v-html="renderMarkdownBold(m.name)" />
      <p v-if="m.desc" class="desc" v-html="renderMarkdownBold(m.desc)" />
      <p v-if="m.country" class="country">{{ m.country }}</p>
      <div v-if="m.links?.length" class="links">
        <a v-for="l in m.links" :key="l.link" :href="l.link" target="_blank" rel="noopener" class="link">
          {{ l.label ?? iconLabel(l.icon) }}
        </a>
      </div>
    </article>
  </div>
</template>

<style scoped>
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}
.member {
  background: #fff;
  border: 1px solid #ececea;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  overflow: hidden;
  background: #f0efea;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.avatar-placeholder {
  font-size: 2rem;
  font-weight: 600;
  color: #999;
}
.name {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
}
.desc {
  font-size: 0.9rem;
  color: #555;
  margin: 0 0 0.5rem;
}
.country {
  font-size: 0.8rem;
  color: #888;
  margin: 0 0 0.75rem;
}
.links {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.link {
  font-size: 0.85rem;
  color: #1c1c1c;
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
</style>
