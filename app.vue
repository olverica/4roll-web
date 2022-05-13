<template>
  <div class="viewport">

    <nuxt-page class="page"/>

    <div class="navigation">
      <div style="height: 100px; width: 100%; background: red;">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({

});
</script>

<style lang="sass">

.viewport
  position: fixed
  overflow-y: hidden
  width: 428px
  height: 100%

.page
  overflow-y: scroll
  height: 100%
  z-index: 0

.navigation
  position: absolute
  width: 100%
  bottom: 0
  z-index: 1

.page::-webkit-scrollbar
  display: none

#__nuxt
  width: auto
  overflow-y: hidden
  height: auto

</style>