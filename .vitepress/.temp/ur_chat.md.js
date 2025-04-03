import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"footer":false,"next":false,"lastUpdated":false,"navbar":false,"head":[["meta",{"name":"robots","content":"noindex"}]],"dir":"rtl"},"headers":[],"params":{},"relativePath":"ur/chat.md","filePath":"i18n/ur/chat.md"}');
const __default__ = { name: "ur/chat.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const chatPrompts = [
      // کاروباری خدمات (پہلا بلاک)
      { id: "1", text: "UAE میں کمپنی کی رجسٹریشن", category: "business" },
      { id: "2", text: "Mainland کمپنی کا قیام", category: "business" },
      { id: "3", text: "Free zone کمپنی کی رجسٹریشن", category: "business" },
      { id: "4", text: "Offshore کمپنی کی تشکیل", category: "business" },
      { id: "5", text: "UAE فری لانس ویزا", category: "business" },
      { id: "6", text: "Dubai بزنس لائسنس", category: "business" },
      { id: "7", text: "UAE تجارتی لائسنس کی ضروریات", category: "business" },
      { id: "23", text: "UAE کاروباری سیٹ اپ", category: "business" },
      { id: "24", text: "Dubai free zones", category: "business" },
      { id: "25", text: "UAE کمپنی رجسٹریشن", category: "business" },
      { id: "26", text: "UAE فری لانس ویزا", category: "business" },
      // ویزا اور امیگریشن
      { id: "8", text: "UAE Golden Visa کی درخواست", category: "visa" },
      { id: "9", text: "UAE ملازمت ویزا", category: "visa" },
      { id: "10", text: "UAE میں خاندانی ویزا اسپانسرشپ", category: "visa" },
      { id: "11", text: "ویزا میڈیکل ٹیسٹ کی ضروریات", category: "visa" },
      { id: "12", text: "UAE رہائشی ویزا کا عمل", category: "visa" },
      { id: "27", text: "UAE ویزا کی ضروریات", category: "visa" },
      // قانونی اور دستاویزات
      { id: "13", text: "Emirates ID کی درخواست", category: "legal" },
      { id: "14", text: "UAE دستاویزات کی تصدیق", category: "legal" },
      { id: "15", text: "UAE میں پاور آف اٹارنی", category: "legal" },
      { id: "16", text: "UAE کاروباری معاہدے کا جائزہ", category: "legal" },
      { id: "40", text: "Emirates ID کی تجدید", category: "legal" },
      // مالیاتی خدمات
      { id: "17", text: "UAE کارپوریٹ بینک اکاؤنٹ", category: "finance" },
      { id: "18", text: "UAE ٹیکس رجسٹریشن (VAT)", category: "finance" },
      { id: "19", text: "UAE میں اکاؤنٹنگ خدمات", category: "finance" },
      { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
      { id: "41", text: "UAE بینکنگ خدمات", category: "finance" },
      // جائیداد اور خدمات
      { id: "21", text: "UAE پراپرٹی انوسٹمنٹ", category: "property" },
      { id: "22", text: "Dubai آفس سپیس کرایہ", category: "property" },
      // صحت
      { id: "47", text: "UAE ہیلتھ انشورنس", category: "healthcare" },
      { id: "48", text: "دبئی کے بہترین ہسپتال", category: "healthcare" },
      { id: "49", text: "UAE میڈیکل چیک اپ", category: "healthcare" },
      // سیاحت اور تفریح
      { id: "28", text: "دبئی سیاحتی مقامات", category: "travel" },
      { id: "29", text: "Expo City Dubai", category: "attractions" },
      { id: "30", text: "Dubai Frame ٹکٹس", category: "attractions" },
      { id: "31", text: "Burj Khalifa ٹکٹس", category: "attractions" },
      { id: "32", text: "Museum of the Future", category: "attractions" },
      { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
      { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
      { id: "35", text: "Dubai Mall شاپنگ", category: "shopping" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ur/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
