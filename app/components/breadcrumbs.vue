<script lang="ts" setup>
const breadcrumbs = useBreadcrumbItems();
</script>

<template>
  <div class="breadcrumbs px-2 text-sm leading-none">
    <ul>
      <li v-for="(item, index) in breadcrumbs" :key="index">
        <NuxtLink :to="item.to" class="opacity-80 hover:opacity-100" :aria-label="item.ariaLabel">
          <template v-if="item.to === '/'"><Icon name="tabler:home" class="h-4 w-4" /></template>
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
