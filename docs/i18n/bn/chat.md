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
  // ব্যবসায়িক পরিষেবা (প্রথম ব্লক)
  { id: "1", text: "UAE-তে কোম্পানি নিবন্ধন", category: "business" },
  { id: "2", text: "Mainland কোম্পানি স্থাপন", category: "business" },
  { id: "3", text: "Free Zone কোম্পানি নিবন্ধন", category: "business" },
  { id: "4", text: "Offshore কোম্পানি গঠন", category: "business" },
  { id: "5", text: "UAE ফ্রিল্যান্স ভিসা", category: "business" },
  { id: "6", text: "Dubai ব্যবসায়িক লাইসেন্স", category: "business" },
  { id: "7", text: "UAE ট্রেড লাইসেন্স প্রয়োজনীয়তা", category: "business" },
  { id: "23", text: "UAE ব্যবসা স্থাপন", category: "business" },
  { id: "24", text: "Dubai Free Zone সমূহ", category: "business" },
  { id: "25", text: "UAE কোম্পানি নিবন্ধন", category: "business" },
  { id: "26", text: "UAE ফ্রিল্যান্স ভিসা", category: "business" },
  
  // ভিসা এবং ইমিগ্রেশন
  { id: "8", text: "UAE Golden Visa আবেদন", category: "visa" },
  { id: "9", text: "UAE কর্মসংস্থান ভিসা", category: "visa" },
  { id: "10", text: "UAE-তে পারিবারিক ভিসা স্পনসরশিপ", category: "visa" },
  { id: "11", text: "ভিসা মেডিকেল টেস্ট প্রয়োজনীয়তা", category: "visa" },
  { id: "12", text: "UAE রেসিডেন্সি ভিসা প্রক্রিয়া", category: "visa" },
  { id: "27", text: "UAE ভিসা প্রয়োজনীয়তা", category: "visa" },
  
  // আইনি ও নথিপত্র
  { id: "13", text: "Emirates ID আবেদন", category: "legal" },
  { id: "14", text: "UAE নথি অনুমোদন", category: "legal" },
  { id: "15", text: "UAE-তে পাওয়ার অফ অ্যাটর্নি", category: "legal" },
  { id: "16", text: "UAE ব্যবসায়িক চুক্তি পর্যালোচনা", category: "legal" },
  { id: "40", text: "Emirates ID নবায়ন", category: "legal" },
  
  // আর্থিক পরিষেবা
  { id: "17", text: "UAE কর্পোরেট ব্যাংক অ্যাকাউন্ট", category: "finance" },
  { id: "18", text: "UAE ট্যাক্স নিবন্ধন (VAT)", category: "finance" },
  { id: "19", text: "UAE-তে অ্যাকাউন্টিং পরিষেবা", category: "finance" },
  { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
  { id: "41", text: "UAE ব্যাংকিং পরিষেবা", category: "finance" },
  
  // রিয়েল এস্টেট ও পরিষেবা
  { id: "21", text: "UAE সম্পত্তি বিনিয়োগ", category: "property" },
  { id: "22", text: "Dubai অফিস স্পেস ভাড়া", category: "property" },

  // স্বাস্থ্যসেবা
  { id: "47", text: "UAE স্বাস্থ্য বীমা", category: "healthcare" },
  { id: "48", text: "Dubai-এর সেরা হাসপাতাল", category: "healthcare" },
  { id: "49", text: "UAE মেডিকেল চেক-আপ", category: "healthcare" },
  
  // পর্যটন ও বিনোদন (শেষে)
  { id: "28", text: "Dubai পর্যটন আকর্ষণ", category: "travel" },
  { id: "29", text: "Expo City Dubai", category: "attractions" },
  { id: "30", text: "Dubai Frame টিকেট", category: "attractions" },
  { id: "31", text: "Burj Khalifa টিকেট", category: "attractions" },
  { id: "32", text: "Museum of the Future", category: "attractions" },
  { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
  { id: "35", text: "Dubai Mall শপিং", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />

<userStyle>Normal</userStyle>