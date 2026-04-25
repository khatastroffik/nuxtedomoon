<script lang="ts" setup>
const charset = "abcdefghijklmnopqrstuvwxyz1234567890";
const slotRef = useTemplateRef("DESCRAMBLE-ME");
const displayText = ref("");
const delay = 80;
onMounted(async () => {
  const originalText = slotRef.value!.textContent || "Ooooooh!";
  let prefix = "";
  for (let index = 0; index < originalText.length; index++) {
    await new Promise(resolve => setTimeout(resolve, delay));
    prefix += originalText.charAt(index);
    displayText.value = prefix + randomChars(originalText.length - prefix.length);
  }
});
function randomChars(length: number) {
  return Array.from({ length }).map(() => charset[Math.floor(Math.random() * charset.length)]).join("");
}
watch(
  () => displayText.value,
  newValue => slotRef.value!.textContent = newValue,
);
</script>

<template>
  <span ref="DESCRAMBLE-ME">
    <slot mdc-unwrap="p">NOTHING TO SHOW HERE</slot>
  </span>
</template>
