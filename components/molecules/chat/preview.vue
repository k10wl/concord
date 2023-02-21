<template>
  <div
    class="relative overflow-hidden rounded hover:bg-gray-600 hover:text-gray-200"
  >
    <NuxtLink
      :to="`/chanels/${chat.chanelId}/${chat.id}`"
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
      class="absolute top-1/2 right-5 flex h-4 w-4 shrink-0 -translate-y-1/2 items-center"
      @click="($event) => $event.stopPropagation()"
    >
      <IconsClose class="fill-gray-400 hover:fill-gray-200" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Chat } from '~~/types'
import { currentUserId } from '~~/constants'

interface Props {
  chat: Chat
}

const props = defineProps<Props>()

const anotherMember = props.chat.members.find(
  (member) => member.id !== currentUserId,
)

const chatName =
  props.chat.members?.length > 2
    ? props.chat.members.map(({ name }) => name).join(', ')
    : anotherMember?.name
</script>
