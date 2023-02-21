<template>
  <MoleculesChanelNavigationBase
    to="/chanels/me"
    title="private messages"
    aria-label="private messages"
    :selected="/^\/chanels\/me.*/gi.test($route.path)"
  >
    <AtomsLogoAsAvatar />
  </MoleculesChanelNavigationBase>
</template>
