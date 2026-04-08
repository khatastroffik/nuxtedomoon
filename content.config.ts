import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { defineRobotsSchema } from "@nuxtjs/robots/content";
import { defineSitemapSchema } from "@nuxtjs/sitemap/content";
import { defineOgImageSchema } from "nuxt-og-image/content";
import { defineSchemaOrgSchema } from "nuxt-schema-org/content";

export default defineContentConfig({
  collections: {
    pages: defineCollection(
      {
        type: "page",
        source: "*.md",
        schema: z.object({
          category: z.string(),
          menuLabel: z.string(),
          menuPosition: z.number(),
          readingTime: z.number().optional(),
          ogImage: defineOgImageSchema(),
          sitemap: defineSitemapSchema (),
          robots: defineRobotsSchema(),
          schemaOrg: defineSchemaOrgSchema(),
        }),
      },
    ),

    articles: defineCollection(
      {
        type: "page",
        source: "articles/*.md",
        schema: z.object({
          cardImage: z.string().default("/article.jpg"),
          category: z.string(),
          readingTime: z.number().optional(),
          robots: defineRobotsSchema(),
          sitemap: defineSitemapSchema (),
          ogImage: defineOgImageSchema(),
          schemaOrg: defineSchemaOrgSchema(),
        }),
      },
    ),

    projects: defineCollection(
      {
        type: "page",
        source: "projects/*.md",
        schema: z.object({
          cardImage: z.string().default("/article.jpg"),
          category: z.string(),
          readingTime: z.number().optional(),
          robots: defineRobotsSchema(),
          sitemap: defineSitemapSchema (),
          ogImage: defineOgImageSchema(),
          schemaOrg: defineSchemaOrgSchema(),
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
