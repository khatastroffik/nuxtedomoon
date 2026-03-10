<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(`project-${route.path}`, () => {
  return queryCollection("projects").path(route.path).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

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
  <div class="rounded-lg border border-base-300 bg-base-100 p-4">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
