import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"footer":false,"next":false,"lastUpdated":false,"navbar":false,"head":[["meta",{"name":"robots","content":"noindex"}]],"dir":"rtl"},"headers":[],"params":{},"relativePath":"ar/chat.md","filePath":"i18n/ar/chat.md"}');
const __default__ = { name: "ar/chat.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const chatPrompts = [
      // خدمات الأعمال (البلوك الأول)
      { id: "1", text: "تأسيس شركة في الإمارات", category: "business" },
      { id: "2", text: "تأسيس شركة Mainland", category: "business" },
      { id: "3", text: "تسجيل شركة في المنطقة Free Zone", category: "business" },
      { id: "4", text: "تأسيس شركة Offshore", category: "business" },
      { id: "5", text: "تأشيرة العمل الحر في الإمارات", category: "business" },
      { id: "6", text: "رخصة تجارية في دبي", category: "business" },
      { id: "7", text: "متطلبات الرخصة التجارية في الإمارات", category: "business" },
      { id: "23", text: "تأسيس الأعمال في الإمارات", category: "business" },
      { id: "24", text: "المناطق الحرة في دبي", category: "business" },
      { id: "25", text: "تسجيل الشركات في الإمارات", category: "business" },
      { id: "26", text: "تأشيرة العمل الحر في الإمارات", category: "business" },
      // التأشيرات والهجرة
      { id: "8", text: "طلب التأشيرة الذهبية الإماراتية", category: "visa" },
      { id: "9", text: "تأشيرة العمل الإماراتية", category: "visa" },
      { id: "10", text: "كفالة تأشيرة العائلة في الإمارات", category: "visa" },
      { id: "11", text: "متطلبات الفحص الطبي للتأشيرة", category: "visa" },
      { id: "12", text: "إجراءات تأشيرة الإقامة في الإمارات", category: "visa" },
      { id: "27", text: "متطلبات التأشيرة الإماراتية", category: "visa" },
      // القانونية والوثائق
      { id: "13", text: "طلب الهوية الإماراتية", category: "legal" },
      { id: "14", text: "تصديق الوثائق في الإمارات", category: "legal" },
      { id: "15", text: "الوكالة القانونية في الإمارات", category: "legal" },
      { id: "16", text: "مراجعة العقود التجارية في الإمارات", category: "legal" },
      { id: "40", text: "تجديد الهوية الإماراتية", category: "legal" },
      // الخدمات المالية
      { id: "17", text: "حساب مصرفي للشركات في الإمارات", category: "finance" },
      { id: "18", text: "التسجيل الضريبي في الإمارات (VAT)", category: "finance" },
      { id: "19", text: "خدمات المحاسبة في الإمارات", category: "finance" },
      { id: "20", text: "قوانين المادة الاقتصادية في الإمارات", category: "finance" },
      { id: "41", text: "الخدمات المصرفية في الإمارات", category: "finance" },
      // العقارات والخدمات
      { id: "21", text: "الاستثمار العقاري في الإمارات", category: "property" },
      { id: "22", text: "تأجير المكاتب في دبي", category: "property" },
      // الرعاية الصحية
      { id: "47", text: "التأمين الصحي في الإمارات", category: "healthcare" },
      { id: "48", text: "أفضل المستشفيات في دبي", category: "healthcare" },
      { id: "49", text: "الفحص الطبي في الإمارات", category: "healthcare" },
      // السياحة والترفيه
      { id: "28", text: "المعالم السياحية في دبي", category: "travel" },
      { id: "29", text: "إكسبو سيتي دبي", category: "attractions" },
      { id: "30", text: "تذاكر برواز دبي", category: "attractions" },
      { id: "31", text: "تذاكر برج خليفة", category: "attractions" },
      { id: "32", text: "متحف المستقبل", category: "attractions" },
      { id: "33", text: "اللوفر أبوظبي", category: "attractions" },
      { id: "34", text: "عالم فيراري أبوظبي", category: "attractions" },
      { id: "35", text: "التسوق في دبي مول", category: "shopping" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ar/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
