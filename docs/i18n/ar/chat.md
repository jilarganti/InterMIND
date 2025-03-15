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
  { id: "1", text: "إكسبو سيتي دبي", category: "attractions" },
  { id: "2", text: "تذاكر برواز دبي", category: "attractions" },
  { id: "3", text: "تذاكر برج خليفة", category: "attractions" },
  { id: "4", text: "متحف المستقبل", category: "attractions" },
  { id: "5", text: "متحف اللوفر أبوظبي", category: "attractions" },
  { id: "6", text: "عالم فيراري أبوظبي", category: "attractions" },
  { id: "7", text: "مطاعم دبي مول", category: "food" },
  { id: "8", text: "أفضل المأكولات العربية في دبي", category: "food" },
  { id: "9", text: "مطاعم ميشلان في دبي", category: "food" },
  { id: "10", text: "مأكولات الشارع في الشارقة", category: "food" },
  { id: "11", text: "إيجار نخلة جميرا", category: "housing" },
  { id: "12", text: "شقق مرسى دبي", category: "housing" },
  { id: "13", text: "السكن الميسر في أبوظبي", category: "housing" },
  { id: "14", text: "قوانين الإيجار في الإمارات", category: "housing" },
  { id: "15", text: "خريطة مترو دبي", category: "transportation" },
  { id: "16", text: "تعرفة سيارات الأجرة في أبوظبي", category: "transportation" },
  { id: "17", text: "رخصة القيادة الإماراتية", category: "transportation" },
  { id: "18", text: "خدمات هيئة الطرق والمواصلات", category: "transportation" },
  { id: "19", text: "التسوق في دبي مول", category: "shopping" },
  { id: "20", text: "القرية العالمية دبي", category: "shopping" },
  { id: "21", text: "سوق الذهب دبي", category: "shopping" },
  { id: "22", text: "عروض مول الإمارات", category: "shopping" },
  { id: "23", text: "تأسيس الأعمال في الإمارات", category: "business" },
  { id: "24", text: "المناطق الحرة في دبي", category: "business" },
  { id: "25", text: "تسجيل الشركات في الإمارات", category: "business" },
  { id: "26", text: "تأشيرة العمل الحر في الإمارات", category: "business" },
  { id: "27", text: "متطلبات تأشيرة الإمارات", category: "travel" },
  { id: "28", text: "معالم دبي السياحية", category: "travel" },
  { id: "29", text: "طلب تأشيرة زيارة الإمارات", category: "travel" },
  { id: "30", text: "الأماكن السياحية في أبوظبي", category: "travel" },
  { id: "31", text: "سفاري الصحراء في دبي", category: "travel" },
  { id: "32", text: "وظائف للوافدين في دبي", category: "jobs" },
  { id: "33", text: "إجراءات تصريح العمل الإماراتي", category: "jobs" },
  { id: "34", text: "وظائف عن بعد في الإمارات", category: "jobs" },
  { id: "35", text: "دليل الرواتب في الإمارات", category: "jobs" },
  { id: "36", text: "توقعات الطقس في الإمارات", category: "events" },
  { id: "37", text: "الفعاليات القادمة في دبي", category: "events" },
  { id: "38", text: "احتفالات اليوم الوطني الإماراتي", category: "events" },
  { id: "39", text: "مهرجان دبي للتسوق", category: "events" },
  { id: "40", text: "تجديد الهوية الإماراتية", category: "services" },
  { id: "41", text: "الخدمات المصرفية في الإمارات", category: "services" },
  { id: "42", text: "دفع فواتير ديوا", category: "services" },
  { id: "43", text: "ترقية باقة اتصالات", category: "services" },
  { id: "44", text: "أفضل المدارس في دبي", category: "education" },
  { id: "45", text: "القبول في الجامعات الإماراتية", category: "education" },
  { id: "46", text: "تصنيفات هيئة المعرفة والتنمية البشرية للمدارس", category: "education" },
  { id: "47", text: "التأمين الصحي في الإمارات", category: "healthcare" },
  { id: "48", text: "أفضل المستشفيات في دبي", category: "healthcare" },
  { id: "49", text: "الفحص الطبي في الإمارات", category: "healthcare" },
  { id: "50", text: "خدمات هيئة الصحة بدبي", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />