<script setup lang="ts">
const props = withDefaults(
  defineProps<{ preset?: string; size?: string; description?: string }>(),
  {
    preset: "avatar",
    size: tw`w-6`,
    description: "avatar picture",
  },
);
</script>

<template>
  <div class="not-prose avatar">
    <div class="rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100" :class="{ [`${props.size}`]: true }">
      <NuxtImg :preset="props.preset" src="/avatar.jpg" :alt="description" />
    </div>
  </div>
</template>
