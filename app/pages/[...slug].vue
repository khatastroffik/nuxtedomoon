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
const test = tw`btn btn-dash btn-md btn-info`;
</script>

<template>
  <div class="navbar bg-base-200 px-4 text-neutral-content">
    <div class="navbar-start">
      <Brand />
    </div>
    <div class="navbar-end">
      <div :class="test">
        <Icon
          name="tabler:armchair"
          size="18"
          class="text-accent hover:text-accent-content" /> String Template value:
      </div>
      <code class="mr-2 ml-2 border border-accent-content bg-primary px-2 text-primary-content">{{ test }}</code>
      <div class="avatar">
        <div class="w-8 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
          <NuxtImg preset="avatar" src="/avatar.jpg" />
        </div>
      </div>
    </div>
  </div>
  <ContentRenderer
    v-if="page"
    :value="page"
    class="prose prose-base" />
</template>
