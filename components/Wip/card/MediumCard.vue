<template>

  <button class="card card-medium">
    <h3 class="card_title">
      <slot/>
    </h3>
    <i class="card_icon">{{ icon }}</i>
  </button>

</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    icon: {
      default: 'chevron-right',
      type: String as PropType<string>,
    },
  }
});
</script>