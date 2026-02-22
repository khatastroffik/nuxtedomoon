<script lang="ts" setup>
const colorMode = useColorMode();
const isDark = computed({
  get() { return colorMode.value === "dark"; },
  set(value) { colorMode.preference = value ? "dark" : "light"; },
});
</script>

<template>
  <label class="swap swap-rotate hover:text-accent">
    <input v-model="isDark" type="checkbox">
    <Icon name="tabler:sun" class="swap-off" />
    <Icon name="tabler:moon" class="swap-on" />
  </label>
</template>
