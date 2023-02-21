<template>
  <div class="relative h-7 w-7">
    <div
      v-if="!avatar"
      class="flex h-full w-full shrink-0 items-center justify-center rounded-full bg-blue-600 text-gray-200"
    >
      {{ initials }}
    </div>
    <AtomsAvatar
      v-else
      :src="avatar"
      class="h-full w-full shrink-0 rounded-full"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  avatar?: string
  name?: string
}

const props = defineProps<Props>()
const nameFirstLetters = props.name
  ?.match(/(^.|\s.)/gi)
  ?.filter((_, i) => i <= 1)

const initials = nameFirstLetters?.join('').replace(/\s/gi, '') || ''
</script>
