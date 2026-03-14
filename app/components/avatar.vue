<script setup lang="ts">
const props = withDefaults(
  defineProps<{ preset?: string; size?: string }>(),
  {
    preset: "avatar",
    size: tw`w-6`,
  },
);
</script>

<template>
  <div class="not-prose avatar" alt="Avatar">
    <div class="rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100" :class="{ [`${props.size}`]: true }">
      <NuxtImg :preset="props.preset" src="/avatar.jpg" />
    </div>
  </div>
</template>
