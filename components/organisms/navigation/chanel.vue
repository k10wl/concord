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
import { CHANELS_MOCK } from '~~/constants'
</script>
