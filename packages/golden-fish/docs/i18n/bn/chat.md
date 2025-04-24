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
    { id: "49", text: "এই সাইটের জনপ্রিয় পৃষ্ঠাগুলি, টেবিল", category: "general" },
    { id: "49", text: "এই সাইট, শীর্ষ ১০ প্রশ্নোত্তর", category: "general" },
    { id: "49", text: "free zone সাইটের লিংক, টেবিল", category: "general" },
    { id: "49", text: "মূল্যসহ free zone সাইটের লিংকের টেবিল", category: "general" },
    
    { id: "1", text: "UAE-তে কোম্পানি নিবন্ধন", category: "business" },
    { id: "7", text: "UAE ট্রেড লাইসেন্সের প্রয়োজনীয়তা", category: "business" },
    { id: "7", text: "UAE এনটিটি প্রকারের তুলনা, টেবিল ও বিশ্লেষণ", category: "business" },
    { id: "48", text: "UAE-এর সেরা ১০টি হাসপাতাল, সুবিধা ও অসুবিধা", category: "healthcare" },

    { id: "15", text: "UAE-তে পাওয়ার অফ অ্যাটর্নি", category: "legal" },

    // ব্যবসায়িক সেবা (প্রথম ব্লক)
    { id: "2", text: "Mainland কোম্পানি স্থাপন", category: "business" },
    { id: "3", text: "Free zone কোম্পানি নিবন্ধন", category: "business" },
    { id: "4", text: "Offshore কোম্পানি গঠন", category: "business" },
    { id: "5", text: "UAE ফ্রিল্যান্স ভিসা", category: "business" },
    { id: "6", text: "Dubai ব্যবসা লাইসেন্স", category: "business" },
    { id: "23", text: "UAE ব্যবসা স্থাপন", category: "business" },
    { id: "24", text: "Dubai free zones", category: "business" },
    { id: "25", text: "UAE কোম্পানি নিবন্ধন", category: "business" },
    { id: "26", text: "UAE ফ্রিল্যান্স ভিসা", category: "business" },
    
    // ভিসা ও অভিবাসন
    { id: "8", text: "UAE Golden Visa আবেদন", category: "visa" },
    { id: "9", text: "UAE কর্মসংস্থান ভিসা", category: "visa" },
    { id: "10", text: "UAE-তে পারিবারিক ভিসা স্পনসরশিপ", category: "visa" },
    { id: "11", text: "ভিসা মেডিকেল টেস্টের প্রয়োজনীয়তা", category: "visa" },
    { id: "12", text: "UAE রেসিডেন্সি ভিসা প্রক্রিয়া", category: "visa" },
    { id: "27", text: "UAE ভিসার প্রয়োজনীয়তা", category: "visa" },
    
    // আইনি ও নথি
    { id: "13", text: "Emirates ID আবেদন", category: "legal" },
    { id: "14", text: "UAE নথি সত্যায়ন", category: "legal" },
    { id: "16", text: "UAE ব্যবসায়িক চুক্তি পর্যালোচনা", category: "legal" },
    { id: "40", text: "Emirates ID নবায়ন", category: "legal" },
    
    // আর্থিক সেবা
    { id: "17", text: "UAE কর্পোরেট ব্যাংক অ্যাকাউন্ট", category: "finance" },
    { id: "18", text: "UAE ট্যাক্স নিবন্ধন (VAT)", category: "finance" },
    { id: "19", text: "UAE-তে হিসাবরক্ষণ সেবা", category: "finance" },
    { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
    { id: "41", text: "UAE ব্যাংকিং সেবা", category: "finance" },
    
    // রিয়েল এস্টেট ও সেবা
    { id: "21", text: "UAE সম্পত্তি বিনিয়োগ", category: "property" },
    { id: "22", text: "Dubai অফিস স্পেস ভাড়া", category: "property" },

    // স্বাস্থ্যসেবা
    { id: "47", text: "UAE স্বাস্থ্য বীমা", category: "healthcare" },
    { id: "49", text: "মেডিকেল চেক-আপ UAE", category: "healthcare" },
    
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