import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"연락처","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"ko/resources/contacts.md","filePath":"i18n/ko/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "ko/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="연락처" tabindex="-1">연락처 <a class="header-anchor" href="#연락처" aria-label="Permalink to &quot;연락처&quot;">​</a></h1><p>UAE에서 사업을 시작하거나 성장시키고 싶으신가요? Golden Fish Corporate Services Provider LLC와 상담하세요 - 회사 설립, PRO 서비스, 비자 지원을 위한 공인 대리인입니다.</p><p><strong>라이센스 정보:</strong></p><ul><li>라이센스 번호: 1414192</li><li>등록 번호: 2411728</li></ul><p><strong>사무실 위치:</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> Dubai, UAE</p><p><strong>연락처:</strong></p><ul><li>이메일: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>전화: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">왜 저희를 선택해야 할까요?</p><p>전문 지식을 갖춘 팀과 맞춤형 서비스에 대한 헌신으로, 고객이 가장 중요한 것 - UAE에서의 비즈니스 성장에 집중할 수 있도록 원활하고 효율적인 경험을 보장합니다.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "문의하기",
    buttonText: "메시지 보내기",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "필요한 지원 수준: *",
    categoryPlaceholderText: "지원 수준을 선택하세요",
    messageLabel: "어떤 도움이 필요하신가요? (권장)",
    messagePlaceholderText: "귀하의 요구사항에 맞는 최적의 솔루션을 준비할 수 있도록 문의 내용을 자세히 알려주세요",
    services: [
      "Basic — 초기 상담 및 안내만 필요",
      "Standard — 완전한 문서 작업 및 프로세스 관리",
      "Comprehensive — 고객 참여를 최소화한 풀 서비스 솔루션",
      "Custom — 복잡한 요구사항 또는 특별한 비즈니스 상황"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ko/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
