---
footer: false
# sidebar: false
# aside: false
next: false
lastUpdated: false
navbar: false
# layout: doc
---

<script setup>
  const chatPrompts = [
    // استفسارات البحث القائمة على المشكلات - حواجز اللغة في الأعمال
    { id: "1", text: "كيفية التواصل مع العملاء الأجانب دون معرفة لغتهم", category: "communication" },
    { id: "2", text: "الترجمة الفورية لاجتماعات الأعمال", category: "translation" },
    { id: "3", text: "برنامج الترجمة الفورية للمكالمات المرئية", category: "interpretation" },
    { id: "4", text: "صفقات ضائعة بسبب حواجز اللغة", category: "business-problems" },
    
    // سيناريوهات أعمال محددة
    { id: "5", text: "كيفية تقديم العروض للعملاء الدوليين", category: "presentations" },
    { id: "6", text: "إجراء عروض المنتجات بلغات مختلفة", category: "demos" },
    { id: "7", text: "أفضل ممارسات اجتماعات المبيعات الدولية", category: "sales" },
    { id: "8", text: "التواصل مع الموردين من مختلف البلدان", category: "supply-chain" },
    
    // استفسارات البحث عن الحلول
    { id: "9", text: "بديل للمترجمين الفوريين باهظي الثمن", category: "cost-saving" },
    { id: "10", text: "مقارنة بين الترجمة بالذكاء الاصطناعي والترجمة البشرية", category: "comparison" },
    { id: "11", text: "الترجمة الفورية للأعمال", category: "instant-translation" },
    { id: "12", text: "أدوات التعاون متعددة اللغات", category: "collaboration" },
    
    // بحث المتطلبات التقنية
    { id: "13", text: "دقة الترجمة للمناقشات التقنية", category: "accuracy" },
    { id: "14", text: "برنامج ترجمة آمن للمؤسسات", category: "security" },
    { id: "15", text: "التكامل مع مؤتمرات الفيديو الحالية", category: "integration" },
    { id: "16", text: "خدمة ترجمة متوافقة مع GDPR", category: "compliance" },
    
    // العائد على الاستثمار والقيمة التجارية
    { id: "17", text: "تكلفة سوء التواصل في الأعمال الدولية", category: "roi" },
    { id: "18", text: "حساب تكاليف المترجم الفوري مقابل حل الذكاء الاصطناعي", category: "cost-calculator" },
    { id: "19", text: "زيادة معدلات تحويل المبيعات الدولية", category: "conversion" },
    { id: "20", text: "التوسع العالمي بدون تدريب لغوي", category: "expansion" },
    
    // بحث مقارنة المنافسين
    { id: "21", text: "قيود الترجمة في Google Meet", category: "google-meet" },
    { id: "22", text: "مشاكل ترجمة الترجمة النصية في Zoom", category: "zoom" },
    { id: "23", text: "مشكلات جودة الترجمة في Microsoft Teams", category: "teams" },
    
    // بحث خاص بالصناعة
    { id: "24", text: "التواصل في التصنيع مع الموردين الخارجيين", category: "manufacturing" },
    { id: "25", text: "حل لغوي للأعمال التصديرية", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />