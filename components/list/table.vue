
<template>
  <div class="list_table list_item">
    <div class="list_item_header">
      <p class="list_item_title">{{ title }}
        <i class="list_item_info">{{ titleInfo }}</i>
      </p>
      
      <p v-if="hint" class="list_item_hint"> {{ hint}} <i class="list_item_icon">placeholder</i></p>
      <controls-checkbox/>
    </div>
    <div class="list_item_column">
      <div class="list_item_row">
        <b>Name:</b>
        <i>placeholder</i>
        <p>value</p>
      </div>
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

    titleInfo: {
      default: "",
      type: String as PropType<string>,
    },

    hint: {
      default: null,
      type: String as PropType<string|null>,
    },
  }
});
</script>