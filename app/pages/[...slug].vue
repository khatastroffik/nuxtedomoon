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
  <NuxtLink class="btn btn-xs btn-info btn-dash" to="/">
    &larr; go home
  </NuxtLink>
  <ContentRenderer v-if="page" :value="page" />
</template>
