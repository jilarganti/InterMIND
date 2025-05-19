---
layout: home
title: "实时视频口译 | 说您的语言，理解所有语言"
description: "通过i14n的实时视频口译即刻消除语言障碍。用您的母语参加会议，同时让所有人都能完美理解。当科技可以架起沟通的桥梁时，何必去学习新语言？"
---

<!-- text="专注于成长 — 让iMind处理语言问题。" -->
<!-- text="课堂需要数年时间；iMind今天就能实现所有语言的实时理解。" -->
<!-- text="即刻理解 — 无需学习外语" -->
<!-- title="实时**口译**视频会议" -->

<HeroSection
title="带**语音**口译的**多语言**视频会议"
text="为那些因**语言障碍**而损失交易、延误进度和造成代价高昂错误的公司提供解决方案。">

<!-- <AuthButton text="申请演示" buttonClass="brand"/> -->
<ContactFormModalNav buttonText="申请演示"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="价格" />
</HeroSection>

<span id="1"></span>
<FeatureBlock :card="{
  title: '即时使用超过100种语言交谈',
  details: 'iMind使每位参与者都能使用其母语自然交谈 — 在[实时](/guide/how-it-works)中，无需字幕，没有延迟。',
    items: [
      '✧ 自由发言 — 即刻被理解。',
      '✧ AI驱动的口译能捕捉语气、意图和行业特定术语。',
      '⚡︎ 双向、连续的**语音对语音口译**，无需手动设置。',
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
    title: '专为正式会议打造 — 不仅仅是对话',
    details: 'iMind是一个专业级视频会议平台，而不是轻量级附加组件或插件。',
    items: [
      '✧ 1080p分辨率、智能噪音抑制和专注语音拾取。',
      '✧ 日程安排、会议管理、演示、录制和完整日历集成 — 全部内置，随时可用。会议可持续长达24小时。',
      '⚡︎ 实时文字记录、参与者聊天，以及保持会议高效的AI助手。'
    ],
    link: '/guide/how-it-works',
    src: {
      light: '/3l.png',
      dark: '/3d.png',
    },
    inversion: true
  }" />

<span id="3"></span>
<FeatureBlock :card="{
  title: '会议中的**智慧大脑**',
  details: 'iMind将每个多语言通话转化为清晰、可搜索的知识。',
  items: [
    '⚡︎ 即时搜索过去和当前会议中的任何内容。自然提问，无需查看录音即可获得精确答案。',
    '✧ 永不错过任何会议的行动项目。我们的AI自动从对话中提取任务、负责人和截止日期。',
    '✧ AI会议摘要用任何语言即时提供关键要点，无需手动记录即可保持所有人步调一致。',
  ],
  link: '/guide/how-it-works#🧩-deep-memory-deep-understanding',
  src: {
    light: '/2l.png',
    dark: '/2d.png',
  },
  inversion: false
}" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: '安全且保密的设计理念',
    details:
      'iMind专为需要信任的对话而打造。虽然我们依赖一流的第三方基础设施，但[保密性始终掌握在您手中](/guide/privacy-architecture)。',
    items: [
      '⚡︎ 基于区域的隐私保护 — 选择数据处理地点。我们将所有口译、存储和分析通过符合您合规区域（如欧盟、美国、亚洲）的基础设施进行路由。',
      '✧ 默认私密 — iMind本身**永不**存储或使用您的内容用于训练、分析或第三方访问。',
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
    title: '**基础版** &nbsp 1位用户',
    price: '**免费**',
    details: '25次免费会议',
    items: [
      '100人视频会议 + 每位用户30 GB共享存储空间 [💬](#2)',
      '语音对语音翻译 [💬](#1)',
      'AI助手 [💬](#3)',
    ],
    linkText: '免费注册',
    linkHref: '/guide/use-cases#negotiations',
  },
  {
    title: '**专业版** &nbsp 1-99位用户',
    price: '**$13.33** /月/用户，年付',
    details: '或月付$15.99',
    items: [
      '150人视频会议 + 每位用户2 TB共享存储空间 [💬](#2)',
      '语音对语音翻译 [💬](#1)',
      'AI助手 [💬](#3)',
    ],
    linkText: '立即购买',
    linkHref: '/guide/use-cases#operations',
  },
  {
    title: '**企业版** &nbsp 1-250位用户',
    price: '**$18.33** /月/用户，年付',
    details: '或月付$21.99',
    items: [
      '500人视频会议 + 每位用户5 TB共享存储空间 [💬](#2)',
      '语音对语音翻译 [💬](#1)',
      'AI助手 [💬](#3)',
      '区域隐私保护 [💬](#4)',
    ],
    linkText: '立即购买',
    linkHref: '/guide/use-cases#operations',
  }
]" />

## 查看我们的常见问题解答，了解更多信息。

<AccordionGroup :items="[
  {
    q: '外部参与者可以加入通话吗？',
    a: '**当然可以**。对于 iMind 的免费版本，参与者可以使用 Google 账号登录，或经会议组织者批准后加入。<br><br>对于 Google Workspace 用户，创建会议后，您可以邀请任何人加入，即使他们没有 Google 账号。只需与所有会议参与者分享链接或会议 ID 即可。[💬](#2)'
  },
  {
    q: 'iMind 收费是多少？',
    a: '任何拥有 Google 账号的人都可以免费创建视频会议，邀请多达100名参与者，每次会议时长最多60分钟。对于移动电话和一对一通话，没有时间限制。<br><br>如需更长、更大规模的会议或其他功能，如国际拨入号码、会议录制、直播和管理控制等，请查看组织版或 Google Workspace Individual 的计划和定价。'
  },
  {
    q: '如何获取高级功能？',
    a: '高级功能在我们的 Google Workspace 计划和 Google One Premium 中提供。'
  },
  {
    q: '会议内容安全吗？',
    a: '是的。Meet 中的所有视频和音频流都经过加密。即使用户在外部，也可以安全地加入。'
  },
  {
    q: '电话拨入访问是否需要第三方服务？',
    a: '不需要。使用 Google Workspace 企业版，您可以在每次会议中包含电话号码和 PIN 码，无需其他配置。详情请查看电话拨入文档。'
  }
]" />