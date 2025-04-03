import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"footer":false,"next":false,"lastUpdated":false,"navbar":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"ja/chat.md","filePath":"i18n/ja/chat.md"}');
const __default__ = { name: "ja/chat.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const chatPrompts = [
      // ビジネスサービス（最初のブロック）
      { id: "1", text: "UAEでの会社登録", category: "business" },
      { id: "2", text: "Mainland会社設立", category: "business" },
      { id: "3", text: "Free Zone会社登録", category: "business" },
      { id: "4", text: "オフショア会社設立", category: "business" },
      { id: "5", text: "UAEフリーランスビザ", category: "business" },
      { id: "6", text: "ドバイビジネスライセンス", category: "business" },
      { id: "7", text: "UAE貿易ライセンス要件", category: "business" },
      { id: "23", text: "UAE事業設立", category: "business" },
      { id: "24", text: "ドバイFree Zone", category: "business" },
      { id: "25", text: "UAE会社登録", category: "business" },
      { id: "26", text: "UAEフリーランスビザ", category: "business" },
      // ビザと移民
      { id: "8", text: "UAE Golden Visa申請", category: "visa" },
      { id: "9", text: "UAE就労ビザ", category: "visa" },
      { id: "10", text: "UAE家族ビザスポンサーシップ", category: "visa" },
      { id: "11", text: "ビザ健康診断要件", category: "visa" },
      { id: "12", text: "UAE居住ビザ手続き", category: "visa" },
      { id: "27", text: "UAEビザ要件", category: "visa" },
      // 法務と文書
      { id: "13", text: "Emirates ID申請", category: "legal" },
      { id: "14", text: "UAE文書認証", category: "legal" },
      { id: "15", text: "UAE委任状", category: "legal" },
      { id: "16", text: "UAEビジネス契約書審査", category: "legal" },
      { id: "40", text: "Emirates ID更新", category: "legal" },
      // 金融サービス
      { id: "17", text: "UAE法人銀行口座", category: "finance" },
      { id: "18", text: "UAE税務登録（VAT）", category: "finance" },
      { id: "19", text: "UAE会計サービス", category: "finance" },
      { id: "20", text: "UAE Economic Substance Regulations", category: "finance" },
      { id: "41", text: "UAE銀行サービス", category: "finance" },
      // 不動産とサービス
      { id: "21", text: "UAE不動産投資", category: "property" },
      { id: "22", text: "ドバイオフィス賃貸", category: "property" },
      // 医療
      { id: "47", text: "UAE医療保険", category: "healthcare" },
      { id: "48", text: "ドバイの優良病院", category: "healthcare" },
      { id: "49", text: "UAE健康診断", category: "healthcare" },
      // 観光とエンターテイメント（最後）
      { id: "28", text: "ドバイ観光スポット", category: "travel" },
      { id: "29", text: "Expo City Dubai", category: "attractions" },
      { id: "30", text: "Dubai Frameチケット", category: "attractions" },
      { id: "31", text: "Burj Khalifaチケット", category: "attractions" },
      { id: "32", text: "Museum of the Future", category: "attractions" },
      { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
      { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
      { id: "35", text: "Dubai Mallショッピング", category: "shopping" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/ja/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
