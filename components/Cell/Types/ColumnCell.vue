<template>
  <button class="cell cell-column">
    <p class="cell_title">{{ title }} <i class="cell_icon">{{ icon }}</i></p>

    <slot/>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'


export default defineComponent({
  props: {
    title: {
      required: true,
      type: String as PropType<string>
    },
    
    color: {
      default: null,
      type: String as PropType<string|null>
    },

    icon: {
      default: 'placeholder',
      type: String as PropType<string>
    }
  }
});
</script>