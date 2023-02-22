<template>
  <div>
    <AtomsInput
      v-model="value"
      class="w-full"
      placeholder="Find or start a conversation"
    />

    <div aria-hidden="true" class="my-5 -mx-3 border-b border-gray-900" />

    <div class="mb-3">
      <NuxtLink to="/channels/me">
        <AtomsCard>
          <IconsFriend />
          Friends
        </AtomsCard>
      </NuxtLink>
    </div>

    <OrganismsChatDirectMessages />
  </div>
</template>

<script setup lang="ts">
const value = ref('')
</script>

<style scoped lang="scss">
.router-link-exact-active > div {
  @apply bg-gray-700 text-gray-200;
}
</style>
