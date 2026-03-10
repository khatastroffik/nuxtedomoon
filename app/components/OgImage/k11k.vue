<script setup lang="ts">
import { useSiteConfig } from "#site-config/app/composables/useSiteConfig";
import { computed } from "vue";

defineProps({
  title: { type: String, required: false, default: "title" },
  description: { type: String, required: false },
});

const green = "rgba(0, 228, 0, 0.5)";
const grey1 = "rgba(0, 47, 50, 0.1)";
const grey2 = "rgba(0, 47, 50, 0.2)";
const grey6 = "rgba(0, 47, 50, 0.6)";

const siteConfig = useSiteConfig();

const siteName = computed(() => {
  return siteConfig.name ?? null;
});

const siteLogo = computed(() => {
  return siteConfig.logo ?? "";
});
</script>

<template>
  <div class="relative flex h-full w-full justify-between border border-[#00e400] bg-gray-900 p-15 text-white">
    <div class="absolute top-0 -right-full flex h-[200%] w-[200%]" :style="{ backgroundImage: `radial-gradient(circle, ${green} 0%, ${grey6} 40%,  ${grey1} 65%,  ${grey2} 70%,  ${grey1} 80%)` }" />
    <div class="relative h-full w-full items-start justify-between">
      <div class="flex w-full flex-col">
        <h1 class="m-0 mb-7.5 text-6xl font-bold" style="display: block; text-overflow: ellipsis;" :style="{ lineClamp: description ? 2 : 3 }">
          {{ title }}
        </h1>
        <p v-if="description" class="line-clamp-3 block text-[35px] leading-12 text-ellipsis text-gray-300">
          {{ description }}
        </p>
      </div>
      <div class="flex w-full flex-row items-center justify-end text-right">
        <div v-if="siteName" class="mr-6 text-4xl font-bold">
          <span style="transform: rotate(180deg);" class="-mr-2">K</span>
          <span>hatastroffiK</span>
        </div>
        <img v-if="siteLogo" :src="siteLogo" class="h-24 w-24">
      </div>
    </div>
  </div>
</template>
