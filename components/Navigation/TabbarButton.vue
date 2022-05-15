<template>
  <button 
    class="tabbar_button"
    :class="{'tabbar_button-active': active}">

    <i>{{ icon }}</i>
    <p>{{ caption }}</p>
  </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'


export default defineComponent({
  props: {
    active:{
      default: false,
      type: Boolean as PropType<boolean>,
    },

    icon:{
      default: 'placeholder',
      type: String as PropType<string>,
    },

    caption: {
      default: 'O___O',
      type: String as PropType<string>,
    }
  }
});
</script>