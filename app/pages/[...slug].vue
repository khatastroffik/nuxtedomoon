<script setup lang="ts">
defineOgImage();
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
  <div class="rounded-lg border border-base-300 bg-base-100 p-4">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
