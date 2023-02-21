<template>
  <div>
    <div
      class="flex items-center justify-between p-3 font-semibold text-gray-400 hover:text-gray-200"
    >
      <h3 class="text-xs uppercase">Direct messages</h3>
      <button type="button" class="flex h-4 w-4 items-center">
        <IconsAdd />
      </button>
    </div>
    <ul>
      <li v-for="chat in CHAT_MOCK" :key="chat.id">
        <MoleculesChatPreview :chat="chat" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { CHAT_MOCK } from '~~/constants'
</script>
