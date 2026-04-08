<script lang="ts" setup>
import { useClipboard } from "@vueuse/core";

const props = withDefaults(
  defineProps<{ translucide?: boolean }>(),
  {
    translucide: false,
  },
);

const clickAnchors: Element[] = [];

const { copy, isSupported } = useClipboard();

async function doCopy(section: string) {
  const fullURL = withSiteUrl(useRoute().path, { withBase: true }).value + section;
  await copy(fullURL);
}

onMounted(() => {
  if (isSupported) {
    // This does work only in a "Markdown Content" context
    // i.e. with Nuxt-Content renderer, thus not on the landing page.
    const anchors = document.querySelectorAll(`.prose main > :is(h2, h3) > a`);
    anchors.forEach((anchor) => {
      clickAnchors.push(anchor);
      anchor.addEventListener("click", handleAnchorClick);
    });
  }
});

onBeforeUnmount(() => {
  clickAnchors.forEach((anchor) => {
    anchor.removeEventListener("click", handleAnchorClick);
  });
});

function handleAnchorClick(event: any) {
  if (!event.altKey) {
    return;
  }
  event.preventDefault();
  const section = event.target.getAttribute("href");
  doCopy(section);
}
</script>

<template>
  <div class="w-full max-w-7xl" role="main" aria-label="Main content of the page">
    <div class="prose prose-base h-fit w-full max-w-7xl rounded-lg border border-base-300 bg-base-100 px-12 py-12 " :class="{ 'bg-base-100/40': props.translucide }">
      <slot>
        <BaamOida />
      </slot>
    </div>
  </div>
</template>
