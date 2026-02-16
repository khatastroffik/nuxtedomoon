import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: { typeCheck: false }, // https://github.com/fi3ework/vite-plugin-checker/issues/557
  modules: ["@nuxt/content"],
  // tailwindcss: {
  //   cssPath: ["~/assets/style/main.css", { injectPosition: "first" }],
  //   config: {},
  //   editorSupport: true,
  //   viewer: true,
  //   exposeConfig: true,
  // },
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
    // @ts-expect-error plugin's interface is faulty (see https://github.com/tailwindlabs/tailwindcss/issues/18802)
    plugins: [tailwindcss()],
  },
});
