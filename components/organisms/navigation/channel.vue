<template>
  <aside class="bg-gray-900">
    <nav class="flex grow-0 basis-16 flex-col gap-2 p-2">
      <MoleculesChannelNavigationMe />

      <div aria-hidden="true" class="mx-2 border-b border-gray-700" />

      <div v-if="result?.channels" class="flex flex-col gap-2">
        <MoleculesChannelNavigation
          v-for="(channel, index) in result.channels"
          :key="index"
          :channel="channel"
        />
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { queryNavigationChannels } from '~/api'
import { CHANNELS_MOCK } from '~/MOCKS'

const { result } = useQuery(queryNavigationChannels, {
  ids: CHANNELS_MOCK.map((mock) => mock.id),
})
</script>
