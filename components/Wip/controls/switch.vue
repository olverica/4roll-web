<template>
  <button 
    class="switch"
    :class="{'switch-active': active}"
    @click="onClick">
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      active: false
    }
  },

  methods: {
    onClick() {
      this.active = !!!this.active;
    }
  }
});
</script>