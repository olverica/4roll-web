<template>
  <sheet-layout title="Suuuuus" @close="close">

    <template #content>
      <div class="sheet_tempBlock"></div>
      <div class="sheet_tempBlock"></div>
      <div class="sheet_tempBlock"></div>
    </template>

    <template  #footer>
      <vue-button @click="close">button</vue-button>
    </template>

  </sheet-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SheetLayout from '~/components/Modal/Sheet/SheetLayout.vue'
import VueButton from '~/components/Core/VueButton.vue'


export default defineComponent({
  components: { SheetLayout, VueButton },

  methods: {
    close() {
      this.$emit('close')
    }
  }
});
</script>