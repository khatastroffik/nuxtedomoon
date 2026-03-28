<script lang="ts" setup>
const { staticPagePath } = useStaticPageRoutes();
const spp = toValue(staticPagePath);

const { data: page } = await useAsyncData(`page-${spp}`, () => {
  return queryCollection("pages").path(spp).first();
});

if (!page.value) {
  console.error(`Page not found\n[PATH] ${spp}`);
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

useSurroundings(queryCollectionItemSurroundings("pages", spp, { fields: ["menuPosition", "menuLabel"] }).order("menuPosition", "ASC"));

const [ogImagePath] = defineOgImage("K11k", { title: page.value.title, description: page.value.description, category: page.value.category });

useSeoMeta({
  title: page.value.title,
  description: page.value.description,
  ogImage: ogImagePath,
  ogImageAlt: `Social Media card representation of the page: ${page.value.title}`,
  twitterTitle: page.value.title,
  twitterDescription: page.value.description,
  twitterImage: ogImagePath,
});
</script>

<template>
  <div>
    <p>{{ ogImagePath }}</p>
    <img :src="ogImagePath" width="600" alt="open grapth social media image preview">
    <ContentRenderer v-if="page" :value="page" tag="main">no no no</ContentRenderer>
  </div>
</template>
