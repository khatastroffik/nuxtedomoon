<script setup lang="ts">
useBreadcrumbItems({ overrides: [{ label: "Home", ariaLabel: "Home" }] });
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
  z-index: -100;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.6rem);
  /* translate: 0 -150vh; */
}
</style>
