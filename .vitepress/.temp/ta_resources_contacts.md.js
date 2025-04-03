import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"எங்களை தொடர்பு கொள்ளுங்கள்","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"ta/resources/contacts.md","filePath":"i18n/ta/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "ta/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="எங்களை-தொடர்பு-கொள்ளுங்கள்" tabindex="-1">எங்களை தொடர்பு கொள்ளுங்கள் <a class="header-anchor" href="#எங்களை-தொடர்பு-கொள்ளுங்கள்" aria-label="Permalink to &quot;எங்களை தொடர்பு கொள்ளுங்கள்&quot;">​</a></h1><p>UAE-இல் உங்கள் வணிகத்தை நிறுவ அல்லது வளர்க்க விரும்புகிறீர்களா? Golden Fish Corporate Services Provider LLC-உடன் தொடர்பு கொள்ளுங்கள் - நிறுவன உருவாக்கம், PRO சேவைகள் மற்றும் விசா உதவிக்கான உங்களின் பதிவு செய்யப்பட்ட முகவர்.</p><p><strong>உரிம விவரங்கள்:</strong></p><ul><li>உரிம எண்: 1414192</li><li>பதிவு எண்: 2411728</li></ul><p><strong>அலுவலக இருப்பிடம்:</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> Dubai, UAE</p><p><strong>தொடர்பு கொள்ள:</strong></p><ul><li>மின்னஞ்சல்: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>தொலைபேசி: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">எங்களை ஏன் தேர்வு செய்ய வேண்டும்?</p><p>அறிவார்ந்த நிபுணர்கள் குழு மற்றும் தனிப்பட்ட சேவைகளுக்கான அர்ப்பணிப்புடன், வாடிக்கையாளர்களுக்கு சுமூகமான மற்றும் திறமையான அனுபவத்தை உறுதி செய்கிறோம், இதன் மூலம் அவர்கள் மிக முக்கியமானதில் கவனம் செலுத்த முடிகிறது - UAE-இல் தங்கள் வணிகத்தை வளர்ப்பது.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "தொடர்பு கொள்ளுங்கள்",
    buttonText: "எங்களுக்கு செய்தி அனுப்புங்கள்",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "தேவையான ஆதரவு நிலை: *",
    categoryPlaceholderText: "உங்கள் ஆதரவு நிலையைத் தேர்வு செய்யவும்",
    messageLabel: "நாங்கள் எவ்வாறு உதவ முடியும்? (பரிந்துரைக்கப்படுகிறது)",
    messagePlaceholderText: "உங்கள் தேவைகளுக்கு சிறந்த தீர்வை தயாரிக்க உதவ உங்கள் விசாரணை விவரங்களைப் பகிரவும்",
    services: [
      "அடிப்படை — ஆரம்ப ஆலோசனை மற்றும் வழிகாட்டுதல் மட்டும்",
      "நிலையான — முழுமையான ஆவணப்படுத்துதல் மற்றும் செயல்முறை மேலாண்மை",
      "விரிவான — உங்கள் பக்கத்திலிருந்து குறைந்தபட்ச ஈடுபாட்டுடன் முழு சேவை தீர்வு",
      "தனிப்பயன் — சிக்கலான தேவைகள் அல்லது தனித்துவமான வணிக நிலைமை"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ta/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
