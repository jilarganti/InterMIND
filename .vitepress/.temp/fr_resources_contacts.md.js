import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Contactez-nous","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"fr/resources/contacts.md","filePath":"i18n/fr/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "fr/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="contactez-nous" tabindex="-1">Contactez-nous <a class="header-anchor" href="#contactez-nous" aria-label="Permalink to &quot;Contactez-nous&quot;">​</a></h1><p>Vous souhaitez établir ou développer votre entreprise aux UAE ? Contactez Golden Fish Corporate Services Provider LLC - votre agent agréé pour la formation d&#39;entreprise, les services PRO et l&#39;assistance visa.</p><p><strong>Détails de la licence :</strong></p><ul><li>Numéro de licence : 1414192</li><li>Numéro d&#39;enregistrement : 2411728</li></ul><p><strong>Adresse du bureau :</strong><br> City Avenue Building<br> Bureau 405-070, Port Saeed<br> Dubaï, UAE</p><p><strong>Nos coordonnées :</strong></p><ul><li>Email : <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>Téléphone : +971 058 574 88 06</li><li>WhatsApp : +971 058 574 88 06</li><li>Telegram : @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">Pourquoi nous choisir ?</p><p>Avec une équipe de professionnels expérimentés et un engagement envers des services personnalisés, nous garantissons une expérience fluide et efficace pour nos clients, leur permettant de se concentrer sur l&#39;essentiel : le développement de leur entreprise aux UAE.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "Contactez-nous",
    buttonText: "Envoyez-nous un message",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "Niveau de support requis : *",
    categoryPlaceholderText: "Choisissez votre niveau de support",
    messageLabel: "Comment pouvons-nous vous aider ? (recommandé)",
    messagePlaceholderText: "Veuillez partager les détails de votre demande pour nous permettre de préparer la meilleure solution pour vos besoins",
    services: [
      "Basique — consultation initiale et orientation uniquement",
      "Standard — gestion complète de la documentation et des processus",
      "Complet — solution complète avec implication minimale de votre part",
      "Personnalisé — exigences complexes ou situation commerciale unique"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/fr/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
