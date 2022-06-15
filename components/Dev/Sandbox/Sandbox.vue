<template>
  <section class="sandbox">
    
    <vue-header @close="close">Sandbox</vue-header>

    <div class="sanbox_body">
      <dev-console/>
    </div>

    <vue-button @click="showShit">
      show shit
    </vue-button>

  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ModalService from 'App/Modal/ModalService';
import DevConsole from 'Components/Dev/Console/DevConsole.vue'
import VueButton from 'Components/Core/VueButton.vue'
import VueHeader from 'Components/Core/VueHeader.vue'
import TempSheet from '../../Wip/TempSheet.vue';


export default defineComponent({
  components: { VueHeader, VueButton, DevConsole},

  inject: ['$modals'],

  computed: {
    modals(): ModalService {
      if (!!!this.$modals)  
        throw Error('Dependency not injecteds');

      return this.$modals;
    }
  },

  methods: {
    showShit() {
      this.modals.showSheet(TempSheet);
      this.close();
    },


    close() {
      this.$emit('close')
    }
  }
});
</script>

<style lang="sass">

.sandbox
  gap: 20px
  display: flex
  flex-direction: column
  padding: 40px 20px

  position: fixed
  top: 0
  z-index: 10

  height: 100%
  max-width: inherit
  width: stretch

  background: #F7F7F7
  
.sandbox .header_name
  color: #393E46

.sandbox .header_button
  background: #EEEEEE

.sandbox .button
  background: #EEEEEE
  color: #929AAB
  mix-blend-mode: normal

.sanbox_body
  display: flex
  gap: 20px

  flex-grow: 1
  flex-direction: column
  align-items: flex-end
  
  overflow-y: overlay
    
</style>