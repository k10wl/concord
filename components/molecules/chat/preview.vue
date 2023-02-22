<template>
  <div class="group relative rounded hover:bg-gray-600 hover:text-gray-200">
    <NuxtLink
      :to="`/chanels/${chat.chanelId}/${chat.id}`"
      class="rounded"
      active-class="bg-gray-700 flex"
    >
      <AtomsCard class="flex-1">
        <AtomsAvatarInitials
          :avatar="anotherMember?.avatar"
          :name="anotherMember?.name"
          :aria-label="anotherMember?.name"
        />
        <p class="flex-1 truncate">
          {{ chatName }}
        </p>
      </AtomsCard>
    </NuxtLink>

    <button
      type="button"
      class="invisible absolute top-1/2 right-5 flex h-4 w-4 shrink-0 -translate-y-1/2 items-center group-focus-within:visible group-hover:visible"
      @click="($event) => $event.stopPropagation()"
    >
      <IconsClose class="fill-gray-400 hover:fill-gray-200" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { currentUserId } from '~/MOCKS'
import { Chat } from '#graphql/resolver'

interface Props {
  chat: Chat
}

const props = defineProps<Props>()

const anotherMember = props.chat.users.find(
  (user) => user?.id !== currentUserId,
)

const chatName =
  props.chat.users?.length > 2
    ? props.chat.users.map((user) => user?.name).join(', ')
    : anotherMember?.name
</script>
