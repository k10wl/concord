<template>
  <NuxtLink>
    <AtomsCard
      @mouseover="isButtonShow = true"
      @mouseleave="isButtonShow = false"
      @focus="() => {}"
      @blur="() => {}"
    >
      <AtomsAvatarInitials
        :avatar="anotherMember?.avatar"
        :name="anotherMember?.name"
        :aria-label="anotherMember?.name"
      />
      <p class="flex-1 truncate">
        {{ chatName }}
      </p>
      <div
        v-if="isButtonShow"
        class="flex h-[16px] w-[16px] shrink-0 items-center"
      >
        <IconsClose />
      </div>
    </AtomsCard>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Chat } from '~~/types'
import { currentUserId } from '~~/constants'

interface Props {
  chat: Chat
}

const props = defineProps<Props>()
const isButtonShow = ref(false)

const anotherMember = props.chat.members.find(
  (member) => member.id !== currentUserId,
)

const chatName =
  props.chat.members?.length > 2
    ? props.chat.members.map(({ name }) => name).join(', ')
    : anotherMember?.name
</script>

<style scoped style="scss">
.router-link-exact-active > div {
  @apply bg-gray-700 text-gray-200;
}
</style>
