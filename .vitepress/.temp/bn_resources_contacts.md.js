import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"যোগাযোগ করুন","description":"","frontmatter":{"footer":false,"sidebar":false,"aside":false,"next":false,"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"bn/resources/contacts.md","filePath":"i18n/bn/resources/contacts.md","lastUpdated":1743313981000}');
const _sfc_main = { name: "bn/resources/contacts.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="যোগাযোগ-করুন" tabindex="-1">যোগাযোগ করুন <a class="header-anchor" href="#যোগাযোগ-করুন" aria-label="Permalink to &quot;যোগাযোগ করুন&quot;">​</a></h1><p>UAE-তে আপনার ব্যবসা প্রতিষ্ঠা বা বৃদ্ধি করতে চান? Golden Fish Corporate Services Provider LLC-এর সাথে যোগাযোগ করুন - কোম্পানি গঠন, PRO পরিষেবা এবং ভিসা সহায়তার জন্য আপনার নিবন্ধিত এজেন্ট।</p><p><strong>লাইসেন্সের বিবরণ:</strong></p><ul><li>লাইসেন্স নং: 1414192</li><li>রেজিস্টার নং: 2411728</li></ul><p><strong>অফিসের ঠিকানা:</strong><br> সিটি এভিনিউ বিল্ডিং<br> অফিস 405-070, পোর্ট সাঈদ<br> দুবাই, UAE</p><p><strong>যোগাযোগ করুন:</strong></p><ul><li>ইমেইল: <a href="mailto:info@goldenfish.ae" target="_blank" rel="noreferrer">info@goldenfish.ae</a></li><li>ফোন: +971 058 574 88 06</li><li>WhatsApp: +971 058 574 88 06</li><li>Telegram: @goldenfish_ae</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">আমাদের কেন বেছে নেবেন?</p><p>জ্ঞানী পেশাদারদের একটি দল এবং ব্যক্তিগতকৃত পরিষেবার প্রতি প্রতিশ্রুতির মাধ্যমে, আমরা ক্লায়েন্টদের জন্য একটি সহজ ও দক্ষ অভিজ্ঞতা নিশ্চিত করি, যা তাদেরকে সবচেয়ে গুরুত্বপূর্ণ বিষয়ে মনোনিবেশ করতে সাহায্য করে - UAE-তে তাদের ব্যবসা বৃদ্ধি করা।</p></div>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "যোগাযোগ করুন",
    buttonText: "আমাদের একটি বার্তা পাঠান",
    formStyle: "display: block; margin: 2rem auto;",
    categoryLabel: "প্রয়োজনীয় সহায়তার স্তর: *",
    categoryPlaceholderText: "আপনার সহায়তার স্তর বেছে নিন",
    messageLabel: "আমরা কিভাবে সাহায্য করতে পারি? (সুপারিশকৃত)",
    messagePlaceholderText: "আপনার প্রয়োজনের জন্য সর্বোত্তম সমাধান প্রস্তুত করতে আমাদের সাহায্য করার জন্য অনুগ্রহ করে আপনার অনুসন্ধানের বিবরণ শেয়ার করুন",
    services: [
      "বেসিক — শুধুমাত্র প্রাথমিক পরামর্শ এবং নির্দেশনা",
      "স্ট্যান্ডার্ড — সম্পূর্ণ ডকুমেন্টেশন এবং প্রক্রিয়া ব্যবস্থাপনা",
      "ব্যাপক — আপনার পক্ষ থেকে সর্বনিম্ন জড়িত থেকে সম্পূর্ণ-পরিষেবা সমাধান",
      "কাস্টম — জটিল প্রয়োজনীয়তা বা অনন্য ব্যবসায়িক পরিস্থিতি"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/bn/resources/contacts.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contacts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  contacts as default
};
