<script lang="ts" setup>
const colorMode = useColorMode();
const isDark = computed({
  get() { return colorMode.value === "dark"; },
  set(value) { colorMode.preference = value ? "dark" : "light"; },
});
const switchTitle = computed(() => {
  return isDark.value ? "Dark Mode is on. Switch to light mode" : "Light Mode is on. Switch to dark mode";
});
</script>

<template>
  <label
    class="swap swap-rotate"
    :title="switchTitle"
    aria-label="Theme switcher"
    for="theme-switcher">
    <input id="theme-switcher" v-model="isDark" type="checkbox">
    <Icon name="tabler:sun" class="swap-off" />
    <Icon name="tabler:moon" class="swap-on" />
  </label>
</template>
