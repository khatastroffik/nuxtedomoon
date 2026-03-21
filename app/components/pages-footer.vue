<script lang="ts" setup>

</script>

<template>
  <footer class="footer-center mb-4 footer max-w-7xl py-4 sm:footer-horizontal">
    <aside>
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved by Loïs Bégué aka <Khatastroffik class="inline-block" /></p>
      <div class="flex w-full max-w-7xl flex-row items-center justify-center gap-4">
        <NuxtLink to="https://de.linkedin.com/in/loisbegue"><Icon name="tabler:brand-linkedin" class="h-6 w-6" /></NuxtLink>
        <NuxtLink to="https://github.com/khatastroffik"><Icon name="tabler:brand-github" class="h-6 w-6" /></NuxtLink>
      </div>
    </aside>
  </footer>
</template>
