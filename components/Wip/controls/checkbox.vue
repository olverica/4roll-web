<template>
  <button 
    class="checkbox"
    :class="{
      'checkbox-active': checked,
      'checkbox-failed': failled,
      'checkbox-rounded': round}"
    @click="onClick">
  </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    failled: {
      default: false,
      type: Boolean as PropType<boolean>,
    },

    round: {
      default: false,
      type: Boolean as PropType<boolean>,
    },
  },

  data() {
    return {
      checked: false
    }
  },

  methods: {
    onClick() {
      this.checked = !!!this.checked;
    }
  }
});
</script>