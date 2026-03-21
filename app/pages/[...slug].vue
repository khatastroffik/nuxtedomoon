<script lang="ts" setup>
const { staticPagePath, ogImagePath, originalRoute: route } = useStaticPageRoutes();
const spp = toValue(staticPagePath);

const { data: page } = await useAsyncData(`page-${spp}`, () => {
  return queryCollection("pages").path(spp).first();
});

if (!page.value) {
  console.error(`Page not found\nPATH=${route.path}\nFULLPATH=${route.fullPath}`);
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

useSurroundings(queryCollectionItemSurroundings("pages", route.path, { fields: ["menuPosition", "menuLabel"] }).order("menuPosition", "ASC"));

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
  <ContentRenderer v-if="page" :value="page" tag="main">no no no</ContentRenderer>
</template>
