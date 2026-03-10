<script lang="ts" setup>
const route = useRoute();
const url = `/__og-image__/static${route.path === "/" ? "" : route.path}/og.png`;
</script>

<template>
  <div>
    <img :src="url" width="600" alt="open grapth social media image">
  </div>
</template>

<style>

</style>
