import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"మాతో సంప్రదించండి","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"te/resources/contacts.md","filePath":"i18n/te/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "te/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="మాతో-సంప్రదించండి" tabindex="-1">మాతో సంప్రదించండి <a class="header-anchor" href="#మాతో-సంప్రదించండి" aria-label="Permalink to &quot;మాతో సంప్రదించండి&quot;">​</a></h1><p>UAE లో మీ వ్యాపారాన్ని స్థాపించాలని లేదా విస్తరించాలని అనుకుంటున్నారా? కంపెనీ ఏర్పాటు, PRO సేవలు మరియు వీసా సహాయం కోసం మీ రిజిస్టర్డ్ ఏజెంట్ అయిన Golden Fish Corporate Services Provider LLC తో సంప్రదించండి.</p><p><strong>లైసెన్స్ వివరాలు:</strong></p><ul><li>లైసెన్స్ నెం: 1414192</li><li>రిజిస్టర్ నెం: 2411728</li></ul><p><strong>కార్యాలయ స్థానం:</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> దుబాయ్, UAE</p><p><strong>సంప్రదించడానికి:</strong></p><ul><li>ఇమెయిల్: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>ఫోన్: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">మమ్మల్ని ఎందుకు ఎంచుకోవాలి?</p><p>జ్ఞానవంతులైన నిపుణుల బృందంతో మరియు వ్యక్తిగతీకృత సేవలపై నిబద్ధతతో, క్లయింట్లకు సజావుగా మరియు సమర్థవంతమైన అనుభవాన్ని అందిస్తాము, తద్వారా వారు UAE లో తమ వ్యాపారాన్ని పెంచుకోవడంపై దృష్టి పెట్టగలరు.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "మాతో సంప్రదించండి",
    buttonText: "మాకు సందేశం పంపండి",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "అవసరమైన మద్దతు స్థాయి: *",
    categoryPlaceholderText: "మీ మద్దతు స్థాయిని ఎంచుకోండి",
    messageLabel: "మేము మీకు ఎలా సహాయపడగలం? (సిఫార్సు చేయబడింది)",
    messagePlaceholderText: "మీ అవసరాలకు ఉత్తమమైన పరిష్కారాన్ని సిద్ధం చేయడానికి దయచేసి మీ విచారణ వివరాలను పంచుకోండి",
    services: [
      "ప్రాథమిక — ప్రారంభ సంప్రదింపులు మరియు మార్గదర్శకత్వం మాత్రమే",
      "ప్రామాణిక — పూర్తి పత్రీకరణ మరియు ప్రక్రియ నిర్వహణ",
      "సమగ్ర — మీ నుండి కనిష్ట పాల్గొనడంతో పూర్తి-సేవా పరిష్కారం",
      "కస్టమ్ — సంక్లిష్ట అవసరాలు లేదా ప్రత్యేక వ్యాపార పరిస్థితి"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/te/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
