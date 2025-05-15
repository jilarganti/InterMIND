---
layout: home
title: "实时视频口译 | 说您的语言，理解所有语言"
description: "通过i14n的实时视频口译即刻消除语言障碍。用您的母语参加会议，同时让所有人都能完美理解。当科技可以架起沟通的桥梁时，何必去学习新语言？"
---

<!-- text="专注于成长 — 让iMind处理语言问题。" -->
<!-- text="课堂需要数年时间；iMind今天就能实现所有语言的实时理解。" -->
<!-- text="即刻理解 — 无需学习外语" -->

<HeroSection
title="实时**口译**视频会议"
text="为那些因**语言障碍**而错失商机、延误进度和造成代价高昂错误的企业提供解决方案。">
<AuthButton text="体验实时演示 →" buttonClass="brand"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="价格" />
</HeroSection>

<span id="1"></span>

<FeatureBlock :card="{
  title: '即时使用100多种语言交流',
  details: 'iMind使每位参与者都能使用母语自然交谈 — [实时](/guide/how-it-works)进行，**无需字幕**，零延迟。',
    items: [
      '⚡︎ 自由发言 — 即刻被理解。',
      '✧ AI驱动的口译能够准确把握语气、意图和行业专业术语。',
      '✧ 双向、持续的语音对语音口译，无需手动设置。',
    ],
  link: './guide/what-is-imind',
  src: {
    light: '/1.png',
    dark: '/1.png',
  },
  inversion: false
}" />

<span id="2"></span>

<FeatureBlock :card="{
  title: '会议中的**智慧大脑**',
  details: 'iMind将每次多语言会议转化为清晰、可搜索的知识。',
  items: [
    '⚡︎ 即时搜索过去和当前会议的任何内容。自然提问，无需回看录音即可获得精确答案。',
    '✧ 永不遗漏任何会议事项。我们的AI自动从对话中提取任务、负责人和截止日期。',
    '✧ AI会议摘要用任何语言即时提供要点，无需手动记录即可保持所有人步调一致。',
  ],
  link: '/guide/how-it-works#🧩-deep-memory-deep-understanding',
  src: {
    light: '/2l.png',
    dark: '/2d.png',
  },
  inversion: true
}" />

<span id="3"></span>

<FeatureBlock :card="{
  title: '专为正式会议打造 — 不仅仅是对话',
  details: 'iMind是专业级视频会议平台，而不是轻量级附加组件或插件。',
  items: [
    '✧ 1080p分辨率、智能降噪和专注语音采集。',
    '✧ 日程安排、会议管理、演示、录制和完整日历集成 — 一切内置，随时可用。',
    '⚡︎ 实时转录、参与者聊天，以及确保会议高效进行的AI助手。'
  ],
  link: '/guide/how-it-works',
  src: {
    light: '/3l.png',
    dark: '/3d.png',
  },
  inversion: false
}" />

<span id="4"></span>

<FeatureBlock
  :card="{
    title: '安全保密设计',
    details:
      'iMind专为需要信任保障的对话而设计。虽然我们依赖最优质的第三方基础设施，但[保密性始终掌握在您手中](/guide/privacy-architecture)。',
    items: [
      '⚡︎ 区域隐私保护 — 选择数据处理地点。我们根据您的合规区域（如欧盟、美国、亚洲）路由所有口译、存储和分析服务。',
      '✧ 默认私密 — iMind本身**绝不**存储或使用您的内容用于训练、分析或第三方访问。',
      '✧ 架构合规 — 符合GDPR、CCPA和UAE PDPL要求，完全支持数据导出和删除权限。'
    ],
    link: '/guide/privacy-architecture',
    src: {
      light: '/4.png',
      dark: '/4.png',
    },
    inversion: true
  }"
/>

## 价格方案

<PricingPlans :plans="[
  {
    title: '商业入门版',
    details: '每位用户 **$7** / 月',
    items: [
      '即时使用100多种语言交谈 [ℹ️](#1)',
      '专为正式会议设计 — 不仅仅是聊天 [ℹ️](#3)',
    ],
    linkText: '开始试用',
    linkHref: '/guide/use-cases#negotiations',
    bullet: '💬'
  },
  {
    title: '商业标准版',
    details: '每位用户 **$14** / 月',
    items: [
      '即时使用100多种语言交谈 [ℹ️](#1)',
      '专为正式会议设计 — 不仅仅是聊天 [ℹ️](#3)',
      '会议中的**智能助手** [ℹ️](#2)',
    ],
    linkText: '开始试用',
    linkHref: '/guide/use-cases#operations',
    bullet: '⚡︎'
  },
  {
    title: '商业高级版',
    details: '每位用户 **$22** / 月',
    items: [
      '即时使用100多种语言交谈 [ℹ️](#1)',
      '专为正式会议设计 — 不仅仅是聊天 [ℹ️](#3)',
      '会议中的**智能助手** [ℹ️](#2)',
      '区域分段隐私架构 [ℹ️](#4)'
    ],
    linkText: '开始试用',
    linkHref: '/guide/use-cases#operations',
    bullet: '💰'
  }
]" />