<script lang="ts" setup>
const IsNotDigit = /\D/g;
const IsLineBreak = /(\r\n|\r|\n)/g;
const quoteOfTheDay = ref<{ quote: string; author: string; cite?: string }>({ quote: "To attain knowledge, add things everyday.\nTo obtain wisdom, remove things everyday.", author: "Lao Tzu", cite: undefined });

const { data: quotes } = await useAsyncData(`quotes`, () => {
  return queryCollection<"quotes">("quotes").first().then(item => item?.quotes);
});

function formatQuoteSource(q: typeof quoteOfTheDay.value) {
  return `&#x203A; ${q.author}${q.cite ? ` (${q.cite})` : ""} &#x2039;`;
}

onMounted(() => {
  const quoteIndex = Number.parseInt(new Date().toISOString().slice(0, 10).replace(IsNotDigit, "")) % (quotes.value?.length || 1);
  const q = quotes.value?.at(quoteIndex);
  if (q) {
    quoteOfTheDay.value = { quote: q.quote.replace(IsLineBreak, "<br>"), author: q.author, cite: q.cite };
  }
});
</script>

<template>
  <div class="my-4 max-w-5xl px-8 pt-2 text-base-content/50" aria-label="quote of the day">
    <blockquote class="mb-2">
      <p class="mb-0" aria-label="quote" v-html="quoteOfTheDay.quote" />
    </blockquote>
    <p class="mt-0" aria-label="author" v-html="formatQuoteSource(quoteOfTheDay)" />
  </div>
</template>
