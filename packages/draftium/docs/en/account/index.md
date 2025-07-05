---
layout: AccountLayout
---

<script setup lang="ts">
import MeetingInterface from "../../.vitepress/theme/components/MeetingInterface.vue"
</script>

# Account

<MeetingInterface />

<TeamMembersGrid :members="[
  {
    name: 'Jilarganti',
    desc: '**Bringing** new minds to InterMIND, UAE',
    avatarLink: 'https://github.com/jilarganti.png',
    links: [
      { icon: 'mdi:github', link: 'https://github.com/jilarganti' },
      { icon: 'mdi:linkedin', link: 'https://www.linkedin.com/in/aleksey-korolev/' }
    ]
  },
  {
    name: 'Windicted',
    desc: '**Turning** users into believers, Portugal',
    avatarLink: 'https://secure.gravatar.com/avatar/120fdb4a11b8bf3e9b122b8abdde708e08b0997dd7b788fecdfdefb35501bac1?s=1600&d=identicon',
    links: [
      { icon: 'mdi:gitlab', link: 'https://gitlab.com/alexander.strikhalev' }
    ]
  },
  {
    name: 'Andre',
    desc: '**Keeping** minds connected, Russia',
    avatarLink: 'https://gitlab.com/uploads/-/system/user/avatar/2413541/avatar.png?width=800',
    links: [
      { icon: 'mdi:gitlab', link: 'https://gitlab.com/andrey.semashev' }
    ]
  },
]" />

<div class="feature-cards">

<FeatureCards :features="[
    {
        title: '**Sign up for free**',
    details: 'Get started in seconds — no credit card needed.',
    icon: {
        light: '/signUp.png',
      dark: '/signUp.png',
    }
  },
  {
      title: '**Start a meeting**',
    details: 'Create a meeting or schedule in calendar. No downloads or installs required.',
    icon: {
        light: '/start.png',
      dark: '/start.png',
    }
  },
  {
      title: '**Invite your guests**',
    details: 'Share a link — your guest just clicks and joins. No language settings required.',
    link: '/uae-business/company-registration/accounting-legal',
    icon: {
        light: '/invite.png',
      dark: '/invite.png',
    }
  },
]" />

</div>

<style scoped>


.feature-cards {
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
}   


</style>
