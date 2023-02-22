<template>
  <NuxtLayout name="channel">
    <template #channel>
      <div>channels/{{ $route.params.channel_id }}</div>
    </template>
    <template #chat>
      <NuxtPage />
    </template>
  </NuxtLayout>
</template>
