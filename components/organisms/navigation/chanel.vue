<template>
  <aside class="bg-gray-900">
    <nav class="flex grow-0 basis-16 flex-col gap-2 p-2">
      <MoleculesChanelNavigationMe />

      <div aria-hidden="true" class="mx-2 border-b border-gray-700" />

      <MoleculesChanelNavigation
        v-for="(chanel, index) in CHANELS_MOCK"
        :key="index"
        :chanel="chanel"
      />
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { Chanel } from '~~/types'

const CHANELS_MOCK: Chanel[] = [
  { id: '1', name: 'one!', img: 'https://picsum.photos/id/235/200/200' },
  { id: '2', name: 'T Wo!', img: 'https://picsum.photos/id/234/200/200' },
  { id: '3', name: 'thr33' },
  { id: '4', name: 'f0uR!', img: 'https://picsum.photos/id/233/200/200' },
  { id: '5', name: 'f1v3 5' },
]
</script>
