<template>
  <sheet-layout title="Suuuuus" @close="close">

    <template #content>
      <button class="sheet_tempBlock"></button>
      <button class="sheet_tempBlock"></button>
      <button class="sheet_tempBlock"></button>
      <button class="sheet_tempBlock"></button>
      <button class="sheet_tempBlock"></button>
      <button class="sheet_tempBlock"></button>
      <button class="sheet_tempBlock"></button>
      <button class="sheet_tempBlock"></button>
      <button class="sheet_tempBlock"></button>
      <button class="sheet_tempBlock"></button>
      <button class="sheet_tempBlock"></button>
      <button class="sheet_tempBlock"></button>
      <slot/>
    </template>

    <template  #footer>
      <vue-button @click="close">button</vue-button>
    </template>

  </sheet-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SheetLayout from 'Components/Modal/Sheet/SheetLayout.vue'
import VueButton from 'Components/Core/VueButton.vue'


export default defineComponent({
  components: { SheetLayout, VueButton },

  methods: {
    close() {
      this.$emit('close')
    }
  }
});
</script>