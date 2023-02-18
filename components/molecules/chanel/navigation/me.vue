<template>
  <MoleculesChanelNavigationBase
    to="/chanels/me"
    title="private messages"
    aria-label="private messages"
    :selected="myChanelRegexp.test($route.fullPath)"
  >
    <AtomsLogoAsAvatar />
  </MoleculesChanelNavigationBase>
</template>

<script setup>
const myChanelRegexp = /^\/chanels\/me/gi
</script>
