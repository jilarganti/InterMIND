import { useSSRContext, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"footer":false,"next":false,"lastUpdated":false,"navbar":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"uk/chat.md","filePath":"i18n/uk/chat.md"}');
const __default__ = { name: "uk/chat.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const chatPrompts = [
      // Бізнес-послуги (перший блок)
      { id: "1", text: "Реєстрація компанії в ОАЕ", category: "business" },
      { id: "2", text: "Створення Mainland компанії", category: "business" },
      { id: "3", text: "Реєстрація компанії у Free Zone", category: "business" },
      { id: "4", text: "Створення офшорної компанії", category: "business" },
      { id: "5", text: "Фріланс віза в ОАЕ", category: "business" },
      { id: "6", text: "Бізнес-ліцензія в Дубаї", category: "business" },
      { id: "7", text: "Вимоги до торгової ліцензії в ОАЕ", category: "business" },
      { id: "23", text: "Створення бізнесу в ОАЕ", category: "business" },
      { id: "24", text: "Вільні економічні зони Дубая", category: "business" },
      { id: "25", text: "Реєстрація компанії в ОАЕ", category: "business" },
      { id: "26", text: "Фріланс віза в ОАЕ", category: "business" },
      // Візи та імміграція
      { id: "8", text: "Подання на Golden Visa в ОАЕ", category: "visa" },
      { id: "9", text: "Робоча віза в ОАЕ", category: "visa" },
      { id: "10", text: "Спонсорство сімейної візи в ОАЕ", category: "visa" },
      { id: "11", text: "Вимоги до медичного тесту для візи", category: "visa" },
      { id: "12", text: "Процес отримання резидентської візи в ОАЕ", category: "visa" },
      { id: "27", text: "Візові вимоги ОАЕ", category: "visa" },
      // Юридичні та документи
      { id: "13", text: "Подання на Emirates ID", category: "legal" },
      { id: "14", text: "Легалізація документів в ОАЕ", category: "legal" },
      { id: "15", text: "Довіреність в ОАЕ", category: "legal" },
      { id: "16", text: "Перевірка бізнес-контрактів в ОАЕ", category: "legal" },
      { id: "40", text: "Продовження Emirates ID", category: "legal" },
      // Фінансові послуги
      { id: "17", text: "Корпоративний банківський рахунок в ОАЕ", category: "finance" },
      { id: "18", text: "Реєстрація податків (ПДВ) в ОАЕ", category: "finance" },
      { id: "19", text: "Бухгалтерські послуги в ОАЕ", category: "finance" },
      { id: "20", text: "Економічні нормативи в ОАЕ", category: "finance" },
      { id: "41", text: "Банківські послуги в ОАЕ", category: "finance" },
      // Нерухомість та послуги
      { id: "21", text: "Інвестиції в нерухомість ОАЕ", category: "property" },
      { id: "22", text: "Оренда офісів в Дубаї", category: "property" },
      // Охорона здоров'я
      { id: "47", text: "Медичне страхування в ОАЕ", category: "healthcare" },
      { id: "48", text: "Найкращі лікарні Дубая", category: "healthcare" },
      { id: "49", text: "Медичний огляд в ОАЕ", category: "healthcare" },
      // Туризм та розваги (в кінці)
      { id: "28", text: "Туристичні пам'ятки Дубая", category: "travel" },
      { id: "29", text: "Expo City Dubai", category: "attractions" },
      { id: "30", text: "Квитки в Dubai Frame", category: "attractions" },
      { id: "31", text: "Квитки в Burj Khalifa", category: "attractions" },
      { id: "32", text: "Museum of the Future", category: "attractions" },
      { id: "33", text: "Abu Dhabi Louvre", category: "attractions" },
      { id: "34", text: "Ferrari World Abu Dhabi", category: "attractions" },
      { id: "35", text: "Шопінг в Dubai Mall", category: "shopping" }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/uk/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
