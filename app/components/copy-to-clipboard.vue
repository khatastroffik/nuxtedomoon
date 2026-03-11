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
      <Icon :name="copied ? 'tabler:check' : 'tabler:copy'" :disabled="copied" @click.prevent="onCopy" />
    </template>
  </ClientOnly>
</template>
