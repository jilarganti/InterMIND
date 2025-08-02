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
    // दर्द-आधारित खोज क्वेरी - व्यवसाय में भाषा बाधाएं
    { id: "1", text: "बिना उनकी भाषा जाने विदेशी ग्राहकों से कैसे संवाद करें", category: "communication" },
    { id: "2", text: "व्यावसायिक बैठकों के लिए रीयल टाइम अनुवाद", category: "translation" },
    { id: "3", text: "वीडियो कॉल इंटरप्रेटर सॉफ्टवेयर", category: "interpretation" },
    { id: "4", text: "भाषा बाधाओं के कारण खोए हुए सौदे", category: "business-problems" },
    
    // विशिष्ट व्यावसायिक परिदृश्य
    { id: "5", text: "अंतरराष्ट्रीय ग्राहकों को कैसे प्रस्तुति दें", category: "presentations" },
    { id: "6", text: "विभिन्न भाषाओं में उत्पाद डेमो का संचालन", category: "demos" },
    { id: "7", text: "अंतरराष्ट्रीय बिक्री बैठक सर्वोत्तम प्रथाएं", category: "sales" },
    { id: "8", text: "विभिन्न देशों के आपूर्तिकर्ताओं से संवाद", category: "supply-chain" },
    
    // समाधान-खोज क्वेरी
    { id: "9", text: "महंगे मानव दुभाषियों का विकल्प", category: "cost-saving" },
    { id: "10", text: "एआई अनुवाद बनाम मानव अनुवादक तुलना", category: "comparison" },
    { id: "11", text: "व्यवसाय के लिए तत्काल भाषा अनुवाद", category: "instant-translation" },
    { id: "12", text: "बहुभाषी टीम सहयोग टूल्स", category: "collaboration" },
    
    // तकनीकी आवश्यकताएं खोज
    { id: "13", text: "तकनीकी चर्चाओं के लिए अनुवाद सटीकता", category: "accuracy" },
    { id: "14", text: "एंटरप्राइज के लिए सुरक्षित अनुवाद सॉफ्टवेयर", category: "security" },
    { id: "15", text: "मौजूदा वीडियो कॉन्फ्रेंसिंग के साथ एकीकरण", category: "integration" },
    { id: "16", text: "जीडीपीआर अनुपालन अनुवाद सेवा", category: "compliance" },
    
    // आरओआई और व्यावसायिक मूल्य
    { id: "17", text: "अंतरराष्ट्रीय व्यवसाय में गलत संचार की लागत", category: "roi" },
    { id: "18", text: "दुभाषिया लागत बनाम एआई समाधान की गणना", category: "cost-calculator" },
    { id: "19", text: "अंतरराष्ट्रीय बिक्री रूपांतरण दर में वृद्धि", category: "conversion" },
    { id: "20", text: "भाषा प्रशिक्षण के बिना वैश्विक विस्तार", category: "expansion" },
    
    // प्रतियोगी तुलना खोज
    { id: "21", text: "Google Meet अनुवाद सीमाएं", category: "google-meet" },
    { id: "22", text: "Zoom उपशीर्षक अनुवाद समस्याएं", category: "zoom" },
    { id: "23", text: "Microsoft Teams अनुवाद गुणवत्ता मुद्दे", category: "teams" },
    
    // उद्योग-विशिष्ट खोज
    { id: "24", text: "विदेशी आपूर्तिकर्ताओं के साथ विनिर्माण संचार", category: "manufacturing" },
    { id: "25", text: "निर्यात व्यवसाय भाषा समाधान", category: "export" },
]
</script>

<AIChat :prompts="chatPrompts" />