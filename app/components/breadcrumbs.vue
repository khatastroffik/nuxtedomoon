<script lang="ts" setup>
const breadcrumbs = useBreadcrumbItems();
function getCurrentUrl() {
  return withSiteUrl(useRoute().fullPath, { withBase: true }).value;
}
</script>

<template>
  <div class="breadcrumbs px-2 text-sm leading-none">
    <ul>
      <li v-for="(item, index) in breadcrumbs" :key="index">
        <NuxtLink :to="item.to" class="opacity-80 hover:opacity-100" :aria-label="item.ariaLabel">
          <template v-if="item.to === '/'"><Icon name="tabler:home" class="h-4 w-4" /></template>
          {{ item.label }}
        </NuxtLink>
        <template v-if="index > 0 && index === breadcrumbs.length - 1">
          <CopyToClipboard class="ml-2 h-2.5 w-2.5 opacity-55" :val="getCurrentUrl()" />
        </template>
      </li>
    </ul>
  </div>
</template>
