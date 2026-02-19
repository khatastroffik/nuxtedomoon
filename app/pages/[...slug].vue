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

function tw(strings: any, ...values: any[]) {
  return String.raw({ raw: strings }, ...values);
}
const test = tw`btn btn-dash btn-xs btn-info`;
</script>

<template>
  <div class="navbar bg-base-200 px-4 text-neutral-content">
    <div class="navbar-start">
      <Brand />
    </div>
    <div class="navbar-end">
      <div :class="test">
        String Template value:
      </div>
      <code class="ml-2 border border-accent-content bg-primary px-2 text-primary-content">{{ test }}</code>
    </div>
  </div>
  <ContentRenderer
    v-if="page"
    :value="page"
    class="prose prose-base" />
</template>
