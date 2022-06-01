<template>
  <span 
    ref="thumb"
    class="sheet_thumb"
    @touchcancel="onTouchCancel"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd">
  </span>
</template> 

<script lang="ts">
import SheetInteractionHandler from '~/services/Animation/Sheet/SheetInteractionHandler'
import EventHandler from '~/services/Animation/Sheet/Behaviour/EventHandler'
import {PropType, defineComponent} from 'vue'


export default defineComponent({
  props: {
    interactionHandler: {
      required: true,
      type: Object
    },

    eventHandler: {
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
      let event = this.eventHandler.released(fingerAt);

      this.interactionHandler.onTouchRelease(event);
    },

    onTouchMove(rawEvent: TouchEvent) {
      let fingerAt = this.computePosition(rawEvent);
      let event = this.eventHandler.moved(fingerAt);

      this.interactionHandler.onTouchMove(event);
    },

    onTouchStart(rawEvent: TouchEvent) {
      console.log(this.margin);
      let fingerAt = this.computePosition(rawEvent);
      let event = this.eventHandler.touched(fingerAt);

      this.interactionHandler.onTouchStart(event);
    },

    computePosition(event: TouchEvent): number {
      return event.touches[0] ? event.touches[0].clientY : 0;
    },
  }
});
</script>