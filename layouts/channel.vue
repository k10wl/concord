<template>
  <div class="grid h-full grid-cols-[256px_1fr]">
    <div class="basis-64 bg-gray-800 p-3">
      <slot name="channel" />
    </div>
    <main class="relative flex-1 bg-gray-700 p-3">
      <slot name="chat" />
    </main>
  </div>
</template>
