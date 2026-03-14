<template>
  <div class="flex min-h-screen min-w-screen flex-col items-center gap-2 bg-base-200 p-4 text-base-content">
    <div class="navbar z-50 w-full max-w-7xl rounded-lg border border-base-300 bg-base-100 px-4 text-base-100 ">
      <div class="navbar-start">
        <Brand />
      </div>
      <div class="navbar-center text-base-content">
        <PagesMenu />
      </div>

      <div class="navbar-end gap-4">
        <ThemeSwap class="text-base-content hover:text-accent" />
        <Avatar />
      </div>
    </div>
    <Breadcrumbs class="w-full max-w-7xl border-amber-200" />
    <div class="prose w-full max-w-7xl flex-1 ">
      <slot>
        <BaamOida />
      </slot>
    </div>
    <PagesFooter />
  </div>
</template>
