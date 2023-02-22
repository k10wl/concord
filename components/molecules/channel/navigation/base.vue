<template>
  <NuxtLink
    class="group overflow-hidden rounded-[50%] bg-gray-800 transition-all ease-in-out hover:rounded-2xl hover:bg-blue-600 active:translate-y-0.5"
    active-class="!rounded-2xl !bg-blue-600"
  >
    <AtomsCenteredSquare>
      <slot />
    </AtomsCenteredSquare>
  </NuxtLink>
</template>
