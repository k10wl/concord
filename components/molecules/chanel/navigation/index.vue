<template>
  <MoleculesChanelNavigationBase
    :to="`/chanels/${chanel.id}`"
    :area-label="chanel.name"
    class="relative"
  >
    <div class="absolute inset-0 grid place-items-center">
      {{ initials }}
    </div>
    <AtomsAvatar :src="chanel.img" class="scale-105" />
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
