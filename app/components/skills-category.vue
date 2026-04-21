<script lang="ts" setup>
defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="mb-4 flex w-full max-w-7xl flex-col gap-2 px-4 align-middle">
    <div class="rounded-lg border border-secondary/30 pt-4 text-secondary hover:border-warning/50 hover:text-warning">
      <div class="mx-auto w-fit rounded-2xl px-6 pb-1 text-center font-features-['smcp'] text-2xl font-semibold outline outline-secondary/30 hover:outline-warning/50">
        {{ label ?? "divers" }}
        <!-- <NuxtLink to="/about" class="text-xs text-primary/60 hover:text-accent/60"> (more)</NuxtLink> -->
      </div>
      <div class="flex flex-wrap justify-center gap-x-1 gap-y-1  p-4">
        <slot />
      </div>
    </div>
  </div>
</template>
