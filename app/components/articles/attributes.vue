<script lang="ts" setup>
withDefaults(defineProps<{ minutes?: number; publicationDate?: string }>(), { minutes: 1, publicationDate: "unknown" });
</script>

<template>
  <span>
    <Icon name="tabler:calendar" class="mr-1 size-2.5" />{{ publicationDate }}<span class="mx-3">-</span><ReadingTime :minutes="minutes" />
  </span>
</template>
