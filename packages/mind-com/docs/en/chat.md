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
    // Pain-based search queries - Language barriers in business
    { id: "9", text: "Alternative to expensive human interpreters", category: "cost-saving" },
    { id: "1", text: "How to communicate with foreign clients without knowing their language", category: "communication" },
    { id: "2", text: "Real time translation for business meetings", category: "translation" },
    { id: "3", text: "Video call interpreter software", category: "interpretation" },
    { id: "4", text: "Lost deals due to language barriers", category: "business-problems" },
    
    // Specific business scenarios
    { id: "5", text: "How to present to international clients", category: "presentations" },
    { id: "6", text: "Conduct product demos in different languages", category: "demos" },
    { id: "7", text: "International sales meeting best practices", category: "sales" },
    { id: "8", text: "Communicate with suppliers from different countries", category: "supply-chain" },
    
    // Solution-seeking queries
    { id: "10", text: "AI translation vs human translator comparison", category: "comparison" },
    { id: "11", text: "Instant language translation for business", category: "instant-translation" },
    { id: "12", text: "Multilingual team collaboration tools", category: "collaboration" },
    
    // Technical requirements searches
    { id: "13", text: "Translation accuracy for technical discussions", category: "accuracy" },
    { id: "14", text: "Secure translation software for enterprise", category: "security" },
    { id: "15", text: "Integration with existing video conferencing", category: "integration" },
    { id: "16", text: "GDPR compliant translation service", category: "compliance" },
    
    // ROI and business value
    { id: "17", text: "Cost of miscommunication in international business", category: "roi" },
    { id: "18", text: "Calculate interpreter costs vs AI solution", category: "cost-calculator" },
    { id: "19", text: "Increase international sales conversion rates", category: "conversion" },
    { id: "20", text: "Global expansion without language training", category: "expansion" },
    
    // Competitor comparison searches
    { id: "21", text: "Google Meet translation limitations", category: "google-meet" },
    { id: "22", text: "Zoom subtitle translation problems", category: "zoom" },
    { id: "23", text: "Microsoft Teams translation quality issues", category: "teams" },
    
    // Industry-specific searches
    { id: "24", text: "Manufacturing communication with overseas suppliers", category: "manufacturing" },
    { id: "25", text: "Export business language solution", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />
