<template>

    <div class="title">
      <h2 class="title_text">
        <slot/>
      </h2>
      <button class="title_button" v-if="button">{{ button }}</button>
    </div>

</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    button: {
      default: null,
      type: String as PropType<string|null>,
    },
  },
});
</script>