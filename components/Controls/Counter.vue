<template>
  <fieldset class="counter">
    <button 
      class="counter_button counter_button-minus"
      :disabled="atMinimum"
      @click="onMinus">
      minus
    </button>

    <input 
      class="counter_input" 
      type="number" 
      v-model="value">

    <button 
      class="counter_button counter_button-plus"
      :disabled="atMaximum"
      @click="onPlus">
      plus
    </button>
  </fieldset>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'


export default defineComponent({
  props: {
    field: {
      required: true,
      type: Object
    }
  },

  computed: {
    value: {
      get(): number {
        return this.field.getValue();
      },

      set(value: number): void {
        this.field.change(value);
      }
    },

    atMinimum(): boolean {
      return this.field.atMinimum();
    },

    atMaximum(): boolean {
      return this.field.atMaximum();
    },    
  },

  methods: {
    onMinus() {
      this.field.decrement();
    },

    onPlus() {
      this.field.increment();
    },
  }
});
</script>

<style lang="sass">
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0

  input[type="number"]
    -moz-appearance: none
</style>