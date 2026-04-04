<script lang="ts" setup>
import type { ContentNavigationItem } from "@nuxt/content";
import { watchDebounced } from "@vueuse/core";

const breadcrumbs = useBreadcrumbItems();

function getCurrentUrl() {
  return withSiteUrl(useRoute().fullPath, { withBase: true }).value;
}

const prevLinkTo = ref<ContentNavigationItem | undefined>(undefined);
const nextLinkTo = ref<ContentNavigationItem | undefined>(undefined);

watchDebounced(
  usePrevNext(),
  (newPrevNext, _) => {
    prevLinkTo.value = newPrevNext?.[0];
    nextLinkTo.value = newPrevNext?.[1];
  },
  { debounce: 200, immediate: true },
);
</script>

<template>
  <div class="relative flex w-full max-w-7xl flex-row" role="navigation" aria-label="navigation using breadcrumbs and links to the previous or next page on the same level">
    <div class="breadcrumbs inline-flex w-3/4 items-center justify-start px-2 text-sm leading-none">
      <ul>
        <li v-for="(item, index) in breadcrumbs" :key="index">
          <NuxtLink :to="item.to" class="no-underline opacity-80 hover:text-accent hover:opacity-100" :aria-label="item.ariaLabel">
            <template v-if="item.to === '/'"><Icon name="tabler:home" class="h-4 w-4" /></template>
            {{ item.label }}
          </NuxtLink>
          <template v-if="index > 0 && item.current">
            <CopyToClipboard :val="getCurrentUrl()" />
          </template>
        </li>
      </ul>
    </div>
    <div class="inline-flex w-1/4 items-center justify-end gap-2 px-2">
      <template v-if="prevLinkTo || nextLinkTo">
        <div class="tooltip tooltip-bottom z-100">
          <div v-if="prevLinkTo" class="tooltip-content translate-x-[calc(-50%+.75rem)]">
            <div class="text-sm font-light text-white/70 italic">navigate to</div>
            <p class="mb-2 px-1">&ldquo;&#x202F;{{ prevLinkTo?.title }}&#x202F;&rdquo;</p>
          </div>
          <NuxtLink :to="prevLinkTo?.path" class="btn btn-circle btn-soft btn-xs hover:text-accent" :class="{ 'btn-disabled': !prevLinkTo }">
            <Icon name="tabler:arrow-left" class="h-3 w-3" />
          </NuxtLink>
        </div>
        <div class="tooltip tooltip-bottom z-100">
          <div v-if="nextLinkTo" class="tooltip-content translate-x-[calc(-50%+.75rem)]">
            <div class="text-sm font-light text-white/70 italic">navigate to</div>
            <p class="mb-2 px-1">&laquo;&#x202F;{{ nextLinkTo?.title }}&#x202F;&raquo;</p>
          </div>
          <NuxtLink :to="nextLinkTo?.path" class="btn btn-circle btn-soft btn-xs hover:text-accent" :class="{ 'btn-disabled': !nextLinkTo }">
            <Icon name="tabler:arrow-right" class="h-3 w-3" />
          </NuxtLink>
        </div>
      </template>
    </div>
  </div>
</template>

<!--
Character Information:
- Left Double Quotation Mark (U+201C) :: &ldquo;
- Right Double Quotation Mark (U+201D) :: &rdquo;

- Narrow No-Break Space (U+202F) :: &#x202F;

- left-pointing double angle quotation mark (U+00AB)
- right-pointing double angle quotation mark (U+00BB)

- Reference Mark (U+203B) :: &#x203B;

- modifier letter low tilde (U+02F7) :: &#x02F7;

- combining tilde below (U+0330)

- modifier letter begin low tone (U+02FB) :: &#x02FB;
- modifier letter end low tone (U+02FC) :: &#x02FC;

- single left-pointing angle quotation mark (U+2039) :: &#x2039;
- single right-pointing angle quotation mark (U+203A) :: &#x203A;
-->
