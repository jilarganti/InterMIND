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
    { id: "49", text: "اس سائٹ کے مقبول صفحات، ٹیبل", category: "general" },
    { id: "49", text: "اس سائٹ کے ٹاپ 10 عام سوالات", category: "general" },
    { id: "49", text: "فری زون سائٹ لنکس، ٹیبل", category: "general" },
    { id: "49", text: "قیمت کے ساتھ فری زون سائٹس کے لنکس کا ٹیبل", category: "general" },
    
    { id: "1", text: "متحدہ عرب امارات میں کمپنی کی رجسٹریشن", category: "business" },
    { id: "7", text: "متحدہ عرب امارات کے تجارتی لائسنس کی ضروریات", category: "business" },
    { id: "7", text: "متحدہ عرب امارات کی اداروں کی اقسام کا موازنہ، ٹیبل اور تجزیہ", category: "business" },
    { id: "48", text: "متحدہ عرب امارات کے 10 بہترین ہسپتال، فوائد اور نقصانات", category: "healthcare" },

    { id: "15", text: "متحدہ عرب امارات میں پاور آف اٹارنی", category: "legal" },

    // کاروباری خدمات (پہلا بلاک)
    { id: "2", text: "Mainland کمپنی کا قیام", category: "business" },
    { id: "3", text: "Free zone کمپنی کی رجسٹریشن", category: "business" },
    { id: "4", text: "Offshore کمپنی کی تشکیل", category: "business" },
    { id: "5", text: "متحدہ عرب امارات فری لانس ویزا", category: "business" },
    { id: "6", text: "دبئی بزنس لائسنس", category: "business" },
    { id: "23", text: "متحدہ عرب امارات میں کاروبار کا قیام", category: "business" },
    { id: "24", text: "دبئی فری زونز", category: "business" },
    { id: "25", text: "متحدہ عرب امارات کمپنی رجسٹریشن", category: "business" },
    { id: "26", text: "متحدہ عرب امارات فری لانس ویزا", category: "business" },
    
    // ویزا اور امیگریشن
    { id: "8", text: "متحدہ عرب امارات گولڈن ویزا کی درخواست", category: "visa" },
    { id: "9", text: "متحدہ عرب امارات ملازمت ویزا", category: "visa" },
    { id: "10", text: "متحدہ عرب امارات میں فیملی ویزا اسپانسرشپ", category: "visa" },
    { id: "11", text: "ویزا میڈیکل ٹیسٹ کی ضروریات", category: "visa" },
    { id: "12", text: "متحدہ عرب امارات رہائشی ویزا کا عمل", category: "visa" },
    { id: "27", text: "متحدہ عرب امارات ویزا کی ضروریات", category: "visa" },
    
    // قانونی اور دستاویزات
    { id: "13", text: "Emirates ID کی درخواست", category: "legal" },
    { id: "14", text: "متحدہ عرب امارات دستاویزات کی تصدیق", category: "legal" },
    { id: "16", text: "متحدہ عرب امارات کاروباری معاہدے کا جائزہ", category: "legal" },
    { id: "40", text: "Emirates ID کی تجدید", category: "legal" },
    
    // مالیاتی خدمات
    { id: "17", text: "متحدہ عرب امارات کارپوریٹ بینک اکاؤنٹ", category: "finance" },
    { id: "18", text: "متحدہ عرب امارات ٹیکس رجسٹریشن (VAT)", category: "finance" },
    { id: "19", text: "متحدہ عرب امارات میں اکاؤنٹنگ خدمات", category: "finance" },
    { id: "20", text: "متحدہ عرب امارات اقتصادی مواد کے ضوابط", category: "finance" },
    { id: "41", text: "متحدہ عرب امارات بینکنگ خدمات", category: "finance" },
    
    // جائیداد اور خدمات
    { id: "21", text: "متحدہ عرب امارات میں پراپرٹی انوسٹمنٹ", category: "property" },
    { id: "22", text: "دبئی آفس سپیس کرایہ", category: "property" },

    // صحت
    { id: "47", text: "متحدہ عرب امارات ہیلتھ انشورنس", category: "healthcare" },
    { id: "49", text: "متحدہ عرب امارات میڈیکل چیک اپ", category: "healthcare" },
    
    // سیاحت اور تفریح (آخر میں)
    { id: "28", text: "دبئی سیاحتی مقامات", category: "travel" },
    { id: "29", text: "Expo City دبئی", category: "attractions" },
    { id: "30", text: "Dubai Frame ٹکٹس", category: "attractions" },
    { id: "31", text: "Burj Khalifa ٹکٹس", category: "attractions" },
    { id: "32", text: "Museum of the Future", category: "attractions" },
    { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
    { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
    { id: "35", text: "Dubai Mall شاپنگ", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />