<template>
  <div class="cell_values">
    <span class="cell_value-primary">{{ primary }}</span>
    <span class="cell_value-secondary">{{ secondary }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    primary: {
      default: 0,
      type: [String, Number] as PropType<number|string>
    },
    
    secondary: {
      default: 0,
      type: [String, Number] as PropType<number|string>
    }
  }
});
</script>