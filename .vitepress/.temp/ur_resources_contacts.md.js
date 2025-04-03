import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ہم سے رابطہ کریں","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]],"dir":"rtl"},"headers":[],"params":{},"relativePath":"ur/resources/contacts.md","filePath":"i18n/ur/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "ur/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ہم-سے-رابطہ-کریں" tabindex="-1">ہم سے رابطہ کریں <a class="header-anchor" href="#ہم-سے-رابطہ-کریں" aria-label="Permalink to &quot;ہم سے رابطہ کریں&quot;">​</a></h1><p>کیا آپ متحدہ عرب امارات میں اپنا کاروبار قائم کرنا یا بڑھانا چاہتے ہیں؟ Golden Fish Corporate Services Provider LLC سے رابطہ کریں - کمپنی کی تشکیل، PRO خدمات، اور ویزا معاونت کے لیے آپ کا رجسٹرڈ ایجنٹ۔</p><p><strong>لائسنس کی تفصیلات:</strong></p><ul><li>لائسنس نمبر: 1414192</li><li>رجسٹر نمبر: 2411728</li></ul><p><strong>دفتر کا مقام:</strong><br> سٹی ایونیو بلڈنگ<br> آفس 405-070، پورٹ سعید<br> دبئی، متحدہ عرب امارات</p><p><strong>رابطہ کریں:</strong></p><ul><li>ای میل: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>فون: +971 058 574 88 06</li><li>واٹس ایپ: +971 058 574 88 06</li><li>ٹیلیگرام: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">ہمیں کیوں منتخب کریں؟</p><p>معلومات رکھنے والے پیشہ ور افراد کی ٹیم اور ذاتی خدمات کے لیے عزم کے ساتھ، ہم کلائنٹس کے لیے ہموار اور موثر تجربہ یقینی بناتے ہیں، جو انہیں سب سے اہم چیز پر توجہ مرکوز کرنے کی اجازت دیتا ہے – متحدہ عرب امارات میں اپنے کاروبار کو بڑھانا۔</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "رابطہ کریں",
    buttonText: "ہمیں پیغام بھیجیں",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "درکار معاونت کی سطح: *",
    categoryPlaceholderText: "اپنی معاونت کی سطح منتخب کریں",
    messageLabel: "ہم آپ کی کیسے مدد کر سکتے ہیں؟ (تجویز کردہ)",
    messagePlaceholderText: "براہ کرم اپنی استفسار کی تفصیلات شیئر کریں تاکہ ہم آپ کی ضروریات کے لیے بہترین حل تیار کر سکیں",
    services: [
      "بنیادی — صرف ابتدائی مشاورت اور رہنمائی",
      "معیاری — مکمل دستاویزات اور عمل کی نگرانی",
      "جامع — آپ کی طرف سے کم سے کم شمولیت کے ساتھ مکمل سروس حل",
      "حسب ضرورت — پیچیدہ تقاضے یا منفرد کاروباری صورتحال"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ur/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
