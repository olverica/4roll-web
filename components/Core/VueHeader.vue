<template>
  <header class="header">

    <div class="header_content">
      <h1 class="header_text">
        <slot/>
      </h1>
      <!-- <i class="header_icon">placeholder</i> -->
    </div>

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