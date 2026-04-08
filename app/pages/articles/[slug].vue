<script lang="ts" setup>
const { staticPagePath } = useStaticPageRoutes();

const { data: page } = await useAsyncData(`articles-${staticPagePath.value}`, () => {
  return queryCollection("articles").path(staticPagePath.value).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

useSurroundings(queryCollectionItemSurroundings("articles", staticPagePath.value));

const ogImageComponentProps = { title: page.value.title, description: page.value.description, category: page.value.category };
const { data: ogImagePath } = await useAsyncData(`ogimage-${staticPagePath.value}`, async () => {
  return Promise.resolve(defineOgImage("K11k.takumi", ogImageComponentProps)[0]);
});

const ogImageAlt = `Social Media Card of the page: ${page.value.title}`;

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogImage: ogImagePath.value,
  ogImageAlt,
  twitterTitle: page.value.title,
  twitterDescription: page.value.description,
  twitterCreator: "K11K",
  twitterImage: ogImagePath.value,
  twitterImageAlt: ogImageAlt,
  articleAuthor: ["K11K"], // [runtimeConfig["nuxt-schema-org"].identity.name],
});
</script>

<template>
  <article>
    <div class="text-sm font-light text-secondary">
      <ArticlesAttributes :minutes="page?.readingTime" :publication-date="page?.sitemap?.lastmod" />
    </div>
    <ContentRenderer v-if="page" :value="page" tag="main" />
  </article>
</template>
