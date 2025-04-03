import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"联系我们","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"zh/resources/contacts.md","filePath":"i18n/zh/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "zh/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="联系我们" tabindex="-1">联系我们 <a class="header-anchor" href="#联系我们" aria-label="Permalink to &quot;联系我们&quot;">​</a></h1><p>想在阿联酋建立或发展您的业务吗？请联系 Golden Fish Corporate Services Provider LLC - 您的公司注册、PRO服务和签证协助的注册代理机构。</p><p><strong>执照详情：</strong></p><ul><li>执照号码：1414192</li><li>注册号码：2411728</li></ul><p><strong>办公地点：</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> 迪拜，阿联酋</p><p><strong>联系方式：</strong></p><ul><li>电子邮件：info@goldenfish.ae</li><li>电话：+971 058 574 88 06</li><li>WhatsApp：+971 058 574 88 06</li><li>Telegram：@goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">为什么选择我们？</p><p>凭借我们专业知识丰富的团队和对个性化服务的承诺，我们确保为客户提供顺畅高效的体验，使他们能够专注于最重要的事情 - 在阿联酋发展业务。</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "联系我们",
    buttonText: "给我们发送消息",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "所需支持级别：*",
    categoryPlaceholderText: "选择您的支持级别",
    messageLabel: "我们如何帮助您？（建议填写）",
    messagePlaceholderText: "请分享您的咨询详情，以便我们为您准备最佳解决方案",
    services: [
      "基础级 — 仅提供初步咨询和指导",
      "标准级 — 完整的文件处理和流程管理",
      "全面级 — 全方位服务解决方案，您只需最少参与",
      "定制级 — 复杂要求或特殊业务情况"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/zh/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
