<template>
  <button class="cell cell-row">
    <p class="cell_title"><i class="cell_icon">{{ icon }}</i>{{ title }}</p>

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