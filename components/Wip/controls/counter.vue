<template>
  <fieldset class="counter">
    <button class="counter_button counter_button-minus" @click="onMinus">
      minus
    </button>

    <input class="counter_input" type="number" :value="value">

    <button class="counter_button counter_button-plus" @click="onPlus">
      plus
    </button>
  </fieldset>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      value: 0
    }
  },

  methods: {
    onMinus() {
      this.value--;
    },

    onPlus() {
      this.value++;
    }
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