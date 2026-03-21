<script lang="ts" setup>
const route = useRoute();
const routePath = computed(() => removeTrailingSlash(route.path));

const { data: page } = await useAsyncData(`page-${routePath.value}`, () => {
  return queryCollection("pages").path(routePath.value).first();
});

if (!page.value) {
  console.error(`Page not found\nPATH=${route.path}\nFULLPATH=${route.fullPath}`);
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

useSurroundings(queryCollectionItemSurroundings("pages", route.path, { fields: ["menuPosition", "menuLabel"] }).order("menuPosition", "ASC"));

const ogImagePath = computed(() => {
  return `/__og-image__/static${route.path === "/" ? "" : routePath.value}/og.png`;
});
// console.warn("OG-IMAGE =", ogImagePath.value);
// console.warn("PATH     =", route.path);
// console.warn("FULLPATH =", route.fullPath);
// console.warn("CLEANPATH =", routePath.value);

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
