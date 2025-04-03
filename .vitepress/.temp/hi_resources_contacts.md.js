import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"हमसे संपर्क करें","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"hi/resources/contacts.md","filePath":"i18n/hi/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "hi/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="हमसे-संपर्क-करें" tabindex="-1">हमसे संपर्क करें <a class="header-anchor" href="#हमसे-संपर्क-करें" aria-label="Permalink to &quot;हमसे संपर्क करें&quot;">​</a></h1><p>क्या आप UAE में अपना व्यवसाय स्थापित या विकसित करना चाहते हैं? Golden Fish Corporate Services Provider LLC से संपर्क करें - कंपनी गठन, PRO सेवाओं और वीजा सहायता के लिए आपका पंजीकृत एजेंट।</p><p><strong>लाइसेंस विवरण:</strong></p><ul><li>लाइसेंस नंबर: 1414192</li><li>रजिस्टर नंबर: 2411728</li></ul><p><strong>कार्यालय का स्थान:</strong><br> सिटी एवेन्यू बिल्डिंग<br> कार्यालय 405-070, पोर्ट सईद<br> दुबई, UAE</p><p><strong>संपर्क करें:</strong></p><ul><li>ईमेल: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>फोन: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">हमें क्यों चुनें?</p><p>जानकार पेशेवरों की टीम और व्यक्तिगत सेवाओं के प्रति प्रतिबद्धता के साथ, हम ग्राहकों के लिए एक सुचारू और कुशल अनुभव सुनिश्चित करते हैं, जिससे वे अपने सबसे महत्वपूर्ण काम पर ध्यान केंद्रित कर सकते हैं - UAE में अपने व्यवसाय को बढ़ाना।</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "संपर्क करें",
    buttonText: "हमें संदेश भेजें",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "आवश्यक सहायता स्तर: *",
    categoryPlaceholderText: "अपना सहायता स्तर चुनें",
    messageLabel: "हम आपकी कैसे मदद कर सकते हैं? (अनुशंसित)",
    messagePlaceholderText: "कृपया अपनी पूछताछ का विवरण साझा करें ताकि हम आपकी जरूरतों के लिए सर्वोत्तम समाधान तैयार कर सकें",
    services: [
      "बेसिक — केवल प्रारंभिक परामर्श और मार्गदर्शन",
      "स्टैंडर्ड — पूर्ण दस्तावेजीकरण और प्रक्रिया प्रबंधन",
      "व्यापक — आपकी तरफ से न्यूनतम भागीदारी के साथ पूर्ण-सेवा समाधान",
      "कस्टम — जटिल आवश्यकताएं या विशिष्ट व्यवसाय स्थिति"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/hi/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
