<template>
  <div 
    class="viewport" 
    :style="{height: height + 'px'}">

    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data() {
    return {
      height: 100
    }
  },

  mounted() {
    this.computeHeight();
    window.addEventListener('resize', this.computeHeight);
  },

  unmounted() {
    window.removeEventListener('resize', this.computeHeight);
  },

  methods: {
    computeHeight() {
      this.height = window.innerHeight;
    }
  }
});
</script>
