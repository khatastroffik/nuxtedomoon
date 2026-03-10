<script lang="ts" setup>
const { data: projects } = await useAsyncData("projects-list", () => {
  return queryCollection("projects").all();
});

projects.value?.sort((a, b) => (new Date(b.sitemap.lastmod).getTime()) - new Date(a.sitemap.lastmod).getTime());
</script>

<template>
  <div class="flex flex-wrap justify-between gap-5">
    <div v-for="project in projects" :key="project.id" class="not-prose image-full card max-w-96 shrink border-primary shadow-sm card-border hover:border-accent">
      <figure>
        <NuxtImg src="/project.jpg" />
      </figure>
      <div class="card-body">
        <h2 class="card-title items-start text-3xl font-bold">{{ project.title }} <div class="badge badge-sm badge-warning">NEW</div></h2>
        <p>{{ project.description }}</p>
        <div class="card-actions items-center justify-end">
          <div class="badge badge-outline badge-sm text-secondary">open source</div>
          <div class="badge badge-outline badge-sm text-secondary">nuxt v4</div>
          <NuxtLink :to="project.path" class="btn btn-sm btn-secondary">Read...</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
