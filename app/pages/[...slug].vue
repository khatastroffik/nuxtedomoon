<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection("pages").path(route.path).first();
});

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
