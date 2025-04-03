import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"name":"robots","content":"noindex"}]],"dir":"rtl"},"headers":[],"params":{},"relativePath":"ar/uae-business/include/recommended-banks.md","filePath":"i18n/ar/uae-business/include/recommended-banks.md","lastUpdated":1742883140000}');
const _sfc_main = { name: "ar/uae-business/include/recommended-banks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LogoGrid = resolveComponent("LogoGrid");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_LogoGrid, { logos: [
    { url: "https://www.emiratesnbd.com", src: "/content/Emirates_NBD_Logo.jpg" },
    { url: "https://www.bankfab.com", src: "/content/256px-First_Abu_Dhabi_Bank_Logo.svg.png" },
    { url: "https://www.adcb.com", src: "/content/256px-Abu_Dhabi_Commercial_Bank_logo.svg.png" },
    { url: "https://www.emiratesislamic.ae/en", src: "/content/Emirates-Islamic-Bank-Logo.png" },
    { url: "https://www.mashreqbank.com", src: "/content/Mashreq-new-logo.png" }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ar/uae-business/include/recommended-banks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recommendedBanks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  recommendedBanks as default
};
