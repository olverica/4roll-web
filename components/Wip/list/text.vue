<template>
  <div 
    class="list_text list_item"
    :class="{
      'list_item-dropdown': dropdown,
      'list_item-closed': dropdown && closed}"
    @click="onClick">

    <div class="list_item_header">
      <p class="list_item_title">{{ title }} 
        <i class="list_item_info">({{ titleInfo }})</i>
      </p>
      
      <p class="list_item_hint" v-if="hint">{{ hint }} <i class="list_item_icon">placeholder</i></p>
      <controls-checkbox v-if="checkbox"/>
    </div>
    <p class="list_item_description">{{ description }}</p>
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

    titleInfo: {
      default: "",
      type: String as PropType<string>,
    },

    hint: {
      default: null,
      type: String as PropType<string|null>,
    },

    description: {
      default: false,
      type: String as PropType<string>,
    },

    checkbox: {
      default: false,
      type: Boolean as PropType<boolean>,
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
      console.log(123);
      this.closed = !!!this.closed;
    }
  }
});
</script>