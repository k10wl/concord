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
    <ul v-if="result" class="grid gap-1">
      <li v-for="chat in result.chats" :key="chat.id">
        <MoleculesChatPreview :chat="chat" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { queryChatsPreview } from '~/api'
import { CHATS_MOCK } from '~/MOCKS'

const { result } = useQuery(queryChatsPreview, {
  ids: CHATS_MOCK.map((mock) => mock.id),
})
</script>
