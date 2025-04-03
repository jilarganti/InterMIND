import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"تواصل معنا","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]],"dir":"rtl"},"headers":[],"params":{},"relativePath":"ar/resources/contacts.md","filePath":"i18n/ar/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "ar/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="تواصل-معنا" tabindex="-1">تواصل معنا <a class="header-anchor" href="#تواصل-معنا" aria-label="Permalink to &quot;تواصل معنا&quot;">​</a></h1><p>هل تتطلع إلى تأسيس أو تنمية أعمالك في الإمارات العربية المتحدة؟ تواصل مع Golden Fish Corporate Services Provider LLC - وكيلك المسجل لتأسيس الشركات وخدمات PRO والمساعدة في التأشيرات.</p><p><strong>تفاصيل الرخصة:</strong></p><ul><li>رقم الرخصة: 1414192</li><li>رقم السجل: 2411728</li></ul><p><strong>موقع المكتب:</strong><br> مبنى سيتي أفينيو<br> مكتب 405-070، بور سعيد<br> دبي، الإمارات العربية المتحدة</p><p><strong>للتواصل معنا:</strong></p><ul><li>البريد الإلكتروني: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>الهاتف: 06 88 574 058 971+</li><li>واتساب: 06 88 574 058 971+</li><li>تيليجرام: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">لماذا تختارنا؟</p><p>مع فريق من المحترفين ذوي الخبرة والتزامنا بتقديم خدمات مخصصة، نضمن تجربة سلسة وفعالة لعملائنا، مما يتيح لهم التركيز على ما يهم - تنمية أعمالهم في الإمارات العربية المتحدة.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "تواصل معنا",
    buttonText: "أرسل لنا رسالة",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "مستوى الدعم المطلوب: *",
    categoryPlaceholderText: "اختر مستوى الدعم المناسب",
    messageLabel: "كيف يمكننا مساعدتك؟ (مستحسن)",
    messagePlaceholderText: "يرجى مشاركة تفاصيل استفسارك لمساعدتنا في إعداد أفضل حل لاحتياجاتك",
    services: [
      "أساسي — استشارة وتوجيه أولي فقط",
      "قياسي — إدارة كاملة للوثائق والعمليات",
      "شامل — حل خدمة كاملة مع حد أدنى من المشاركة من جانبك",
      "مخصص — متطلبات معقدة أو وضع تجاري فريد"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ar/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
