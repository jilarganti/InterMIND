---
layout: home
title: "视频通话实时语音翻译"
isHome: true
---

<HeroSection title="用**任何**语言会面" :typingSpeed="10" text="视频通话中的**实时语音翻译** — 快速、清晰、无国界沟通。">
<NavButton buttonLabel="工作原理" buttonClass="brand" to="/#HowItWorks" />
<NavButton buttonLabel="助手" buttonClass="alt" to="/chat" />
</HeroSection>

<span id="1"></span>
<FeatureBlock
    :card="{
      title: '翻译 ≠ 理解。这是下一步。',
      details: '无论使用什么语言，您的声音都能被听到和理解 — 就像说着同一种语言一样。',
      items: [
        '✧ [实时](./product/overview/how-it-works)自然转换，无需字幕，零延迟。',
        '✧ AI驱动的翻译能捕捉语气、意图和行业专业术语。',
      ],
      link: './product/overview/what-is-intermind',
      src: {
        light: '/media-kit/animals-cartoon-3-2.png',
        dark: '/1d.png',
      },
      inversion: false,
    }"
  />

<span id="2"></span>
<FeatureBlock
    :card="{
      title: '会议中的智慧大脑',
      details: 'InterMind将每个多语言会议转化为清晰、可搜索的知识。',
      items: [
        '✧ **随时提问** — AI可以**跨会议**找到答案。',
        '✧ 自动提取任务、负责人和截止日期。',
        '✧ 即时用任何语言总结要点。',
      ],
      link: './product/overview/how-it-works#🧩-deep-memory-deep-understanding',
      src: {
        light: '/2l.png',
        dark: '/2d.png',
      },
      inversion: true,
    }"
  />

<span id="3"></span>
<FeatureBlock
    :card="{
      title: '专为正式会议打造 — 不只是聊天',
      details: 'InterMind是一个[专业级视频会议平台](./product/overview/video-meeting-platform)，而不是轻量级插件或附加组件。',
      items: [
        '✧ 1080p分辨率、智能降噪、日程安排、会议管理、屏幕共享、录制、字幕、参与者聊天和日历集成 — 所有功能**开箱即用**。',
      ],
      link: './product/overview/video-meeting-platform',
      src: {
        light: '/3l.mp4',
        dark: '/3d.mp4',
      },
      inversion: false,
    }"
  />

<span id="4"></span>
<FeatureBlock
    :card="{
      title: '注重隐私保护',
      details: 'InterMind专为重视信任的对话而设计 — 在隐私和控制最重要的场合。',
      items: ['✧ [隐私区域](./product/overview/privacy-architecture) — 欧盟、美国、东南亚', '✧ **零数据训练**。无第三方访问。'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />

> [!tip] 适用于谁？  
> 专为**国际团队**设计，解决语言障碍导致的**延误**、**商机损失**或**代价高昂的误解**问题。[了解更多 ...](./product/overview/markets)

## 像 Google Meet 一样工作 + 实时翻译

熟悉的界面。通用交流。与 Google Meet 一样简单 — 通过即时翻译消除语言障碍。

<span id="HowItWorks"></span>

<FeatureCards
    :features="[
      {
        title: '免费注册',
        details: '选择您的语言并[创建账户](#Pricing)。',
        icon: {
          light: '/signUp.png',
          dark: '/signUp.png',
        },
      },
      {
        title: '开始会议',
        details: '即时创建或提前安排。',
        icon: {
          light: '/start.png',
          dark: '/start.png',
        },
      },
      {
        title: '加入会议',
        details: '点击链接，输入姓名，立即加入。',
        icon: {
          light: '/join.png',
          dark: '/join.png',
        },
      },
      {
        title: '说您的语言',
        details: '每个人都用自己的语言说话和听取。',
        icon: {
          light: '/meeting.png',
          dark: '/meeting.png',
        },
      },
    ]"
  />

<span id="Example"></span>

## 示例：实时会议语音翻译如何运作

假设：

> 用户使用**西班牙语**作为**网站本地化语言**。他们主持会议并邀请两位参与者：
>
> - 🧑‍💼 参与者1使用**英语**界面
> - 👩 参与者2使用**中文**界面

### 会议期间会发生什么？

每个参与者都使用他们进入产品时选择的语言来**说话和听取**。  
这个单一的语言设置适用于：

- **界面语言**
- **语音输入**（您说的内容）
- **翻译输出**（您听到的内容）

| 参与者 | 选择的语言 | 说话语言 | 听取语言 |
| ------------- | ----------------- | --------- | -------- |
| 主持人 | 西班牙语 | 西班牙语 | 西班牙语 |
| 参与者1 | 英语 | 英语 | 英语 |
| 参与者2 | 中文 | 中文 | 中文 |

[平台自动实时翻译所有语音](./product/overview/how-it-works) — 让每个人都像在使用同一种语言交流一样。

### 通话过程中可以更改语言吗？

可以。您可以打开**设置**并更改`您的语言`字段：

:::details 设置面板
<img src="/settings.png" alt="设置面板" width="300px" />
:::

更改语言意味着：

- 您应该使用`所选语言`说话以确保准确翻译
- 您将以`所选语言`听到其他人的发言
- 界面将自动切换到`所选语言`

> 📌 注意："您的语言"是一个**统一的单一设置**  
> 它控制着**您如何说话**、**您听到什么**以及**您看到什么**。  
> 不支持用一种语言说话而用另一种语言听取 — 这是设计使然，目的是保持体验简单且可预测。

## 清晰简单的价格方案

从首次通话到流畅对话 — 任何规模都适用。

<span id="Pricing"></span>

<PricingPlans
    :plans="[
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
        title: '**专业版**  &nbsp 1-99位用户',
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
      },
    ]">
<AuthButton text="免费试用" buttonClass="brand" eventName="try_it_attempt" />
<AuthButton text="立即购买" buttonClass="alt" mode="checkout" eventName="buy_now_attempt" />
<ContactForm buttonText="联系我们团队" buttonClass="alt" />
</PricingPlans>

> [!warning] 😱 要么您精通所有语言 — 要么让别人抢走您的生意。

<span id="Testimonials"></span>

## 客户评价

<AutoScrollTestimonials testimonialsUrl="/testimonials.json"/>

> [!tip] 🥇 把时间花在提升专业技能上 — 而不是记忆语法规则。

## 常见问题

<span id="FAQ"></span>

<AccordionGroup
    :items="[
      {
        q: 'InterMind支持哪些语言进行口译？',
        a: 'InterMind支持以下19种语言的**实时口译**：<br><br>- العربية (ar) – 阿拉伯语<br>- Čeština (cs) – 捷克语<br>- Deutsch (de) – 德语<br>- English (en) – 英语<br>- Español (es) – 西班牙语<br>- Français (fr) – 法语<br>- हिन्दी (hi) – 印地语<br>- Magyar (hu) – 匈牙利语<br>- Italiano (it) – 意大利语<br>- 日本語 (ja) – 日语<br>- 한국어 (ko) – 韩语<br>- Nederlands (nl) – 荷兰语<br>- Polski (pl) – 波兰语<br>- Português (pt) – 葡萄牙语<br>- Русский (ru) – 俄语<br>- Türkçe (tr) – 土耳其语<br>- 中文 (zh) – 中文<br><br>我们正在不断扩展这个列表 — 每次主要版本更新都会添加新语言。',
      },
      {
        q: '什么是授权用户，什么是参与者？',
        a: '*授权用户*拥有免费或付费会议许可证，可以在其计划限制内安排会议。*参与者*是被邀请者 — 他们**无需账户或许可证**即可加入，并且可以从任何设备**免费**连接。',
      },
      {
        q: '一个InterMind许可证可以供多少人使用？',
        a: '每个*授权用户*可以主持**无限次会议**。如果多个团队成员需要同时主持会议，每个人都需要自己的许可证。',
      },
      {
        q: '会议最长持续时间是多少？',
        a: '所有计划的会议都可以持续**24小时**。',
      },
      {
        q: '我可以主持的会议数量有限制吗？',
        a: '*免费基础*计划包含**25次免费会议**。*专业版*和*商业版*计划提供无限次会议，并且有更多参与者和控制权。',
      },
      {
        q: 'InterMind如何确保数据隐私和安全？',
        a: 'InterMind**从设计之初就注重隐私**。所有数据都在您选择的**隐私区域**内处理和存储 — _欧盟_、_美国_或_亚洲_。我们遵守[**GDPR**](https://gdpr.eu)、[**CCPA**](https://oag.ca.gov/privacy/ccpa)和阿联酋PDPL，并且**绝不会将您的内容**用于培训或第三方访问。高级[隐私区域控制](./product/overview/privacy-architecture)在**商业版**计划中提供。',
      },
      {
        q: '我可以在购买计划之前试用InterMind吗？',
        a: '当然可以。*免费基础*计划让您可以完全访问核心功能，包含**25次免费会议** — 包括**同声传译**和**会议搜索**。无需信用卡。随时可以升级。',
      },
      {
        q: '如果我需要帮助或支持怎么办？',
        a: '可以通过我们的[帮助中心](./resources/help)获取支持。*商业版*用户可获得专属联系人提供的**优先支持**。',
      },
      {
        q: '如何管理我的订阅（升级、降级或取消）？',
        a: '您可以随时通过**账户设置**更改您的计划。更改将**立即生效**。对于取消，*月度计划*在计费周期结束时取消。*年度计划*可以取消并获得**按比例退款**。',
      },
      {
        q: '我可以使用InterMind进行网络研讨会或大型活动吗？',
        a: '是的。*专业版*和*商业版*计划非常适合**大型会议和网络研讨会** — *商业版*最多支持**500名参与者**。',
      },
    ]"/>

<HomeFooter
    :columns="[
      {
        title: '产品',
        links: [
          { text: 'Overview', link: './product/overview/what-is-intermind' },
          { text: 'Getting Started', link: './product/guide/getting-started' },
          { text: 'Testimonials', link: '#testimonials' },
          { text: 'Pricing', link: '#Pricing' },
        ],
      },
      {
        title: '支持',
        links: [
          { text: 'Get Support', link: './resources/help' },
          { text: 'FAQ', link: '#FAQ' },
          { text: 'Service Status', link: 'https://status.mind.com/' },
          { text: 'Privacy Policy', link: './resources/company/Privacy-Policy' },
          { text: 'AI Legal Guide', link: './resources/company/Legal-Regulations-for-AI-Services' },
        ],
      },
      {
        title: '资源',
        links: [
          { text: 'Brand Assets', link: './resources/media-kit' },
          { text: 'AI API / LLM Docs', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: '公司',
        links: [
          { text: 'About', link: './resources/company/about' },
          { text: 'Team', link: './resources/company/team' },
          { text: 'Contacts', link: './resources/company/contacts' },
        ],
      },
    ]"/>