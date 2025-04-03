import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bize Ulaşın","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"tr/resources/contacts.md","filePath":"i18n/tr/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "tr/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bize-ulasın" tabindex="-1">Bize Ulaşın <a class="header-anchor" href="#bize-ulasın" aria-label="Permalink to &quot;Bize Ulaşın&quot;">​</a></h1><p>BAE&#39;de işinizi kurmak veya büyütmek mi istiyorsunuz? Şirket kuruluşu, PRO hizmetleri ve vize desteği için kayıtlı temsilciniz Golden Fish Corporate Services Provider LLC ile iletişime geçin.</p><p><strong>Lisans Bilgileri:</strong></p><ul><li>Lisans No: 1414192</li><li>Sicil No: 2411728</li></ul><p><strong>Ofis Konumu:</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> Dubai, UAE</p><p><strong>İletişim Bilgileri:</strong></p><ul><li>E-posta: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>Telefon: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">Neden Bizi Seçmelisiniz?</p><p>Bilgili profesyonellerden oluşan ekibimiz ve kişiselleştirilmiş hizmet taahhüdümüzle, müşterilerimizin en önemli konuya - BAE&#39;deki işlerini büyütmeye - odaklanabilmeleri için sorunsuz ve verimli bir deneyim sunuyoruz.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "Bize Ulaşın",
    buttonText: "Bize mesaj gönderin",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "Gereken destek seviyesi: *",
    categoryPlaceholderText: "Destek seviyenizi seçin",
    messageLabel: "Size nasıl yardımcı olabiliriz? (önerilen)",
    messagePlaceholderText: "İhtiyaçlarınız için en iyi çözümü hazırlayabilmemiz için lütfen sorgunuzun detaylarını paylaşın",
    services: [
      "Temel — yalnızca ilk danışmanlık ve rehberlik",
      "Standart — eksiksiz dokümantasyon ve süreç yönetimi",
      "Kapsamlı — sizin minimum katılımınızla tam hizmet çözümü",
      "Özel — karmaşık gereksinimler veya benzersiz iş durumu"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/tr/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
