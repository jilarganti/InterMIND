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
    { id: "49", text: "இந்த தளத்தின் பிரபலமான பக்கங்கள், அட்டவணை", category: "general" },
    { id: "49", text: "இந்த தளம், முதல் 10 அடிக்கடி கேட்கப்படும் கேள்விகள்", category: "general" },
    { id: "49", text: "free zone தள இணைப்புகள், அட்டவணை", category: "general" },
    { id: "49", text: "விலையுடன் free zone தள இணைப்புகளின் அட்டவணை", category: "general" },
    
    { id: "1", text: "UAE-இல் நிறுவன பதிவு", category: "business" },
    { id: "7", text: "UAE வர்த்தக உரிமத் தேவைகள்", category: "business" },
    { id: "7", text: "UAE நிறுவன வகைகளின் ஒப்பீடு, அட்டவணை & பகுப்பாய்வு", category: "business" },
    { id: "7", text: "இரண்டு நிறுவனர்களுடன் நிதி வணிகத்திற்காக பிரிட்டனில் இருந்து பல்வேறு free zone-களுக்கு நிறுவனத்தை மாற்றுவதற்கான செலவின நிபுணர் ஒப்பீடு. 8 விசாக்கள், 3 குடும்ப உறுப்பினர்கள் + ஒரு நாய். வணிக மையத்தில் வாடகை. பிரிட்டிஷ், UAE வசிப்பவர் அல்ல", category: "business" },
    { id: "48", text: "UAE-இல் சிறந்த 10 மருத்துவமனைகள், நன்மைகள் மற்றும் தீமைகள்", category: "healthcare" },

    { id: "15", text: "UAE-இல் அதிகார பத்திரம்", category: "legal" },

    { id: "2", text: "Mainland நிறுவன அமைப்பு", category: "business" },
    { id: "3", text: "Free zone நிறுவன பதிவு", category: "business" },
    { id: "4", text: "Offshore நிறுவன உருவாக்கம்", category: "business" },
    { id: "5", text: "UAE தனியார் தொழில் விசா", category: "business" },
    { id: "6", text: "துபாய் வணிக உரிமம்", category: "business" },
    { id: "23", text: "UAE வணிக அமைப்பு", category: "business" },
    { id: "24", text: "துபாய் free zones", category: "business" },
    { id: "25", text: "UAE நிறுவன பதிவு", category: "business" },
    { id: "26", text: "UAE தனியார் தொழில் விசா", category: "business" },
    
    { id: "8", text: "UAE Golden Visa விண்ணப்பம்", category: "visa" },
    { id: "9", text: "UAE வேலை விசா", category: "visa" },
    { id: "10", text: "UAE குடும்ப விசா ஸ்பான்சர்ஷிப்", category: "visa" },
    { id: "11", text: "விசா மருத்துவ பரிசோதனை தேவைகள்", category: "visa" },
    { id: "12", text: "UAE குடியிருப்பு விசா செயல்முறை", category: "visa" },
    { id: "27", text: "UAE விசா தேவைகள்", category: "visa" },
    
    { id: "13", text: "Emirates ID விண்ணப்பம்", category: "legal" },
    { id: "14", text: "UAE ஆவண சான்றளிப்பு", category: "legal" },
    { id: "16", text: "UAE வணிக ஒப்பந்த மதிப்பாய்வு", category: "legal" },
    { id: "40", text: "Emirates ID புதுப்பித்தல்", category: "legal" },
    
    { id: "17", text: "UAE கார்ப்பரேட் வங்கி கணக்கு", category: "finance" },
    { id: "18", text: "UAE வரி பதிவு (VAT)", category: "finance" },
    { id: "19", text: "UAE-இல் கணக்கியல் சேவைகள்", category: "finance" },
    { id: "20", text: "UAE பொருளாதார அடிப்படை விதிமுறைகள்", category: "finance" },
    { id: "41", text: "UAE வங்கி சேவைகள்", category: "finance" },
    
    { id: "21", text: "UAE சொத்து முதலீடு", category: "property" },
    { id: "22", text: "துபாய் அலுவலக இட வாடகை", category: "property" },

    { id: "47", text: "UAE சுகாதார காப்பீடு", category: "healthcare" },
    { id: "49", text: "மருத்துவ பரிசோதனை UAE", category: "healthcare" },
    
    { id: "28", text: "துபாய் சுற்றுலா கவர்ச்சி இடங்கள்", category: "travel" },
    { id: "29", text: "Expo City துபாய்", category: "attractions" },
    { id: "30", text: "Dubai Frame டிக்கெட்டுகள்", category: "attractions" },
    { id: "31", text: "Burj Khalifa டிக்கெட்டுகள்", category: "attractions" },
    { id: "32", text: "Museum of the Future", category: "attractions" },
    { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
    { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
    { id: "35", text: "Dubai Mall ஷாப்பிங்", category: "shopping" },
]
</script>

<AIChat :prompts="chatPrompts" />
