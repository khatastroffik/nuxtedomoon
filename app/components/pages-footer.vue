<script lang="ts" setup>

</script>

<template>
  <footer class="footer-center mb-4 footer max-w-7xl py-4 sm:footer-horizontal" role="contentinfo" aria-label="Footer containing copyright and links to external profile pages">
    <aside>
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved by Loïs Bégué aka <Khatastroffik class="inline-block" /></p>
      <div class="flex w-full max-w-7xl flex-row items-center justify-center gap-4">
        <NuxtLink to="https://de.linkedin.com/in/loisbegue" aria-label="visit my linkedin profile page"><Icon name="tabler:brand-linkedin" class="h-6 w-6" /></NuxtLink>
        <NuxtLink to="https://github.com/khatastroffik" aria-label="visit my github profile page"><Icon name="tabler:brand-github" class="h-6 w-6" /></NuxtLink>
      </div>
    </aside>
  </footer>
</template>
