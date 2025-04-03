import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./iStock-2185912341.BjoXrSA2.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UAE Golden Visa | Success Fee Based Service","description":"Premium 10-year residency visa with zero upfront fees - pay only after approval. Full application management with 98% success rate. Free renewal service, government fees only.","frontmatter":{"layout":"home","title":"UAE Golden Visa | Success Fee Based Service","description":"Premium 10-year residency visa with zero upfront fees - pay only after approval. Full application management with 98% success rate. Free renewal service, government fees only.","showSponsors":false,"hero":{"name":"UAE Golden Visa","text":"Payment by results","tagline":"10-year residency. <span class=\\"hl\\">Zero upfront fees</span> - pay only after approval. 98% success rate.","image":{"light":{"src":"/img/Logo.avif","width":"50%"},"dark":{"src":"/img/Logo.avif","width":"50%"},"alt":"Golden Fish logo"}},"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"uae-business/offer/golden-visa/index.md","filePath":"en/uae-business/offer/golden-visa/index.md","lastUpdated":1743582157000}');
const _sfc_main = { name: "uae-business/offer/golden-visa/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FeatureCards = resolveComponent("FeatureCards");
  const _component_BenefitsList = resolveComponent("BenefitsList");
  const _component_ContactFormModal = resolveComponent("ContactFormModal");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_FeatureCards, { features: [
    {
      title: "UAE Golden Visa Benefits",
      items: [
        "10-year validity with the option for renewal upon maintaining qualifying conditions",
        "**No need to enter UAE every 6 months**",
        "100% business ownership permitted",
        "Sponsor family members and unlimited domestic staff",
        "Children sponsorship up to age 25",
        "Parents sponsorship included",
        "No sponsor or employer is required"
      ],
      linkText: "Learn more",
      link: "../../company-registration/golden-visa#key-benefits-of-the-uae-golden-visa",
      icon: {
        light: "/img/iStock-1785818081.avif",
        dark: "/img/iStock-1203821481.avif",
        alt: "Visa Services",
        width: "100%"
      }
    },
    {
      title: "How to Get UAE Golden Visa",
      // details: 'Choose your qualification path:',
      items: [
        "AED 2M investment in UAE properties",
        "AED 2M deposit in UAE investment funds",
        "Business with AED 2M capital",
        "AED 250K annual FTA contribution",
        "Skilled Professionals",
        "Geniuses of talent"
      ],
      linkText: "Learn more",
      link: "../../company-registration/golden-visa#uae-golden-visa-eligibility-and-requirements",
      icon: {
        light: "/img/iStock-1333000394.avif",
        dark: "/img/iStock-584576538.avif",
        alt: "Visa Services",
        width: "10%"
      }
    },
    {
      title: "Golden Visa Process",
      bullet: "✓",
      items: [
        "Initial eligibility assessment",
        "Document preparation and verification",
        "Medical examination and biometrics",
        "Application Submission and Processing",
        "Emirates ID and visa issuance",
        "Family visa sponsorship (optional)"
      ],
      linkText: "Learn more",
      link: "../../company-registration/golden-visa#uae-golden-visa-application-process",
      icon: {
        light: "/img/ILONMASKID.webp",
        dark: "/img/ILONMASKID.webp",
        alt: "Visa Services",
        width: "100%"
      }
    }
  ] }, null, _parent));
  _push(`<h2 id="why-choose-golden-fish" tabindex="-1">Why Choose Golden Fish <a class="header-anchor" href="#why-choose-golden-fish" aria-label="Permalink to &quot;Why Choose Golden Fish&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_BenefitsList, { features: [
    {
      icon: "💰",
      title: "Success-Based Fees",
      text: "**No payment until your Golden Visa is approved.** Complete transparency with no hidden costs."
    },
    {
      icon: "📈",
      title: "Proven Success Rate",
      text: "98% approval rate with hundreds of Golden Visas issued through our premium processing."
    },
    {
      icon: "📋",
      title: "Complete Management",
      text: "End-to-end handling from documentation to visa issuance, taking care of all details."
    },
    {
      icon: "👨‍💼",
      title: "Local UAE Expertise",
      text: "Dedicated specialists in Dubai provide expert guidance through every step of the process."
    },
    {
      icon: "🔍",
      title: "Premium Processing",
      text: "Direct communication with authorities and fast-track channels for quicker approvals."
    },
    {
      icon: "🔄",
      title: "Renewal Support",
      text: "Complimentary visa renewal assistance with **zero agency fees** - government charges only."
    }
  ] }, null, _parent));
  _push(`<h2 id="book-a-free-consultation-to-check-your-eligibility-and-discuss-your-options" tabindex="-1">Book a free consultation to check your eligibility and discuss your options. <a class="header-anchor" href="#book-a-free-consultation-to-check-your-eligibility-and-discuss-your-options" aria-label="Permalink to &quot;Book a free consultation to check your eligibility and discuss your options.&quot;">​</a></h2><video autoplay muted playsinline style="${ssrRenderStyle({ "padding": "80px" })}"><source${ssrRenderAttr("src", _imports_0)} type="video/mp4"></video>`);
  _push(ssrRenderComponent(_component_ContactFormModal, {
    formName: "Golden Visa [offer]",
    buttonText: "Get a free consultation",
    categoryLabel: "Required support level: *",
    categoryPlaceholderText: "Choose your support level",
    messageLabel: "Help us prepare for your consultation (recommended)",
    messagePlaceholderText: "Tell us about your investment preferences, family members, timeline, or any specific questions",
    services: [
      "Basic — essential documents and consultations only",
      "Standard — complete documentation and guidance through main stages",
      "Comprehensive — full-service process management with minimal involvement from you",
      "Custom — need to discuss specific details and special requirements"
    ]
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/uae-business/offer/golden-visa/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
