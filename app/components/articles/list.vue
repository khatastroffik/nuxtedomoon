<script lang="ts" setup>
const { data: articles } = await useAsyncData("articles-list", () => {
  return queryCollection("articles").all();
});

if (!articles.value || articles.value.length < 1) {
  throw createError({ statusCode: 404, statusText: "Page not found", fatal: true });
}

articles.value?.sort((a, b) => {
  return (b.sitemap?.lastmod && a.sitemap?.lastmod) ? new Date(b.sitemap.lastmod).getTime() - new Date(a.sitemap.lastmod).getTime() : 0;
});

const firstArticle = articles.value[0]!;
</script>

<template>
  <div class="not-prose flex flex-col gap-y-4">
    <div class="card h-fit w-full border border-base-300 bg-base-200/20 shadow-sm hover:border-secondary md:card-side md:h-90">
      <figure>
        <LazyNuxtImg
          :src="firstArticle.cardImage"
          alt="article card"
          format="webp"
          height="400px" />
      </figure>
      <div class="card-body shrink p-4 md:p-8">
        <div class="inline text-xs font-light text-secondary">
          <ArticlesAttributes :minutes="firstArticle.readingTime" :publication-date="firstArticle.sitemap?.lastmod" />
        </div>
        <h2 class="card-title line-clamp-3 text-3xl font-bold">{{ firstArticle.title }}</h2>
        <p class="mt-2 line-clamp-3">{{ firstArticle.description }}</p>
        <div class="card-actions justify-end">
          <NuxtLink :to="firstArticle.path" class="btn btn-sm btn-secondary">Read more <Icon name="tabler:arrow-big-right" class="h-3 w-3" /></NuxtLink>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 items-stretch justify-between gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4">
      <div v-for="(article) in articles?.slice(1)" :key="article.id">
        <div class="card h-full border border-base-300 bg-base-200/20 shadow-sm hover:border-secondary 2xl:max-w-sm">
          <figure>
            <LazyNuxtImg
              :src="article.cardImage"
              alt="article card"
              format="webp"
              height="400px"
              class="hue-rotate-90" />
          </figure>
          <div class="card-body shrink p-4">
            <div class="inline text-xs font-light text-secondary">
              <ArticlesAttributes :minutes="firstArticle.readingTime" :publication-date="firstArticle.sitemap?.lastmod" />
            </div>
            <h2 class="card-title line-clamp-3 text-3xl font-bold">{{ article.title }}</h2>
            <p class="mt-2 line-clamp-4">{{ article.description }}</p>
            <div class="card-actions justify-end">
              <NuxtLink :to="article.path" class="btn  btn-xs btn-secondary">Read...<Icon name="tabler:arrow-big-right" class="h-3 w-3" /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
