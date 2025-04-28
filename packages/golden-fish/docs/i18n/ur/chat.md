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
    { id: "49", text: "اس سائٹ کے ٹاپ 10 سوالات", category: "general" },
    { id: "49", text: "فری زون سائٹ لنکس، ٹیبل", category: "general" },
    { id: "49", text: "قیمت کے ساتھ فری زون سائٹس کے لنکس کا ٹیبل", category: "general" },
    
    { id: "1", text: "متحدہ عرب امارات میں کمپنی کی رجسٹریشن", category: "business" },
    { id: "7", text: "متحدہ عرب امارات کے تجارتی لائسنس کی ضروریات", category: "business" },
    { id: "7", text: "متحدہ عرب امارات کی ادارہ جاتی اقسام کا موازنہ، ٹیبل اور تجزیہ", category: "business" },
    { id: "7", text: "مالی کاروبار کے لیے دو بانیوں کے ساتھ برطانیہ سے مختلف فری زونز میں کمپنی منتقل کرنے کی لاگت کا ماہرانہ موازنہ۔ 8 ویزے، 3 خاندانی افراد + کتا۔ بزنس سنٹر میں کرایہ۔ برطانوی، متحدہ عرب امارات کا رہائشی نہیں", category: "business" },
    { id: "48", text: "متحدہ عرب امارات کے 10 بہترین ہسپتال، فوائد اور نقصانات", category: "healthcare" },

    { id: "15", text: "متحدہ عرب امارات میں پاور آف اٹارنی", category: "legal" },

    // کاروباری خدمات (پہلا بلاک)
    { id: "2", text: "Mainland کمپنی سیٹ اپ", category: "business" },
    { id: "3", text: "Free zone کمپنی رجسٹریشن", category: "business" },
    { id: "4", text: "Offshore کمپنی فارمیشن", category: "business" },
    { id: "5", text: "متحدہ عرب امارات فری لانس ویزا", category: "business" },
    { id: "6", text: "دبئی بزنس لائسنس", category: "business" },
    { id: "23", text: "متحدہ عرب امارات بزنس سیٹ اپ", category: "business" },
    { id: "24", text: "دبئی فری زونز", category: "business" },
    { id: "25", text: "متحدہ عرب امارات کمپنی رجسٹریشن", category: "business" },
    { id: "26", text: "متحدہ عرب امارات فری لانس ویزا", category: "business" },


  ]
</script>

<AIChat :prompts="chatPrompts" />
