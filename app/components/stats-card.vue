<script lang="ts" setup>

</script>

<template>
  <div class="flex w-xs max-w-xs flex-col flex-wrap content-center items-center px-4 py-2 sm:items-end">
    <div class="inline-flex items-center justify-center gap-1 xl:justify-end">
      <h2 class="text-3xl font-semibold text-secondary sm:text-4xl md:text-6xl xl:text-8xl">
        <slot name="value" />
      </h2>
      <h2 class="text-3xl font-extrabold text-accent sm:text-4xl md:text-7xl xl:text-6xl">+</h2>
    </div>
    <h4 class="text-center text-sm text-ellipsis sm:text-lg xl:text-end xl:text-2xl">
      <slot name="description" />
    </h4>
  </div>
</template>
