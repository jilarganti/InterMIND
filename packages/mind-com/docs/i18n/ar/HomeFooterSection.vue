<template>
  <HomeFooter
    :columns="[
      {
        title: 'المنتج',
        links: [
          { text: 'نظرة عامة', link: './product/overview/what-is-intermind' },
          { text: 'البدء', link: './product/guide/getting-started' },
          { text: 'شهادات العملاء', link: '#testimonials' },
          { text: 'الأسعار', link: '#Pricing' },
        ],
      },
      {
        title: 'الدعم',
        links: [
          { text: 'الحصول على الدعم', link: './resources/help' },
          { text: 'الأسئلة الشائعة', link: '#FAQ' },
          { text: 'حالة الخدمة', link: 'https://status.mind.com/' },
          { text: 'سياسة الخصوصية', link: './resources/company/Privacy-Policy' },
          { text: 'دليل القوانين للذكاء الاصطناعي', link: './resources/company/Legal-Regulations-for-AI-Services' },
          // { text: 'إعدادات الخصوصية', link: '#' },
        ],
      },
      {
        title: 'الموارد',
        links: [
          // { text: 'المدونة', link: './blog' },
          { text: 'أصول العلامة التجارية', link: './resources/media-kit' },
          { text: 'وثائق واجهة برمجة التطبيقات للذكاء الاصطناعي / LLM', link: 'https://mind.com/llms-full.txt' },
        ],
      },
      {
        title: 'الشركة',
        links: [
          { text: 'حول', link: './resources/company/about' },
          { text: 'الفريق', link: './resources/company/team' },
          // { text: 'الوظائف', link: './resources/company/careers' },
          { text: 'جهات الاتصال', link: './resources/company/contacts' },
        ],
      },
    ]"
  />
</template>