import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { asSeoCollection } from "@nuxtjs/seo/content";

export default defineContentConfig({
  collections: {
    pages: defineCollection(
      asSeoCollection({
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
    ),

    articles: defineCollection(
      asSeoCollection({
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
    ),

    projects: defineCollection(
      asSeoCollection({
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
    ),

    quotes: defineCollection({
      type: "data",
      source: "quotes.json",
      schema: z.object({
        quotes: z.array(
          z.object({
            quote: z.string(),
            author: z.string(),
            cite: z.string().optional(),
          }),
        ),
      }),
    }),

  },
});
