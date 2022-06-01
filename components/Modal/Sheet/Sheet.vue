<template>
  <div class="sheet_body" :style="{top: top}">

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
      return this.interactionHandler ? this.interactionHandler.position(): 0;
    }
  }
});
</script>