<template>
  <div :style="{
    width: '100%',
    height: innerHeight,
    transition: transition}">
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
    innerHeight(): string {
      return this.position < 0 ? -this.position + 'px' : '0px';
    },

    position(): number {
      return this.interactionHandler ?
        this.interactionHandler.position() - this.interactionHandler.affectedTo(): 0;
    },

    transition(): string {
      return this.smooth ? `height ${this.delay}ms`: '';
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