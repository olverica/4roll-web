<template>

  <small class="label">
    <slot/>
    <i v-if="icon">{{ icon }}</i>
  </small>

</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    icon: {
      default: null,
      type: String as PropType<string|null>,
    },
  },
});
</script>