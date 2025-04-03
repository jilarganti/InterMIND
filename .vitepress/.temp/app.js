var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrRenderStyle, ssrRenderTeleport, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrGetDirectiveProps, renderToString } from "vue/server-renderer";
import { defineComponent, mergeProps, useSSRContext, shallowRef, inject, computed, ref, watch, onUnmounted, reactive, markRaw, readonly, nextTick, h, unref, onMounted, watchEffect, watchPostEffect, onUpdated, resolveComponent, createVNode, resolveDynamicComponent, withCtx, renderSlot, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, provide, toHandlers, withKeys, onBeforeUnmount, useSlots, isRef, createSSRApp } from "vue";
import { usePreferredDark, useDark, useMediaQuery, useWindowSize, onKeyStroke, useWindowScroll, useScrollLock } from "@vueuse/core";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import { defineStore, createPinia } from "pinia";
import MarkdownIt from "markdown-it";
import { v5 } from "uuid";
import { Home, Search, Plus, MessageSquare, Bug, ArrowUp, Square, ArrowLeft } from "lucide-vue-next";
import { useChat } from "@ai-sdk/vue";
const _sfc_main$1k = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  __ssrInlineRender: true,
  props: {
    text: {},
    type: { default: "tip" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["VPBadge", _ctx.type]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(_ctx.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
function deserializeFunctions(r) {
  return Array.isArray(r) ? r.map(deserializeFunctions) : typeof r == "object" && r !== null ? Object.keys(r).reduce((t, n) => (t[n] = deserializeFunctions(r[n]), t), {}) : typeof r == "string" && r.startsWith("_vp-fn_") ? new Function(`return ${r.slice(7)}`)() : r;
}
const siteData = deserializeFunctions(JSON.parse(`{"lang":"en-US","dir":"ltr","title":"Golden Fish","description":"A VitePress site","base":"/","head":[],"router":{"prefetchLinks":true},"appearance":true,"themeConfig":{"logo":{"light":"/img/Logo.avif","dark":"/img/Logo.avif"}},"locales":{"root":{"name":"English","label":"English","lang":"en-US","description":"Expert UAE company formation and support services. Company setup, banking, tax, legal and visa solutions. Making your business dreams reality!","head":[["meta",{"property":"og:title","content":"Expert UAE company formation and support services. Company setup, banking, tax, legal and visa solutions."}]],"themeConfig":{"nav":[{"text":"Services","activeMatch":"/company-registration/","items":[{"text":"Company registration","link":"/uae-business/company-registration/overview"},{"text":"Banking solutions","link":"/uae-business/company-registration/banking"},{"text":"Migration","link":"/uae-business/company-registration/employment-visas"}]},{"text":"Resources","items":[{"text":"About","link":"/resources/about"}]},{"text":"Contact","link":"/resources/contacts"}],"sidebar":{"/uae-business/":{"base":"/uae-business/","items":[{"text":"UAE business summary","collapsed":false,"items":[{"text":"Company registration","link":"company-registration/overview"},{"text":"Pros & cons","link":"company-registration/benefits-problems"},{"text":"Corporate banking solutions","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"Visas & EID","link":"company-registration/employment-visas"},{"text":"Fees and timelines","link":"company-registration/fees-timelines"},{"text":"Pay only after success","link":"benefits/success-based-fees"}]},{"text":"UAE corporate structures","collapsed":true,"items":[{"text":"Company registration steps","link":"company-registration/insights/incorporation-steps"},{"text":"UAE free zones","link":"company-registration/free-zones"},{"text":"UAE mainland","link":"company-registration/mainland"}]},{"text":"UAE business compliance guaranteed","collapsed":true,"items":[{"text":"Guaranteed corporate bank account approvals","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"Bank accounts for high-risk business","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"Keep your business compliant and protected","link":"company-registration/Protect-Your-Business"}]},{"text":"Legal, accounting and tax","collapsed":true,"items":[{"text":"Accounting and tax considerations","link":"company-registration/accounting-legal"},{"text":"UBO register","link":"company-registration/ubo"}]},{"text":"Comparisons","collapsed":true,"items":[{"text":"Mainland vs free zones","link":"comparison/mainland-vs-free-zones"},{"text":"UAE entities compared","link":"comparison/entity-types"}]}]},"/resources/":{"base":"/resources/","items":[{"text":"About","link":"about"}]},"/contact-us/":{"base":"/contact-us/","items":[{"text":"Contacts","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">Privacy Settings</a>"},"contact_form":{"name":"Name *","namePlaceholder":"your name","email":"Email *","emailPlaceholder":"your email address","phone":"Phone *","phonePlaceholder":"e.g., +1 1234567890 or (1) 123 456-7890","phoneError":"Please enter phone number","category":"How can we help you? *","categoryPlaceholder":"select service type","message":"Let's discuss your goals (optional)","messagePlaceholder":"describe your project or requirements","submit":"Submit request","sending":"Sending...","successTitle":"Thank you!","successMessage":"We greatly appreciate your interest! Our team will contact you shortly to discuss your needs.","defaultCategories":["Company registration","Opening bank accounts","EID & Golden Visa","Other Services"],"defaultButtonText":"Get a free consultation"}}},"ar":{"name":"Arabic (Gulf)","label":"اَلْعَرَبِيَّةُ","lang":"ar-AE","description":"خدمات احترافية لتأسيس الشركات والدعم في الإمارات. حلول تأسيس الشركات والخدمات المصرفية والضرائب والقانون والتأشيرات. نحول أحلام أعمالك إلى حقيقة!","head":[["meta",{"property":"og:title","content":"خدمات احترافية لتأسيس الشركات والدعم في الإمارات. حلول تأسيس الشركات والخدمات المصرفية والضرائب والقانون والتأشيرات."}]],"themeConfig":{"nav":[{"text":"الخدمات","activeMatch":"/ar/company-registration/","items":[{"text":"تسجيل الشركات","link":"/ar/uae-business/company-registration/overview"},{"text":"الحلول المصرفية","link":"/ar/uae-business/company-registration/banking"},{"text":"الهجرة","link":"/ar/uae-business/company-registration/employment-visas"}]},{"text":"الموارد","items":[{"text":"عن الشركة","link":"/ar/resources/about"}]},{"text":"اتصل بنا","link":"/ar/resources/contacts"}],"sidebar":{"/ar/uae-business/":{"base":"/ar/uae-business/","items":[{"text":"ملخص الأعمال في الإمارات","collapsed":false,"items":[{"text":"تسجيل الشركات","link":"company-registration/overview"},{"text":"المزايا والعيوب","link":"company-registration/benefits-problems"},{"text":"الحلول المصرفية للشركات","link":"offer/banking/"},{"text":"التأشيرة الذهبية","link":"offer/golden-visa/"},{"text":"التأشيرات وEID","link":"company-registration/employment-visas"},{"text":"الرسوم والجداول الزمنية","link":"company-registration/fees-timelines"},{"text":"ادفع فقط بعد النجاح","link":"benefits/success-based-fees"}]},{"text":"الهياكل المؤسسية في الإمارات","collapsed":true,"items":[{"text":"خطوات تسجيل الشركة","link":"company-registration/insights/incorporation-steps"},{"text":"المناطق الحرة في الإمارات","link":"company-registration/free-zones"},{"text":"البر الرئيسي في الإمارات","link":"company-registration/mainland"}]},{"text":"الامتثال المضمون للأعمال في الإمارات","collapsed":true,"items":[{"text":"موافقات مضمونة للحسابات المصرفية للشركات","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"حسابات مصرفية للأعمال عالية المخاطر","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"حافظ على امتثال وحماية عملك","link":"company-registration/Protect-Your-Business"}]},{"text":"القانون والمحاسبة والضرائب","collapsed":true,"items":[{"text":"اعتبارات المحاسبة والضرائب","link":"company-registration/accounting-legal"},{"text":"سجل UBO","link":"company-registration/ubo"}]},{"text":"المقارنات","collapsed":true,"items":[{"text":"البر الرئيسي مقابل المناطق الحرة","link":"comparison/mainland-vs-free-zones"},{"text":"مقارنة الكيانات في الإمارات","link":"comparison/entity-types"}]}]},"/ar/resources/":{"base":"/ar/resources/","items":[{"text":"عن الشركة","link":"about"}]},"/ar/contact-us/":{"base":"/ar/contact-us/","items":[{"text":"جهات الاتصال","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">إعدادات الخصوصية</a>"},"contact_form":{"name":"الاسم *","namePlaceholder":"اسمك","email":"البريد الإلكتروني *","emailPlaceholder":"عنوان بريدك الإلكتروني","phone":"الهاتف *","phonePlaceholder":"مثال: +1 1234567890 أو (1) 123 456-7890","phoneError":"يرجى إدخال رقم الهاتف","category":"كيف يمكننا مساعدتك؟ *","categoryPlaceholder":"اختر نوع الخدمة","message":"دعنا نناقش أهدافك (اختياري)","messagePlaceholder":"صف مشروعك أو متطلباتك","submit":"إرسال الطلب","sending":"جاري الإرسال...","successTitle":"شكراً لك!","successMessage":"نقدر اهتمامك كثيراً! سيتواصل فريقنا معك قريباً لمناقشة احتياجاتك.","defaultCategories":["تسجيل الشركات","فتح الحسابات المصرفية","EID والتأشيرة الذهبية","خدمات أخرى"],"defaultButtonText":"احصل على استشارة مجانية"}}},"hi":{"name":"Hindi","label":"हिन्दी","lang":"hi-IN","description":"UAE में विशेषज्ञ कंपनी स्थापना और सहायता सेवाएं। कंपनी सेटअप, बैंकिंग, कर, कानूनी और वीजा समाधान। आपके व्यवसायिक सपनों को साकार करना!","head":[["meta",{"property":"og:title","content":"UAE में विशेषज्ञ कंपनी स्थापना और सहायता सेवाएं। कंपनी सेटअप, बैंकिंग, कर, कानूनी और वीजा समाधान।"}]],"themeConfig":{"nav":[{"text":"सेवाएं","activeMatch":"/hi/company-registration/","items":[{"text":"कंपनी पंजीकरण","link":"/hi/uae-business/company-registration/overview"},{"text":"बैंकिंग समाधान","link":"/hi/uae-business/company-registration/banking"},{"text":"प्रवास","link":"/hi/uae-business/company-registration/employment-visas"}]},{"text":"संसाधन","items":[{"text":"हमारे बारे में","link":"/hi/resources/about"}]},{"text":"संपर्क","link":"/hi/resources/contacts"}],"sidebar":{"/hi/uae-business/":{"base":"/hi/uae-business/","items":[{"text":"UAE व्यवसाय सारांश","collapsed":false,"items":[{"text":"कंपनी पंजीकरण","link":"company-registration/overview"},{"text":"फायदे और नुकसान","link":"company-registration/benefits-problems"},{"text":"कॉर्पोरेट बैंकिंग समाधान","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"वीजा और EID","link":"company-registration/employment-visas"},{"text":"शुल्क और समय सीमा","link":"company-registration/fees-timelines"},{"text":"सफलता के बाद ही भुगतान","link":"benefits/success-based-fees"}]},{"text":"UAE कॉर्पोरेट संरचनाएं","collapsed":true,"items":[{"text":"कंपनी पंजीकरण के चरण","link":"company-registration/insights/incorporation-steps"},{"text":"UAE free zones","link":"company-registration/free-zones"},{"text":"UAE mainland","link":"company-registration/mainland"}]},{"text":"UAE व्यवसाय अनुपालन गारंटीकृत","collapsed":true,"items":[{"text":"गारंटीकृत कॉर्पोरेट बैंक खाता स्वीकृतियां","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"उच्च जोखिम वाले व्यवसाय के लिए बैंक खाते","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"अपने व्यवसाय को अनुपालित और सुरक्षित रखें","link":"company-registration/Protect-Your-Business"}]},{"text":"कानूनी, लेखा और कर","collapsed":true,"items":[{"text":"लेखा और कर विचार","link":"company-registration/accounting-legal"},{"text":"UBO रजिस्टर","link":"company-registration/ubo"}]},{"text":"तुलनाएं","collapsed":true,"items":[{"text":"Mainland बनाम free zones","link":"comparison/mainland-vs-free-zones"},{"text":"UAE संस्थाओं की तुलना","link":"comparison/entity-types"}]}]},"/hi/resources/":{"base":"/hi/resources/","items":[{"text":"हमारे बारे में","link":"about"}]},"/hi/contact-us/":{"base":"/hi/contact-us/","items":[{"text":"संपर्क","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">गोपनीयता सेटिंग्स</a>"},"contact_form":{"name":"नाम *","namePlaceholder":"आपका नाम","email":"ईमेल *","emailPlaceholder":"आपका ईमेल पता","phone":"फोन *","phonePlaceholder":"उदाहरण, +1 1234567890 या (1) 123 456-7890","phoneError":"कृपया फोन नंबर दर्ज करें","category":"हम आपकी कैसे मदद कर सकते हैं? *","categoryPlaceholder":"सेवा प्रकार चुनें","message":"आइए आपके लक्ष्यों पर चर्चा करें (वैकल्पिक)","messagePlaceholder":"अपनी परियोजना या आवश्यकताओं का वर्णन करें","submit":"अनुरोध भेजें","sending":"भेज रहे हैं...","successTitle":"धन्यवाद!","successMessage":"आपकी रुचि के लिए हम बहुत आभारी हैं! हमारी टीम जल्द ही आपकी जरूरतों पर चर्चा करने के लिए संपर्क करेगी।","defaultCategories":["कंपनी पंजीकरण","बैंक खाते खोलना","EID और Golden Visa","अन्य सेवाएं"],"defaultButtonText":"निःशुल्क परामर्श प्राप्त करें"}}},"ur":{"name":"Urdu","label":"اُردُو","lang":"ur-PK","description":"متحدہ عرب امارات میں ماہرانہ کمپنی کی تشکیل اور معاونتی خدمات۔ کمپنی سیٹ اپ، بینکنگ، ٹیکس، قانونی اور ویزا حل۔ آپ کے کاروباری خوابوں کو حقیقت بنانا!","head":[["meta",{"property":"og:title","content":"متحدہ عرب امارات میں ماہرانہ کمپنی کی تشکیل اور معاونتی خدمات۔ کمپنی سیٹ اپ، بینکنگ، ٹیکس، قانونی اور ویزا حل۔"}]],"themeConfig":{"nav":[{"text":"خدمات","activeMatch":"/ur/company-registration/","items":[{"text":"کمپنی رجسٹریشن","link":"/ur/uae-business/company-registration/overview"},{"text":"بینکنگ حل","link":"/ur/uae-business/company-registration/banking"},{"text":"ہجرت","link":"/ur/uae-business/company-registration/employment-visas"}]},{"text":"وسائل","items":[{"text":"ہمارے بارے میں","link":"/ur/resources/about"}]},{"text":"رابطہ","link":"/ur/resources/contacts"}],"sidebar":{"/ur/uae-business/":{"base":"/ur/uae-business/","items":[{"text":"متحدہ عرب امارات کاروباری خلاصہ","collapsed":false,"items":[{"text":"کمپنی رجسٹریشن","link":"company-registration/overview"},{"text":"فوائد اور مسائل","link":"company-registration/benefits-problems"},{"text":"کارپوریٹ بینکنگ حل","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"ویزا اور EID","link":"company-registration/employment-visas"},{"text":"فیس اور ٹائم لائنز","link":"company-registration/fees-timelines"},{"text":"صرف کامیابی کے بعد ادائیگی","link":"benefits/success-based-fees"}]},{"text":"متحدہ عرب امارات کارپوریٹ ڈھانچے","collapsed":true,"items":[{"text":"کمپنی رجسٹریشن کے مراحل","link":"company-registration/insights/incorporation-steps"},{"text":"UAE free zones","link":"company-registration/free-zones"},{"text":"UAE mainland","link":"company-registration/mainland"}]},{"text":"متحدہ عرب امارات کاروباری تعمیل کی ضمانت","collapsed":true,"items":[{"text":"کارپوریٹ بینک اکاؤنٹ منظوری کی ضمانت","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"اعلی خطرے والے کاروبار کے لیے بینک اکاؤنٹس","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"اپنے کاروبار کو قانونی اور محفوظ رکھیں","link":"company-registration/Protect-Your-Business"}]},{"text":"قانونی، اکاؤنٹنگ اور ٹیکس","collapsed":true,"items":[{"text":"اکاؤنٹنگ اور ٹیکس کے تحفظات","link":"company-registration/accounting-legal"},{"text":"UBO رجسٹر","link":"company-registration/ubo"}]},{"text":"موازنے","collapsed":true,"items":[{"text":"Mainland بمقابلہ free zones","link":"comparison/mainland-vs-free-zones"},{"text":"متحدہ عرب امارات کی اداروں کا موازنہ","link":"comparison/entity-types"}]}]},"/ur/resources/":{"base":"/ur/resources/","items":[{"text":"ہمارے بارے میں","link":"about"}]},"/ur/contact-us/":{"base":"/ur/contact-us/","items":[{"text":"رابطے","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">رازداری کی ترتیبات</a>"},"contact_form":{"name":"نام *","namePlaceholder":"آپ کا نام","email":"ای میل *","emailPlaceholder":"آپ کا ای میل ایڈریس","phone":"فون *","phonePlaceholder":"مثال، +1 1234567890 یا (1) 123 456-7890","phoneError":"براہ کرم فون نمبر درج کریں","category":"ہم آپ کی کیسے مدد کر سکتے ہیں؟ *","categoryPlaceholder":"سروس کی قسم منتخب کریں","message":"آئیے آپ کے مقاصد پر بات کریں (اختیاری)","messagePlaceholder":"اپنے پروجیکٹ یا ضروریات کی تفصیل بیان کریں","submit":"درخواست جمع کریں","sending":"بھیج رہا ہے...","successTitle":"شکریہ!","successMessage":"آپ کی دلچسپی کے لیے بہت شکریہ! ہماری ٹیم جلد ہی آپ کی ضروریات پر بات کرنے کے لیے آپ سے رابطہ کرے گی۔","defaultCategories":["کمپنی رجسٹریشن","بینک اکاؤنٹس کھولنا","EID & Golden Visa","دیگر خدمات"],"defaultButtonText":"مفت مشاورت حاصل کریں"}}},"bn":{"name":"Bengali","label":"বাংলা","lang":"bn-BD","description":"বিশেষজ্ঞ UAE কোম্পানি গঠন এবং সহায়তা পরিষেবা। কোম্পানি সেটআপ, ব্যাংকিং, ট্যাক্স, আইনি এবং ভিসা সমাধান। আপনার ব্যবসায়িক স্বপ্নকে বাস্তবে পরিণত করা!","head":[["meta",{"property":"og:title","content":"বিশেষজ্ঞ UAE কোম্পানি গঠন এবং সহায়তা পরিষেবা। কোম্পানি সেটআপ, ব্যাংকিং, ট্যাক্স, আইনি এবং ভিসা সমাধান।"}]],"themeConfig":{"nav":[{"text":"পরিষেবাসমূহ","activeMatch":"/bn/company-registration/","items":[{"text":"কোম্পানি নিবন্ধন","link":"/bn/uae-business/company-registration/overview"},{"text":"ব্যাংকিং সমাধান","link":"/bn/uae-business/company-registration/banking"},{"text":"অভিবাসন","link":"/bn/uae-business/company-registration/employment-visas"}]},{"text":"রিসোর্স","items":[{"text":"আমাদের সম্পর্কে","link":"/bn/resources/about"}]},{"text":"যোগাযোগ","link":"/bn/resources/contacts"}],"sidebar":{"/bn/uae-business/":{"base":"/bn/uae-business/","items":[{"text":"UAE ব্যবসার সারসংক্ষেপ","collapsed":false,"items":[{"text":"কোম্পানি নিবন্ধন","link":"company-registration/overview"},{"text":"সুবিধা ও অসুবিধা","link":"company-registration/benefits-problems"},{"text":"কর্পোরেট ব্যাংকিং সমাধান","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"ভিসা ও EID","link":"company-registration/employment-visas"},{"text":"ফি এবং সময়সীমা","link":"company-registration/fees-timelines"},{"text":"সফলতার পরেই শুধু পেমেন্ট","link":"benefits/success-based-fees"}]},{"text":"UAE কর্পোরেট কাঠামো","collapsed":true,"items":[{"text":"কোম্পানি নিবন্ধনের ধাপসমূহ","link":"company-registration/insights/incorporation-steps"},{"text":"UAE free zones","link":"company-registration/free-zones"},{"text":"UAE mainland","link":"company-registration/mainland"}]},{"text":"UAE ব্যবসায়িক অনুবর্তিতা নিশ্চিত","collapsed":true,"items":[{"text":"নিশ্চিত কর্পোরেট ব্যাংক অ্যাকাউন্ট অনুমোদন","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"উচ্চ-ঝুঁকিপূর্ণ ব্যবসার জন্য ব্যাংক অ্যাকাউন্ট","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"আপনার ব্যবসা অনুবর্তী এবং সুরক্ষিত রাখুন","link":"company-registration/Protect-Your-Business"}]},{"text":"আইনি, হিসাবরক্ষণ এবং কর","collapsed":true,"items":[{"text":"হিসাবরক্ষণ এবং কর বিবেচনা","link":"company-registration/accounting-legal"},{"text":"UBO রেজিস্টার","link":"company-registration/ubo"}]},{"text":"তুলনামূলক বিশ্লেষণ","collapsed":true,"items":[{"text":"Mainland বনাম free zones","link":"comparison/mainland-vs-free-zones"},{"text":"UAE সত্তার তুলনা","link":"comparison/entity-types"}]}]},"/bn/resources/":{"base":"/bn/resources/","items":[{"text":"আমাদের সম্পর্কে","link":"about"}]},"/bn/contact-us/":{"base":"/bn/contact-us/","items":[{"text":"যোগাযোগ","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">গোপনীয়তা সেটিংস</a>"},"contact_form":{"name":"নাম *","namePlaceholder":"আপনার নাম","email":"ইমেইল *","emailPlaceholder":"আপনার ইমেইল ঠিকানা","phone":"ফোন *","phonePlaceholder":"যেমন, +1 1234567890 বা (1) 123 456-7890","phoneError":"অনুগ্রহ করে ফোন নম্বর দিন","category":"আমরা কিভাবে সাহায্য করতে পারি? *","categoryPlaceholder":"সেবার ধরন নির্বাচন করুন","message":"আপনার লক্ষ্য নিয়ে আলোচনা করি (ঐচ্ছিক)","messagePlaceholder":"আপনার প্রকল্প বা প্রয়োজনীয়তা বর্ণনা করুন","submit":"অনুরোধ জমা দিন","sending":"পাঠানো হচ্ছে...","successTitle":"ধন্যবাদ!","successMessage":"আপনার আগ্রহের জন্য আমরা অত্যন্ত কৃতজ্ঞ! আমাদের টিম শীঘ্রই আপনার প্রয়োজনীয়তা নিয়ে আলোচনা করার জন্য যোগাযোগ করবে।","defaultCategories":["কোম্পানি নিবন্ধন","ব্যাংক অ্যাকাউন্ট খোলা","EID এবং Golden Visa","অন্যান্য সেবা"],"defaultButtonText":"বিনামূল্যে পরামর্শ নিন"}}},"ml":{"name":"Malayalam","label":"മലയാളം","lang":"ml-IN","description":"യുഎഇയിലെ വിദഗ്ധ കമ്പനി രൂപീകരണവും പിന്തുണാ സേവനങ്ങളും. കമ്പനി സ്ഥാപനം, ബാങ്കിംഗ്, നികുതി, നിയമ, വിസ പരിഹാരങ്ങൾ. നിങ്ങളുടെ ബിസിനസ് സ്വപ്നങ്ങൾ യാഥാർത്ഥ്യമാക്കുന്നു!","head":[["meta",{"property":"og:title","content":"യുഎഇയിലെ വിദഗ്ധ കമ്പനി രൂപീകരണവും പിന്തുണാ സേവനങ്ങളും. കമ്പനി സ്ഥാപനം, ബാങ്കിംഗ്, നികുതി, നിയമ, വിസ പരിഹാരങ്ങൾ."}]],"themeConfig":{"nav":[{"text":"സേവനങ്ങൾ","activeMatch":"/ml/company-registration/","items":[{"text":"കമ്പനി രജിസ്ട്രേഷൻ","link":"/ml/uae-business/company-registration/overview"},{"text":"ബാങ്കിംഗ് പരിഹാരങ്ങൾ","link":"/ml/uae-business/company-registration/banking"},{"text":"കുടിയേറ്റം","link":"/ml/uae-business/company-registration/employment-visas"}]},{"text":"വിഭവങ്ങൾ","items":[{"text":"കുറിച്ച്","link":"/ml/resources/about"}]},{"text":"ബന്ധപ്പെടുക","link":"/ml/resources/contacts"}],"sidebar":{"/ml/uae-business/":{"base":"/ml/uae-business/","items":[{"text":"യുഎഇ ബിസിനസ് സംഗ്രഹം","collapsed":false,"items":[{"text":"കമ്പനി രജിസ്ട്രേഷൻ","link":"company-registration/overview"},{"text":"ഗുണങ്ങളും പ്രശ്നങ്ങളും","link":"company-registration/benefits-problems"},{"text":"കോർപ്പറേറ്റ് ബാങ്കിംഗ് പരിഹാരങ്ങൾ","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"വിസകളും EID-യും","link":"company-registration/employment-visas"},{"text":"ഫീസും സമയക്രമങ്ങളും","link":"company-registration/fees-timelines"},{"text":"വിജയത്തിന് ശേഷം മാത്രം പണം നൽകുക","link":"benefits/success-based-fees"}]},{"text":"യുഎഇ കോർപ്പറേറ്റ് ഘടനകൾ","collapsed":true,"items":[{"text":"കമ്പനി രജിസ്ട്രേഷൻ ഘട്ടങ്ങൾ","link":"company-registration/insights/incorporation-steps"},{"text":"UAE free zones","link":"company-registration/free-zones"},{"text":"UAE mainland","link":"company-registration/mainland"}]},{"text":"യുഎഇ ബിസിനസ് അനുസരണം ഗ്യാരണ്ടി","collapsed":true,"items":[{"text":"ഗ്യാരണ്ടി ചെയ്ത കോർപ്പറേറ്റ് ബാങ്ക് അക്കൗണ്ട് അംഗീകാരങ്ങൾ","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"ഉയർന്ന റിസ്ക് ബിസിനസിനുള്ള ബാങ്ക് അക്കൗണ്ടുകൾ","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"നിങ്ങളുടെ ബിസിനസ് അനുസരണവും സംരക്ഷണവും നിലനിർത്തുക","link":"company-registration/Protect-Your-Business"}]},{"text":"നിയമം, അക്കൗണ്ടിംഗ്, നികുതി","collapsed":true,"items":[{"text":"അക്കൗണ്ടിംഗും നികുതി പരിഗണനകളും","link":"company-registration/accounting-legal"},{"text":"UBO രജിസ്റ്റർ","link":"company-registration/ubo"}]},{"text":"താരതമ്യങ്ങൾ","collapsed":true,"items":[{"text":"Mainland vs free zones","link":"comparison/mainland-vs-free-zones"},{"text":"യുഎഇ സ്ഥാപനങ്ങളുടെ താരതമ്യം","link":"comparison/entity-types"}]}]},"/ml/resources/":{"base":"/ml/resources/","items":[{"text":"കുറിച്ച്","link":"about"}]},"/ml/contact-us/":{"base":"/ml/contact-us/","items":[{"text":"ബന്ധപ്പെടാൻ","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">സ്വകാര്യതാ ക്രമീകരണങ്ങൾ</a>"},"contact_form":{"name":"പേര് *","namePlaceholder":"നിങ്ങളുടെ പേര്","email":"ഇമെയിൽ *","emailPlaceholder":"നിങ്ങളുടെ ഇമെയിൽ വിലാസം","phone":"ഫോൺ *","phonePlaceholder":"ഉദാ., +1 1234567890 അല്ലെങ്കിൽ (1) 123 456-7890","phoneError":"ദയവായി ഫോൺ നമ്പർ നൽകുക","category":"ഞങ്ങൾക്ക് എങ്ങനെ സഹായിക്കാൻ കഴിയും? *","categoryPlaceholder":"സേവന തരം തിരഞ്ഞെടുക്കുക","message":"നിങ്ങളുടെ ലക്ഷ്യങ്ങൾ ചർച്ച ചെയ്യാം (ഓപ്ഷണൽ)","messagePlaceholder":"നിങ്ങളുടെ പ്രോജക്റ്റ് അല്ലെങ്കിൽ ആവശ്യകതകൾ വിവരിക്കുക","submit":"അഭ്യർത്ഥന സമർപ്പിക്കുക","sending":"അയയ്ക്കുന്നു...","successTitle":"നന്ദി!","successMessage":"നിങ്ങളുടെ താൽപ്പര്യത്തിന് ഞങ്ങൾ വളരെ നന്ദിയുണ്ട്! ഞങ്ങളുടെ ടീം നിങ്ങളുടെ ആവശ്യങ്ങൾ ചർച്ച ചെയ്യാൻ ഉടൻ ബന്ധപ്പെടും.","defaultCategories":["കമ്പനി രജിസ്ട്രേഷൻ","ബാങ്ക് അക്കൗണ്ടുകൾ തുറക്കൽ","EID & Golden Visa","മറ്റ് സേവനങ്ങൾ"],"defaultButtonText":"സൗജന്യ കൺസൾട്ടേഷൻ നേടുക"}}},"ta":{"name":"Tamil","label":"தமிழ்","lang":"ta-IN","description":"நிபுணத்துவ UAE நிறுவன உருவாக்கம் மற்றும் ஆதரவு சேவைகள். நிறுவன அமைப்பு, வங்கி, வரி, சட்ட மற்றும் விசா தீர்வுகள். உங்கள் வணிக கனவுகளை நனவாக்குகிறோம்!","head":[["meta",{"property":"og:title","content":"நிபுணத்துவ UAE நிறுவன உருவாக்கம் மற்றும் ஆதரவு சேவைகள். நிறுவன அமைப்பு, வங்கி, வரி, சட்ட மற்றும் விசா தீர்வுகள்."}]],"themeConfig":{"nav":[{"text":"சேவைகள்","activeMatch":"/ta/company-registration/","items":[{"text":"நிறுவன பதிவு","link":"/ta/uae-business/company-registration/overview"},{"text":"வங்கி தீர்வுகள்","link":"/ta/uae-business/company-registration/banking"},{"text":"குடிபெயர்வு","link":"/ta/uae-business/company-registration/employment-visas"}]},{"text":"வளங்கள்","items":[{"text":"எங்களைப் பற்றி","link":"/ta/resources/about"}]},{"text":"தொடர்பு","link":"/ta/resources/contacts"}],"sidebar":{"/ta/uae-business/":{"base":"/ta/uae-business/","items":[{"text":"UAE வணிக சுருக்கம்","collapsed":false,"items":[{"text":"நிறுவன பதிவு","link":"company-registration/overview"},{"text":"நன்மைகள் & தீமைகள்","link":"company-registration/benefits-problems"},{"text":"கார்ப்பரேட் வங்கி தீர்வுகள்","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"விசாக்கள் & EID","link":"company-registration/employment-visas"},{"text":"கட்டணங்கள் மற்றும் காலவரிசைகள்","link":"company-registration/fees-timelines"},{"text":"வெற்றிக்குப் பிறகு மட்டுமே செலுத்துங்கள்","link":"benefits/success-based-fees"}]},{"text":"UAE கார்ப்பரேட் கட்டமைப்புகள்","collapsed":true,"items":[{"text":"நிறுவன பதிவு படிகள்","link":"company-registration/insights/incorporation-steps"},{"text":"UAE free zones","link":"company-registration/free-zones"},{"text":"UAE mainland","link":"company-registration/mainland"}]},{"text":"UAE வணிக இணக்க உத்தரவாதம்","collapsed":true,"items":[{"text":"உத்தரவாதமளிக்கப்பட்ட கார்ப்பரேட் வங்கி கணக்கு ஒப்புதல்கள்","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"அதிக ஆபத்து வணிகத்திற்கான வங்கி கணக்குகள்","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"உங்கள் வணிகத்தை இணக்கமாகவும் பாதுகாப்பாகவும் வைத்திருங்கள்","link":"company-registration/Protect-Your-Business"}]},{"text":"சட்ட, கணக்கியல் மற்றும் வரி","collapsed":true,"items":[{"text":"கணக்கியல் மற்றும் வரி கருத்துகள்","link":"company-registration/accounting-legal"},{"text":"UBO பதிவேடு","link":"company-registration/ubo"}]},{"text":"ஒப்பீடுகள்","collapsed":true,"items":[{"text":"Mainland vs free zones","link":"comparison/mainland-vs-free-zones"},{"text":"UAE நிறுவனங்கள் ஒப்பிடப்பட்டன","link":"comparison/entity-types"}]}]},"/ta/resources/":{"base":"/ta/resources/","items":[{"text":"எங்களைப் பற்றி","link":"about"}]},"/ta/contact-us/":{"base":"/ta/contact-us/","items":[{"text":"தொடர்புகள்","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">தனியுரிமை அமைப்புகள்</a>"},"contact_form":{"name":"பெயர் *","namePlaceholder":"உங்கள் பெயர்","email":"மின்னஞ்சல் *","emailPlaceholder":"உங்கள் மின்னஞ்சல் முகவரி","phone":"தொலைபேசி *","phonePlaceholder":"எ.கா., +1 1234567890 அல்லது (1) 123 456-7890","phoneError":"தொலைபேசி எண்ணை உள்ளிடவும்","category":"நாங்கள் எவ்வாறு உதவ முடியும்? *","categoryPlaceholder":"சேவை வகையைத் தேர்ந்தெடுக்கவும்","message":"உங்கள் இலக்குகளை விவாதிப்போம் (விருப்பத்தேர்வு)","messagePlaceholder":"உங்கள் திட்டம் அல்லது தேவைகளை விவரிக்கவும்","submit":"கோரிக்கையை சமர்ப்பிக்கவும்","sending":"அனுப்புகிறது...","successTitle":"நன்றி!","successMessage":"உங்கள் ஆர்வத்திற்கு மிக்க நன்றி! எங்கள் குழு விரைவில் உங்கள் தேவைகளை விவாதிக்க தொடர்பு கொள்ளும்.","defaultCategories":["நிறுவன பதிவு","வங்கி கணக்குகளைத் திறத்தல்","EID & Golden Visa","பிற சேவைகள்"],"defaultButtonText":"இலவச ஆலோசனையைப் பெறுங்கள்"}}},"te":{"name":"Telugu","label":"తెలుగు","lang":"te-IN","description":"నిపుణుల UAE కంపెనీ ఏర్పాటు మరియు మద్దతు సేవలు. కంపెనీ సెటప్, బ్యాంకింగ్, పన్ను, చట్టపరమైన మరియు వీసా పరిష్కారాలు. మీ వ్యాపార కలలను వాస్తవంగా మారుస్తున్నాము!","head":[["meta",{"property":"og:title","content":"నిపుణుల UAE కంపెనీ ఏర్పాటు మరియు మద్దతు సేవలు. కంపెనీ సెటప్, బ్యాంకింగ్, పన్ను, చట్టపరమైన మరియు వీసా పరిష్కారాలు."}]],"themeConfig":{"nav":[{"text":"సేవలు","activeMatch":"/te/company-registration/","items":[{"text":"కంపెనీ రిజిస్ట్రేషన్","link":"/te/uae-business/company-registration/overview"},{"text":"బ్యాంకింగ్ పరిష్కారాలు","link":"/te/uae-business/company-registration/banking"},{"text":"వలస","link":"/te/uae-business/company-registration/employment-visas"}]},{"text":"వనరులు","items":[{"text":"మా గురించి","link":"/te/resources/about"}]},{"text":"సంప్రదించండి","link":"/te/resources/contacts"}],"sidebar":{"/te/uae-business/":{"base":"/te/uae-business/","items":[{"text":"UAE వ్యాపార సారాంశం","collapsed":false,"items":[{"text":"కంపెనీ రిజిస్ట్రేషన్","link":"company-registration/overview"},{"text":"ప్రయోజనాలు & నష్టాలు","link":"company-registration/benefits-problems"},{"text":"కార్పొరేట్ బ్యాంకింగ్ పరిష్కారాలు","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"వీసాలు & EID","link":"company-registration/employment-visas"},{"text":"ఫీజులు మరియు కాలవ్యవధులు","link":"company-registration/fees-timelines"},{"text":"విజయం తర్వాత మాత్రమే చెల్లించండి","link":"benefits/success-based-fees"}]},{"text":"UAE కార్పొరేట్ నిర్మాణాలు","collapsed":true,"items":[{"text":"కంపెనీ రిజిస్ట్రేషన్ దశలు","link":"company-registration/insights/incorporation-steps"},{"text":"UAE free zones","link":"company-registration/free-zones"},{"text":"UAE mainland","link":"company-registration/mainland"}]},{"text":"UAE వ్యాపార అనుసరణ హామీ ఇవ్వబడింది","collapsed":true,"items":[{"text":"హామీ ఇచ్చిన కార్పొరేట్ బ్యాంక్ ఖాతా ఆమోదాలు","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"అధిక-రిస్క్ వ్యాపారానికి బ్యాంక్ ఖాతాలు","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"మీ వ్యాపారాన్ని అనుసరణలో ఉంచండి మరియు రక్షించండి","link":"company-registration/Protect-Your-Business"}]},{"text":"చట్టపరమైన, అకౌంటింగ్ మరియు పన్ను","collapsed":true,"items":[{"text":"అకౌంటింగ్ మరియు పన్ను పరిగణనలు","link":"company-registration/accounting-legal"},{"text":"UBO రిజిస్టర్","link":"company-registration/ubo"}]},{"text":"పోలికలు","collapsed":true,"items":[{"text":"Mainland vs free zones","link":"comparison/mainland-vs-free-zones"},{"text":"UAE సంస్థల పోలిక","link":"comparison/entity-types"}]}]},"/te/resources/":{"base":"/te/resources/","items":[{"text":"మా గురించి","link":"about"}]},"/te/contact-us/":{"base":"/te/contact-us/","items":[{"text":"సంప్రదింపులు","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">గోప్యతా సెట్టింగ్‌లు</a>"},"contact_form":{"name":"పేరు *","namePlaceholder":"మీ పేరు","email":"ఇమెయిల్ *","emailPlaceholder":"మీ ఇమెయిల్ చిరునామా","phone":"ఫోన్ *","phonePlaceholder":"ఉదా., +1 1234567890 లేదా (1) 123 456-7890","phoneError":"దయచేసి ఫోన్ నంబర్‌ను నమోదు చేయండి","category":"మేము మీకు ఎలా సహాయపడగలం? *","categoryPlaceholder":"సేవా రకాన్ని ఎంచుకోండి","message":"మీ లక్ష్యాల గురించి చర్చించుకుందాం (ఐచ్ఛికం)","messagePlaceholder":"మీ ప్రాజెక్ట్ లేదా అవసరాలను వివరించండి","submit":"అభ్యర్థనను సమర్పించండి","sending":"పంపుతోంది...","successTitle":"ధన్యవాదాలు!","successMessage":"మీ ఆసక్తికి చాలా కృతజ్ఞతలు! మా బృందం త్వరలో మీ అవసరాలను చర్చించడానికి మిమ్మల్ని సంప్రదిస్తుంది.","defaultCategories":["కంపెనీ రిజిస్ట్రేషన్","బ్యాంక్ ఖాతాలు తెరవడం","EID & Golden Visa","ఇతర సేవలు"],"defaultButtonText":"ఉచిత సలహా పొందండి"}}},"fa":{"name":"Persian/Farsi","label":"فارسی","lang":"fa-IR","description":"خدمات تخصصی ثبت و پشتیبانی شرکت در امارات. راهکارهای ثبت شرکت، بانکداری، مالیات، حقوقی و ویزا. تحقق رویاهای تجاری شما!","head":[["meta",{"property":"og:title","content":"خدمات تخصصی ثبت و پشتیبانی شرکت در امارات. راهکارهای ثبت شرکت، بانکداری، مالیات، حقوقی و ویزا."}]],"themeConfig":{"nav":[{"text":"خدمات","activeMatch":"/fa/company-registration/","items":[{"text":"ثبت شرکت","link":"/fa/uae-business/company-registration/overview"},{"text":"راهکارهای بانکی","link":"/fa/uae-business/company-registration/banking"},{"text":"مهاجرت","link":"/fa/uae-business/company-registration/employment-visas"}]},{"text":"منابع","items":[{"text":"درباره ما","link":"/fa/resources/about"}]},{"text":"تماس","link":"/fa/resources/contacts"}],"sidebar":{"/fa/uae-business/":{"base":"/fa/uae-business/","items":[{"text":"خلاصه کسب و کار در امارات","collapsed":false,"items":[{"text":"ثبت شرکت","link":"company-registration/overview"},{"text":"مزایا و معایب","link":"company-registration/benefits-problems"},{"text":"راهکارهای بانکداری شرکتی","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"ویزا و EID","link":"company-registration/employment-visas"},{"text":"هزینه‌ها و زمان‌بندی","link":"company-registration/fees-timelines"},{"text":"پرداخت فقط پس از موفقیت","link":"benefits/success-based-fees"}]},{"text":"ساختارهای شرکتی امارات","collapsed":true,"items":[{"text":"مراحل ثبت شرکت","link":"company-registration/insights/incorporation-steps"},{"text":"مناطق آزاد امارات","link":"company-registration/free-zones"},{"text":"سرزمین اصلی امارات","link":"company-registration/mainland"}]},{"text":"تضمین انطباق کسب و کار در امارات","collapsed":true,"items":[{"text":"تأیید تضمینی حساب‌های بانکی شرکتی","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"حساب‌های بانکی برای کسب و کارهای پرریسک","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"حفظ انطباق و محافظت از کسب و کار شما","link":"company-registration/Protect-Your-Business"}]},{"text":"حقوقی، حسابداری و مالیات","collapsed":true,"items":[{"text":"ملاحظات حسابداری و مالیاتی","link":"company-registration/accounting-legal"},{"text":"ثبت UBO","link":"company-registration/ubo"}]},{"text":"مقایسه‌ها","collapsed":true,"items":[{"text":"مقایسه Mainland و Free zones","link":"comparison/mainland-vs-free-zones"},{"text":"مقایسه انواع شرکت‌ها در امارات","link":"comparison/entity-types"}]}]},"/fa/resources/":{"base":"/fa/resources/","items":[{"text":"درباره ما","link":"about"}]},"/fa/contact-us/":{"base":"/fa/contact-us/","items":[{"text":"تماس با ما","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">تنظیمات حریم خصوصی</a>"},"contact_form":{"name":"نام *","namePlaceholder":"نام شما","email":"ایمیل *","emailPlaceholder":"آدرس ایمیل شما","phone":"تلفن *","phonePlaceholder":"مثال: +1 1234567890 یا (1) 123 456-7890","phoneError":"لطفا شماره تلفن را وارد کنید","category":"چگونه می‌توانیم کمک کنیم؟ *","categoryPlaceholder":"نوع خدمات را انتخاب کنید","message":"اهداف خود را با ما در میان بگذارید (اختیاری)","messagePlaceholder":"پروژه یا نیازمندی‌های خود را توضیح دهید","submit":"ارسال درخواست","sending":"در حال ارسال...","successTitle":"متشکریم!","successMessage":"از علاقه شما بسیار سپاسگزاریم! تیم ما به زودی برای بررسی نیازهای شما تماس خواهد گرفت.","defaultCategories":["ثبت شرکت","افتتاح حساب بانکی","EID و Golden Visa","سایر خدمات"],"defaultButtonText":"مشاوره رایگان دریافت کنید"}}},"zh":{"name":"Chinese (Simplified)","label":"中文","lang":"zh-CN","description":"专业的阿联酋公司成立和支持服务。提供公司设立、银行开户、税务、法律和签证解决方案。助您实现商业梦想！","head":[["meta",{"property":"og:title","content":"专业的阿联酋公司成立和支持服务。提供公司设立、银行开户、税务、法律和签证解决方案。"}]],"themeConfig":{"nav":[{"text":"服务","activeMatch":"/zh/company-registration/","items":[{"text":"公司注册","link":"/zh/uae-business/company-registration/overview"},{"text":"银行解决方案","link":"/zh/uae-business/company-registration/banking"},{"text":"移民服务","link":"/zh/uae-business/company-registration/employment-visas"}]},{"text":"资源","items":[{"text":"关于我们","link":"/zh/resources/about"}]},{"text":"联系我们","link":"/zh/resources/contacts"}],"sidebar":{"/zh/uae-business/":{"base":"/zh/uae-business/","items":[{"text":"阿联酋商业概览","collapsed":false,"items":[{"text":"公司注册","link":"company-registration/overview"},{"text":"优势与挑战","link":"company-registration/benefits-problems"},{"text":"企业银行解决方案","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"签证和EID","link":"company-registration/employment-visas"},{"text":"费用和时间表","link":"company-registration/fees-timelines"},{"text":"成功后付费","link":"benefits/success-based-fees"}]},{"text":"阿联酋公司架构","collapsed":true,"items":[{"text":"公司注册步骤","link":"company-registration/insights/incorporation-steps"},{"text":"阿联酋Free Zone","link":"company-registration/free-zones"},{"text":"阿联酋Mainland","link":"company-registration/mainland"}]},{"text":"阿联酋商业合规保证","collapsed":true,"items":[{"text":"保证企业银行账户审批","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"高风险企业银行账户","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"保持业务合规和受保护","link":"company-registration/Protect-Your-Business"}]},{"text":"法律、会计和税务","collapsed":true,"items":[{"text":"会计和税务考虑","link":"company-registration/accounting-legal"},{"text":"UBO登记","link":"company-registration/ubo"}]},{"text":"对比分析","collapsed":true,"items":[{"text":"Mainland与Free Zone对比","link":"comparison/mainland-vs-free-zones"},{"text":"阿联酋实体类型对比","link":"comparison/entity-types"}]}]},"/zh/resources/":{"base":"/zh/resources/","items":[{"text":"关于我们","link":"about"}]},"/zh/contact-us/":{"base":"/zh/contact-us/","items":[{"text":"联系方式","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">隐私设置</a>"},"contact_form":{"name":"姓名 *","namePlaceholder":"您的姓名","email":"电子邮箱 *","emailPlaceholder":"您的电子邮箱地址","phone":"电话 *","phonePlaceholder":"例如：+1 1234567890 或 (1) 123 456-7890","phoneError":"请输入电话号码","category":"我们如何帮助您？ *","categoryPlaceholder":"选择服务类型","message":"让我们讨论您的目标（可选）","messagePlaceholder":"描述您的项目或需求","submit":"提交请求","sending":"发送中...","successTitle":"感谢您！","successMessage":"非常感谢您的关注！我们的团队将尽快与您联系，讨论您的需求。","defaultCategories":["公司注册","开设银行账户","EID和Golden Visa","其他服务"],"defaultButtonText":"获取免费咨询"}}},"fr":{"name":"French","label":"Français","lang":"fr-FR","description":"Services experts de création et d'accompagnement d'entreprises aux EAU. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visa. Réalisons vos rêves professionnels !","head":[["meta",{"property":"og:title","content":"Services experts de création et d'accompagnement d'entreprises aux EAU. Solutions de création d'entreprise, bancaires, fiscales, juridiques et de visa."}]],"themeConfig":{"nav":[{"text":"Services","activeMatch":"/fr/company-registration/","items":[{"text":"Création d'entreprise","link":"/fr/uae-business/company-registration/overview"},{"text":"Solutions bancaires","link":"/fr/uae-business/company-registration/banking"},{"text":"Migration","link":"/fr/uae-business/company-registration/employment-visas"}]},{"text":"Ressources","items":[{"text":"À propos","link":"/fr/resources/about"}]},{"text":"Contact","link":"/fr/resources/contacts"}],"sidebar":{"/fr/uae-business/":{"base":"/fr/uae-business/","items":[{"text":"Aperçu des affaires aux EAU","collapsed":false,"items":[{"text":"Création d'entreprise","link":"company-registration/overview"},{"text":"Avantages et inconvénients","link":"company-registration/benefits-problems"},{"text":"Solutions bancaires entreprises","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"Visas et EID","link":"company-registration/employment-visas"},{"text":"Frais et délais","link":"company-registration/fees-timelines"},{"text":"Paiement uniquement après succès","link":"benefits/success-based-fees"}]},{"text":"Structures d'entreprise aux EAU","collapsed":true,"items":[{"text":"Étapes de création d'entreprise","link":"company-registration/insights/incorporation-steps"},{"text":"Free zones aux EAU","link":"company-registration/free-zones"},{"text":"Mainland aux EAU","link":"company-registration/mainland"}]},{"text":"Conformité garantie pour les entreprises aux EAU","collapsed":true,"items":[{"text":"Approbations garanties de comptes bancaires entreprises","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"Comptes bancaires pour entreprises à haut risque","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"Maintenir votre entreprise conforme et protégée","link":"company-registration/Protect-Your-Business"}]},{"text":"Juridique, comptabilité et fiscalité","collapsed":true,"items":[{"text":"Considérations comptables et fiscales","link":"company-registration/accounting-legal"},{"text":"Registre UBO","link":"company-registration/ubo"}]},{"text":"Comparaisons","collapsed":true,"items":[{"text":"Mainland vs free zones","link":"comparison/mainland-vs-free-zones"},{"text":"Comparaison des entités aux EAU","link":"comparison/entity-types"}]}]},"/fr/resources/":{"base":"/fr/resources/","items":[{"text":"À propos","link":"about"}]},"/fr/contact-us/":{"base":"/fr/contact-us/","items":[{"text":"Contacts","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">Paramètres de confidentialité</a>"},"contact_form":{"name":"Nom *","namePlaceholder":"votre nom","email":"E-mail *","emailPlaceholder":"votre adresse e-mail","phone":"Téléphone *","phonePlaceholder":"ex., +1 1234567890 ou (1) 123 456-7890","phoneError":"Veuillez saisir un numéro de téléphone","category":"Comment pouvons-nous vous aider ? *","categoryPlaceholder":"sélectionnez le type de service","message":"Discutons de vos objectifs (facultatif)","messagePlaceholder":"décrivez votre projet ou vos besoins","submit":"Envoyer la demande","sending":"Envoi en cours...","successTitle":"Merci !","successMessage":"Nous apprécions grandement votre intérêt ! Notre équipe vous contactera sous peu pour discuter de vos besoins.","defaultCategories":["Création d'entreprise","Ouverture de comptes bancaires","EID & Golden Visa","Autres services"],"defaultButtonText":"Obtenir une consultation gratuite"}}},"ru":{"name":"Russian","label":"Русский","lang":"ru-RU","description":"Экспертные услуги по регистрации и сопровождению компаний в ОАЭ. Создание компаний, банковские услуги, налоговые, юридические решения и оформление виз. Воплощаем ваши бизнес-мечты в реальность!","head":[["meta",{"property":"og:title","content":"Экспертные услуги по регистрации и сопровождению компаний в ОАЭ. Создание компаний, банковские услуги, налоговые, юридические решения и оформление виз."}]],"themeConfig":{"nav":[{"text":"Услуги","activeMatch":"/ru/company-registration/","items":[{"text":"Регистрация компании","link":"/ru/uae-business/company-registration/overview"},{"text":"Банковские решения","link":"/ru/uae-business/company-registration/banking"},{"text":"Миграция","link":"/ru/uae-business/company-registration/employment-visas"}]},{"text":"Ресурсы","items":[{"text":"О нас","link":"/ru/resources/about"}]},{"text":"Контакты","link":"/ru/resources/contacts"}],"sidebar":{"/ru/uae-business/":{"base":"/ru/uae-business/","items":[{"text":"Обзор бизнеса в ОАЭ","collapsed":false,"items":[{"text":"Регистрация компании","link":"company-registration/overview"},{"text":"Преимущества и недостатки","link":"company-registration/benefits-problems"},{"text":"Корпоративные банковские решения","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"Визы и EID","link":"company-registration/employment-visas"},{"text":"Стоимость и сроки","link":"company-registration/fees-timelines"},{"text":"Оплата только после успеха","link":"benefits/success-based-fees"}]},{"text":"Корпоративные структуры в ОАЭ","collapsed":true,"items":[{"text":"Этапы регистрации компании","link":"company-registration/insights/incorporation-steps"},{"text":"Free zones ОАЭ","link":"company-registration/free-zones"},{"text":"Mainland ОАЭ","link":"company-registration/mainland"}]},{"text":"Гарантированное соответствие бизнеса в ОАЭ","collapsed":true,"items":[{"text":"Гарантированное открытие корпоративных банковских счетов","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"Банковские счета для высокорискового бизнеса","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"Поддержание соответствия и защита вашего бизнеса","link":"company-registration/Protect-Your-Business"}]},{"text":"Юридические, бухгалтерские и налоговые услуги","collapsed":true,"items":[{"text":"Бухгалтерские и налоговые аспекты","link":"company-registration/accounting-legal"},{"text":"Реестр UBO","link":"company-registration/ubo"}]},{"text":"Сравнения","collapsed":true,"items":[{"text":"Mainland против free zones","link":"comparison/mainland-vs-free-zones"},{"text":"Сравнение юридических лиц ОАЭ","link":"comparison/entity-types"}]}]},"/ru/resources/":{"base":"/ru/resources/","items":[{"text":"О нас","link":"about"}]},"/ru/contact-us/":{"base":"/ru/contact-us/","items":[{"text":"Контакты","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">Настройки конфиденциальности</a>"},"contact_form":{"name":"Имя *","namePlaceholder":"ваше имя","email":"Email *","emailPlaceholder":"ваш email адрес","phone":"Телефон *","phonePlaceholder":"например, +1 1234567890 или (1) 123 456-7890","phoneError":"Пожалуйста, введите номер телефона","category":"Как мы можем помочь? *","categoryPlaceholder":"выберите тип услуги","message":"Обсудим ваши цели (необязательно)","messagePlaceholder":"опишите ваш проект или требования","submit":"Отправить запрос","sending":"Отправка...","successTitle":"Спасибо!","successMessage":"Мы очень ценим ваш интерес! Наша команда свяжется с вами в ближайшее время для обсуждения ваших потребностей.","defaultCategories":["Регистрация компании","Открытие банковских счетов","EID и Golden Visa","Другие услуги"],"defaultButtonText":"Получить бесплатную консультацию"}}},"uk":{"name":"Ukrainian","label":"Українська","lang":"uk-UA","description":"Експертні послуги з реєстрації та підтримки компаній в ОАЕ. Створення компаній, банківські послуги, податкові, юридичні рішення та візова підтримка. Втілюємо ваші бізнес-мрії в реальність!","head":[["meta",{"property":"og:title","content":"Експертні послуги з реєстрації та підтримки компаній в ОАЕ. Створення компаній, банківські послуги, податкові, юридичні рішення та візова підтримка."}]],"themeConfig":{"nav":[{"text":"Послуги","activeMatch":"/uk/company-registration/","items":[{"text":"Реєстрація компанії","link":"/uk/uae-business/company-registration/overview"},{"text":"Банківські рішення","link":"/uk/uae-business/company-registration/banking"},{"text":"Міграція","link":"/uk/uae-business/company-registration/employment-visas"}]},{"text":"Ресурси","items":[{"text":"Про нас","link":"/uk/resources/about"}]},{"text":"Контакти","link":"/uk/resources/contacts"}],"sidebar":{"/uk/uae-business/":{"base":"/uk/uae-business/","items":[{"text":"Огляд бізнесу в ОАЕ","collapsed":false,"items":[{"text":"Реєстрація компанії","link":"company-registration/overview"},{"text":"Переваги та недоліки","link":"company-registration/benefits-problems"},{"text":"Корпоративні банківські рішення","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"Візи та EID","link":"company-registration/employment-visas"},{"text":"Вартість та терміни","link":"company-registration/fees-timelines"},{"text":"Оплата тільки після успіху","link":"benefits/success-based-fees"}]},{"text":"Корпоративні структури ОАЕ","collapsed":true,"items":[{"text":"Етапи реєстрації компанії","link":"company-registration/insights/incorporation-steps"},{"text":"Вільні зони ОАЕ","link":"company-registration/free-zones"},{"text":"Материкова частина ОАЕ","link":"company-registration/mainland"}]},{"text":"Гарантована відповідність бізнесу в ОАЕ","collapsed":true,"items":[{"text":"Гарантоване схвалення корпоративних банківських рахунків","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"Банківські рахунки для високоризикового бізнесу","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"Підтримуйте відповідність та захист вашого бізнесу","link":"company-registration/Protect-Your-Business"}]},{"text":"Юридичні, бухгалтерські та податкові послуги","collapsed":true,"items":[{"text":"Бухгалтерські та податкові аспекти","link":"company-registration/accounting-legal"},{"text":"Реєстр UBO","link":"company-registration/ubo"}]},{"text":"Порівняння","collapsed":true,"items":[{"text":"Mainland проти free zones","link":"comparison/mainland-vs-free-zones"},{"text":"Порівняння юридичних осіб ОАЕ","link":"comparison/entity-types"}]}]},"/uk/resources/":{"base":"/uk/resources/","items":[{"text":"Про нас","link":"about"}]},"/uk/contact-us/":{"base":"/uk/contact-us/","items":[{"text":"Контакти","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">Налаштування конфіденційності</a>"},"contact_form":{"name":"Ім'я *","namePlaceholder":"ваше ім'я","email":"Email *","emailPlaceholder":"ваша email адреса","phone":"Телефон *","phonePlaceholder":"напр., +1 1234567890 або (1) 123 456-7890","phoneError":"Будь ласка, введіть номер телефону","category":"Як ми можемо допомогти? *","categoryPlaceholder":"оберіть тип послуги","message":"Обговорімо ваші цілі (необов'язково)","messagePlaceholder":"опишіть ваш проект або вимоги","submit":"Надіслати запит","sending":"Надсилання...","successTitle":"Дякуємо!","successMessage":"Ми дуже цінуємо ваш інтерес! Наша команда зв'яжеться з вами найближчим часом для обговорення ваших потреб.","defaultCategories":["Реєстрація компанії","Відкриття банківських рахунків","EID і Golden Visa","Інші послуги"],"defaultButtonText":"Отримати безкоштовну консультацію"}}},"tr":{"name":"Turkish","label":"Türkçe","lang":"tr-TR","description":"Uzman BAE şirket kurulum ve destek hizmetleri. Şirket kurulumu, bankacılık, vergi, hukuk ve vize çözümleri. İş hayallerinizi gerçeğe dönüştürüyoruz!","head":[["meta",{"property":"og:title","content":"Uzman BAE şirket kurulum ve destek hizmetleri. Şirket kurulumu, bankacılık, vergi, hukuk ve vize çözümleri."}]],"themeConfig":{"nav":[{"text":"Hizmetler","activeMatch":"/tr/company-registration/","items":[{"text":"Şirket tescili","link":"/tr/uae-business/company-registration/overview"},{"text":"Bankacılık çözümleri","link":"/tr/uae-business/company-registration/banking"},{"text":"Göç","link":"/tr/uae-business/company-registration/employment-visas"}]},{"text":"Kaynaklar","items":[{"text":"Hakkımızda","link":"/tr/resources/about"}]},{"text":"İletişim","link":"/tr/resources/contacts"}],"sidebar":{"/tr/uae-business/":{"base":"/tr/uae-business/","items":[{"text":"BAE iş özeti","collapsed":false,"items":[{"text":"Şirket tescili","link":"company-registration/overview"},{"text":"Artılar ve eksiler","link":"company-registration/benefits-problems"},{"text":"Kurumsal bankacılık çözümleri","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"Vizeler ve EID","link":"company-registration/employment-visas"},{"text":"Ücretler ve süreler","link":"company-registration/fees-timelines"},{"text":"Sadece başarı sonrası ödeme","link":"benefits/success-based-fees"}]},{"text":"BAE kurumsal yapıları","collapsed":true,"items":[{"text":"Şirket tescil adımları","link":"company-registration/insights/incorporation-steps"},{"text":"UAE free zones","link":"company-registration/free-zones"},{"text":"UAE mainland","link":"company-registration/mainland"}]},{"text":"BAE iş uyumluluğu garantili","collapsed":true,"items":[{"text":"Garantili kurumsal banka hesabı onayları","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"Yüksek riskli işletmeler için banka hesapları","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"İşletmenizi uyumlu ve korumalı tutun","link":"company-registration/Protect-Your-Business"}]},{"text":"Hukuk, muhasebe ve vergi","collapsed":true,"items":[{"text":"Muhasebe ve vergi hususları","link":"company-registration/accounting-legal"},{"text":"UBO kaydı","link":"company-registration/ubo"}]},{"text":"Karşılaştırmalar","collapsed":true,"items":[{"text":"Mainland ve free zones karşılaştırması","link":"comparison/mainland-vs-free-zones"},{"text":"BAE kuruluşları karşılaştırması","link":"comparison/entity-types"}]}]},"/tr/resources/":{"base":"/tr/resources/","items":[{"text":"Hakkımızda","link":"about"}]},"/tr/contact-us/":{"base":"/tr/contact-us/","items":[{"text":"İletişim","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">Gizlilik Ayarları</a>"},"contact_form":{"name":"İsim *","namePlaceholder":"adınız","email":"E-posta *","emailPlaceholder":"e-posta adresiniz","phone":"Telefon *","phonePlaceholder":"örn., +1 1234567890 veya (1) 123 456-7890","phoneError":"Lütfen telefon numarası giriniz","category":"Size nasıl yardımcı olabiliriz? *","categoryPlaceholder":"hizmet türünü seçin","message":"Hedeflerinizi tartışalım (isteğe bağlı)","messagePlaceholder":"projenizi veya gereksinimlerinizi açıklayın","submit":"Talep gönder","sending":"Gönderiliyor...","successTitle":"Teşekkür ederiz!","successMessage":"İlginiz için çok teşekkür ederiz! Ekibimiz ihtiyaçlarınızı görüşmek üzere kısa süre içinde sizinle iletişime geçecektir.","defaultCategories":["Şirket tescili","Banka hesabı açma","EID & Golden Visa","Diğer Hizmetler"],"defaultButtonText":"Ücretsiz danışmanlık alın"}}},"ko":{"name":"Korean","label":"한국어","lang":"ko-KR","description":"전문적인 UAE 기업 설립 및 지원 서비스. 회사 설립, 은행업무, 세금, 법률 및 비자 솔루션. 귀하의 비즈니스 꿈을 현실로 만들어드립니다!","head":[["meta",{"property":"og:title","content":"전문적인 UAE 기업 설립 및 지원 서비스. 회사 설립, 은행업무, 세금, 법률 및 비자 솔루션."}]],"themeConfig":{"nav":[{"text":"서비스","activeMatch":"/ko/company-registration/","items":[{"text":"기업 등록","link":"/ko/uae-business/company-registration/overview"},{"text":"은행 솔루션","link":"/ko/uae-business/company-registration/banking"},{"text":"이주","link":"/ko/uae-business/company-registration/employment-visas"}]},{"text":"리소스","items":[{"text":"회사 소개","link":"/ko/resources/about"}]},{"text":"연락처","link":"/ko/resources/contacts"}],"sidebar":{"/ko/uae-business/":{"base":"/ko/uae-business/","items":[{"text":"UAE 비즈니스 요약","collapsed":false,"items":[{"text":"기업 등록","link":"company-registration/overview"},{"text":"장단점","link":"company-registration/benefits-problems"},{"text":"기업 은행 솔루션","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"비자 및 EID","link":"company-registration/employment-visas"},{"text":"수수료 및 소요기간","link":"company-registration/fees-timelines"},{"text":"성공 후 지불","link":"benefits/success-based-fees"}]},{"text":"UAE 기업 구조","collapsed":true,"items":[{"text":"기업 등록 절차","link":"company-registration/insights/incorporation-steps"},{"text":"UAE Free Zones","link":"company-registration/free-zones"},{"text":"UAE Mainland","link":"company-registration/mainland"}]},{"text":"UAE 비즈니스 규정 준수 보장","collapsed":true,"items":[{"text":"기업 은행 계좌 승인 보장","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"고위험 사업을 위한 은행 계좌","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"비즈니스 규정 준수 및 보호 유지","link":"company-registration/Protect-Your-Business"}]},{"text":"법률, 회계 및 세무","collapsed":true,"items":[{"text":"회계 및 세무 고려사항","link":"company-registration/accounting-legal"},{"text":"UBO 등록","link":"company-registration/ubo"}]},{"text":"비교","collapsed":true,"items":[{"text":"Mainland vs Free Zones","link":"comparison/mainland-vs-free-zones"},{"text":"UAE 법인 유형 비교","link":"comparison/entity-types"}]}]},"/ko/resources/":{"base":"/ko/resources/","items":[{"text":"회사 소개","link":"about"}]},"/ko/contact-us/":{"base":"/ko/contact-us/","items":[{"text":"연락처","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">개인정보 설정</a>"},"contact_form":{"name":"이름 *","namePlaceholder":"귀하의 이름","email":"이메일 *","emailPlaceholder":"귀하의 이메일 주소","phone":"전화번호 *","phonePlaceholder":"예: +1 1234567890 또는 (1) 123 456-7890","phoneError":"전화번호를 입력해 주세요","category":"어떤 도움이 필요하신가요? *","categoryPlaceholder":"서비스 유형 선택","message":"목표에 대해 논의해 보세요 (선택사항)","messagePlaceholder":"프로젝트나 요구사항을 설명해 주세요","submit":"요청 제출","sending":"전송 중...","successTitle":"감사합니다!","successMessage":"관심을 가져주셔서 대단히 감사합니다! 저희 팀이 곧 연락하여 귀하의 요구사항을 논의하겠습니다.","defaultCategories":["기업 등록","은행 계좌 개설","EID & Golden Visa","기타 서비스"],"defaultButtonText":"무료 상담 받기"}}},"ja":{"name":"Japanese","label":"日本語","lang":"ja-JP","description":"UAEにおける専門的な会社設立・サポートサービス。会社設立、銀行取引、税務、法務、ビザソリューションを提供。ビジネスの夢を実現します！","head":[["meta",{"property":"og:title","content":"UAEにおける専門的な会社設立・サポートサービス。会社設立、銀行取引、税務、法務、ビザソリューション。"}]],"themeConfig":{"nav":[{"text":"サービス","activeMatch":"/ja/company-registration/","items":[{"text":"会社登記","link":"/ja/uae-business/company-registration/overview"},{"text":"銀行ソリューション","link":"/ja/uae-business/company-registration/banking"},{"text":"移民","link":"/ja/uae-business/company-registration/employment-visas"}]},{"text":"リソース","items":[{"text":"会社概要","link":"/ja/resources/about"}]},{"text":"お問い合わせ","link":"/ja/resources/contacts"}],"sidebar":{"/ja/uae-business/":{"base":"/ja/uae-business/","items":[{"text":"UAEビジネス概要","collapsed":false,"items":[{"text":"会社登記","link":"company-registration/overview"},{"text":"メリット・デメリット","link":"company-registration/benefits-problems"},{"text":"法人向け銀行ソリューション","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"ビザ & EID","link":"company-registration/employment-visas"},{"text":"手数料と所要期間","link":"company-registration/fees-timelines"},{"text":"成功報酬型","link":"benefits/success-based-fees"}]},{"text":"UAE企業構造","collapsed":true,"items":[{"text":"会社登記の手順","link":"company-registration/insights/incorporation-steps"},{"text":"UAE Free Zone","link":"company-registration/free-zones"},{"text":"UAE Mainland","link":"company-registration/mainland"}]},{"text":"UAE事業コンプライアンス保証","collapsed":true,"items":[{"text":"法人口座開設の承認保証","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"ハイリスク事業向け銀行口座","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"事業のコンプライアンスと保護","link":"company-registration/Protect-Your-Business"}]},{"text":"法務・会計・税務","collapsed":true,"items":[{"text":"会計・税務の考慮事項","link":"company-registration/accounting-legal"},{"text":"UBOレジスター","link":"company-registration/ubo"}]},{"text":"比較","collapsed":true,"items":[{"text":"Mainland vs Free Zone","link":"comparison/mainland-vs-free-zones"},{"text":"UAE事業体の比較","link":"comparison/entity-types"}]}]},"/ja/resources/":{"base":"/ja/resources/","items":[{"text":"会社概要","link":"about"}]},"/ja/contact-us/":{"base":"/ja/contact-us/","items":[{"text":"お問い合わせ","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">プライバシー設定</a>"},"contact_form":{"name":"お名前 *","namePlaceholder":"お名前を入力してください","email":"メールアドレス *","emailPlaceholder":"メールアドレスを入力してください","phone":"電話番号 *","phonePlaceholder":"例：+1 1234567890 または (1) 123 456-7890","phoneError":"電話番号を入力してください","category":"ご用件 *","categoryPlaceholder":"サービスタイプを選択してください","message":"ご要望をお聞かせください（任意）","messagePlaceholder":"プロジェクトまたは要件についてご記入ください","submit":"送信する","sending":"送信中...","successTitle":"ありがとうございます！","successMessage":"お問い合わせありがとうございます！担当者が速やかにご連絡させていただきます。","defaultCategories":["会社登記","銀行口座開設","EID & Golden Visa","その他のサービス"],"defaultButtonText":"無料相談を予約する"}}},"id":{"name":"Indonesian","label":"Bahasa Indonesia","lang":"id-ID","description":"Layanan pembentukan dan dukungan perusahaan UAE yang ahli. Solusi pendirian perusahaan, perbankan, pajak, hukum dan visa. Mewujudkan impian bisnis Anda!","head":[["meta",{"property":"og:title","content":"Layanan pembentukan dan dukungan perusahaan UAE yang ahli. Solusi pendirian perusahaan, perbankan, pajak, hukum dan visa."}]],"themeConfig":{"nav":[{"text":"Layanan","activeMatch":"/id/company-registration/","items":[{"text":"Pendaftaran perusahaan","link":"/id/uae-business/company-registration/overview"},{"text":"Solusi perbankan","link":"/id/uae-business/company-registration/banking"},{"text":"Migrasi","link":"/id/uae-business/company-registration/employment-visas"}]},{"text":"Sumber Daya","items":[{"text":"Tentang Kami","link":"/id/resources/about"}]},{"text":"Kontak","link":"/id/resources/contacts"}],"sidebar":{"/id/uae-business/":{"base":"/id/uae-business/","items":[{"text":"Ringkasan bisnis UAE","collapsed":false,"items":[{"text":"Pendaftaran perusahaan","link":"company-registration/overview"},{"text":"Kelebihan & kekurangan","link":"company-registration/benefits-problems"},{"text":"Solusi perbankan korporat","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"Visa & EID","link":"company-registration/employment-visas"},{"text":"Biaya dan jadwal","link":"company-registration/fees-timelines"},{"text":"Bayar hanya setelah berhasil","link":"benefits/success-based-fees"}]},{"text":"Struktur korporat UAE","collapsed":true,"items":[{"text":"Langkah pendaftaran perusahaan","link":"company-registration/insights/incorporation-steps"},{"text":"Free zones UAE","link":"company-registration/free-zones"},{"text":"Mainland UAE","link":"company-registration/mainland"}]},{"text":"Kepatuhan bisnis UAE dijamin","collapsed":true,"items":[{"text":"Persetujuan rekening bank korporat dijamin","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"Rekening bank untuk bisnis berisiko tinggi","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"Jaga kepatuhan dan perlindungan bisnis Anda","link":"company-registration/Protect-Your-Business"}]},{"text":"Hukum, akuntansi dan pajak","collapsed":true,"items":[{"text":"Pertimbangan akuntansi dan pajak","link":"company-registration/accounting-legal"},{"text":"Register UBO","link":"company-registration/ubo"}]},{"text":"Perbandingan","collapsed":true,"items":[{"text":"Mainland vs free zones","link":"comparison/mainland-vs-free-zones"},{"text":"Perbandingan entitas UAE","link":"comparison/entity-types"}]}]},"/id/resources/":{"base":"/id/resources/","items":[{"text":"Tentang Kami","link":"about"}]},"/id/contact-us/":{"base":"/id/contact-us/","items":[{"text":"Kontak","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">Pengaturan Privasi</a>"},"contact_form":{"name":"Nama *","namePlaceholder":"nama Anda","email":"Email *","emailPlaceholder":"alamat email Anda","phone":"Telepon *","phonePlaceholder":"contoh, +1 1234567890 atau (1) 123 456-7890","phoneError":"Silakan masukkan nomor telepon","category":"Bagaimana kami dapat membantu Anda? *","categoryPlaceholder":"pilih jenis layanan","message":"Mari diskusikan tujuan Anda (opsional)","messagePlaceholder":"jelaskan proyek atau kebutuhan Anda","submit":"Kirim permintaan","sending":"Mengirim...","successTitle":"Terima kasih!","successMessage":"Kami sangat menghargai minat Anda! Tim kami akan segera menghubungi Anda untuk membahas kebutuhan Anda.","defaultCategories":["Pendaftaran perusahaan","Pembukaan rekening bank","EID & Golden Visa","Layanan Lainnya"],"defaultButtonText":"Dapatkan konsultasi gratis"}}},"vi":{"name":"Vietnamese","label":"Tiếng Việt","lang":"vi-VN","description":"Dịch vụ thành lập và hỗ trợ công ty chuyên nghiệp tại UAE. Giải pháp thành lập công ty, ngân hàng, thuế, pháp lý và thị thực. Biến ước mơ kinh doanh của bạn thành hiện thực!","head":[["meta",{"property":"og:title","content":"Dịch vụ thành lập và hỗ trợ công ty chuyên nghiệp tại UAE. Giải pháp thành lập công ty, ngân hàng, thuế, pháp lý và thị thực."}]],"themeConfig":{"nav":[{"text":"Dịch vụ","activeMatch":"/vi/company-registration/","items":[{"text":"Đăng ký công ty","link":"/vi/uae-business/company-registration/overview"},{"text":"Giải pháp ngân hàng","link":"/vi/uae-business/company-registration/banking"},{"text":"Di trú","link":"/vi/uae-business/company-registration/employment-visas"}]},{"text":"Tài nguyên","items":[{"text":"Giới thiệu","link":"/vi/resources/about"}]},{"text":"Liên hệ","link":"/vi/resources/contacts"}],"sidebar":{"/vi/uae-business/":{"base":"/vi/uae-business/","items":[{"text":"Tổng quan kinh doanh tại UAE","collapsed":false,"items":[{"text":"Đăng ký công ty","link":"company-registration/overview"},{"text":"Ưu & nhược điểm","link":"company-registration/benefits-problems"},{"text":"Giải pháp ngân hàng doanh nghiệp","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"Thị thực & EID","link":"company-registration/employment-visas"},{"text":"Phí và thời gian","link":"company-registration/fees-timelines"},{"text":"Chỉ thanh toán sau khi thành công","link":"benefits/success-based-fees"}]},{"text":"Cấu trúc doanh nghiệp UAE","collapsed":true,"items":[{"text":"Các bước đăng ký công ty","link":"company-registration/insights/incorporation-steps"},{"text":"UAE free zones","link":"company-registration/free-zones"},{"text":"UAE mainland","link":"company-registration/mainland"}]},{"text":"Đảm bảo tuân thủ kinh doanh UAE","collapsed":true,"items":[{"text":"Đảm bảo phê duyệt tài khoản ngân hàng doanh nghiệp","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"Tài khoản ngân hàng cho doanh nghiệp rủi ro cao","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"Giữ doanh nghiệp của bạn tuân thủ và được bảo vệ","link":"company-registration/Protect-Your-Business"}]},{"text":"Pháp lý, kế toán và thuế","collapsed":true,"items":[{"text":"Các vấn đề kế toán và thuế","link":"company-registration/accounting-legal"},{"text":"Đăng ký UBO","link":"company-registration/ubo"}]},{"text":"So sánh","collapsed":true,"items":[{"text":"Mainland vs free zones","link":"comparison/mainland-vs-free-zones"},{"text":"So sánh các loại hình doanh nghiệp UAE","link":"comparison/entity-types"}]}]},"/vi/resources/":{"base":"/vi/resources/","items":[{"text":"Giới thiệu","link":"about"}]},"/vi/contact-us/":{"base":"/vi/contact-us/","items":[{"text":"Liên hệ","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">Cài đặt quyền riêng tư</a>"},"contact_form":{"name":"Họ tên *","namePlaceholder":"tên của bạn","email":"Email *","emailPlaceholder":"địa chỉ email của bạn","phone":"Điện thoại *","phonePlaceholder":"vd: +1 1234567890 hoặc (1) 123 456-7890","phoneError":"Vui lòng nhập số điện thoại","category":"Chúng tôi có thể giúp gì cho bạn? *","categoryPlaceholder":"chọn loại dịch vụ","message":"Hãy thảo luận về mục tiêu của bạn (tùy chọn)","messagePlaceholder":"mô tả dự án hoặc yêu cầu của bạn","submit":"Gửi yêu cầu","sending":"Đang gửi...","successTitle":"Cảm ơn bạn!","successMessage":"Chúng tôi rất cảm kích sự quan tâm của bạn! Đội ngũ của chúng tôi sẽ liên hệ với bạn sớm để thảo luận về nhu cầu của bạn.","defaultCategories":["Đăng ký công ty","Mở tài khoản ngân hàng","EID & Golden Visa","Dịch vụ khác"],"defaultButtonText":"Nhận tư vấn miễn phí"}}},"pt":{"name":"Portuguese (Brazil)","label":"Português","lang":"pt-BR","description":"Serviços especializados de formação e suporte empresarial nos EAU. Soluções para abertura de empresas, bancos, impostos, questões legais e vistos. Transformando seus sonhos empresariais em realidade!","head":[["meta",{"property":"og:title","content":"Serviços especializados de formação e suporte empresarial nos EAU. Soluções para abertura de empresas, bancos, impostos, questões legais e vistos."}]],"themeConfig":{"nav":[{"text":"Serviços","activeMatch":"/pt/company-registration/","items":[{"text":"Registro de empresa","link":"/pt/uae-business/company-registration/overview"},{"text":"Soluções bancárias","link":"/pt/uae-business/company-registration/banking"},{"text":"Migração","link":"/pt/uae-business/company-registration/employment-visas"}]},{"text":"Recursos","items":[{"text":"Sobre","link":"/pt/resources/about"}]},{"text":"Contato","link":"/pt/resources/contacts"}],"sidebar":{"/pt/uae-business/":{"base":"/pt/uae-business/","items":[{"text":"Resumo de negócios nos EAU","collapsed":false,"items":[{"text":"Registro de empresa","link":"company-registration/overview"},{"text":"Prós e contras","link":"company-registration/benefits-problems"},{"text":"Soluções bancárias corporativas","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"Vistos e EID","link":"company-registration/employment-visas"},{"text":"Taxas e prazos","link":"company-registration/fees-timelines"},{"text":"Pague apenas após o sucesso","link":"benefits/success-based-fees"}]},{"text":"Estruturas corporativas nos EAU","collapsed":true,"items":[{"text":"Etapas de registro de empresa","link":"company-registration/insights/incorporation-steps"},{"text":"Free zones dos EAU","link":"company-registration/free-zones"},{"text":"Mainland dos EAU","link":"company-registration/mainland"}]},{"text":"Conformidade empresarial garantida nos EAU","collapsed":true,"items":[{"text":"Aprovações garantidas de contas bancárias corporativas","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"Contas bancárias para negócios de alto risco","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"Mantenha seu negócio em conformidade e protegido","link":"company-registration/Protect-Your-Business"}]},{"text":"Jurídico, contabilidade e impostos","collapsed":true,"items":[{"text":"Considerações contábeis e fiscais","link":"company-registration/accounting-legal"},{"text":"Registro UBO","link":"company-registration/ubo"}]},{"text":"Comparações","collapsed":true,"items":[{"text":"Mainland vs free zones","link":"comparison/mainland-vs-free-zones"},{"text":"Comparação de entidades nos EAU","link":"comparison/entity-types"}]}]},"/pt/resources/":{"base":"/pt/resources/","items":[{"text":"Sobre","link":"about"}]},"/pt/contact-us/":{"base":"/pt/contact-us/","items":[{"text":"Contatos","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">Configurações de Privacidade</a>"},"contact_form":{"name":"Nome *","namePlaceholder":"seu nome","email":"E-mail *","emailPlaceholder":"seu endereço de e-mail","phone":"Telefone *","phonePlaceholder":"ex: +1 1234567890 ou (1) 123 456-7890","phoneError":"Por favor, insira o número de telefone","category":"Como podemos ajudar? *","categoryPlaceholder":"selecione o tipo de serviço","message":"Vamos discutir seus objetivos (opcional)","messagePlaceholder":"descreva seu projeto ou requisitos","submit":"Enviar solicitação","sending":"Enviando...","successTitle":"Obrigado!","successMessage":"Agradecemos muito seu interesse! Nossa equipe entrará em contato em breve para discutir suas necessidades.","defaultCategories":["Registro de empresa","Abertura de contas bancárias","EID & Golden Visa","Outros Serviços"],"defaultButtonText":"Obter uma consulta gratuita"}}},"es":{"name":"Spanish","label":"Español","lang":"es-ES","description":"Servicios expertos de formación y soporte de empresas en EAU. Configuración de empresas, banca, impuestos, soluciones legales y de visados. ¡Haciendo realidad sus sueños empresariales!","head":[["meta",{"property":"og:title","content":"Servicios expertos de formación y soporte de empresas en EAU. Configuración de empresas, banca, impuestos, soluciones legales y de visados."}]],"themeConfig":{"nav":[{"text":"Servicios","activeMatch":"/es/company-registration/","items":[{"text":"Registro de empresas","link":"/es/uae-business/company-registration/overview"},{"text":"Soluciones bancarias","link":"/es/uae-business/company-registration/banking"},{"text":"Migración","link":"/es/uae-business/company-registration/employment-visas"}]},{"text":"Recursos","items":[{"text":"Acerca de","link":"/es/resources/about"}]},{"text":"Contacto","link":"/es/resources/contacts"}],"sidebar":{"/es/uae-business/":{"base":"/es/uae-business/","items":[{"text":"Resumen de negocios en EAU","collapsed":false,"items":[{"text":"Registro de empresas","link":"company-registration/overview"},{"text":"Ventajas y desventajas","link":"company-registration/benefits-problems"},{"text":"Soluciones bancarias corporativas","link":"offer/banking/"},{"text":"Golden Visa","link":"offer/golden-visa/"},{"text":"Visados y EID","link":"company-registration/employment-visas"},{"text":"Tarifas y plazos","link":"company-registration/fees-timelines"},{"text":"Pague solo después del éxito","link":"benefits/success-based-fees"}]},{"text":"Estructuras corporativas en EAU","collapsed":true,"items":[{"text":"Pasos para el registro de empresas","link":"company-registration/insights/incorporation-steps"},{"text":"UAE free zones","link":"company-registration/free-zones"},{"text":"UAE mainland","link":"company-registration/mainland"}]},{"text":"Cumplimiento empresarial garantizado en EAU","collapsed":true,"items":[{"text":"Aprobaciones garantizadas de cuentas bancarias corporativas","link":"corporate-banking-services/guaranteed-account-approvals"},{"text":"Cuentas bancarias para negocios de alto riesgo","link":"corporate-banking-services/UAE-Bank-Accounts-for-High-Risk-Business"},{"text":"Mantenga su negocio en cumplimiento y protegido","link":"company-registration/Protect-Your-Business"}]},{"text":"Legal, contabilidad e impuestos","collapsed":true,"items":[{"text":"Consideraciones contables y fiscales","link":"company-registration/accounting-legal"},{"text":"Registro UBO","link":"company-registration/ubo"}]},{"text":"Comparaciones","collapsed":true,"items":[{"text":"Mainland vs free zones","link":"comparison/mainland-vs-free-zones"},{"text":"Comparación de entidades en EAU","link":"comparison/entity-types"}]}]},"/es/resources/":{"base":"/es/resources/","items":[{"text":"Acerca de","link":"about"}]},"/es/contact-us/":{"base":"/es/contact-us/","items":[{"text":"Contactos","link":"contacts"}]}},"footer":{"message":"©Golden Fish, 2025. | <a href=\\"#\\" onClick=\\"UC_UI.showSecondLayer();\\">Configuración de privacidad</a>"},"contact_form":{"name":"Nombre *","namePlaceholder":"su nombre","email":"Correo electrónico *","emailPlaceholder":"su dirección de correo electrónico","phone":"Teléfono *","phonePlaceholder":"ej., +1 1234567890 o (1) 123 456-7890","phoneError":"Por favor, introduzca el número de teléfono","category":"¿Cómo podemos ayudarle? *","categoryPlaceholder":"seleccione tipo de servicio","message":"Hablemos de sus objetivos (opcional)","messagePlaceholder":"describa su proyecto o requisitos","submit":"Enviar solicitud","sending":"Enviando...","successTitle":"¡Gracias!","successMessage":"¡Agradecemos enormemente su interés! Nuestro equipo se pondrá en contacto con usted en breve para discutir sus necesidades.","defaultCategories":["Registro de empresas","Apertura de cuentas bancarias","EID y Golden Visa","Otros servicios"],"defaultButtonText":"Obtener una consulta gratuita"}}}},"scrollOffset":134,"cleanUrls":true}`));
const __vite_import_meta_env__ = {};
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const HASH_OR_QUERY_RE = /[?#].*$/;
const INDEX_OR_EXT_RE = /(?:(^|\/)index)?\.(?:md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "404.md",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_OR_QUERY_RE, "").replace(INDEX_OR_EXT_RE, "$1");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function getLocaleForPath(siteData2, relativePath) {
  return Object.keys((siteData2 == null ? void 0 : siteData2.locales) || {}).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = getLocaleForPath(siteData2, relativePath);
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  if (title === templateString.slice(3)) {
    return title;
  }
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const KNOWN_EXTENSIONS = /* @__PURE__ */ new Set();
function treatAsHtml(filename) {
  var _a;
  if (KNOWN_EXTENSIONS.size === 0) {
    const extraExts = typeof process === "object" && ((_a = process.env) == null ? void 0 : _a.VITE_EXTRA_EXTENSIONS) || (__vite_import_meta_env__ == null ? void 0 : __vite_import_meta_env__.VITE_EXTRA_EXTENSIONS) || "";
    ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (extraExts && typeof extraExts === "string" ? "," + extraExts : "")).split(",").forEach((ext2) => KNOWN_EXTENSIONS.add(ext2));
  }
  const ext = filename.split(".").pop();
  return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase());
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  const appearance = site.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance === "force-auto" ? usePreferredDark() : appearance ? useDark({
    storageKey: APPEARANCE_KEY,
    initialValue: () => appearance === "dark" ? "dark" : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  const hashRef = ref(inBrowser ? location.hash : "");
  if (inBrowser) {
    window.addEventListener("hashchange", () => {
      hashRef.value = location.hash;
    });
  }
  watch(() => route.data, () => {
    hashRef.value = inBrowser ? location.hash : "";
  });
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => route.data.frontmatter.dir || site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => createTitle(site.value, route.data)),
    description: computed(() => route.data.description || site.value.description),
    isDark,
    hash: computed(() => hashRef.value)
  };
}
function useData$1() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
function getScrollOffset() {
  let scrollOffset = siteDataRef.value.scrollOffset;
  let offset = 0;
  let padding = 24;
  if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
    padding = scrollOffset.padding;
    scrollOffset = scrollOffset.selector;
  }
  if (typeof scrollOffset === "number") {
    offset = scrollOffset;
  } else if (typeof scrollOffset === "string") {
    offset = tryOffsetSelector(scrollOffset, padding);
  } else if (Array.isArray(scrollOffset)) {
    for (const selector of scrollOffset) {
      const res = tryOffsetSelector(selector, padding);
      if (res) {
        offset = res;
        break;
      }
    }
  }
  return offset;
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + padding;
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    href = normalizeHref(href);
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    if (inBrowser && href !== normalizeHref(location.href)) {
      history.replaceState({ scrollPosition: window.scrollY }, "");
      history.pushState({}, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChange ?? router.onAfterRouteChanged) == null ? void 0 : _b(href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a, _b;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        await ((_b = router.onAfterPageLoad) == null ? void 0 : _b.call(router, href));
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState({}, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        const relativePath = inBrowser ? pendingPath.replace(/(^|\/)$/, "$1index").replace(/(\.html)?$/, ".md").replace(/^\//, "") : "404.md";
        route.data = { ...notFoundPageData, relativePath };
      }
    }
  }
  if (inBrowser) {
    if (history.state === null) {
      history.replaceState({}, "");
    }
    window.addEventListener("click", (e) => {
      if (e.defaultPrevented || !(e.target instanceof Element) || e.target.closest("button") || // temporary fix for docsearch action buttons
      e.button !== 0 || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)
        return;
      const link2 = e.target.closest("a");
      if (!link2 || link2.closest(".vp-raw") || link2.hasAttribute("download") || link2.hasAttribute("target"))
        return;
      const linkHref = link2.getAttribute("href") ?? (link2 instanceof SVGAElement ? link2.getAttribute("xlink:href") : null);
      if (linkHref == null)
        return;
      const { href, origin, pathname, hash, search } = new URL(linkHref, link2.baseURI);
      const currentUrl = new URL(location.href);
      if (origin === currentUrl.origin && treatAsHtml(pathname)) {
        e.preventDefault();
        if (pathname === currentUrl.pathname && search === currentUrl.search) {
          if (hash !== currentUrl.hash) {
            history.pushState({}, "", href);
            window.dispatchEvent(new HashChangeEvent("hashchange", {
              oldURL: currentUrl.href,
              newURL: href
            }));
          }
          if (hash) {
            scrollTo(link2, hash, link2.classList.contains("header-anchor"));
          } else {
            window.scrollTo(0, 0);
          }
        } else {
          go(href);
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", async (e) => {
      var _a;
      if (e.state === null)
        return;
      const href = normalizeHref(location.href);
      await loadPage(href, e.state && e.state.scrollPosition || 0);
      await ((_a = router.onAfterRouteChange ?? router.onAfterRouteChanged) == null ? void 0 : _a(href));
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop);
      else
        window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    };
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - getScrollOffset() + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1");
  if (siteDataRef.value.cleanUrls)
    url.pathname = url.pathname.replace(/\.html$/, "");
  else if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html"))
    url.pathname += ".html";
  return url.pathname + url.search + url.hash;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    const { frontmatter, site } = useData$1();
    watch(frontmatter, runCbs, { deep: true, flush: "post" });
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs,
        onVnodeUnmounted: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
const _sfc_main$1j = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-99b3f66f></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["__scopeId", "data-v-99b3f66f"]]);
const useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId)
      clearTimeout(timeoutId);
    if (!called) {
      fn();
      (called = true) && setTimeout(() => called = false, delay);
    } else
      timeoutId = setTimeout(fn, delay);
  };
}
function ensureStartingSlash(path) {
  return path.startsWith("/") ? path : `/${path}`;
}
function normalizeLink$1(url) {
  const { pathname, search, hash, protocol } = new URL(url, "http://a.com");
  if (isExternal(url) || url.startsWith("#") || !protocol.startsWith("http") || !treatAsHtml(pathname))
    return url;
  const { site } = useData();
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function useLangs({ correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2, hash } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls) + hash.value
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link2, addPath, path, addExt) {
  return addPath ? link2.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link2;
}
const _sfc_main$1i = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { currentLang } = useLangs();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-a4760bbc><p class="code" data-v-a4760bbc>${ssrInterpolate(((_a = unref(theme2).notFound) == null ? void 0 : _a.code) ?? "404")}</p><h1 class="title" data-v-a4760bbc>${ssrInterpolate(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND")}</h1><div class="divider" data-v-a4760bbc></div><blockquote class="quote" data-v-a4760bbc>${ssrInterpolate(((_c = unref(theme2).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading.")}</blockquote><div class="action" data-v-a4760bbc><a class="link"${ssrRenderAttr("href", unref(withBase)(unref(currentLang).link))}${ssrRenderAttr("aria-label", ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home")} data-v-a4760bbc>${ssrInterpolate(((_e = unref(theme2).notFound) == null ? void 0 : _e.linkText) ?? "Take me home")}</a></div></div>`);
    };
  }
});
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["__scopeId", "data-v-a4760bbc"]]);
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item };
    const base = item.base || _base;
    if (base && item.link)
      item.link = base + item.link;
    if (item.items)
      item.items = addBase(item.items, base);
    return item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme: theme2 } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const _sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const sidebar = ref(_sidebar.value);
  watch(_sidebar, (next, prev) => {
    if (JSON.stringify(next) !== JSON.stringify(prev))
      sidebar.value = _sidebar.value;
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page, hash } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hash], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const ignoreRE = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/;
const resolvedHeaders = [];
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (ignoreRE.test(node.className))
        continue;
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  return buildTree(headers, high, low);
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link: link2 }) => ({
      link: link2,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link: link2, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4) {
        break;
      }
      activeLink = link2;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 39 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
function buildTree(data, min, max) {
  resolvedHeaders.length = 0;
  const result = [];
  const stack = [];
  data.forEach((item) => {
    const node = { ...item, children: [] };
    let parent = stack[stack.length - 1];
    while (parent && parent.level >= node.level) {
      stack.pop();
      parent = stack[stack.length - 1];
    }
    if (node.element.classList.contains("ignore-header") || parent && "shouldIgnore" in parent) {
      stack.push({ level: node.level, shouldIgnore: true });
      return;
    }
    if (node.level > max || node.level < min)
      return;
    resolvedHeaders.push({ element: node.element, link: node.link });
    if (parent)
      parent.children.push(node);
    else
      result.push(node);
    stack.push(node);
  });
  return result;
}
const _sfc_main$1h = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: ["VPDocOutlineItem", _ctx.root ? "root" : "nested"]
      }, _attrs))} data-v-19cc2ba2><!--[-->`);
      ssrRenderList(_ctx.headers, ({ children, link: link2, title }) => {
        _push(`<li data-v-19cc2ba2><a class="outline-link"${ssrRenderAttr("href", link2)}${ssrRenderAttr("title", title)} data-v-19cc2ba2>${ssrInterpolate(title)}</a>`);
        if (children == null ? void 0 : children.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["__scopeId", "data-v-19cc2ba2"]]);
const _sfc_main$1g = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-labelledby": "doc-outline-aria-label",
        class: ["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }],
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-1602225a><div class="content" data-v-1602225a><div class="outline-marker" data-v-1602225a></div><div aria-level="2" class="outline-title" id="doc-outline-aria-label" role="heading" data-v-1602225a>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</div>`);
      _push(ssrRenderComponent(VPDocOutlineItem, {
        headers: headers.value,
        root: true
      }, null, _parent));
      _push(`</div></nav>`);
    };
  }
});
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["__scopeId", "data-v-1602225a"]]);
const _sfc_main$1f = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const _sfc_main$1e = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-541ed743>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-541ed743></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$1f, {
          "carbon-ads": unref(theme2).carbonAds
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["__scopeId", "data-v-541ed743"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern === "function") {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const links = getFlatSideBarLinks(sidebar);
    const candidates = uniqBy(links, (link2) => link2.link.replace(/[?#].*$/, ""));
    const index = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    const hidePrev = ((_a = theme2.value.docFooter) == null ? void 0 : _a.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index - 1]) == null ? void 0 : _c.docFooterText) ?? ((_d = candidates[index - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_e = candidates[index - 1]) == null ? void 0 : _e.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
function uniqBy(array, keyFn) {
  const seen = /* @__PURE__ */ new Set();
  return array.filter((item) => {
    const k = keyFn(item);
    return seen.has(k) ? false : seen.add(k);
  });
}
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href) || props.target === "_blank"
    );
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        class: ["VPLink", {
          link: _ctx.href,
          "vp-external-link-icon": isExternal2.value,
          "no-icon": _ctx.noIcon
        }],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: _ctx.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: _ctx.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, lang } = useData();
    const date = computed(
      () => new Date(page.value.lastUpdated)
    );
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a, _b, _c;
        datetime.value = new Intl.DateTimeFormat(
          ((_b = (_a = theme2.value.lastUpdated) == null ? void 0 : _a.formatOptions) == null ? void 0 : _b.forceLocale) ? lang.value : void 0,
          ((_c = theme2.value.lastUpdated) == null ? void 0 : _c.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-e5615f85>${ssrInterpolate(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated")}: <time${ssrRenderAttr("datetime", isoDatetime.value)} data-v-e5615f85>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-e5615f85"]]);
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(
      () => theme2.value.editLink && frontmatter.value.editLink !== false
    );
    const hasLastUpdated = computed(() => page.value.lastUpdated);
    const showFooter = computed(
      () => hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      if (showFooter.value) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-972e93df>`);
        ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
        if (hasEditLink.value || hasLastUpdated.value) {
          _push(`<div class="edit-info" data-v-972e93df>`);
          if (hasEditLink.value) {
            _push(`<div class="edit-link" data-v-972e93df>`);
            _push(ssrRenderComponent(_sfc_main$1d, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="vpi-square-pen edit-link-icon" data-v-972e93df${_scopeId}></span> ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [
                    createVNode("span", { class: "vpi-square-pen edit-link-icon" }),
                    createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasLastUpdated.value) {
            _push(`<div class="last-updated" data-v-972e93df>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link)) {
          _push(`<nav class="prev-next" aria-labelledby="doc-footer-aria-label" data-v-972e93df><span class="visually-hidden" id="doc-footer-aria-label" data-v-972e93df>Pager</span><div class="pager" data-v-972e93df>`);
          if ((_c = unref(control).prev) == null ? void 0 : _c.link) {
            _push(ssrRenderComponent(_sfc_main$1d, {
              class: "pager-link prev",
              href: unref(control).prev.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a2, _b2;
                if (_push2) {
                  _push2(`<span class="desc" data-v-972e93df${_scopeId}>${((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.prev) || "Previous page"}</span><span class="title" data-v-972e93df${_scopeId}>${unref(control).prev.text ?? ""}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "desc",
                      innerHTML: ((_b2 = unref(theme2).docFooter) == null ? void 0 : _b2.prev) || "Previous page"
                    }, null, 8, ["innerHTML"]),
                    createVNode("span", {
                      class: "title",
                      innerHTML: unref(control).prev.text
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="pager" data-v-972e93df>`);
          if ((_d = unref(control).next) == null ? void 0 : _d.link) {
            _push(ssrRenderComponent(_sfc_main$1d, {
              class: "pager-link next",
              href: unref(control).next.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a2, _b2;
                if (_push2) {
                  _push2(`<span class="desc" data-v-972e93df${_scopeId}>${((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.next) || "Next page"}</span><span class="title" data-v-972e93df${_scopeId}>${unref(control).next.text ?? ""}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "desc",
                      innerHTML: ((_b2 = unref(theme2).docFooter) == null ? void 0 : _b2.next) || "Next page"
                    }, null, 8, ["innerHTML"]),
                    createVNode("span", {
                      class: "title",
                      innerHTML: unref(control).next.text
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__scopeId", "data-v-972e93df"]]);
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }]
      }, _attrs))} data-v-98550459>`);
      ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push, _parent);
      _push(`<div class="container" data-v-98550459>`);
      if (unref(hasAside)) {
        _push(`<div class="${ssrRenderClass([{ "left-aside": unref(leftAside) }, "aside"])}" data-v-98550459><div class="aside-curtain" data-v-98550459></div><div class="aside-container" data-v-98550459><div class="aside-content" data-v-98550459>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-98550459><div class="content-container" data-v-98550459>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(`<main class="main" data-v-98550459>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", [
          pageName.value,
          unref(theme2).externalLinkIcon && "external-link-icon-enabled"
        ]]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, {
        "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-98550459"]]);
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {},
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href)
    );
    const component = computed(() => {
      return props.tag || (props.href ? "a" : "button");
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
        class: ["VPButton", [_ctx.size, _ctx.theme]],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: props.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: props.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-faa8155b"]]);
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (_ctx.image) {
        _push(`<!--[-->`);
        if (typeof _ctx.image === "string" || "src" in _ctx.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof _ctx.image === "string" ? _ctx.$attrs : { ..._ctx.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof _ctx.image === "string" ? _ctx.image : _ctx.image.src),
            alt: _ctx.alt ?? (typeof _ctx.image === "string" ? "" : _ctx.image.alt || "")
          }))} data-v-e5ee072e>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["__scopeId", "data-v-e5ee072e"]]);
const _sfc_main$17 = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": _ctx.image || unref(heroImageSlotExists) }]
      }, _attrs))} data-v-1f0d5743><div class="container" data-v-1f0d5743><div class="main" data-v-1f0d5743>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, () => {
        _push(`<h1 class="heading" data-v-1f0d5743>`);
        if (_ctx.name) {
          _push(`<span class="name clip" data-v-1f0d5743>${_ctx.name ?? ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.text) {
          _push(`<span class="text" data-v-1f0d5743>${_ctx.text ?? ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h1>`);
        if (_ctx.tagline) {
          _push(`<p class="tagline" data-v-1f0d5743>${_ctx.tagline ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push, _parent);
      if (_ctx.actions) {
        _push(`<div class="actions" data-v-1f0d5743><!--[-->`);
        ssrRenderList(_ctx.actions, (action) => {
          _push(`<div class="action" data-v-1f0d5743>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link,
            target: action.target,
            rel: action.rel
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.image || unref(heroImageSlotExists)) {
        _push(`<div class="image" data-v-1f0d5743><div class="image-container" data-v-1f0d5743><div class="image-bg" data-v-1f0d5743></div>`);
        ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, () => {
          if (_ctx.image) {
            _push(ssrRenderComponent(VPImage, {
              class: "image-src",
              image: _ctx.image
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["__scopeId", "data-v-1f0d5743"]]);
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), {
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-before")
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info")
              ];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-after")
              ];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-actions-after")
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1d, mergeProps({
        class: "VPFeature",
        href: _ctx.link,
        rel: _ctx.rel,
        target: _ctx.target,
        "no-icon": true,
        tag: _ctx.link ? "a" : "div"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="box" data-v-806caba4${_scopeId}>`);
            if (typeof _ctx.icon === "object" && _ctx.icon.wrap) {
              _push2(`<div class="icon" data-v-806caba4${_scopeId}>`);
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (typeof _ctx.icon === "object") {
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
            } else if (_ctx.icon) {
              _push2(`<div class="icon" data-v-806caba4${_scopeId}>${_ctx.icon ?? ""}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="title" data-v-806caba4${_scopeId}>${_ctx.title ?? ""}</h2>`);
            if (_ctx.details) {
              _push2(`<p class="details" data-v-806caba4${_scopeId}>${_ctx.details ?? ""}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.linkText) {
              _push2(`<div class="link-text" data-v-806caba4${_scopeId}><p class="link-text-value" data-v-806caba4${_scopeId}>${ssrInterpolate(_ctx.linkText)} <span class="vpi-arrow-right link-text-icon" data-v-806caba4${_scopeId}></span></p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", { class: "box" }, [
                typeof _ctx.icon === "object" && _ctx.icon.wrap ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "icon"
                }, [
                  createVNode(VPImage, {
                    image: _ctx.icon,
                    alt: _ctx.icon.alt,
                    height: _ctx.icon.height || 48,
                    width: _ctx.icon.width || 48
                  }, null, 8, ["image", "alt", "height", "width"])
                ])) : typeof _ctx.icon === "object" ? (openBlock(), createBlock(VPImage, {
                  key: 1,
                  image: _ctx.icon,
                  alt: _ctx.icon.alt,
                  height: _ctx.icon.height || 48,
                  width: _ctx.icon.width || 48
                }, null, 8, ["image", "alt", "height", "width"])) : _ctx.icon ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "icon",
                  innerHTML: _ctx.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("h2", {
                  class: "title",
                  innerHTML: _ctx.title
                }, null, 8, ["innerHTML"]),
                _ctx.details ? (openBlock(), createBlock("p", {
                  key: 3,
                  class: "details",
                  innerHTML: _ctx.details
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                _ctx.linkText ? (openBlock(), createBlock("div", {
                  key: 4,
                  class: "link-text"
                }, [
                  createVNode("p", { class: "link-text-value" }, [
                    createTextVNode(toDisplayString(_ctx.linkText) + " ", 1),
                    createVNode("span", { class: "vpi-arrow-right link-text-icon" })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-806caba4"]]);
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-edaf6793><div class="container" data-v-edaf6793><div class="items" data-v-edaf6793><!--[-->`);
        ssrRenderList(_ctx.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[grid.value], "item"])}" data-v-edaf6793>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details,
            link: feature.link,
            "link-text": feature.linkText,
            rel: feature.rel,
            target: feature.target
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-edaf6793"]]);
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPHomeContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { width: vw } = useWindowSize({
      initialWidth: 0,
      includeScrollbar: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "vp-doc container",
        style: unref(vw) ? { "--vp-offset": `calc(50% - ${unref(vw) / 2}px)` } : {}
      }, _attrs))} data-v-848a0c42>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPHomeContent.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPHomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-848a0c42"]]);
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHome", {
          "external-link-icon-enabled": unref(theme2).externalLinkIcon
        }]
      }, _attrs))} data-v-24caa7e8>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$16, null, {
        "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
            ];
          }
        }),
        "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
            ];
          }
        }),
        "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
            ];
          }
        }),
        "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
            ];
          }
        }),
        "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$13, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      if (unref(frontmatter).markdownStyles !== false) {
        _push(ssrRenderComponent(VPHomeContent, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Content, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Content)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_Content, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-24caa7e8"]]);
const _sfc_main$10 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-e72d9862>`);
      if (unref(page).isNotFound) {
        ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
          _push(ssrRenderComponent(NotFound, null, null, _parent));
        }, _push, _parent);
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout && unref(frontmatter).layout !== "doc") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(frontmatter).layout), null, null), _parent);
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-e72d9862"]]);
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer && unref(frontmatter).footer !== false) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-24de0a36><div class="container" data-v-24de0a36>`);
        if (unref(theme2).footer.message) {
          _push(`<p class="message" data-v-24de0a36>${unref(theme2).footer.message ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-24de0a36>${unref(theme2).footer.copyright ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-24de0a36"]]);
function useLocalNav() {
  const { theme: theme2, frontmatter } = useData();
  const headers = shallowRef([]);
  const hasLocalNav = computed(() => {
    return headers.value.length > 0;
  });
  onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
  });
  return {
    headers,
    hasLocalNav
  };
}
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  __ssrInlineRender: true,
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    const main = ref();
    ref();
    function closeOnClickOutside(e) {
      var _a;
      if (!((_a = main.value) == null ? void 0 : _a.contains(e.target))) {
        open.value = false;
      }
    }
    watch(open, (value) => {
      if (value) {
        document.addEventListener("click", closeOnClickOutside);
        return;
      }
      document.removeEventListener("click", closeOnClickOutside);
    });
    onKeyStroke("Escape", () => {
      open.value = false;
    });
    onContentUpdated(() => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPLocalNavOutlineDropdown",
        style: { "--vp-vh": vh.value + "px" },
        ref_key: "main",
        ref: main
      }, _attrs))} data-v-ad798fa7>`);
      if (_ctx.headers.length > 0) {
        _push(`<button class="${ssrRenderClass({ open: open.value })}" data-v-ad798fa7><span class="menu-text" data-v-ad798fa7>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</span><span class="vpi-chevron-right icon" data-v-ad798fa7></span></button>`);
      } else {
        _push(`<button data-v-ad798fa7>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</button>`);
      }
      if (open.value) {
        _push(`<div class="items" data-v-ad798fa7><div class="header" data-v-ad798fa7><a class="top-link" href="#" data-v-ad798fa7>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</a></div><div class="outline" data-v-ad798fa7>`);
        _push(ssrRenderComponent(VPDocOutlineItem, { headers: _ctx.headers }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-ad798fa7"]]);
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { headers } = useLocalNav();
    const { y } = useWindowScroll();
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0;
    });
    const emptyAndNoSidebar = computed(() => {
      return empty.value && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        "has-sidebar": hasSidebar.value,
        empty: empty.value,
        fixed: emptyAndNoSidebar.value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(frontmatter).layout !== "home" && (!emptyAndNoSidebar.value || unref(y) >= navHeight.value)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: classes.value }, _attrs))} data-v-569c108e><div class="container" data-v-569c108e>`);
        if (unref(hasSidebar)) {
          _push(`<button class="menu"${ssrRenderAttr("aria-expanded", _ctx.open)} aria-controls="VPSidebarNav" data-v-569c108e><span class="vpi-align-left menu-icon" data-v-569c108e></span><span class="menu-text" data-v-569c108e>${ssrInterpolate(unref(theme2).sidebarMenuLabel || "Menu")}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNavOutlineDropdown, {
          headers: unref(headers),
          navHeight: navHeight.value
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-569c108e"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const _sfc_main$X = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-64cccc8c><span class="check" data-v-64cccc8c>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-64cccc8c>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-64cccc8c"]]);
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark, theme: theme2 } = useData();
    const toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    });
    const switchTitle = ref("");
    watchPostEffect(() => {
      switchTitle.value = isDark.value ? theme2.value.lightModeSwitchTitle || "Switch to light theme" : theme2.value.darkModeSwitchTitle || "Switch to dark theme";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        title: switchTitle.value,
        class: "VPSwitchAppearance",
        "aria-checked": unref(isDark),
        onClick: unref(toggleAppearance)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="vpi-sun sun" data-v-7b16a92c${_scopeId}></span><span class="vpi-moon moon" data-v-7b16a92c${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "vpi-sun sun" }),
              createVNode("span", { class: "vpi-moon moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-7b16a92c"]]);
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-3d6350db>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-3d6350db"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-c5f0a183>`);
      _push(ssrRenderComponent(_sfc_main$1d, {
        class: {
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        "no-icon": _ctx.item.noIcon
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-c5f0a183${_scopeId}>${_ctx.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-c5f0a183"]]);
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-35e06c65>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-35e06c65>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-35e06c65"]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-eb34ff38>`);
      if (_ctx.items) {
        _push(`<div class="items" data-v-eb34ff38><!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props), null), _parent);
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-eb34ff38"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-14b5b58e><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", _ctx.label)} data-v-14b5b58e>`);
      if (_ctx.button || _ctx.icon) {
        _push(`<span class="text" data-v-14b5b58e>`);
        if (_ctx.icon) {
          _push(`<span class="${ssrRenderClass([_ctx.icon, "option-icon"])}" data-v-14b5b58e></span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.button) {
          _push(`<span data-v-14b5b58e>${_ctx.button ?? ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="vpi-chevron-down text-icon" data-v-14b5b58e></span></span>`);
      } else {
        _push(`<span class="vpi-more-horizontal icon" data-v-14b5b58e></span>`);
      }
      _push(`</button><div class="menu" data-v-14b5b58e>`);
      _push(ssrRenderComponent(VPMenu, { items: _ctx.items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-14b5b58e"]]);
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const el = ref();
    onMounted(async () => {
      var _a2;
      await nextTick();
      const span = (_a2 = el.value) == null ? void 0 : _a2.children[0];
      if (span instanceof HTMLElement && span.className.startsWith("vpi-social-") && (getComputedStyle(span).maskImage || getComputedStyle(span).webkitMaskImage) === "none") {
        span.style.setProperty(
          "--icon",
          `url('https://api.iconify.design/simple-icons/${props.icon}.svg')`
        );
      }
    });
    const svg = computed(() => {
      if (typeof props.icon === "object") return props.icon.svg;
      return `<span class="vpi-social-${props.icon}"></span>`;
    });
    {
      typeof props.icon === "string" && ((_a = useSSRContext()) == null ? void 0 : _a.vpSocialIcons.add(props.icon));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "VPSocialLink no-icon",
        href: _ctx.link,
        "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon === "string" ? _ctx.icon : ""),
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-08377583>${svg.value ?? ""}</a>`);
    };
  }
});
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-08377583"]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-847d50c3><!--[-->`);
      ssrRenderList(_ctx.links, ({ link: link2, icon, ariaLabel }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2,
          ariaLabel
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-847d50c3"]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (hasExtraContent.value) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(localeLinks).length && unref(currentLang).label) {
                _push2(`<div class="group translations" data-v-d25227d6${_scopeId}><p class="trans-title" data-v-d25227d6${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
                ssrRenderList(unref(localeLinks), (locale) => {
                  _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
                _push2(`<div class="group" data-v-d25227d6${_scopeId}><div class="item appearance" data-v-d25227d6${_scopeId}><p class="label" data-v-d25227d6${_scopeId}>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p><div class="appearance-action" data-v-d25227d6${_scopeId}>`);
                _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(theme2).socialLinks) {
                _push2(`<div class="group" data-v-d25227d6${_scopeId}><div class="item social-links" data-v-d25227d6${_scopeId}>`);
                _push2(ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: unref(theme2).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "group translations"
                }, [
                  createVNode("p", { class: "trans-title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "group"
                }, [
                  createVNode("div", { class: "item appearance" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
                    createVNode("div", { class: "appearance-action" }, [
                      createVNode(VPSwitchAppearance)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "group"
                }, [
                  createVNode("div", { class: "item social-links" }, [
                    createVNode(VPSocialLinks, {
                      class: "social-links-list",
                      links: unref(theme2).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-d25227d6"]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: _ctx.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-da19a2f5><span class="container" data-v-da19a2f5><span class="top" data-v-da19a2f5></span><span class="middle" data-v-da19a2f5></span><span class="bottom" data-v-da19a2f5></span></span></button>`);
    };
  }
});
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-da19a2f5"]]);
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1d, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        "no-icon": _ctx.item.noIcon,
        tabindex: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-39c437b0${_scopeId}>${_ctx.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-39c437b0"]]);
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    const isChildActive = (navItem) => {
      if ("component" in navItem) return false;
      if ("link" in navItem) {
        return isActive(
          page.value.relativePath,
          navItem.link,
          !!props.item.activeMatch
        );
      }
      return navItem.items.some(isChildActive);
    };
    const childrenActive = computed(() => isChildActive(props.item));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch, !!_ctx.item.activeMatch) || childrenActive.value
        },
        button: _ctx.item.text,
        items: _ctx.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-944d94d4><span id="main-nav-aria-label" class="visually-hidden" data-v-944d94d4> Main Navigation </span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props), null), _parent);
          } else {
            _push(ssrRenderComponent(_sfc_main$L, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-944d94d4"]]);
function createSearchTranslate(defaultTranslations) {
  const { localeIndex, theme: theme2 } = useData();
  function translate(key) {
    var _a, _b, _c;
    const keyPath = key.split(".");
    const themeObject = (_a = theme2.value.search) == null ? void 0 : _a.options;
    const isObject = themeObject && typeof themeObject === "object";
    const locales = isObject && ((_c = (_b = themeObject.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) || null;
    const translations = isObject && themeObject.translations || null;
    let localeResult = locales;
    let translationResult = translations;
    let defaultResult = defaultTranslations;
    const lastKey = keyPath.pop();
    for (const k of keyPath) {
      let fallbackResult = null;
      const foundInFallback = defaultResult == null ? void 0 : defaultResult[k];
      if (foundInFallback) {
        fallbackResult = defaultResult = foundInFallback;
      }
      const foundInTranslation = translationResult == null ? void 0 : translationResult[k];
      if (foundInTranslation) {
        fallbackResult = translationResult = foundInTranslation;
      }
      const foundInLocale = localeResult == null ? void 0 : localeResult[k];
      if (foundInLocale) {
        fallbackResult = localeResult = foundInLocale;
      }
      if (!foundInFallback) {
        defaultResult = fallbackResult;
      }
      if (!foundInTranslation) {
        translationResult = fallbackResult;
      }
      if (!foundInLocale) {
        localeResult = fallbackResult;
      }
    }
    return (localeResult == null ? void 0 : localeResult[lastKey]) ?? (translationResult == null ? void 0 : translationResult[lastKey]) ?? (defaultResult == null ? void 0 : defaultResult[lastKey]) ?? "";
  }
  return translate;
}
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultTranslations = {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    };
    const translate = createSearchTranslate(defaultTranslations);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": unref(translate)("button.buttonAriaLabel")
      }, _attrs))}><span class="DocSearch-Button-Container"><span class="vp-icon DocSearch-Search-Icon"></span><span class="DocSearch-Button-Placeholder">${ssrInterpolate(unref(translate)("button.buttonText"))}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`);
    };
  }
});
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPLocalSearchBox = () => null;
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2 } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    const showSearch = ref(false);
    const provider = "";
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarSearch" }, _attrs))}>`);
      if (unref(provider) === "local") {
        _push(`<!--[-->`);
        if (showSearch.value) {
          _push(ssrRenderComponent(unref(VPLocalSearchBox), {
            onClose: ($event) => showSearch.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div id="local-search">`);
        _push(ssrRenderComponent(_sfc_main$J, {
          onClick: ($event) => showSearch.value = true
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else if (unref(provider) === "algolia") {
        _push(`<!--[-->`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), {
            algolia: ((_a = unref(theme2).search) == null ? void 0 : _a.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: ($event) => actuallyLoaded.value = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!actuallyLoaded.value) {
          _push(`<div id="docsearch">`);
          _push(ssrRenderComponent(_sfc_main$J, { onClick: load }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-70e5ee16"]]);
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    const link2 = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? theme2.value.logoLink : (_a = theme2.value.logoLink) == null ? void 0 : _a.link;
      }
    );
    const rel = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.rel;
      }
    );
    const target = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.target;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-b8d10464><a class="title"${ssrRenderAttr("href", link2.value ?? unref(normalizeLink$1)(unref(currentLang).link))}${ssrRenderAttr("rel", rel.value)}${ssrRenderAttr("target", target.value)} data-v-b8d10464>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      if (unref(theme2).logo) {
        _push(ssrRenderComponent(VPImage, {
          class: "logo",
          image: unref(theme2).logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(theme2).siteTitle) {
        _push(`<span data-v-b8d10464>${unref(theme2).siteTitle ?? ""}</span>`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<span data-v-b8d10464>${ssrInterpolate(unref(site).title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-b8d10464"]]);
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: "vpi-languages",
          label: unref(theme2).langMenuLabel || "Change language"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-9c06aeb0${_scopeId}><p class="title" data-v-9c06aeb0${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
              ssrRenderList(unref(localeLinks), (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-9c06aeb0"]]);
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const props = __props;
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    const classes = ref({});
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        "home": frontmatter.value.layout === "home",
        "top": y.value === 0,
        "screen-open": props.isScreenOpen
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", classes.value]
      }, _attrs))} data-v-cb1a5580><div class="wrapper" data-v-cb1a5580><div class="container" data-v-cb1a5580><div class="title" data-v-cb1a5580>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div class="content" data-v-cb1a5580><div class="content-body" data-v-cb1a5580>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$I, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: _ctx.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div></div><div class="divider" data-v-cb1a5580><div class="divider-line" data-v-cb1a5580></div></div></div>`);
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-cb1a5580"]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-a3e4dda7><p class="text" data-v-a3e4dda7>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-a3e4dda7"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1d, mergeProps({
        class: "VPNavScreenMenuLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        "no-icon": _ctx.item.noIcon,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-3c692304${_scopeId}>${_ctx.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-3c692304"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1d, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        "no-icon": _ctx.item.noIcon,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-c0cf1334${_scopeId}>${_ctx.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-c0cf1334"]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-aa1de37e>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-aa1de37e>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-aa1de37e"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-b96c5d6b><button class="button"${ssrRenderAttr("aria-controls", groupId.value)}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-b96c5d6b><span class="button-text" data-v-b96c5d6b>${_ctx.text ?? ""}</span><span class="vpi-plus button-icon" data-v-b96c5d6b></span></button><div${ssrRenderAttr("id", groupId.value)} class="items" data-v-b96c5d6b><!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-b96c5d6b>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, { item }, null, _parent));
          _push(`</div>`);
        } else if ("component" in item) {
          _push(`<div class="item" data-v-b96c5d6b>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props, { "screen-menu": "" }), null), _parent);
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-b96c5d6b>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-b96c5d6b"]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, { item }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props, { "screen-menu": "" }), null), _parent);
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-e7ca3317><button class="title" data-v-e7ca3317><span class="vpi-languages icon lang" data-v-e7ca3317></span> ${ssrInterpolate(unref(currentLang).label)} <span class="vpi-chevron-down icon chevron" data-v-e7ca3317></span></button><ul class="list" data-v-e7ca3317><!--[-->`);
        ssrRenderList(unref(localeLinks), (locale) => {
          _push(`<li class="item" data-v-e7ca3317>`);
          _push(ssrRenderComponent(_sfc_main$1d, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(locale.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-e7ca3317"]]);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen,
          id: "VPNavScreen"
        }, _attrs))} data-v-fc2b637c><div class="container" data-v-fc2b637c>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$y, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$x, { class: "social-links" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-fc2b637c"]]);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { frontmatter } = useData();
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (hasNavbar.value) {
        _push(`<header${ssrRenderAttrs(mergeProps({ class: "VPNav" }, _attrs))} data-v-e4f10a70>`);
        _push(ssrRenderComponent(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, {
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</header>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-e4f10a70"]]);
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(sectionTag.value), mergeProps({
        class: ["VPSidebarItem", classes.value]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.item.text) {
              _push2(`<div class="item"${ssrRenderAttr("role", itemRole.value)}${ssrRenderAttr("tabindex", _ctx.item.items && 0)} data-v-a3d6a13a${_scopeId}><div class="indicator" data-v-a3d6a13a${_scopeId}></div>`);
              if (_ctx.item.link) {
                _push2(ssrRenderComponent(_sfc_main$1d, {
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link,
                  rel: _ctx.item.rel,
                  target: _ctx.item.target
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent3, _scopeId2);
                    } else {
                      return [
                        (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                          class: "text",
                          innerHTML: _ctx.item.text
                        }, null, 8, ["innerHTML"]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent2, _scopeId);
              }
              if (_ctx.item.collapsed != null && _ctx.item.items && _ctx.item.items.length) {
                _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-a3d6a13a${_scopeId}><span class="vpi-chevron-right caret-icon" data-v-a3d6a13a${_scopeId}></span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.items && _ctx.item.items.length) {
              _push2(`<div class="items" data-v-a3d6a13a${_scopeId}>`);
              if (_ctx.depth < 5) {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.item.items, (i) => {
                  _push2(ssrRenderComponent(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.item.text ? (openBlock(), createBlock("div", mergeProps({
                key: 0,
                class: "item",
                role: itemRole.value
              }, toHandlers(
                _ctx.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
                true
              ), {
                tabindex: _ctx.item.items && 0
              }), [
                createVNode("div", { class: "indicator" }),
                _ctx.item.link ? (openBlock(), createBlock(_sfc_main$1d, {
                  key: 0,
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link,
                  rel: _ctx.item.rel,
                  target: _ctx.item.target
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                      class: "text",
                      innerHTML: _ctx.item.text
                    }, null, 8, ["innerHTML"]))
                  ]),
                  _: 1
                }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  key: 1,
                  class: "text",
                  innerHTML: _ctx.item.text
                }, null, 8, ["innerHTML"])),
                _ctx.item.collapsed != null && _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "caret",
                  role: "button",
                  "aria-label": "toggle section",
                  onClick: onCaretClick,
                  onKeydown: withKeys(onCaretClick, ["enter"]),
                  tabindex: "0"
                }, [
                  createVNode("span", { class: "vpi-chevron-right caret-icon" })
                ], 32)) : createCommentVNode("", true)
              ], 16, ["role", "tabindex"])) : createCommentVNode("", true),
              _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "items"
              }, [
                _ctx.depth < 5 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.item.items, (i) => {
                  return openBlock(), createBlock(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, 8, ["item", "depth"]);
                }), 128)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPSidebarItem.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-a3d6a13a"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarGroup",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const disableTransition = ref(true);
    let timer = null;
    onMounted(() => {
      timer = setTimeout(() => {
        timer = null;
        disableTransition.value = false;
      }, 300);
    });
    onBeforeUnmount(() => {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<div class="${ssrRenderClass([{ "no-transition": disableTransition.value }, "group"])}" data-v-46cdb942>`);
        _push(ssrRenderComponent(VPSidebarItem, {
          item,
          depth: 0
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPSidebarGroup.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-46cdb942"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebarGroups, hasSidebar } = useSidebar();
    const props = __props;
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(
      [props, navEl],
      () => {
        var _a;
        if (props.open) {
          isLocked.value = true;
          (_a = navEl.value) == null ? void 0 : _a.focus();
        } else isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    const key = ref(0);
    watch(
      sidebarGroups,
      () => {
        key.value += 1;
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: _ctx.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-1332d82f><div class="curtain" data-v-1332d82f></div><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-1332d82f><span class="visually-hidden" id="sidebar-aria-label" data-v-1332d82f> Sidebar Navigation </span>`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSidebarGroup, {
          items: unref(sidebarGroups),
          key: key.value
        }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-1332d82f"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-90698e7a></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-90698e7a>${ssrInterpolate(unref(theme2).skipToContentLabel || "Skip to content")}</a><!--]-->`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-90698e7a"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      if (unref(frontmatter).layout !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["Layout", unref(frontmatter).pageClass]
        }, _attrs))} data-v-53ece351>`);
        ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPNav, null, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
              ];
            }
          }),
          "sidebar-nav-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPContent, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
              ];
            }
          }),
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPFooter, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-53ece351"]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    data: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [_ctx.size]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: { default: "normal" },
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [_ctx.mode]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(sponsors.value, (sponsor, index) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$o, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$n, {
        mode: "aside",
        tier: _ctx.tier,
        size: _ctx.size,
        data: _ctx.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: {},
    actionText: { default: "Become a sponsor" },
    actionLink: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-c4eb9abf><div class="container" data-v-c4eb9abf><div class="header" data-v-c4eb9abf><div class="love" data-v-c4eb9abf><span class="vpi-heart icon" data-v-c4eb9abf></span></div>`);
      if (_ctx.message) {
        _push(`<h2 class="message" data-v-c4eb9abf>${ssrInterpolate(_ctx.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-c4eb9abf>`);
      _push(ssrRenderComponent(_sfc_main$n, { data: _ctx.data }, null, _parent));
      _push(`</div>`);
      if (_ctx.actionLink) {
        _push(`<div class="action" data-v-c4eb9abf>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: _ctx.actionText,
          href: _ctx.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    member: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [_ctx.size]]
      }, _attrs))} data-v-823b9a28><div class="profile" data-v-823b9a28><figure class="avatar" data-v-823b9a28><img class="avatar-img"${ssrRenderAttr("src", _ctx.member.avatar)}${ssrRenderAttr("alt", _ctx.member.name)} data-v-823b9a28></figure><div class="data" data-v-823b9a28><h1 class="name" data-v-823b9a28>${ssrInterpolate(_ctx.member.name)}</h1>`);
      if (_ctx.member.title || _ctx.member.org) {
        _push(`<p class="affiliation" data-v-823b9a28>`);
        if (_ctx.member.title) {
          _push(`<span class="title" data-v-823b9a28>${ssrInterpolate(_ctx.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.title && _ctx.member.org) {
          _push(`<span class="at" data-v-823b9a28> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.org) {
          _push(ssrRenderComponent(_sfc_main$1d, {
            class: ["org", { link: _ctx.member.orgLink }],
            href: _ctx.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.desc) {
        _push(`<p class="desc" data-v-823b9a28>${_ctx.member.desc ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.links) {
        _push(`<div class="links" data-v-823b9a28>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: _ctx.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.member.sponsor) {
        _push(`<div class="sp" data-v-823b9a28>`);
        _push(ssrRenderComponent(_sfc_main$1d, {
          class: "sp-link",
          href: _ctx.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="vpi-heart sp-icon" data-v-823b9a28${_scopeId}></span> ${ssrInterpolate(_ctx.member.actionText || "Sponsor")}`);
            } else {
              return [
                createVNode("span", { class: "vpi-heart sp-icon" }),
                createTextVNode(" " + toDisplayString(_ctx.member.actionText || "Sponsor"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-823b9a28"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    members: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [props.size, `count-${props.members.length}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", classes.value]
      }, _attrs))} data-v-479df413><div class="container" data-v-479df413><!--[-->`);
      ssrRenderList(_ctx.members, (member) => {
        _push(`<div class="item" data-v-479df413>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: _ctx.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.13.14_postcss@8.5.3_react@_72113fba329d3e661389d4f9bb2c0ba8/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$1k);
  }
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "LogoGrid",
  __ssrInlineRender: true,
  props: {
    logos: {}
  },
  setup(__props) {
    function getAltText(src) {
      var _a;
      return ((_a = src.split("/").pop()) == null ? void 0 : _a.split(".")[0]) || "logo";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo-grid" }, _attrs))} data-v-0fb8e801><!--[-->`);
      ssrRenderList(_ctx.logos, (logo) => {
        _push(`<a${ssrRenderAttr("href", logo.url)} target="_blank" rel="noopener noreferrer" class="logo-link" data-v-0fb8e801><div class="logo-wrapper" data-v-0fb8e801><img${ssrRenderAttr("src", unref(withBase)(logo.src))}${ssrRenderAttr("alt", getAltText(logo.src))} class="logo" data-v-0fb8e801></div></a>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/LogoGrid.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const LogoGrid = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-0fb8e801"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    href: {},
    text: {},
    class: {},
    target: {},
    rel: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><a${ssrRenderAttr("href", _ctx.href)} class="${ssrRenderClass([_ctx.class, "themed-button light-only"])}"${ssrRenderAttr("target", _ctx.target)}${ssrRenderAttr("rel", _ctx.rel)}>${ssrInterpolate(_ctx.text)}</a><a${ssrRenderAttr("href", _ctx.href)} class="${ssrRenderClass([_ctx.class, "themed-button dark-only"])}"${ssrRenderAttr("target", _ctx.target)}${ssrRenderAttr("rel", _ctx.rel)}>${ssrInterpolate(_ctx.text)}</a><!--]-->`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/Button.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
function resolveRelativePath(relativePath, basePath) {
  if (relativePath.startsWith("/")) return relativePath;
  let baseDir = basePath;
  if (!basePath.endsWith("/")) {
    baseDir = basePath.substring(0, basePath.lastIndexOf("/") + 1);
  }
  const segments = baseDir.split("/").filter((s) => s);
  const relativeParts = relativePath.split("/").filter((s) => s);
  for (let i = 0; i < relativeParts.length; i++) {
    if (relativeParts[i] === "..") {
      segments.pop();
      relativeParts.splice(i, 1);
      i--;
    } else if (relativeParts[i] === ".") {
      relativeParts.splice(i, 1);
      i--;
    } else {
      break;
    }
  }
  return "/" + [...segments, ...relativeParts].join("/");
}
function createLocalizedPath(path, locale, currentPath = "/") {
  if (path.startsWith("http") || path.startsWith("#")) {
    return path;
  }
  const currentLang = locale.slice(0, 2);
  let resolvedPath = path;
  if (!path.startsWith("/")) {
    resolvedPath = resolveRelativePath(path, currentPath);
  }
  if (currentLang === "en") {
    return resolvedPath;
  }
  if (resolvedPath.startsWith(`/${currentLang}/`)) {
    return resolvedPath;
  }
  return `/${currentLang}${resolvedPath}`;
}
function useLocalizedPath() {
  const { lang, page } = useData$1();
  const router = useRouter();
  const getLocalizedPath = (path) => {
    return createLocalizedPath(path, lang.value, "/" + page.value.relativePath);
  };
  const navigateTo = (path) => {
    const localizedPath = getLocalizedPath(path);
    router.go(localizedPath);
  };
  return {
    getLocalizedPath,
    navigateTo
  };
}
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});
const defaultRender = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  if (!tokens || idx >= tokens.length) {
    return defaultRender(tokens, idx, options, env, self);
  }
  const aIndex = tokens[idx].attrIndex("href");
  if (aIndex >= 0 && tokens[idx].attrs) {
    const href = tokens[idx].attrs[aIndex][1];
    if (href && !href.startsWith("http") && !href.startsWith("#") && !href.startsWith("mailto:")) {
      try {
        const locale = (env == null ? void 0 : env.locale) || "en";
        const currentPath = (env == null ? void 0 : env.currentPath) || "/";
        const localizedHref = createLocalizedPath(href, locale, currentPath);
        tokens[idx].attrs[aIndex][1] = localizedHref;
      } catch (e) {
        console.error("Ошибка локализации ссылки:", e);
      }
    }
    if (href && href.startsWith("http")) {
      tokens[idx].attrSet("target", "_blank");
      tokens[idx].attrSet("rel", "noopener noreferrer");
    }
  }
  return defaultRender(tokens, idx, options, env, self);
};
function renderMarkdown(text) {
  let locale = "en";
  let currentPath = "/";
  try {
    if (typeof useData$1 === "function") {
      const { lang, page } = useData$1();
      locale = lang.value;
      currentPath = "/" + page.value.relativePath;
    }
  } catch (e) {
    console.warn("Не удалось получить локаль из VitePress context:", e);
  }
  return md.render(text, { locale, currentPath });
}
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "FeatureCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    details: {},
    items: {},
    images: {},
    linkText: {},
    linkHref: {},
    bullet: {}
  },
  setup(__props) {
    const props = __props;
    useLocalizedPath();
    const isVideoLight = computed(() => {
      var _a;
      return (_a = props.images.light) == null ? void 0 : _a.toLowerCase().match(/\.(mp4|webm|ogg)$/);
    });
    const isVideoDark = computed(() => {
      var _a;
      return (_a = props.images.dark) == null ? void 0 : _a.toLowerCase().match(/\.(mp4|webm|ogg)$/);
    });
    const renderedTitle = computed(() => {
      return renderMarkdown(props.title);
    });
    const renderedDetails = computed(() => {
      if (!props.details) return "";
      return renderMarkdown(props.details);
    });
    const renderedItems = computed(() => {
      return props.items.map((item) => renderMarkdown(item));
    });
    const bulletStyle = computed(() => props.bullet || "•");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-card" }, _attrs))} data-v-bec9531b><div class="${ssrRenderClass([{ "is-clickable": _ctx.linkHref }, "media-container"])}" data-v-bec9531b>`);
      if (isVideoLight.value) {
        _push(`<video autoplay muted playsinline class="feature-image light" data-v-bec9531b><source${ssrRenderAttr("src", _ctx.images.light)}${ssrRenderAttr("type", `video/${_ctx.images.light.split(".").pop()}`)} data-v-bec9531b></video>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.images.light)} class="feature-image light"${ssrRenderAttr("alt", _ctx.images.alt)} data-v-bec9531b>`);
      }
      if (isVideoDark.value) {
        _push(`<video autoplay muted playsinline class="feature-image dark" data-v-bec9531b><source${ssrRenderAttr("src", _ctx.images.dark)}${ssrRenderAttr("type", `video/${_ctx.images.dark.split(".").pop()}`)} data-v-bec9531b></video>`);
      } else {
        _push(`<img${ssrRenderAttr("src", _ctx.images.dark)} class="feature-image dark"${ssrRenderAttr("alt", _ctx.images.alt)} data-v-bec9531b>`);
      }
      _push(`</div><h3 class="feature-title" data-v-bec9531b>${renderedTitle.value ?? ""}</h3>`);
      if (_ctx.details) {
        _push(`<div class="feature-details" data-v-bec9531b>${renderedDetails.value ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="feature-list" style="${ssrRenderStyle({ "--bullet-content": `'${bulletStyle.value}'` })}" data-v-bec9531b><!--[-->`);
      ssrRenderList(renderedItems.value, (item, index) => {
        _push(`<li class="feature-item" data-v-bec9531b><div class="feature-text" data-v-bec9531b>${item ?? ""}</div></li>`);
      });
      _push(`<!--]--></ul>`);
      if (_ctx.linkHref) {
        _push(`<a href="#" class="${ssrRenderClass([{ "is-clickable": _ctx.linkHref }, "feature-link"])}" data-v-bec9531b>${ssrInterpolate(_ctx.linkText)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/FeatureCard.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const FeatureCard = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-bec9531b"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "FeatureCards",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const columns = props.features.length;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "feature-cards",
        style: { "--columns": unref(columns) }
      }, _attrs))} data-v-b54f663f><!--[-->`);
      ssrRenderList(_ctx.features, (feature, index) => {
        _push(ssrRenderComponent(FeatureCard, {
          key: index,
          title: feature.title,
          details: feature.details,
          items: feature.items,
          images: feature.icon,
          linkText: feature.linkText,
          linkHref: feature.link,
          bullet: feature.bullet
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/FeatureCards.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const FeatureCards = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-b54f663f"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "BenefitsList",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const renderedTitles = computed(() => {
      return props.features.map((feature) => renderMarkdown(feature.title));
    });
    const renderedTexts = computed(() => {
      return props.features.map((feature) => renderMarkdown(feature.text));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "benefits-grid" }, _attrs))} data-v-385219e8><!--[-->`);
      ssrRenderList(_ctx.features, (feature, index) => {
        _push(`<div class="benefit-card" data-v-385219e8><div class="emoji" data-v-385219e8>${ssrInterpolate(feature.icon)}</div><div class="content" data-v-385219e8><h3 class="title" data-v-385219e8>${renderedTitles.value[index] ?? ""}</h3><div class="text" data-v-385219e8>${renderedTexts.value[index] ?? ""}</div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/BenefitsList.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const BenefitsList = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-385219e8"]]);
const PATH_CLEANUP_REGEX$1 = /^(?:en|ar|hi|ur|bn|ml|ta|te|fa|zh|fr|ru|uk|tr|ko|ja|tl|id|vi|pt|es)\/|(\.[^/.]+)$/g;
const generateOriginId = (path) => {
  return v5(path.replace(PATH_CLEANUP_REGEX$1, ""), v5.URL);
};
const useFormSubmit = () => {
  const formData = ref({});
  const formStatus = ref({
    isSubmitting: false,
    successMessage: "",
    errorMessage: ""
  });
  const submitForm = async () => {
    formStatus.value.isSubmitting = true;
    try {
      const response = await fetch("/api/createContactAndLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData.value)
      });
      const data = await response.json();
      if (data.success) formStatus.value.successMessage = "Your application has been accepted!";
      else formStatus.value.errorMessage = data.message;
    } catch (error) {
      console.error(error);
    } finally {
      formStatus.value.isSubmitting = false;
    }
  };
  return { formData, formStatus, submitForm };
};
const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "campaign_id"
  // Дополнительный параметр из вашего URL
];
const STORAGE_PREFIX = "gf_utm_";
const UTM_EXPIRY = 30 * 24 * 60 * 60 * 1e3;
function extractUtmFromUrl() {
  if (typeof window === "undefined") return {};
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {};
  UTM_PARAMS.forEach((param) => {
    const value = urlParams.get(param);
    if (value) {
      utmParams[param] = value;
    }
  });
  return utmParams;
}
function saveUtmParams(params) {
  if (typeof window === "undefined" || !params || Object.keys(params).length === 0) return;
  const expiryTime = Date.now() + UTM_EXPIRY;
  Object.keys(params).forEach((key) => {
    const storageItem = {
      value: params[key],
      expiry: expiryTime
    };
    localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(storageItem));
  });
  if (!localStorage.getItem(`${STORAGE_PREFIX}first_visit`)) {
    localStorage.setItem(
      `${STORAGE_PREFIX}first_visit`,
      JSON.stringify({
        value: (/* @__PURE__ */ new Date()).toISOString(),
        expiry: expiryTime
      })
    );
  }
}
function getSavedUtmParams() {
  if (typeof window === "undefined") return {};
  const params = {};
  const now = Date.now();
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(STORAGE_PREFIX)) {
      try {
        const item = JSON.parse(localStorage.getItem(key) || "");
        if (item.expiry && item.expiry > now) {
          const paramName = key.replace(STORAGE_PREFIX, "");
          params[paramName] = item.value;
        } else {
          localStorage.removeItem(key);
        }
      } catch (e) {
        console.error(`Error parsing UTM param from localStorage: ${key}`, e);
      }
    }
  }
  return params;
}
function determineTrafficSource() {
  const utmParams = getSavedUtmParams();
  if (utmParams.utm_source === "google_ads" || utmParams.utm_medium === "cpc") {
    let source = "ADS";
    if (utmParams.utm_campaign) {
      source += `[${utmParams.utm_campaign}]`;
    }
    return source;
  }
  if (utmParams.utm_campaign) {
    let source = utmParams.utm_campaign;
    if (utmParams.utm_medium) {
      source += `[${utmParams.utm_medium}]`;
    }
    if (utmParams.utm_source && utmParams.utm_source !== utmParams.utm_medium) {
      source += `[${utmParams.utm_source}]`;
    }
    return source;
  }
  if (utmParams.campaign_id) {
    return `campaign[${utmParams.campaign_id}]`;
  }
  const referrer = typeof document !== "undefined" ? document.referrer : "";
  if (!referrer) {
    return "Direct";
  }
  const searchEngines = ["google.", "bing.", "yahoo.", "yandex.", "baidu."];
  const isOrganic = searchEngines.some((engine) => referrer.includes(engine));
  return isOrganic ? "Organic" : "Referral";
}
function initUtmTracking() {
  if (typeof window === "undefined") return;
  const urlParams = extractUtmFromUrl();
  if (Object.keys(urlParams).length > 0) {
    saveUtmParams(urlParams);
  }
}
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ContactFormModal",
  __ssrInlineRender: true,
  props: {
    formName: {},
    services: {},
    buttonText: {},
    formStyle: {},
    categoryLabel: {},
    categoryPlaceholderText: {},
    messageLabel: {},
    messagePlaceholderText: {}
  },
  emits: ["success"],
  setup(__props, { emit: __emit }) {
    const { site, page } = useData$1();
    const props = __props;
    const buttonTextValue = computed(() => props.buttonText || site.value.themeConfig.contact_form.defaultButtonText);
    const categoriesValue = computed(() => props.services || site.value.themeConfig.contact_form.defaultCategories);
    const styleValue = computed(() => props.formStyle || "display: block; margin: 0 auto;");
    const categoryLabelValue = computed(() => props.categoryLabel || site.value.themeConfig.contact_form.category);
    const categoryPlaceholderValue = computed(() => props.categoryPlaceholderText || site.value.themeConfig.contact_form.categoryPlaceholder);
    const messageLabelValue = computed(() => props.messageLabel || site.value.themeConfig.contact_form.message);
    const messagePlaceholderValue = computed(() => props.messagePlaceholderText || site.value.themeConfig.contact_form.messagePlaceholder);
    const showModal = ref(false);
    const {
      name,
      namePlaceholder,
      phone,
      phonePlaceholder,
      email,
      emailPlaceholder,
      message,
      messagePlaceholder,
      category,
      categoryPlaceholder,
      submit,
      sending,
      successTitle,
      successMessage
    } = site.value.themeConfig.contact_form;
    const { formData, formStatus } = useFormSubmit();
    onMounted(() => {
      if (typeof window !== "undefined") {
        initUtmTracking();
      }
    });
    useRoute();
    formData.value.leadSource = determineTrafficSource();
    formData.value.channel = "Web forms";
    formData.value.channelId = props.formName;
    formData.value.originId = generateOriginId(page.value.relativePath);
    formData.value.category = "";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><button class="modal-button" style="${ssrRenderStyle(styleValue.value)}" data-v-c9871fc5>${ssrInterpolate(buttonTextValue.value)}</button>`);
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(showModal.value ? null : { display: "none" })}" class="modal-mask" data-v-c9871fc5><div class="modal-container" data-v-c9871fc5><div class="modal-header" data-v-c9871fc5><h3 data-v-c9871fc5>${ssrInterpolate(buttonTextValue.value)}</h3><button class="close-button" data-v-c9871fc5>×</button></div>`);
        if (unref(formStatus).successMessage) {
          _push2(`<div class="success-message" data-v-c9871fc5><h3 class="success-title" data-v-c9871fc5>${ssrInterpolate(unref(successTitle))}</h3><p class="success-text" data-v-c9871fc5>${ssrInterpolate(unref(successMessage))}</p></div>`);
        } else {
          _push2(`<form class="contact-form" data-v-c9871fc5><div data-v-c9871fc5><label for="name" data-v-c9871fc5>${ssrInterpolate(unref(name))}</label><input name="name" type="text"${ssrRenderAttr("value", unref(formData).name)}${ssrRenderAttr("placeholder", unref(namePlaceholder))} required data-v-c9871fc5></div><div data-v-c9871fc5><label for="email" data-v-c9871fc5>${ssrInterpolate(unref(email))}</label><input name="email" type="email"${ssrRenderAttr("value", unref(formData).email)}${ssrRenderAttr("placeholder", unref(emailPlaceholder))} required data-v-c9871fc5></div><div data-v-c9871fc5><label for="phone" data-v-c9871fc5>${ssrInterpolate(unref(phone))}</label><input name="phone" type="tel"${ssrRenderAttr("value", unref(formData).phone)}${ssrRenderAttr("placeholder", unref(phonePlaceholder))} required pattern="^(\\+\\d{1,4}[\\s\\-]?|\\(\\d{1,4}\\)[\\s\\-]?|\\d{1,4}[\\s\\-])[\\d\\s\\-]{8,16}$" maxlength="20" data-v-c9871fc5></div><div data-v-c9871fc5><label for="category" data-v-c9871fc5>${ssrInterpolate(categoryLabelValue.value)}</label><select name="category" required data-v-c9871fc5><option value="" disabled data-v-c9871fc5${ssrIncludeBooleanAttr(Array.isArray(unref(formData).category) ? ssrLooseContain(unref(formData).category, "") : ssrLooseEqual(unref(formData).category, "")) ? " selected" : ""}>${ssrInterpolate(categoryPlaceholderValue.value)}</option><!--[-->`);
          ssrRenderList(categoriesValue.value, (category2) => {
            _push2(`<option${ssrRenderAttr("value", category2)} data-v-c9871fc5${ssrIncludeBooleanAttr(Array.isArray(unref(formData).category) ? ssrLooseContain(unref(formData).category, category2) : ssrLooseEqual(unref(formData).category, category2)) ? " selected" : ""}>${ssrInterpolate(category2)}</option>`);
          });
          _push2(`<!--]--></select></div><div data-v-c9871fc5><label for="message" data-v-c9871fc5>${ssrInterpolate(messageLabelValue.value)}</label><textarea name="message"${ssrRenderAttr("placeholder", messagePlaceholderValue.value)} data-v-c9871fc5>${ssrInterpolate(unref(formData).message)}</textarea></div>`);
          if (unref(formStatus).errorMessage) {
            _push2(`<p class="error" data-v-c9871fc5>${ssrInterpolate(unref(formStatus).errorMessage)}</p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="modal-footer" data-v-c9871fc5><button type="submit" class="modal-button submit"${ssrIncludeBooleanAttr(unref(formStatus).isSubmitting) ? " disabled" : ""} data-v-c9871fc5>${ssrInterpolate(unref(formStatus).isSubmitting ? unref(sending) : unref(submit))}</button></div></form>`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/CRM/ContactFormModal.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ContactFormModal = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-c9871fc5"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ChatList",
  __ssrInlineRender: true,
  props: {
    groupedChats: {},
    selectedChatId: {},
    searchInput: {},
    showSearch: { type: Boolean },
    layout: {}
  },
  emits: ["update:searchInput", "select-chat", "create-chat", "go-back"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const flattenedGroups = computed(() => {
      const result = {};
      for (const [year, monthData] of Object.entries(props.groupedChats)) {
        for (const [month, chatIds] of Object.entries(monthData)) {
          const monthKey = `${month} ${year}`;
          result[monthKey] = chatIds;
        }
      }
      return result;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["chat-list-container", { "mobile-chat-list": _ctx.layout === "mobile" }]
      }, _attrs))} data-v-7223020d><div class="search-toolbar" data-v-7223020d><a href="/" class="toolbar-button neutral-button" title="На главную" data-v-7223020d>`);
      _push(ssrRenderComponent(unref(Home), { size: 20 }, null, _parent));
      _push(`</a><div class="search-container" data-v-7223020d>`);
      _push(ssrRenderComponent(unref(Search), {
        size: 18,
        class: "search-icon"
      }, null, _parent));
      _push(`<input${ssrRenderAttr("value", _ctx.searchInput)} class="search-input" placeholder="Поиск чатов..." type="text" data-v-7223020d></div><button class="toolbar-button neutral-button" title="Новый чат" data-v-7223020d>`);
      _push(ssrRenderComponent(unref(Plus), { size: 20 }, null, _parent));
      _push(`</button></div><div class="chats-list" data-v-7223020d><!--[-->`);
      ssrRenderList(flattenedGroups.value, (chatIds, month) => {
        _push(`<div class="chat-month-group" data-v-7223020d><div class="month-header" data-v-7223020d>${ssrInterpolate(month)}</div><!--[-->`);
        ssrRenderList(chatIds, (chatId) => {
          _push(`<div class="${ssrRenderClass([{ active: chatId === _ctx.selectedChatId }, "chat-item"])}" data-v-7223020d>`);
          _push(ssrRenderComponent(unref(MessageSquare), {
            size: 18,
            class: "chat-icon"
          }, null, _parent));
          ssrRenderSlot(_ctx.$slots, "chat-title", { chatId }, () => {
            _push(`<span class="chat-name" data-v-7223020d>Чат ${ssrInterpolate(new Date(Number(chatId)).toLocaleString())}</span>`);
          }, _push, _parent);
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]-->`);
      if (Object.keys(flattenedGroups.value).length === 0) {
        _push(`<div class="empty-list-message" data-v-7223020d><p data-v-7223020d>Нет чатов, соответствующих поиску</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/AIChat/ChatList.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ChatList = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-7223020d"]]);
function useChatUi(messagesContainerRef, textareaRef, input, setMode) {
  const isMobile = ref(false);
  if (typeof window !== "undefined") {
    isMobile.value = window.innerWidth < 768;
    window.addEventListener("resize", () => {
      isMobile.value = window.innerWidth < 768;
    });
  }
  const scrollToBottom = async () => {
    await nextTick();
    if (messagesContainerRef.value) {
      const container = messagesContainerRef.value;
      container.scrollTop = container.scrollHeight;
    }
  };
  const setupImageClickHandler = (submitTextFn) => {
    const handleElementClick = (event) => {
      const target = event.target;
      if (target == null ? void 0 : target.classList.contains("chat-interactive-image")) {
        const query = target.getAttribute("data-query");
        if (query) {
          const htmlTarget = target;
          htmlTarget.style.color = "var(--chat-bg-mute)";
          setTimeout(() => {
            if (setMode) {
              setMode("followup");
            }
            submitTextFn(query, "followup");
          }, 300);
        }
      }
      if (target == null ? void 0 : target.classList.contains("interactive-link-text")) {
        const query = target.getAttribute("data-query");
        if (query) {
          const htmlTarget = target;
          htmlTarget.style.color = "var(--chat-bg-mute)";
          setTimeout(() => {
            if (setMode) {
              setMode("followup");
            }
            submitTextFn(query, "followup");
          }, 300);
          event.stopPropagation();
        }
      }
      if ((target == null ? void 0 : target.classList.contains("interactive-blockquote-text")) || (target == null ? void 0 : target.closest(".interactive-blockquote-text"))) {
        const element = target.classList.contains("interactive-blockquote-text") ? target : target.closest(".interactive-blockquote-text");
        const query = element == null ? void 0 : element.getAttribute("data-query");
        if (query && element) {
          const htmlElement = element;
          htmlElement.style.color = "var(--chat-bg-mute)";
          setTimeout(() => {
            if (setMode) {
              setMode("followup");
            }
            submitTextFn(query, "followup");
          }, 300);
        }
      }
    };
    const setupImageClicks = () => {
      var _a;
      (_a = messagesContainerRef.value) == null ? void 0 : _a.addEventListener("click", handleElementClick);
    };
    const cleanupImageClicks = () => {
      var _a;
      (_a = messagesContainerRef.value) == null ? void 0 : _a.removeEventListener("click", handleElementClick);
    };
    return { setupImageClicks, cleanupImageClicks };
  };
  const md2 = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: false
  });
  const defaultRender2 = md2.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
  md2.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrSet("target", "_blank");
    tokens[idx].attrSet("rel", "noopener");
    return defaultRender2(tokens, idx, options, env, self);
  };
  const addInteractiveButtons = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const links = tempDiv.querySelectorAll("a");
    links.forEach((link2) => {
      var _a;
      if (!link2.textContent || link2.textContent.trim().length < 5) return;
      const linkText = link2.textContent.trim();
      const href = link2.getAttribute("href") || "";
      const displayTextMatch = linkText.match(/(.*?)\s*\[.*?\]/);
      const queryText = displayTextMatch ? displayTextMatch[1].trim() : linkText;
      const interactiveText = document.createElement("span");
      interactiveText.className = "interactive-link-text";
      interactiveText.setAttribute("data-query", queryText);
      interactiveText.setAttribute("title", "Learn more: " + queryText);
      interactiveText.textContent = queryText + ":";
      let displayUrl = href.replace(/^https?:\/\//, "").replace(/\?.*$/, "");
      if (displayUrl.length > 30) {
        displayUrl = displayUrl.substring(0, 27) + "...";
      }
      link2.textContent = displayUrl;
      (_a = link2.parentNode) == null ? void 0 : _a.insertBefore(interactiveText, link2);
    });
    const blockquotes = tempDiv.querySelectorAll("blockquote");
    blockquotes.forEach((blockquote) => {
      if (!blockquote.textContent || blockquote.textContent.trim().length < 5) return;
      const text = blockquote.textContent.trim();
      const queryText = text.replace(/^[\p{Emoji}\s]+/u, "").trim();
      const firstParagraph = blockquote.querySelector("p:first-child");
      if (firstParagraph) {
        const originalContent = firstParagraph.innerHTML;
        firstParagraph.innerHTML = "";
        const interactiveText = document.createElement("span");
        interactiveText.className = "interactive-blockquote-text";
        interactiveText.setAttribute("data-query", queryText);
        interactiveText.innerHTML = originalContent;
        firstParagraph.appendChild(interactiveText);
      }
    });
    return tempDiv.innerHTML;
  };
  const renderMarkdown2 = (content) => {
    const renderedHtml = md2.render(content);
    return addInteractiveButtons(renderedHtml);
  };
  return {
    // Скролл
    scrollToBottom,
    // Изображения и интерактивные элементы
    setupImageClickHandler,
    // Markdown
    renderMarkdown: renderMarkdown2,
    // Утилиты
    isMobile
  };
}
const useChatsStore = defineStore("chats", () => {
  const chatIds = ref([]);
  const selectedChatId = ref("");
  const tempChatId = ref("");
  const chatsData = ref({});
  const isClient = typeof window !== "undefined";
  const loadFromStorage = () => {
    if (!isClient) return;
    try {
      const storedIds = localStorage.getItem("chat_ids");
      const storedData = localStorage.getItem("chats_data");
      if (storedIds) {
        chatIds.value = JSON.parse(storedIds);
        if (chatIds.value.length > 0) {
          selectedChatId.value = chatIds.value[0];
        }
      }
      if (storedData) {
        chatsData.value = JSON.parse(storedData);
      }
    } catch (e) {
      console.error("Error loading chats from storage:", e);
      chatIds.value = [];
      chatsData.value = {};
    }
  };
  if (isClient) {
    loadFromStorage();
  }
  if (isClient) {
    watch(
      [chatIds, chatsData],
      ([newIds, newData]) => {
        try {
          localStorage.setItem("chat_ids", JSON.stringify(newIds));
          localStorage.setItem("chats_data", JSON.stringify(newData));
        } catch (e) {
          console.error("Error saving chats to storage:", e);
        }
      },
      { deep: true }
    );
  }
  const createTempChat = () => {
    var _a;
    const chatId = Date.now().toString();
    if (tempChatId.value && ((_a = chatsData.value[tempChatId.value]) == null ? void 0 : _a.messages.length) === 0) {
      selectedChatId.value = tempChatId.value;
      return tempChatId.value;
    }
    tempChatId.value = chatId;
    chatsData.value[chatId] = {
      id: chatId,
      messages: [],
      timestamp: Date.now()
    };
    selectedChatId.value = chatId;
    console.log(`🟢 CLIENT: Создан временный чат: ${chatId}`);
    return chatId;
  };
  const publishTempChat = (chatId) => {
    if (chatId === tempChatId.value && chatsData.value[chatId]) {
      chatIds.value.unshift(chatId);
      console.log(`🟢 CLIENT: Временный чат ${chatId} опубликован и добавлен в список`);
      tempChatId.value = "";
      return true;
    }
    return false;
  };
  const createNewChat = () => {
    return createTempChat();
  };
  const selectChat = (chatId) => {
    var _a;
    if (selectedChatId.value !== chatId) {
      if (tempChatId.value && ((_a = chatsData.value[tempChatId.value]) == null ? void 0 : _a.messages.length) === 0 && !chatIds.value.includes(tempChatId.value)) {
        delete chatsData.value[tempChatId.value];
        if (selectedChatId.value === tempChatId.value) {
          selectedChatId.value = "";
        }
        tempChatId.value = "";
      }
      selectedChatId.value = chatId;
    }
  };
  const removeChat = (chatId) => {
    const index = chatIds.value.indexOf(chatId);
    if (index > -1) {
      chatIds.value.splice(index, 1);
      if (chatId === tempChatId.value) {
        tempChatId.value = "";
      }
      delete chatsData.value[chatId];
      if (selectedChatId.value === chatId) {
        if (chatIds.value.length > 0) {
          selectedChatId.value = chatIds.value[0];
        } else {
          createNewChat();
        }
      }
    }
  };
  const saveMessages = (chatId, messages) => {
    if (!isClient || !chatId) return;
    if (chatsData.value[chatId]) {
      const isFirstMessage = chatsData.value[chatId].messages.length === 0 && messages.length > 0;
      chatsData.value[chatId].messages = messages;
      chatsData.value[chatId].timestamp = Date.now();
      if (isFirstMessage && chatId === tempChatId.value && !chatIds.value.includes(chatId)) {
        const firstUserMessage = messages.find((msg) => msg.role === "user");
        if (firstUserMessage) {
          const content = firstUserMessage.content.substring(0, 30);
          const title = content.length < 30 ? content : content.substring(0, content.lastIndexOf(" ")) + "...";
          chatsData.value[chatId].title = title;
        }
        publishTempChat(chatId);
      }
    }
  };
  const getMessages = (chatId) => {
    var _a;
    return ((_a = chatsData.value[chatId]) == null ? void 0 : _a.messages) || [];
  };
  const getChatTitle = (chatId) => {
    var _a;
    return (_a = chatsData.value[chatId]) == null ? void 0 : _a.title;
  };
  const setChatTitle = (chatId, title) => {
    if (!isClient || !chatId) return;
    if (chatsData.value[chatId]) {
      chatsData.value[chatId].title = title || void 0;
      if (chatId === tempChatId.value && title && !chatIds.value.includes(chatId)) {
        publishTempChat(chatId);
      }
    }
  };
  const isTempChat = (chatId) => {
    return chatId === tempChatId.value;
  };
  const ensureChat = () => {
    if (!selectedChatId.value) {
      if (chatIds.value.length > 0) {
        selectedChatId.value = chatIds.value[0];
      } else {
        createTempChat();
      }
    }
  };
  return {
    chatIds,
    selectedChatId,
    tempChatId,
    createNewChat,
    selectChat,
    removeChat,
    saveMessages,
    getMessages,
    getChatTitle,
    setChatTitle,
    ensureChat,
    isTempChat,
    publishTempChat
  };
});
const IMAGE_MARKER_REGEX = /<!-- NEEDS_IMAGE:([^>]+) -->/g;
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
class ImageLoader {
  /**
   * @param messageUpdater Функция для обновления содержимого сообщения
   */
  constructor(messageUpdater) {
    __publicField(this, "imagePromises", /* @__PURE__ */ new Map());
    __publicField(this, "imagePlaceholders", /* @__PURE__ */ new Map());
    __publicField(this, "messageUpdater");
    __publicField(this, "pendingQueries", /* @__PURE__ */ new Set());
    // Кеш для хранения уже использованных URL изображений
    __publicField(this, "usedImageUrls", /* @__PURE__ */ new Set());
    this.messageUpdater = messageUpdater;
  }
  /**
   * Сбрасывает состояние загрузчика
   */
  reset() {
    this.imagePromises.clear();
    this.imagePlaceholders.clear();
    this.pendingQueries.clear();
  }
  /**
   * Нормализует URL изображения для сравнения
   * Убирает параметры запроса и фрагменты
   */
  normalizeImageUrl(url) {
    try {
      const urlObj = new URL(url);
      return `${urlObj.protocol}//${urlObj.hostname}${urlObj.pathname}`;
    } catch (e) {
      return url;
    }
  }
  /**
   * Обрабатывает маркеры изображений в содержимом сообщения
   * @param content Содержимое сообщения
   * @param messageIndex Индекс сообщения в массиве
   * @param isComplete Флаг завершения ответа
   * @returns Обновленное содержимое сообщения
   */
  processImageMarkers(content, messageIndex, isComplete = false) {
    let modifiedContent = content;
    let match;
    IMAGE_MARKER_REGEX.lastIndex = 0;
    while ((match = IMAGE_MARKER_REGEX.exec(content)) !== null) {
      const fullMatch = match[0];
      const query = match[1].trim();
      if (this.pendingQueries.has(query)) {
        continue;
      }
      this.pendingQueries.add(query);
      const placeholder = fullMatch;
      this.imagePlaceholders.set(query, placeholder);
      if (!this.imagePromises.has(query)) {
        this.loadImage(query, messageIndex);
      }
    }
    return modifiedContent;
  }
  /**
   * Асинхронно загружает изображение и обновляет сообщение
   * @param query Поисковый запрос для изображения
   * @param messageIndex Индекс сообщения для обновления
   */
  loadImage(query, messageIndex) {
    const imagePromise = fetch(`/api/search-images?q=${encodeURIComponent(query)}&limit=5`).then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка поиска изображения: ${response.status} ${response.statusText}`);
      }
      return response.json();
    }).then((data) => {
      if (data.images && data.images.length > 0) {
        const unusedImage = data.images.find((image2) => {
          const normalizedUrl2 = this.normalizeImageUrl(image2.url);
          return !this.usedImageUrls.has(normalizedUrl2);
        });
        const image = unusedImage || data.images[0];
        const imageUrl = image.url;
        const title = image.title || query;
        const normalizedUrl = this.normalizeImageUrl(imageUrl);
        this.usedImageUrls.add(normalizedUrl);
        return `<figure class="image-container">
            <img class="chat-interactive-image" src="${imageUrl}" data-query="${query}" data-title="${title}" style="max-width:100%">
            <figcaption style="font-size:0.8em;color:#666;margin-top:4px"><a href="${imageUrl}" target="_blank">${title}</a></figcaption>
          </figure>`;
      } else {
        return `<div class="image-error">[Изображение для "${query}" не найдено]</div>`;
      }
    }).catch((error) => {
      console.error(`Ошибка загрузки изображения для "${query}":`, error);
      return `<div class="image-error">[Ошибка загрузки изображения: ${error.message}]</div>`;
    });
    this.imagePromises.set(query, imagePromise);
  }
  /**
   * Обновляет содержимое сообщения после загрузки всех изображений
   * @param message Сообщение для обновления
   * @param messageIndex Индекс сообщения
   * @returns Промис с обновленным сообщением
   */
  async finalizeMessage(message, messageIndex) {
    if (message.role !== "assistant") return message;
    const pendingImages = Array.from(this.pendingQueries).map((query) => this.imagePromises.get(query) || Promise.resolve(""));
    await Promise.all(pendingImages);
    let finalContent = message.content;
    for (const [query, imagePromise] of this.imagePromises.entries()) {
      const placeholder = this.imagePlaceholders.get(query);
      const imageHtml = await imagePromise;
      if (placeholder && imageHtml) {
        finalContent = finalContent.replace(new RegExp(escapeRegExp(placeholder), "g"), imageHtml);
      }
    }
    return {
      ...message,
      content: finalContent
    };
  }
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ChatFooter",
  __ssrInlineRender: true,
  props: {
    inputValue: {},
    status: {},
    errorMessage: {},
    debugMode: { type: Boolean },
    layout: {},
    currentMode: {}
  },
  emits: ["update:inputValue", "send", "stop", "toggle-debug"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    ref(null);
    const isDevelopment = ref(true);
    const hasInputContent = computed(() => {
      return props.inputValue.trim().length > 0;
    });
    const isMobile = ref(false);
    onMounted(() => {
      updateIsMobile();
      window.addEventListener("resize", updateIsMobile);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", updateIsMobile);
    });
    function updateIsMobile() {
      isMobile.value = window.innerWidth < 768;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chat-footer" }, _attrs))} data-v-074a8e14><form class="input-form" data-v-074a8e14>`);
      if (isDevelopment.value) {
        _push(`<button type="button" class="${ssrRenderClass([{ "debug-active": _ctx.debugMode }, "debug-icon-button"])}"${ssrRenderAttr("title", _ctx.debugMode ? "Отключить режим отладки" : "Включить режим отладки")} data-v-074a8e14>`);
        _push(ssrRenderComponent(unref(Bug), { size: 18 }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<textarea placeholder="Message (⇧↵ for new line)"${ssrIncludeBooleanAttr(_ctx.status === "streaming") ? " disabled" : ""} class="${ssrRenderClass([{ "has-content": hasInputContent.value }, "message-input"])}" rows="1" data-v-074a8e14>${ssrInterpolate(_ctx.inputValue)}</textarea><div class="button-container" data-v-074a8e14><button type="button" class="${ssrRenderClass([{ "send-button": _ctx.status !== "streaming", "stop-button": _ctx.status === "streaming" }, "action-button"])}"${ssrIncludeBooleanAttr(_ctx.status !== "streaming" && !_ctx.inputValue.trim()) ? " disabled" : ""} data-v-074a8e14>`);
      if (_ctx.status !== "streaming") {
        _push(ssrRenderComponent(unref(ArrowUp), { size: 20 }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Square), { size: 20 }, null, _parent));
      }
      _push(`</button></div></form>`);
      if (_ctx.errorMessage) {
        _push(`<div class="error-message" data-v-074a8e14>${ssrInterpolate(_ctx.errorMessage)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/AIChat/ChatFooter.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ChatFooter = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-074a8e14"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ChatThread",
  __ssrInlineRender: true,
  props: {
    chatId: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const messagesContainerRef = ref(null);
    const showRawMessages = ref(false);
    computed(() => true);
    const chatsStore = useChatsStore();
    const currentMode = ref("default");
    const chatSessionId = ref(props.chatId);
    const imageLoader = new ImageLoader((messageIndex, placeholder, imageHtml) => {
      if (messages.value[messageIndex]) {
        const updatedMessages = [...messages.value];
        updatedMessages[messageIndex] = {
          ...updatedMessages[messageIndex],
          content: updatedMessages[messageIndex].content.replace(placeholder, imageHtml)
        };
        setMessages(updatedMessages);
      }
    });
    const { messages, input, handleSubmit, status, error, stop, setMessages } = useChat({
      api: "/api/chat",
      id: chatSessionId.value,
      initialMessages: chatsStore.getMessages(props.chatId),
      body: {
        stream: true,
        getBody: () => ({
          mode: currentMode.value
        })
      },
      onResponse(response) {
      },
      onToolCall({ toolCall }) {
      },
      experimental_prepareRequestBody(options) {
      },
      onFinish: async () => {
        if (chatSessionId.value !== props.chatId) return;
        currentMode.value = "default";
        if (messages.value.length > 0) {
          const lastIndex = messages.value.length - 1;
          const lastMessage = messages.value[lastIndex];
          if (lastMessage.role === "assistant") {
            const processedContent = imageLoader.processImageMarkers(
              lastMessage.content,
              lastIndex,
              true
              // ответ завершен
            );
            const finalMessage = await imageLoader.finalizeMessage({ ...lastMessage, content: processedContent }, lastIndex);
            if (finalMessage !== lastMessage) {
              const updatedMessages = [...messages.value];
              updatedMessages[lastIndex] = finalMessage;
              setMessages(updatedMessages);
            }
          }
        }
        scrollToBottom();
      },
      onError: () => {
        currentMode.value = "default";
        imageLoader.reset();
      }
    });
    watch(
      messages,
      (newMessages, oldMessages) => {
        var _a;
        if (status.value === "streaming" && newMessages.length > 0) {
          const lastIndex = newMessages.length - 1;
          const lastMessage = newMessages[lastIndex];
          if (lastMessage.role === "assistant") {
            const oldContent = ((_a = oldMessages[lastIndex]) == null ? void 0 : _a.content) || "";
            if (oldContent !== lastMessage.content) {
              const processedContent = imageLoader.processImageMarkers(
                lastMessage.content,
                lastIndex,
                false
                // ответ еще не завершен
              );
              if (processedContent !== lastMessage.content) {
                const updatedMessages = [...newMessages];
                updatedMessages[lastIndex] = {
                  ...lastMessage,
                  content: processedContent
                };
                setTimeout(() => {
                  setMessages(updatedMessages);
                }, 0);
              }
            }
          }
        }
      },
      { deep: true }
    );
    const { renderMarkdown: renderMarkdown2, scrollToBottom, setupImageClickHandler } = useChatUi(
      messagesContainerRef,
      void 0,
      // передаем undefined вместо null для типизации
      input,
      // Добавляем функцию для изменения режима
      (mode) => {
        currentMode.value = mode;
      }
    );
    const handleSubmitWithScroll = async (event) => {
      if (event) {
        event.preventDefault();
      }
      if (!input.value.trim() || status.value === "streaming") {
        return;
      }
      const submitEvent = event || new Event("submit");
      await handleSubmit(submitEvent);
      scrollToBottom();
    };
    const submitTextDirectly = (text, mode = "default") => {
      if (text.trim() && status.value !== "streaming") {
        currentMode.value = mode;
        input.value = text;
        handleSubmitWithScroll();
      }
    };
    const insertText = (text) => {
      input.value += (input.value && !input.value.endsWith(" ") ? " " : "") + text + " ";
    };
    const toggleRawMessages = () => {
      showRawMessages.value = !showRawMessages.value;
    };
    const { setupImageClicks, cleanupImageClicks } = setupImageClickHandler(
      // Передаем функцию submitTextDirectly вместе с режимом followup
      (text) => submitTextDirectly(text, "followup")
    );
    watchEffect(() => {
      if (props.chatId !== chatSessionId.value) {
        imageLoader.reset();
        chatSessionId.value = props.chatId;
        const chatMessages = chatsStore.getMessages(props.chatId);
        setMessages(chatMessages);
      }
    });
    onMounted(() => {
      setupImageClicks();
      scrollToBottom();
    });
    onUnmounted(() => {
      cleanupImageClicks();
    });
    watch(
      messages,
      (newMessages) => {
        if (newMessages.length > 0 && props.chatId === chatSessionId.value) {
          chatsStore.saveMessages(props.chatId, newMessages);
          scrollToBottom();
        }
      },
      { deep: true }
    );
    __expose({ insertText, submitTextDirectly });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chat-thread" }, _attrs))} data-v-4ce29857><div class="messages-container" data-v-4ce29857><!--[-->`);
      ssrRenderList(unref(messages), (msg) => {
        _push(`<div class="${ssrRenderClass([msg.role, "message"])}" data-v-4ce29857>`);
        if (showRawMessages.value) {
          _push(`<div class="message-content raw-message" data-v-4ce29857><div class="raw-message-header" data-v-4ce29857><span class="raw-role" data-v-4ce29857>${ssrInterpolate(msg.role.toUpperCase())}</span><span class="raw-id" data-v-4ce29857>ID: ${ssrInterpolate(msg.id)}</span></div><pre class="raw-content" data-v-4ce29857>${ssrInterpolate(msg.content)}</pre></div>`);
        } else {
          _push(`<div class="message-content" data-v-4ce29857>${unref(renderMarkdown2)(msg.content) ?? ""}</div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(ChatFooter, {
        inputValue: unref(input),
        "onUpdate:inputValue": ($event) => isRef(input) ? input.value = $event : null,
        status: unref(status),
        errorMessage: (_a = unref(error)) == null ? void 0 : _a.message,
        debugMode: showRawMessages.value,
        currentMode: currentMode.value,
        onSend: handleSubmitWithScroll,
        onStop: unref(stop),
        onToggleDebug: toggleRawMessages
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/AIChat/ChatThread.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ChatThread = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4ce29857"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ChatHeader",
  __ssrInlineRender: true,
  props: {
    title: {},
    isEditing: { type: Boolean },
    editableTitle: {},
    showBackButton: { type: Boolean },
    layout: {},
    isDraft: { type: Boolean }
  },
  emits: ["start-editing", "save-title", "update:editableTitle", "go-back"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const titleInputRef = ref(null);
    const vFocus = {
      mounted: (el) => el.focus()
    };
    onMounted(() => {
      if (props.isEditing && titleInputRef.value) {
        titleInputRef.value.focus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["chat-header", { "mobile-header": _ctx.layout === "mobile" }]
      }, _attrs))} data-v-2e0a8736>`);
      if (_ctx.showBackButton) {
        _push(`<button class="back-button" data-v-2e0a8736>`);
        _push(ssrRenderComponent(unref(ArrowLeft), { size: 20 }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="chat-title-container" data-v-2e0a8736>`);
      if (!_ctx.isEditing) {
        _push(`<div class="${ssrRenderClass([{ "draft-title": _ctx.isDraft }, "chat-title editable-title"])}"${ssrRenderAttr("title", _ctx.title)} data-v-2e0a8736>${ssrInterpolate(_ctx.title)} `);
        if (_ctx.isDraft) {
          _push(`<span class="draft-indicator" data-v-2e0a8736>🆕</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<input${ssrRenderAttrs(mergeProps({
          ref_key: "titleInputRef",
          ref: titleInputRef,
          value: _ctx.editableTitle,
          class: "title-input",
          placeholder: "Введите название чата..."
        }, ssrGetDirectiveProps(_ctx, vFocus)))} data-v-2e0a8736>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/AIChat/ChatHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ChatHeader = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-2e0a8736"]]);
function useChatTitle() {
  const chatsStore = useChatsStore();
  const isEditingTitle = ref(false);
  const editableChatTitle = ref("");
  const startEditingTitle = () => {
    if (!chatsStore.selectedChatId) return;
    editableChatTitle.value = chatsStore.getChatTitle(chatsStore.selectedChatId) || "";
    isEditingTitle.value = true;
  };
  const saveTitle = () => {
    if (!chatsStore.selectedChatId) return;
    if (editableChatTitle.value.trim()) {
      chatsStore.setChatTitle(chatsStore.selectedChatId, editableChatTitle.value.trim());
    } else {
      const currentTitle = chatsStore.getChatTitle(chatsStore.selectedChatId) || "";
      editableChatTitle.value = currentTitle;
    }
    isEditingTitle.value = false;
  };
  const cancelTitleEditing = () => {
    isEditingTitle.value = false;
  };
  return {
    // Состояние
    isEditingTitle,
    editableChatTitle,
    // Методы
    startEditingTitle,
    saveTitle,
    cancelTitleEditing
  };
}
function useQuickPrompts(chatInputRef, prompts, mainInputRef, options = {}) {
  const quickPrompts = ref(Array.isArray(prompts) ? prompts : prompts.value);
  const insertQuickPrompt = (text) => {
    if (chatInputRef.value) {
      chatInputRef.value.insertText(text);
    }
  };
  const addTagToMainInput = (text) => {
    return;
  };
  const submitQuickPrompt = (text) => {
    if (chatInputRef.value) {
      chatInputRef.value.submitTextDirectly(text);
    }
  };
  const handleQuickPrompt = (text) => {
    if (options.isMobileMode && mainInputRef) ;
    else {
      insertQuickPrompt(text);
    }
  };
  return {
    quickPrompts,
    insertQuickPrompt,
    addTagToMainInput,
    submitQuickPrompt,
    handleQuickPrompt
  };
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ChatContainer",
  __ssrInlineRender: true,
  props: {
    chatId: {},
    chatTitle: {},
    layout: {},
    showHeader: { type: Boolean },
    showPromptsWhenEmpty: { type: Boolean },
    isDraft: { type: Boolean },
    prompts: {}
  },
  emits: ["go-back", "create-chat", "update-title", "use-prompt"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const chatsStore = useChatsStore();
    const hasMessages = computed(() => {
      if (!props.chatId) return false;
      const messages = chatsStore.getMessages(props.chatId);
      return messages && messages.length > 0;
    });
    const chatThreadRef = ref(null);
    ref(null);
    const { isEditingTitle, editableChatTitle, startEditingTitle, saveTitle } = useChatTitle();
    const { quickPrompts } = useQuickPrompts(chatThreadRef, props.prompts || []);
    const handleSaveTitle = () => {
      saveTitle();
      emit("update-title", props.chatId, editableChatTitle.value);
    };
    __expose({
      insertText: (text) => {
        if (chatThreadRef.value) {
          chatThreadRef.value.insertText(text);
        }
      },
      submitTextDirectly: (text) => {
        if (chatThreadRef.value) {
          chatThreadRef.value.submitTextDirectly(text);
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "chat-container" }, _attrs))} data-v-8bbd2420>`);
      if (_ctx.showHeader && _ctx.chatId) {
        _push(ssrRenderComponent(ChatHeader, {
          title: _ctx.chatTitle,
          "is-editing": unref(isEditingTitle),
          "editable-title": unref(editableChatTitle),
          "show-back-button": _ctx.layout === "mobile",
          layout: _ctx.layout,
          "is-draft": _ctx.isDraft,
          onStartEditing: unref(startEditingTitle),
          onSaveTitle: handleSaveTitle,
          "onUpdate:editableTitle": ($event) => editableChatTitle.value = $event,
          onGoBack: ($event) => emit("go-back")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.chatId) {
        _push(`<div class="chat-thread-container" data-v-8bbd2420>`);
        _push(ssrRenderComponent(ChatThread, {
          ref_key: "chatThreadRef",
          ref: chatThreadRef,
          "chat-id": _ctx.chatId,
          key: _ctx.chatId
        }, null, _parent));
        if (!hasMessages.value && _ctx.showPromptsWhenEmpty) {
          _push(`<div class="empty-prompts-overlay" data-v-8bbd2420><div class="prompts-container" data-v-8bbd2420><div class="prompts-grid" data-v-8bbd2420><!--[-->`);
          ssrRenderList(unref(quickPrompts), (prompt) => {
            _push(`<button class="prompt-button" data-v-8bbd2420>${ssrInterpolate(prompt.text)}</button>`);
          });
          _push(`<!--]--></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="no-chat-selected" data-v-8bbd2420><div class="placeholder-content" data-v-8bbd2420>`);
        _push(ssrRenderComponent(unref(Home), {
          size: 48,
          class: "home-icon"
        }, null, _parent));
        _push(`<h2 data-v-8bbd2420>Добро пожаловать в Golden Fish!</h2><p class="welcome-text" data-v-8bbd2420>Выберите чат или создайте новый, чтобы начать общение.</p><button class="create-chat-btn" data-v-8bbd2420>Создать новый чат</button></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/AIChat/ChatContainer.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ChatContainer = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-8bbd2420"]]);
function useChatManagement(options = {}) {
  const chatsStore = useChatsStore();
  const searchInput = ref("");
  const hasSelectedChat = computed(
    () => Boolean(chatsStore.selectedChatId) && (chatsStore.chatIds.includes(chatsStore.selectedChatId) || chatsStore.isTempChat(chatsStore.selectedChatId))
  );
  const filteredChatIds = computed(() => {
    if (!searchInput.value) return chatsStore.chatIds;
    const searchTerm = searchInput.value.toLowerCase();
    return chatsStore.chatIds.filter((chatId) => {
      const date = new Date(Number(chatId));
      const title = chatsStore.getChatTitle(chatId) || "";
      return date.toLocaleString().toLowerCase().includes(searchTerm) || title.toLowerCase().includes(searchTerm);
    });
  });
  const groupedChats = computed(() => {
    const groups = {};
    filteredChatIds.value.forEach((id) => {
      if (chatsStore.isTempChat(id)) return;
      const date = new Date(Number(id));
      const year = date.getFullYear().toString();
      const month = date.toLocaleString("default", { month: "long" });
      if (!groups[year]) {
        groups[year] = {};
      }
      if (!groups[year][month]) {
        groups[year][month] = [];
      }
      groups[year][month].push(id);
    });
    return groups;
  });
  const createNewChat = () => {
    const chatId = chatsStore.createNewChat();
    return chatId;
  };
  const selectChat = (chatId) => {
    chatsStore.selectChat(chatId);
    if (options.setCurrentView) {
      options.setCurrentView("chat");
    }
  };
  const removeChat = (chatId) => {
    chatsStore.removeChat(chatId);
  };
  onMounted(() => {
    chatsStore.ensureChat();
  });
  return {
    // Состояние
    searchInput,
    filteredChatIds,
    groupedChats,
    hasSelectedChat,
    // Методы
    createNewChat,
    selectChat,
    removeChat,
    // Доступ к хранилищу
    chatsStore
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MobileChatLayout",
  __ssrInlineRender: true,
  props: {
    prompts: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const currentView = ref("chat");
    const setCurrentView = (view) => {
      currentView.value = view;
    };
    const { searchInput, groupedChats, hasSelectedChat, createNewChat, selectChat, chatsStore } = useChatManagement({ setCurrentView });
    const isTempChat = computed(() => {
      return chatsStore.isTempChat(chatsStore.selectedChatId);
    });
    const chatTitle = computed(() => {
      const chatId = chatsStore.selectedChatId;
      if (!chatId) return "";
      if (isTempChat.value) {
        return new Date(Number(chatId)).toLocaleString();
      }
      return chatsStore.getChatTitle(chatId) || "";
    });
    const chatContainerRef = ref(null);
    const { quickPrompts } = useQuickPrompts(chatContainerRef, props.prompts);
    const handleUsePrompt = (text) => {
      if (!hasSelectedChat.value) {
        createNewChat();
      }
      setTimeout(() => {
        if (chatContainerRef.value) {
          chatContainerRef.value.submitTextDirectly(text);
        }
      }, 100);
    };
    const handleUpdateTitle = (chatId, title) => {
      chatsStore.setChatTitle(chatId, title);
    };
    const handleCreateChat = () => {
      createNewChat();
      setCurrentView("chat");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile-layout" }, _attrs))} data-v-54db9d82>`);
      if (currentView.value === "chats") {
        _push(`<div class="layout-view chats-view" data-v-54db9d82>`);
        _push(ssrRenderComponent(ChatList, {
          "grouped-chats": unref(groupedChats),
          "selected-chat-id": unref(chatsStore).selectedChatId,
          "search-input": unref(searchInput),
          "show-search": true,
          layout: "mobile",
          "onUpdate:searchInput": ($event) => searchInput.value = $event,
          onSelectChat: unref(selectChat),
          onCreateChat: handleCreateChat,
          onGoBack: ($event) => setCurrentView("chat")
        }, {
          "chat-title": withCtx(({ chatId }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="chat-name" data-v-54db9d82${_scopeId}>${ssrInterpolate(unref(chatsStore).getChatTitle(chatId))}</span>`);
            } else {
              return [
                createVNode("span", { class: "chat-name" }, toDisplayString(unref(chatsStore).getChatTitle(chatId)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (currentView.value === "chat") {
        _push(`<div class="layout-view chat-view" data-v-54db9d82>`);
        _push(ssrRenderComponent(ChatContainer, {
          ref_key: "chatContainerRef",
          ref: chatContainerRef,
          "chat-id": unref(chatsStore).selectedChatId,
          "chat-title": chatTitle.value,
          layout: "mobile",
          "show-header": true,
          "show-prompts-when-empty": true,
          "is-draft": isTempChat.value,
          prompts: unref(quickPrompts),
          onGoBack: ($event) => setCurrentView("chats"),
          onCreateChat: handleCreateChat,
          onUpdateTitle: handleUpdateTitle,
          onUsePrompt: handleUsePrompt
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/AIChat/MobileChatLayout.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MobileChatLayout = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-54db9d82"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DesktopChatLayout",
  __ssrInlineRender: true,
  props: {
    prompts: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const { searchInput, groupedChats, hasSelectedChat, createNewChat, selectChat, chatsStore } = useChatManagement();
    const isTempChat = computed(() => {
      return chatsStore.isTempChat(chatsStore.selectedChatId);
    });
    const chatTitle = computed(() => {
      const chatId = chatsStore.selectedChatId;
      if (!chatId) return "";
      if (isTempChat.value) {
        return new Date(Number(chatId)).toLocaleString();
      }
      return chatsStore.getChatTitle(chatId) || "";
    });
    const chatContainerRef = ref(null);
    const { quickPrompts } = useQuickPrompts(chatContainerRef, props.prompts);
    const handleUsePromptFromEmpty = (text) => {
      if (!hasSelectedChat.value) {
        createNewChat();
      }
      setTimeout(() => {
        if (chatContainerRef.value) {
          chatContainerRef.value.submitTextDirectly(text);
        }
      }, 100);
    };
    const handleUpdateTitle = (chatId, title) => {
      chatsStore.setChatTitle(chatId, title);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "desktop-chat-layout" }, _attrs))} data-v-dd719570>`);
      _push(ssrRenderComponent(ChatList, {
        "grouped-chats": unref(groupedChats),
        "selected-chat-id": unref(chatsStore).selectedChatId,
        "search-input": unref(searchInput),
        "show-search": true,
        layout: "desktop",
        "onUpdate:searchInput": ($event) => searchInput.value = $event,
        onSelectChat: unref(selectChat),
        onCreateChat: unref(createNewChat)
      }, {
        "chat-title": withCtx(({ chatId }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="chat-name" data-v-dd719570${_scopeId}>${ssrInterpolate(unref(chatsStore).getChatTitle(chatId))}</span>`);
          } else {
            return [
              createVNode("span", { class: "chat-name" }, toDisplayString(unref(chatsStore).getChatTitle(chatId)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ChatContainer, {
        ref_key: "chatContainerRef",
        ref: chatContainerRef,
        "chat-id": unref(chatsStore).selectedChatId,
        "chat-title": chatTitle.value,
        layout: "desktop",
        "show-header": true,
        "show-prompts-when-empty": true,
        "is-draft": isTempChat.value,
        prompts: unref(quickPrompts),
        onCreateChat: unref(createNewChat),
        onUpdateTitle: handleUpdateTitle,
        onUsePrompt: handleUsePromptFromEmpty
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/AIChat/DesktopChatLayout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const DesktopChatLayout = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dd719570"]]);
function useChatLayout() {
  const isDesktop = ref(false);
  const currentView = ref("chat");
  const updateLayoutType = () => {
    isDesktop.value = window.innerWidth >= 768;
  };
  const setCurrentView = (view) => {
    currentView.value = view;
  };
  onMounted(() => {
    updateLayoutType();
    window.addEventListener("resize", updateLayoutType);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", updateLayoutType);
  });
  return {
    isDesktop,
    currentView,
    setCurrentView
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AIChat",
  __ssrInlineRender: true,
  props: {
    prompts: { default: () => [] }
  },
  setup(__props) {
    const { isDesktop } = useChatLayout();
    const chatsStore = useChatsStore();
    onMounted(() => {
      chatsStore.ensureChat();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ai-chat-container" }, _attrs))} data-v-2da858fc>`);
      if (unref(isDesktop)) {
        _push(ssrRenderComponent(DesktopChatLayout, { prompts: _ctx.prompts }, null, _parent));
      } else {
        _push(ssrRenderComponent(MobileChatLayout, { prompts: _ctx.prompts }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/AIChat/AIChat.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AIChat = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2da858fc"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FeatureBlock",
  __ssrInlineRender: true,
  props: {
    card: {}
  },
  setup(__props) {
    const props = __props;
    const { isDark } = useData$1();
    useLocalizedPath();
    const mediaUrl = computed(() => {
      if (!props.card.src) return null;
      if (isDark.value && props.card.src.dark) {
        return props.card.src.dark;
      }
      return props.card.src.light;
    });
    const altText = computed(() => {
      var _a;
      return ((_a = props.card.src) == null ? void 0 : _a.alt) || props.card.title || "";
    });
    const mediaWidth = computed(() => {
      var _a;
      return ((_a = props.card.src) == null ? void 0 : _a.width) || "100%";
    });
    const isVideo = computed(() => {
      var _a;
      return (_a = mediaUrl.value) == null ? void 0 : _a.toLowerCase().match(/\.(mp4|webm|ogg)$/);
    });
    const mediaClass = computed(() => ({
      clickable: !!props.card.link
    }));
    const renderedDescription = computed(() => {
      if (!props.card.details) return "";
      return renderMarkdown(props.card.details);
    });
    const renderedTitle = computed(() => {
      if (!props.card.title) return "";
      return renderMarkdown(props.card.title);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["usp-wrapper", { inverted: _ctx.card.inversion }]
      }, _attrs))} data-v-a10f7485><div class="content-container" data-v-a10f7485>`);
      if (_ctx.card.title) {
        _push(`<h3 class="usp-title" data-v-a10f7485>${renderedTitle.value ?? ""}</h3>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.card.details) {
        _push(`<div class="usp-description" data-v-a10f7485>${renderedDescription.value ?? ""}</div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div>`);
      if (mediaUrl.value) {
        _push(`<div class="${ssrRenderClass([mediaClass.value, "media-container"])}" data-v-a10f7485>`);
        if (isVideo.value) {
          _push(`<video autoplay muted playsinline loop class="media-content" style="${ssrRenderStyle({ width: mediaWidth.value })}" data-v-a10f7485><source${ssrRenderAttr("src", mediaUrl.value)}${ssrRenderAttr("type", `video/${mediaUrl.value.split(".").pop()}`)} data-v-a10f7485></video>`);
        } else {
          _push(`<img${ssrRenderAttr("src", mediaUrl.value)}${ssrRenderAttr("alt", altText.value)} class="media-content" style="${ssrRenderStyle({ width: mediaWidth.value })}" data-v-a10f7485>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/FeatureBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FeatureBlock = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a10f7485"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NavButton",
  __ssrInlineRender: true,
  props: {
    text: {},
    buttonClass: { default: "" },
    to: {}
  },
  setup(__props) {
    const props = __props;
    useLocalizedPath();
    const computedClass = computed(() => {
      const baseClass = "nav-button";
      if (!props.buttonClass) {
        return `${baseClass} brand`;
      }
      return `${baseClass} ${props.buttonClass}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: computedClass.value }, _attrs))} data-v-712b9da2>${ssrInterpolate(_ctx.text)}</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/NavButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NavButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-712b9da2"]]);
const components = {
  LogoGrid,
  Button: _sfc_main$e,
  FeatureCards,
  BenefitsList,
  AIChat,
  ContactFormModal,
  FeatureBlock,
  NavButton
};
const PATH_CLEANUP_REGEX = /^(?:en|ar|hi|ur|bn|ml|ta|te|fa|zh|fr|ru|uk|tr|ko|ja|tl|id|vi|pt|es)\/|(\.[^/.]+)$/g;
const RawTheme = {
  extends: theme,
  // Layout,
  Layout() {
    const { page, lang } = useData$1();
    const router = useRouter();
    watchEffect(() => {
      watchEffect(() => {
        var _a, _b;
        if (inBrowser) {
          const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
          if (isBot) return;
          const browserLang = navigator.language.slice(0, 2);
          const currentLang = lang.value.slice(0, 2);
          const supportedLanguages = ["ar", "bn", "es", "fa", "fr", "hi", "id", "ja", "ko", "ml", "pt", "ru", "ta", "te", "tr", "uk", "ur", "vi", "zh"];
          const isSupported = supportedLanguages.includes(browserLang);
          const cookieLang = (_b = (_a = document.cookie.match(/nf_lang=([^;]+)/)) == null ? void 0 : _a[1]) == null ? void 0 : _b.slice(0, 2);
          const needsRedirect = !cookieLang && isSupported && currentLang !== browserLang && browserLang !== "en";
          if (needsRedirect) {
            const path = page.value.relativePath.replace(PATH_CLEANUP_REGEX, "");
            document.cookie = `nf_lang=${browserLang}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`;
            router.go(`/${browserLang}/${path}`);
          }
          initUtmTracking();
        }
      });
    });
    return h(theme.Layout, null, {
      // "aside-ads-before": () => h(AsideSponsors),
      // "home-features-after": () => h(HomeSponsors),
      // "nav-bar-content-after": () => h(TypeForm, { typeformId: "01J8Q752166MZH0T93ZYYJ3ZMD" }),
    });
  },
  enhanceApp({ app, router, siteData: siteData2 }) {
    app.use(createPinia());
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
    if (inBrowser) {
      setTimeout(() => {
        initUtmTracking();
      }, 0);
      window.addEventListener("popstate", () => {
        initUtmTracking();
      });
      router.onAfterRouteChange = () => {
        initUtmTracking();
      };
    }
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        const ignoredNodes = [".vp-copy-ignore", ".diff.remove"];
        const clone = sibling.cloneNode(true);
        clone.querySelectorAll(ignoredNodes.join(",")).forEach((node) => node.remove());
        let text = clone.textContent || "";
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let isFirstUpdate = true;
  let managedHeadElements = [];
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      newTags.forEach((tag) => {
        const headEl = createHeadElement(tag);
        for (const el of document.head.children) {
          if (el.isEqualNode(headEl)) {
            managedHeadElements.push(el);
            return;
          }
        }
      });
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl == null ? void 0 : newEl.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl == null ? void 0 : oldEl.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData2, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description = pageDescription || siteData2.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description) {
        metaDescriptionElement.setAttribute("content", description);
      }
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && attrs.async == null) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site, lang, dir } = useData$1();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value;
        document.documentElement.dir = dir.value;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  globalThis.__VITEPRESS__ = true;
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      if (false) ;
      else {
        pageModule = import(
          /*@vite-ignore*/
          pageFilePath
        );
      }
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "", vpSocialIcons: /* @__PURE__ */ new Set() };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  render
};
