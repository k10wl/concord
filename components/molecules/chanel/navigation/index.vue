<template>
  <MoleculesChanelNavigationBase
    :to="`/chanels/${chanel.id}`"
    :selected="
      new RegExp(`^/chanels/${props.chanel.id}`, 'gi').test($route.fullPath)
    "
    class="relative"
  >
    <div
      class="absolute inset-x-0 m-auto flex h-full w-full items-center justify-center"
    >
      {{ initials }}
    </div>
    <AtomsAvatar
      :src="chanel.img"
      :aria-label="chanel.name"
      class="scale-105"
    />
  </MoleculesChanelNavigationBase>
</template>

<script setup lang="ts">
import { Chanel } from '~~/types'

interface Props {
  chanel: Chanel
}

const props = withDefaults(defineProps<Props>(), {})

const nameFirstLetters = props.chanel.name.match(/(^.|\s.)/gi)
const initials = nameFirstLetters?.join('').replace(/\s/gi, '') || ''
</script>
