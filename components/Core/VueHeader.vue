<template>
  <header class="header">

    <h1 class="header_text">
      <slot/>
    </h1>
    <!-- <i class="header_icon">placeholder</i> -->

    <button class="header_button" @click="onClick">cross</button>
  </header>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'


export default defineComponent({
  methods: {
    onClick() {
      this.$emit('close');
    }
  }
});
</script>