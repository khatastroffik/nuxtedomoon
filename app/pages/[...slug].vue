<script lang="ts" setup>
const { staticPagePath } = useStaticPageRoutes();
const spp = toValue(staticPagePath);

const { data: page } = await useAsyncData(`page-${spp}`, () => {
  return queryCollection("pages").path(spp).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

useSurroundings(queryCollectionItemSurroundings("pages", spp, { fields: ["menuPosition", "menuLabel"] }).order("menuPosition", "ASC"));

const ogImageComponentProps = { title: page.value.title, description: page.value.description, category: page.value.category };
const { data: ogImagePath } = await useAsyncData(`ogimage-${spp}`, async () => {
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
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" tag="main">no no no</ContentRenderer>
</template>
