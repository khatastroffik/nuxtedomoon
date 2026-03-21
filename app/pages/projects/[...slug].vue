<script lang="ts" setup>
const { staticPagePath, ogImagePath } = useStaticPageRoutes();
const spp = toValue(staticPagePath);

const { collectionQuery, surroundingsQuery } = computed(() =>
  spp === "/projects"
    ? {
        collectionQuery: queryCollection("pages").path(spp).first(),
        surroundingsQuery: queryCollectionItemSurroundings("pages", spp, { fields: ["menuPosition", "menuLabel"] }).order("menuPosition", "ASC"),
      }
    : {
        collectionQuery: queryCollection("projects").path(spp).first(),
        surroundingsQuery: queryCollectionItemSurroundings("projects", spp),
      },
).value;

const { data: page } = await useAsyncData(`projects-${spp}`, () => {
  return collectionQuery;
});

if (!page.value) {
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

useSurroundings(surroundingsQuery);

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
