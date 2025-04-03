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
  // خدمات الأعمال (البلوك الأول)
  { id: "1", text: "تأسيس شركة في الإمارات", category: "business" },
  { id: "2", text: "تأسيس شركة Mainland", category: "business" },
  { id: "3", text: "تسجيل شركة في المنطقة Free Zone", category: "business" },
  { id: "4", text: "تأسيس شركة Offshore", category: "business" },
  { id: "5", text: "تأشيرة العمل الحر في الإمارات", category: "business" },
  { id: "6", text: "رخصة تجارية في دبي", category: "business" },
  { id: "7", text: "متطلبات الرخصة التجارية في الإمارات", category: "business" },
  { id: "23", text: "تأسيس الأعمال في الإمارات", category: "business" },
  { id: "24", text: "المناطق الحرة في دبي", category: "business" },
  { id: "25", text: "تسجيل الشركات في الإمارات", category: "business" },
  { id: "26", text: "تأشيرة العمل الحر في الإمارات", category: "business" },
  
  // التأشيرات والهجرة
  { id: "8", text: "طلب التأشيرة الذهبية الإماراتية", category: "visa" },
  { id: "9", text: "تأشيرة العمل الإماراتية", category: "visa" },
  { id: "10", text: "كفالة تأشيرة العائلة في الإمارات", category: "visa" },
  { id: "11", text: "متطلبات الفحص الطبي للتأشيرة", category: "visa" },
  { id: "12", text: "إجراءات تأشيرة الإقامة في الإمارات", category: "visa" },
  { id: "27", text: "متطلبات التأشيرة الإماراتية", category: "visa" },
  
  // القانونية والوثائق
  { id: "13", text: "طلب الهوية الإماراتية", category: "legal" },
  { id: "14", text: "تصديق الوثائق في الإمارات", category: "legal" },
  { id: "15", text: "الوكالة القانونية في الإمارات", category: "legal" },
  { id: "16", text: "مراجعة العقود التجارية في الإمارات", category: "legal" },
  { id: "40", text: "تجديد الهوية الإماراتية", category: "legal" },
  
  // الخدمات المالية
  { id: "17", text: "حساب مصرفي للشركات في الإمارات", category: "finance" },
  { id: "18", text: "التسجيل الضريبي في الإمارات (VAT)", category: "finance" },
  { id: "19", text: "خدمات المحاسبة في الإمارات", category: "finance" },
  { id: "20", text: "قوانين المادة الاقتصادية في الإمارات", category: "finance" },
  { id: "41", text: "الخدمات المصرفية في الإمارات", category: "finance" },
  
  // العقارات والخدمات
  { id: "21", text: "الاستثمار العقاري في الإمارات", category: "property" },
  { id: "22", text: "تأجير المكاتب في دبي", category: "property" },

  // الرعاية الصحية
  { id: "47", text: "التأمين الصحي في الإمارات", category: "healthcare" },
  { id: "48", text: "أفضل المستشفيات في دبي", category: "healthcare" },
  { id: "49", text: "الفحص الطبي في الإمارات", category: "healthcare" },
  
  // السياحة والترفيه
  { id: "28", text: "المعالم السياحية في دبي", category: "travel" },
  { id: "29", text: "إكسبو سيتي دبي", category: "attractions" },
  { id: "30", text: "تذاكر برواز دبي", category: "attractions" },
  { id: "31", text: "تذاكر برج خليفة", category: "attractions" },
  { id: "32", text: "متحف المستقبل", category: "attractions" },
  { id: "33", text: "اللوفر أبوظبي", category: "attractions" },
  { id: "34", text: "عالم فيراري أبوظبي", category: "attractions" },
  { id: "35", text: "التسوق في دبي مول", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>