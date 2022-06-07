<template>

  <button 
    class="card card-large"
    :class="{
      'card-large-nested': nested,
      'card-large-described': described}"    
    >
    <picture v-if="!!!described" class="card_picture">
      <img src="https://i.pinimg.com/736x/d7/3b/dd/d73bdd88df21a2210fadb0e5f9e865ae.jpg">
    </picture>
    <div class="card_text">
      <h3 class="card_title">Title</h3>
      <h4 class="card_subtitle">Subtitle</h4>
    </div>
    <i class="card_icon">chevron-right</i>
  </button>

</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'

export default defineComponent({
  props: {
    nested: {
      default: false,
      type: Boolean as PropType<boolean>,
    },
    described: {
      default: false,
      type: Boolean as PropType<boolean>,
    },
  },
});
</script>