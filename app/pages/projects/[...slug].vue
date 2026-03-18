<script lang="ts" setup>
const route = useRoute();
const { collectionQuery, surroundingsQuery } = computed(() =>
  route.path === "/projects"
    ? {
        collectionQuery: queryCollection("pages").path(route.path).first(),
        surroundingsQuery: queryCollectionItemSurroundings("pages", route.path, { fields: ["menuPosition", "menuLabel"] }).order("menuPosition", "ASC"),
      }
    : {
        collectionQuery: queryCollection("projects").path(route.path).first(),
        surroundingsQuery: queryCollectionItemSurroundings("projects", route.path),
      },
).value;

const { data: page } = await useAsyncData(`projects-${route.path}`, () => {
  return collectionQuery;
});

if (!page.value) {
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

useSurroundings(surroundingsQuery);

const ogImagePath = computed(() => {
  return `/__og-image__/static${route.path === "/" ? "" : route.path}/og.png`;
});

defineOgImage();

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogImage: ogImagePath,
  twitterTitle: page.value.title,
  twitterDescription: page.value.description,
  twitterImage: ogImagePath,
});

useHead({ link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }] });
</script>

<template>
  <ContentRenderer v-if="page" :value="page" tag="main" />
</template>
