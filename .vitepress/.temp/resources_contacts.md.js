import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Contact Us","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"resources/contacts.md","filePath":"en/resources/contacts.md","lastUpdated":1743254722000}');
const _sfc_main = { name: "resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="contact-us" tabindex="-1">Contact Us <a class="header-anchor" href="#contact-us" aria-label="Permalink to &quot;Contact Us&quot;">​</a></h1><p>Looking to establish or grow your business in the UAE? Get in touch with Golden Fish Corporate Services Provider LLC - your registered agent for company formation, PRO services, and visa assistance.</p><p><strong>License Details:</strong></p><ul><li>License No: 1414192</li><li>Register No: 2411728</li></ul><p><strong>Office Location:</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> Dubai, UAE</p><p><strong>Get in Touch:</strong></p><ul><li>Email: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>Phone: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">Why Choose Us?</p><p>With a team of knowledgeable professionals and a commitment to personalized services, we ensure a smooth and efficient experience for clients, allowing them to focus on what matters most – growing their business in the UAE.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "Contact Us",
    buttonText: "Send us a message",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "Required support level: *",
    categoryPlaceholderText: "Choose your support level",
    messageLabel: "How can we help you? (recommended)",
    messagePlaceholderText: "Please share your inquiry details to help us prepare the best solution for your needs",
    services: [
      "Basic — initial consultation and guidance only",
      "Standard — complete documentation and process management",
      "Comprehensive — full-service solution with minimal involvement from your side",
      "Custom — complex requirements or unique business situation"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
