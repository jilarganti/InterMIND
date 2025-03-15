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
  { id: "1", text: "Expo City دبی", category: "attractions" },
  { id: "2", text: "بلیط Dubai Frame", category: "attractions" },
  { id: "3", text: "بلیط برج خلیفه", category: "attractions" },
  { id: "4", text: "موزه آینده", category: "attractions" },
  { id: "5", text: "لوور ابوظبی", category: "attractions" },
  { id: "6", text: "فراری ورلد ابوظبی", category: "attractions" },
  { id: "7", text: "رستوران‌های دبی مال", category: "food" },
  { id: "8", text: "بهترین غذاهای عربی دبی", category: "food" },
  { id: "9", text: "رستوران‌های میشلن دبی", category: "food" },
  { id: "10", text: "غذاهای خیابانی شارجه", category: "food" },
  { id: "11", text: "اجاره در نخل جمیرا", category: "housing" },
  { id: "12", text: "آپارتمان‌های دبی مارینا", category: "housing" },
  { id: "13", text: "مسکن ارزان قیمت ابوظبی", category: "housing" },
  { id: "14", text: "قوانین اجاره امارات", category: "housing" },
  { id: "15", text: "نقشه مترو دبی", category: "transportation" },
  { id: "16", text: "نرخ تاکسی ابوظبی", category: "transportation" },
  { id: "17", text: "گواهینامه رانندگی امارات", category: "transportation" },
  { id: "18", text: "خدمات RTA دبی", category: "transportation" },
  { id: "19", text: "خرید در دبی مال", category: "shopping" },
  { id: "20", text: "گلوبال ویلیج دبی", category: "shopping" },
  { id: "21", text: "بازار طلای دبی", category: "shopping" },
  { id: "22", text: "پیشنهادات مال آف امارات", category: "shopping" },
  { id: "23", text: "راه‌اندازی کسب و کار در امارات", category: "business" },
  { id: "24", text: "مناطق آزاد دبی", category: "business" },
  { id: "25", text: "ثبت شرکت در امارات", category: "business" },
  { id: "26", text: "ویزای فریلنسری امارات", category: "business" },
  { id: "27", text: "شرایط ویزای امارات", category: "travel" },
  { id: "28", text: "جاذبه‌های گردشگری دبی", category: "travel" },
  { id: "29", text: "درخواست ویزای توریستی امارات", category: "travel" },
  { id: "30", text: "مکان‌های گردشگری ابوظبی", category: "travel" },
  { id: "31", text: "سافاری صحرا در دبی", category: "travel" },
  { id: "32", text: "مشاغل برای خارجی‌ها در دبی", category: "jobs" },
  { id: "33", text: "فرآیند مجوز کار امارات", category: "jobs" },
  { id: "34", text: "مشاغل دورکاری در امارات", category: "jobs" },
  { id: "35", text: "راهنمای حقوق در امارات", category: "jobs" },
  { id: "36", text: "پیش‌بینی آب و هوای امارات", category: "events" },
  { id: "37", text: "رویدادهای آینده دبی", category: "events" },
  { id: "38", text: "جشن‌های روز ملی امارات", category: "events" },
  { id: "39", text: "فستیوال خرید دبی", category: "events" },
  { id: "40", text: "تمدید Emirates ID", category: "services" },
  { id: "41", text: "خدمات بانکی امارات", category: "services" },
  { id: "42", text: "پرداخت قبض DEWA", category: "services" },
  { id: "43", text: "ارتقای بسته Etisalat", category: "services" },
  { id: "44", text: "بهترین مدارس دبی", category: "education" },
  { id: "45", text: "پذیرش دانشگاه‌های امارات", category: "education" },
  { id: "46", text: "رتبه‌بندی مدارس KHDA", category: "education" },
  { id: "47", text: "بیمه درمانی امارات", category: "healthcare" },
  { id: "48", text: "بهترین بیمارستان‌های دبی", category: "healthcare" },
  { id: "49", text: "چکاپ پزشکی امارات", category: "healthcare" },
  { id: "50", text: "خدمات DHA", category: "healthcare" }
]
</script>

<AIChat :prompts="chatPrompts" />