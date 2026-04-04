<script lang="ts" setup>

</script>

<template>
  <footer class="footer-center mb-4 footer max-w-7xl py-4 sm:footer-horizontal" role="contentinfo" aria-label="Footer containing copyright and links to external profile pages">
    <aside>
      <div class="flex w-full max-w-7xl flex-row items-center justify-center gap-4">
        <NuxtLink
          class="hover:text-accent"
          to="https://de.linkedin.com/in/loisbegue"
          aria-label="visit my linkedin profile page"
          target="_blank">
          <Icon name="tabler:brand-linkedin" class="h-6 w-6" />
        </NuxtLink>
        <NuxtLink
          class="hover:text-accent"
          to="https://github.com/khatastroffik"
          aria-label="visit my github profile page"
          target="_blank">
          <Icon name="tabler:brand-github" class="h-6 w-6" />
        </NuxtLink>
      </div>
      <p>
        Copyright © {{ new Date().getFullYear() }} - All right reserved - Loïs Bégué aka <Khatastroffik class="inline-block" />
        <br>
        Open Source Portfolio Design <NuxtLink class="hover:text-accent" to="https://github.com/khatastroffik/nuxtedomoon" aria-label="Nuxtedo Moon Portfolio Template">&laquo;&nbsp;Nuxtedo Moon&nbsp;&raquo;</NuxtLink>
      </p>
    </aside>
  </footer>
</template>
