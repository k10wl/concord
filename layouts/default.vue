<template>
  <div class="grid h-screen grid-cols-[64px_256px_1fr]">
    <OrganismsNavigationChanel />

    <div class="basis-64 bg-gray-800"></div>

    <main class="relative flex-1 bg-gray-700 p-3">
      <slot />
    </main>
  </div>
</template>
