<template>
  <div 
    class="list_heading list_item"
    :class="{
      'list_item-dropdown': dropdown,
      'list_item-closed': closed && dropdown}"
    @click="onClick">

    <div class="list_item_header">
      <p class="list_item_title">{{ title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    title:{
      default: "",
      type: String as PropType<string>,
    },

    dropdown:{
      default: false,
      type: Boolean as PropType<boolean>,
    },
  },

  data() {
    return {
      closed: false
    }
  },

  methods: {
    onClick() {
      this.closed = !!!this.closed;
    }
  }
});
</script>