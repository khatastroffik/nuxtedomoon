<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{ error: NuxtError & { url?: string } }>();
useHead({ htmlAttrs: { lang: "en" } });
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <BaamOida>
    <template #header>{{ error.status }}</template>
    {{ error.statusText }}
    <template v-if="error.message && error.message !== error.statusText" #details>{{ error.message }}</template>
    <template #footer><NuxtLink class="btn btn-dash" @click="handleError">Go back home</NuxtLink></template>
  </BaamOida>
</template>
