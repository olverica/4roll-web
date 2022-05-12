<template>
  <viewport class="viewport">

    <div class="modals">
    </div>

    <div class="navigation">

    </div>
  </viewport>


  <nuxt-page class="page"/>
</template>

<script lang="ts">
import Viewport from '~/components/Layout/Viewport.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  components: { Viewport },
});
</script>

<style lang="sass">

.viewport
  position: fixed
  width: 428px

.modals
  position: absolute
  height: 100%
  width: 100%
  z-index: 2

.page
  overflow-y: scroll
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
  overflow-y: scroll
  height: auto

</style>