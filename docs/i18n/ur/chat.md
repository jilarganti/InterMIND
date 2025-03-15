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
  { id: "1", text: "Expo City Dubai", category: "دلچسپیاں" },
  { id: "2", text: "Dubai Frame ٹکٹس", category: "دلچسپیاں" },
  { id: "3", text: "Burj Khalifa ٹکٹس", category: "دلچسپیاں" },
  { id: "4", text: "Museum of the Future", category: "دلچسپیاں" },
  { id: "5", text: "Abu Dhabi Louvre", category: "دلچسپیاں" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "دلچسپیاں" },
  { id: "7", text: "Dubai Mall ریستوراں", category: "کھانا" },
  { id: "8", text: "دبئی میں بہترین عربی کھانا", category: "کھانا" },
  { id: "9", text: "دبئی میشلن اسٹار ریستوراں", category: "کھانا" },
  { id: "10", text: "شارجہ اسٹریٹ فوڈ", category: "کھانا" },
  { id: "11", text: "Palm Jumeirah کرایہ", category: "رہائش" },
  { id: "12", text: "Dubai Marina اپارٹمنٹس", category: "رہائش" },
  { id: "13", text: "ابوظہبی سستی رہائش", category: "رہائش" },
  { id: "14", text: "UAE کرایہ قوانین", category: "رہائش" },
  { id: "15", text: "Dubai Metro نقشہ", category: "نقل و حمل" },
  { id: "16", text: "ابوظہبی ٹیکسی کرایہ", category: "نقل و حمل" },
  { id: "17", text: "UAE ڈرائیونگ لائسنس", category: "نقل و حمل" },
  { id: "18", text: "Dubai RTA خدمات", category: "نقل و حمل" },
  { id: "19", text: "Dubai Mall خریداری", category: "خریداری" },
  { id: "20", text: "Global Village Dubai", category: "خریداری" },
  { id: "21", text: "Dubai Gold Souk", category: "خریداری" },
  { id: "22", text: "Mall of Emirates آفرز", category: "خریداری" },
  { id: "23", text: "UAE کاروبار قیام", category: "کاروبار" },
  { id: "24", text: "Dubai free zones", category: "کاروبار" },
  { id: "25", text: "UAE کمپنی رجسٹریشن", category: "کاروبار" },
  { id: "26", text: "UAE فری لانس ویزا", category: "کاروبار" },
  { id: "27", text: "UAE ویزا شرائط", category: "سفر" },
  { id: "28", text: "دبئی سیاحتی مقامات", category: "سفر" },
  { id: "29", text: "UAE ویزٹ ویزا درخواست", category: "سفر" },
  { id: "30", text: "ابوظہبی سیاحتی مقامات", category: "سفر" },
  { id: "31", text: "Desert safari Dubai", category: "سفر" },
  { id: "32", text: "غیر ملکیوں کے لیے دبئی نوکریاں", category: "نوکریاں" },
  { id: "33", text: "UAE ورک پرمٹ کا عمل", category: "نوکریاں" },
  { id: "34", text: "UAE میں ریموٹ نوکریاں", category: "نوکریاں" },
  { id: "35", text: "UAE تنخواہ گائیڈ", category: "نوکریاں" },
  { id: "36", text: "UAE موسم کی پیشگوئی", category: "تقریبات" },
  { id: "37", text: "دبئی آنے والی تقریبات", category: "تقریبات" },
  { id: "38", text: "UAE قومی دن تقریبات", category: "تقریبات" },
  { id: "39", text: "دبئی شاپنگ فیسٹیول", category: "تقریبات" },
  { id: "40", text: "Emirates ID تجدید", category: "خدمات" },
  { id: "41", text: "UAE بینکنگ خدمات", category: "خدمات" },
  { id: "42", text: "DEWA بل ادائیگی", category: "خدمات" },
  { id: "43", text: "Etisalat پیکج اپ گریڈ", category: "خدمات" },
  { id: "44", text: "دبئی میں بہترین اسکول", category: "تعلیم" },
  { id: "45", text: "UAE یونیورسٹی داخلہ", category: "تعلیم" },
  { id: "46", text: "KHDA اسکول درجہ بندی", category: "تعلیم" },
  { id: "47", text: "UAE صحت بیمہ", category: "صحت" },
  { id: "48", text: "دبئی میں بہترین ہسپتال", category: "صحت" },
  { id: "49", text: "UAE میڈیکل چیک اپ", category: "صحت" },
  { id: "50", text: "DHA خدمات", category: "صحت" }
]
</script>

<AIChat :prompts="chatPrompts" />