<template>
  <div class="relative h-[30px] w-[30px]">
    <div
      v-if="!avatar"
      class="flex h-full w-full shrink-0 items-center justify-center rounded-[50%] bg-blue-600 text-gray-200"
    >
      {{ initials }}
    </div>
    <AtomsAvatar
      v-else
      :src="avatar"
      class="h-full w-full shrink-0 rounded-[50%]"
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
