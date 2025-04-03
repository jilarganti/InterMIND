import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"تماس با ما","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]],"dir":"rtl"},"headers":[],"params":{},"relativePath":"fa/resources/contacts.md","filePath":"i18n/fa/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "fa/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="تماس-با-ما" tabindex="-1">تماس با ما <a class="header-anchor" href="#تماس-با-ما" aria-label="Permalink to &quot;تماس با ما&quot;">​</a></h1><p>آیا به دنبال راه‌اندازی یا توسعه کسب و کار خود در امارات هستید؟ با Golden Fish Corporate Services Provider LLC تماس بگیرید - نماینده رسمی شما برای تأسیس شرکت، خدمات PRO و کمک در امور ویزا.</p><p><strong>جزئیات مجوز:</strong></p><ul><li>شماره مجوز: 1414192</li><li>شماره ثبت: 2411728</li></ul><p><strong>موقعیت دفتر:</strong><br> ساختمان City Avenue<br> دفتر 405-070، پورت سعید<br> دبی، امارات متحده عربی</p><p><strong>راه‌های ارتباطی:</strong></p><ul><li>ایمیل: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>تلفن: 06 88 574 058 971+</li><li>واتساپ: 06 88 574 058 971+</li><li>تلگرام: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">چرا ما را انتخاب کنید؟</p><p>با تیمی از متخصصان آگاه و تعهد به ارائه خدمات شخصی‌سازی شده، ما تجربه‌ای روان و کارآمد را برای مشتریان تضمین می‌کنیم تا بتوانند روی مهم‌ترین مسئله - رشد کسب و کارشان در امارات - تمرکز کنند.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "تماس با ما",
    buttonText: "برای ما پیام بفرستید",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "سطح پشتیبانی مورد نیاز: *",
    categoryPlaceholderText: "سطح پشتیبانی خود را انتخاب کنید",
    messageLabel: "چگونه می‌توانیم به شما کمک کنیم؟ (توصیه می‌شود)",
    messagePlaceholderText: "لطفاً جزئیات درخواست خود را به اشتراک بگذارید تا بتوانیم بهترین راه‌حل را برای نیازهای شما آماده کنیم",
    services: [
      "پایه — فقط مشاوره و راهنمایی اولیه",
      "استاندارد — مدیریت کامل مستندات و فرآیند",
      "جامع — راه‌حل کامل خدمات با حداقل مشارکت از طرف شما",
      "سفارشی — نیازمندی‌های پیچیده یا موقعیت تجاری منحصر به فرد"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/fa/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
