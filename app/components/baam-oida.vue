<template>
  <div class="prose flex min-h-screen min-w-screen flex-col items-center justify-center gap-y-8 bg-neutral text-neutral-content prose-h1:text-neutral-content">
    <ThemeSwap />
    <div>
      <slot name="header">
        <h1>
          Something went wrong here
        </h1>
      </slot>
    </div>
    <div>
      <slot>
        <div>
          This shouldn't have happened
        </div>
      </slot>
    </div>
    <div>
      <slot name="footer">
        <div class="text-xl font-black font-stretch-condensed">
          ┐(´•_•`)┌
        </div>
      </slot>
    </div>
  </div>
</template>
