<template>
  <div
    class="flex aspect-square select-none items-center justify-center rounded-xl duration-150 ease-out hover:scale-110"
    :class="props.class"
  >
    <span class="truncate">
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
})
</script>
