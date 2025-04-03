import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"ТЕСТ","actions":[{"theme":"brand","text":"Тест 1","link":"./?utm_source=google_ads&utm_medium=cpc&utm_campaign=winter_2025"},{"theme":"alt","text":"Тест 2","link":"./resources/contacts"}]},"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"ru/test.md","filePath":"i18n/ru/test.md","lastUpdated":1743244528000}');
const _sfc_main = { name: "ru/test.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ru/test.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  test as default
};
