<template>
  <div class="grid h-screen grid-cols-[64px_256px_1fr]">
    <div class="grow-0 basis-16 bg-gray-900 p-2">
      <NavigationCard class="bg-red-600">Concord</NavigationCard>
      <ul>
        <li></li>
      </ul>
    </div>
    <nav class="basis-64 bg-gray-800"></nav>
    <main class="flex-1 bg-gray-700">
      <slot />
    </main>
  </div>
</template>
