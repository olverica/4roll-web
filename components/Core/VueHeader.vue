<template>
  <header class="header">

    <h1 class="header_text">
      <slot/>
    </h1>

    <i class="header_icon" v-if="icon">{{ icon }}</i>

    <button class="header_button" @click="onClick">{{ button }}</button>
  </header>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'


export default defineComponent({
  props: {
    icon: {
      default: null,
      type: String as PropType<string|null>,
    },
    button: {
      default: 'cross',
      type: String as PropType<string>,
    }
  },

  methods: {
    onClick() {
      this.$emit('close');
    }
  }
});


</script>