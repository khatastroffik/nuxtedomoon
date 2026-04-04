<script lang="ts" setup>
defineProps<{ src?: string }>();
</script>

<template>
  <img :src="src" width="600" alt="open grapth social media image preview">
</template>
