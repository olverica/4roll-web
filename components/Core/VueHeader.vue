<template>
  <div class="header">
    <h1 class="header_name">
      <slot/>
    </h1>

    <button class="header_button" @click="onClick">cross</button>
  </div>
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