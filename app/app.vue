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
.layout-enter-active,
.layout-leave-active,
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
  z-index: -100;
}
.layout-enter-from,
.layout-leave-to,
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.6rem);
}
</style>
