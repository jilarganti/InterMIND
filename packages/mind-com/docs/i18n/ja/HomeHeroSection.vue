<template>
  <HeroSection title="**あらゆる**言語で会議" :typingSpeed="5" text="**ビデオ通話**でのリアルタイム音声翻訳 — 高速、明確、境界のないコミュニケーション。">
    <NavButton buttonLabel="仕組み" buttonClass="brand" to="/#HowItWorks" />
    <AuthButton text="始める" buttonClass="alt" eventName="im_get_started_attempt" />
  </HeroSection>

  <span id="1"></span>
  <FeatureBlock
    :card="{
      title: '翻訳 ≠ 理解。次のステップがここにあります。',
      details: '言語に関係なく、あなたの声は同じ言語を話すかのように聞かれ、理解されます。',
      items: [
        '✧ [リアルタイム](./product/overview/how-it-works)で自然に、字幕や遅延なしで。',
        '✧ AI搭載の通訳がトーン、意図、業界固有の専門用語を捉えます。',
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
      title: '会議の中の知性',
      details: 'InterMindは多言語通話を明確で検索可能な知識に変換します。',
      items: [
        '✧ **何でも質問** — AIが**会議全体から**答えを見つけます。',
        '✧ タスク、担当者、締切を自動抽出。',
        '✧ 重要なポイントをあらゆる言語で即座に要約。',
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
      title: '本格的な会議のために構築 — 単なる会話ではなく',
      details: 'InterMindは[プロフェッショナルグレードのビデオ会議プラットフォーム](./product/overview/video-meeting-platform)であり、軽量なアドオンやプラグインではありません。',
      items: [
        '✧ 1080p解像度、スマートノイズ抑制、スケジューリング、モデレーション、画面共有、録画、字幕、参加者チャット、カレンダー統合 — すべて内蔵、**すぐに使用可能**。',
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
      title: '重要な場面でのプライバシー',
      details: 'InterMindは信頼が重要な会話のために構築されています — プライバシーとコントロールが最も重要な場面で。',
      items: ['✧ [プライバシーゾーン](./product/overview/privacy-architecture) — EU、米国、東南アジア', '✧ **データ学習ゼロ**。第三者アクセスなし。'],
      link: './product/overview/privacy-architecture',
      src: {
        light: '/4l.png',
        dark: '/4d.png',
      },
      inversion: true,
    }"
  />
</template>