<template>
  <HomeFooter
    :columns="[
      {
        title: '製品',
        links: [
          { text: '概要', link: './product/overview/what-is-intermind' },
          { text: 'はじめに', link: './product/guide/getting-started' },
          { text: 'お客様の声', link: '#testimonials' },
          { text: '料金', link: '#Pricing' },
        ],
      },
      {
        title: 'サポート',
        links: [
          { text: 'サポートを受ける', link: './resources/help' },
          { text: 'よくある質問', link: '#FAQ' },
          { text: 'サービス状況', link: 'https://status.mind.com/' },
          { text: 'プライバシーポリシー', link: './resources/company/Privacy-Policy' },
          { text: 'AI法的ガイド', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: 'リソース',
        links: [
          // { text: 'Blog', link: './blog' },
          { text: 'ブランドアセット', link: './resources/media-kit' },
          { text: 'AI API / LLM ドキュメント', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: '会社情報',
        links: [
          { text: '会社概要', link: './resources/company/about' },
          { text: 'チーム', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: 'お問い合わせ', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>