import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"footer":false,"next":false,"lastUpdated":false,"navbar":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"tr/chat.md","filePath":"i18n/tr/chat.md"}');
const __default__ = { name: "tr/chat.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const chatPrompts = [
      // İş Hizmetleri (ilk blok)
      { id: "1", text: "UAE'de şirket tescili", category: "business" },
      { id: "2", text: "Mainland şirket kurulumu", category: "business" },
      { id: "3", text: "Free zone şirket tescili", category: "business" },
      { id: "4", text: "Offshore şirket kurulumu", category: "business" },
      { id: "5", text: "UAE freelance vizesi", category: "business" },
      { id: "6", text: "Dubai ticari lisansı", category: "business" },
      { id: "7", text: "UAE ticari lisans gereklilikleri", category: "business" },
      { id: "23", text: "UAE şirket kurulumu", category: "business" },
      { id: "24", text: "Dubai free zones", category: "business" },
      { id: "25", text: "UAE şirket tescili", category: "business" },
      { id: "26", text: "UAE freelance vizesi", category: "business" },
      // Vize ve Göçmenlik
      { id: "8", text: "UAE Golden Visa başvurusu", category: "visa" },
      { id: "9", text: "UAE çalışma vizesi", category: "visa" },
      { id: "10", text: "UAE'de aile vizesi sponsorluğu", category: "visa" },
      { id: "11", text: "Vize sağlık testi gereklilikleri", category: "visa" },
      { id: "12", text: "UAE oturma vizesi süreci", category: "visa" },
      { id: "27", text: "UAE vize gereklilikleri", category: "visa" },
      // Hukuki ve Belgeler
      { id: "13", text: "Emirates ID başvurusu", category: "legal" },
      { id: "14", text: "UAE belge tasdiki", category: "legal" },
      { id: "15", text: "UAE'de vekaletname", category: "legal" },
      { id: "16", text: "UAE iş sözleşmesi incelemesi", category: "legal" },
      { id: "40", text: "Emirates ID yenileme", category: "legal" },
      // Finansal Hizmetler
      { id: "17", text: "UAE kurumsal banka hesabı", category: "finance" },
      { id: "18", text: "UAE vergi kaydı (KDV)", category: "finance" },
      { id: "19", text: "UAE'de muhasebe hizmetleri", category: "finance" },
      { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
      { id: "41", text: "UAE bankacılık hizmetleri", category: "finance" },
      // Gayrimenkul ve Hizmetler
      { id: "21", text: "UAE gayrimenkul yatırımı", category: "property" },
      { id: "22", text: "Dubai ofis alanı kiralama", category: "property" },
      // Sağlık
      { id: "47", text: "UAE sağlık sigortası", category: "healthcare" },
      { id: "48", text: "Dubai'deki en iyi hastaneler", category: "healthcare" },
      { id: "49", text: "UAE sağlık kontrolü", category: "healthcare" },
      // Turizm ve Eğlence (sonda)
      { id: "28", text: "Dubai turistik yerleri", category: "travel" },
      { id: "29", text: "Expo City Dubai", category: "attractions" },
      { id: "30", text: "Dubai Frame biletleri", category: "attractions" },
      { id: "31", text: "Burj Khalifa biletleri", category: "attractions" },
      { id: "32", text: "Museum of the Future", category: "attractions" },
      { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
      { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
      { id: "35", text: "Dubai Mall alışveriş", category: "shopping" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/tr/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
