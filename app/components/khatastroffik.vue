<script setup lang="ts">
defineProps({ short: { type: Boolean, default: false, required: false } });
</script>

<template>
  <div class="inline-flex">
    <div class="rotate-y-180">K</div>
    <div v-if="short">IIK</div>
    <div v-else>hatastroffiK</div>
  </div>
</template>
