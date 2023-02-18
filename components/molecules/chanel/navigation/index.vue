<template>
  <MoleculesChanelNavigationBase
    :to="`/chanels/${chanel.id}`"
    :selected="chanelRegexp.test($route.fullPath)"
    class="relative"
  >
    <div
      class="absolute inset-x-0 m-auto flex h-full w-full items-center justify-center"
    >
      {{ initials }}
    </div>
    <img
      :src="chanel.img"
      alt=""
      :aria-label="chanel.name"
      class="pointer-events-none flex h-full w-full scale-105 items-center justify-center border-0 object-cover"
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

const chanelRegexp = new RegExp(`^/chanels/${props.chanel.id}`, 'gi')
</script>
