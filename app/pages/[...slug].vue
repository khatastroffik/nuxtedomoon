<script setup lang="ts">
defineOgImage();
const route = useRoute();

const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection("pages").path(route.path).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    class="rounded-lg border border-base-300 bg-base-100 p-4"
    tag="main" />
</template>
