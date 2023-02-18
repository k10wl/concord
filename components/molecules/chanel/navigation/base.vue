<template>
  <NuxtLink class="group">
    <AtomsCenteredSquare
      class="rounded-[50%] bg-gray-800 text-gray-300 transition-all ease-in-out active:translate-y-px group-hover:rounded-2xl group-hover:bg-blue-700 aria-selected:rounded-2xl aria-selected:bg-blue-700"
      :aria-selected="selected"
    >
      <slot />
    </AtomsCenteredSquare>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  selected: boolean
}

defineProps<Props>()
</script>
