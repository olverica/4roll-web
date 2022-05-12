<template>
  <div class="viewport">

    <div class="modals">

    </div>

    <nuxt-page class="page"/>

    <div class="navigation">

    </div>
  </div>
</template>

<style lang="sass">

.viewport
  position: relative
  width: 428px
  height: 100vh

.modals
  position: absolute
  height: 100%
  width: 100%
  z-index: 2

.page
  height: 100%
  overflow-y: scroll
  z-index: 0

.navigation
  position: absolute
  width: 100%
  bottom: 0
  z-index: 1

.page::-webkit-scrollbar
  display: none



</style>