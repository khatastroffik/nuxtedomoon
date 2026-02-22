import tailwindcss from "@tailwindcss/vite";

// eslint-disable-next-line node/prefer-global/process
const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL ?? "";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: { typeCheck: false }, // https://github.com/fi3ework/vite-plugin-checker/issues/557
  modules: ["@nuxtjs/seo", "@nuxt/content", "@nuxt/icon", "@nuxt/image", "@nuxtjs/color-mode"],
  css: ["~/assets/style/main.css"],
  content: {
    watch: {
      enabled: true,
    },
    renderer: {
      anchorLinks: { h2: true, h3: true, h4: false },
    },
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },
      },
    },
  },
  vite: {
    // @ts-expect-error plugin's interface is (currently) faulty (see https://github.com/tailwindlabs/tailwindcss/issues/18802)
    plugins: [tailwindcss()],
  },
  eslint: { config: { standalone: false } },
  // SITE-CONFIG
  site: {
    url: "https://khatastroffik.github.io",
    name: "KhatastroffiK World",
    defaultLocale: "en",
  },
  // SITEMAP
  sitemap: {
    zeroRuntime: true,
  },
  // ROBOTS
  robots: {
    robotsTxt: !(NUXT_APP_BASE_URL.length > 1),
    disallow: [],
    groups: [
      { userAgent: ["GPTBot", "ChatGPT-User"], disallow: ["/"] },
    ],
  },
  // OG-IMAGE
  ogImage: {
    // zeroRuntime: true,
    defaults: {
      component: "NuxtSeo",
    },
  },
  // SCHEMA-ORG
  schemaOrg: {
    identity: {
      type: "Person",
      name: "Loïs Bégué",
      // image: '/avatar.jpg',
      url: "https://khatastroffik.github.io",
    },
  },
  // LINK-CHECKER
  linkChecker: {
    failOnError: true,
    // generate reports
    report: {
      html: true,
      markdown: true,
    },
  },
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  image: {
    format: ["webp"],
    presets: {
      avatar: {
        modifiers: {
          format: "jpg",
          width: 50,
          height: 50,
        },
      },
    },
  },
  colorMode: {
    preference: "dark",
    dataValue: "theme",
    fallback: "dark",
  },
});
