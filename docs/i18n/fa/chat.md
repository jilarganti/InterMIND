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
  // خدمات کسب و کار (بلوک اول)
  { id: "1", text: "ثبت شرکت در UAE", category: "business" },
  { id: "2", text: "راه‌اندازی شرکت Mainland", category: "business" },
  { id: "3", text: "ثبت شرکت در Free Zone", category: "business" },
  { id: "4", text: "تشکیل شرکت Offshore", category: "business" },
  { id: "5", text: "ویزای فریلنسری UAE", category: "business" },
  { id: "6", text: "مجوز تجاری دبی", category: "business" },
  { id: "7", text: "الزامات مجوز تجاری UAE", category: "business" },
  { id: "23", text: "راه‌اندازی کسب و کار در UAE", category: "business" },
  { id: "24", text: "مناطق Free Zone دبی", category: "business" },
  { id: "25", text: "ثبت شرکت در UAE", category: "business" },
  { id: "26", text: "ویزای فریلنسری UAE", category: "business" },
  
  // ویزا و مهاجرت
  { id: "8", text: "درخواست Golden Visa امارات", category: "visa" },
  { id: "9", text: "ویزای کار UAE", category: "visa" },
  { id: "10", text: "اسپانسرشیپ ویزای خانوادگی در UAE", category: "visa" },
  { id: "11", text: "الزامات آزمایش پزشکی ویزا", category: "visa" },
  { id: "12", text: "فرآیند ویزای اقامت UAE", category: "visa" },
  { id: "27", text: "الزامات ویزای UAE", category: "visa" },
  
  // حقوقی و اسناد
  { id: "13", text: "درخواست Emirates ID", category: "legal" },
  { id: "14", text: "تصدیق اسناد UAE", category: "legal" },
  { id: "15", text: "وکالت‌نامه در UAE", category: "legal" },
  { id: "16", text: "بررسی قرارداد تجاری UAE", category: "legal" },
  { id: "40", text: "تمدید Emirates ID", category: "legal" },
  
  // خدمات مالی
  { id: "17", text: "حساب بانکی شرکتی UAE", category: "finance" },
  { id: "18", text: "ثبت مالیاتی UAE (VAT)", category: "finance" },
  { id: "19", text: "خدمات حسابداری در UAE", category: "finance" },
  { id: "20", text: "مقررات اقتصادی UAE", category: "finance" },
  { id: "41", text: "خدمات بانکی UAE", category: "finance" },
  
  // املاک و خدمات
  { id: "21", text: "سرمایه‌گذاری ملکی UAE", category: "property" },
  { id: "22", text: "اجاره دفتر کار در دبی", category: "property" },

  // بهداشت و درمان
  { id: "47", text: "بیمه درمانی UAE", category: "healthcare" },
  { id: "48", text: "بهترین بیمارستان‌های دبی", category: "healthcare" },
  { id: "49", text: "چکاپ پزشکی UAE", category: "healthcare" },
  
  // گردشگری و تفریحات
  { id: "28", text: "جاذبه‌های گردشگری دبی", category: "travel" },
  { id: "29", text: "Expo City دبی", category: "attractions" },
  { id: "30", text: "بلیط Dubai Frame", category: "attractions" },
  { id: "31", text: "بلیط برج خلیفه", category: "attractions" },
  { id: "32", text: "موزه آینده", category: "attractions" },
  { id: "33", text: "لوور ابوظبی", category: "attractions" },
  { id: "34", text: "فراری ورلد ابوظبی", category: "attractions" },
  { id: "35", text: "خرید در دبی مال", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>