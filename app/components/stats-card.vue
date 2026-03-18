<script lang="ts" setup>

</script>

<template>
  <div class="flex w-fit max-w-xs flex-col flex-wrap content-center items-center px-4 py-2 sm:items-end">
    <div class="inline-flex items-center justify-center gap-1 xl:justify-end">
      <h2 class="text-5xl font-semibold text-secondary md:text-6xl lg:text-7xl xl:text-8xl">
        <slot name="value" />
      </h2>
      <h2 class="text-4xl font-extrabold text-accent md:text-5xl lg:text-6xl xl:text-7xl">+</h2>
    </div>
    <h4 class="text-center text-2xl text-ellipsis xl:text-end xl:text-3xl">
      <slot name="description" />
    </h4>
  </div>
</template>
