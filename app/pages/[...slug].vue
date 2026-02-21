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
  <div class="navbar bg-base-200 px-4 ">
    <div class="navbar-start">
      <Brand />
    </div>
    <div class="navbar-end gap-4">
      <ThemeSwap />
      <Avatar />
    </div>
  </div>
  <ContentRenderer
    v-if="page"
    :value="page"
    class="prose prose-base" />
</template>
