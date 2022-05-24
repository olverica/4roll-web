<template>
  <div 
    class="sheet_body"
    :style="{'top': top, 'transition': transition }">

    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  props: {
    interactionHandler: {
      required: true,
      type: Object
    },
  },

  computed: {
    top(): string {
      return this.position > 0 ? this.position + 'px': '0';
    },

    position(): number {
      return this.interactionHandler ?
        this.interactionHandler.position() - this.interactionHandler.affectedTo(): 0;
    },

    transition(): string {
      return this.smooth ? `top ${this.delay}ms`: '';
    },

    smooth(): boolean {
      return this.interactionHandler && this.interactionHandler.smooth();
    },
    
    delay(): number {
      return this.interactionHandler ? this.interactionHandler.delay(): 0;
    },
  }
});
</script>