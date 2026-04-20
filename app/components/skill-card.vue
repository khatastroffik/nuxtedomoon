<script lang="ts" setup>
defineProps<{
  skill: string;
  skillIcon: string;
}>();
const stroked = useIconStrokeWidth(1.2);
</script>

<template>
  <div class="card h-24 w-28 shrink-0 cursor-pointer border border-base-300 bg-base-300/25 shadow-sm card-sm hover:border-base-200 hover:bg-base-300/45">
    <div class="card-body items-center justify-center text-center">
      <Icon
        :name="skillIcon"
        size="32"
        :customize="stroked"
        class="text-secondary"
        :alt="skill" />
      <h2 class="card-title text-xs">{{ skill }}</h2>
    </div>
  </div>
</template>
