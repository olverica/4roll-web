<template>
  <button 
    class="tabbar_counter"
    @click="onClick">

    <p class="tabbar_button_icon">{{ countLine }}</p>
    <p class="tabbar_button_text">{{ message }}</p>
  </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    message: {
      default: '',
      type: String as PropType<string>,
    },
    
    limit: {
      required: true,
      type: Number as PropType<number>,
    }
  },

  data() {
    return {
      position: 0
    }
  },

  computed: {
    countLine(): string {
      return `${this.position}/${this.limit}`;
    }
  },

  methods: {
    onClick() {
      this.position++;
    }
  }
});
</script>