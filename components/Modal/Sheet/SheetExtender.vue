<template>
  <div :style="{ width: '100%', height: innerHeight}">
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
      return this.interactionHandler ? this.interactionHandler.position() : 0;
    }
  }
});
</script>