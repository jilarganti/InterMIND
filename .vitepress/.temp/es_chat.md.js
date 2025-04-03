import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"footer":false,"next":false,"lastUpdated":false,"navbar":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"es/chat.md","filePath":"i18n/es/chat.md"}');
const __default__ = { name: "es/chat.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const chatPrompts = [
      // Servicios empresariales (primer bloque)
      { id: "1", text: "Registro de empresa en UAE", category: "business" },
      { id: "2", text: "Establecimiento de empresa Mainland", category: "business" },
      { id: "3", text: "Registro de empresa en Free Zone", category: "business" },
      { id: "4", text: "Formación de empresa Offshore", category: "business" },
      { id: "5", text: "Visa de freelance en UAE", category: "business" },
      { id: "6", text: "Licencia comercial de Dubai", category: "business" },
      { id: "7", text: "Requisitos de licencia comercial en UAE", category: "business" },
      { id: "23", text: "Establecimiento de negocio en UAE", category: "business" },
      { id: "24", text: "Free Zones de Dubai", category: "business" },
      { id: "25", text: "Registro de empresa en UAE", category: "business" },
      { id: "26", text: "Visa de freelance en UAE", category: "business" },
      // Visas e inmigración
      { id: "8", text: "Solicitud de Golden Visa UAE", category: "visa" },
      { id: "9", text: "Visa de trabajo UAE", category: "visa" },
      { id: "10", text: "Patrocinio de visa familiar en UAE", category: "visa" },
      { id: "11", text: "Requisitos de examen médico para visa", category: "visa" },
      { id: "12", text: "Proceso de visa de residencia UAE", category: "visa" },
      { id: "27", text: "Requisitos de visa UAE", category: "visa" },
      // Legal y documentación
      { id: "13", text: "Solicitud de Emirates ID", category: "legal" },
      { id: "14", text: "Legalización de documentos UAE", category: "legal" },
      { id: "15", text: "Poder notarial en UAE", category: "legal" },
      { id: "16", text: "Revisión de contratos comerciales UAE", category: "legal" },
      { id: "40", text: "Renovación de Emirates ID", category: "legal" },
      // Servicios financieros
      { id: "17", text: "Cuenta bancaria corporativa UAE", category: "finance" },
      { id: "18", text: "Registro fiscal UAE (VAT)", category: "finance" },
      { id: "19", text: "Servicios de contabilidad en UAE", category: "finance" },
      { id: "20", text: "Regulaciones de Sustancia Económica UAE", category: "finance" },
      { id: "41", text: "Servicios bancarios UAE", category: "finance" },
      // Propiedades y servicios
      { id: "21", text: "Inversión inmobiliaria en UAE", category: "property" },
      { id: "22", text: "Alquiler de oficinas en Dubai", category: "property" },
      // Salud
      { id: "47", text: "Seguro médico UAE", category: "healthcare" },
      { id: "48", text: "Mejores hospitales en Dubai", category: "healthcare" },
      { id: "49", text: "Chequeo médico UAE", category: "healthcare" },
      // Turismo y entretenimiento (al final)
      { id: "28", text: "Atracciones turísticas de Dubai", category: "travel" },
      { id: "29", text: "Expo City Dubai", category: "attractions" },
      { id: "30", text: "Entradas Dubai Frame", category: "attractions" },
      { id: "31", text: "Entradas Burj Khalifa", category: "attractions" },
      { id: "32", text: "Museum of the Future", category: "attractions" },
      { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
      { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
      { id: "35", text: "Compras en Dubai Mall", category: "shopping" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/es/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
