<template>
  <div class="flex min-h-screen w-full max-w-7xl min-w-screen flex-col items-center gap-2 bg-base-200 px-8 text-base-content">
    <header class="navbar z-50 mt-4 max-w-7xl rounded-lg border border-base-300 bg-base-100 px-4 text-base-100">
      <div class="navbar-start">
        <Brand />
      </div>
      <div class="navbar-center text-base-content">
        <PagesMenu />
      </div>
      <div class="navbar-end gap-4">
        <ThemeSwap class="text-base-content hover:text-accent" />
      </div>
    </header>
    <Breadcrumbs />
    <Prosit class="min-h-full grow">
      <slot />
    </Prosit>
    <PagesFooter />
  </div>
</template>
