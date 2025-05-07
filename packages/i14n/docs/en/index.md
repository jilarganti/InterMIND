---
layout: home
title: "Real-Time Video Interpretation | Speak Your Language, Understand All | i14n"
description: "Eliminate language barriers instantly with i14n's real-time video interpretation. Join meetings in your native language while everyone understands perfectly. Why learn a new language when technology can bridge the gap?"
---

<script setup lang="ts">
import { ref } from 'vue'
import { manageSessionFlag } from '../../../../shared/utils/sessionStorageHelper'

const initialAnimationState = manageSessionFlag("heroSectionAnimated", "true");
const shouldPlayHeroAnimation = ref(initialAnimationState === undefined);
</script>

<HeroSection
title="Live **Interpretation** Video Meetings"
text="Invest in strategy, not vocabulary. &nbsp; InterMind interprets while you innovate."
:playAnimation="shouldPlayHeroAnimation">
<NavButton to="./guide/what-is-i14n" buttonClass="brand" buttonLabel="Get Started" />
<AuthButton text="Sign In" buttonClass="alt" />
</HeroSection>

<FeatureBlock :card="{
  title: 'Your voice, their language, no waiting',
  details: 'Express yourself naturally in your native language while everyone hears you in theirs. i14n preserves your tone, emotion, and meaning across any language—no awkward pauses, just fluid conversation.',
  link: './guide/use-cases#instant-understanding',
  src: {
    light: '/pic/BabelBreak.png',
    dark: '/pic/BabelBreak.png',
    width: '80%'
  },
  inversion: false
}" />

<FeatureBlock :card="{
  title: 'Years of language study or one click?',
  details: 'Replace years of language learning with a single button. Join meetings instantly with clients, partners, and colleagues worldwide without spending time and resources mastering foreign languages.',
  link: './guide/use-cases#zero-learning-curve',
  src: {
    light: '/pic/LanguageStudy.png',
    dark: '/pic/LanguageStudy.png',
    width: '80%'
  },
  inversion: true
}" />

<FeatureBlock :card="{
  title: 'Works With Everything',
  details: 'Seamlessly integrates with Zoom, Teams, Webex, and more. No downloads or complex setups required—just instant access to global communication from the platforms you already use.',
  link: './guide/use-cases#platform-compatibility',
  src: {
    light: '/pic/Integration.png',
    dark: '/pic/Integration.png',
    width: '80%'
  },
  inversion: false
}" />

<FeatureBlock :card="{
  title: 'Focus on ideas, not translation',
  details: 'Eliminate preparation time and stress from international meetings. Express complex ideas confidently in your native language and be perfectly understood. Communication becomes natural again.',
  link: './guide/use-cases#meeting-productivity',
  src: {
    light: '/pic/Ideas.png',
    dark: '/pic/Ideas.png',
    width: '80%'
  },
  inversion: true
}" />
