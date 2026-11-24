import type { HeadConfig } from "vitepress"

const DOMAINS = {
  PRODUCTION: "goldenfish.ae",
}

const GTM_IDs = {
  prod: "GTM-5V5GW5CC",
  test: "GTM-P9N2ND34",
}

// Where analytics would need a visitor's consent: the European Economic Area, the United Kingdom
// and Switzerland. The site shows no cookie banner (the Usercentrics CMP is gone, owner
// 2026-11-24), so nobody ever answers: analytics_storage stays "denied" there and is "granted"
// everywhere else. Google resolves the visitor's region itself, the most specific default wins.
// The GA4 tags in the container require analytics_storage, so in Europe they do not fire at all.
// The same list mind.com and intermind.com use.
const CONSENT_REQUIRED_REGIONS = [
  ...["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE"],
  ...["IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"],
  ...["IS", "LI", "NO"],
  ...["GF", "GP", "MQ", "RE", "YT", "MF", "AX"],
  ...["GB", "CH"],
]

/**
 * @see https://developers.google.com/tag-platform/security/guides/consent#region-specific-behavior
 */
export const gtmHead: HeadConfig[] = [
  [
    "script",
    {},
    `
    (function() {
      // Создаем dataLayer
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }

      // Европа (ЕЭЗ, Великобритания, Швейцария): всё "denied", спрашивать некому — баннера нет
      gtag("consent", "default", {
        ad_user_data: "denied",
        ad_personalization: "denied",
        ad_storage: "denied",
        analytics_storage: "denied",
        region: ${JSON.stringify(CONSENT_REQUIRED_REGIONS)}
      });

      // Остальной мир: аналитика разрешена, рекламные сигналы выключены
      gtag("consent", "default", {
        ad_user_data: "denied",
        ad_personalization: "denied",
        ad_storage: "denied",
        analytics_storage: "granted"
      });

      // Включаем редактирование данных рекламы по умолчанию
      gtag("set", "ads_data_redaction", true);

      function initGTM() {
        const isProd = window.location.hostname === '${DOMAINS.PRODUCTION}';
        const GTM_ID = isProd ? '${GTM_IDs.prod}' : '${GTM_IDs.test}';

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',GTM_ID);

        const noscript = document.createElement('noscript');
        noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=' +
          GTM_ID + '" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
        document.body.insertBefore(noscript, document.body.firstChild);
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGTM);
      } else {
        initGTM();
      }
    })();
    `,
  ],
]
