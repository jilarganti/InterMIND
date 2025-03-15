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
  { id: "1", text: "Expo City Dubai", category: "আকর্ষণ" },
  { id: "2", text: "Dubai Frame টিকেট", category: "আকর্ষণ" },
  { id: "3", text: "Burj Khalifa টিকেট", category: "আকর্ষণ" },
  { id: "4", text: "Museum of the Future", category: "আকর্ষণ" },
  { id: "5", text: "Abu Dhabi Louvre", category: "আকর্ষণ" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "আকর্ষণ" },
  { id: "7", text: "Dubai Mall রেস্তোরাঁ", category: "খাবার" },
  { id: "8", text: "দুবাইয়ের সেরা আরবি খাবার", category: "খাবার" },
  { id: "9", text: "দুবাই Michelin স্টার রেস্তোরাঁ", category: "খাবার" },
  { id: "10", text: "শারজাহ স্ট্রিট ফুড", category: "খাবার" },
  { id: "11", text: "Palm Jumeirah ভাড়া", category: "আবাসন" },
  { id: "12", text: "Dubai Marina অ্যাপার্টমেন্ট", category: "আবাসন" },
  { id: "13", text: "Abu Dhabi সাশ্রয়ী আবাসন", category: "আবাসন" },
  { id: "14", text: "UAE ভাড়ার আইন", category: "আবাসন" },
  { id: "15", text: "Dubai Metro ম্যাপ", category: "পরিবহন" },
  { id: "16", text: "Abu Dhabi ট্যাক্সি ভাড়া", category: "পরিবহন" },
  { id: "17", text: "UAE ড্রাইভিং লাইসেন্স", category: "পরিবহন" },
  { id: "18", text: "Dubai RTA সেবা", category: "পরিবহন" },
  { id: "19", text: "Dubai Mall শপিং", category: "শপিং" },
  { id: "20", text: "Global Village Dubai", category: "শপিং" },
  { id: "21", text: "Dubai Gold Souk", category: "শপিং" },
  { id: "22", text: "Mall of Emirates অফার", category: "শপিং" },
  { id: "23", text: "UAE ব্যবসা স্থাপন", category: "ব্যবসা" },
  { id: "24", text: "Dubai free zones", category: "ব্যবসা" },
  { id: "25", text: "UAE কোম্পানি নিবন্ধন", category: "ব্যবসা" },
  { id: "26", text: "UAE freelance visa", category: "ব্যবসা" },
  { id: "27", text: "UAE ভিসা প্রয়োজনীয়তা", category: "ভ্রমণ" },
  { id: "28", text: "দুবাই পর্যটন আকর্ষণ", category: "ভ্রমণ" },
  { id: "29", text: "UAE ভিজিট ভিসা আবেদন", category: "ভ্রমণ" },
  { id: "30", text: "Abu Dhabi পর্যটন স্থান", category: "ভ্রমণ" },
  { id: "31", text: "Desert safari Dubai", category: "ভ্রমণ" },
  { id: "32", text: "বিদেশীদের জন্য দুবাই চাকরি", category: "চাকরি" },
  { id: "33", text: "UAE ওয়ার্ক পারমিট প্রক্রিয়া", category: "চাকরি" },
  { id: "34", text: "UAE তে রিমোট চাকরি", category: "চাকরি" },
  { id: "35", text: "UAE বেতন গাইড", category: "চাকরি" },
  { id: "36", text: "UAE আবহাওয়া পূর্বাভাস", category: "ইভেন্ট" },
  { id: "37", text: "দুবাই আসন্ন ইভেন্ট", category: "ইভেন্ট" },
  { id: "38", text: "UAE জাতীয় দিবস উদযাপন", category: "ইভেন্ট" },
  { id: "39", text: "দুবাই শপিং ফেস্টিভাল", category: "ইভেন্ট" },
  { id: "40", text: "Emirates ID নবায়ন", category: "সেবা" },
  { id: "41", text: "UAE ব্যাংকিং সেবা", category: "সেবা" },
  { id: "42", text: "DEWA বিল পরিশোধ", category: "সেবা" },
  { id: "43", text: "Etisalat প্যাকেজ আপগ্রেড", category: "সেবা" },
  { id: "44", text: "দুবাইয়ের সেরা স্কুল", category: "শিক্ষা" },
  { id: "45", text: "UAE বিশ্ববিদ্যালয় ভর্তি", category: "শিক্ষা" },
  { id: "46", text: "KHDA স্কুল রেটিং", category: "শিক্ষা" },
  { id: "47", text: "UAE স্বাস্থ্য বীমা", category: "স্বাস্থ্যসেবা" },
  { id: "48", text: "দুবাইয়ের সেরা হাসপাতাল", category: "স্বাস্থ্যসেবা" },
  { id: "49", text: "মেডিকেল চেক-আপ UAE", category: "স্বাস্থ্যসেবা" },
  { id: "50", text: "DHA সেবা", category: "স্বাস্থ্যসেবা" }
]
</script>

<AIChat :prompts="chatPrompts" />