import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Liên Hệ Với Chúng Tôi","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"vi/resources/contacts.md","filePath":"i18n/vi/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "vi/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lien-he-voi-chung-toi" tabindex="-1">Liên Hệ Với Chúng Tôi <a class="header-anchor" href="#lien-he-voi-chung-toi" aria-label="Permalink to &quot;Liên Hệ Với Chúng Tôi&quot;">​</a></h1><p>Bạn đang tìm kiếm cơ hội thành lập hoặc phát triển doanh nghiệp tại UAE? Hãy liên hệ với Golden Fish Corporate Services Provider LLC - đại lý đăng ký của bạn cho việc thành lập công ty, dịch vụ PRO và hỗ trợ visa.</p><p><strong>Chi Tiết Giấy Phép:</strong></p><ul><li>Số Giấy Phép: 1414192</li><li>Số Đăng Ký: 2411728</li></ul><p><strong>Địa Chỉ Văn Phòng:</strong><br> City Avenue Building<br> Office 405-070, Port Saeed<br> Dubai, UAE</p><p><strong>Thông Tin Liên Hệ:</strong></p><ul><li>Email: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>Điện thoại: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">Tại Sao Chọn Chúng Tôi?</p><p>Với đội ngũ chuyên gia giàu kinh nghiệm và cam kết cung cấp dịch vụ cá nhân hóa, chúng tôi đảm bảo trải nghiệm suôn sẻ và hiệu quả cho khách hàng, cho phép họ tập trung vào điều quan trọng nhất – phát triển doanh nghiệp tại UAE.</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "Contact Us",
    buttonText: "Gửi tin nhắn cho chúng tôi",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "Mức độ hỗ trợ cần thiết: *",
    categoryPlaceholderText: "Chọn mức độ hỗ trợ của bạn",
    messageLabel: "Chúng tôi có thể giúp gì cho bạn? (khuyến nghị)",
    messagePlaceholderText: "Vui lòng chia sẻ chi tiết yêu cầu để chúng tôi chuẩn bị giải pháp tốt nhất cho nhu cầu của bạn",
    services: [
      "Cơ bản — chỉ tư vấn và hướng dẫn ban đầu",
      "Tiêu chuẩn — quản lý tài liệu và quy trình đầy đủ",
      "Toàn diện — giải pháp dịch vụ trọn gói với sự tham gia tối thiểu từ phía bạn",
      "Tùy chỉnh — yêu cầu phức tạp hoặc tình huống kinh doanh đặc biệt"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/vi/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
