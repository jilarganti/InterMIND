import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Contáctenos","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"es/resources/contacts.md","filePath":"i18n/es/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "es/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="contactenos" tabindex="-1">Contáctenos <a class="header-anchor" href="#contactenos" aria-label="Permalink to &quot;Contáctenos&quot;">​</a></h1><p>¿Busca establecer o hacer crecer su negocio en los UAE? Póngase en contacto con Golden Fish Corporate Services Provider LLC - su agente registrado para la formación de empresas, servicios PRO y asistencia con visados.</p><p><strong>Detalles de la Licencia:</strong></p><ul><li>Licencia No: 1414192</li><li>Registro No: 2411728</li></ul><p><strong>Ubicación de la Oficina:</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> Dubai, UAE</p><p><strong>Contacto:</strong></p><ul><li>Correo electrónico: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>Teléfono: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">¿Por qué elegirnos?</p><p>Con un equipo de profesionales expertos y un compromiso con servicios personalizados, garantizamos una experiencia fluida y eficiente para nuestros clientes, permitiéndoles concentrarse en lo más importante: hacer crecer su negocio en los UAE.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "Contáctenos",
    buttonText: "Envíenos un mensaje",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "Nivel de soporte requerido: *",
    categoryPlaceholderText: "Elija su nivel de soporte",
    messageLabel: "¿Cómo podemos ayudarle? (recomendado)",
    messagePlaceholderText: "Por favor, comparta los detalles de su consulta para ayudarnos a preparar la mejor solución para sus necesidades",
    services: [
      "Básico — solo consulta inicial y orientación",
      "Estándar — gestión completa de documentación y procesos",
      "Integral — solución de servicio completo con mínima participación de su parte",
      "Personalizado — requisitos complejos o situación empresarial única"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/es/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
