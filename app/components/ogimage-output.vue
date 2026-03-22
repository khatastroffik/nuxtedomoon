<script lang="ts" setup>
const route = useRoute();
const url = `/__og-image__/static${route.path === "/" ? "" : removeTrailingSlash(route.path)}/og.png`;
</script>

<template>
  <img :src="url" width="600" alt="open grapth social media image preview">
</template>
