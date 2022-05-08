<template>
  <div class="cell_value">
    <span class="cell_value_primary">{{ primary }}</span>
    <span class="cell_value_secondary">{{ secondary }}</span>
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