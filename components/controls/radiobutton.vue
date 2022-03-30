<template>
  <div 
    class="radioButton"
    :class="{'radioButton-active': active}"
    @click="onClick">
  </div>
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