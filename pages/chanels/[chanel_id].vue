<template>
  <NuxtLayout name="channel">
    <template #channel>
      <div>chanels/{{ $route.params.chanel_id }}</div>
    </template>
    <template #chat>
      <NuxtPage />
    </template>
  </NuxtLayout>
</template>
