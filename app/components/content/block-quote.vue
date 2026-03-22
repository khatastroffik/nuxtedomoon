<script lang="ts" setup>

</script>

<template>
  <div v-if="$slots.quote" class="my-4 max-w-5xl px-8 pt-2 text-base-content/50">
    <blockquote class="mb-2">
      <p>
        <slot class="mb-0" name="quote" mdc-unwrap="p" />
      </p>
    </blockquote>
    <p v-if="$slots.author">
      &#x203A; <slot class="mt-0" name="author" mdc-unwrap="p" /> &#x2039;
      <cite v-if="$slots.cite">
        &nbsp;<slot name="cite" mdc-unwrap="p" />
      </cite>
    </p>
  </div>
</template>
