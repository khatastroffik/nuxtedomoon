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
  console.error(`Page not found\n[PATH] ${staticPagePath.value}`);
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

useSurroundings(surroundingsQuery);

const [ogImagePath] = defineOgImage("K11k", { title: page.value.title, description: page.value.description, category: page.value.category });

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogImage: ogImagePath,
  ogImageAlt: `Social Media card representation of the page: ${page.value.title}`,
  twitterTitle: page.value.title,
  twitterDescription: page.value.description,
  twitterImage: ogImagePath,
  articleAuthor: ["K11K"], // [runtimeConfig["nuxt-schema-org"].identity.name],
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" tag="main" />
</template>
