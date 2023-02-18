<template>
  <MoleculesChanelNavigationBase
    to="/chanels/me"
    title="private messages"
    aria-label="private messages"
    :selected="myChanelRegexp.test($route.fullPath)"
  >
    <IconsLogo
      class="fill-gray-100 p-2 transition ease-in-out"
      :class="
        $route.fullPath.match(myChanelRegexp) ? 'bg-blue-600' : 'bg-gray-700'
      "
    />
  </MoleculesChanelNavigationBase>
</template>

<script setup>
const myChanelRegexp = /^\/chanels\/me/gi
</script>
