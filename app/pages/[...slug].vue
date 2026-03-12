<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection("pages").path(route.path).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

useSurroundings(queryCollectionItemSurroundings("pages", route.path, { fields: ["menuPosition", "menuLabel"] }).order("menuPosition", "ASC"));

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
  <ContentRenderer
    v-if="page"
    :value="page"
    class="rounded-lg border border-base-300 bg-base-100 p-4"
    tag="main" />
</template>
