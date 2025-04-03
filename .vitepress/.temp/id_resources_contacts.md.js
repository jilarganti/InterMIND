import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hubungi Kami","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"id/resources/contacts.md","filePath":"i18n/id/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "id/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hubungi-kami" tabindex="-1">Hubungi Kami <a class="header-anchor" href="#hubungi-kami" aria-label="Permalink to &quot;Hubungi Kami&quot;">​</a></h1><p>Ingin mendirikan atau mengembangkan bisnis Anda di UAE? Hubungi Golden Fish Corporate Services Provider LLC - agen terdaftar Anda untuk pembentukan perusahaan, layanan PRO, dan bantuan visa.</p><p><strong>Detail Lisensi:</strong></p><ul><li>Nomor Lisensi: 1414192</li><li>Nomor Register: 2411728</li></ul><p><strong>Lokasi Kantor:</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> Dubai, UAE</p><p><strong>Hubungi Kami:</strong></p><ul><li>Email: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>Telepon: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">Mengapa Memilih Kami?</p><p>Dengan tim profesional yang berpengetahuan luas dan komitmen untuk layanan personal, kami memastikan pengalaman yang lancar dan efisien bagi klien, memungkinkan mereka fokus pada hal yang paling penting – mengembangkan bisnis mereka di UAE.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "Hubungi Kami",
    buttonText: "Kirim pesan kepada kami",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "Tingkat dukungan yang diperlukan: *",
    categoryPlaceholderText: "Pilih tingkat dukungan Anda",
    messageLabel: "Bagaimana kami dapat membantu Anda? (direkomendasikan)",
    messagePlaceholderText: "Silakan bagikan detail pertanyaan Anda untuk membantu kami menyiapkan solusi terbaik untuk kebutuhan Anda",
    services: [
      "Basic — konsultasi awal dan panduan saja",
      "Standard — manajemen dokumentasi dan proses lengkap",
      "Comprehensive — solusi layanan lengkap dengan keterlibatan minimal dari pihak Anda",
      "Custom — persyaratan kompleks atau situasi bisnis yang unik"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/id/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
