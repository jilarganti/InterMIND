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
  // کاروباری خدمات (پہلا بلاک)
  { id: "1", text: "UAE میں کمپنی کی رجسٹریشن", category: "business" },
  { id: "2", text: "Mainland کمپنی کا قیام", category: "business" },
  { id: "3", text: "Free Zone کمپنی کی رجسٹریشن", category: "business" },
  { id: "4", text: "Offshore کمپنی کی تشکیل", category: "business" },
  { id: "5", text: "UAE فری لانس ویزا", category: "business" },
  { id: "6", text: "Dubai کاروباری لائسنس", category: "business" },
  { id: "7", text: "UAE تجارتی لائسنس کی ضروریات", category: "business" },
  { id: "23", text: "UAE کاروباری سیٹ اپ", category: "business" },
  { id: "24", text: "Dubai free zones", category: "business" },
  { id: "25", text: "UAE کمپنی رجسٹریشن", category: "business" },
  { id: "26", text: "UAE فری لانس ویزا", category: "business" },
  
  // ویزا اور امیگریشن
  { id: "8", text: "UAE Golden Visa کی درخواست", category: "visa" },
  { id: "9", text: "UAE ملازمت ویزا", category: "visa" },
  { id: "10", text: "UAE میں خاندانی ویزا اسپانسرشپ", category: "visa" },
  { id: "11", text: "ویزا طبی ٹیسٹ کی ضروریات", category: "visa" },
  { id: "12", text: "UAE رہائشی ویزا کا عمل", category: "visa" },
  { id: "27", text: "UAE ویزا کی ضروریات", category: "visa" },
  
  // قانونی اور دستاویزات
  { id: "13", text: "Emirates ID کی درخواست", category: "legal" },
  { id: "14", text: "UAE دستاویزات کی تصدیق", category: "legal" },
  { id: "15", text: "UAE میں مختار نامہ", category: "legal" },
  { id: "16", text: "UAE کاروباری معاہدے کا جائزہ", category: "legal" },
  { id: "40", text: "Emirates ID کی تجدید", category: "legal" },
  
  // مالیاتی خدمات
  { id: "17", text: "UAE کارپوریٹ بینک اکاؤنٹ", category: "finance" },
  { id: "18", text: "UAE ٹیکس رجسٹریشن (VAT)", category: "finance" },
  { id: "19", text: "UAE میں اکاؤنٹنگ خدمات", category: "finance" },
  { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
  { id: "41", text: "UAE بینکنگ خدمات", category: "finance" },
  
  // جائیداد اور خدمات
  { id: "21", text: "UAE پراپرٹی انوسٹمنٹ", category: "property" },
  { id: "22", text: "Dubai آفس سپیس کرایہ", category: "property" },

  // صحت کی دیکھ بھال
  { id: "47", text: "UAE صحت کا بیمہ", category: "healthcare" },
  { id: "48", text: "Dubai کے بہترین ہسپتال", category: "healthcare" },
  { id: "49", text: "UAE میڈیکل چیک اپ", category: "healthcare" },
  
  // سیاحت اور تفریح (آخر میں)
  { id: "28", text: "Dubai سیاحتی مقامات", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Dubai Frame ٹکٹس", category: "attractions" },
  { id: "31", text: "Burj Khalifa ٹکٹس", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Dubai Mall شاپنگ", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>