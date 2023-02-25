<template>
  <div>
    <p>friends</p>
    <p v-for="user in data?.users" :key="user.id" if="data?.users">
      {{ user.name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useAsyncQuery } from '@nuxtjs/apollo'
import { queryUsersPreview } from '~~/api/queries/usersPreview'

const { data } = await useAsyncQuery(queryUsersPreview)
console.log(data)
</script>
