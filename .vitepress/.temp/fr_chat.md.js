import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"footer":false,"next":false,"lastUpdated":false,"navbar":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"fr/chat.md","filePath":"i18n/fr/chat.md"}');
const __default__ = { name: "fr/chat.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const chatPrompts = [
      // Services aux entreprises (premier bloc)
      { id: "1", text: "Création d'entreprise aux UAE", category: "business" },
      { id: "2", text: "Création d'entreprise Mainland", category: "business" },
      { id: "3", text: "Création d'entreprise en Free Zone", category: "business" },
      { id: "4", text: "Formation de société offshore", category: "business" },
      { id: "5", text: "Visa freelance UAE", category: "business" },
      { id: "6", text: "Licence commerciale à Dubai", category: "business" },
      { id: "7", text: "Conditions de licence commerciale UAE", category: "business" },
      { id: "23", text: "Installation d'entreprise aux UAE", category: "business" },
      { id: "24", text: "Free Zones de Dubai", category: "business" },
      { id: "25", text: "Enregistrement d'entreprise aux UAE", category: "business" },
      { id: "26", text: "Visa freelance UAE", category: "business" },
      // Visas et immigration
      { id: "8", text: "Demande de Golden Visa UAE", category: "visa" },
      { id: "9", text: "Visa de travail UAE", category: "visa" },
      { id: "10", text: "Parrainage visa familial aux UAE", category: "visa" },
      { id: "11", text: "Exigences test médical pour visa", category: "visa" },
      { id: "12", text: "Processus de visa de résidence UAE", category: "visa" },
      { id: "27", text: "Conditions de visa UAE", category: "visa" },
      // Juridique et documents
      { id: "13", text: "Demande Emirates ID", category: "legal" },
      { id: "14", text: "Attestation de documents UAE", category: "legal" },
      { id: "15", text: "Procuration aux UAE", category: "legal" },
      { id: "16", text: "Révision contrat commercial UAE", category: "legal" },
      { id: "40", text: "Renouvellement Emirates ID", category: "legal" },
      // Services financiers
      { id: "17", text: "Compte bancaire entreprise UAE", category: "finance" },
      { id: "18", text: "Enregistrement TVA UAE", category: "finance" },
      { id: "19", text: "Services comptables UAE", category: "finance" },
      { id: "20", text: "Réglementations UAE Economic Substance", category: "finance" },
      { id: "41", text: "Services bancaires UAE", category: "finance" },
      // Immobilier et services
      { id: "21", text: "Investissement immobilier UAE", category: "property" },
      { id: "22", text: "Location bureaux Dubai", category: "property" },
      // Santé
      { id: "47", text: "Assurance santé UAE", category: "healthcare" },
      { id: "48", text: "Meilleurs hôpitaux de Dubai", category: "healthcare" },
      { id: "49", text: "Bilan médical UAE", category: "healthcare" },
      // Tourisme et loisirs (à la fin)
      { id: "28", text: "Attractions touristiques Dubai", category: "travel" },
      { id: "29", text: "Expo City Dubai", category: "attractions" },
      { id: "30", text: "Billets Dubai Frame", category: "attractions" },
      { id: "31", text: "Billets Burj Khalifa", category: "attractions" },
      { id: "32", text: "Museum of the Future", category: "attractions" },
      { id: "33", text: "Louvre Abu Dhabi", category: "attractions" },
      { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
      { id: "35", text: "Shopping Dubai Mall", category: "shopping" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/fr/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
