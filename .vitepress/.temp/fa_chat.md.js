import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"footer":false,"next":false,"lastUpdated":false,"navbar":false,"head":[["meta",{"name":"robots","content":"noindex"}]],"dir":"rtl"},"headers":[],"params":{},"relativePath":"fa/chat.md","filePath":"i18n/fa/chat.md"}');
const __default__ = { name: "fa/chat.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const chatPrompts = [
      // خدمات کسب و کار (بلوک اول)
      { id: "1", text: "ثبت شرکت در امارات", category: "business" },
      { id: "2", text: "راه‌اندازی شرکت Mainland", category: "business" },
      { id: "3", text: "ثبت شرکت در Free Zone", category: "business" },
      { id: "4", text: "تأسیس شرکت Offshore", category: "business" },
      { id: "5", text: "ویزای فریلنسری امارات", category: "business" },
      { id: "6", text: "مجوز تجاری دبی", category: "business" },
      { id: "7", text: "الزامات مجوز تجاری امارات", category: "business" },
      { id: "23", text: "راه‌اندازی کسب و کار در امارات", category: "business" },
      { id: "24", text: "مناطق آزاد دبی", category: "business" },
      { id: "25", text: "ثبت شرکت در امارات", category: "business" },
      { id: "26", text: "ویزای فریلنسری امارات", category: "business" },
      // ویزا و مهاجرت
      { id: "8", text: "درخواست Golden Visa امارات", category: "visa" },
      { id: "9", text: "ویزای کار امارات", category: "visa" },
      { id: "10", text: "اسپانسرشیپ ویزای خانوادگی در امارات", category: "visa" },
      { id: "11", text: "الزامات آزمایش پزشکی ویزا", category: "visa" },
      { id: "12", text: "فرآیند ویزای اقامت امارات", category: "visa" },
      { id: "27", text: "شرایط ویزای امارات", category: "visa" },
      // حقوقی و اسناد
      { id: "13", text: "درخواست Emirates ID", category: "legal" },
      { id: "14", text: "تصدیق مدارک امارات", category: "legal" },
      { id: "15", text: "وکالتنامه در امارات", category: "legal" },
      { id: "16", text: "بررسی قرارداد تجاری امارات", category: "legal" },
      { id: "40", text: "تمدید Emirates ID", category: "legal" },
      // خدمات مالی
      { id: "17", text: "حساب بانکی شرکتی امارات", category: "finance" },
      { id: "18", text: "ثبت مالیاتی امارات (VAT)", category: "finance" },
      { id: "19", text: "خدمات حسابداری در امارات", category: "finance" },
      { id: "20", text: "مقررات اقتصادی امارات", category: "finance" },
      { id: "41", text: "خدمات بانکی امارات", category: "finance" },
      // املاک و خدمات
      { id: "21", text: "سرمایه‌گذاری ملکی در امارات", category: "property" },
      { id: "22", text: "اجاره دفتر کار در دبی", category: "property" },
      // بهداشت و درمان
      { id: "47", text: "بیمه درمانی امارات", category: "healthcare" },
      { id: "48", text: "بهترین بیمارستان‌های دبی", category: "healthcare" },
      { id: "49", text: "چکاپ پزشکی امارات", category: "healthcare" },
      // گردشگری و تفریحات
      { id: "28", text: "جاذبه‌های گردشگری دبی", category: "travel" },
      { id: "29", text: "Expo City دبی", category: "attractions" },
      { id: "30", text: "بلیط Dubai Frame", category: "attractions" },
      { id: "31", text: "بلیط برج خلیفه", category: "attractions" },
      { id: "32", text: "موزه آینده", category: "attractions" },
      { id: "33", text: "لوور ابوظبی", category: "attractions" },
      { id: "34", text: "فراری ورلد ابوظبی", category: "attractions" },
      { id: "35", text: "خرید در دبی مال", category: "shopping" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AIChat = resolveComponent("AIChat");
      const _component_userStyle = resolveComponent("userStyle");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AIChat, { prompts: chatPrompts }, null, _parent));
      _push(ssrRenderComponent(_component_userStyle, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Normal`);
          } else {
            return [
              createTextVNode("Normal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/fa/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
