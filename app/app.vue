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
