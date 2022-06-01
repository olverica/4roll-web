<template>
  <div 
    class="sheet_body"
    :class="{'sheet_body--hidden': hidden}"
    :style="{top: top}">

    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  props: {
    data: {
      required: true,
      type: Object
    },
  },

  computed: {
    
    top(): string {
      return this.position > 0 ? this.position + 'px': '0';
    },

    position(): number {
      return this.data.getPosition()
    },

    hidden(): boolean {
      return this.data.getState() === 'none';
    }
  }
});
</script>