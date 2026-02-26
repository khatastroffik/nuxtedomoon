<template>
  <div class="prose flex min-h-dvh min-w-full flex-col items-center justify-center gap-y-6 bg-neutral px-8 text-2xl text-neutral-content">
    <ThemeSwap class="hover:text-accent" />
    <div>This is a <Khatastroffik /> error!</div>
    <div class="max-w-prose text-9xl font-extrabold text-accent">
      <slot name="header">Something went wrong here</slot>
    </div>

    <div class="max-w-prose text-5xl font-semibold">
      <slot>This shouldn't have happened</slot>
    </div>

    <div class="max-w-prose text-justify">
      <slot name="details" />
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
