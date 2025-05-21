---
layout: home
title: "实时视频口译 | 说您的语言，理解所有语言"
description: "通过InterMind的实时视频口译即刻消除语言障碍。用您的母语参加会议，让所有人都能完美理解。当科技可以架起沟通的桥梁时，何必去学习新语言？"
---

<!-- text="专注于成长 — 让InterMind处理语言问题。" -->
<!-- text="课堂需要数年时间；InterMind今天就能实现所有语言的实时理解。" -->
<!-- text="即刻理解 — 无需学习外语" -->
<!-- title="实时**口译**视频会议" -->

<HeroSection
title="带**语音**口译的**多语言**视频会议"
text="为那些因**语言障碍**而错失商机、延误进度和造成代价高昂错误的企业提供解决方案。">

<AuthButton text="免费注册" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="申请演示"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="价格" /> -->
</HeroSection>

<span id="1"></span>
<FeatureBlock :card="{
  title: '即时使用100多种语言交谈',
  details: 'InterMind使每位参与者都能使用母语交谈 — 自然流畅，[实时](/guide/how-it-works)，无需字幕，零延迟。',
    items: [
      '✧ 自由发言 — 即刻被理解。',
      '✧ AI驱动的口译能够准确把握语气、意图和行业专业术语。',
      '⚡︎ 双向、连续的**语音对语音口译**，无需手动设置。',
    ],
  link: './guide/what-is-intermind',
  src: {
    light: '/1.png',
    dark: '/1.png',
  },
  inversion: false
}" />

<span id="2"></span>
<FeatureBlock :card="{
    title: '专为正式会议打造 — 不仅仅是对话',
    details: 'InterMind是一个专业级视频会议平台，而不是轻量级附加组件或插件。',
    items: [
      '✧ 1080p分辨率、智能降噪和精确的语音采集。',
      '✧ 日程安排、会议管理、演示、录制和完整的日历集成 — 全部内置，随时可用。会议可持续长达24小时。',
      '⚡︎ 实时文字记录、参与者聊天，以及确保会议高效进行的AI助手。'
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
  details: 'InterMind将每次多语言通话转化为清晰、可搜索的知识。',
  items: [
    '⚡︎ 即时搜索过去和当前会议中的任何内容。自然提问，无需回看录像即可获得精确答案。',
    '✧ 永不遗漏任何会议中的待办事项。我们的AI自动从对话中提取任务、负责人和截止日期。',
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
    title: '安全保密设计',
    details:
      'InterMind专为需要信任保障的对话而设计。虽然我们依赖一流的第三方基础设施，但[保密性始终掌握在您手中](/guide/privacy-architecture)。',
    items: [
      '⚡︎ 区域化隐私保护 — 选择数据处理地点。我们根据您的合规区域（如欧盟、美国、亚洲）路由所有口译、存储和分析服务。',
      '✧ 默认私密 — InterMind本身**绝不**存储或使用您的内容用于训练、分析或第三方访问。',
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

## 清晰简单的价格方案

选择适合贵组织多语言沟通需求的方案。

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
    price: '**¥13** /月/用户，年付',
    details: '或月付¥15.99',
    items: [
      '150人视频会议 + 每位用户2 TB共享存储空间 [💬](#2)',
      '语音对语音翻译 [💬](#1)',
      'AI助手 [💬](#3)',
    ],
  },
  {
    title: '**企业版** &nbsp 1-250位用户',
    price: '**¥18** /月/用户，年付',
    details: '或月付¥21.99',
    items: [
      '500人视频会议 + 每位用户5 TB共享存储空间 [💬](#2)',
      '语音对语音翻译 [💬](#1)',
      'AI助手 [💬](#3)',
      '区域隐私保护 [💬](#4)',
    ],
  }
]">
<AuthButton text="免费注册" buttonClass="alt"/>
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
      q: '每个会议可以容纳多少参与者？',
      a: '参与者数量取决于您的计划：基础版最多可容纳100名参与者，专业版最多支持150名参与者，商业版每次会议最多可容纳500名参与者。'
  },
  {
    q: '一个 InterMind 许可证可以供多少人使用？',
    a: '授权用户可以主持无限次会议。但是，如果多个用户需要同时安排单独的会议，您将需要为每个用户购买额外的会议许可证。'
  },
  {
      q: '语音翻译功能是否适用于所有计划？',
      a: '是的，实时语音对语音翻译功能适用于所有计划，包括免费基础版。但是，基础版仅限于总共25次会议。专业版和商业版允许无限次会议，并提供更多参与者名额和附加功能。'
  }
]" />

## 客户评价

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>