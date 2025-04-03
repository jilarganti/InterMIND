import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Services de Formation d'Entreprise aux EAU","description":"Services experts de formation et de support d'entreprise aux EAU. Configuration d'entreprise, services bancaires, fiscaux, juridiques et solutions de visa. Paiement uniquement après approbation.","frontmatter":{"layout":"home","title":"Services de Formation d'Entreprise aux EAU","description":"Services experts de formation et de support d'entreprise aux EAU. Configuration d'entreprise, services bancaires, fiscaux, juridiques et solutions de visa. Paiement uniquement après approbation.","showSponsors":false,"hero":{"name":"EAU : Votre Havre Financier Sécurisé","tagline":"Support Commercial Complet : Configuration d'Entreprise, Visas, Services Bancaires. <span class='hl'>Pas de succès — pas de frais</span>.","actions":[{"theme":"brand","text":"Obtenir une Consultation Gratuite","link":"/resources/contacts"}],"image":{"light":{"src":"/img/Logo.avif","width":"40%"},"dark":{"src":"/img/Logo.avif","width":"40%"},"alt":"Logo Golden Fish"}},"head":[["meta",{"name":"robots","content":"noindex"}]]},"headers":[],"params":{},"relativePath":"fr/index.md","filePath":"i18n/fr/index.md","lastUpdated":1743688257000}`);
const _sfc_main = { name: "fr/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FeatureCards = resolveComponent("FeatureCards");
  const _component_BenefitsList = resolveComponent("BenefitsList");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_FeatureCards, { features: [
    {
      title: "Guide de Création d'Entreprise",
      details: "Guide complet pour créer des entreprises en **Free Zone, offshore, Mainland, succursale**.",
      items: [
        "Propriété étrangère à 100% disponible en Free Zones et Mainland",
        "Taux d'imposition bas - seulement 9% d'impôt sur les sociétés",
        "Pas de contrôle des changes - rapatriement facile des capitaux"
      ],
      linkText: "Learn more",
      link: "/uae-business/offer/company-registration/",
      icon: {
        light: "/img/iStock-2051326997.avif",
        dark: "/img/iStock-1448478309.jpg",
        alt: "Guide de création d'entreprise"
      }
    },
    {
      title: "Ouverture de Compte Bancaire",
      details: "Ouvrez facilement des comptes bancaires professionnels ou personnels auprès des banques de confiance des EAU.",
      items: [
        "Services PRO complets pour les approbations gouvernementales",
        "Configuration complète du package bancaire",
        "**Taux de réussite de 96%**"
      ],
      linkText: "Learn more",
      link: "/uae-business/offer/banking/",
      icon: {
        light: "/img/iStock-2153786564.avif",
        dark: "/img/iStock-2166793628.avif",
        alt: "Services bancaires"
      }
    },
    {
      title: "Golden Visa et Résidence",
      details: "Obtenez un **Golden Visa** des EAU pour une résidence à long terme avec un processus de demande simplifié.",
      items: [
        "**Pas besoin d'entrer aux EAU tous les 6 mois**",
        "Validité de 10 ans avec option de renouvellement sous conditions qualifiantes",
        "Taux de réussite de 92%"
      ],
      linkText: "Learn more",
      link: "/uae-business/offer/golden-visa/",
      icon: {
        light: "/img/iStock-1312241253.avif",
        dark: "/img/ILONMASKID.webp",
        alt: "Services de visa"
      }
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_FeatureCards, { features: [
    {
      title: "Services de Conformité",
      details: "Nos experts vous guident à travers les exigences réglementaires complexes des EAU, y compris les rapports ESR et les déclarations UBO.",
      items: [],
      linkText: "Learn more",
      link: "/uae-business/company-registration/Protect-Your-Business",
      icon: {
        light: "/img/iStock-1299393716.avif",
        dark: "/img/iStock-2149731304.avif",
        alt: "Services de conformité"
      }
    },
    {
      title: "Impôt sur les Sociétés et TVA",
      details: "Conseils d'experts pour assurer la conformité aux obligations d'impôt sur les sociétés et de TVA auprès de l'Autorité Fiscale Fédérale (FTA).",
      items: [],
      linkText: "Learn more",
      link: "/uae-business/company-registration/accounting-legal",
      icon: {
        light: "/img/iStock-1018285934.avif",
        dark: "/img/iStock-584576538.avif",
        alt: "Services fiscaux"
      }
    },
    {
      title: "Services Juridiques",
      details: "L'équipe juridique conseille sur les lois des EAU concernant les fusions-acquisitions, la restructuration d'entreprise, le financement et la résolution des litiges.",
      items: [],
      linkText: "Learn more",
      link: "/uae-business/company-registration/Protect-Your-Business",
      icon: {
        light: "/img/iStock-650045508.avif",
        dark: "/img/iStock-1498627598.avif",
        alt: "Services juridiques"
      }
    },
    {
      title: "Comptabilité et Paie",
      details: "Nos comptables gèrent les finances, assurant la comptabilité, le rapprochement, la paie et le support d'audit, économisant les coûts de recrutement.",
      items: [],
      linkText: "Learn more",
      link: "/resources/contacts",
      icon: {
        light: "/img/iStock-1022793868.avif",
        dark: "/img/iStock-1320130292.jpg",
        alt: "Services comptables"
      }
    }
  ] }, null, _parent));
  _push(`<h2 id="pourquoi-choisir-golden-fish" tabindex="-1">Pourquoi Choisir Golden Fish <a class="header-anchor" href="#pourquoi-choisir-golden-fish" aria-label="Permalink to &quot;Pourquoi Choisir Golden Fish&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_BenefitsList, { features: [
    {
      icon: "🏢",
      title: "Expertise Locale aux EAU",
      text: "Des spécialistes dédiés à Dubai fournissent des conseils d'experts à chaque étape du processus."
    },
    {
      icon: "📊",
      title: "Taux de Réussite Prouvé",
      text: "Plus de 90% de taux d'approbation avec des centaines de visas, comptes bancaires et enregistrements d'entreprises délivrés via notre traitement premium."
    },
    {
      icon: "💸",
      title: "**Frais Basés sur le Succès**",
      text: "[Payez uniquement après approbation](/uae-business/benefits/success-based-fees). Transparence totale sans frais cachés."
    }
  ] }, null, _parent));
  _push(`<h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><details class="details custom-block"><summary>FAQ sur la création d&#39;entreprise aux EAU</summary><h3 id="exigences-generales-de-propriete" tabindex="-1">Exigences générales de propriété <a class="header-anchor" href="#exigences-generales-de-propriete" aria-label="Permalink to &quot;Exigences générales de propriété&quot;">​</a></h3><p><strong>Y aura-t-il des restrictions sur la propriété si des étrangers créent une entreprise aux EAU ?</strong></p><p>Certaines entités commerciales des EAU, comme celles impliquées dans des secteurs stratégiques spécifiques, exigeront que les clients nomment un ou plusieurs actionnaires émiratis. Par conséquent, il est essentiel de choisir l&#39;entité commerciale optimale pour répondre à vos besoins lors de la création d&#39;une entreprise aux EAU.</p><p><strong>Mon entreprise peut-elle être détenue à 100 % par des étrangers ?</strong></p><p>Oui, la plupart des activités commerciales permettent une propriété étrangère à 100 %.</p><h3 id="enregistrement-d-entreprise" tabindex="-1">Enregistrement d&#39;entreprise <a class="header-anchor" href="#enregistrement-d-entreprise" aria-label="Permalink to &quot;Enregistrement d&#39;entreprise&quot;">​</a></h3><p><strong>Comment enregistrer une entreprise dans la Free Zone des EAU ?</strong></p><p>Pour l&#39;incorporation d&#39;une entité en Free Zone aux EAU, Golden Fish va :</p><ol><li>Obtenir les autorisations nécessaires auprès des autorités compétentes.</li><li>Réserver le nom de l&#39;entreprise.</li><li>Préparer les documents d&#39;incorporation.</li><li>Faire notarier les documents aux tribunaux publics.</li><li>Faire la demande de licence commerciale.</li><li>Enregistrer l&#39;entreprise pour la TVA (si nécessaire).</li><li>Obtenir des visas de travail pour les clients et leurs employés.</li></ol><p><strong>Quels sont les avantages de créer une entité en Free Zone aux EAU ?</strong></p><p>Les entreprises en Free Zone aux EAU offrent plusieurs avantages, notamment :</p><ol><li>Pas d&#39;obligation d&#39;avoir un actionnaire résident, c&#39;est-à-dire qu&#39;une entreprise FZ peut être détenue à 100 % par des étrangers.</li><li>Pas d&#39;obligation d&#39;embaucher du personnel.</li><li>Pas de droits de douane sur les marchandises entrant ou sortant de la zone.</li><li>Infrastructure de haute qualité.</li></ol><h3 id="directeurs-et-actionnaires" tabindex="-1">Directeurs et actionnaires <a class="header-anchor" href="#directeurs-et-actionnaires" aria-label="Permalink to &quot;Directeurs et actionnaires&quot;">​</a></h3><p><strong>Combien de directeurs doivent être nommés pour s&#39;enregistrer dans une Free Zone des EAU ?</strong></p><p>Un seul directeur est requis pour former une entreprise en Free Zone aux EAU.</p><p><strong>Combien d&#39;actionnaires sont nécessaires pour s&#39;incorporer dans une Free Zone des EAU ?</strong></p><p>Un seul actionnaire est requis pour créer une entité en Free Zone aux EAU.</p><p><strong>Combien d&#39;actionnaires sont nécessaires pour une société offshore aux EAU ?</strong></p><p>Un seul actionnaire est requis pour créer une société offshore aux EAU.</p><p><strong>Un directeur résident est-il requis ?</strong></p><p>Non.</p><p><strong>Les détails des actionnaires/directeurs sont-ils accessibles au public ?</strong></p><p>Non.</p><h3 id="logistique-et-locaux" tabindex="-1">Logistique et locaux <a class="header-anchor" href="#logistique-et-locaux" aria-label="Permalink to &quot;Logistique et locaux&quot;">​</a></h3><p><strong>Dois-je me rendre aux EAU pour y incorporer une entreprise ?</strong></p><p>Non, Golden Fish peut légalement incorporer votre entreprise aux EAU sans que vous ayez besoin de vous déplacer.</p><p><strong>Dois-je louer des locaux pour mon entreprise ?</strong></p><p>Les exigences diffèrent selon le type d&#39;entreprise :</p><table tabindex="0"><thead><tr><th>Type d&#39;entreprise</th><th>Exigence de bureau</th></tr></thead><tbody><tr><td>Entreprise Free Zone</td><td>Un contrat de location de bureaux ou un flexi-desk est requis avant l&#39;incorporation.</td></tr><tr><td>Entreprise Mainland</td><td>Seule une adresse virtuelle ou enregistrée est nécessaire.</td></tr><tr><td>Entreprise Offshore</td><td>Seule une adresse virtuelle ou enregistrée est nécessaire.</td></tr></tbody></table><p>Ce tableau comparatif aide à clarifier les différences entre les exigences pour les entreprises Free Zone, Mainland et offshore.</p><h3 id="conformite-et-fiscalite" tabindex="-1">Conformité et fiscalité <a class="header-anchor" href="#conformite-et-fiscalite" aria-label="Permalink to &quot;Conformité et fiscalité&quot;">​</a></h3><p><strong>Serai-je tenu d&#39;obtenir un audit complet si je crée une petite entreprise aux EAU ?</strong></p><p>Oui, la plupart des entités devront présenter des états financiers audités.</p><p><strong>Quelles sont les implications fiscales de la création d&#39;une entreprise aux EAU ?</strong></p><p>L&#39;impôt sur les sociétés (CIT) a été mis en place aux EAU au taux standard de 9 %. De plus, selon le volume et la nature de l&#39;activité, certaines entreprises sont assujetties à la TVA (5 %) et/ou aux droits de douane. Des secteurs spécifiques, comme le pétrole et le gaz et les succursales de banques étrangères, peuvent avoir des considérations ou exemptions fiscales particulières.</p><p><strong>Une entreprise des EAU doit-elle soumettre une déclaration fiscale annuelle et/ou un état financier ?</strong></p><p>Oui, toutes les entreprises aux EAU sont tenues de soumettre des comptes audités annuels au gouvernement.</p><h3 id="solutions-bancaires" tabindex="-1">Solutions bancaires <a class="header-anchor" href="#solutions-bancaires" aria-label="Permalink to &quot;Solutions bancaires&quot;">​</a></h3><p><strong>Quelles banques sont recommandées pour les solutions bancaires aux entreprises des EAU ?</strong></p><p>Golden Fish recommande plusieurs options de banques locales aux EAU, notamment :</p><ol><li>Emirates NBD</li><li>First Abu Dhabi Bank</li><li>Abu Dhabi Commercial Bank</li><li>Dubai Islamic Bank</li><li>Mashreq Bank</li></ol><p>Ces banques sont connues pour leur bon service client, ce qui est essentiel lors du démarrage d&#39;une nouvelle entreprise aux EAU.</p><p><strong>Comment ouvrir un compte bancaire offshore aux EAU ?</strong></p><p>Les clients n&#39;auront pas besoin d&#39;enregistrer une entreprise locale pour ouvrir un compte bancaire offshore aux EAU. Cependant, les procédures KYC seront plus strictes que pour l&#39;ouverture d&#39;un compte bancaire pour une entreprise résidente. Des documents d&#39;attestation seront également requis. Veuillez consulter <a href="./uae-business/company-registration/banking">notre guide d&#39;ouverture de compte bancaire pour les entreprises des EAU</a> pour plus d&#39;informations détaillées.</p><p><strong>Golden Fish peut-il aider avec les services bancaires islamiques aux EAU ?</strong></p><p>Oui, Golden Fish peut aider les clients avec leurs besoins en matière de services bancaires islamiques.</p><h3 id="visas-et-residence" tabindex="-1">Visas et résidence <a class="header-anchor" href="#visas-et-residence" aria-label="Permalink to &quot;Visas et résidence&quot;">​</a></h3><p><strong>Quelle est la durée de validité d&#39;un visa de résidence d&#39;affaires aux EAU ?</strong></p><p>Les permis de résidence d&#39;affaires aux EAU sont généralement délivrés pour 2 à 3 ans.</p></details></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("i18n/fr/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
