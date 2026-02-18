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

function tw(strings: any, ...values: any[]) {
  return String.raw({ raw: strings }, ...values);
}
const test = tw`btn btn-dash btn-xs btn-info`;
</script>

<template>
  <div class="navbar bg-neutral px-4 text-neutral-content">
    <div class="navbar-start ">
      <!-- <NuxtLink class="btn btn-dash btn-xs btn-info" to="/"> -->
      <NuxtLink :class="test" to="/">
        &larr; go home
      </NuxtLink>
    </div>
    <div class="navbar-end">
      String Template value: <code class="ml-2 border border-accent-content px-2 text-accent-content">{{ test }}</code>
    </div>
  </div>
  <ContentRenderer v-if="page" :value="page" />
</template>
