<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col items-center">
    <div class="inline-flex w-28 items-center justify-end gap-1 lg:w-36 xl:w-44">
      <div class="text-5xl font-semibold text-secondary md:text-6xl lg:text-7xl xl:text-8xl">
        <slot name="value" />
      </div>
      <div class="text-4xl font-extrabold text-accent md:text-5xl lg:text-6xl xl:text-7xl">+</div>
    </div>
    <div class="text-center text-xl xl:text-2xl">
      <slot name="description" />
    </div>
  </div>
</template>
