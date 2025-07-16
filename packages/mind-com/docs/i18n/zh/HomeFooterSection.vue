<template>
  <HomeFooter
    :columns="[
      {
        title: '产品',
        links: [
          { text: '概述', link: './product/overview/what-is-intermind' },
          { text: '快速入门', link: './product/guide/getting-started' },
          { text: '用户评价', link: '#testimonials' },
          { text: '定价', link: '#Pricing' },
        ],
      },
      {
        title: '支持',
        links: [
          { text: '获取支持', link: './resources/help' },
          { text: '常见问题', link: '#FAQ' },
          { text: '服务状态', link: 'https://status.mind.com/' },
          { text: '隐私政策', link: './resources/company/Privacy-Policy' },
          { text: 'AI法律指南', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'Privacy Settings', link: '#' },
        ],
      },
      {
        title: '资源',
        links: [
          // { text: 'Blog', link: './blog' },
          { text: '品牌资产', link: './resources/media-kit' },
          { text: 'AI API / LLM文档', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: '公司',
        links: [
          { text: '关于我们', link: './resources/company/about' },
          { text: '团队', link: './resources/company/team' },
          // { text: 'Careers', link: './resources/company/careers' },
          { text: '联系我们', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>