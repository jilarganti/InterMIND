import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Свяжитесь с нами","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"ru/resources/contacts.md","filePath":"i18n/ru/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "ru/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="свяжитесь-с-нами" tabindex="-1">Свяжитесь с нами <a class="header-anchor" href="#свяжитесь-с-нами" aria-label="Permalink to &quot;Свяжитесь с нами&quot;">​</a></h1><p>Планируете открыть или развивать бизнес в ОАЭ? Свяжитесь с Golden Fish Corporate Services Provider LLC - вашим зарегистрированным агентом по созданию компаний, PRO-услугам и визовой поддержке.</p><p><strong>Данные лицензии:</strong></p><ul><li>Номер лицензии: 1414192</li><li>Регистрационный номер: 2411728</li></ul><p><strong>Расположение офиса:</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> Dubai, UAE</p><p><strong>Наши контакты:</strong></p><ul><li>Email: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>Телефон: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">Почему выбирают нас?</p><p>Благодаря команде опытных профессионалов и индивидуальному подходу к каждому клиенту, мы обеспечиваем простой и эффективный процесс, позволяя вам сосредоточиться на самом важном – развитии вашего бизнеса в ОАЭ.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "Связаться с нами",
    buttonText: "Отправить сообщение",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "Необходимый уровень поддержки: *",
    categoryPlaceholderText: "Выберите уровень поддержки",
    messageLabel: "Как мы можем помочь? (рекомендуется)",
    messagePlaceholderText: "Пожалуйста, опишите детали вашего запроса, чтобы мы могли подготовить наилучшее решение для ваших потребностей",
    services: [
      "Базовый — только начальная консультация и руководство",
      "Стандартный — полное управление документацией и процессами",
      "Комплексный — полное обслуживание с минимальным участием с вашей стороны",
      "Индивидуальный — сложные требования или уникальная бизнес-ситуация"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ru/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
