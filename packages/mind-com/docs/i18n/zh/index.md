---
layout: home
title: "AI人工智能视频通话实时语音翻译"
description: "多语言会议无需Zoom、插件或口译员。InterMind是一款用于实时视频通话的AI语音翻译器 — 即说即译。"
isHome: true
---

<!-- text="专注于发展 — 让InterMind处理语言问题。" -->
<!-- text="课堂需要数年时间；InterMind今天就能实现所有语言的实时理解。" -->
<!-- text="即刻理解 — 无需学习外语" -->
<!-- title="实时**口译**视频会议" -->

<HeroSection
title="带有**语音**口译的**多语言**视频会议"
text="适用于因**语言障碍**而导致交易损失、延误和代价高昂错误的企业。">

<AuthButton text="免费试用" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="申请演示"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="价格" /> -->
</HeroSection>

<span id="1"></span>
<FeatureBlock :card="{
  title: '即时使用100多种语言交谈',
  details: 'InterMind使每位参与者都能使用母语自然交谈 — 在[实时](/product/how-it-works)中，无需字幕，无延迟。',
    items: [
      '✧ 自由发言 — 即刻被理解。',
      '✧ AI驱动的口译能捕捉语气、意图和行业特定术语。',
      '⚡︎ 双向、连续的**语音对语音口译**，无需手动设置。',
    ],
  link: './product/what-is-intermind',
  src: {
    light: '/1.png',
    dark: '/1.png',
  },
  inversion: false
}" />

<span id="2"></span>
<FeatureBlock :card="{
    title: '专为正式会议打造 — 不仅仅是聊天',
    details: 'InterMind是专业级视频会议平台，而不是轻量级附加组件或插件。',
    items: [
      '✧ 1080p分辨率、智能噪声抑制和专注语音拾取。',
      '✧ 日程安排、会议管理、演示、录制和完整日历集成 — 全部内置，随时可用。会议可持续长达24小时。',
      '⚡︎ 实时文字记录、参与者聊天，以及保持会议效率的AI助手。'
    ],
    link: '/product/how-it-works',
    src: {
      light: '/3l.png',
      dark: '/3d.png',
    },
    inversion: true
  }" />

<span id="3"></span>
<FeatureBlock :card="{
  title: '会议中的**智慧大脑**',
  details: 'InterMind将每次多语言通话转化为清晰、可搜索的知识。',
  items: [
    '⚡︎ 即时搜索过去和当前会议的任何内容。自然提问，无需查看录音即可获得精确答案。',
    '✧ 永不遗漏任何会议的待办事项。我们的AI自动从对话中提取任务、负责人和截止日期。',
    '✧ AI会议摘要用任何语言即时提供要点，无需手动记录即可保持所有人步调一致。',
  ],
  link: '/product/how-it-works#🧩-deep-memory-deep-understanding',
  src: {
    light: '/2l.png',
    dark: '/2d.png',
  },
  inversion: false
}" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: '安全保密设计',
    details:
      'InterMind专为需要信任的对话而设计。虽然我们依赖最佳第三方基础设施，但[保密性始终掌握在您手中](/product/privacy-architecture)。',
    items: [
      '⚡︎ 基于区域的隐私保护 — 选择数据处理地点。我们将所有口译、存储和分析通过符合您合规区域（如欧盟、美国、亚洲）的基础设施进行路由。',
      '✧ 默认私密 — InterMind本身**永不**存储或使用您的内容用于训练、分析或第三方访问。',
      '✧ 架构合规 — 符合GDPR、CCPA和UAE PDPL要求，完全支持导出和删除权限。'
    ],
    link: '/product/privacy-architecture',
    src: {
      light: '/4.png',
      dark: '/4.png',
    },
    inversion: true
  }"
/>

## 清晰简单的价格方案

选择适合您组织多语言沟通需求的方案。

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
  },
  {
    title: '**专业版** &nbsp 1-99位用户',
    price: '**$20** /月/用户，年付',
    details: '或月付$25',
    items: [
      '150人视频会议 + 每位用户2 TB共享存储空间 [💬](#2)',
      '语音对语音翻译 [💬](#1)',
      'AI助手 [💬](#3)',
    ],
  },
  {
    title: '**企业版** &nbsp 1-500位用户',
    price: '**隐私优先**',
    details: '专为大型团队打造',
    items: [
      '500人视频会议 + 每位用户5 TB共享存储空间 [💬](#2)',
      '语音对语音翻译 [💬](#1)',
      'AI助手 [💬](#3)',
      '区域隐私保护 [💬](#4)',
    ],
  }
]">
<AuthButton text="免费试用" buttonClass="alt"/>
<AuthButton text="立即购买" buttonClass="brand"/>
<ContactFormModalNav buttonText="联系销售" buttonClass="alt"/>
</PricingPlans>

## 常见问题

<AccordionGroup :items="[
  {
    q: '什么是授权用户和参与者？',
    a: '授权用户拥有免费或付费的会议许可证，可以根据其计划允许的容量安排与参与者的会议。参与者是由持有会议许可证的人安排的会议的受邀者。参与者不需要帐户或许可证即可加入会议，可以**免费加入**。参与者可以通过台式电脑、手机和平板设备加入会议。'
  },
  {
      q: '一个会议最多可以容纳多少名参与者？',
      a: '参与者数量取决于您的计划：基础版最多允许100名参与者，专业版最多支持150名参与者，商业版每次会议最多可容纳500名参与者。'
  },
  {
    q: '一个InterMind许可证可以供多少人使用？',
    a: '授权用户可以主持无限次会议。但是，如果多个用户需要同时安排单独的会议，您将需要为每个用户购买额外的会议许可证。'
  },
  {
      q: '语音翻译功能是否适用于所有计划？',
      a: '是的，实时语音对语音翻译功能适用于所有计划，包括免费基础版。但是，基础版仅限于总共25次会议。专业版和商业版允许无限次会议，并提供更多参与者名额和附加功能。'
  }
]" />

## 客户评价

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>