import type { HeadConfig } from "vitepress"

const DOMAINS = {
  PRODUCTION: "mind.com",
}

const GTM_IDs = {
  prod: "GTM-TV4L6B6W",
  test: "GTM-5GGMB252",
}

/**
 * @see https://docs.usercentrics.com/#/consent-mode
 */
export const gtmHead: HeadConfig[] = [
  [
    "script",
    {},
    `
    (function() {
      // Create dataLayer with type safety
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }

      // Set default consent mode
      gtag("consent", "default", {
        ad_user_data: "denied",
        ad_personalization: "denied", 
        ad_storage: "denied",
        personalization_storage: "denied",
        analytics_storage: "granted",
        functionality_storage: "granted",
        security_storage: "granted",
        wait_for_update: 2000
      });

      gtag("set", "ads_data_redaction", true);

      // Initialize GTM with exact code from official snippet
      const isProd = window.location.hostname === '${DOMAINS.PRODUCTION}';
      const GTM_ID = isProd ? '${GTM_IDs.prod}' : '${GTM_IDs.test}';
      
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',GTM_ID);

      // Add noscript iframe
      if (document.body) {
        const noscript = document.createElement('noscript');
        noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=' + 
          GTM_ID + '" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
        document.body.insertBefore(noscript, document.body.firstChild);
      }
    })();
    `,
  ],
]
