<template>
  <button 
    class="button"
    :class="typeClass">

    <slot/>
    
    <i v-if="icon">{{ icon }}</i>
  </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    coloring: {
      default: 'white',
      type: String as PropType<string>,
    },
    texted: {
      default: false,
      type: Boolean as PropType<boolean>,
    },

    icon: {
      default: null,
      type: String as PropType<string|null>,
    },
  },
  computed: {
    type(): string {
      return this.texted ? 'texted': this.coloring;
    },

    typeClass(): string {
      return 'button-' + this.type;
    },
  },
});
</script>