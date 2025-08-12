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
    { id: "49", text: "এই সাইটের জনপ্রিয় পৃষ্ঠাগুলির তালিকা", category: "general" },
  { id: "49", text: "এই সাইটের শীর্ষ 10 প্রশ্নোত্তর", category: "general" },
  { id: "49", text: "ফ্রি জোন সাইটের লিঙ্কের তালিকা", category: "general" },
  { id: "49", text: "মূল্য সহ ফ্রি জোন সাইটের লিঙ্কের তালিকা", category: "general" },
  
  { id: "1", text: "ইউএইতে কোম্পানি নিবন্ধন", category: "business" },
  { id: "7", text: "ইউএই ট্রেড লাইসেন্সের প্রয়োজনীয়তা", category: "business" },
  { id: "7", text: "ইউএই এন্টিটি প্রকারের তুলনা, তালিকা ও বিশ্লেষণ", category: "business" },
  { id: "7", text: "ব্রিটেন থেকে বিভিন্ন ফ্রি জোনে একটি আর্থিক ব্যবসার সংস্থান পরিবর্তনের খরচের বিশেষজ্ঞ তুলনা। দুই প্রতিষ্ঠাতা সহ একটি আর্থিক ব্যবসা। ৮টি ভিসা, ৩ পরিবারের সদস্য + একটি কুকুর। ব্যবসা কেন্দ্রে ভাড়া। ব্রিটিশ, ইউএই বাসিন্দা নয়", category: "business" },
  { id: "48", text: "ইউএইতে ১০ সেরা হাসপাতাল, সুবিধা ও অসুবিধা", category: "healthcare" },

  { id: "15", text: "ইউএইতে ক্ষমতাপত্র", category: "legal" },

  // বিজনেস সার্ভিসেস (প্রথম ব্লক)
  { id: "2", text: "মেইনল্যান্ড কোম্পানি সেটআপ", category: "business" },
  { id: "3", text: "ফ্রি জোন কোম্পানি নিবন্ধন", category: "business" },
  { id: "4", text: "অফশোর কোম্পানি গঠন", category: "business" },
  { id: "5", text: "ইউএই ফ্রিল্যান্স ভিসা", category: "business" },
  { id: "6", text: "দুবাই ব্যবসা লাইসেন্স", category: "business" },
  { id: "23", text: "ইউএই ব্যবসা সেটআপ", category: "business" },
  { id: "24", text: "দুবাই ফ্রি জোনস", category: "business" },
  { id: "25", text: "ইউএই কোম্পানি নিবন্ধন", category: "business" },
  { id: "26", text: "ইউএই ফ্রিল্যান্স ভিসা", category: "business" },
  
  // ভিসা ও ইমিগ্রেশন
  { id: "8", text: "ইউএই গোল্ডেন ভিসা আবেদন", category: "visa" },
  { id: "9", text: "ইউএই চাকরির ভিসা", category: "visa" },
  { id: "10", text: "ইউএইতে পারিবারিক ভিসা স্পনসরশিপ", category: "visa" },
  { id: "11", text: "ভিসা মেডিকেল টেস্টের প্রয়োজনীয়তা", category: "visa" },
  { id: "12", text: "ইউএই বসবাসের ভিসা প্রক্রিয়া", category: "visa" },
  { id: "27", text: "ইউএই ভিসা প্রয়োজনীয়তা", category: "visa" },
  
  // আইনি ও নথি
  { id: "13", text: "এমিরেটস আইডি আবেদন", category: "legal" },
  { id: "14", text: "ইউএই নথি অটেস্টেশন", category: "legal" },
  { id: "16", text: "ইউএই ব্যবসা চুক্তি পর্যালোচনা", category: "legal" },
  { id: "40", text: "এমিরেটস আইডি নবায়ন", category: "legal" },
  
  // আর্থিক সার্ভিসেস
  { id: "17", text: "ইউএই কর্পোরেট ব্যাংক অ্যাকাউন্ট", category: "finance" },
  { id: "18", text: "ইউএই ট্যাক্স নিবন্ধন (VAT)", category: "finance" },
  { id: "19", text: "ইউএইতে হিসাবরক্ষণ সার্ভিস", category: "finance" },
  { id: "20", text: "ইউএই ইকোনমিক সাবস্ট্যান্স রেগুলেশনস", category: "finance" },
  { id: "41", text: "ইউএই ব্যাংকিং সার্ভিসেস", category: "finance" },
  
  // রিয়েল এস্টেট ও সার্ভিসেস
  { id: "21", text: "ইউএই প্রোপার্টি ইনভেস্টমেন্ট", category: "property" },
  { id: "22", text: "দুবাই অফিস স্পেস ভাড়া", category: "property" },

  // স্বাস্থ্যসেবা
  { id: "47", text: "ইউএই স্বাস্থ্য বীমা", category: "healthcare" },
  { id: "49", text: "ইউএই মেডিকেল চেক-আপ", category: "healthcare" },
  
  // পর্যটন ও বিনোদন (শেষে)
  { id: "28", text: "দুবাই পর্যটন আকর্ষণ", category: "travel" },
  { id: "29", text: "এক্সপো সিটি দুবাই", category: "attractions" },
  { id: "30", text: "দুবাই ফ্রেম টিকেট", category: "attractions" },
  { id: "31", text: "বুর্জ খলিফা টিকেট", category: "attractions" },
  { id: "32", text: "মিউজিয়াম অফ দ্য ফিউচার", category: "attractions" },
  { id: "33", text: "আবু ধাবি লুভর", category: "attractions" },
  { id: "34", text: "ফেরারি ওয়ার্ল্ড আবু ধাবি", category: "attractions" },
  { id: "35", text: "দুবাই মল শপিং", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />
