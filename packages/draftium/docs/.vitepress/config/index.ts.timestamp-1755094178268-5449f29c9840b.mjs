// docs/.vitepress/config/index.ts
import { defineConfig as defineConfig4 } from "file:///Users/kingwww/VSCode/GoldenFishProject/node_modules/.pnpm/vitepress@1.6.4_@algolia+client-search@5.35.0_@types+node@22.17.1_postcss@8.5.6_react@1_6f526adc2f8ef26978e7fc28c2b35a58/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/config/shared.ts
import { defineConfig } from "file:///Users/kingwww/VSCode/GoldenFishProject/node_modules/.pnpm/vitepress@1.6.4_@algolia+client-search@5.35.0_@types+node@22.17.1_postcss@8.5.6_react@1_6f526adc2f8ef26978e7fc28c2b35a58/node_modules/vitepress/dist/node/index.js";
import markdownItFootnote from "file:///Users/kingwww/VSCode/GoldenFishProject/node_modules/.pnpm/markdown-it-footnote@4.0.0/node_modules/markdown-it-footnote/index.mjs";

// docs/.vitepress/config/gtm.config.ts
var GTM_IDs = {
  prod: "GTM-5GGMB252",
  test: "GTM-5GGMB252"
};
var GTM_ID_TO_USE = process.env.VERCEL_ENV === "production" ? GTM_IDs.prod : GTM_IDs.test;
var gtmHeadScript = [
  [
    "script",
    {},
    `
    (function() {
      // Google Tag Manager main script
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID_TO_USE}');
    })();
    `
  ]
];
var gtmHeadNoScript = [
  [
    "noscript",
    {},
    `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID_TO_USE}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
  ]
];

// docs/.vitepress/config/shared.ts
import llmstxt from "file:///Users/kingwww/VSCode/GoldenFishProject/node_modules/.pnpm/vitepress-plugin-llms@1.7.2/node_modules/vitepress-plugin-llms/dist/index.js";
var hostUrl = "https://i14n.com";
var NOINDEX_PAGES = ["exp", "chat", "/company/", "promo/imind"];
var RTL_LOCALES = ["ar", "fa", "ur"];
var UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "campaign_id"];
var OAUTH_PROVIDER_URL = "https://id.inter.mind.com/realms/vca";
var APP_BASE_URL = "https://inter.mind.com";
var OAUTH_CLIENT_ID = "vca";
var isProduction = process.env.VERCEL_ENV === "production";
var vercelUrl = process.env.VERCEL_URL || process.env.VERCEL_BRANCH_URL;
var baseUrl = vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000";
var shared = defineConfig({
  title: "DRAFTIUM",
  // titleTemplate: "InterMind",
  // srcDir: "./docs",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  rewrites: {
    "en/:rest*": ":rest*",
    "i18n/:locale/:rest*": ":locale/:rest*"
  },
  transformPageData(pageData, ctx) {
    const pagePath = pageData.relativePath.replace(/\.md$/, "").replace(/index$/, "");
    pageData.frontmatter.head ??= [];
    pageData.params = {};
    const locale = pagePath.split("/")[0];
    if (RTL_LOCALES.includes(locale)) {
      pageData.frontmatter.dir = "rtl";
    }
    if (NOINDEX_PAGES.some((path) => pagePath.includes(path)) || !isProduction) {
      pageData.frontmatter.head.push(["meta", { name: "robots", content: "noindex" }]);
    }
    if (typeof window !== "undefined" && window.location.search) {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        UTM_PARAMS.forEach((param) => {
          const value = urlParams.get(param);
          if (value) {
            pageData.params[param] = value;
          }
        });
      } catch (e) {
        console.error("Error extracting query parameters:", e);
      }
    }
  },
  markdown: {
    config: (md) => {
      md.use(markdownItFootnote);
    }
  },
  vite: {
    define: {
      "import.meta.env.VITE_IS_PROD": isProduction,
      "import.meta.env.VITE_BASE_URL": JSON.stringify(baseUrl),
      "import.meta.env.VITE_OAUTH_PROVIDER_URL": JSON.stringify(OAUTH_PROVIDER_URL),
      "import.meta.env.VITE_OAUTH_CLIENT_ID": JSON.stringify(OAUTH_CLIENT_ID),
      "import.meta.env.VITE_APP_BASE_URL": JSON.stringify(APP_BASE_URL)
    },
    server: {
      proxy: {
        "/api": { target: baseUrl, changeOrigin: true }
      }
    },
    plugins: [
      isProduction && llmstxt({
        workDir: "en",
        ignoreFiles: ["index.md"]
      })
    ]
  },
  sitemap: {
    hostname: hostUrl,
    // Убираем страницы noindex из sitemap.xml
    transformItems: (items) => items.filter((item) => !NOINDEX_PAGES.some((path) => item.url.includes(path)))
  },
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { name: "theme-color", content: "#dd9144" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "InterMIND" }],
    ["meta", { property: "og:url", content: hostUrl + "/" }],
    ...gtmHeadScript,
    ...gtmHeadNoScript
  ],
  themeConfig: {
    logo: { light: "/logo.svg", dark: "/logo.svg" }
  }
});

// docs/.vitepress/config/en.ts
import { defineConfig as defineConfig2 } from "file:///Users/kingwww/VSCode/GoldenFishProject/node_modules/.pnpm/vitepress@1.6.4_@algolia+client-search@5.35.0_@types+node@22.17.1_postcss@8.5.6_react@1_6f526adc2f8ef26978e7fc28c2b35a58/node_modules/vitepress/dist/node/index.js";
var BASE_PATH = "";
var en = defineConfig2({
  description: "InterMIND adds real-time speech translation to every video call, so international teams never lose deals, time, or clarity to language barriers.",
  head: [["meta", { property: "og:title", content: "Video calls powered by simultaneous interpretation | InterMIND" }]],
  themeConfig: {
    nav: [
      {
        text: "Product",
        activeMatch: `${BASE_PATH}/product/`,
        link: `${BASE_PATH}/product/overview/what-is-intermind`
      },
      {
        text: "Pricing",
        link: `${BASE_PATH}/#Pricing`
      },
      {
        text: "Resources",
        activeMatch: `${BASE_PATH}/product/`,
        items: [
          { text: "FAQ", link: `${BASE_PATH}/#FAQ` },
          { text: "Testimonials", link: `${BASE_PATH}/#Testimonials` }
        ]
      }
    ],
    sidebar: {
      [`${BASE_PATH}/product/`]: { base: `${BASE_PATH}/product/`, items: sidebarProduct() },
      [`${BASE_PATH}/resources/`]: { base: `${BASE_PATH}/resources/`, items: sidebarResources() },
      [`${BASE_PATH}/account/`]: { base: `${BASE_PATH}/account/`, items: sidebarAccount() }
      // [`${BASE_PATH}/account/settings/`]: { base: `${BASE_PATH}/account/settings/`, items: sidebarSettings() },
    },
    footer: {
      message: `\xA9 Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">Privacy Settings</a> | <a href="${BASE_PATH}/resources/company/Privacy-Policy">Privacy Policy</a> | <a href="${BASE_PATH}/resources/company/Legal-Regulations-for-AI-Services">Legal Regulations for AI Services</a> | <a href="https://status.mind.com/">Service status</a>`
    },
    localization: {
      placeholder4SearchInput: "Ask anything...",
      placeholder4ChatFooter: "Ask anything...",
      placeholder4ChatList: "Enter chat topic...",
      buttonLabel4NavButton: "Instant expert chat",
      buttonLabel4AuthButton: "Sign in"
    },
    contact_form: {
      name: "Name *",
      namePlaceholder: "your name",
      email: "Email *",
      emailPlaceholder: "your email address",
      webSite: "Company website *",
      webSitePlaceholder: "e.g. https://companyname.com",
      webSiteError: "Please enter webSite number",
      category: "What\u2019s your primary goal? *",
      categoryPlaceholder: "Choose what matters most",
      message: "Let's discuss your goals (optional)",
      messagePlaceholder: "Please provide any additional details (optional)",
      submit: "Submit request",
      sending: "Sending...",
      successTitle: "Thank you!",
      successMessage: "We\u2019ve received your message \u2014 our team will be in touch shortly.",
      defaultCategories: [
        "Eliminate language barriers in meetings",
        "Make meetings searchable and actionable",
        "Ensure compliance & data residency (EU / US / Asia)",
        "Just exploring / Other"
      ],
      defaultButtonText: "Send us a message"
      // defaultButtonText: "Get a free consultation",
    }
  }
});
function sidebarProduct() {
  return [
    {
      text: "OVERVIEW",
      collapsed: false,
      items: [
        { text: "What is InterMIND?", link: "overview/what-is-intermind" },
        { text: "How it Works", link: "overview/how-it-works" },
        { text: "Video Meeting Platform", link: "overview/video-meeting-platform" },
        { text: "Regional Data Privacy", link: "overview/privacy-architecture" },
        { text: "Priority Markets", link: "overview/markets" }
      ]
    },
    {
      text: "GUIDE",
      collapsed: false,
      items: [
        { text: "Getting Started", link: "guide/getting-started" },
        { text: "Account Management", link: "guide/account-management" },
        { text: "Creating Meetings", link: "guide/creating-meetings" },
        { text: "Meeting Interface", link: "guide/meeting-interface" },
        { text: "User Roles", link: "guide/user-roles" },
        { text: "AI Features", link: "guide/ai-features" },
        { text: "Meeting History", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "Troubleshooting", link: "guide/troubleshooting" }
      ]
    }
  ];
}
function sidebarResources() {
  return [
    {
      text: "SUPPORT",
      collapsed: false,
      items: [
        { text: "Get Support", link: "/help" }
        // { text: "How it Works", link: "overview/how-it-works" },
      ]
    },
    {
      text: "RESOURCES",
      collapsed: false,
      items: [
        { text: "Brand Assets", link: "/media-kit" }
        // { text: "Account Management", link: "guide/account-management" },
      ]
    },
    {
      text: "COMPANY",
      collapsed: false,
      items: [
        { text: "About", link: "/company/about" },
        // { text: "Team", link: "/team" },
        { text: "Contacts", link: "/company/contacts" }
      ]
    }
  ];
}
function sidebarAccount() {
  return [
    {
      text: "HOME",
      link: "/"
    },
    {
      text: "MEETINGS",
      collapsed: false,
      items: [
        { text: "Meetings", link: "/meetings" },
        { text: "History", link: "/history" },
        { text: "Upgrade", link: "/upgrade" }
      ]
    },
    {
      text: "SETTINGS",
      collapsed: true,
      items: [
        { text: "Profile", link: "/settings/profile" },
        { text: "Settings", link: "/settings/settings" },
        { text: "Settings", link: "/settings/upgrade" }
      ]
    }
  ];
}

// docs/.vitepress/config/i18n/ru.ts
import { defineConfig as defineConfig3 } from "file:///Users/kingwww/VSCode/GoldenFishProject/node_modules/.pnpm/vitepress@1.6.4_@algolia+client-search@5.35.0_@types+node@22.17.1_postcss@8.5.6_react@1_6f526adc2f8ef26978e7fc28c2b35a58/node_modules/vitepress/dist/node/index.js";
var BASE_PATH2 = "/ru";
var ru = defineConfig3({
  description: "InterMIND \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u0440\u0435\u0447\u0438 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043A \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u0432\u0438\u0434\u0435\u043E\u0437\u0432\u043E\u043D\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0442\u0435\u0440\u044F\u043B\u0438 \u0441\u0434\u0435\u043B\u043A\u0438, \u0432\u0440\u0435\u043C\u044F \u0438\u043B\u0438 \u044F\u0441\u043D\u043E\u0441\u0442\u044C \u0438\u0437-\u0437\u0430 \u044F\u0437\u044B\u043A\u043E\u0432\u044B\u0445 \u0431\u0430\u0440\u044C\u0435\u0440\u043E\u0432.",
  head: [["meta", { property: "og:title", content: "\u0412\u0438\u0434\u0435\u043E\u0437\u0432\u043E\u043D\u043A\u0438 \u0441 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u044B\u043C \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u043E\u043C | InterMIND" }]],
  themeConfig: {
    nav: [
      {
        text: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442",
        activeMatch: `${BASE_PATH2}/product/`,
        link: `${BASE_PATH2}/product/overview/what-is-intermind`
      },
      // {
      //   text: "Компания",
      //   activeMatch: `${BASE_PATH}/company/`,
      //   link: `${BASE_PATH}/company/about`,
      // },
      {
        text: "\u0426\u0435\u043D\u044B",
        // activeMatch: `${BASE_PATH}/company/`,
        link: `${BASE_PATH2}/#Pricing`
      },
      {
        text: "\u0420\u0435\u0441\u0443\u0440\u0441\u044B",
        activeMatch: `${BASE_PATH2}/product/`,
        // items: [
        //   {
        //     text: "ИЗУЧИТЬ",
        items: [
          // { text: "Цены", link: `${BASE_PATH}/#Pricing` },
          { text: "FAQ", link: `${BASE_PATH2}/#FAQ` },
          { text: "\u041E\u0442\u0437\u044B\u0432\u044B", link: `${BASE_PATH2}/#Testimonials` }
          // { text: "Команда", link: `${BASE_PATH}/resources/team` },
          // { text: "Медиа-кит", link: `${BASE_PATH}/resources/media-kit` },
        ]
        //   },
        // ],
      }
    ],
    sidebar: {
      [`${BASE_PATH2}/product/`]: { base: `${BASE_PATH2}/product/`, items: sidebarProduct2() },
      // [`${BASE_PATH}/company/`]: { base: `${BASE_PATH}/company/`, items: sidebarCompany() },
      [`${BASE_PATH2}/resources/`]: { base: `${BASE_PATH2}/resources/`, items: sidebarResources2() }
    },
    footer: {
      message: `\xA9 Mind, 2025. | <a href="#" onClick="UC_UI.showSecondLayer();">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438</a> | <a href="${BASE_PATH2}/resources/company/Privacy-Policy">\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438</a> | <a href="${BASE_PATH2}/resources/company/Legal-Regulations-for-AI-Services">\u041F\u0440\u0430\u0432\u043E\u0432\u044B\u0435 \u043D\u043E\u0440\u043C\u044B \u0434\u043B\u044F \u0418\u0418-\u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432</a> | <a href="https://status.mind.com/">\u0421\u0442\u0430\u0442\u0443\u0441 \u0441\u0435\u0440\u0432\u0438\u0441\u0430</a>`
    },
    localization: {
      placeholder4SearchInput: "\u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0447\u0442\u043E \u0443\u0433\u043E\u0434\u043D\u043E...",
      placeholder4ChatFooter: "\u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0447\u0442\u043E \u0443\u0433\u043E\u0434\u043D\u043E...",
      placeholder4ChatList: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043C\u0443 \u0447\u0430\u0442\u0430...",
      buttonLabel4NavButton: "\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u044B\u0439 \u0447\u0430\u0442",
      buttonLabel4AuthButton: "\u0412\u043E\u0439\u0442\u0438"
    },
    contact_form: {
      name: "\u0418\u043C\u044F *",
      namePlaceholder: "\u0432\u0430\u0448\u0435 \u0438\u043C\u044F",
      email: "Email *",
      emailPlaceholder: "\u0432\u0430\u0448 email \u0430\u0434\u0440\u0435\u0441",
      webSite: "\u0421\u0430\u0439\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 *",
      webSitePlaceholder: "\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, https://companyname.com",
      webSiteError: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430",
      category: "\u041A\u0430\u043A\u043E\u0432\u0430 \u0432\u0430\u0448\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0446\u0435\u043B\u044C? *",
      categoryPlaceholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u0430\u0436\u043D\u043E\u0435",
      message: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043E\u0431\u0441\u0443\u0434\u0438\u043C \u0432\u0430\u0448\u0438 \u0446\u0435\u043B\u0438 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
      messagePlaceholder: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043B\u044E\u0431\u044B\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
      submit: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441",
      sending: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430...",
      successTitle: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E!",
      successMessage: "\u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u2014 \u043D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F.",
      defaultCategories: [
        "\u0423\u0441\u0442\u0440\u0430\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A\u043E\u0432\u044B\u0435 \u0431\u0430\u0440\u044C\u0435\u0440\u044B \u043D\u0430 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0445",
        "\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C\u0438 \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u0430 \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439",
        "\u041E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C \u0438 \u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u043D\u043E\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0445 (\u0415\u0421 / \u0421\u0428\u0410 / \u0410\u0437\u0438\u044F)",
        "\u041F\u0440\u043E\u0441\u0442\u043E \u0438\u0437\u0443\u0447\u0430\u044E / \u0414\u0440\u0443\u0433\u043E\u0435"
      ],
      defaultButtonText: "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u043D\u0430\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
      // defaultButtonText: "Получить бесплатную консультацию",
    }
  }
});
function sidebarProduct2() {
  return [
    {
      text: "\u041E\u0411\u0417\u041E\u0420",
      collapsed: false,
      items: [
        { text: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 InterMIND?", link: "overview/what-is-intermind" },
        { text: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442", link: "overview/how-it-works" },
        { text: "\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0432\u0438\u0434\u0435\u043E\u0432\u0441\u0442\u0440\u0435\u0447", link: "overview/video-meeting-platform" },
        { text: "\u0420\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0445", link: "overview/privacy-architecture" },
        { text: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0435 \u0440\u044B\u043D\u043A\u0438", link: "overview/markets" }
      ]
    },
    {
      text: "\u0420\u0423\u041A\u041E\u0412\u041E\u0414\u0421\u0422\u0412\u041E",
      collapsed: false,
      items: [
        { text: "\u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0430\u0431\u043E\u0442\u044B", link: "guide/getting-started" },
        { text: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u043C", link: "guide/account-management" },
        { text: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0432\u0441\u0442\u0440\u0435\u0447", link: "guide/creating-meetings" },
        { text: "\u0418\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0432\u0441\u0442\u0440\u0435\u0447\u0438", link: "guide/meeting-interface" },
        { text: "\u0420\u043E\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439", link: "guide/user-roles" },
        { text: "\u0418\u0418-\u0444\u0443\u043D\u043A\u0446\u0438\u0438", link: "guide/ai-features" },
        { text: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0441\u0442\u0440\u0435\u0447", link: "guide/meeting-history" },
        { text: "FAQ", link: "guide/faq" },
        { text: "\u0423\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043D\u0435\u043F\u043E\u043B\u0430\u0434\u043E\u043A", link: "guide/troubleshooting" }
      ]
    }
  ];
}
function sidebarResources2() {
  return [
    {
      text: "\u041F\u041E\u0414\u0414\u0415\u0420\u0416\u041A\u0410",
      collapsed: false,
      items: [
        { text: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443", link: "/help" }
        // { text: "Как это работает", link: "overview/how-it-works" },
      ]
    },
    {
      text: "\u0420\u0415\u0421\u0423\u0420\u0421\u042B",
      collapsed: false,
      items: [
        { text: "\u0411\u0440\u0435\u043D\u0434\u043E\u0432\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B", link: "/media-kit" }
        // { text: "Управление аккаунтом", link: "guide/account-management" },
      ]
    },
    {
      text: "\u041A\u041E\u041C\u041F\u0410\u041D\u0418\u042F",
      collapsed: false,
      items: [
        { text: "\u041E \u043D\u0430\u0441", link: "/company/about" },
        // { text: "Команда", link: "/team" },
        { text: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", link: "/company/contacts" }
      ]
    }
  ];
}

// docs/.vitepress/config/locales.ts
var locales = {
  root: { name: "English", label: "English", lang: "en-US", ...en },
  // es: { name: "Spanish", label: "Español", lang: "es-ES", ...es },
  // zh: { name: "Chinese (Simplified)", label: "中文", lang: "zh-CN", ...zh },
  // fr: { name: "French", label: "Français", lang: "fr-FR", ...fr },
  // ja: { name: "Japanese", label: "日本語", lang: "ja-JP", ...ja },
  // ar: { name: "Arabic (Gulf)", label: "اَلْعَرَبِيَّةُ", lang: "ar-AE", ...ar },
  ru: { name: "Russian", label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", lang: "ru-RU", ...ru }
  // de: { name: "German", label: "Deutsch", lang: "de-DE", ...de },
  // hi: { name: "Hindi", label: "हिन्दी", lang: "hi-IN", ...hi },
  // ur: { name: "Urdu", label: "اُردُو", lang: "ur-PK", ...ur },
  // bn: { name: "Bengali", label: "বাংলা", lang: "bn-BD", ...bn },
  // ml: { name: "Malayalam", label: "മലയാളം", lang: "ml-IN", ...ml },
  // ta: { name: "Tamil", label: "தமிழ்", lang: "ta-IN", ...ta },
  // te: { name: "Telugu", label: "తెలుగు", lang: "te-IN", ...te },
  // fa: { name: "Persian/Farsi", label: "فارسی", lang: "fa-IR", ...fa },
  // uk: { name: "Ukrainian", label: "Українська", lang: "uk-UA", ...uk },
  // tr: { name: "Turkish", label: "Türkçe", lang: "tr-TR", ...tr },
  // ko: { name: "Korean", label: "한국어", lang: "ko-KR", ...ko },
  // id: { name: "Indonesian", label: "Bahasa Indonesia", lang: "id-ID", ...id },
  // vi: { name: "Vietnamese", label: "Tiếng Việt", lang: "vi-VN", ...vi },
  // pt: { name: "Portuguese (Brazil)", label: "Português", lang: "pt-BR", ...pt },
};

// docs/.vitepress/config/index.ts
var config_default = defineConfig4({
  ...shared,
  locales
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9pbmRleC50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3NoYXJlZC50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL2d0bS5jb25maWcudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9lbi50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL2kxOG4vcnUudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9sb2NhbGVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2tpbmd3d3cvVlNDb2RlL0dvbGRlbkZpc2hQcm9qZWN0L3BhY2thZ2VzL2RyYWZ0aXVtL2RvY3MvLnZpdGVwcmVzcy9jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9raW5nd3d3L1ZTQ29kZS9Hb2xkZW5GaXNoUHJvamVjdC9wYWNrYWdlcy9kcmFmdGl1bS9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9raW5nd3d3L1ZTQ29kZS9Hb2xkZW5GaXNoUHJvamVjdC9wYWNrYWdlcy9kcmFmdGl1bS9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2luZGV4LnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiXG5pbXBvcnQgeyBzaGFyZWQgfSBmcm9tIFwiLi9zaGFyZWRcIlxuaW1wb3J0IHsgbG9jYWxlcyB9IGZyb20gXCIuL2xvY2FsZXNcIlxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAuLi5zaGFyZWQsXG4gIGxvY2FsZXMsXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2luZ3d3dy9WU0NvZGUvR29sZGVuRmlzaFByb2plY3QvcGFja2FnZXMvZHJhZnRpdW0vZG9jcy8udml0ZXByZXNzL2NvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2tpbmd3d3cvVlNDb2RlL0dvbGRlbkZpc2hQcm9qZWN0L3BhY2thZ2VzL2RyYWZ0aXVtL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvc2hhcmVkLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9raW5nd3d3L1ZTQ29kZS9Hb2xkZW5GaXNoUHJvamVjdC9wYWNrYWdlcy9kcmFmdGl1bS9kb2NzLy52aXRlcHJlc3MvY29uZmlnL3NoYXJlZC50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlcHJlc3NcIlxuaW1wb3J0IG1hcmtkb3duSXRGb290bm90ZSBmcm9tIFwibWFya2Rvd24taXQtZm9vdG5vdGVcIlxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCJcbmltcG9ydCB7IGd0bUhlYWRTY3JpcHQsIGd0bUhlYWROb1NjcmlwdCB9IGZyb20gXCIuL2d0bS5jb25maWdcIlxuaW1wb3J0IGxsbXN0eHQgZnJvbSBcInZpdGVwcmVzcy1wbHVnaW4tbGxtc1wiXG5cbi8vIFx1MDQxRVx1MDQzMVx1MDQzRFx1MDQzRVx1MDQzMlx1MDQzQlx1MDQ0Rlx1MDQzNVx1MDQzQyBVUkwgXHUwNDQxXHUwNDMwXHUwNDM5XHUwNDQyXHUwNDMwIFx1MDQzNFx1MDQzRVx1MDQzQVx1MDQ0M1x1MDQzQ1x1MDQzNVx1MDQzRFx1MDQ0Mlx1MDQzMFx1MDQ0Nlx1MDQzOFx1MDQzOFxuY29uc3QgaG9zdFVybCA9IFwiaHR0cHM6Ly9pMTRuLmNvbVwiXG5jb25zdCBOT0lOREVYX1BBR0VTID0gW1wiZXhwXCIsIFwiY2hhdFwiLCBcIi9jb21wYW55L1wiLCBcInByb21vL2ltaW5kXCJdXG5jb25zdCBSVExfTE9DQUxFUyA9IFtcImFyXCIsIFwiZmFcIiwgXCJ1clwiXVxuLy8gXHUwNDIxXHUwNDNGXHUwNDM4XHUwNDQxXHUwNDNFXHUwNDNBIFVUTS1cdTA0M0ZcdTA0MzBcdTA0NDBcdTA0MzBcdTA0M0NcdTA0MzVcdTA0NDJcdTA0NDBcdTA0M0VcdTA0MzIgXHUwNDM0XHUwNDNCXHUwNDRGIFx1MDQ0MVx1MDQzRVx1MDQ0NVx1MDQ0MFx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzRFx1MDQzOFx1MDQ0RiBcdTA0MzIgXHUwNDNGXHUwNDMwXHUwNDQwXHUwNDMwXHUwNDNDXHUwNDM1XHUwNDQyXHUwNDQwXHUwNDMwXHUwNDQ1IFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzMFx1MDQzRFx1MDQzOFx1MDQ0Nlx1MDQ0QlxuY29uc3QgVVRNX1BBUkFNUyA9IFtcInV0bV9zb3VyY2VcIiwgXCJ1dG1fbWVkaXVtXCIsIFwidXRtX2NhbXBhaWduXCIsIFwidXRtX2NvbnRlbnRcIiwgXCJ1dG1fdGVybVwiLCBcImNhbXBhaWduX2lkXCJdXG5cbi8vIFx1MDQxRVx1MDQzRlx1MDQ0MFx1MDQzNVx1MDQzNFx1MDQzNVx1MDQzQlx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0M0FcdTA0M0VcdTA0M0RcdTA0NDFcdTA0NDJcdTA0MzBcdTA0M0RcdTA0NDIgXHUwNDM0XHUwNDNCXHUwNDRGIE9BdXRoIFx1MDQzRlx1MDQ0MFx1MDQ0Rlx1MDQzQ1x1MDQzRSBcdTA0MzIgXHUwNDNBXHUwNDNFXHUwNDM0XHUwNDM1LCBcdTA0NDJcdTA0MzBcdTA0M0EgXHUwNDNBXHUwNDMwXHUwNDNBIFx1MDQ0RFx1MDQ0Mlx1MDQzRSBcdTA0M0RcdTA0MzUgXHUwNDM3XHUwNDMwXHUwNDNBXHUwNDQwXHUwNDRCXHUwNDQyXHUwNDRCXHUwNDM1IFx1MDQzNFx1MDQzMFx1MDQzRFx1MDQzRFx1MDQ0Qlx1MDQzNVxuY29uc3QgT0FVVEhfUFJPVklERVJfVVJMID0gXCJodHRwczovL2lkLmludGVyLm1pbmQuY29tL3JlYWxtcy92Y2FcIlxuY29uc3QgQVBQX0JBU0VfVVJMID0gXCJodHRwczovL2ludGVyLm1pbmQuY29tXCJcbmNvbnN0IE9BVVRIX0NMSUVOVF9JRCA9IFwidmNhXCJcblxuY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuVkVSQ0VMX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcblxuY29uc3QgdmVyY2VsVXJsID0gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCB8fCBwcm9jZXNzLmVudi5WRVJDRUxfQlJBTkNIX1VSTFxuY29uc3QgYmFzZVVybCA9IHZlcmNlbFVybCA/IGBodHRwczovLyR7dmVyY2VsVXJsfWAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG5cbmV4cG9ydCBjb25zdCBzaGFyZWQgPSBkZWZpbmVDb25maWcoe1xuICB0aXRsZTogXCJEUkFGVElVTVwiLFxuICAvLyB0aXRsZVRlbXBsYXRlOiBcIkludGVyTWluZFwiLFxuICAvLyBzcmNEaXI6IFwiLi9kb2NzXCIsXG4gIGxhc3RVcGRhdGVkOiB0cnVlLFxuICBjbGVhblVybHM6IHRydWUsXG4gIG1ldGFDaHVuazogdHJ1ZSxcbiAgcmV3cml0ZXM6IHtcbiAgICBcImVuLzpyZXN0KlwiOiBcIjpyZXN0KlwiLFxuICAgIFwiaTE4bi86bG9jYWxlLzpyZXN0KlwiOiBcIjpsb2NhbGUvOnJlc3QqXCIsXG4gIH0sXG4gIHRyYW5zZm9ybVBhZ2VEYXRhKHBhZ2VEYXRhLCBjdHgpIHtcbiAgICBjb25zdCBwYWdlUGF0aCA9IHBhZ2VEYXRhLnJlbGF0aXZlUGF0aC5yZXBsYWNlKC9cXC5tZCQvLCBcIlwiKS5yZXBsYWNlKC9pbmRleCQvLCBcIlwiKVxuICAgIHBhZ2VEYXRhLmZyb250bWF0dGVyLmhlYWQgPz89IFtdXG5cbiAgICAvLyBcdTA0MThcdTA0M0RcdTA0MzhcdTA0NDZcdTA0MzhcdTA0MzBcdTA0M0JcdTA0MzhcdTA0MzdcdTA0MzhcdTA0NDBcdTA0NDNcdTA0MzVcdTA0M0MgcGFyYW1zIFx1MDQzQVx1MDQzMFx1MDQzQSBcdTA0M0ZcdTA0NDNcdTA0NDFcdTA0NDJcdTA0M0VcdTA0MzkgXHUwNDNFXHUwNDMxXHUwNDRBXHUwNDM1XHUwNDNBXHUwNDQyXG4gICAgcGFnZURhdGEucGFyYW1zID0ge31cblxuICAgIC8vIFx1MDQxRVx1MDQzRlx1MDQ0MFx1MDQzNVx1MDQzNFx1MDQzNVx1MDQzQlx1MDQ0Rlx1MDQzNVx1MDQzQyBcdTA0NEZcdTA0MzdcdTA0NEJcdTA0M0EgXHUwNDM4XHUwNDM3IFx1MDQzRlx1MDQ0M1x1MDQ0Mlx1MDQzOCBcdTA0NDRcdTA0MzBcdTA0MzlcdTA0M0JcdTA0MzBcbiAgICBjb25zdCBsb2NhbGUgPSBwYWdlUGF0aC5zcGxpdChcIi9cIilbMF1cblxuICAgIC8vIFx1MDQxNFx1MDQzRVx1MDQzMVx1MDQzMFx1MDQzMlx1MDQzQlx1MDQ0Rlx1MDQzNVx1MDQzQyBkaXI6IHJ0bCBcdTA0MzRcdTA0M0JcdTA0NEYgUlRMIFx1MDQ0Rlx1MDQzN1x1MDQ0Qlx1MDQzQVx1MDQzRVx1MDQzMlxuICAgIGlmIChSVExfTE9DQUxFUy5pbmNsdWRlcyhsb2NhbGUpKSB7XG4gICAgICBwYWdlRGF0YS5mcm9udG1hdHRlci5kaXIgPSBcInJ0bFwiXG4gICAgfVxuXG4gICAgLy8gbm9pbmRleCBcdTA0MzRcdTA0M0JcdTA0NEYgXHUwNDNEXHUwNDM1IFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQzNFx1MDQzMCBcdTA0MzggXHUwNDM4XHUwNDQxXHUwNDNBXHUwNDNCXHUwNDRFXHUwNDQ3XHUwNDM1XHUwNDNEXHUwNDNEXHUwNDRCXHUwNDQ1IFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzMFx1MDQzRFx1MDQzOFx1MDQ0NlxuICAgIGlmIChOT0lOREVYX1BBR0VTLnNvbWUoKHBhdGgpID0+IHBhZ2VQYXRoLmluY2x1ZGVzKHBhdGgpKSB8fCAhaXNQcm9kdWN0aW9uKSB7XG4gICAgICBwYWdlRGF0YS5mcm9udG1hdHRlci5oZWFkLnB1c2goW1wibWV0YVwiLCB7IG5hbWU6IFwicm9ib3RzXCIsIGNvbnRlbnQ6IFwibm9pbmRleFwiIH1dKVxuICAgIH1cblxuICAgIC8vIGNhbm9uaWNhbCBsaW5rXG4gICAgLy8gcGFnZURhdGEuZnJvbnRtYXR0ZXIuaGVhZC5wdXNoKFtcImxpbmtcIiwgeyByZWw6IFwiY2Fub25pY2FsXCIsIGhyZWY6IGhvc3RVcmwgKyBcIi9cIiArIHBhZ2VQYXRoIH1dKVxuXG4gICAgLy8gXHUwNDIxXHUwNDNFXHUwNDQ1XHUwNDQwXHUwNDMwXHUwNDNEXHUwNDRGXHUwNDM1XHUwNDNDIFVUTS1cdTA0M0ZcdTA0MzBcdTA0NDBcdTA0MzBcdTA0M0NcdTA0MzVcdTA0NDJcdTA0NDBcdTA0NEIgXHUwNDMyIFx1MDQzQ1x1MDQzNVx1MDQ0Mlx1MDQzMFx1MDQzNFx1MDQzMFx1MDQzRFx1MDQzRFx1MDQ0Qlx1MDQ0NSBcdTA0NDFcdTA0NDJcdTA0NDBcdTA0MzBcdTA0M0RcdTA0MzhcdTA0NDZcdTA0NEJcbiAgICAvLyBcdTA0MThcdTA0MzdcdTA0MzJcdTA0M0JcdTA0MzVcdTA0M0FcdTA0MzBcdTA0MzVcdTA0M0MgXHUwNDNGXHUwNDMwXHUwNDQwXHUwNDMwXHUwNDNDXHUwNDM1XHUwNDQyXHUwNDQwXHUwNDRCIFx1MDQzOFx1MDQzNyBVUkwgXHUwNDQyXHUwNDM1XHUwNDNBXHUwNDQzXHUwNDQ5XHUwNDM1XHUwNDMzXHUwNDNFIFx1MDQzN1x1MDQzMFx1MDQzRlx1MDQ0MFx1MDQzRVx1MDQ0MVx1MDQzMCAoXHUwNDM1XHUwNDQxXHUwNDNCXHUwNDM4IFx1MDQzRVx1MDQzRCBcdTA0MzRcdTA0M0VcdTA0NDFcdTA0NDJcdTA0NDNcdTA0M0ZcdTA0MzVcdTA0M0QpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuXG4gICAgICAgIC8vIFx1MDQyMVx1MDQzRVx1MDQ0NVx1MDQ0MFx1MDQzMFx1MDQzRFx1MDQ0Rlx1MDQzNVx1MDQzQyBcdTA0MzJcdTA0NDFcdTA0MzUgVVRNLVx1MDQzRlx1MDQzMFx1MDQ0MFx1MDQzMFx1MDQzQ1x1MDQzNVx1MDQ0Mlx1MDQ0MFx1MDQ0QiBcdTA0MzIgcGFyYW1zXG4gICAgICAgIFVUTV9QQVJBTVMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHVybFBhcmFtcy5nZXQocGFyYW0pXG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYWdlRGF0YS5wYXJhbXMhW3BhcmFtXSA9IHZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZXh0cmFjdGluZyBxdWVyeSBwYXJhbWV0ZXJzOlwiLCBlKVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWFya2Rvd246IHtcbiAgICBjb25maWc6IChtZCkgPT4ge1xuICAgICAgbWQudXNlKG1hcmtkb3duSXRGb290bm90ZSlcbiAgICB9LFxuICB9LFxuICB2aXRlOiB7XG4gICAgZGVmaW5lOiB7XG4gICAgICBcImltcG9ydC5tZXRhLmVudi5WSVRFX0lTX1BST0RcIjogaXNQcm9kdWN0aW9uLFxuICAgICAgXCJpbXBvcnQubWV0YS5lbnYuVklURV9CQVNFX1VSTFwiOiBKU09OLnN0cmluZ2lmeShiYXNlVXJsKSxcbiAgICAgIFwiaW1wb3J0Lm1ldGEuZW52LlZJVEVfT0FVVEhfUFJPVklERVJfVVJMXCI6IEpTT04uc3RyaW5naWZ5KE9BVVRIX1BST1ZJREVSX1VSTCksXG4gICAgICBcImltcG9ydC5tZXRhLmVudi5WSVRFX09BVVRIX0NMSUVOVF9JRFwiOiBKU09OLnN0cmluZ2lmeShPQVVUSF9DTElFTlRfSUQpLFxuICAgICAgXCJpbXBvcnQubWV0YS5lbnYuVklURV9BUFBfQkFTRV9VUkxcIjogSlNPTi5zdHJpbmdpZnkoQVBQX0JBU0VfVVJMKSxcbiAgICB9LFxuXG4gICAgc2VydmVyOiB7XG4gICAgICBwcm94eToge1xuICAgICAgICBcIi9hcGlcIjogeyB0YXJnZXQ6IGJhc2VVcmwsIGNoYW5nZU9yaWdpbjogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIGlzUHJvZHVjdGlvbiAmJlxuICAgICAgICBsbG1zdHh0KHtcbiAgICAgICAgICB3b3JrRGlyOiBcImVuXCIsXG4gICAgICAgICAgaWdub3JlRmlsZXM6IFtcImluZGV4Lm1kXCJdLFxuICAgICAgICB9KSxcbiAgICBdLFxuICB9LFxuICBzaXRlbWFwOiB7XG4gICAgaG9zdG5hbWU6IGhvc3RVcmwsXG4gICAgLy8gXHUwNDIzXHUwNDMxXHUwNDM4XHUwNDQwXHUwNDMwXHUwNDM1XHUwNDNDIFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzMFx1MDQzRFx1MDQzOFx1MDQ0Nlx1MDQ0QiBub2luZGV4IFx1MDQzOFx1MDQzNyBzaXRlbWFwLnhtbFxuICAgIHRyYW5zZm9ybUl0ZW1zOiAoaXRlbXMpID0+IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gIU5PSU5ERVhfUEFHRVMuc29tZSgocGF0aCkgPT4gaXRlbS51cmwuaW5jbHVkZXMocGF0aCkpKSxcbiAgfSxcblxuICBoZWFkOiBbXG4gICAgW1wibGlua1wiLCB7IHJlbDogXCJpY29uXCIsIHR5cGU6IFwiaW1hZ2Uvc3ZnK3htbFwiLCBocmVmOiBcIi9sb2dvLnN2Z1wiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcInRoZW1lLWNvbG9yXCIsIGNvbnRlbnQ6IFwiI2RkOTE0NFwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzp0eXBlXCIsIGNvbnRlbnQ6IFwid2Vic2l0ZVwiIH1dLFxuICAgIFtcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzpzaXRlX25hbWVcIiwgY29udGVudDogXCJJbnRlck1JTkRcIiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6dXJsXCIsIGNvbnRlbnQ6IGhvc3RVcmwgKyBcIi9cIiB9XSxcbiAgICAuLi5ndG1IZWFkU2NyaXB0LFxuICAgIC4uLmd0bUhlYWROb1NjcmlwdCxcbiAgXSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBsb2dvOiB7IGxpZ2h0OiBcIi9sb2dvLnN2Z1wiLCBkYXJrOiBcIi9sb2dvLnN2Z1wiIH0sXG4gIH0sXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2luZ3d3dy9WU0NvZGUvR29sZGVuRmlzaFByb2plY3QvcGFja2FnZXMvZHJhZnRpdW0vZG9jcy8udml0ZXByZXNzL2NvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2tpbmd3d3cvVlNDb2RlL0dvbGRlbkZpc2hQcm9qZWN0L3BhY2thZ2VzL2RyYWZ0aXVtL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvZ3RtLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMva2luZ3d3dy9WU0NvZGUvR29sZGVuRmlzaFByb2plY3QvcGFja2FnZXMvZHJhZnRpdW0vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9ndG0uY29uZmlnLnRzXCI7aW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiXG5cbmNvbnN0IEdUTV9JRHMgPSB7XG4gIHByb2Q6IFwiR1RNLTVHR01CMjUyXCIsXG4gIHRlc3Q6IFwiR1RNLTVHR01CMjUyXCIsXG59XG5cbi8vIFVzZSB0aGUgcHJvZHVjdGlvbiBHVE0gSUQgaWYgdGhlIGVudmlyb25tZW50IGlzIHByb2R1Y3Rpb24sIG90aGVyd2lzZSB1c2UgdGhlIHRlc3QgR1RNIElEXG5jb25zdCBHVE1fSURfVE9fVVNFID0gcHJvY2Vzcy5lbnYuVkVSQ0VMX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBHVE1fSURzLnByb2QgOiBHVE1fSURzLnRlc3RcblxuZXhwb3J0IGNvbnN0IGd0bUhlYWRTY3JpcHQ6IEhlYWRDb25maWdbXSA9IFtcbiAgW1xuICAgIFwic2NyaXB0XCIsXG4gICAge30sXG4gICAgYFxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIC8vIEdvb2dsZSBUYWcgTWFuYWdlciBtYWluIHNjcmlwdFxuICAgICAgKGZ1bmN0aW9uKHcsZCxzLGwsaSl7d1tsXT13W2xdfHxbXTt3W2xdLnB1c2goeydndG0uc3RhcnQnOlxuICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCksZXZlbnQ6J2d0bS5qcyd9KTt2YXIgZj1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdLFxuICAgICAgaj1kLmNyZWF0ZUVsZW1lbnQocyksZGw9bCE9J2RhdGFMYXllcic/JyZsPScrbDonJztqLmFzeW5jPXRydWU7ai5zcmM9XG4gICAgICAnaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RtLmpzP2lkPScraStkbDtmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGosZik7XG4gICAgICB9KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJ2RhdGFMYXllcicsJyR7R1RNX0lEX1RPX1VTRX0nKTtcbiAgICB9KSgpO1xuICAgIGAsXG4gIF0sXG5dXG5cbmV4cG9ydCBjb25zdCBndG1IZWFkTm9TY3JpcHQ6IEhlYWRDb25maWdbXSA9IFtcbiAgW1xuICAgIFwibm9zY3JpcHRcIixcbiAgICB7fSxcbiAgICBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ucy5odG1sP2lkPSR7R1RNX0lEX1RPX1VTRX1cIiBoZWlnaHQ9XCIwXCIgd2lkdGg9XCIwXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7dmlzaWJpbGl0eTpoaWRkZW5cIj48L2lmcmFtZT5gLFxuICBdLFxuXVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2luZ3d3dy9WU0NvZGUvR29sZGVuRmlzaFByb2plY3QvcGFja2FnZXMvZHJhZnRpdW0vZG9jcy8udml0ZXByZXNzL2NvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2tpbmd3d3cvVlNDb2RlL0dvbGRlbkZpc2hQcm9qZWN0L3BhY2thZ2VzL2RyYWZ0aXVtL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2tpbmd3d3cvVlNDb2RlL0dvbGRlbkZpc2hQcm9qZWN0L3BhY2thZ2VzL2RyYWZ0aXVtL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvZW4udHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIHR5cGUgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInZpdGVwcmVzc1wiXG5cbmNvbnN0IEJBU0VfUEFUSCA9IFwiXCJcblxuZXhwb3J0IGNvbnN0IGVuID0gZGVmaW5lQ29uZmlnKHtcbiAgZGVzY3JpcHRpb246XG4gICAgXCJJbnRlck1JTkQgYWRkcyByZWFsLXRpbWUgc3BlZWNoIHRyYW5zbGF0aW9uIHRvIGV2ZXJ5IHZpZGVvIGNhbGwsIHNvIGludGVybmF0aW9uYWwgdGVhbXMgbmV2ZXIgbG9zZSBkZWFscywgdGltZSwgb3IgY2xhcml0eSB0byBsYW5ndWFnZSBiYXJyaWVycy5cIixcbiAgaGVhZDogW1tcIm1ldGFcIiwgeyBwcm9wZXJ0eTogXCJvZzp0aXRsZVwiLCBjb250ZW50OiBcIlZpZGVvIGNhbGxzIHBvd2VyZWQgYnkgc2ltdWx0YW5lb3VzIGludGVycHJldGF0aW9uIHwgSW50ZXJNSU5EXCIgfV1dLFxuXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgbmF2OiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiUHJvZHVjdFwiLFxuICAgICAgICBhY3RpdmVNYXRjaDogYCR7QkFTRV9QQVRIfS9wcm9kdWN0L2AsXG4gICAgICAgIGxpbms6IGAke0JBU0VfUEFUSH0vcHJvZHVjdC9vdmVydmlldy93aGF0LWlzLWludGVybWluZGAsXG4gICAgICB9LFxuXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiUHJpY2luZ1wiLFxuICAgICAgICBsaW5rOiBgJHtCQVNFX1BBVEh9LyNQcmljaW5nYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiUmVzb3VyY2VzXCIsXG4gICAgICAgIGFjdGl2ZU1hdGNoOiBgJHtCQVNFX1BBVEh9L3Byb2R1Y3QvYCxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiRkFRXCIsIGxpbms6IGAke0JBU0VfUEFUSH0vI0ZBUWAgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiVGVzdGltb25pYWxzXCIsIGxpbms6IGAke0JBU0VfUEFUSH0vI1Rlc3RpbW9uaWFsc2AgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcblxuICAgIHNpZGViYXI6IHtcbiAgICAgIFtgJHtCQVNFX1BBVEh9L3Byb2R1Y3QvYF06IHsgYmFzZTogYCR7QkFTRV9QQVRIfS9wcm9kdWN0L2AsIGl0ZW1zOiBzaWRlYmFyUHJvZHVjdCgpIH0sXG4gICAgICBbYCR7QkFTRV9QQVRIfS9yZXNvdXJjZXMvYF06IHsgYmFzZTogYCR7QkFTRV9QQVRIfS9yZXNvdXJjZXMvYCwgaXRlbXM6IHNpZGViYXJSZXNvdXJjZXMoKSB9LFxuICAgICAgW2Ake0JBU0VfUEFUSH0vYWNjb3VudC9gXTogeyBiYXNlOiBgJHtCQVNFX1BBVEh9L2FjY291bnQvYCwgaXRlbXM6IHNpZGViYXJBY2NvdW50KCkgfSxcbiAgICAgIC8vIFtgJHtCQVNFX1BBVEh9L2FjY291bnQvc2V0dGluZ3MvYF06IHsgYmFzZTogYCR7QkFTRV9QQVRIfS9hY2NvdW50L3NldHRpbmdzL2AsIGl0ZW1zOiBzaWRlYmFyU2V0dGluZ3MoKSB9LFxuICAgIH0sXG5cbiAgICBmb290ZXI6IHtcbiAgICAgIG1lc3NhZ2U6IGBcdTAwQTkgTWluZCwgMjAyNS4gfCA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9XCJVQ19VSS5zaG93U2Vjb25kTGF5ZXIoKTtcIj5Qcml2YWN5IFNldHRpbmdzPC9hPiB8IDxhIGhyZWY9XCIke0JBU0VfUEFUSH0vcmVzb3VyY2VzL2NvbXBhbnkvUHJpdmFjeS1Qb2xpY3lcIj5Qcml2YWN5IFBvbGljeTwvYT4gfCA8YSBocmVmPVwiJHtCQVNFX1BBVEh9L3Jlc291cmNlcy9jb21wYW55L0xlZ2FsLVJlZ3VsYXRpb25zLWZvci1BSS1TZXJ2aWNlc1wiPkxlZ2FsIFJlZ3VsYXRpb25zIGZvciBBSSBTZXJ2aWNlczwvYT4gfCA8YSBocmVmPVwiaHR0cHM6Ly9zdGF0dXMubWluZC5jb20vXCI+U2VydmljZSBzdGF0dXM8L2E+YCxcbiAgICB9LFxuXG4gICAgbG9jYWxpemF0aW9uOiB7XG4gICAgICBwbGFjZWhvbGRlcjRTZWFyY2hJbnB1dDogXCJBc2sgYW55dGhpbmcuLi5cIixcbiAgICAgIHBsYWNlaG9sZGVyNENoYXRGb290ZXI6IFwiQXNrIGFueXRoaW5nLi4uXCIsXG4gICAgICBwbGFjZWhvbGRlcjRDaGF0TGlzdDogXCJFbnRlciBjaGF0IHRvcGljLi4uXCIsXG4gICAgICBidXR0b25MYWJlbDROYXZCdXR0b246IFwiSW5zdGFudCBleHBlcnQgY2hhdFwiLFxuICAgICAgYnV0dG9uTGFiZWw0QXV0aEJ1dHRvbjogXCJTaWduIGluXCIsXG4gICAgfSxcbiAgICBjb250YWN0X2Zvcm06IHtcbiAgICAgIG5hbWU6IFwiTmFtZSAqXCIsXG4gICAgICBuYW1lUGxhY2Vob2xkZXI6IFwieW91ciBuYW1lXCIsXG4gICAgICBlbWFpbDogXCJFbWFpbCAqXCIsXG4gICAgICBlbWFpbFBsYWNlaG9sZGVyOiBcInlvdXIgZW1haWwgYWRkcmVzc1wiLFxuICAgICAgd2ViU2l0ZTogXCJDb21wYW55IHdlYnNpdGUgKlwiLFxuICAgICAgd2ViU2l0ZVBsYWNlaG9sZGVyOiBcImUuZy4gaHR0cHM6Ly9jb21wYW55bmFtZS5jb21cIixcbiAgICAgIHdlYlNpdGVFcnJvcjogXCJQbGVhc2UgZW50ZXIgd2ViU2l0ZSBudW1iZXJcIixcbiAgICAgIGNhdGVnb3J5OiBcIldoYXRcdTIwMTlzIHlvdXIgcHJpbWFyeSBnb2FsPyAqXCIsXG4gICAgICBjYXRlZ29yeVBsYWNlaG9sZGVyOiBcIkNob29zZSB3aGF0IG1hdHRlcnMgbW9zdFwiLFxuICAgICAgbWVzc2FnZTogXCJMZXQncyBkaXNjdXNzIHlvdXIgZ29hbHMgKG9wdGlvbmFsKVwiLFxuICAgICAgbWVzc2FnZVBsYWNlaG9sZGVyOiBcIlBsZWFzZSBwcm92aWRlIGFueSBhZGRpdGlvbmFsIGRldGFpbHMgKG9wdGlvbmFsKVwiLFxuICAgICAgc3VibWl0OiBcIlN1Ym1pdCByZXF1ZXN0XCIsXG4gICAgICBzZW5kaW5nOiBcIlNlbmRpbmcuLi5cIixcbiAgICAgIHN1Y2Nlc3NUaXRsZTogXCJUaGFuayB5b3UhXCIsXG4gICAgICBzdWNjZXNzTWVzc2FnZTogXCJXZVx1MjAxOXZlIHJlY2VpdmVkIHlvdXIgbWVzc2FnZSBcdTIwMTQgb3VyIHRlYW0gd2lsbCBiZSBpbiB0b3VjaCBzaG9ydGx5LlwiLFxuICAgICAgZGVmYXVsdENhdGVnb3JpZXM6IFtcbiAgICAgICAgXCJFbGltaW5hdGUgbGFuZ3VhZ2UgYmFycmllcnMgaW4gbWVldGluZ3NcIixcbiAgICAgICAgXCJNYWtlIG1lZXRpbmdzIHNlYXJjaGFibGUgYW5kIGFjdGlvbmFibGVcIixcbiAgICAgICAgXCJFbnN1cmUgY29tcGxpYW5jZSAmIGRhdGEgcmVzaWRlbmN5IChFVSAvIFVTIC8gQXNpYSlcIixcbiAgICAgICAgXCJKdXN0IGV4cGxvcmluZyAvIE90aGVyXCIsXG4gICAgICBdLFxuXG4gICAgICBkZWZhdWx0QnV0dG9uVGV4dDogXCJTZW5kIHVzIGEgbWVzc2FnZVwiLFxuICAgICAgLy8gZGVmYXVsdEJ1dHRvblRleHQ6IFwiR2V0IGEgZnJlZSBjb25zdWx0YXRpb25cIixcbiAgICB9LFxuICB9IGFzIERlZmF1bHRUaGVtZS5Db25maWcsXG59KVxuXG5mdW5jdGlvbiBzaWRlYmFyUHJvZHVjdCgpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdGV4dDogXCJPVkVSVklFV1wiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogXCJXaGF0IGlzIEludGVyTUlORD9cIiwgbGluazogXCJvdmVydmlldy93aGF0LWlzLWludGVybWluZFwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJIb3cgaXQgV29ya3NcIiwgbGluazogXCJvdmVydmlldy9ob3ctaXQtd29ya3NcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiVmlkZW8gTWVldGluZyBQbGF0Zm9ybVwiLCBsaW5rOiBcIm92ZXJ2aWV3L3ZpZGVvLW1lZXRpbmctcGxhdGZvcm1cIiB9LFxuICAgICAgICB7IHRleHQ6IFwiUmVnaW9uYWwgRGF0YSBQcml2YWN5XCIsIGxpbms6IFwib3ZlcnZpZXcvcHJpdmFjeS1hcmNoaXRlY3R1cmVcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiUHJpb3JpdHkgTWFya2V0c1wiLCBsaW5rOiBcIm92ZXJ2aWV3L21hcmtldHNcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiR1VJREVcIixcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiR2V0dGluZyBTdGFydGVkXCIsIGxpbms6IFwiZ3VpZGUvZ2V0dGluZy1zdGFydGVkXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIkFjY291bnQgTWFuYWdlbWVudFwiLCBsaW5rOiBcImd1aWRlL2FjY291bnQtbWFuYWdlbWVudFwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJDcmVhdGluZyBNZWV0aW5nc1wiLCBsaW5rOiBcImd1aWRlL2NyZWF0aW5nLW1lZXRpbmdzXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIk1lZXRpbmcgSW50ZXJmYWNlXCIsIGxpbms6IFwiZ3VpZGUvbWVldGluZy1pbnRlcmZhY2VcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiVXNlciBSb2xlc1wiLCBsaW5rOiBcImd1aWRlL3VzZXItcm9sZXNcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiQUkgRmVhdHVyZXNcIiwgbGluazogXCJndWlkZS9haS1mZWF0dXJlc1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJNZWV0aW5nIEhpc3RvcnlcIiwgbGluazogXCJndWlkZS9tZWV0aW5nLWhpc3RvcnlcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiRkFRXCIsIGxpbms6IFwiZ3VpZGUvZmFxXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlRyb3VibGVzaG9vdGluZ1wiLCBsaW5rOiBcImd1aWRlL3Ryb3VibGVzaG9vdGluZ1wiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF1cbn1cblxuZnVuY3Rpb24gc2lkZWJhclJlc291cmNlcygpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdGV4dDogXCJTVVBQT1JUXCIsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIkdldCBTdXBwb3J0XCIsIGxpbms6IFwiL2hlbHBcIiB9LFxuICAgICAgICAvLyB7IHRleHQ6IFwiSG93IGl0IFdvcmtzXCIsIGxpbms6IFwib3ZlcnZpZXcvaG93LWl0LXdvcmtzXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlJFU09VUkNFU1wiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogXCJCcmFuZCBBc3NldHNcIiwgbGluazogXCIvbWVkaWEta2l0XCIgfSxcbiAgICAgICAgLy8geyB0ZXh0OiBcIkFjY291bnQgTWFuYWdlbWVudFwiLCBsaW5rOiBcImd1aWRlL2FjY291bnQtbWFuYWdlbWVudFwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJDT01QQU5ZXCIsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIkFib3V0XCIsIGxpbms6IFwiL2NvbXBhbnkvYWJvdXRcIiB9LFxuICAgICAgICAvLyB7IHRleHQ6IFwiVGVhbVwiLCBsaW5rOiBcIi90ZWFtXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIkNvbnRhY3RzXCIsIGxpbms6IFwiL2NvbXBhbnkvY29udGFjdHNcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdXG59XG5cbmZ1bmN0aW9uIHNpZGViYXJBY2NvdW50KCk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIkhPTUVcIixcbiAgICAgIGxpbms6IFwiL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJNRUVUSU5HU1wiLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogXCJNZWV0aW5nc1wiLCBsaW5rOiBcIi9tZWV0aW5nc1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJIaXN0b3J5XCIsIGxpbms6IFwiL2hpc3RvcnlcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiVXBncmFkZVwiLCBsaW5rOiBcIi91cGdyYWRlXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIHRleHQ6IFwiU0VUVElOR1NcIixcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogXCJQcm9maWxlXCIsIGxpbms6IFwiL3NldHRpbmdzL3Byb2ZpbGVcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiU2V0dGluZ3NcIiwgbGluazogXCIvc2V0dGluZ3Mvc2V0dGluZ3NcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiU2V0dGluZ3NcIiwgbGluazogXCIvc2V0dGluZ3MvdXBncmFkZVwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF1cbn1cblxuZnVuY3Rpb24gc2lkZWJhclNldHRpbmdzKCk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdIHtcbiAgcmV0dXJuIFtdXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9raW5nd3d3L1ZTQ29kZS9Hb2xkZW5GaXNoUHJvamVjdC9wYWNrYWdlcy9kcmFmdGl1bS9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2kxOG5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9raW5nd3d3L1ZTQ29kZS9Hb2xkZW5GaXNoUHJvamVjdC9wYWNrYWdlcy9kcmFmdGl1bS9kb2NzLy52aXRlcHJlc3MvY29uZmlnL2kxOG4vcnUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2tpbmd3d3cvVlNDb2RlL0dvbGRlbkZpc2hQcm9qZWN0L3BhY2thZ2VzL2RyYWZ0aXVtL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvaTE4bi9ydS50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgdHlwZSBEZWZhdWx0VGhlbWUgfSBmcm9tIFwidml0ZXByZXNzXCJcblxuY29uc3QgQkFTRV9QQVRIID0gXCIvcnVcIlxuXG5leHBvcnQgY29uc3QgcnUgPSBkZWZpbmVDb25maWcoe1xuICBkZXNjcmlwdGlvbjpcbiAgICBcIkludGVyTUlORCBcdTA0MzRcdTA0M0VcdTA0MzFcdTA0MzBcdTA0MzJcdTA0M0JcdTA0NEZcdTA0MzVcdTA0NDIgXHUwNDNGXHUwNDM1XHUwNDQwXHUwNDM1XHUwNDMyXHUwNDNFXHUwNDM0IFx1MDQ0MFx1MDQzNVx1MDQ0N1x1MDQzOCBcdTA0MzIgXHUwNDQwXHUwNDM1XHUwNDMwXHUwNDNCXHUwNDRDXHUwNDNEXHUwNDNFXHUwNDNDIFx1MDQzMlx1MDQ0MFx1MDQzNVx1MDQzQ1x1MDQzNVx1MDQzRFx1MDQzOCBcdTA0M0EgXHUwNDNBXHUwNDMwXHUwNDM2XHUwNDM0XHUwNDNFXHUwNDNDXHUwNDQzIFx1MDQzMlx1MDQzOFx1MDQzNFx1MDQzNVx1MDQzRVx1MDQzN1x1MDQzMlx1MDQzRVx1MDQzRFx1MDQzQVx1MDQ0MywgXHUwNDQ3XHUwNDQyXHUwNDNFXHUwNDMxXHUwNDRCIFx1MDQzQ1x1MDQzNVx1MDQzNlx1MDQzNFx1MDQ0M1x1MDQzRFx1MDQzMFx1MDQ0MFx1MDQzRVx1MDQzNFx1MDQzRFx1MDQ0Qlx1MDQzNSBcdTA0M0FcdTA0M0VcdTA0M0NcdTA0MzBcdTA0M0RcdTA0MzRcdTA0NEIgXHUwNDNEXHUwNDM4XHUwNDNBXHUwNDNFXHUwNDMzXHUwNDM0XHUwNDMwIFx1MDQzRFx1MDQzNSBcdTA0NDJcdTA0MzVcdTA0NDBcdTA0NEZcdTA0M0JcdTA0MzggXHUwNDQxXHUwNDM0XHUwNDM1XHUwNDNCXHUwNDNBXHUwNDM4LCBcdTA0MzJcdTA0NDBcdTA0MzVcdTA0M0NcdTA0NEYgXHUwNDM4XHUwNDNCXHUwNDM4IFx1MDQ0Rlx1MDQ0MVx1MDQzRFx1MDQzRVx1MDQ0MVx1MDQ0Mlx1MDQ0QyBcdTA0MzhcdTA0MzctXHUwNDM3XHUwNDMwIFx1MDQ0Rlx1MDQzN1x1MDQ0Qlx1MDQzQVx1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQ0NSBcdTA0MzFcdTA0MzBcdTA0NDBcdTA0NENcdTA0MzVcdTA0NDBcdTA0M0VcdTA0MzIuXCIsXG4gIGhlYWQ6IFtbXCJtZXRhXCIsIHsgcHJvcGVydHk6IFwib2c6dGl0bGVcIiwgY29udGVudDogXCJcdTA0MTJcdTA0MzhcdTA0MzRcdTA0MzVcdTA0M0VcdTA0MzdcdTA0MzJcdTA0M0VcdTA0M0RcdTA0M0FcdTA0MzggXHUwNDQxIFx1MDQ0MVx1MDQzOFx1MDQzRFx1MDQ0NVx1MDQ0MFx1MDQzRVx1MDQzRFx1MDQzRFx1MDQ0Qlx1MDQzQyBcdTA0M0ZcdTA0MzVcdTA0NDBcdTA0MzVcdTA0MzJcdTA0M0VcdTA0MzRcdTA0M0VcdTA0M0MgfCBJbnRlck1JTkRcIiB9XV0sXG5cbiAgdGhlbWVDb25maWc6IHtcbiAgICBuYXY6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTA0MUZcdTA0NDBcdTA0M0VcdTA0MzRcdTA0NDNcdTA0M0FcdTA0NDJcIixcbiAgICAgICAgYWN0aXZlTWF0Y2g6IGAke0JBU0VfUEFUSH0vcHJvZHVjdC9gLFxuICAgICAgICBsaW5rOiBgJHtCQVNFX1BBVEh9L3Byb2R1Y3Qvb3ZlcnZpZXcvd2hhdC1pcy1pbnRlcm1pbmRgLFxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgdGV4dDogXCJcdTA0MUFcdTA0M0VcdTA0M0NcdTA0M0ZcdTA0MzBcdTA0M0RcdTA0MzhcdTA0NEZcIixcbiAgICAgIC8vICAgYWN0aXZlTWF0Y2g6IGAke0JBU0VfUEFUSH0vY29tcGFueS9gLFxuICAgICAgLy8gICBsaW5rOiBgJHtCQVNFX1BBVEh9L2NvbXBhbnkvYWJvdXRgLFxuICAgICAgLy8gfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTA0MjZcdTA0MzVcdTA0M0RcdTA0NEJcIixcbiAgICAgICAgLy8gYWN0aXZlTWF0Y2g6IGAke0JBU0VfUEFUSH0vY29tcGFueS9gLFxuICAgICAgICBsaW5rOiBgJHtCQVNFX1BBVEh9LyNQcmljaW5nYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHUwNDIwXHUwNDM1XHUwNDQxXHUwNDQzXHUwNDQwXHUwNDQxXHUwNDRCXCIsXG4gICAgICAgIGFjdGl2ZU1hdGNoOiBgJHtCQVNFX1BBVEh9L3Byb2R1Y3QvYCxcbiAgICAgICAgLy8gaXRlbXM6IFtcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICB0ZXh0OiBcIlx1MDQxOFx1MDQxN1x1MDQyM1x1MDQyN1x1MDQxOFx1MDQyMlx1MDQyQ1wiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIC8vIHsgdGV4dDogXCJcdTA0MjZcdTA0MzVcdTA0M0RcdTA0NEJcIiwgbGluazogYCR7QkFTRV9QQVRIfS8jUHJpY2luZ2AgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiRkFRXCIsIGxpbms6IGAke0JBU0VfUEFUSH0vI0ZBUWAgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHUwNDFFXHUwNDQyXHUwNDM3XHUwNDRCXHUwNDMyXHUwNDRCXCIsIGxpbms6IGAke0JBU0VfUEFUSH0vI1Rlc3RpbW9uaWFsc2AgfSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiXHUwNDFBXHUwNDNFXHUwNDNDXHUwNDMwXHUwNDNEXHUwNDM0XHUwNDMwXCIsIGxpbms6IGAke0JBU0VfUEFUSH0vcmVzb3VyY2VzL3RlYW1gIH0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1MDQxQ1x1MDQzNVx1MDQzNFx1MDQzOFx1MDQzMC1cdTA0M0FcdTA0MzhcdTA0NDJcIiwgbGluazogYCR7QkFTRV9QQVRIfS9yZXNvdXJjZXMvbWVkaWEta2l0YCB9LFxuICAgICAgICBdLFxuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vIF0sXG4gICAgICB9LFxuICAgIF0sXG5cbiAgICBzaWRlYmFyOiB7XG4gICAgICBbYCR7QkFTRV9QQVRIfS9wcm9kdWN0L2BdOiB7IGJhc2U6IGAke0JBU0VfUEFUSH0vcHJvZHVjdC9gLCBpdGVtczogc2lkZWJhclByb2R1Y3QoKSB9LFxuICAgICAgLy8gW2Ake0JBU0VfUEFUSH0vY29tcGFueS9gXTogeyBiYXNlOiBgJHtCQVNFX1BBVEh9L2NvbXBhbnkvYCwgaXRlbXM6IHNpZGViYXJDb21wYW55KCkgfSxcbiAgICAgIFtgJHtCQVNFX1BBVEh9L3Jlc291cmNlcy9gXTogeyBiYXNlOiBgJHtCQVNFX1BBVEh9L3Jlc291cmNlcy9gLCBpdGVtczogc2lkZWJhclJlc291cmNlcygpIH0sXG4gICAgfSxcblxuICAgIGZvb3Rlcjoge1xuICAgICAgbWVzc2FnZTogYFx1MDBBOSBNaW5kLCAyMDI1LiB8IDxhIGhyZWY9XCIjXCIgb25DbGljaz1cIlVDX1VJLnNob3dTZWNvbmRMYXllcigpO1wiPlx1MDQxRFx1MDQzMFx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzRVx1MDQzOVx1MDQzQVx1MDQzOCBcdTA0M0FcdTA0M0VcdTA0M0RcdTA0NDRcdTA0MzhcdTA0MzRcdTA0MzVcdTA0M0RcdTA0NDZcdTA0MzhcdTA0MzBcdTA0M0JcdTA0NENcdTA0M0RcdTA0M0VcdTA0NDFcdTA0NDJcdTA0Mzg8L2E+IHwgPGEgaHJlZj1cIiR7QkFTRV9QQVRIfS9yZXNvdXJjZXMvY29tcGFueS9Qcml2YWN5LVBvbGljeVwiPlx1MDQxRlx1MDQzRVx1MDQzQlx1MDQzOFx1MDQ0Mlx1MDQzOFx1MDQzQVx1MDQzMCBcdTA0M0FcdTA0M0VcdTA0M0RcdTA0NDRcdTA0MzhcdTA0MzRcdTA0MzVcdTA0M0RcdTA0NDZcdTA0MzhcdTA0MzBcdTA0M0JcdTA0NENcdTA0M0RcdTA0M0VcdTA0NDFcdTA0NDJcdTA0Mzg8L2E+IHwgPGEgaHJlZj1cIiR7QkFTRV9QQVRIfS9yZXNvdXJjZXMvY29tcGFueS9MZWdhbC1SZWd1bGF0aW9ucy1mb3ItQUktU2VydmljZXNcIj5cdTA0MUZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0M0VcdTA0MzJcdTA0NEJcdTA0MzUgXHUwNDNEXHUwNDNFXHUwNDQwXHUwNDNDXHUwNDRCIFx1MDQzNFx1MDQzQlx1MDQ0RiBcdTA0MThcdTA0MTgtXHUwNDQxXHUwNDM1XHUwNDQwXHUwNDMyXHUwNDM4XHUwNDQxXHUwNDNFXHUwNDMyPC9hPiB8IDxhIGhyZWY9XCJodHRwczovL3N0YXR1cy5taW5kLmNvbS9cIj5cdTA0MjFcdTA0NDJcdTA0MzBcdTA0NDJcdTA0NDNcdTA0NDEgXHUwNDQxXHUwNDM1XHUwNDQwXHUwNDMyXHUwNDM4XHUwNDQxXHUwNDMwPC9hPmAsXG4gICAgfSxcblxuICAgIGxvY2FsaXphdGlvbjoge1xuICAgICAgcGxhY2Vob2xkZXI0U2VhcmNoSW5wdXQ6IFwiXHUwNDIxXHUwNDNGXHUwNDQwXHUwNDNFXHUwNDQxXHUwNDM4XHUwNDQyXHUwNDM1IFx1MDQ0N1x1MDQ0Mlx1MDQzRSBcdTA0NDNcdTA0MzNcdTA0M0VcdTA0MzRcdTA0M0RcdTA0M0UuLi5cIixcbiAgICAgIHBsYWNlaG9sZGVyNENoYXRGb290ZXI6IFwiXHUwNDIxXHUwNDNGXHUwNDQwXHUwNDNFXHUwNDQxXHUwNDM4XHUwNDQyXHUwNDM1IFx1MDQ0N1x1MDQ0Mlx1MDQzRSBcdTA0NDNcdTA0MzNcdTA0M0VcdTA0MzRcdTA0M0RcdTA0M0UuLi5cIixcbiAgICAgIHBsYWNlaG9sZGVyNENoYXRMaXN0OiBcIlx1MDQxMlx1MDQzMlx1MDQzNVx1MDQzNFx1MDQzOFx1MDQ0Mlx1MDQzNSBcdTA0NDJcdTA0MzVcdTA0M0NcdTA0NDMgXHUwNDQ3XHUwNDMwXHUwNDQyXHUwNDMwLi4uXCIsXG4gICAgICBidXR0b25MYWJlbDROYXZCdXR0b246IFwiXHUwNDFDXHUwNDMzXHUwNDNEXHUwNDNFXHUwNDMyXHUwNDM1XHUwNDNEXHUwNDNEXHUwNDRCXHUwNDM5IFx1MDQ0RFx1MDQzQVx1MDQ0MVx1MDQzRlx1MDQzNVx1MDQ0MFx1MDQ0Mlx1MDQzRFx1MDQ0Qlx1MDQzOSBcdTA0NDdcdTA0MzBcdTA0NDJcIixcbiAgICAgIGJ1dHRvbkxhYmVsNEF1dGhCdXR0b246IFwiXHUwNDEyXHUwNDNFXHUwNDM5XHUwNDQyXHUwNDM4XCIsXG4gICAgfSxcbiAgICBjb250YWN0X2Zvcm06IHtcbiAgICAgIG5hbWU6IFwiXHUwNDE4XHUwNDNDXHUwNDRGICpcIixcbiAgICAgIG5hbWVQbGFjZWhvbGRlcjogXCJcdTA0MzJcdTA0MzBcdTA0NDhcdTA0MzUgXHUwNDM4XHUwNDNDXHUwNDRGXCIsXG4gICAgICBlbWFpbDogXCJFbWFpbCAqXCIsXG4gICAgICBlbWFpbFBsYWNlaG9sZGVyOiBcIlx1MDQzMlx1MDQzMFx1MDQ0OCBlbWFpbCBcdTA0MzBcdTA0MzRcdTA0NDBcdTA0MzVcdTA0NDFcIixcbiAgICAgIHdlYlNpdGU6IFwiXHUwNDIxXHUwNDMwXHUwNDM5XHUwNDQyIFx1MDQzQVx1MDQzRVx1MDQzQ1x1MDQzRlx1MDQzMFx1MDQzRFx1MDQzOFx1MDQzOCAqXCIsXG4gICAgICB3ZWJTaXRlUGxhY2Vob2xkZXI6IFwiXHUwNDNEXHUwNDMwXHUwNDNGXHUwNDQwXHUwNDM4XHUwNDNDXHUwNDM1XHUwNDQwLCBodHRwczovL2NvbXBhbnluYW1lLmNvbVwiLFxuICAgICAgd2ViU2l0ZUVycm9yOiBcIlx1MDQxRlx1MDQzRVx1MDQzNlx1MDQzMFx1MDQzQlx1MDQ0M1x1MDQzOVx1MDQ0MVx1MDQ0Mlx1MDQzMCwgXHUwNDMyXHUwNDMyXHUwNDM1XHUwNDM0XHUwNDM4XHUwNDQyXHUwNDM1IFx1MDQzMFx1MDQzNFx1MDQ0MFx1MDQzNVx1MDQ0MSBcdTA0NDFcdTA0MzBcdTA0MzlcdTA0NDJcdTA0MzBcIixcbiAgICAgIGNhdGVnb3J5OiBcIlx1MDQxQVx1MDQzMFx1MDQzQVx1MDQzRVx1MDQzMlx1MDQzMCBcdTA0MzJcdTA0MzBcdTA0NDhcdTA0MzAgXHUwNDNFXHUwNDQxXHUwNDNEXHUwNDNFXHUwNDMyXHUwNDNEXHUwNDMwXHUwNDRGIFx1MDQ0Nlx1MDQzNVx1MDQzQlx1MDQ0Qz8gKlwiLFxuICAgICAgY2F0ZWdvcnlQbGFjZWhvbGRlcjogXCJcdTA0MTJcdTA0NEJcdTA0MzFcdTA0MzVcdTA0NDBcdTA0MzhcdTA0NDJcdTA0MzUgXHUwNDNEXHUwNDMwXHUwNDM4XHUwNDMxXHUwNDNFXHUwNDNCXHUwNDM1XHUwNDM1IFx1MDQzMlx1MDQzMFx1MDQzNlx1MDQzRFx1MDQzRVx1MDQzNVwiLFxuICAgICAgbWVzc2FnZTogXCJcdTA0MTRcdTA0MzBcdTA0MzJcdTA0MzBcdTA0MzlcdTA0NDJcdTA0MzUgXHUwNDNFXHUwNDMxXHUwNDQxXHUwNDQzXHUwNDM0XHUwNDM4XHUwNDNDIFx1MDQzMlx1MDQzMFx1MDQ0OFx1MDQzOCBcdTA0NDZcdTA0MzVcdTA0M0JcdTA0MzggKFx1MDQzRFx1MDQzNVx1MDQzRVx1MDQzMVx1MDQ0Rlx1MDQzN1x1MDQzMFx1MDQ0Mlx1MDQzNVx1MDQzQlx1MDQ0Q1x1MDQzRFx1MDQzRSlcIixcbiAgICAgIG1lc3NhZ2VQbGFjZWhvbGRlcjogXCJcdTA0MUZcdTA0M0VcdTA0MzZcdTA0MzBcdTA0M0JcdTA0NDNcdTA0MzlcdTA0NDFcdTA0NDJcdTA0MzAsIFx1MDQzRlx1MDQ0MFx1MDQzNVx1MDQzNFx1MDQzRVx1MDQ0MVx1MDQ0Mlx1MDQzMFx1MDQzMlx1MDQ0Q1x1MDQ0Mlx1MDQzNSBcdTA0M0JcdTA0NEVcdTA0MzFcdTA0NEJcdTA0MzUgXHUwNDM0XHUwNDNFXHUwNDNGXHUwNDNFXHUwNDNCXHUwNDNEXHUwNDM4XHUwNDQyXHUwNDM1XHUwNDNCXHUwNDRDXHUwNDNEXHUwNDRCXHUwNDM1IFx1MDQzNFx1MDQzNVx1MDQ0Mlx1MDQzMFx1MDQzQlx1MDQzOCAoXHUwNDNEXHUwNDM1XHUwNDNFXHUwNDMxXHUwNDRGXHUwNDM3XHUwNDMwXHUwNDQyXHUwNDM1XHUwNDNCXHUwNDRDXHUwNDNEXHUwNDNFKVwiLFxuICAgICAgc3VibWl0OiBcIlx1MDQxRVx1MDQ0Mlx1MDQzRlx1MDQ0MFx1MDQzMFx1MDQzMlx1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0MzdcdTA0MzBcdTA0M0ZcdTA0NDBcdTA0M0VcdTA0NDFcIixcbiAgICAgIHNlbmRpbmc6IFwiXHUwNDFFXHUwNDQyXHUwNDNGXHUwNDQwXHUwNDMwXHUwNDMyXHUwNDNBXHUwNDMwLi4uXCIsXG4gICAgICBzdWNjZXNzVGl0bGU6IFwiXHUwNDIxXHUwNDNGXHUwNDMwXHUwNDQxXHUwNDM4XHUwNDMxXHUwNDNFIVwiLFxuICAgICAgc3VjY2Vzc01lc3NhZ2U6IFwiXHUwNDFDXHUwNDRCIFx1MDQzRlx1MDQzRVx1MDQzQlx1MDQ0M1x1MDQ0N1x1MDQzOFx1MDQzQlx1MDQzOCBcdTA0MzJcdTA0MzBcdTA0NDhcdTA0MzUgXHUwNDQxXHUwNDNFXHUwNDNFXHUwNDMxXHUwNDQ5XHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1IFx1MjAxNCBcdTA0M0RcdTA0MzBcdTA0NDhcdTA0MzAgXHUwNDNBXHUwNDNFXHUwNDNDXHUwNDMwXHUwNDNEXHUwNDM0XHUwNDMwIFx1MDQ0MVx1MDQzMlx1MDQ0Rlx1MDQzNlx1MDQzNVx1MDQ0Mlx1MDQ0MVx1MDQ0RiBcdTA0NDEgXHUwNDMyXHUwNDMwXHUwNDNDXHUwNDM4IFx1MDQzMiBcdTA0MzFcdTA0M0JcdTA0MzhcdTA0MzZcdTA0MzBcdTA0MzlcdTA0NDhcdTA0MzVcdTA0MzUgXHUwNDMyXHUwNDQwXHUwNDM1XHUwNDNDXHUwNDRGLlwiLFxuICAgICAgZGVmYXVsdENhdGVnb3JpZXM6IFtcbiAgICAgICAgXCJcdTA0MjNcdTA0NDFcdTA0NDJcdTA0NDBcdTA0MzBcdTA0M0RcdTA0MzhcdTA0NDJcdTA0NEMgXHUwNDRGXHUwNDM3XHUwNDRCXHUwNDNBXHUwNDNFXHUwNDMyXHUwNDRCXHUwNDM1IFx1MDQzMVx1MDQzMFx1MDQ0MFx1MDQ0Q1x1MDQzNVx1MDQ0MFx1MDQ0QiBcdTA0M0RcdTA0MzAgXHUwNDMyXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDM1XHUwNDQ3XHUwNDMwXHUwNDQ1XCIsXG4gICAgICAgIFwiXHUwNDIxXHUwNDM0XHUwNDM1XHUwNDNCXHUwNDMwXHUwNDQyXHUwNDRDIFx1MDQzMlx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzNVx1MDQ0N1x1MDQzOCBcdTA0MzRcdTA0M0VcdTA0NDFcdTA0NDJcdTA0NDNcdTA0M0ZcdTA0M0RcdTA0NEJcdTA0M0NcdTA0MzggXHUwNDM0XHUwNDNCXHUwNDRGIFx1MDQzRlx1MDQzRVx1MDQzOFx1MDQ0MVx1MDQzQVx1MDQzMCBcdTA0MzggXHUwNDM0XHUwNDM1XHUwNDM5XHUwNDQxXHUwNDQyXHUwNDMyXHUwNDM4XHUwNDM5XCIsXG4gICAgICAgIFwiXHUwNDFFXHUwNDMxXHUwNDM1XHUwNDQxXHUwNDNGXHUwNDM1XHUwNDQ3XHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQ0MVx1MDQzRVx1MDQzRVx1MDQ0Mlx1MDQzMlx1MDQzNVx1MDQ0Mlx1MDQ0MVx1MDQ0Mlx1MDQzMlx1MDQzOFx1MDQzNSBcdTA0NDJcdTA0NDBcdTA0MzVcdTA0MzFcdTA0M0VcdTA0MzJcdTA0MzBcdTA0M0RcdTA0MzhcdTA0NEZcdTA0M0MgXHUwNDM4IFx1MDQ0MFx1MDQzNVx1MDQzN1x1MDQzOFx1MDQzNFx1MDQzNVx1MDQzRFx1MDQ0Mlx1MDQzRFx1MDQzRVx1MDQ0MVx1MDQ0Mlx1MDQ0QyBcdTA0MzRcdTA0MzBcdTA0M0RcdTA0M0RcdTA0NEJcdTA0NDUgKFx1MDQxNVx1MDQyMSAvIFx1MDQyMVx1MDQyOFx1MDQxMCAvIFx1MDQxMFx1MDQzN1x1MDQzOFx1MDQ0RilcIixcbiAgICAgICAgXCJcdTA0MUZcdTA0NDBcdTA0M0VcdTA0NDFcdTA0NDJcdTA0M0UgXHUwNDM4XHUwNDM3XHUwNDQzXHUwNDQ3XHUwNDMwXHUwNDRFIC8gXHUwNDE0XHUwNDQwXHUwNDQzXHUwNDMzXHUwNDNFXHUwNDM1XCIsXG4gICAgICBdLFxuXG4gICAgICBkZWZhdWx0QnV0dG9uVGV4dDogXCJcdTA0MUVcdTA0NDJcdTA0M0ZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0NENcdTA0NDJcdTA0MzUgXHUwNDNEXHUwNDMwXHUwNDNDIFx1MDQ0MVx1MDQzRVx1MDQzRVx1MDQzMVx1MDQ0OVx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNVwiLFxuICAgICAgLy8gZGVmYXVsdEJ1dHRvblRleHQ6IFwiXHUwNDFGXHUwNDNFXHUwNDNCXHUwNDQzXHUwNDQ3XHUwNDM4XHUwNDQyXHUwNDRDIFx1MDQzMVx1MDQzNVx1MDQ0MVx1MDQzRlx1MDQzQlx1MDQzMFx1MDQ0Mlx1MDQzRFx1MDQ0M1x1MDQ0RSBcdTA0M0FcdTA0M0VcdTA0M0RcdTA0NDFcdTA0NDNcdTA0M0JcdTA0NENcdTA0NDJcdTA0MzBcdTA0NDZcdTA0MzhcdTA0NEVcIixcbiAgICB9LFxuICB9IGFzIERlZmF1bHRUaGVtZS5Db25maWcsXG59KVxuXG5mdW5jdGlvbiBzaWRlYmFyUHJvZHVjdCgpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdGV4dDogXCJcdTA0MUVcdTA0MTFcdTA0MTdcdTA0MUVcdTA0MjBcIixcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiXHUwNDI3XHUwNDQyXHUwNDNFIFx1MDQ0Mlx1MDQzMFx1MDQzQVx1MDQzRVx1MDQzNSBJbnRlck1JTkQ/XCIsIGxpbms6IFwib3ZlcnZpZXcvd2hhdC1pcy1pbnRlcm1pbmRcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHUwNDFBXHUwNDMwXHUwNDNBIFx1MDQ0RFx1MDQ0Mlx1MDQzRSBcdTA0NDBcdTA0MzBcdTA0MzFcdTA0M0VcdTA0NDJcdTA0MzBcdTA0MzVcdTA0NDJcIiwgbGluazogXCJvdmVydmlldy9ob3ctaXQtd29ya3NcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHUwNDFGXHUwNDNCXHUwNDMwXHUwNDQyXHUwNDQ0XHUwNDNFXHUwNDQwXHUwNDNDXHUwNDMwIFx1MDQzMlx1MDQzOFx1MDQzNFx1MDQzNVx1MDQzRVx1MDQzMlx1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzNVx1MDQ0N1wiLCBsaW5rOiBcIm92ZXJ2aWV3L3ZpZGVvLW1lZXRpbmctcGxhdGZvcm1cIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHUwNDIwXHUwNDM1XHUwNDMzXHUwNDM4XHUwNDNFXHUwNDNEXHUwNDMwXHUwNDNCXHUwNDRDXHUwNDNEXHUwNDMwXHUwNDRGIFx1MDQzQVx1MDQzRVx1MDQzRFx1MDQ0NFx1MDQzOFx1MDQzNFx1MDQzNVx1MDQzRFx1MDQ0Nlx1MDQzOFx1MDQzMFx1MDQzQlx1MDQ0Q1x1MDQzRFx1MDQzRVx1MDQ0MVx1MDQ0Mlx1MDQ0QyBcdTA0MzRcdTA0MzBcdTA0M0RcdTA0M0RcdTA0NEJcdTA0NDVcIiwgbGluazogXCJvdmVydmlldy9wcml2YWN5LWFyY2hpdGVjdHVyZVwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTA0MUZcdTA0NDBcdTA0MzhcdTA0M0VcdTA0NDBcdTA0MzhcdTA0NDJcdTA0MzVcdTA0NDJcdTA0M0RcdTA0NEJcdTA0MzUgXHUwNDQwXHUwNDRCXHUwNDNEXHUwNDNBXHUwNDM4XCIsIGxpbms6IFwib3ZlcnZpZXcvbWFya2V0c1wiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTA0MjBcdTA0MjNcdTA0MUFcdTA0MUVcdTA0MTJcdTA0MUVcdTA0MTRcdTA0MjFcdTA0MjJcdTA0MTJcdTA0MUVcIixcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiXHUwNDFEXHUwNDMwXHUwNDQ3XHUwNDMwXHUwNDNCXHUwNDNFIFx1MDQ0MFx1MDQzMFx1MDQzMVx1MDQzRVx1MDQ0Mlx1MDQ0QlwiLCBsaW5rOiBcImd1aWRlL2dldHRpbmctc3RhcnRlZFwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTA0MjNcdTA0M0ZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0M0JcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzUgXHUwNDMwXHUwNDNBXHUwNDNBXHUwNDMwXHUwNDQzXHUwNDNEXHUwNDQyXHUwNDNFXHUwNDNDXCIsIGxpbms6IFwiZ3VpZGUvYWNjb3VudC1tYW5hZ2VtZW50XCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlx1MDQyMVx1MDQzRVx1MDQzN1x1MDQzNFx1MDQzMFx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0MzJcdTA0NDFcdTA0NDJcdTA0NDBcdTA0MzVcdTA0NDdcIiwgbGluazogXCJndWlkZS9jcmVhdGluZy1tZWV0aW5nc1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJcdTA0MThcdTA0M0RcdTA0NDJcdTA0MzVcdTA0NDBcdTA0NDRcdTA0MzVcdTA0MzlcdTA0NDEgXHUwNDMyXHUwNDQxXHUwNDQyXHUwNDQwXHUwNDM1XHUwNDQ3XHUwNDM4XCIsIGxpbms6IFwiZ3VpZGUvbWVldGluZy1pbnRlcmZhY2VcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHUwNDIwXHUwNDNFXHUwNDNCXHUwNDM4IFx1MDQzRlx1MDQzRVx1MDQzQlx1MDQ0Q1x1MDQzN1x1MDQzRVx1MDQzMlx1MDQzMFx1MDQ0Mlx1MDQzNVx1MDQzQlx1MDQzNVx1MDQzOVwiLCBsaW5rOiBcImd1aWRlL3VzZXItcm9sZXNcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiXHUwNDE4XHUwNDE4LVx1MDQ0NFx1MDQ0M1x1MDQzRFx1MDQzQVx1MDQ0Nlx1MDQzOFx1MDQzOFwiLCBsaW5rOiBcImd1aWRlL2FpLWZlYXR1cmVzXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlx1MDQxOFx1MDQ0MVx1MDQ0Mlx1MDQzRVx1MDQ0MFx1MDQzOFx1MDQ0RiBcdTA0MzJcdTA0NDFcdTA0NDJcdTA0NDBcdTA0MzVcdTA0NDdcIiwgbGluazogXCJndWlkZS9tZWV0aW5nLWhpc3RvcnlcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiRkFRXCIsIGxpbms6IFwiZ3VpZGUvZmFxXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlx1MDQyM1x1MDQ0MVx1MDQ0Mlx1MDQ0MFx1MDQzMFx1MDQzRFx1MDQzNVx1MDQzRFx1MDQzOFx1MDQzNSBcdTA0M0RcdTA0MzVcdTA0M0ZcdTA0M0VcdTA0M0JcdTA0MzBcdTA0MzRcdTA0M0VcdTA0M0FcIiwgbGluazogXCJndWlkZS90cm91Ymxlc2hvb3RpbmdcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdXG59XG5cbmZ1bmN0aW9uIHNpZGViYXJSZXNvdXJjZXMoKTogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiXHUwNDFGXHUwNDFFXHUwNDE0XHUwNDE0XHUwNDE1XHUwNDIwXHUwNDE2XHUwNDFBXHUwNDEwXCIsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIlx1MDQxRlx1MDQzRVx1MDQzQlx1MDQ0M1x1MDQ0N1x1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0M0ZcdTA0M0VcdTA0MzRcdTA0MzRcdTA0MzVcdTA0NDBcdTA0MzZcdTA0M0FcdTA0NDNcIiwgbGluazogXCIvaGVscFwiIH0sXG4gICAgICAgIC8vIHsgdGV4dDogXCJcdTA0MUFcdTA0MzBcdTA0M0EgXHUwNDREXHUwNDQyXHUwNDNFIFx1MDQ0MFx1MDQzMFx1MDQzMVx1MDQzRVx1MDQ0Mlx1MDQzMFx1MDQzNVx1MDQ0MlwiLCBsaW5rOiBcIm92ZXJ2aWV3L2hvdy1pdC13b3Jrc1wiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTA0MjBcdTA0MTVcdTA0MjFcdTA0MjNcdTA0MjBcdTA0MjFcdTA0MkJcIixcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiXHUwNDExXHUwNDQwXHUwNDM1XHUwNDNEXHUwNDM0XHUwNDNFXHUwNDMyXHUwNDRCXHUwNDM1IFx1MDQzQ1x1MDQzMFx1MDQ0Mlx1MDQzNVx1MDQ0MFx1MDQzOFx1MDQzMFx1MDQzQlx1MDQ0QlwiLCBsaW5rOiBcIi9tZWRpYS1raXRcIiB9LFxuICAgICAgICAvLyB7IHRleHQ6IFwiXHUwNDIzXHUwNDNGXHUwNDQwXHUwNDMwXHUwNDMyXHUwNDNCXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM1IFx1MDQzMFx1MDQzQVx1MDQzQVx1MDQzMFx1MDQ0M1x1MDQzRFx1MDQ0Mlx1MDQzRVx1MDQzQ1wiLCBsaW5rOiBcImd1aWRlL2FjY291bnQtbWFuYWdlbWVudFwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTA0MUFcdTA0MUVcdTA0MUNcdTA0MUZcdTA0MTBcdTA0MURcdTA0MThcdTA0MkZcIixcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiXHUwNDFFIFx1MDQzRFx1MDQzMFx1MDQ0MVwiLCBsaW5rOiBcIi9jb21wYW55L2Fib3V0XCIgfSxcbiAgICAgICAgLy8geyB0ZXh0OiBcIlx1MDQxQVx1MDQzRVx1MDQzQ1x1MDQzMFx1MDQzRFx1MDQzNFx1MDQzMFwiLCBsaW5rOiBcIi90ZWFtXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlx1MDQxQVx1MDQzRVx1MDQzRFx1MDQ0Mlx1MDQzMFx1MDQzQVx1MDQ0Mlx1MDQ0QlwiLCBsaW5rOiBcIi9jb21wYW55L2NvbnRhY3RzXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXVxufVxuXG4vLyBmdW5jdGlvbiBzaWRlYmFyUmVzb3VyY2VzKCk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdIHtcbi8vICAgcmV0dXJuIFtcbi8vICAgICB7IHRleHQ6IFwiXHUwNDFFIFx1MDQzRFx1MDQzMFx1MDQ0MVwiLCBsaW5rOiBcIi9hYm91dFwiIH0sXG4vLyAgICAgeyB0ZXh0OiBcIlx1MDQxQVx1MDQzRVx1MDQzRFx1MDQ0Mlx1MDQzMFx1MDQzQVx1MDQ0Mlx1MDQ0QlwiLCBsaW5rOiBcIi9jb250YWN0c1wiIH0sXG4vLyAgICAgeyB0ZXh0OiBcIlx1MDQxRlx1MDQzRVx1MDQzQlx1MDQ0M1x1MDQ0N1x1MDQzOFx1MDQ0Mlx1MDQ0QyBcdTA0M0ZcdTA0M0VcdTA0MzRcdTA0MzRcdTA0MzVcdTA0NDBcdTA0MzZcdTA0M0FcdTA0NDNcIiwgbGluazogXCIvaGVscFwiIH0sXG4vLyAgICAgeyB0ZXh0OiBcIlx1MDQxMVx1MDQ0MFx1MDQzNVx1MDQzRFx1MDQzNFx1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQzNSBcdTA0M0NcdTA0MzBcdTA0NDJcdTA0MzVcdTA0NDBcdTA0MzhcdTA0MzBcdTA0M0JcdTA0NEJcIiwgbGluazogXCIvbWVkaWEta2l0XCIgfSxcbi8vICAgXVxuLy8gfVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2luZ3d3dy9WU0NvZGUvR29sZGVuRmlzaFByb2plY3QvcGFja2FnZXMvZHJhZnRpdW0vZG9jcy8udml0ZXByZXNzL2NvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2tpbmd3d3cvVlNDb2RlL0dvbGRlbkZpc2hQcm9qZWN0L3BhY2thZ2VzL2RyYWZ0aXVtL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvbG9jYWxlcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMva2luZ3d3dy9WU0NvZGUvR29sZGVuRmlzaFByb2plY3QvcGFja2FnZXMvZHJhZnRpdW0vZG9jcy8udml0ZXByZXNzL2NvbmZpZy9sb2NhbGVzLnRzXCI7aW1wb3J0IHsgZW4gfSBmcm9tIFwiLi9lblwiXG4vLyBpbXBvcnQgeyBhciB9IGZyb20gXCIuL2kxOG4vYXJcIlxuLy8gaW1wb3J0IHsgaGkgfSBmcm9tIFwiLi9pMThuL2hpXCJcbi8vIGltcG9ydCB7IHVyIH0gZnJvbSBcIi4vaTE4bi91clwiXG4vLyBpbXBvcnQgeyBibiB9IGZyb20gXCIuL2kxOG4vYm5cIlxuLy8gaW1wb3J0IHsgbWwgfSBmcm9tIFwiLi9pMThuL21sXCJcbi8vIGltcG9ydCB7IHRhIH0gZnJvbSBcIi4vaTE4bi90YVwiXG4vLyBpbXBvcnQgeyB0ZSB9IGZyb20gXCIuL2kxOG4vdGVcIlxuLy8gaW1wb3J0IHsgZmEgfSBmcm9tIFwiLi9pMThuL2ZhXCJcbi8vIGltcG9ydCB7IHpoIH0gZnJvbSBcIi4vaTE4bi96aFwiXG4vLyBpbXBvcnQgeyBmciB9IGZyb20gXCIuL2kxOG4vZnJcIlxuaW1wb3J0IHsgcnUgfSBmcm9tIFwiLi9pMThuL3J1XCJcbi8vIGltcG9ydCB7IHVrIH0gZnJvbSBcIi4vaTE4bi91a1wiXG4vLyBpbXBvcnQgeyB0ciB9IGZyb20gXCIuL2kxOG4vdHJcIlxuLy8gaW1wb3J0IHsga28gfSBmcm9tIFwiLi9pMThuL2tvXCJcbi8vIGltcG9ydCB7IGphIH0gZnJvbSBcIi4vaTE4bi9qYVwiXG4vLyBpbXBvcnQgeyBpZCB9IGZyb20gXCIuL2kxOG4vaWRcIlxuLy8gaW1wb3J0IHsgdmkgfSBmcm9tIFwiLi9pMThuL3ZpXCJcbi8vIGltcG9ydCB7IHB0IH0gZnJvbSBcIi4vaTE4bi9wdFwiXG4vLyBpbXBvcnQgeyBlcyB9IGZyb20gXCIuL2kxOG4vZXNcIlxuLy8gaW1wb3J0IHsgZGUgfSBmcm9tIFwiLi9pMThuL2RlXCJcblxuaW50ZXJmYWNlIExvY2FsZVNwZWNpZmljQ29uZmlnIHtcbiAgbmFtZTogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbGFuZzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBsb2NhbGVzOiBSZWNvcmQ8c3RyaW5nLCBMb2NhbGVTcGVjaWZpY0NvbmZpZz4gPSB7XG4gIHJvb3Q6IHsgbmFtZTogXCJFbmdsaXNoXCIsIGxhYmVsOiBcIkVuZ2xpc2hcIiwgbGFuZzogXCJlbi1VU1wiLCAuLi5lbiB9LFxuICAvLyBlczogeyBuYW1lOiBcIlNwYW5pc2hcIiwgbGFiZWw6IFwiRXNwYVx1MDBGMW9sXCIsIGxhbmc6IFwiZXMtRVNcIiwgLi4uZXMgfSxcbiAgLy8gemg6IHsgbmFtZTogXCJDaGluZXNlIChTaW1wbGlmaWVkKVwiLCBsYWJlbDogXCJcdTRFMkRcdTY1ODdcIiwgbGFuZzogXCJ6aC1DTlwiLCAuLi56aCB9LFxuICAvLyBmcjogeyBuYW1lOiBcIkZyZW5jaFwiLCBsYWJlbDogXCJGcmFuXHUwMEU3YWlzXCIsIGxhbmc6IFwiZnItRlJcIiwgLi4uZnIgfSxcbiAgLy8gamE6IHsgbmFtZTogXCJKYXBhbmVzZVwiLCBsYWJlbDogXCJcdTY1RTVcdTY3MkNcdThBOUVcIiwgbGFuZzogXCJqYS1KUFwiLCAuLi5qYSB9LFxuICAvLyBhcjogeyBuYW1lOiBcIkFyYWJpYyAoR3VsZilcIiwgbGFiZWw6IFwiXHUwNjI3XHUwNjRFXHUwNjQ0XHUwNjUyXHUwNjM5XHUwNjRFXHUwNjMxXHUwNjRFXHUwNjI4XHUwNjUwXHUwNjRBXHUwNjRFXHUwNjUxXHUwNjI5XHUwNjRGXCIsIGxhbmc6IFwiYXItQUVcIiwgLi4uYXIgfSxcbiAgcnU6IHsgbmFtZTogXCJSdXNzaWFuXCIsIGxhYmVsOiBcIlx1MDQyMFx1MDQ0M1x1MDQ0MVx1MDQ0MVx1MDQzQVx1MDQzOFx1MDQzOVwiLCBsYW5nOiBcInJ1LVJVXCIsIC4uLnJ1IH0sXG4gIC8vIGRlOiB7IG5hbWU6IFwiR2VybWFuXCIsIGxhYmVsOiBcIkRldXRzY2hcIiwgbGFuZzogXCJkZS1ERVwiLCAuLi5kZSB9LFxuICAvLyBoaTogeyBuYW1lOiBcIkhpbmRpXCIsIGxhYmVsOiBcIlx1MDkzOVx1MDkzRlx1MDkyOFx1MDk0RFx1MDkyNlx1MDk0MFwiLCBsYW5nOiBcImhpLUlOXCIsIC4uLmhpIH0sXG4gIC8vIHVyOiB7IG5hbWU6IFwiVXJkdVwiLCBsYWJlbDogXCJcdTA2MjdcdTA2NEZcdTA2MzFcdTA2MkZcdTA2NEZcdTA2NDhcIiwgbGFuZzogXCJ1ci1QS1wiLCAuLi51ciB9LFxuICAvLyBibjogeyBuYW1lOiBcIkJlbmdhbGlcIiwgbGFiZWw6IFwiXHUwOUFDXHUwOUJFXHUwOTgyXHUwOUIyXHUwOUJFXCIsIGxhbmc6IFwiYm4tQkRcIiwgLi4uYm4gfSxcbiAgLy8gbWw6IHsgbmFtZTogXCJNYWxheWFsYW1cIiwgbGFiZWw6IFwiXHUwRDJFXHUwRDMyXHUwRDJGXHUwRDNFXHUwRDMzXHUwRDAyXCIsIGxhbmc6IFwibWwtSU5cIiwgLi4ubWwgfSxcbiAgLy8gdGE6IHsgbmFtZTogXCJUYW1pbFwiLCBsYWJlbDogXCJcdTBCQTRcdTBCQUVcdTBCQkZcdTBCQjRcdTBCQ0RcIiwgbGFuZzogXCJ0YS1JTlwiLCAuLi50YSB9LFxuICAvLyB0ZTogeyBuYW1lOiBcIlRlbHVndVwiLCBsYWJlbDogXCJcdTBDMjRcdTBDNDZcdTBDMzJcdTBDNDFcdTBDMTdcdTBDNDFcIiwgbGFuZzogXCJ0ZS1JTlwiLCAuLi50ZSB9LFxuICAvLyBmYTogeyBuYW1lOiBcIlBlcnNpYW4vRmFyc2lcIiwgbGFiZWw6IFwiXHUwNjQxXHUwNjI3XHUwNjMxXHUwNjMzXHUwNkNDXCIsIGxhbmc6IFwiZmEtSVJcIiwgLi4uZmEgfSxcbiAgLy8gdWs6IHsgbmFtZTogXCJVa3JhaW5pYW5cIiwgbGFiZWw6IFwiXHUwNDIzXHUwNDNBXHUwNDQwXHUwNDMwXHUwNDU3XHUwNDNEXHUwNDQxXHUwNDRDXHUwNDNBXHUwNDMwXCIsIGxhbmc6IFwidWstVUFcIiwgLi4udWsgfSxcbiAgLy8gdHI6IHsgbmFtZTogXCJUdXJraXNoXCIsIGxhYmVsOiBcIlRcdTAwRkNya1x1MDBFN2VcIiwgbGFuZzogXCJ0ci1UUlwiLCAuLi50ciB9LFxuICAvLyBrbzogeyBuYW1lOiBcIktvcmVhblwiLCBsYWJlbDogXCJcdUQ1NUNcdUFENkRcdUM1QjRcIiwgbGFuZzogXCJrby1LUlwiLCAuLi5rbyB9LFxuICAvLyBpZDogeyBuYW1lOiBcIkluZG9uZXNpYW5cIiwgbGFiZWw6IFwiQmFoYXNhIEluZG9uZXNpYVwiLCBsYW5nOiBcImlkLUlEXCIsIC4uLmlkIH0sXG4gIC8vIHZpOiB7IG5hbWU6IFwiVmlldG5hbWVzZVwiLCBsYWJlbDogXCJUaVx1MUVCRm5nIFZpXHUxRUM3dFwiLCBsYW5nOiBcInZpLVZOXCIsIC4uLnZpIH0sXG4gIC8vIHB0OiB7IG5hbWU6IFwiUG9ydHVndWVzZSAoQnJhemlsKVwiLCBsYWJlbDogXCJQb3J0dWd1XHUwMEVBc1wiLCBsYW5nOiBcInB0LUJSXCIsIC4uLnB0IH0sXG59IGFzIGNvbnN0XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNaLFNBQVMsZ0JBQUFBLHFCQUFvQjs7O0FDQTNCLFNBQVMsb0JBQW9CO0FBQ3JiLE9BQU8sd0JBQXdCOzs7QUNDL0IsSUFBTSxVQUFVO0FBQUEsRUFDZCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQ1I7QUFHQSxJQUFNLGdCQUFnQixRQUFRLElBQUksZUFBZSxlQUFlLFFBQVEsT0FBTyxRQUFRO0FBRWhGLElBQU0sZ0JBQThCO0FBQUEsRUFDekM7QUFBQSxJQUNFO0FBQUEsSUFDQSxDQUFDO0FBQUEsSUFDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQU82QyxhQUFhO0FBQUE7QUFBQTtBQUFBLEVBRzVEO0FBQ0Y7QUFFTyxJQUFNLGtCQUFnQztBQUFBLEVBQzNDO0FBQUEsSUFDRTtBQUFBLElBQ0EsQ0FBQztBQUFBLElBQ0QsNERBQTRELGFBQWE7QUFBQSxFQUMzRTtBQUNGOzs7QUQ3QkEsT0FBTyxhQUFhO0FBR3BCLElBQU0sVUFB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O0FBQUEsTUFDaEU7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsU0FBU0Msb0JBQStDO0FBQ3RELFNBQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sMkdBQXNCLE1BQU0sUUFBUTtBQUFBO0FBQUEsTUFFOUM7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLGlIQUF1QixNQUFNLGFBQWE7QUFBQTtBQUFBLE1BRXBEO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSw2QkFBUyxNQUFNLGlCQUFpQjtBQUFBO0FBQUEsUUFFeEMsRUFBRSxNQUFNLG9EQUFZLE1BQU0sb0JBQW9CO0FBQUEsTUFDaEQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QUN6SE8sSUFBTSxVQUFnRDtBQUFBLEVBQzNELE1BQU0sRUFBRSxNQUFNLFdBQVcsT0FBTyxXQUFXLE1BQU0sU0FBUyxHQUFHLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNaEUsSUFBSSxFQUFFLE1BQU0sV0FBVyxPQUFPLDhDQUFXLE1BQU0sU0FBUyxHQUFHLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZWhFOzs7QUw5Q0EsSUFBTyxpQkFBUUMsY0FBYTtBQUFBLEVBQzFCLEdBQUc7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiZGVmaW5lQ29uZmlnIiwgImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIiwgIkJBU0VfUEFUSCIsICJkZWZpbmVDb25maWciLCAic2lkZWJhclByb2R1Y3QiLCAic2lkZWJhclJlc291cmNlcyIsICJkZWZpbmVDb25maWciXQp9Cg==
