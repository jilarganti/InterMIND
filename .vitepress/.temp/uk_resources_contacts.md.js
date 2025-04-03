import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Зв'яжіться з нами","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"uk/resources/contacts.md","filePath":"i18n/uk/resources/contacts.md","lastUpdated":1743313981000}`);
const _sfc_main = { name: "uk/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="зв-яжіться-з-нами" tabindex="-1">Зв&#39;яжіться з нами <a class="header-anchor" href="#зв-яжіться-з-нами" aria-label="Permalink to &quot;Зв&#39;яжіться з нами&quot;">​</a></h1><p>Плануєте відкрити чи розвивати бізнес в ОАЕ? Зв&#39;яжіться з Golden Fish Corporate Services Provider LLC - вашим зареєстрованим агентом з реєстрації компаній, PRO-послуг та візової підтримки.</p><p><strong>Дані ліцензії:</strong></p><ul><li>Номер ліцензії: 1414192</li><li>Реєстраційний номер: 2411728</li></ul><p><strong>Розташування офісу:</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> Dubai, UAE</p><p><strong>Наші контакти:</strong></p><ul><li>Email: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>Телефон: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">Чому обирають нас?</p><p>Маючи команду досвідчених професіоналів та індивідуальний підхід до кожного клієнта, ми забезпечуємо плавний та ефективний процес, дозволяючи клієнтам зосередитися на найважливішому – розвитку свого бізнесу в ОАЕ.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "Зв'яжіться з нами",
    buttonText: "Надіслати повідомлення",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "Необхідний рівень підтримки: *",
    categoryPlaceholderText: "Оберіть рівень підтримки",
    messageLabel: "Чим ми можемо допомогти? (рекомендовано)",
    messagePlaceholderText: "Будь ласка, поділіться деталями вашого запиту, щоб ми могли підготувати найкраще рішення для ваших потреб",
    services: [
      "Базовий — тільки початкова консультація та рекомендації",
      "Стандартний — повне управління документацією та процесами",
      "Комплексний — повний спектр послуг з мінімальним залученням з вашого боку",
      "Індивідуальний — складні вимоги або унікальна бізнес-ситуація"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/uk/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
