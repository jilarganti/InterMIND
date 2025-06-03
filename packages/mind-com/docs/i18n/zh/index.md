---
layout: home
title: "全球团队视频通话实时语音翻译"
isHome: true
---

<!-- title: "配备同声传译的视频通话" -->
<!-- text="说您的母语。听到其他人的发言 — 仿佛他们也在说您的语言。" -->
<!-- title="视频通话中的实时语音翻译" -->

<HeroSection
  title="用**任何**语言开会"
  text="为全球团队提供视频通话实时语音翻译。">

  <AuthButton text="体验不同" buttonClass="brand"/>
</HeroSection>

> **适用于谁？**  
> 专为语言障碍导致**延误、失去交易或代价高昂的误解**的全球团队设计。[了解更多 ...](./product/overview/markets)

<br>

<span id="1"></span>
<FeatureBlock :card="{
  title: '翻译 ≠ 理解。这是下一代解决方案。',
  details: '无论使用何种语言，**您的声音都能被听到和理解** — 仿佛大家说着同一种语言。',
    items: [
      '⚡︎ 自然、[实时](./product/overview/how-it-works)，无字幕无延迟。',
      '✧ AI驱动的口译能捕捉语气、意图和行业专业术语。',
    ],
  link: './product/overview/what-is-intermind',
  src: {
    light: '/1l.png',
    dark: '/1d.png',
  },
  inversion: false
}" />

<span id="2"></span>
<FeatureBlock :card="{
    title: '会议中的智慧大脑',
    details: 'InterMind将每个多语言通话转化为清晰、可搜索的知识。',
    items: [
      '🔍 **提出任何问题** — AI可以**跨会议**找到答案。',
      '✧ 自动提取任务、负责人和截止日期。',
      '✧ 即时用任何语言总结要点。',
    ],
    link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
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
      '✧ 1080p分辨率、智能降噪、日程安排、会议管理、屏幕共享、录制、字幕、参与者聊天和日历集成 — 所有功能都内置，随时可用。',
    ],
    link: './product/overview/how-it-works',
    src: {
      light: '/3l.mp4',
      dark: '/3d.mp4',
    },
    inversion: false
  }" />

<span id="4"></span>
<FeatureBlock
  :card="{
    title: '关键隐私保护',
    details:
      'InterMind专为重视信任的对话而设计 — 在隐私和控制最重要的场合。',
    items: [
      '⚡︎ [隐私区域](./product/overview/privacy-architecture) — 欧盟、美国、东南亚',
      '✧ **零数据训练**。无第三方访问。'
    ],
    link: './product/overview/privacy-architecture',
    src: {
      light: '/4l.png',
      dark: '/4d.png',
    },
    inversion: true
  }"
/>

<span id="Pricing"></span>

## 清晰简单的价格方案

从首次通话到流畅对话 — 适应任何规模。

<PricingPlans :plans="[
  {
    title: '**基础版** &nbsp 1位用户',
    price: '**免费**',
    details: '无需信用卡',
    items: [
      '**25**次会议',
      '**100**人视频会议 [💬](#3)',
      '每位用户**30** GB共享存储空间',
      '搜索所有会议记录 [💬](#2)',
      '同声传译 [💬](#1)',
    ],
  },
  {
    title: '**专业版** &nbsp 1-99位用户',
    price: '**$20** /月/用户，年付',
    details: '或月付$25',
    items: [
      '**无限**会议',
      '**150**人视频会议 [💬](#3)',
      '每位用户**2** TB共享存储空间',
      '搜索所有会议记录 [💬](#2)',
      '同声传译 [💬](#1)',
    ],
  },
  {
    title: '**企业版** &nbsp 100+位用户',
    price: '**定制价格**',
    details: '专为隐私设计',
    items: [
      '**无限**会议',
      '**500**人视频会议 [💬](#3)',
      '每位用户**5** TB共享存储空间',
      '搜索所有会议记录 [💬](#2)',
      '同声传译 [💬](#1)',
      '**隐私区域** [💬](#4)',
    ],
  }
]">
<AuthButton text="免费试用" buttonClass="alt"/>
<AuthButton text="立即购买" buttonClass="brand"/>
<ContactFormModalNav buttonText="联系我们团队" buttonClass="alt"/>
</PricingPlans>

<span id="Testimonials"></span>

## 客户评价

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

<span id="FAQ"></span>

## 常见问题

<AccordionGroup :items="
[
  {
    q: '什么是授权用户和参与者？',
    a: '*授权用户*拥有免费或付费的会议许可证，可以在其计划限制范围内安排会议。*参与者*是被邀请者 — 他们**无需账户或许可证**即可加入，并可以从任何设备**免费**连接。'
  },
  {
    q: '一个InterMind许可证可以供多少人使用？',
    a: '每个*授权用户*可以主持**无限次会议**。如果多个团队成员需要同时主持会议，每人都需要自己的许可证。'
  },
  {
    q: '会议最长持续时间是多少？',
    a: '所有计划的会议都可以持续**24小时**。'
  },
  {
    q: '我可以主持的会议数量有限制吗？',
    a: '*免费基础*计划包含**25次免费会议**。*专业版*和*商业版*计划提供无限次会议，且可容纳更多参与者并具有更多控制权。'
  },
  {
    q: 'InterMind如何确保数据隐私和安全？',
    a: 'InterMind**从设计之初就注重隐私**。所有数据都在您选择的**隐私区域**内处理和存储 — _欧盟_、_美国_或_亚洲_。我们遵守[**GDPR**](https://gdpr.eu)、[**CCPA**](https://oag.ca.gov/privacy/ccpa)和阿联酋PDPL，并且**绝不会将您的内容**用于培训或第三方访问。高级**隐私区域控制**功能在**商业版**计划中提供。'
  },
  {
    q: '我可以在购买计划之前试用InterMind吗？',
    a: '当然可以。*免费基础*计划让您可以完全访问核心功能，包含**25次免费会议** — 包括**同声传译**和**会议搜索**功能。无需信用卡。随时可以升级。'
  },
  {
    q: '如果我需要帮助或支持怎么办？',
    a: '可通过我们的**帮助中心**、**电子邮件**和**在线聊天**获取支持。*商业版*用户可获得**优先支持**服务，并配有专门的联系人。'
  },
  {
    q: '如何管理我的订阅（升级、降级或取消）？',
    a: '您可以随时通过**账户设置**更改您的计划。更改将**立即生效**。对于取消，*月度计划*在计费周期结束时取消。*年度计划*可以取消并获得**按比例退款**。'
  },
  {
    q: 'InterMind支持哪些语言的口译？',
    a: '我们支持**100多种语言**的实时口译。支持的语言列表在不断增加 — 请查看我们的网站获取最新更新。'
  },
  {
    q: '我可以使用InterMind进行网络研讨会或大型活动吗？',
    a: '可以。*专业版*和*商业版*计划非常适合**大型会议和网络研讨会** — *商业版*最多可支持**500名参与者**。'
  }
]
"/>