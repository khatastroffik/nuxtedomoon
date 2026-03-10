import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: "page",
      source: "*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        menuLabel: z.string(),
        menuPosition: z.number(),
        sitemap: z.object({
          lastmod: z.date(),
          changefreq: z.string(),
          priority: z.number(),
        }),

      }),
    }),
    articles: defineCollection({
      type: "page",
      source: "articles/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        sitemap: z.object({
          lastmod: z.date(),
          changefreq: z.string(),
          priority: z.number(),
        }),

      }),
    }),

    projects: defineCollection({
      type: "page",
      source: "projects/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        sitemap: z.object({
          lastmod: z.date(),
          changefreq: z.string(),
          priority: z.number(),
        }),

      }),
    }),

  },
});
