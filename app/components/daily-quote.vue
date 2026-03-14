<script lang="ts" setup>
const { data } = await useAsyncData(`quotes`, () => {
  return queryCollection<"quotes">("quotes").first();
});
const today = new Date().toISOString().slice(0, 10).replace(/\D/g, "");
const quotes = data.value?.quotes ?? [];
const quoteIndex = Number.parseInt(today) % quotes.length;
const quote = quotes.at(quoteIndex);
</script>

<template>
  <div>
    <blockquote>
      <p>
        {{ quote?.quote }}
      </p>
    </blockquote>
    <p>~ {{ quote?.author }} ~ </p>
  </div>
</template>
