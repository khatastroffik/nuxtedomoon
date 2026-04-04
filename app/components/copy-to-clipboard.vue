<script lang="ts" setup>
import { useClipboard } from "@vueuse/core";

const props = defineProps<{ val: string }>();
const { copy, copied, isSupported } = useClipboard();
async function onCopy() {
  await copy(props.val);
}
</script>

<template>
  <ClientOnly>
    <template v-if="isSupported && val">
      <div>
        <div class="tooltip absolute tooltip-bottom z-100">
          <div class="tooltip-content z-100">
            <div class="text-sm font-light text-white/70 italic inline-max">
              {{ copied ? "copied" : "copy link to clipboard" }}
            </div>
          </div>
          <Icon
            class="ml-3 h-2.5 w-2.5 opacity-55 hover:text-accent"
            :name="copied ? 'tabler:check' : 'tabler:copy'"
            :disabled="copied"
            @click.prevent="onCopy" />
        </div>
      </div>
    </template>
  </ClientOnly>
</template>
