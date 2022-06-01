<template>
  <button class="cell cell-row">
    <div class="cell_heading">
      <i class="cell_icon">{{ icon }} </i>
      <h3 class="cell_title"> {{ title }} </h3>
    </div>

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