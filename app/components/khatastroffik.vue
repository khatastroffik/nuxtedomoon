<script setup lang="ts">
defineProps({ short: { type: Boolean, default: false, required: false } });
</script>

<template>
  <span class="inline-flex">
    <span class="rotate-y-180">K</span>
    <span v-if="short">IIK</span>
    <span v-else>hatastroffiK</span>
  </span>
</template>
