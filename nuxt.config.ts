// https://nuxt.com/docs/api/configuration/nuxt-

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: { typeCheck: false }, // https://github.com/fi3ework/vite-plugin-checker/issues/557
  modules: ["@nuxt/content"],
  content: {
    // database: {
    //   type: "sqlite",
    //   filename: ":memory:",
    // },
    // experimental: {
    //   sqliteConnector: "native",
    // },
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
});
