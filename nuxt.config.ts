import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

const _logo = "/logo.png";

const SITE_URL: string = import.meta.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000";
const BASE_URL: string = import.meta.env.NUXT_APP_BASE_URL || "";

function urlFromPath(path: string) {
  const cleanBaseUrl = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
  return new URL(cleanBaseUrl + path, SITE_URL).href;
}

export default defineNuxtConfig({
  app: {
    baseURL: BASE_URL,
    head: { link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preload", as: "image", type: "image/jpg", href: "/cover.jpg", fetchpriority: "high" },
    ] },
    pageTransition: { name: "page", mode: "out-in" },
  },
  nitro: {
    prerender: { crawlLinks: true, routes: ["/"] },
  },
  routeRules: {
    "/": { appLayout: false }, // Landing Page specific setting !
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: { typeCheck: false }, // https://github.com/fi3ework/vite-plugin-checker/issues/557
  modules: ["@nuxtjs/seo", "@nuxt/content", "@nuxt/icon", "@nuxt/image", "@nuxtjs/color-mode", "@nuxt/fonts"],
  css: ["~/assets/style/main.css"],
  content: {
    watch: { enabled: true },
    renderer: { anchorLinks: { h2: true, h3: true, h4: false } },
    build: { markdown: { toc: { depth: 3, searchDepth: 3 } } },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    mode: "css",
    cssLayer: "base",
  },
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

  // NUXT-SEO :: SITE-CONFIG
  site: {
    url: SITE_URL,
    name: "K11K",
    defaultLocale: "en",
    logo: _logo,
  },
  // NUXT-SEO :: SITEMAP
  sitemap: {
    zeroRuntime: true,
  },
  // NUXT-SEO :: ROBOTS
  robots: {
    robotsTxt: !BASE_URL,
    groups: [{ userAgent: ["GPTBot", "ChatGPT-User"], disallow: ["/"] }],
  },
  // NUXT-SEO :: OG-IMAGE
  ogImage: {
    zeroRuntime: false,
    compatibility: { prerender: { browser: false } }, // disable chromium dependency for prerendering (skips the chromium install in CIs)
  },
  // NUXT-SEO :: SCHEMA-ORG
  schemaOrg: {
    identity: {
      type: "Person",
      name: "Loïs Bégué",
      image: {
        "@id": urlFromPath("/#/schema/image/1"),
        "@type": "ImageObject",
        "contentUrl": urlFromPath("/avatar.jpg"),
        "inLanguage": "en",
        "url": urlFromPath("/avatar.jpg"),
      },
      url: SITE_URL,
    },
  },
  // NUXT-SEO :: LINK-CHECKER
  linkChecker: {
    failOnError: true,
  },
  $development: {
    site: {
      url: "http://localhost:3000",
    },
  },
});
