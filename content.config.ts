import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { defineOgImageSchema } from "nuxt-og-image/content";

export default defineContentConfig({
  collections: {
    pages: defineCollection(
      {
        type: "page",
        source: "*.md",
        schema: z.object({
          title: z.string(),
          description: z.string(),
          category: z.string(),
          menuLabel: z.string(),
          menuPosition: z.number(),
          sitemap: z.object({
            lastmod: z.date(),
            changefreq: z.string(),
            priority: z.number(),
          }),
          ogImage: defineOgImageSchema(),
        }),
      },
    ),

    articles: defineCollection(
      {
        type: "page",
        source: "articles/*.md",
        schema: z.object({
          title: z.string(),
          description: z.string(),
          category: z.string(),
          sitemap: z.object({
            lastmod: z.date(),
            changefreq: z.string(),
            priority: z.number(),
          }),
          ogImage: defineOgImageSchema(),
        }),
      },
    ),

    projects: defineCollection(
      {
        type: "page",
        source: "projects/*.md",
        schema: z.object({
          title: z.string(),
          description: z.string(),
          category: z.string(),
          sitemap: z.object({
            lastmod: z.date(),
            changefreq: z.string(),
            priority: z.number(),
          }),
          ogImage: defineOgImageSchema(),
        }),
      },
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
