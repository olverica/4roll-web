<template>
  <section class="sheet">
    <div class="sheet_body">
      
      <vue-header @close="close">Titttle</vue-header>

      <div class="sheet_content">
        <div class="sheet_tempBlock"></div>
        <div class="sheet_tempBlock"></div>
        <div class="sheet_tempBlock"></div>
        <div class="sheet_tempBlock"></div>
        <div class="sheet_tempBlock"></div>
        <div class="sheet_tempBlock"></div>
        <div class="sheet_tempBlock"></div>
        <div class="sheet_tempBlock"></div>
      </div>

      <vue-button @click="close">button</vue-button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import VueHeader from '~/components/Core/VueHeader.vue'
import VueButton from '~/components/Core/VueButton.vue'


export default defineComponent({
  components: { VueHeader, VueButton },

  methods: {
    close() {
      this.$emit('close')
    }
  }
});
</script>