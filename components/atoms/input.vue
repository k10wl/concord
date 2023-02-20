<template>
  <input
    :value="modelValue"
    class="rounded-[2px] border-none bg-gray-900 px-2 py-1 text-[14px] outline-0 outline-offset-0"
    @input="update"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: String
}
defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const update = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
