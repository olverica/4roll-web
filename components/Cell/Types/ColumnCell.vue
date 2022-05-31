<template>
  <button class="cell cell-column">

    <div class="cell_heading">
      <h3 class="cell_title"> {{ title }} </h3>
      <i class="cell_icon">{{ icon }} </i>
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