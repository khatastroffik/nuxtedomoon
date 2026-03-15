<script lang="ts" setup>
const { data } = await useAsyncData(`quotes`, () => {
  return queryCollection<"quotes">("quotes").first();
});
const today = new Date().toISOString().slice(0, 10).replace(/\D/g, "");
const quotes = data.value?.quotes ?? [];
const quoteIndex = (Number.parseInt(today) - 1) % quotes.length;
const quote = quotes.at(quoteIndex);
</script>

<template>
  <div class="my-4 max-w-5xl px-8 pt-2 text-base-content/50">
    <blockquote class="mb-2">
      <p class="mb-0" v-html="quote?.quote.replace(/(\r\n|\r|\n)/g, '<br>')" />
    </blockquote>
    <p class="mt-0" v-html="`&#x203A; ${quote?.author} &#x2039;`" />
  </div>
</template>
