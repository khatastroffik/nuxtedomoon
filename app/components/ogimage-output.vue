<script lang="ts" setup>
defineProps<{ url?: string }>();
</script>

<template>
  <img :src="url" width="600" alt="open grapth social media image preview">
</template>
