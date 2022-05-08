<template>
  <div 
    class="checkBox"
    :class="{
      'checkBox-active': checked,
      'checkBox-fail': failled,
      'checkBox-round': round}"
    @click="onClick">
  </div>
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