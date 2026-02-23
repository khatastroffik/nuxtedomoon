<template>
  <div class="flex min-h-screen min-w-screen flex-col items-center gap-4 bg-base-200 p-4 text-base-content">
    <div class="navbar w-full max-w-7xl rounded-lg border border-base-300 bg-base-100 px-4 text-base-100">
      <div class="navbar-start">
        <Brand />
      </div>
      <div class="navbar-end gap-4">
        <ThemeSwap />
        <Avatar />
      </div>
    </div>
    <div class="prose prose-base w-full max-w-7xl flex-1">
      <slot>
        <BaamOida />
      </slot>
    </div>
  </div>
</template>
