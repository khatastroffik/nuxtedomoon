<!-- eslint-disable tailwindcss/no-custom-classname -->
<script setup lang="ts">
import { useSiteConfig } from "#site-config/app/composables/useSiteConfig";
import { computed } from "vue";

defineProps({
  title: {
    type: String,
    required: false,
    default: "This very long title is used to purposely test the layout of the rendered image",
  },
  description: {
    type: String,
    required: false,
    default: "Nisi elit ex do et excepteur cupidatat. Pariatur dolor est aliqua sit dolore laborum sit enim aute pariatur magna Lorem sit et. Id ad ex esse exercitation sint do Lorem magna elit ut. Esse laborum reprehenderit ea commodo est.",
  },
  category: {
    type: String,
    required: false,
    default: "Article",
  },
});

const siteConfig = useSiteConfig();

const siteName = computed(() => {
  return siteConfig.name ?? null;
});

const siteLogo = computed(() => {
  return siteConfig.logo ?? "";
});
</script>

<template>
  <div class="flex h-full w-full justify-between rounded-4xl border-2 border-solid border-[#00e400] bg-black p-15 text-white">
    <div class="absolute inset-0 rounded-4xl bg-[radial-gradient(circle_at_bottom_right,rgba(0,228,0,0.5)_0%,rgba(0,47,50,0.6)_35%,rgba(0,47,50,0.1)_90%,rgba(0,47,50,0.2)_100%)]" />
    <div class="flex h-full w-full flex-col justify-start">
      <div class="flex w-full flex-1 flex-col justify-start">
        <div class="inline-flex place-content-center justify-start">
          <span class="rounded-xl bg-error px-6 py-1 text-2xl font-semibold text-accent-content">
            {{ category }}
          </span>
        </div>
        <h1 class="my-8 line-clamp-2 block max-h-40 overflow-clip text-6xl font-bold text-ellipsis">
          {{ title }}
        </h1>
        <p v-if="description" class="line-clamp-2 block max-h-28 overflow-clip text-[35px] leading-12 text-ellipsis text-gray-300">
          {{ description }}
        </p>
      </div>
      <div class="flex w-full flex-row items-center justify-end text-right text-base-content">
        <div v-if="siteName" class="mr-6 text-4xl font-bold">
          <div v-if="siteName === 'K11K'" class="text-5xl">
            <div style="transform: rotate(180deg);" class="">K</div>
            <div>hatastroffiK</div>
          </div>
          <div v-else>
            {{ siteName }}
          </div>
        </div>
        <NuxtImg
          v-if="siteLogo"
          :src="siteLogo"
          preset="ogImageLogo"
          width="96"
          height="96"
          placeholder="/apple-icon-144x144.png"
          class="h-24 w-24" />
      </div>
    </div>
  </div>
</template>
