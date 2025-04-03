import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"お問い合わせ","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"ja/resources/contacts.md","filePath":"i18n/ja/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "ja/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="お問い合わせ" tabindex="-1">お問い合わせ <a class="header-anchor" href="#お問い合わせ" aria-label="Permalink to &quot;お問い合わせ&quot;">​</a></h1><p>UAEでビジネスを立ち上げたい、または成長させたいとお考えですか？Golden Fish Corporate Services Provider LLC にご連絡ください。会社設立、PRO サービス、ビザ支援のための公認エージェントです。</p><p><strong>ライセンス情報：</strong></p><ul><li>ライセンス番号：1414192</li><li>登録番号：2411728</li></ul><p><strong>オフィス所在地：</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> Dubai, UAE</p><p><strong>連絡先：</strong></p><ul><li>メール：info@goldenfish.ae</li><li>電話：+971 058 574 88 06</li><li>WhatsApp：+971 058 574 88 06</li><li>Telegram：@goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">当社を選ぶ理由</p><p>知識豊富な専門家チームと個別対応へのこだわりにより、クライアントの皆様がUAEでのビジネス成長に集中できるよう、スムーズで効率的なサービスを提供いたします。</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "お問い合わせ",
    buttonText: "メッセージを送信",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "必要なサポートレベル: *",
    categoryPlaceholderText: "サポートレベルを選択してください",
    messageLabel: "ご用件をお聞かせください（推奨）",
    messagePlaceholderText: "最適なソリューションをご提案できるよう、お問い合わせ内容の詳細をご記入ください",
    services: [
      "ベーシック — 初期相談とガイダンスのみ",
      "スタンダード — 完全な書類作成とプロセス管理",
      "コンプリヘンシブ — お客様の関与を最小限に抑えたフルサービスソリューション",
      "カスタム — 複雑な要件または特殊なビジネス状況"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ja/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
