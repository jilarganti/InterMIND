---
layout: AccountLayout
---

<!-- <script setup lang="ts">
import MeetingInterface from "../../.vitepress/theme/components/MeetingInterface.vue"
</script> -->

# Панель администратора

<MeetingInterface />

# ТЕСТ

:::details
<TeamMembersGrid :members="[
  {
    name: 'Jilarganti',
    desc: '**Привлекаем** новые умы в InterMIND, ОАЭ',
    avatarLink: 'https://github.com/jilarganti.png',
    links: [
      { icon: 'mdi:github', link: 'https://github.com/jilarganti' },
      { icon: 'mdi:linkedin', link: 'https://www.linkedin.com/in/aleksey-korolev/' }
    ]
  },
  {
    name: 'Windicted',
    desc: '**Превращаем** пользователей в сторонников, Португалия',
    avatarLink: 'https://secure.gravatar.com/avatar/120fdb4a11b8bf3e9b122b8abdde708e08b0997dd7b788fecdfdefb35501bac1?s=1600&d=identicon',
    links: [
      { icon: 'mdi:gitlab', link: 'https://gitlab.com/alexander.strikhalev' }
    ]
  },
  {
    name: 'Andre',
    desc: '**Поддерживаем** связь между умами, Россия',
    avatarLink: 'https://gitlab.com/uploads/-/system/user/avatar/2413541/avatar.png?width=800',
    links: [
      { icon: 'mdi:gitlab', link: 'https://gitlab.com/andrey.semashev' }
    ]
  },
]" />

<div class="feature-cards">

<FeatureCards :features="[
    {
        title: '**Зарегистрируйтесь бесплатно**',
    details: 'Начните за секунды — кредитная карта не нужна.',
    icon: {
        light: '/account/calendar-icon-logo-free-vector.jpg',
      dark: '/signUp.png',
    }
  },
  {
      title: '**Начните встречу**',
    details: 'Начните за секунды — кредитная карта не нужна.',
    icon: {
        light: '/start.png',
      dark: '/start.png',
    }
  },
  {
      title: '**Пригласите гостей**',
    details: 'Начните за секунды — кредитная карта не нужна.',
    link: '/uae-business/company-registration/accounting-legal',
    icon: {
        light: '/invite.png',
      dark: '/invite.png',
    }
  },
]" />

</div>
:::
<style scoped>

.feature-cards {
text-align: center;
margin: 0 auto;
max-width: 800px;
width: 100%;
}

</style>
