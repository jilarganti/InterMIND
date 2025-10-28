---
layout: "BlogPost"
title: "மென்பொருள் சோதனை கருத்துகள் மற்றும் சொற்களஞ்சியத்தின் அறிமுகம்"
description: "மென்பொருள் சோதனையின் அடிப்படைகளைப் புரிந்துகொள்வதற்கான ஆரம்பநிலை வழிகாட்டி, சோதனை வகைகள், செயல்முறைகள் மற்றும் முக்கிய சொற்களஞ்சியம் உட்பட."
date: "2025-10-06"
author: "[Jilarganti](https://github.com/jilarganti)"
---

# மென்பொருள் சோதனை அடிப்படைகள்: முழுமையான வழிகாட்டி (2025)

<p class="subtitle">மென்பொருள் சோதனையைத் தொடங்குவதற்கு நீங்கள் தெரிந்துகொள்ள வேண்டிய அனைத்தும்</p>

> **மென்பொருள் சோதனை என்றால் என்ன?**  
> மென்பொருள் சோதனை என்பது ஒரு மென்பொருள் பயன்பாடு எதிர்பார்த்தபடி செயல்படுகிறதா என்பதை மதிப்பீடு செய்து சரிபார்க்கும் செயல்முறையாகும். இது மென்பொருள் பயனர்களை அடையும் முன் பிழைகள், இடைவெளிகள் அல்லது விடுபட்ட தேவைகளை அடையாளம் காண உதவுகிறது.

## மென்பொருள் சோதனையின் வகைகள்

வளர்ச்சி வாழ்க்கைச் சுழற்சியில் ஒவ்வொன்றும் வெவ்வேறு நோக்கத்திற்காக சேவை செய்யும் நான்கு முக்கிய சோதனை வகைகள் உள்ளன:

| வகை                      | நாம் என்ன சோதிக்கிறோம்           | எப்போது              | இலக்கு                    |
| ----------------------- | ---------------------------- | ------------------ | ----------------------- |
| **அலகு சோதனை**          | தனிப்பட்ட செயல்பாடுகள்/முறைகள்    | வளர்ச்சியின் போது      | ஒவ்வொரு பகுதியும் வேலை செய்கிறதா என்பதை சரிபார்க்க |
| **ஒருங்கிணைப்பு சோதனை**   | தொகுதிகள் எவ்வாறு ஒன்றாக வேலை செய்கின்றன | அலகு சோதனைகளுக்குப் பிறகு | இணைப்புகளை சரிபார்க்க       |
| **அமைப்பு சோதனை**        | முழுமையான பயன்பாடு              | வெளியீட்டிற்கு முன்      | முடிவு முதல் முடிவு வரை சரிபார்ப்பு   |
| **ஏற்றுக்கொள்ளல் சோதனை**  | வணிகத் தேவைகள்                 | இறுதி கட்டம்         | அது தயாராக உள்ளதா என்பதை உறுதிப்படுத்த      |

## சோதனை செயல்முறை

மென்பொருள் சோதனை திட்டமிடலில் இருந்து வெளியீடு வரை தெளிவான பணிப்பாய்வை பின்பற்றுகிறது:

<div class="process-flow">
  <div class="process-step">
    <div class="process-icon">📋</div>
    <div class="process-label">திட்டமிடு</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">✍️</div>
    <div class="process-label">வடிவமைப்பு</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">▶️</div>
    <div class="process-label">செயல்படுத்து</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">🐛</div>
    <div class="process-label">அறிக்கை</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">🔧</div>
    <div class="process-label">சரிசெய்</div>
  </div>
  <div class="arrow">→</div>
  <div class="process-step">
    <div class="process-icon">✅</div>
    <div class="process-label">சரிபார்</div>
  </div>
</div>

## கைமுறை vs தானியங்கு சோதனை

இரண்டு அணுகுமுறைகளும் சோதனை உத்தியில் தங்கள் இடத்தைக் கொண்டுள்ளன:

<div class="comparison-grid">

<div class="comparison-card manual">

### 👤 கைமுறை சோதனை

- மனித சோதனையாளர்கள் பயன்பாட்டை ஆராய்கின்றனர்
- UI/UX மதிப்பீட்டிற்கு சிறந்தது
- புதிய அம்சங்களுக்கு ஏற்றது
- நெகிழ்வான மற்றும் படைப்பாற்றல்
- மீண்டும் மீண்டும் செய்யும் பணிகளுக்கு மெதுவானது

**சிறந்தது:** ஆய்வு சோதனை, பயன்பாட்டுத்தன்மை, தற்காலிக சூழ்நிலைகள்

</div>

<div class="comparison-card automated">

### 🤖 தானியங்கு சோதனை

- ஸ்கிரிப்ட்கள் தானாகவே சோதனைகளை இயக்குகின்றன
- வேகமான மற்றும் நிலையான
- பின்னடைவு சோதனைக்கு ஏற்றது
- ஆரம்ப அமைப்பு நேரம் தேவை
- நீண்ட கால செலவு-பயனுள்ளது

**சிறந்தது:** பின்னடைவு, API சோதனை, மீண்டும் மீண்டும் வரும் சூழ்நிலைகள்

</div>

</div>

## சோதனை பிரமிட்

சமநிலையான சோதனை உத்தி இந்த விநியோகத்தைப் பின்பற்றுகிறது:

<div class="pyramid">
  <div class="pyramid-level level-ui">UI/E2E சோதனைகள் (குறைவான)</div>
  <div class="pyramid-level level-integration">ஒருங்கிணைப்பு சோதனைகள் (அதிகமான)</div>
  <div class="pyramid-level level-unit">அலகு சோதனைகள் (மிக அதிகமான)</div>
</div>

<p style="text-align: center; color: var(--vp-c-text-2); margin-top: 1em;">
  <small>அதிக அலகு சோதனைகள் = வேகமான பின்னூட்டம், குறைந்த செலவு. குறைவான UI சோதனைகள் = குறைந்த பராமரிப்பு.</small>
</p>

## பொதுவான சோதனை சொற்கள்

| சொல்                    | வரையறை                                                                      |
| ---------------------- | --------------------------------------------------------------------------- |
| **சோதனை வழக்கு**        | எதிர்பார்க்கப்படும் முடிவுகளுடன் சோதிக்க வேண்டிய குறிப்பிட்ட சூழ்நிலை           |
| **பிழை/குறைபாடு**       | தவறான நடத்தையை ஏற்படுத்தும் பிழை அல்லது குறைபாடு                           |
| **பின்னடைவு சோதனை**     | புதிய மாற்றங்கள் ஏற்கனவே உள்ள அம்சங்களை உடைக்கவில்லை என்பதை உறுதிப்படுத்த மீண்டும் சோதனை |
| **புகை சோதனை**         | ஆழமான சோதனைக்கு போதுமான நிலையான கட்டமைப்பு உள்ளதா என்பதை சரிபார்க்க விரைவான அடிப்படை சோதனைகள் |
| **சோதனை கவரேஜ்**       | சோதனைகளால் செயல்படுத்தப்படும் குறியீட்டின் சதவீதம்                            |

## அடிக்கடி கேட்கப்படும் கேள்விகள்

### கே: மென்பொருள் சோதனைக்கு எனக்கு குறியீட்டு திறன்கள் தேவையா?

கைமுறை சோதனைக்கு, அடிப்படை தொழில்நுட்ப அறிவு போதுமானது. தானியங்கு சோதனைக்கு நிரலாக்க திறன்கள் தேவை (Python, Java, JavaScript பொதுவானவை).

### கே: QA மற்றும் சோதனைக்கு இடையே என்ன வித்தியாசம்?

சோதனை என்பது பிழைகளைக் கண்டறிவது. QA (Quality Assurance) என்பது நல்ல செயல்முறைகள் மற்றும் தரநிலைகள் மூலம் பிழைகளைத் தடுக்கும் பரந்த செயல்முறையாகும்.

### கே: எவ்வளவு சோதனை போதுமானது?

சரியான எண் எதுவும் இல்லை. ஆபத்து, நேரம் மற்றும் வளங்களை சமநிலைப்படுத்துங்கள். முக்கியமான அம்சங்களுக்கு அதிக சோதனை தேவை; குறைந்த ஆபத்துள்ள பகுதிகளுக்கு குறைவாக தேவை.

### கே: AI மென்பொருள் சோதனையாளர்களை மாற்ற முடியுமா?

AI மீண்டும் மீண்டும் செய்யும் சோதனைகளை தானியங்குபடுத்த முடியும், ஆனால் வணிக தர்க்கம், விளிம்பு நிகழ்வுகள் மற்றும் பயனர் அனுபவத்தைப் புரிந்துகொள்வதற்கு மனித சோதனையாளர்கள் இன்னும் அவசியம்.

---

::: info சோதனையைத் தொடங்க தயாரா?
இந்த வழிகாட்டி அடிப்படைகளை உள்ளடக்கியது. கற்றுக்கொள்வதற்கான சிறந்த வழி பயிற்சி செய்வதுதான்—எளிய சோதனை நிகழ்வுகளுடன் தொடங்கி படிப்படியாக உங்கள் திறன்களை வளர்த்துக் கொள்ளுங்கள்.
:::

<style scoped>
.subtitle {
  color: var(--vp-c-text-2);
  font-size: 1.1em;
  margin-bottom: 2em;
}

.process-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2em 0;
  padding: 1.5em;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  flex-wrap: wrap;
}

.process-step {
  text-align: center;
  flex: 1;
  min-width: 80px;
  margin: 10px 5px;
}

.process-icon {
  font-size: 2em;
  margin-bottom: 0.3em;
}

.process-label {
  font-size: 0.9em;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.arrow {
  font-size: 1.5em;
  color: var(--vp-c-brand);
  margin: 0 5px;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em;
  margin: 2em 0;
}

.comparison-card {
  padding: 1.5em;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.comparison-card.manual {
  border-left: 4px solid #ffc107;
}

.comparison-card.automated {
  border-left: 4px solid #17a2b8;
}

.comparison-card h3 {
  margin-top: 0;
  margin-bottom: 1em;
  color: var(--vp-c-text-1);
}

.comparison-card ul {
  list-style: none;
  padding-left: 0;
}

.comparison-card li {
  padding: 0.5em 0;
  padding-left: 1.5em;
  position: relative;
  color: var(--vp-c-text-1);
}

.comparison-card li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

.comparison-card p {
  margin-top: 1em;
  color: var(--vp-c-text-2);
}

.comparison-card strong {
  color: var(--vp-c-text-1);
}

.pyramid {
  margin: 2em auto;
  text-align: center;
  max-width: 500px;
}

.pyramid-level {
  margin: 10px auto;
  padding: 15px;
  border-radius: 4px;
  font-weight: 500;
  transition: transform 0.2s;
  color: white;
}

.pyramid-level:hover {
  transform: scale(1.02);
}

.level-ui {
  width: 40%;
  background: #e74c3c;
}

.level-integration {
  width: 60%;
  background: #f39c12;
}

.level-unit {
  width: 80%;
  background: #27ae60;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
  
  .process-flow {
    flex-direction: column;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
}
</style>