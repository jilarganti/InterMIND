<template>
  <span id="1"></span>
  <FeatureBlock
    :card="{
      title: '翻译 ≠ 理解。这就是下一步。',
      details: '无论使用何种语言，您的声音都能被听到并理解——就像您们说着同一种语言一样。',
      items: [
        '✧ 自然地，[实时](./product/overview/how-it-works)进行，无需字幕或延迟。',
        '✧ AI驱动的口译捕捉语调、意图和行业专业术语。',
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
      details: 'InterMind将每次多语言通话转化为清晰、可搜索的知识。',
      items: [
        '✧ **询问任何问题** — AI在**您的所有会议中**找到答案。',
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
      title: '为严肃会议而生——不仅仅是聊天',
      details: 'InterMind是一个[专业级视频会议平台](./product/overview/video-meeting-platform)，而不是轻量级插件或附加组件。',
      items: [
        '✧ 1080p分辨率、智能降噪、日程安排、会议管理、屏幕共享、录制、字幕、参与者聊天和日历集成——全部内置，**即开即用**。',
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
      title: '重要场合的隐私保护',
      details: 'InterMind专为信任至关重要的对话而构建——隐私和控制最为重要的场合。',
      items: ['✧ [隐私区域](./product/overview/privacy-architecture) — 欧盟、美国、东南亚', '✧ **零数据训练**。无第三方访问。'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />
</template>