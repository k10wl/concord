<template>
  <MoleculesChanelNavigationBase
    :to="`/chanels/${chanel.id}`"
    :selected="chanelRegexp.test($route.fullPath)"
  >
    <img
      v-if="chanel.img"
      :src="chanel.img"
      :alt="chanel.name"
      :aria-label="chanel.name"
      class="pointer-events-none h-full w-full object-cover"
    />
    <div v-else class="flex h-full w-full items-center justify-center">
      {{ initials }}
    </div>
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
