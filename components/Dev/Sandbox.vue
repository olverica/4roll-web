<template>
  <section class="sandbox">
    
    <vue-header @close="close">Sandbox</vue-header>

    <div class="sanbox_body">
      <vue-button @click="showShit">
        show shit
      </vue-button>
    </div>

  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import ModalService from '~/services/Modal/ModalService';
import VueButton from '~/components/Core/VueButton.vue'
import VueHeader from '~/components/Core/VueHeader.vue'


export default defineComponent({
  components: { VueHeader, VueButton},

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
      this.modals.showSheet({}, {});
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
  z-index: 5

  height: 100%
  max-width: 450px
  width: -webkit-fill-available

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
  gap: 20px
  flex-grow: 1
  display: flex
  flex-direction: column-reverse
    
    
</style>