<script lang="ts" setup>
const { staticPagePath } = useStaticPageRoutes();

const { collectionQuery, surroundingsQuery } = computed(() =>
  staticPagePath.value === "/projects"
    ? {
        collectionQuery: queryCollection("pages").path(staticPagePath.value).first(),
        surroundingsQuery: queryCollectionItemSurroundings("pages", staticPagePath.value, { fields: ["menuPosition", "menuLabel"] }).order("menuPosition", "ASC"),
      }
    : {
        collectionQuery: queryCollection("projects").path(staticPagePath.value).first(),
        surroundingsQuery: queryCollectionItemSurroundings("projects", staticPagePath.value),
      },
).value;
const { data: page } = await useAsyncData(`projects-${staticPagePath.value}`, () => {
  return collectionQuery;
});

if (!page.value) {
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

useSurroundings(surroundingsQuery);

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
    <ReadingTime :minutes="page?.readingTime" class="text-sm font-light text-secondary" />
    <ContentRenderer v-if="page" :value="page" tag="main" />
  </article>
</template>
