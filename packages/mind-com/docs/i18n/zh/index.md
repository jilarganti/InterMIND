---
layout: home
title: "AI视频通话实时语音翻译"
description: "多语言会议无需Zoom、插件或翻译员。InterMind是一款用于实时视频通话的AI语音翻译器 — 即说即译。"
isHome: true
---

<!-- text="专注于发展 — 让InterMind处理语言问题。" -->
<!-- text="课堂需要数年时间；InterMind今天就能实现所有语言的实时理解。" -->
<!-- text="**多语言**视频会议与**语音**翻译" -->
<!-- title="实时**翻译**视频会议" -->

<HeroSection
title="用**任何**语言开会"
text="新一代视频通话。AI语音翻译 — 进化为实时口译。">

<AuthButton text="体验不同" buttonClass="brand"/>
<!-- <ContactFormModalNav buttonText="申请演示"/>
<NavButton to="#pricing" buttonClass="alt" buttonLabel="价格" /> -->
</HeroSection>

> **适用于谁？**  
> 适用于因语言障碍导致交易损失、延误或沟通不畅的国际团队。优先市场包括全球制造中心、美国工业合作伙伴、高科技亚洲、多语言欧盟、中东北非和拉丁美洲。在我们的[Markets](./product/markets)部分了解更多。

<span id="1"></span>
<FeatureBlock :card="{
  title: '翻译 ≠ 理解。这是下一步。',
  details: '无论使用什么语言，**您的声音都能被听到和理解** — 就像说同一种语言一样。',
    items: [
      '⚡︎ 自然、[实时](/product/how-it-works)，无字幕无延迟。',
      '✧ AI驱动的翻译能捕捉语气、意图和行业专业术语。',
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
    title: '会议中的智慧大脑',
    details: 'InterMind将每个多语言通话转化为清晰、可搜索的知识。',
    items: [
      '🔍 **随时提问** — AI可以在**所有会议中**找到答案。',
      '✧ 自动提取任务、负责人和截止日期。',
      '✧ 即时用任何语言总结要点。',
    ],
    link: '/product/how-it-works#🧩-deep-memory-deep-understanding',
    src: {
      light: '/2l.png',
      dark: '/2d.png',
    },
    inversion: true
  }" />

<span id="3"></span>
<FeatureBlock :card="{
    title: '专为正式会议打造 — 不只是聊天',
    details: 'InterMind是一个**专业级视频会议平台**，而不是轻量级附加组件或插件。',
    items: [
      '✧ 1080p分辨率、智能降噪、日程安排、会议管理、屏幕共享、录制、参与者聊天、日历集成和翻译 — 所有功能内置，随时可用。',
      '✧ **永久免费** — 无需信用卡，无时间限制。',
    ],
    link: '/product/how-it-works',
    src: {
      light: '/3.png',
      dark: '/3.png',
    },
    inversion: false
  }" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: '注重隐私保护',
    details:
      'InterMind专为重视信任的对话而设计 — 在隐私和控制最重要的场合。',
    items: [
      '⚡︎ [基于区域的隐私保护](/product/privacy-architecture) — 欧盟、美国、东南亚',
      '✧ 符合：GDPR、CCPA、UAE PDPL',
      '✧ **零数据训练**。无第三方访问。'
    ],
    link: '/product/privacy-architecture',
    src: {
      light: '/4.png',
      dark: '/4.png',
    },
    inversion: true
  }"
/>

<span id="Pricing"></span>

## 清晰简单的价格方案

选择适合您的方案。从字幕到全程语音翻译 — 随着团队成长而扩展。

<PricingPlans :plans="[
  {
    title: '**基础版** 1位用户',
    price: '**免费**',
    details: '25次免费会议',
    items: [
      '100人视频会议 [💬](#3)',
      '每用户30GB共享存储空间',
      '**实时语音翻译** [💬](#1)',
      'AI会议助手记录和总结 [💬](#2)',
    ],
  },
  {
    title: '**专业版** 1-99位用户',
    price: '**$20** /月/用户，年付',
    details: '或月付$25',
    items: [
      '150人视频会议 [💬](#3)',
      '每用户2TB共享存储空间',
      '**实时语音翻译** [💬](#1)',
      'AI会议助手记录和总结 [💬](#2)',
    ],
  },
  {
    title: '**企业版** 1-250位用户',
    price: '**定制价格**',
    details: '专为隐私和合规设计',
    items: [
      '500人视频会议 [💬](#3)',
      '每用户5TB共享存储空间',
      '**实时语音翻译** [💬](#1)',
      '**AI同事**。外表如人。声音自然。比你更智能 👽。',
      '**区域隐私路由** (欧盟/美国/亚洲) [💬](#4)',
    ],
  }
]">
<AuthButton text="免费试用" buttonClass="alt"/>
<AuthButton text="立即购买" buttonClass="brand"/>
<ContactFormModalNav buttonText="联系我们团队" buttonClass="alt"/>
</PricingPlans>

<span id="FAQ"></span>

## 常见问题

<AccordionGroup :items="
[
  {
    q: '什么是授权用户和参与者？',
    a: '*授权用户*拥有免费或付费的会议许可证，可以在其计划限制范围内安排会议。*参与者*是受邀者 — 他们**无需账户或许可证**即可加入，可以从任何设备**免费**连接。'
  },
  {
    q: '一个会议最多可以容纳多少参与者？',
    a: '这取决于您的计划：*基础版*最多支持**100名参与者**，*专业版*最多**150名**，*商业版*最多**500名**。'
  },
  {
    q: '一个InterMind许可证可以供多少人使用？',
    a: '每个*授权用户*可以主持**无限次会议**。如果多个团队成员需要同时主持会议，每人都需要自己的许可证。'
  },
  {
    q: '语音翻译功能是否适用于所有计划？',
    a: '是的，*语音翻译*在所有计划中都可用。在*基础版*中，仅支持**字幕功能**。*专业版*和*商业版*解锁完整的**双向语音翻译**、更大容量和高级功能。'
  },
  {
    q: '会议最长可以持续多久？',
    a: '所有计划的会议都可以持续长达**24小时**。'
  },
  {
    q: '我可以录制会议吗？',
    a: '是的，所有计划都支持**会议录制**。录制内容安全存储在您的账户中，随时可以访问。'
  },
  {
    q: '我可以主持的会议次数有限制吗？',
    a: '没有。您可以主持**无限次会议** — 即使是*免费基础版*计划。*专业版*和*商业版*计划提供更强大的功能、更多参与者和更多控制选项。'
  },
  {
    q: '如果我需要更多录制存储空间怎么办？',
    a: '*专业版*包含每用户**2 TB**的共享存储空间。*商业版*提供**5 TB**。需要更多？请**联系我们**获取定制方案。'
  },
  {
    q: 'InterMind如何确保数据隐私和安全？',
    a: 'InterMind**从设计之初就注重隐私**。所有数据都在您选择的地区处理和存储 — *欧盟、美国或亚洲*。我们遵守**GDPR、CCPA和UAE PDPL**，并且**绝不会将您的内容**用于培训或第三方访问。'
  },
  {
    q: '我可以在购买计划前试用InterMind吗？',
    a: '当然可以。*免费基础版*计划让您可以完全访问核心功能 — 包括**多语言会议**、**字幕**和**AI助手**。无需信用卡，**无时间限制**。随时可以升级。'
  },
  {
    q: '如果我需要帮助或支持怎么办？',
    a: '可通过我们的**帮助中心**、**电子邮件**和**在线聊天**获取支持。*商业版*用户可获得**优先支持**服务，并配备专门的联系人。'
  },
  {
    q: '我可以随时取消订阅吗？',
    a: '是的。*月度计划*在计费周期结束时取消。*年度计划*可以取消并获得**按比例退款**。'
  },
  {
    q: '如何升级或降级我的计划？',
    a: '您可以随时通过**账户设置**更改计划。更改将**立即生效**。'
  },
  {
    q: 'InterMind支持哪些语言的语音翻译？',
    a: '我们支持**100多种语言**的实时语音翻译。支持的语言列表在不断增加 — 请查看我们的网站获取最新更新。'
  },
  {
    q: '我可以使用InterMind进行网络研讨会或大型活动吗？',
    a: '是的。*专业版*和*商业版*计划非常适合**大型会议和网络研讨会** — *商业版*最多支持**500名参与者**。'
  }
]
"/>

<span id="Testimonials"></span>

## 客户评价

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>