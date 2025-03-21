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
  { id: "1", text: "Expo City Dubai", category: "attractions" },
  { id: "2", text: "Dubai Frame tickets", category: "attractions" },
  { id: "3", text: "Burj Khalifa tickets", category: "attractions" },
  { id: "4", text: "Museum of the Future", category: "attractions" },
  { id: "5", text: "Abu Dhabi Louvre", category: "attractions" },
  { id: "6", text: "Ferrari World Abu Dhabi", category: "attractions" },

  { id: "19", text: "Dubai Mall shopping", category: "shopping" },

  { id: "23", text: "UAE business setup", category: "business" },
  { id: "24", text: "Dubai free zones", category: "business" },
  { id: "25", text: "UAE company registration", category: "business" },
  { id: "26", text: "UAE freelance visa", category: "business" },
  { id: "27", text: "UAE visa requirements", category: "travel" },
  { id: "28", text: "Dubai tourist attractions", category: "travel" },
  { id: "40", text: "Emirates ID renewal", category: "services" },
  { id: "41", text: "UAE banking services", category: "services" },
  
  { id: "47", text: "UAE health insurance", category: "healthcare" },
  { id: "48", text: "Best hospitals in Dubai", category: "healthcare" },
  { id: "49", text: "Medical check-up UAE", category: "healthcare" },

]
</script>

<AIChat :prompts="chatPrompts" />
