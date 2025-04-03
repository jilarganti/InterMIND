import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Entre em Contato","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"pt/resources/contacts.md","filePath":"i18n/pt/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "pt/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="entre-em-contato" tabindex="-1">Entre em Contato <a class="header-anchor" href="#entre-em-contato" aria-label="Permalink to &quot;Entre em Contato&quot;">​</a></h1><p>Procurando estabelecer ou expandir seu negócio nos Emirados Árabes Unidos? Entre em contato com a Golden Fish Corporate Services Provider LLC - seu agente registrado para formação de empresas, serviços PRO e assistência com vistos.</p><p><strong>Detalhes da Licença:</strong></p><ul><li>Licença Nº: 1414192</li><li>Registro Nº: 2411728</li></ul><p><strong>Localização do Escritório:</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> Dubai, UAE</p><p><strong>Entre em Contato:</strong></p><ul><li>Email: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>Telefone: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">Por que Nos Escolher?</p><p>Com uma equipe de profissionais experientes e um compromisso com serviços personalizados, garantimos uma experiência tranquila e eficiente para os clientes, permitindo que eles se concentrem no que é mais importante – fazer seu negócio crescer nos Emirados Árabes Unidos.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "Entre em Contato",
    buttonText: "Envie-nos uma mensagem",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "Nível de suporte necessário: *",
    categoryPlaceholderText: "Escolha seu nível de suporte",
    messageLabel: "Como podemos ajudar? (recomendado)",
    messagePlaceholderText: "Por favor, compartilhe os detalhes da sua consulta para nos ajudar a preparar a melhor solução para suas necessidades",
    services: [
      "Básico — apenas consulta inicial e orientação",
      "Padrão — documentação completa e gerenciamento de processos",
      "Abrangente — solução completa com mínima participação da sua parte",
      "Personalizado — requisitos complexos ou situação empresarial única"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/pt/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
