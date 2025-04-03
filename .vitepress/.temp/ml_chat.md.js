import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"footer":false,"next":false,"lastUpdated":false,"navbar":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"ml/chat.md","filePath":"i18n/ml/chat.md"}');
const __default__ = { name: "ml/chat.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const chatPrompts = [
      // ബിസിനസ് സേവനങ്ങൾ (ആദ്യ ബ്ലോക്ക്)
      { id: "1", text: "UAE-യിൽ കമ്പനി രജിസ്ട്രേഷൻ", category: "business" },
      { id: "2", text: "Mainland കമ്പനി സ്ഥാപിക്കൽ", category: "business" },
      { id: "3", text: "Free zone കമ്പനി രജിസ്ട്രേഷൻ", category: "business" },
      { id: "4", text: "Offshore കമ്പനി രൂപീകരണം", category: "business" },
      { id: "5", text: "UAE ഫ്രീലാൻസ് വിസ", category: "business" },
      { id: "6", text: "ദുബായ് ബിസിനസ് ലൈസൻസ്", category: "business" },
      { id: "7", text: "UAE ട്രേഡ് ലൈസൻസ് ആവശ്യകതകൾ", category: "business" },
      { id: "23", text: "UAE ബിസിനസ് സ്ഥാപനം", category: "business" },
      { id: "24", text: "ദുബായ് free zones", category: "business" },
      { id: "25", text: "UAE കമ്പനി രജിസ്ട്രേഷൻ", category: "business" },
      { id: "26", text: "UAE ഫ്രീലാൻസ് വിസ", category: "business" },
      // വിസയും കുടിയേറ്റവും
      { id: "8", text: "UAE Golden Visa അപേക്ഷ", category: "visa" },
      { id: "9", text: "UAE തൊഴിൽ വിസ", category: "visa" },
      { id: "10", text: "UAE-യിലെ കുടുംബ വിസ സ്പോൺസർഷിപ്പ്", category: "visa" },
      { id: "11", text: "വിസ മെഡിക്കൽ പരിശോധന ആവശ്യകതകൾ", category: "visa" },
      { id: "12", text: "UAE റെസിഡൻസി വിസ പ്രക്രിയ", category: "visa" },
      { id: "27", text: "UAE വിസ ആവശ്യകതകൾ", category: "visa" },
      // നിയമപരവും രേഖകളും
      { id: "13", text: "Emirates ID അപേക്ഷ", category: "legal" },
      { id: "14", text: "UAE രേഖ സാക്ഷ്യപ്പെടുത്തൽ", category: "legal" },
      { id: "15", text: "UAE-യിലെ പവർ ഓഫ് അറ്റോർണി", category: "legal" },
      { id: "16", text: "UAE ബിസിനസ് കരാർ അവലോകനം", category: "legal" },
      { id: "40", text: "Emirates ID പുതുക്കൽ", category: "legal" },
      // സാമ്പത്തിക സേവനങ്ങൾ
      { id: "17", text: "UAE കോർപ്പറേറ്റ് ബാങ്ക് അക്കൗണ്ട്", category: "finance" },
      { id: "18", text: "UAE നികുതി രജിസ്ട്രേഷൻ (VAT)", category: "finance" },
      { id: "19", text: "UAE-യിലെ അക്കൗണ്ടിംഗ് സേവനങ്ങൾ", category: "finance" },
      { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
      { id: "41", text: "UAE ബാങ്കിംഗ് സേവനങ്ങൾ", category: "finance" },
      // റിയൽ എസ്റ്റേറ്റും സേവനങ്ങളും
      { id: "21", text: "UAE പ്രോപ്പർട്ടി നിക്ഷേപം", category: "property" },
      { id: "22", text: "ദുബായ് ഓഫീസ് സ്പേസ് വാടക", category: "property" },
      // ആരോഗ്യ പരിപാലനം
      { id: "47", text: "UAE ആരോഗ്യ ഇൻഷുറൻസ്", category: "healthcare" },
      { id: "48", text: "ദുബായിലെ മികച്ച ആശുപത്രികൾ", category: "healthcare" },
      { id: "49", text: "UAE മെഡിക്കൽ ചെക്കപ്പ്", category: "healthcare" },
      // ടൂറിസവും വിനോദവും (അവസാനം)
      { id: "28", text: "ദുബായ് ടൂറിസ്റ്റ് ആകർഷണങ്ങൾ", category: "travel" },
      { id: "29", text: "Expo City Dubai", category: "attractions" },
      { id: "30", text: "Dubai Frame ടിക്കറ്റുകൾ", category: "attractions" },
      { id: "31", text: "Burj Khalifa ടിക്കറ്റുകൾ", category: "attractions" },
      { id: "32", text: "Museum of the Future", category: "attractions" },
      { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
      { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
      { id: "35", text: "Dubai Mall ഷോപ്പിംഗ്", category: "shopping" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ml/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
