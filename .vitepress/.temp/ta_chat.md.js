import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"footer":false,"next":false,"lastUpdated":false,"navbar":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"ta/chat.md","filePath":"i18n/ta/chat.md"}');
const __default__ = { name: "ta/chat.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const chatPrompts = [
      // வணிக சேவைகள் (முதல் தொகுதி)
      { id: "1", text: "UAE-இல் நிறுவன பதிவு", category: "business" },
      { id: "2", text: "Mainland நிறுவன அமைப்பு", category: "business" },
      { id: "3", text: "Free zone நிறுவன பதிவு", category: "business" },
      { id: "4", text: "Offshore நிறுவன உருவாக்கம்", category: "business" },
      { id: "5", text: "UAE freelance visa", category: "business" },
      { id: "6", text: "Dubai business license", category: "business" },
      { id: "7", text: "UAE வர்த்தக உரிமத் தேவைகள்", category: "business" },
      { id: "23", text: "UAE வணிக அமைப்பு", category: "business" },
      { id: "24", text: "Dubai free zones", category: "business" },
      { id: "25", text: "UAE நிறுவன பதிவு", category: "business" },
      { id: "26", text: "UAE freelance visa", category: "business" },
      // விசா மற்றும் குடியேற்றம்
      { id: "8", text: "UAE Golden Visa விண்ணப்பம்", category: "visa" },
      { id: "9", text: "UAE வேலை விசா", category: "visa" },
      { id: "10", text: "UAE-இல் குடும்ப விசா ஸ்பான்சர்ஷிப்", category: "visa" },
      { id: "11", text: "விசா மருத்துவ பரிசோதனை தேவைகள்", category: "visa" },
      { id: "12", text: "UAE குடியிருப்பு விசா செயல்முறை", category: "visa" },
      { id: "27", text: "UAE விசா தேவைகள்", category: "visa" },
      // சட்ட மற்றும் ஆவணங்கள்
      { id: "13", text: "Emirates ID விண்ணப்பம்", category: "legal" },
      { id: "14", text: "UAE ஆவண சான்றளிப்பு", category: "legal" },
      { id: "15", text: "UAE-இல் அதிகார பத்திரம்", category: "legal" },
      { id: "16", text: "UAE வணிக ஒப்பந்த மதிப்பாய்வு", category: "legal" },
      { id: "40", text: "Emirates ID புதுப்பித்தல்", category: "legal" },
      // நிதி சேவைகள்
      { id: "17", text: "UAE கார்ப்பரேட் வங்கி கணக்கு", category: "finance" },
      { id: "18", text: "UAE வரி பதிவு (VAT)", category: "finance" },
      { id: "19", text: "UAE-இல் கணக்கியல் சேவைகள்", category: "finance" },
      { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
      { id: "41", text: "UAE வங்கி சேவைகள்", category: "finance" },
      // அசையாச் சொத்து மற்றும் சேவைகள்
      { id: "21", text: "UAE சொத்து முதலீடு", category: "property" },
      { id: "22", text: "Dubai அலுவலக இட வாடகை", category: "property" },
      // சுகாதாரம்
      { id: "47", text: "UAE சுகாதார காப்பீடு", category: "healthcare" },
      { id: "48", text: "துபாயில் சிறந்த மருத்துவமனைகள்", category: "healthcare" },
      { id: "49", text: "UAE மருத்துவ பரிசோதனை", category: "healthcare" },
      // சுற்றுலா மற்றும் பொழுதுபோக்கு
      { id: "28", text: "துபாய் சுற்றுலா தலங்கள்", category: "travel" },
      { id: "29", text: "Expo City Dubai", category: "attractions" },
      { id: "30", text: "Dubai Frame நுழைவுச்சீட்டுகள்", category: "attractions" },
      { id: "31", text: "Burj Khalifa நுழைவுச்சீட்டுகள்", category: "attractions" },
      { id: "32", text: "Museum of the Future", category: "attractions" },
      { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
      { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
      { id: "35", text: "Dubai Mall ஷாப்பிங்", category: "shopping" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ta/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
