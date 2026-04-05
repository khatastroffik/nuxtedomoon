<script lang="ts" setup>
withDefaults(defineProps<{ minutes?: number }>(), { minutes: 1 });
</script>

<template>
  <div aria-label="Reading Time"><Icon name="tabler:clock" class="mr-1 size-2.5" />{{ minutes }} min.</div>
</template>
