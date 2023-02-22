<template>
  <MoleculesChannelNavigationBase
    :to="`/channels/${channel.id}`"
    :area-label="channel.name"
    class="relative"
  >
    <div class="absolute inset-0 grid place-items-center">
      {{ initials }}
    </div>
    <AtomsAvatar :src="channel.avatar" class="scale-105" />
  </MoleculesChannelNavigationBase>
</template>

<script setup lang="ts">
import { Channel } from '#graphql/resolver'

interface Props {
  channel: Channel
}

const props = withDefaults(defineProps<Props>(), {})

const nameFirstLetters = props.channel.name.match(/(^.|\s.)/gi)
const initials = nameFirstLetters?.join('').replace(/\s/gi, '') || ''
</script>
