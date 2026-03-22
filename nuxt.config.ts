import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

// eslint-disable-next-line node/prefer-global/process
const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL ?? "";

const _url = "https://khatastroffik.github.io";
const _logo = `/apple-icon-144x144.png`;

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  routeRules: {
    "/": { appLayout: false }, // Landing Page specific setting !
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: { typeCheck: false }, // https://github.com/fi3ework/vite-plugin-checker/issues/557
  modules: ["@nuxtjs/seo", "@nuxt/content", "@nuxt/icon", "@nuxt/image", "@nuxtjs/color-mode"],
  css: ["~/assets/style/main.css"],
  content: {
    watch: { enabled: true },
    renderer: { anchorLinks: { h2: true, h3: true, h4: false } },
    build: { markdown: { toc: { depth: 3, searchDepth: 3 } } },
  },
  // @ts-expect-error plugin's interface is (currently) faulty (see https://github.com/tailwindlabs/tailwindcss/issues/18802)
  vite: { plugins: [tailwindcss()] },
  eslint: { config: { standalone: false } },
  // SITE-CONFIG
  site: {
    url: _url,
    name: "K11K",
    defaultLocale: "en",
    logo: _logo,
  },
  // SITEMAP
  sitemap: { zeroRuntime: true },
  // ROBOTS
  robots: {
    robotsTxt: !(NUXT_APP_BASE_URL.length > 1),
    disallow: [],
    groups: [{ userAgent: ["GPTBot", "ChatGPT-User"], disallow: ["/"] }],
  },
  // OG-IMAGE
  ogImage: {
    zeroRuntime: true,
    defaults: { component: "k11k", cacheMaxAgeSeconds: 60 * 60 * 24 * 3 },
    compatibility: { prerender: { chromium: false } }, // disable chromium dependency for prerendering (skips the chromium install in CIs)
  },
  // SCHEMA-ORG
  schemaOrg: {
    identity: {
      type: "Person",
      name: "Loïs Bégué",
      image: "/avatar.jpg",
      url: _url,
    },
  },
  // LINK-CHECKER
  linkChecker: { failOnError: true },
  icon: { mode: "css", cssLayer: "base" },
  image: {
    format: ["webp"],
    presets: {
      landing: {
        modifiers: {
          format: "webp",
          width: 200,
          height: 200,
        },
      },
      avatar: {
        modifiers: {
          format: "webp",
          width: 50,
          height: 50,
        },
      },
      ogImageLogo: {
        modifiers: {
          format: "png",
          width: 96,
          height: 96,
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
