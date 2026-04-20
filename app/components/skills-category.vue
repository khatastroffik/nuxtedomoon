<script lang="ts" setup>
defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="mx-4 mb-4 flex max-w-7xl flex-col gap-2  align-middle">
    <div class="text-center text-secondary/80 ">
      {{ label ?? "divers" }}
      <NuxtLink to="/about" class="text-xs text-primary/60 hover:text-accent/60"> (more)</NuxtLink>
    </div>
    <div class="flex flex-wrap justify-center gap-4  rounded-lg border border-secondary/30 p-4">
      <slot />
    </div>
  </div>
</template>
