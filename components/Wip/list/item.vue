<template>
  <button 
    class="tabbar_button" 
    :disabled="disabled">

    <i class="tabbar_button_icon">placeholder</i>
    <p class="tabbar_button_text">{{ message }}</p>
  </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    disabled:{
      default: false,
      type: Boolean as PropType<boolean>,
    },

    message: {
      default: '',
      type: String as PropType<string>,
    }    
  } 
});
</script>