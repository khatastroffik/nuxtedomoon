<template>
  <div class="flex min-h-screen w-full max-w-7xl min-w-screen flex-col items-center gap-2 bg-base-200 px-8 ">
    <header class="top-0 z-100 mx-auto mt-4 flex h-18 max-h-18 w-full max-w-7xl self-stretch rounded-lg border border-base-300 bg-base-100 p-4 text-base shadow-lg" aria-label="Menu bar with logo and links to internal pages">
      <div class="flex flex-1 items-center justify-between">
        <brand />
      </div>
      <div class="dropdown dropdown-end dropdown-bottom lg:hidden">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-sm hover:text-accent"
          aria-label="open or close the main menu dropdown list">
          <Icon name="tabler:menu-2" title="Menu" class="h-6 w-6 stroke-3!" />
        </div>
        <PagesMenu tabindex="-1" class="dropdown-content menu absolute z-100 w-36 flex-col rounded-box bg-base-100 p-0 shadow-sm" />
      </div>
      <div id="menu" class="not-prose hidden w-full lg:flex lg:w-auto lg:items-center">
        <PagesMenu />
      </div>
      <ThemeSwap class="text-base-content hover:text-accent" />
    </header>

    <Breadcrumbs class="z-50" />
    <Prosit class="min-h-full grow">
      <slot />
    </Prosit>
    <PagesFooter />
  </div>
</template>
