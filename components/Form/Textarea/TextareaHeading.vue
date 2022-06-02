<template>
  <div class="textarea_heading">
    <h3 class="textarea_title">{{ title }}</h3>
    <small class="textarea_hint">{{ hint }}</small>
    <span class="textarea_counter">128/256</span>

    <button 
      class="textarea_button"
      @click.stop="onToggleClick">
      chevron-down
    </button>
  </div>
</template>


<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    title: {
      default: '',
      type: String as PropType<string>
    },

    hint: {
      default: '',
      type: String as PropType<string>
    },
  },

  methods: {
    onToggleClick(): void {
      this.$emit('toggle');
    }
  }
});
</script>