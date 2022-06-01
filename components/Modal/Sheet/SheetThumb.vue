<template>
  <span 
    class="sheet_thumb"
    @touchcancel="onTouchCancel"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd">
  </span>
</template> 

<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  props: {
    interactionHandler: {
      required: true,
      type: Object
    }
  },

  methods: {
    onTouchCancel(event: TouchEvent) {
      this.onTouchEnd(event);
    },

    onTouchEnd(rawEvent: TouchEvent) {
      let fingerAt = this.computePosition(rawEvent);
      this.interactionHandler.onTouchRelease(fingerAt);
    },

    onTouchMove(rawEvent: TouchEvent) {
      let fingerAt = this.computePosition(rawEvent);
      this.interactionHandler.onTouchMove(fingerAt);
    },

    onTouchStart(rawEvent: TouchEvent) {
      let fingerAt = this.computePosition(rawEvent);
      this.interactionHandler.onTouchStart(fingerAt);
    },

    computePosition(event: TouchEvent): number {
      return event.touches[0] ? event.touches[0].clientY : 0;
    },
  }
});
</script>