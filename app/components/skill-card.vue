<script lang="ts" setup>
defineProps<{
  skill: string;
  icon: string;
}>();
const stroked = useIconStrokeWidth(1.2);
</script>

<template>
  <div class="card h-28 w-36 shrink-0 cursor-pointer bg-base-300/25 shadow-sm card-sm card-border hover:bg-base-300/45">
    <div class="group card-body items-center justify-center text-center">
      <Icon
        :name="icon"
        size="36"
        :customize="stroked"
        class=" text-secondary group-hover:text-accent"
        :alt="skill" />
      <h2 class="card-title text-sm font-medium text-primary/90 group-hover:text-base group-hover:text-primary">{{ skill }}</h2>
    </div>
  </div>
</template>
