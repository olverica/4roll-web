<template>
  <div class="cell_values cell_values-marked">
    <span class="cell_value-primary">{{ primary }}</span>
    <i class="cell_mark"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    primary: {
      default: 0,
      type: Number as PropType<number>
    }
  }
});
</script>