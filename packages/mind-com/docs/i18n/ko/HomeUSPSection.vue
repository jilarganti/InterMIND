<template>
  <span id="1"></span>
  <FeatureBlock
    :card="{
      title: '번역 ≠ 이해. 다음 단계는 이것입니다.',
      details: '언어에 관계없이 마치 같은 언어를 사용하는 것처럼 당신의 목소리가 들리고 이해됩니다.',
      items: [
        '✧ [실시간으로](./product/overview/how-it-works) 자연스럽게, 자막이나 지연 없이.',
        '✧ AI 기반 해석이 어조, 의도, 업계별 전문 용어를 포착합니다.',
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
      title: '회의 속의 마음',
      details: 'InterMind는 모든 다국어 통화를 명확하고 검색 가능한 지식으로 변환합니다.',
      items: [
        '✧ **무엇이든 물어보세요** — AI가 **회의 전반에서** 답변을 찾습니다.',
        '✧ 작업, 담당자, 마감일을 자동으로 추출합니다.',
        '✧ 핵심 사항을 어떤 언어로든 즉시 요약합니다.',
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
      title: '진지한 회의를 위해 구축됨 — 단순한 대화가 아닌',
      details: 'InterMind는 가벼운 애드온이나 플러그인이 아닌 [전문급 화상 회의 플랫폼](./product/overview/video-meeting-platform)입니다.',
      items: [
        '✧ 1080p 해상도, 스마트 노이즈 억제, 일정 관리, 중재, 화면 공유, 녹화, 자막, 참가자 채팅 및 캘린더 통합 — 모든 것이 내장되어 **바로 사용 가능**합니다.',
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
      title: '중요한 곳의 개인정보 보호',
      details: 'InterMind는 개인정보 보호와 통제가 가장 중요한 신뢰가 중요한 대화를 위해 구축되었습니다.',
      items: ['✧ [프라이버시 존](./product/overview/privacy-architecture) — EU, US, SE Asia', '✧ **데이터 훈련 제로**. 제3자 접근 없음.'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />
</template>